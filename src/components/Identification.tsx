import React from 'react';
import { Sparkles, EyeOff, Hand, Wind, AlertCircle } from 'lucide-react';

export const Identification: React.FC = () => {
  const pains = [
    {
      id: 'pelo-opaco',
      icon: EyeOff,
      title: 'PELO OPACO',
      description: 'Sem aquele brilho bonito que chama atenção.',
      accentColor: 'text-[#C99A56]',
      bgBadge: 'bg-[#F7F0E6]',
    },
    {
      id: 'pelo-aspero',
      icon: Hand,
      title: 'PELO ÁSPERO',
      description: 'Você passa a mão e sente que falta maciez.',
      accentColor: 'text-[#1F7664]',
      bgBadge: 'bg-[#EDF7F3]',
    },
    {
      id: 'pelo-ressecado',
      icon: Wind,
      title: 'PELO RESSECADO',
      description: 'A pelagem fica armada e com aparência sem vida.',
      accentColor: 'text-[#C99A56]',
      bgBadge: 'bg-[#F7F0E6]',
    },
    {
      id: 'aparencia-descuidada',
      icon: AlertCircle,
      title: 'APARÊNCIA DESCUIDADA',
      description: 'Mesmo depois do banho parece que está faltando alguma coisa.',
      accentColor: 'text-[#1F7664]',
      bgBadge: 'bg-[#EDF7F3]',
    },
  ];

  return (
    <section id="identificacao" className="py-16 sm:py-20 bg-[#F7F0E6]/40 border-y border-[#123F36]/6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-white border border-[#123F36]/10 px-3.5 py-1 rounded-full text-xs font-bold text-[#1F7664] mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C99A56]" />
            <span>VOCÊ RECONHECE ESTES SINAIS?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#123F36] tracking-tight">
            O PELO DO SEU CÃO PODERIA ESTAR MUITO MAIS BONITO?
          </h2>
        </div>

        {/* 4 Aesthetic Pain Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {pains.map((pain) => {
            const Icon = pain.icon;
            return (
              <div
                key={pain.id}
                id={`card-${pain.id}`}
                className="bg-white rounded-2xl p-6 border border-[#123F36]/8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-[#1F7664]/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl ${pain.bgBadge} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-6 h-6 ${pain.accentColor}`} />
                  </div>
                  <h3 className="text-base font-extrabold text-[#123F36] mb-2 tracking-wide">
                    {pain.title}
                  </h3>
                  <p className="text-sm text-[#68716E] leading-relaxed">
                    {pain.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Transition Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#1F7664]/20 shadow-sm max-w-3xl mx-auto text-center">
          <p className="text-xl sm:text-2xl font-extrabold text-[#123F36] mb-3">
            E dar mais banho nem sempre resolve.
          </p>
          <p className="text-sm sm:text-base text-[#68716E] leading-relaxed max-w-2xl mx-auto">
            A aparência da pelagem também depende da rotina de cuidados, alimentação, escovação, produtos utilizados e diversos pequenos hábitos do dia a dia.
          </p>
        </div>
      </div>
    </section>
  );
};
