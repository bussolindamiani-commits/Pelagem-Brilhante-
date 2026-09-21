import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#123F36]/8 py-3 transition-all duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-[#123F36] flex items-center justify-center text-white shadow-sm group-hover:bg-[#1F7664] transition-colors">
            <span className="text-base leading-none">🐾</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight text-[#123F36] group-hover:text-[#1F7664] transition-colors">
              PELAGEM BRILHANTE
            </span>
            <span className="text-[10px] font-medium text-[#68716E] tracking-wider uppercase -mt-0.5">
              Guia Prático de Cuidados
            </span>
          </div>
        </a>

        {/* Right Badges & Action */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#1F7664] font-medium bg-[#EDF7F3] px-3 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1F7664]" />
            <span>Garantia de 7 Dias</span>
          </div>

          <a
            id="nav-cta-btn"
            href="#planos"
            className="inline-flex items-center gap-1.5 bg-[#123F36] hover:bg-[#1F7664] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C99A56]" />
            <span>Ver Planos</span>
          </a>
        </div>
      </div>
    </header>
  );
};
