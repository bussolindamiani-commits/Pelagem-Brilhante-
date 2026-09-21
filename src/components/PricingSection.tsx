import React, { useState } from 'react';
import { Check, Sparkles, Gift, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { OFFER_CONFIG } from '../config/offer.ts';
import { SpecialOfferModal } from './SpecialOfferModal.tsx';

export const PricingSection: React.FC = () => {
  const [isSpecialOfferOpen, setIsSpecialOfferOpen] = useState(false);

  return (
    <section id="planos" className="py-16 sm:py-24 bg-[#FAFCFB] border-t border-[#123F36]/8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#EDF7F3] border border-[#1F7664]/20 px-3.5 py-1 rounded-full text-xs font-bold text-[#123F36] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C99A56]" />
            <span>VALORES PROMOCIONAIS DE LANÇAMENTO</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#123F36] tracking-tight mb-3">
            ESCOLHA A MELHOR OPÇÃO PARA VOCÊ
          </h2>
          <p className="text-sm sm:text-base text-[#68716E]">
            Acesso vitalício ao material digital com garantia incondicional de 7 dias.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-4xl mx-auto">
          {/* Card 1: PLANO BÁSICO (Simples, discreto, poucas informações) */}
          <div
            id="plano-basico"
            className="lg:col-span-5 bg-[#FAFCFB] rounded-3xl p-6 sm:p-7 border border-[#123F36]/10 shadow-xs flex flex-col justify-between"
          >
            <div>
              {/* Plan Header */}
              <div className="mb-5">
                <span className="text-[11px] font-semibold text-[#68716E] tracking-wider uppercase">
                  Opção Simples
                </span>
                <h3 className="text-xl font-bold text-[#123F36] mt-0.5">
                  Plano Básico
                </h3>
              </div>

              {/* Price */}
              <div className="mb-5 pb-5 border-b border-[#123F36]/8">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-[#68716E]">R$</span>
                  <span className="text-4xl font-extrabold text-[#123F36] tracking-tight">
                    {OFFER_CONFIG.basicPrice}
                  </span>
                </div>
                <span className="text-[11px] text-[#68716E] mt-1 block">
                  Pagamento único
                </span>
              </div>

              {/* Included Items - Reduzido e sem excesso de detalhes */}
              <div className="space-y-2.5 mb-7">
                {[
                  'Guia digital Pelagem Brilhante',
                  'Rotina básica de cuidados',
                  'Acesso digital imediato',
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#68716E]">
                    <div className="w-4 h-4 rounded-full bg-slate-200/70 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-slate-700 stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Basic CTA - Ao clicar abre o pop-up da oferta de 27 por 19 */}
            <div>
              <button
                type="button"
                id="cta-plano-basico"
                onClick={() => setIsSpecialOfferOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold py-3 px-5 rounded-xl border border-slate-200 transition-all duration-200 text-center cursor-pointer active:scale-[0.99]"
              >
                <span>Escolher Básico (R$ 10)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] text-[#68716E] mt-2">
                Acesso imediato • 7 dias de garantia
              </p>
            </div>
          </div>

          {/* Card 2: PLANO COMPLETO (Principal & Destaque Máximo) */}
          <div
            id="plano-completo"
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border-2 border-[#123F36] shadow-xl relative flex flex-col justify-between transform lg:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            {/* Badge MAIS COMPLETO */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#123F36] text-white text-xs sm:text-sm font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <span>⭐</span>
              <span>MAIS COMPLETO</span>
            </div>

            <div>
              {/* Plan Header */}
              <div className="mb-6 pt-2">
                <span className="text-xs font-bold text-[#1F7664] tracking-wider uppercase bg-[#EDF7F3] px-2.5 py-0.5 rounded-md">
                  Melhor Custo-Benefício
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123F36] mt-2">
                  PELAGEM BRILHANTE COMPLETO
                </h3>
              </div>

              {/* Price & Savings Highlight */}
              <div className="mb-6 pb-6 border-b border-[#123F36]/8">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold text-[#172320]">R$</span>
                  <span className="text-5xl sm:text-6xl font-extrabold text-[#123F36] tracking-tight">
                    {OFFER_CONFIG.completePrice}
                  </span>
                </div>
                <span className="text-xs text-[#68716E] font-medium mt-1 block">
                  Pagamento único • Sem mensalidades
                </span>
              </div>

              {/* Included Items & Bonuses */}
              <div className="space-y-3 mb-8">
                <p className="text-xs font-bold text-[#123F36] uppercase tracking-wider">
                  Tudo o que você recebe imediatamente:
                </p>

                {/* Acesso vitalício ao Método 2.0 Completo */}
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#172320] px-1">
                  <div className="w-4 h-4 rounded-full bg-[#EDF7F3] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#1F7664] stroke-[3]" />
                  </div>
                  <span>Acesso vitalício ao Método 2.0 Completo</span>
                </div>

                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#172320] px-1">
                  <div className="w-4 h-4 rounded-full bg-[#EDF7F3] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#1F7664] stroke-[3]" />
                  </div>
                  <span>Guia Pelagem Brilhante (Conteúdo Principal Passo a Passo)</span>
                </div>

                {/* Bônus Exclusivos */}
                <div className="pt-1 space-y-2">
                  <div className="flex items-start gap-2.5 text-sm font-medium text-[#172320] bg-[#FAFCFB] p-2.5 rounded-xl border border-[#123F36]/6">
                    <span className="text-base shrink-0">🎁</span>
                    <div>
                      <span className="font-bold text-[#123F36]">Bônus 1: Alimentação para uma Pelagem Mais Bonita</span>
                      <p className="text-xs text-[#68716E]">Nutrição prática para realçar o brilho de dentro para fora</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-sm font-medium text-[#172320] bg-[#FAFCFB] p-2.5 rounded-xl border border-[#123F36]/6">
                    <span className="text-base shrink-0">🎁</span>
                    <div>
                      <span className="font-bold text-[#123F36]">Bônus 2: Suplementos para Pele e Pelagem</span>
                      <p className="text-xs text-[#68716E]">Orientações essenciais de ômegas, vitaminas e minerais</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-sm font-medium text-[#172320] bg-[#FAFCFB] p-2.5 rounded-xl border border-[#123F36]/6">
                    <span className="text-base shrink-0">🎁</span>
                    <div>
                      <span className="font-bold text-[#123F36]">Bônus 3: Banho, Hidratação e Finalização</span>
                      <p className="text-xs text-[#68716E]">Técnicas caseiras para acabamento sedoso de salão</p>
                    </div>
                  </div>
                </div>

                {/* Demais itens com o mesmo estilo exato do Guia Pelagem Brilhante */}
                <div className="pt-1 space-y-3">
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-[#172320] px-1">
                    <div className="w-4 h-4 rounded-full bg-[#EDF7F3] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#1F7664] stroke-[3]" />
                    </div>
                    <span>Checklist prático de rotina semanal de cuidados</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-sm font-semibold text-[#172320] px-1">
                    <div className="w-4 h-4 rounded-full bg-[#EDF7F3] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#1F7664] stroke-[3]" />
                    </div>
                    <span>Todas as futuras atualizações e novos materiais inclusos</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-sm font-semibold text-[#172320] px-1">
                    <div className="w-4 h-4 rounded-full bg-[#EDF7F3] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#1F7664] stroke-[3]" />
                    </div>
                    <span>Suporte prioritário para dúvidas via e-mail</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Complete Plan Primary CTA (Verde Escuro #123F36, maior destaque da seção) */}
            <div>
              <a
                id="cta-plano-completo"
                href={OFFER_CONFIG.completeCheckoutUrl}
                className="w-full inline-flex items-center justify-center gap-3 bg-[#123F36] hover:bg-[#1F7664] text-white text-base sm:text-lg font-extrabold py-4 px-8 rounded-2xl shadow-[0_12px_24px_-4px_rgba(18,63,54,0.4)] hover:shadow-[0_16px_28px_-4px_rgba(31,118,100,0.5)] transition-all duration-200 transform hover:-translate-y-0.5 text-center cursor-pointer"
              >
                <span>Garantir meu Acesso Agora</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              {/* Cards compactos de garantia e entrega rápida */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-left">
                <div className="flex items-center gap-2 bg-[#FAFCFB] p-2 rounded-xl border border-[#123F36]/8">
                  <div className="w-7 h-7 rounded-full bg-[#EDF7F3] border border-[#1F7664]/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#1F7664]" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-[10px] sm:text-[11px] font-extrabold text-[#123F36] uppercase tracking-wide leading-tight">
                      Pagamento Seguro
                    </h5>
                    <p className="text-[9px] sm:text-[10px] text-[#68716E] leading-tight truncate">
                      Ambiente 100% criptografado e protegido
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-[#FAFCFB] p-2 rounded-xl border border-[#123F36]/8">
                  <div className="w-7 h-7 rounded-full bg-[#FFF8EE] border border-[#C99A56]/25 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 text-[#C99A56] fill-[#C99A56]/20" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-[10px] sm:text-[11px] font-extrabold text-[#123F36] uppercase tracking-wide leading-tight">
                      Acesso Imediato
                    </h5>
                    <p className="text-[9px] sm:text-[10px] text-[#68716E] leading-tight truncate">
                      Receba o material no seu e-mail na hora
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up de Oferta Especial (Pacote de 27 por 19) */}
      <SpecialOfferModal
        isOpen={isSpecialOfferOpen}
        onClose={() => setIsSpecialOfferOpen(false)}
      />
    </section>
  );
};
