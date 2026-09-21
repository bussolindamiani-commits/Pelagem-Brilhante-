import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section id="garantia" className="py-16 sm:py-24 bg-[#EDF7F3]/40 border-y border-[#123F36]/8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#123F36]/10 shadow-lg flex flex-col md:flex-row items-center gap-8 sm:gap-12 relative overflow-hidden">
          {/* Subtle gold accent background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C99A56]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Large Guarantee Badge / Seal */}
          <div className="shrink-0 flex flex-col items-center justify-center">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-[#123F36] to-[#1F7664] p-1.5 shadow-xl flex items-center justify-center">
              <div className="w-full h-full rounded-full border-2 border-dashed border-[#C99A56] flex flex-col items-center justify-center text-center p-3 bg-[#123F36]">
                <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-[#C99A56] mb-1" />
                <span className="text-3xl sm:text-4xl font-extrabold text-white leading-none tracking-tight">
                  7
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest mt-0.5">
                  DIAS DE
                </span>
                <span className="text-[10px] sm:text-xs font-extrabold text-[#C99A56] uppercase tracking-wider">
                  GARANTIA
                </span>
              </div>
            </div>
          </div>

          {/* Text & CTA */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 bg-[#EDF7F3] px-3 py-1 rounded-full text-xs font-bold text-[#1F7664] mb-3">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>COMPRA 100% SEGURA</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123F36] tracking-tight mb-4">
              CONHEÇA O PELAGEM BRILHANTE SEM RISCO
            </h2>

            <p className="text-sm sm:text-base text-[#68716E] leading-relaxed">
              Você terá 7 dias para conhecer o conteúdo. Caso decida que não é para você dentro do período de garantia, poderá solicitar o reembolso conforme as condições da plataforma de pagamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
