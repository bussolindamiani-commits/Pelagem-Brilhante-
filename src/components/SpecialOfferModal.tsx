import React, { useEffect } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { OFFER_CONFIG } from '../config/offer.ts';

interface SpecialOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpecialOfferModal: React.FC<SpecialOfferModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="modal-oferta-especial"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-[#123F36]/15 p-5 sm:p-6 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão de Fechar */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-[#123F36] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Título Direto */}
        <span className="text-[11px] font-bold text-[#1F7664] bg-[#EDF7F3] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
          Oferta Especial
        </span>
        <h3 className="text-xl font-extrabold text-[#123F36] mt-2 mb-1 leading-tight">
          Leve o Pacote Completo por R$ 19
        </h3>
        <p className="text-xs text-[#68716E]">
          De <span className="line-through">R$ {OFFER_CONFIG.completePrice}</span> por apenas <strong className="text-[#123F36]">R$ {OFFER_CONFIG.specialOfferPrice}</strong> (com todos os bônus inclusos)
        </p>

        {/* Lista Super Limpa */}
        <div className="bg-[#FAFCFB] rounded-xl p-3 border border-[#123F36]/8 my-4 text-left space-y-2 text-xs text-[#172320]">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#1F7664] stroke-[2.5] shrink-0" />
            <span><strong>Guia Completo</strong> Pelagem Brilhante</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#1F7664] stroke-[2.5] shrink-0" />
            <span><strong>Todos os 3 Bônus</strong> de cuidados e receitas</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#1F7664] stroke-[2.5] shrink-0" />
            <span>Checklist prático + Acesso vitalício</span>
          </div>
        </div>

        {/* Botão Principal com Link Novo */}
        <a
          id="btn-aceitar-oferta-19"
          href={OFFER_CONFIG.specialOfferCheckoutUrl}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#123F36] hover:bg-[#1F7664] text-white text-sm font-extrabold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
        >
          <span>APROVEITAR AGORA</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        {/* Opção de continuar no plano de 10 */}
        <div className="mt-3">
          <a
            id="btn-recusar-oferta-19"
            href={OFFER_CONFIG.basicCheckoutUrl}
            className="text-xs text-[#68716E] hover:text-[#123F36] underline transition-colors"
          >
            Continuar com o plano de R$ 10
          </a>
        </div>
      </div>
    </div>
  );
};
