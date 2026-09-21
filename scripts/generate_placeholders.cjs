const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Create PNG buffer pure node using CRC32 and zlib
function createPng(width, height, getPixel) {
  // Signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData.writeUInt8(8, 8); // bit depth 8
  ihdrData.writeUInt8(6, 9); // RGBA
  ihdrData.writeUInt8(0, 10); // compression
  ihdrData.writeUInt8(0, 11); // filter
  ihdrData.writeUInt8(0, 12); // interlace
  const ihdr = makeChunk('IHDR', ihdrData);

  // Raw image data with 0 filter byte per scanline
  const rowSize = width * 4 + 1;
  const rawData = Buffer.alloc(rowSize * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // filter None
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getPixel(x, y, width, height);
      const pxOffset = rowOffset + 1 + x * 4;
      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a !== undefined ? a : 255;
    }
  }

  const compressedData = zlib.deflateSync(rawData);
  const idat = makeChunk('IDAT', compressedData);
  const iend = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdr, idat, iend]);
}

function makeChunk(type, data) {
  const len = data.length;
  const buf = Buffer.alloc(8 + len + 4);
  buf.writeUInt32BE(len, 0);
  buf.write(type, 4, 4, 'ascii');
  data.copy(buf, 8);
  const crc = crc32(buf.subarray(4, 8 + len));
  buf.writeUInt32BE(crc, 8 + len);
  return buf;
}

// CRC32 table
let crcTable = null;
function getCrcTable() {
  if (crcTable) return crcTable;
  crcTable = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    crcTable[n] = c;
  }
  return crcTable;
}

function crc32(buf) {
  const table = getCrcTable();
  let crc = 0 ^ (-1);
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ (-1)) >>> 0;
}

const outDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Pelagem Brilhante (Primary Mockup - Dark green #123F36 / #1F7664 with gold #C99A56 accents)
const pbPng = createPng(600, 800, (x, y, w, h) => {
  // Border radius 24px
  const cornerR = 28;
  const isCorner = (x < cornerR && y < cornerR && Math.hypot(x - cornerR, y - cornerR) > cornerR) ||
                   (x > w - cornerR && y < cornerR && Math.hypot(x - (w - cornerR), y - cornerR) > cornerR) ||
                   (x < cornerR && y > h - cornerR && Math.hypot(x - cornerR, y - (h - cornerR)) > cornerR) ||
                   (x > w - cornerR && y > h - cornerR && Math.hypot(x - (w - cornerR), y - (h - cornerR)) > cornerR);
  if (isCorner) return [0, 0, 0, 0];

  // Card border
  if (x < 6 || x > w - 6 || y < 6 || y > h - 6) return [201, 154, 86, 255]; // gold border
  if (x < 8 || x > w - 8 || y < 8 || y > h - 8) return [255, 255, 255, 60];

  // Header banner / gradient
  const ratio = y / h;
  // Gradient from dark green #123F36 to medium green #1F7664
  let r = Math.floor(18 * (1 - ratio) + 31 * ratio);
  let g = Math.floor(63 * (1 - ratio) + 118 * ratio);
  let b = Math.floor(54 * (1 - ratio) + 100 * ratio);

  // Subtle decorative book spine highlight on left
  if (x >= 12 && x <= 28) {
    const shine = Math.sin((x - 12) / 16 * Math.PI) * 40;
    r = Math.min(255, r + shine);
    g = Math.min(255, g + shine);
    b = Math.min(255, b + shine);
  }

  // Golden accent bar near top
  if (y >= 140 && y <= 146 && x > 40 && x < w - 40) return [201, 154, 86, 255];
  if (y >= 680 && y <= 684 && x > 60 && x < w - 60) return [201, 154, 86, 200];

  return [r, g, b, 255];
});
fs.writeFileSync(path.join(outDir, 'pelagem-brilhante.png'), pbPng);

// 2. Bonus 1: Alimentacao (Green mockup)
const b1Png = createPng(500, 700, (x, y, w, h) => {
  const cornerR = 24;
  const isCorner = (x < cornerR && y < cornerR && Math.hypot(x - cornerR, y - cornerR) > cornerR) ||
                   (x > w - cornerR && y < cornerR && Math.hypot(x - (w - cornerR), y - cornerR) > cornerR) ||
                   (x < cornerR && y > h - cornerR && Math.hypot(x - cornerR, y - (h - cornerR)) > cornerR) ||
                   (x > w - cornerR && y > h - cornerR && Math.hypot(x - (w - cornerR), y - (h - cornerR)) > cornerR);
  if (isCorner) return [0, 0, 0, 0];

  if (x < 5 || x > w - 5 || y < 5 || y > h - 5) return [31, 118, 100, 255];
  const ratio = y / h;
  // Deep emerald green gradient
  let r = Math.floor(20 * (1 - ratio) + 26 * ratio);
  let g = Math.floor(85 * (1 - ratio) + 125 * ratio);
  let b = Math.floor(70 * (1 - ratio) + 105 * ratio);

  if (y >= 120 && y <= 124 && x > 30 && x < w - 30) return [237, 247, 243, 220];
  return [r, g, b, 255];
});
fs.writeFileSync(path.join(outDir, 'bonus-alimentacao.png'), b1Png);

// 3. Bonus 2: Suplementos (Blue mockup with dark/deep navy tone #16365C / #205085)
const b2Png = createPng(500, 700, (x, y, w, h) => {
  const cornerR = 24;
  const isCorner = (x < cornerR && y < cornerR && Math.hypot(x - cornerR, y - cornerR) > cornerR) ||
                   (x > w - cornerR && y < cornerR && Math.hypot(x - (w - cornerR), y - cornerR) > cornerR) ||
                   (x < cornerR && y > h - cornerR && Math.hypot(x - cornerR, y - (h - cornerR)) > cornerR) ||
                   (x > w - cornerR && y > h - cornerR && Math.hypot(x - (w - cornerR), y - (h - cornerR)) > cornerR);
  if (isCorner) return [0, 0, 0, 0];

  if (x < 5 || x > w - 5 || y < 5 || y > h - 5) return [74, 126, 185, 255];
  const ratio = y / h;
  let r = Math.floor(22 * (1 - ratio) + 36 * ratio);
  let g = Math.floor(54 * (1 - ratio) + 85 * ratio);
  let b = Math.floor(92 * (1 - ratio) + 140 * ratio);

  if (y >= 120 && y <= 124 && x > 30 && x < w - 30) return [200, 225, 255, 220];
  return [r, g, b, 255];
});
fs.writeFileSync(path.join(outDir, 'bonus-suplementos.png'), b2Png);

// 4. Bonus 3: Banho, Hidratacao e Finalizacao (Beige mockup #D8C3A5 / #F7F0E6 / #C99A56)
const b3Png = createPng(500, 700, (x, y, w, h) => {
  const cornerR = 24;
  const isCorner = (x < cornerR && y < cornerR && Math.hypot(x - cornerR, y - cornerR) > cornerR) ||
                   (x > w - cornerR && y < cornerR && Math.hypot(x - (w - cornerR), y - cornerR) > cornerR) ||
                   (x < cornerR && y > h - cornerR && Math.hypot(x - cornerR, y - (h - cornerR)) > cornerR) ||
                   (x > w - cornerR && y > h - cornerR && Math.hypot(x - (w - cornerR), y - (h - cornerR)) > cornerR);
  if (isCorner) return [0, 0, 0, 0];

  if (x < 5 || x > w - 5 || y < 5 || y > h - 5) return [201, 154, 86, 255];
  const ratio = y / h;
  let r = Math.floor(180 * (1 - ratio) + 140 * ratio);
  let g = Math.floor(150 * (1 - ratio) + 115 * ratio);
  let b = Math.floor(115 * (1 - ratio) + 85 * ratio);

  if (y >= 120 && y <= 124 && x > 30 && x < w - 30) return [247, 240, 230, 240];
  return [r, g, b, 255];
});
fs.writeFileSync(path.join(outDir, 'bonus-cuidados.png'), b3Png);

console.log('Successfully generated placeholder PNGs in public/images/');
