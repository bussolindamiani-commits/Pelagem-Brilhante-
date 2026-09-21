import React from 'react';

export const BonusSectionCards: React.FC = () => {
  const bonusList = [
    {
      badge: '✨ BÔNUS 1 ✨',
      title: 'Alimentação para uma Pelagem Mais Bonita',
      desc: 'Descubra os nutrientes essenciais, alimentos seguros e hábitos alimentares que favorecem o brilho natural e a vitalidade da pelagem do seu cão.',
      image: 'https://i.imgur.com/Me6KeZ6.png',
      alt: 'Bônus 1: Alimentação e Pelagem',
      originalPrice: 'R$ 27',
    },
    {
      badge: '✨ BÔNUS 2 ✨',
      title: 'Guia de Suplementação Canina',
      desc: 'Entenda os principais tipos de ômegas (3 e 6), vitaminas e minerais que apoiam a barreira cutânea e a resistência dos fios contra o ressecamento.',
      image: 'https://i.imgur.com/AkeERQS.png',
      alt: 'Bônus 2: Suplementos e Pelagem',
      originalPrice: 'R$ 27',
    },
    {
      badge: '✨ BÔNUS 3 ✨',
      title: 'Banho, Hidratação e Finalização',
      desc: 'O passo a passo para higienizar sem agredir, condicionar os fios com técnicas caseiras e obter aquele acabamento brilhante e sedoso de salão.',
      image: 'https://i.imgur.com/vAziDT4.png',
      alt: 'Bônus 3: Banho e Hidratação',
      originalPrice: 'R$ 27',
    },
  ];

  return (
    <section id="bonus" className="py-16 sm:py-24 bg-[#FAFCFB] border-y border-[#123F36]/8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-black text-[#C99A56] tracking-widest uppercase block mb-2">
            ANTES DE VOCÊ CONTINUAR...
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#123F36] tracking-tight leading-snug mb-3">
            Escolhendo o <span className="text-[#1F7664] underline decoration-[#C99A56] decoration-4 underline-offset-4">PLANO COMPLETO</span> você recebe de BÔNUS todos esses MATERIAIS abaixo: 👇
          </h2>

          <p className="text-sm sm:text-base text-[#68716E] font-medium">
            Materiais práticos e complementares para cuidar de ponta a ponta da saúde e aparência do seu cão.
          </p>
        </div>

        {/* 3 Bonus Cards - Estilo inspirado na referência */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {bonusList.map((bonus, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#123F36]/10 shadow-sm hover:shadow-xl hover:border-[#1F7664]/30 transition-all duration-300 flex flex-col items-center text-center justify-between"
            >
              {/* Top part: Badge, Title & Mockup */}
              <div className="w-full flex flex-col items-center">
                {/* Badge Topo */}
                <div className="inline-flex items-center justify-center bg-[#FDF2F2] text-[#EF4444] border border-[#FCA5A5]/40 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider mb-4 shadow-2xs">
                  <span>{bonus.badge}</span>
                </div>

                {/* Título do Bônus */}
                <h3 className="text-lg sm:text-xl font-extrabold text-[#123F36] tracking-tight mb-4 min-h-[52px] flex items-center justify-center">
                  {bonus.title}
                </h3>

                {/* Imagem Mockup Centralizada */}
                <div className="w-full py-2 sm:py-4 flex items-center justify-center">
                  <img
                    src={bonus.image}
                    alt={bonus.alt}
                    className="h-52 sm:h-60 w-auto max-w-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Bottom part: Price Anchor & Description */}
              <div className="w-full pt-2">
                {/* Linha de Preço: DE: R$ 27 | HOJE: GRÁTIS */}
                <div className="my-3 py-1 flex items-center justify-center gap-2 text-sm sm:text-base font-black">
                  <span className="text-[#EF4444] line-through decoration-[#EF4444] decoration-2 opacity-90">
                    DE: {bonus.originalPrice}
                  </span>
                  <span className="text-[#123F36] font-extrabold">
                    HOJE: <span className="text-[#1F7664] font-black">GRÁTIS</span>
                  </span>
                </div>

                {/* Descrição em texto corrido e centralizado */}
                <p className="text-xs sm:text-sm text-[#68716E] leading-relaxed">
                  {bonus.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
