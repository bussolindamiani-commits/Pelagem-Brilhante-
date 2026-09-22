import React from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="inicio" className="relative pt-6 pb-16 lg:pt-12 lg:pb-20 overflow-hidden bg-white text-center">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#EDF7F3]/70 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black text-[#123F36] leading-[1.15] tracking-tight mb-5 max-w-3xl">
          DEIXE SEU CÃO COM O PELO MAIS{' '}
          <span className="text-[#1F7664] underline decoration-[#C99A56] decoration-4 underline-offset-4">
            BONITO
          </span>{' '}
          <span className="text-[#1F7664]">MACIO</span> E{' '}
          <span className="text-[#1F7664]">BRILHANTE</span>
        </h1>

        {/* SubHeadline */}
        <p className="text-base sm:text-lg md:text-xl text-[#68716E] leading-relaxed max-w-2xl mb-8 font-medium">
          Descubra uma rotina simples e prática para transformar a aparência da pelagem do seu cachorro e deixá-lo com aquele pelo de dar orgulho.
        </p>

        {/* Mockup Foto */}
        <div className="w-full max-w-md sm:max-w-lg mb-8 relative flex justify-center">
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://i.imgur.com/Pe6Wr8L.png"
              alt="Mockup Pelagem Brilhante"
              width="512"
              height="460"
              className="w-full h-auto max-h-[460px] object-contain rounded-3xl transition-transform duration-300 group-hover:scale-[1.02]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="w-full max-w-md flex flex-col items-center gap-3">
          <a
            id="hero-cta-button"
            href="#planos"
            onClick={(e) => {
              e.preventDefault();
              onCtaClick?.();
            }}
            className="w-full inline-flex items-center justify-center gap-3 bg-[#123F36] hover:bg-[#1F7664] text-white text-base sm:text-lg font-black py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer text-center"
          >
            <span>QUERO MEU CÃO COM PELO BONITO</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </a>

          {/* Guarantee / Immediate access microcopy */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#68716E] font-semibold pt-1">
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#C99A56]" />
              Acesso Imediato
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1F7664]" />
              Garantia de 7 Dias
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
