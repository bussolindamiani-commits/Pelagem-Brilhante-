import React from 'react';
import { AlertCircle } from 'lucide-react';

export const PainSection: React.FC = () => {
  const painCards = [
    {
      emoji: '🐕',
      title: 'Pelo Opaco e Sem Brilho',
      desc: 'Mesmo limpo, o pelo do seu cachorro continua fosco, sem vida e sem aquele reflexo bonito que você gostaria de ver.',
    },
    {
      emoji: '🐾',
      title: 'Toque Áspero e Ressecado',
      desc: 'A pelagem perde a maciez natural, embaraça com facilidade e parece sempre descuidada, mesmo com toda a sua atenção.',
    },
    {
      emoji: '🧼',
      title: 'Dar Mais Banhos Não Resolve',
      desc: 'Dar banho toda hora ou trocar de shampoo sem critério pode ressecar a pele e deixar o pelo ainda mais frágil e sem vida.',
    },
  ];

  return (
    <section id="dores" className="py-14 sm:py-20 bg-[#FAFCFB] border-y border-[#123F36]/8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#F7F0E6] border border-[#C99A56]/30 px-3.5 py-1 rounded-full text-xs font-bold text-[#123F36] mb-3">
            <AlertCircle className="w-3.5 h-3.5 text-[#C99A56]" />
            <span>VOCÊ NOTA ISSO NO SEU CÃO?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#123F36] tracking-tight mb-3">
            CUIDAR DA PELAGEM NÃO DEVERIA SER TÃO DIFÍCIL
          </h2>

          <p className="text-base text-[#68716E] font-medium leading-relaxed">
            Muitos donos dedicados enfrentam as mesmas dificuldades no dia a dia:
          </p>
        </div>

        {/* 3 Pain Cards - Simples, limpos e direto ao ponto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#123F36]/10 shadow-xs hover:border-[#1F7664]/30 hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EDF7F3] flex items-center justify-center text-2xl mb-4">
                {card.emoji}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#123F36] mb-2 tracking-tight">
                {card.title}
              </h3>

              <p className="text-sm text-[#68716E] leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom takeaway */}
        <div className="mt-10 text-center max-w-xl mx-auto p-4 rounded-xl bg-[#EDF7F3] border border-[#1F7664]/20">
          <p className="text-sm font-bold text-[#123F36]">
            💡 A beleza da pelagem não depende de produtos caros, mas de uma <span className="text-[#1F7664] underline">rotina correta e estruturada</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
