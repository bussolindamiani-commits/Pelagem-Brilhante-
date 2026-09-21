import React from 'react';
import { PackageCheck, Plus } from 'lucide-react';
import { MockupCard } from './MockupCard.tsx';

export const ValueStack: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#EDF7F3] border border-[#1F7664]/20 px-3.5 py-1 rounded-full text-xs font-bold text-[#123F36] mb-4">
            <PackageCheck className="w-3.5 h-3.5 text-[#1F7664]" />
            <span>PACOTE COMPLETO</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#123F36] tracking-tight mb-4">
            VOCÊ RECEBE:
          </h2>
          <p className="text-sm sm:text-base text-[#68716E]">
            Tudo o que você precisa para uma rotina completa de beleza e maciez.
          </p>
        </div>

        {/* 4 Mockups Arranged Harmoniously with Clean Whitespace */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-end max-w-5xl mx-auto mb-14">
          <div className="flex flex-col items-center">
            <MockupCard
              src="/images/pelagem-brilhante.png"
              alt="Pelagem Brilhante"
              title="Pelagem Brilhante"
              subtitle="Guia Principal"
              size="sm"
            />
          </div>

          <div className="flex flex-col items-center">
            <MockupCard
              src="/images/bonus-alimentacao.png"
              alt="Alimentação para uma Pelagem Mais Bonita"
              title="Alimentação"
              subtitle="Bônus #1"
              size="sm"
            />
          </div>

          <div className="flex flex-col items-center">
            <MockupCard
              src="/images/bonus-suplementos.png"
              alt="Suplementos para Pele e Pelagem"
              title="Suplementos"
              subtitle="Bônus #2"
              size="sm"
            />
          </div>

          <div className="flex flex-col items-center">
            <MockupCard
              src="/images/bonus-cuidados.png"
              alt="Banho, Hidratação e Finalização"
              title="Banho & Cuidados"
              subtitle="Bônus #3"
              size="sm"
            />
          </div>
        </div>

        {/* Textual summary with plus signs */}
        <div className="max-w-3xl mx-auto bg-[#FAFCFB] rounded-2xl p-6 sm:p-8 border border-[#123F36]/8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm sm:text-base font-bold text-[#123F36]">
            <span className="bg-white px-3.5 py-1.5 rounded-xl border border-[#123F36]/8 shadow-2xs">
              Pelagem Brilhante
            </span>
            <Plus className="w-4 h-4 text-[#1F7664]" />
            <span className="bg-white px-3.5 py-1.5 rounded-xl border border-[#123F36]/8 shadow-2xs">
              Alimentação para uma Pelagem Mais Bonita
            </span>
            <Plus className="w-4 h-4 text-[#1F7664]" />
            <span className="bg-white px-3.5 py-1.5 rounded-xl border border-[#123F36]/8 shadow-2xs">
              Suplementos para Pele e Pelagem
            </span>
            <Plus className="w-4 h-4 text-[#1F7664]" />
            <span className="bg-white px-3.5 py-1.5 rounded-xl border border-[#123F36]/8 shadow-2xs">
              Banho, Hidratação e Finalização
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
