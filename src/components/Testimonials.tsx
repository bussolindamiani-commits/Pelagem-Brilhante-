import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  dogName: string;
  dogBreed: string;
  text: string;
}

const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'dep-1',
    name: 'Camila Rocha',
    role: 'Dona do Thor (Golden Retriever)',
    avatarUrl: 'https://i.imgur.com/ENO5bZN.png',
    dogName: 'Thor',
    dogBreed: 'Golden Retriever',
    text: 'O Thor soltava pelo pela casa inteira e a pelagem parecia sem vida, áspera ao toque. Eu achava que era normal da raça. Com o ajuste na escovação, a temperatura certa do banho e os cuidados alimentares do guia, o pelo dele mudou da água para o vinho!',
  },
  {
    id: 'dep-2',
    name: 'Renata Alves',
    role: 'Dona da Mel (Shih-tzu)',
    avatarUrl: 'https://i.imgur.com/dCZcz7Y.png',
    dogName: 'Mel',
    dogBreed: 'Shih-tzu',
    text: 'A Mel vivia com a pele ressecada e com coceira leve nas costas. Eu comprava xampus caríssimos e nada resolvia. Quando entendi os erros que cometia na secagem e na rotina semanal, a pele acalmou e o pelo dela ficou soltinho e sedoso.',
  },
  {
    id: 'dep-3',
    name: 'Juliana Mendes',
    role: 'Dona do Bento (Bulldog Francês)',
    avatarUrl: 'https://i.imgur.com/Jl4JFON.png',
    dogName: 'Bento',
    dogBreed: 'Bulldog Francês',
    text: 'Bulldog tem a pele muito sensível e eu morria de medo de fazer besteira. O checklist semanal me deu a segurança que eu precisava. O Bento parou de ter descamação e os pelos dele estão com aquele reflexo bonito de cão saudável.',
  },
  {
    id: 'dep-4',
    name: 'Marcos Vinícius',
    role: 'Dono da Luna (SRD)',
    avatarUrl: 'https://i.imgur.com/BHPlHYC.png',
    dogName: 'Luna',
    dogBreed: 'SRD (Vira-lata)',
    text: 'Adotei a Luna e o pelo dela era ralo e sem brilho. Seguindo o passo a passo da rotina diária e aplicando o bônus de petiscos naturais, ela ganhou peso na medida certa e a pelagem ficou super densa e iluminada. Recomendo demais!',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-14 sm:py-20 bg-[#FAFCFB] border-t border-b border-[#123F36]/8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header da Seção */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123F36] tracking-tight">
            O Que Dizem os Donos
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#68716E]">
            Veja a experiência de quem já colocou o método em prática no dia a dia:
          </p>
        </div>

        {/* Grid de Depoimentos Simples */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              id={`depoimento-${t.id}`}
              className="bg-white rounded-2xl p-6 border border-[#123F36]/10 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* 5 Estrelas */}
                <div className="flex gap-1 text-[#E5A93C] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Texto do Depoimento */}
                <p className="text-sm text-[#37413E] leading-relaxed mb-4">
                  "{t.text}"
                </p>
              </div>

              {/* Informações do Tutor com Foto */}
              <div className="pt-3 border-t border-gray-100 flex items-center gap-3">
                <img
                  src={t.avatarUrl}
                  alt={t.name}
                  width="44"
                  height="44"
                  className="w-11 h-11 rounded-full object-cover border border-[#1F7664]/20 shadow-2xs shrink-0"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="min-w-0">
                  <p className="text-sm font-bold text-[#123F36] truncate">
                    {t.name}
                  </p>
                  <p className="text-xs text-[#68716E] truncate">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


