import React from 'react';
import { Check, Sparkles, Dog } from 'lucide-react';
import { DOG_BREEDS } from '../config/offer.ts';

export const WhoIsItFor: React.FC = () => {
  const criteria = [
    'quer ver o cachorro ainda mais bonito;',
    'sente que o pelo perdeu o brilho;',
    'percebe que a pelagem está áspera ou ressecada;',
    'quer cuidar melhor do cão em casa;',
    'gosta daquela aparência de cachorro recém-cuidado;',
    'quer aprender uma rotina organizada;',
    'não sabe quais cuidados realmente fazem diferença.',
  ];

  return (
    <section id="para-quem-e" className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#EDF7F3] border border-[#1F7664]/20 px-3.5 py-1 rounded-full text-xs font-bold text-[#123F36] mb-4">
            <Dog className="w-3.5 h-3.5 text-[#1F7664]" />
            <span>IDENTIFICAÇÃO</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#123F36] tracking-tight">
            O PELAGEM BRILHANTE É PARA QUEM...
          </h2>
        </div>

        {/* Checkmark List */}
        <div className="max-w-3xl mx-auto bg-[#FAFCFB] border border-[#123F36]/8 rounded-3xl p-6 sm:p-10 shadow-xs mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {criteria.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#123F36] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base font-medium text-[#172320]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* All Coat Types Announcement */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#123F36] tracking-wide uppercase mb-2">
            PELO CURTO, LONGO, LISO OU VOLUMOSO.
          </h3>
          <p className="text-base sm:text-lg text-[#68716E]">
            Os cuidados podem ser adaptados para diferentes tipos de pelagem.
          </p>
        </div>

        {/* Dog Breeds Showcase Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {DOG_BREEDS.map((dog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-[#123F36]/8 shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col"
            >
              <div className="aspect-square relative overflow-hidden bg-[#EDF7F3]">
                <img
                  src={dog.image}
                  alt={`Cão da raça ${dog.name}`}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-3 text-center flex-1 flex flex-col justify-center">
                <p className="text-xs sm:text-sm font-bold text-[#123F36] leading-tight">
                  {dog.name}
                </p>
                <p className="text-[10px] text-[#68716E] mt-0.5">
                  {dog.coatType}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
