import React from 'react';
import { TopBanner } from './components/TopBanner.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { PainSection } from './components/PainSection.tsx';
import { SolutionSection } from './components/SolutionSection.tsx';
import { BonusSectionCards } from './components/BonusSectionCards.tsx';
import { PricingSection } from './components/PricingSection.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { Guarantee } from './components/Guarantee.tsx';
import { FinalCTA } from './components/FinalCTA.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const scrollToPricing = () => {
    const el = document.getElementById('planos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#172320] flex flex-col font-sans selection:bg-[#EDF7F3] selection:text-[#123F36]">
      {/* Faixa no topo: OFERTA VÁLIDA SOMENTE HOJE e a data */}
      <TopBanner />

      <main className="flex-grow">
        {/* Sessão 1: Hero (Headline, SubHeadline, Mockup Imgur, CTA) */}
        <HeroSection onCtaClick={scrollToPricing} />

        {/* Sessão 2: Dor (3 cards das dores principais, simples e fácil de ler) */}
        <PainSection />

        {/* Sessão 3: Solução (Mockup produto Imgur, 3 cards de solução/apresentação, Foto antes e depois Imgur) */}
        <SolutionSection />

        {/* Sessão Bônus: "ANTES DE VOCÊ CONTINUAR... Escolhendo o PLANO COMPLETO..." com 1 card por bônus e as imagens do Imgur */}
        <BonusSectionCards />

        {/* Planos / Oferta (Básico R$9,90 e Completo R$27,00) */}
        <PricingSection />

        {/* Depoimentos reais de tutores */}
        <Testimonials />

        {/* Garantia incondicional de 7 dias */}
        <Guarantee />

        {/* CTA Final (Sessão de recuperação lá embaixo) */}
        <FinalCTA />
      </main>

      {/* Rodapé institucional */}
      <Footer />
    </div>
  );
}
