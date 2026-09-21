import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export const DesireSection: React.FC = () => {
  const desireTags = [
    { label: 'Mais brilhante', icon: '✨' },
    { label: 'Mais macia', icon: '🐾' },
    { label: 'Mais alinhada', icon: '✨' },
    { label: 'Mais bonita', icon: '🐾' },
    { label: 'Com aparência de bem cuidada', icon: '✨' },
  ];

  return (
    <section id="desejo" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Headline */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#EDF7F3] border border-[#1F7664]/20 px-3.5 py-1 rounded-full text-xs font-bold text-[#123F36] mb-4">
            <Heart className="w-3.5 h-3.5 text-[#1F7664] fill-[#1F7664]" />
            <span>A TRANSFORMAÇÃO QUE VOCÊ DESEJA</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#123F36] tracking-tight leading-tight">
            IMAGINE VER SEU CÃO COM UMA PELAGEM ASSIM...
          </h2>
        </div>

        {/* Large Dog Image with Floating Attributes */}
        <div className="relative max-w-4xl mx-auto mb-10">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#EDF7F3]">
            <img
              src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=85"
              alt="Cão com pelagem dourada brilhante e macia"
              className="w-full h-[360px] sm:h-[480px] md:h-[540px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
              loading="lazy"
            />

            {/* Subtle gradient overlay at bottom of photo for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

            {/* In-image badge */}
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/40 shadow-lg flex items-center gap-3">
              <span className="text-xl">✨</span>
              <div>
                <p className="text-xs font-bold text-[#123F36] uppercase tracking-wider">
                  Pelagem Radiante & Sedosa
                </p>
                <p className="text-[11px] text-[#68716E]">
                  Toque suave e brilho visível sob a luz
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desired Attributes Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-3xl mx-auto mb-10">
          {desireTags.map((tag, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 bg-[#EDF7F3] border border-[#1F7664]/20 text-[#123F36] text-sm sm:text-base font-bold px-4 py-2.5 rounded-full shadow-xs hover:bg-[#1F7664] hover:text-white transition-colors duration-200"
            >
              <span>{tag.icon}</span>
              <span>{tag.label}</span>
            </div>
          ))}
        </div>

        {/* Closing Desire Statement */}
        <div className="text-center max-w-2xl mx-auto pt-4 border-t border-[#123F36]/8">
          <p className="text-lg sm:text-xl font-bold text-[#123F36]">
            Seu cão já é lindo.{' '}
            <span className="text-[#1F7664]">
              A pelagem pode deixá-lo ainda mais bonito.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
