import React from 'react';
import { Gift, Check, AlertCircle } from 'lucide-react';
import { MockupCard } from './MockupCard.tsx';

export const BonusSection: React.FC = () => {
  return (
    <section id="bonus" className="py-16 sm:py-24 bg-[#F7F0E6]/30 border-t border-[#123F36]/8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#EDF7F3] border border-[#1F7664]/20 px-3.5 py-1 rounded-full text-xs font-bold text-[#123F36] mb-4">
            <Gift className="w-3.5 h-3.5 text-[#1F7664]" />
            <span>EXCLUSIVO DO PLANO COMPLETO</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#123F36] tracking-tight mb-4">
            NO PLANO COMPLETO, VOCÊ RECEBE MUITO MAIS
          </h2>

          <p className="text-base sm:text-lg text-[#68716E] leading-relaxed max-w-2xl mx-auto">
            Além do Pelagem Brilhante, você recebe 3 conteúdos complementares para cuidar da aparência da pelagem por diferentes caminhos.
          </p>
        </div>

        {/* 3 Detailed Bonus Cards */}
        <div className="space-y-10 sm:space-y-12">
          {/* BÔNUS 1: ALIMENTAÇÃO */}
          <div
            id="bonus-1"
            className="bg-white rounded-3xl p-6 sm:p-10 border border-[#123F36]/8 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-5 flex justify-center">
              <MockupCard
                src="/images/bonus-alimentacao.png"
                alt="Bônus 1 - Alimentação para uma Pelagem Mais Bonita"
                title="Bônus 1: Alimentação"
                subtitle="Nutrição e Brilho Natural"
                badge="Bônus 1"
                size="md"
              />
            </div>
            <div className="md:col-span-7">
              <span className="text-xs font-bold text-[#1F7664] bg-[#EDF7F3] px-3 py-1 rounded-full uppercase tracking-wider">
                Bônus Especial #1
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#123F36] mt-2 mb-3">
                ALIMENTAÇÃO PARA UMA PELAGEM MAIS BONITA
              </h3>
              <p className="text-sm sm:text-base text-[#68716E] leading-relaxed mb-6">
                Entenda quais pontos da alimentação merecem atenção quando o objetivo é manter o pelo bonito, macio e com boa aparência.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['nutrientes importantes;', 'hábitos alimentares;', 'cuidados com a rotina;', 'erros comuns.'].map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-semibold text-[#172320]">
                    <div className="w-5 h-5 rounded-full bg-[#EDF7F3] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#1F7664] stroke-[3]" />
                    </div>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BÔNUS 2: SUPLEMENTOS */}
          <div
            id="bonus-2"
            className="bg-white rounded-3xl p-6 sm:p-10 border border-[#123F36]/8 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-5 flex justify-center order-1 md:order-2">
              <MockupCard
                src="/images/bonus-suplementos.png"
                alt="Bônus 2 - Suplementos para Pele e Pelagem"
                title="Bônus 2: Suplementos"
                subtitle="Guia de Cuidados com Pastor Alemão"
                badge="Bônus 2"
                size="md"
              />
            </div>
            <div className="md:col-span-7 order-2 md:order-1">
              <span className="text-xs font-bold text-[#1F7664] bg-[#EDF7F3] px-3 py-1 rounded-full uppercase tracking-wider">
                Bônus Especial #2
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#123F36] mt-2 mb-3">
                SUPLEMENTOS PARA PELE E PELAGEM
              </h3>
              <p className="text-sm sm:text-base text-[#68716E] leading-relaxed mb-6">
                Conheça os principais tipos de suplementos relacionados aos cuidados com pele e pelagem, para que servem e quais cuidados devem ser considerados antes do uso.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {['principais tipos;', 'para que são utilizados;', 'diferenças entre eles;', 'cuidados importantes.'].map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-semibold text-[#172320]">
                    <div className="w-5 h-5 rounded-full bg-[#EDF7F3] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#1F7664] stroke-[3]" />
                    </div>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              {/* Discrete Veterinary Disclaimer */}
              <div className="flex items-start gap-2 p-3 bg-[#FAFCFB] rounded-xl border border-[#123F36]/6 text-[11px] text-[#68716E] leading-relaxed">
                <AlertCircle className="w-4 h-4 text-[#C99A56] shrink-0 mt-0.5" />
                <p>
                  A necessidade de suplementação pode variar de acordo com cada animal. Consulte um médico-veterinário antes de iniciar suplementos.
                </p>
              </div>
            </div>
          </div>

          {/* BÔNUS 3: BANHO, HIDRATAÇÃO E FINALIZAÇÃO */}
          <div
            id="bonus-3"
            className="bg-white rounded-3xl p-6 sm:p-10 border border-[#123F36]/8 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-5 flex justify-center">
              <MockupCard
                src="/images/bonus-cuidados.png"
                alt="Bônus 3 - Banho, Hidratação e Finalização"
                title="Bônus 3: Banho & Hidratação"
                subtitle="Finalização Profissional em Casa"
                badge="Bônus 3"
                size="md"
              />
            </div>
            <div className="md:col-span-7">
              <span className="text-xs font-bold text-[#1F7664] bg-[#EDF7F3] px-3 py-1 rounded-full uppercase tracking-wider">
                Bônus Especial #3
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#123F36] mt-2 mb-3">
                BANHO, HIDRATAÇÃO E FINALIZAÇÃO
              </h3>
              <p className="text-sm sm:text-base text-[#68716E] leading-relaxed mb-6">
                Aprenda os cuidados externos que ajudam a deixar a pelagem mais bonita depois do banho.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['banho;', 'secagem;', 'escovação;', 'hidratação;', 'finalização.'].map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-semibold text-[#172320]">
                    <div className="w-5 h-5 rounded-full bg-[#EDF7F3] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#1F7664] stroke-[3]" />
                    </div>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
