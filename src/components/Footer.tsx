import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D2E28] text-white/80 py-12 border-t border-white/10 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">🐾</span>
            <span className="font-extrabold text-base tracking-tight text-white">
              PELAGEM BRILHANTE
            </span>
          </div>

          <div className="flex items-center gap-6 text-white/70">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#C99A56]" />
              Checkout 100% Criptografado
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1F7664]" />
              Garantia de 7 Dias
            </span>
          </div>
        </div>

        <div className="pt-8 text-center text-white/60 space-y-4 max-w-3xl mx-auto">
          <p className="text-[11px] text-white/50">
            © {new Date().getFullYear()} Pelagem Brilhante. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
