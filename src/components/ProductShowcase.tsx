import React from 'react';
import { Check, BookCheck, Sparkles, ArrowRight } from 'lucide-react';
import { MockupCard } from './MockupCard.tsx';

export const ProductShowcase: React.FC = () => {
  const contents = [
    'Rotina para uma pelagem mais bonita',
    'Como evitar erros comuns nos cuidados',
    'Frequência de cuidados',
    'Como melhorar a aparência do pelo',
    'Como manter a maciez',
    'Como valorizar o brilho natural da pelagem',
    'Escovação correta',
    'Cuidados para diferentes tipos de pelo',
    'Checklist de cuidados',
  ];

  return (
    <section id="produto" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Large Mockup */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-sm">
              <MockupCard
                src="/images/pelagem-brilhante.png"
                alt="Ebook Pelagem Brilhante"
                title="Pelagem Brilhante"
                subtitle="O Método Principal"
                size="lg"
                badge="Principal"
              />
            </div>
          </div>

          {/* Right Column: Title, Narrative & Checklist */}
          <div className="lg:col-span-7 flex flex-col order-1 lg:order-2">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-1.5 self-start bg-[#EDF7F3] border border-[#1F7664]/20 px-3 py-1 rounded-full text-xs font-bold text-[#123F36] mb-4">
              <BookCheck className="w-3.5 h-3.5 text-[#1F7664]" />
              <span>CONTEÚDO COMPLETO & PRÁTICO</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#123F36] tracking-tight mb-4">
              CONHEÇA O PELAGEM BRILHANTE
            </h2>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-[#68716E] leading-relaxed mb-8">
              Um conteúdo simples e prático para quem quer entender como cuidar melhor da aparência da pelagem do próprio cão sem precisar ficar procurando informações espalhadas pela internet.
            </p>

            {/* Bullet Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {contents.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#EDF7F3]/50 transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-[#EDF7F3] border border-[#1F7664]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#1F7664] stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-[#172320]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Action Button */}
            <div>
              <a
                href="#planos"
                className="inline-flex items-center gap-2 text-sm font-extrabold text-[#123F36] hover:text-[#1F7664] group transition-colors"
              >
                <span>Escolha seu plano e comece agora</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#C99A56]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
