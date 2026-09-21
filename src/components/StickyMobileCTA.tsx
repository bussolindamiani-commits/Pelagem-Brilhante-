import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { OFFER_CONFIG } from '../config/offer.ts';

export const StickyMobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after user scrolls past ~450px (first fold)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDismissed || !isVisible) {
    return null;
  }

  return (
    <div
      id="sticky-mobile-cta"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#123F36]/15 p-3 shadow-[0_-8px_20px_rgba(0,0,0,0.1)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        {/* Text */}
        <div className="flex flex-col min-w-0">
          <span className="text-xs font-bold text-[#123F36] truncate">
            Pelagem Brilhante
          </span>
          <span className="text-[11px] text-[#1F7664] font-extrabold">
            a partir de R$ {OFFER_CONFIG.basicPrice}
          </span>
        </div>

        {/* Action Button & Dismiss */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#planos"
            className="inline-flex items-center gap-1.5 bg-[#123F36] hover:bg-[#1F7664] text-white text-xs font-extrabold py-2.5 px-4 rounded-xl shadow-xs active:scale-95 transition-all"
          >
            <span>QUERO AGORA</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Close button */}
          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            aria-label="Fechar barra fixa"
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#68716E] hover:text-[#123F36] hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
