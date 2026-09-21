import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../config/offer.ts';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAFCFB] border-t border-[#123F36]/8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#EDF7F3] border border-[#1F7664]/20 px-3.5 py-1 rounded-full text-xs font-bold text-[#123F36] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#1F7664]" />
            <span>DÚVIDAS FREQUENTES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#123F36] tracking-tight mb-3">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="text-sm sm:text-base text-[#68716E]">
            Tudo o que você precisa saber sobre o Pelagem Brilhante.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className={`rounded-2xl border transition-all duration-200 bg-white overflow-hidden ${
                  isOpen
                    ? 'border-[#1F7664]/40 shadow-sm'
                    : 'border-[#123F36]/8 hover:border-[#123F36]/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#123F36] hover:text-[#1F7664] transition-colors cursor-pointer"
                >
                  <span>{item.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#123F36] text-white' : 'bg-[#EDF7F3] text-[#1F7664]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#68716E] leading-relaxed border-t border-[#123F36]/5 bg-[#FAFCFB]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
