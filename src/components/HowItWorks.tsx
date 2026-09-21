import React from 'react';
import { Compass, CheckCircle2, RefreshCw } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '1',
      title: 'ENTENDA',
      description:
        'Descubra quais hábitos podem estar deixando a pelagem com aparência opaca ou pouco cuidada.',
      icon: Compass,
    },
    {
      step: '2',
      title: 'APLIQUE',
      description:
        'Siga os cuidados indicados de maneira simples na rotina do seu cão.',
      icon: CheckCircle2,
    },
    {
      step: '3',
      title: 'MANTENHA',
      description:
        'Crie uma rotina para manter o pelo bonito, macio e bem cuidado por mais tempo.',
      icon: RefreshCw,
    },
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-[#EDF7F3]/40 border-y border-[#123F36]/6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-white border border-[#123F36]/10 px-3.5 py-1 rounded-full text-xs font-bold text-[#1F7664] mb-4 shadow-xs">
            <span>PASSO A PASSO DESCOMPLICADO</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#123F36] tracking-tight">
            UMA ROTINA SIMPLES PARA CUIDAR DA BELEZA DO SEU CÃO
          </h2>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                id={`step-${item.step}`}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#123F36]/8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col relative group"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 rounded-xl bg-[#123F36] text-white font-extrabold text-lg flex items-center justify-center shadow-xs group-hover:bg-[#1F7664] transition-colors">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#EDF7F3] flex items-center justify-center text-[#1F7664]">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-[#123F36] mb-3 tracking-wide">
                  {item.title}
                </h3>

                <p className="text-sm text-[#68716E] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
