import React from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#123F36] text-white relative overflow-hidden">
      {/* Background dog photograph with soft dark gradient overlay for emotional impact */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1600&q=80"
          alt="Cão feliz com pelagem limpa, brilhante e sedosa"
          className="w-full h-full object-cover object-center opacity-20 filter grayscale-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#123F36] via-[#123F36]/85 to-[#123F36]/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#C99A56] text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-6 backdrop-blur-xs">
          <span>🐾</span>
          <span>VALORIZE A BELEZA NATURAL DO SEU COMPANHEIRO</span>
        </div>

        {/* Headlines */}
        <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#EDF7F3] mb-2 tracking-tight">
          SEU CÃO JÁ É LINDO.
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
          AGORA IMAGINE ELE{' '}
          <span className="text-[#C99A56] underline decoration-[#C99A56]/60 decoration-4 underline-offset-8">
            AINDA MAIS BONITO.
          </span>
        </h2>

        {/* Narrative */}
        <p className="text-base sm:text-lg text-[#EDF7F3]/90 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Comece uma rotina simples de cuidados para valorizar a aparência da pelagem do seu melhor amigo.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4">
          <a
            id="final-cta-btn"
            href="#planos"
            className="inline-flex items-center justify-center gap-3 bg-[#C99A56] hover:bg-[#d8a864] text-[#123F36] text-base sm:text-xl font-extrabold py-4 sm:py-5 px-8 sm:px-12 rounded-2xl shadow-[0_16px_36px_-6px_rgba(201,154,86,0.5)] transition-all duration-200 transform hover:-translate-y-1 text-center cursor-pointer"
          >
            <span>QUERO DEIXAR MEU CÃO MAIS BONITO</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </a>

          {/* Microcopy */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-[#EDF7F3]/80 font-medium pt-2">
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-[#C99A56]" />
              Acesso digital imediato
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C99A56]" />
              Garantia incondicional de 7 dias
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
