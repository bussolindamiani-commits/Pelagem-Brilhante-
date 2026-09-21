import React from 'react';
import { Check, ArrowRight, Shield, Zap, Sparkles } from 'lucide-react';
import { MockupCard } from './MockupCard.tsx';

interface HeroProps {
  onCtaClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section id="inicio" className="relative pt-6 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-white">
      {/* Subtle background ambient warmth */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#EDF7F3]/70 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#F7F0E6]/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 self-start bg-[#EDF7F3] border border-[#1F7664]/20 text-[#123F36] text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full mb-5 shadow-xs">
              <span className="inline-block w-2 h-2 rounded-full bg-[#1F7664] animate-pulse" />
              <span>PARA QUEM AMA VER SEU CÃO BONITO E BEM CUIDADO 🐾</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-[#123F36] leading-[1.14] tracking-tight mb-5">
              DEIXE SEU CÃO COM O PELO MAIS{' '}
              <span className="text-[#1F7664] underline decoration-[#C99A56] decoration-4 underline-offset-4">
                BONITO
              </span>
              ,{' '}
              <span className="text-[#1F7664]">MACIO</span> E{' '}
              <span className="text-[#1F7664]">BRILHANTE</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#68716E] leading-relaxed max-w-2xl mb-8">
              Descubra uma rotina simples de cuidados para melhorar a aparência da pelagem e deixar seu cão com aquele pelo bonito e bem cuidado que chama atenção.
            </p>

            {/* 3 Quick Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-2 mb-8 py-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#172320]">
                <div className="w-5 h-5 rounded-full bg-[#EDF7F3] border border-[#1F7664]/30 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#1F7664] stroke-[3]" />
                </div>
                <span>Mais brilho e maciez</span>
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold text-[#172320]">
                <div className="w-5 h-5 rounded-full bg-[#EDF7F3] border border-[#1F7664]/30 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#1F7664] stroke-[3]" />
                </div>
                <span>Cuidados simples em casa</span>
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold text-[#172320]">
                <div className="w-5 h-5 rounded-full bg-[#EDF7F3] border border-[#1F7664]/30 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#1F7664] stroke-[3]" />
                </div>
                <span>Para diferentes tipos de pelagem</span>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col items-stretch sm:items-start gap-3">
              <a
                id="hero-cta-button"
                href="#planos"
                onClick={onCtaClick}
                className="group relative inline-flex items-center justify-center gap-3 bg-[#123F36] hover:bg-[#1F7664] text-white text-base sm:text-lg font-extrabold px-8 py-4 sm:py-4.5 rounded-2xl shadow-[0_12px_28px_-6px_rgba(18,63,54,0.35)] hover:shadow-[0_16px_32px_-6px_rgba(31,118,100,0.45)] transition-all duration-200 transform hover:-translate-y-0.5 text-center cursor-pointer"
              >
                <span>QUERO DEIXAR MEU CÃO MAIS BONITO</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Microcopy */}
              <div className="flex items-center justify-center sm:justify-start gap-3 text-xs text-[#68716E] font-medium pt-1">
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-[#C99A56]" />
                  Acesso imediato
                </span>
                <span>•</span>
                <span>Pagamento único</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-[#1F7664]" />
                  Garantia de 7 dias
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Mockup */}
          <div className="lg:col-span-5 flex justify-center relative mt-4 lg:mt-0">
            {/* Visual decorative backdrop for mockup */}
            <div className="absolute inset-0 max-w-sm mx-auto bg-gradient-to-tr from-[#EDF7F3] via-white to-[#F7F0E6] rounded-3xl -rotate-2 transform scale-105 -z-10 border border-[#123F36]/5" />

            {/* Main Product Mockup Card */}
            <div className="w-full flex justify-center">
              <MockupCard
                src="/images/pelagem-brilhante.png"
                alt="Pelagem Brilhante Ebook Mockup"
                title="Pelagem Brilhante"
                subtitle="Guia Prático de Beleza e Cuidados"
                badge="Edição Especial"
                size="hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
