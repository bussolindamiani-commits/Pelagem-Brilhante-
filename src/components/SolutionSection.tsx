import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const solutionCards = [
    {
      step: '01',
      title: 'Rotina de Escovação Correta',
      desc: 'Aprenda o tipo certo de escova para o pelo do seu cão, a frequência ideal e a técnica para remover fios mortos e distribuir a oleosidade natural sem machucar a pele.',
      benefit: 'Pelagem solta, desembaraçada e com brilho natural imediato.',
    },
    {
      step: '02',
      title: 'Banho, Hidratação e Secagem Perfeita',
      desc: 'O passo a passo correto da temperatura da água, aplicação do shampoo, condicionamento dos fios e secagem completa para evitar fungos e o efeito ressecado.',
      benefit: 'Cheiro agradável por mais tempo e textura macia como pelúcia.',
    },
    {
      step: '03',
      title: 'Manutenção Diária Sem Complicação',
      desc: 'Dicas práticas de poucos minutos no dia a dia para proteger a pelagem da sujeira da rua, prevenir o desgaste e manter o brilho contínuo sem gastar fortunas.',
      benefit: 'Economia de tempo e dinheiro com idas frequentes ao pet shop.',
    },
  ];

  return (
    <section id="solucao" className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#EDF7F3] border border-[#1F7664]/20 px-3.5 py-1 rounded-full text-xs font-bold text-[#123F36] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#1F7664]" />
            <span>A SOLUÇÃO DEFINITIVA</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#123F36] tracking-tight mb-4">
            PELAGEM BRILHANTE: O GUIA PRÁTICO PARA TRANSFORMAR O PELO DO SEU CÃO
          </h2>

          <p className="text-base sm:text-lg text-[#68716E] font-medium leading-relaxed">
            Tudo o que você precisa saber reunido em um passo a passo descomplicado para você aplicar na sua casa e notar a diferença na maciez e no brilho.
          </p>
        </div>

        {/* Mockup Solução Foto: https://imgur.com/MFHfzXz */}
        <div className="flex justify-center mb-14">
          <div className="relative max-w-md sm:max-w-xl w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#EDF7F3] to-[#F7F0E6] rounded-3xl -z-10 blur-xl opacity-80" />
            <div className="bg-[#FAFCFB] p-4 sm:p-6 rounded-3xl border border-[#123F36]/10 shadow-lg flex justify-center">
              <img
                src="https://i.imgur.com/MFHfzXz.png"
                alt="Apresentação do Produto Pelagem Brilhante"
                className="w-full h-auto max-h-[480px] object-contain drop-shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* 3 Cards de Solução / Apresentação do Produto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {solutionCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#FAFCFB] rounded-3xl p-6 sm:p-8 border border-[#123F36]/10 flex flex-col justify-between hover:border-[#1F7664]/30 hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#123F36] text-white flex items-center justify-center font-black text-sm mb-5 shadow-xs">
                  {card.step}
                </div>

                <h3 className="text-xl font-extrabold text-[#123F36] mb-3 tracking-tight">
                  {card.title}
                </h3>

                <p className="text-sm text-[#68716E] leading-relaxed mb-6">
                  {card.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#123F36]/8 flex items-start gap-2 text-xs font-semibold text-[#1F7664]">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#1F7664] mt-0.5" />
                <span>{card.benefit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Foto Antes e Depois: https://imgur.com/wQEKZWs */}
        <div className="bg-[#EDF7F3]/50 rounded-3xl p-6 sm:p-10 border border-[#1F7664]/20 shadow-sm text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-[#1F7664]/20 text-[#123F36] text-xs font-extrabold px-3.5 py-1 rounded-full mb-4">
            <span>✨</span>
            <span>RESULTADO VISÍVEL NA PRÁTICA</span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#123F36] tracking-tight mb-2">
            A DIFERENÇA DE UMA PELAGEM BEM CUIDADA
          </h3>

          <p className="text-sm sm:text-base text-[#68716E] max-w-xl mx-auto mb-8 font-medium">
            Veja a transformação estética real de uma rotina correta de hidratação, escovação e cuidados caseiros.
          </p>

          <div className="max-w-2xl mx-auto overflow-hidden rounded-2xl shadow-xl border-2 border-white bg-white">
            <img
              src="https://i.imgur.com/wQEKZWs.png"
              alt="Antes e Depois da Pelagem"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
