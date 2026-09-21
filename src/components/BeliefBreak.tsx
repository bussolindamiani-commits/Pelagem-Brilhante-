import React from 'react';
import { Sparkles, CheckCircle2, ArrowDown } from 'lucide-react';

export const BeliefBreak: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F7F0E6]/50 border-y border-[#123F36]/8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Pill */}
        <div className="inline-flex items-center gap-1.5 bg-white border border-[#123F36]/10 px-3.5 py-1 rounded-full text-xs font-bold text-[#1F7664] mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#C99A56]" />
          <span>O SEGREDO QUE MUITOS NÃO PERCEBEM</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#123F36] mb-6 tracking-tight">
          NÃO É SÓ O SHAMPOO.
        </h2>

        {/* Narrative Copy */}
        <div className="max-w-2xl mx-auto text-base sm:text-lg text-[#68716E] leading-relaxed mb-10 space-y-3">
          <p>
            Muitos tutores tentam trocar shampoo, aumentar a frequência dos banhos ou comprar vários produtos...
          </p>
          <p className="font-medium text-[#172320]">
            Mas acabam ignorando outros pontos importantes da rotina.
          </p>
        </div>

        {/* High-Contrast Focal Highlight Box */}
        <div className="bg-[#123F36] text-white rounded-2xl p-6 sm:p-10 shadow-xl max-w-3xl mx-auto mb-8 relative overflow-hidden">
          {/* Subtle gold accent circle in background */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#C99A56]/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#1F7664]/30 rounded-full blur-2xl" />

          <div className="relative z-10 flex flex-col items-center">
            <span className="text-2xl sm:text-3xl mb-3">✨</span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-snug tracking-tight max-w-xl mx-auto">
              A BELEZA DA PELAGEM É RESULTADO DE UM CONJUNTO DE CUIDADOS.
            </h3>
          </div>
        </div>

        {/* Transition Line */}
        <div className="flex flex-col items-center gap-2 pt-2">
          <p className="text-base sm:text-lg font-bold text-[#123F36]">
            Foi por isso que criamos o Pelagem Brilhante.
          </p>
          <ArrowDown className="w-5 h-5 text-[#1F7664] animate-bounce" />
        </div>
      </div>
    </section>
  );
};
