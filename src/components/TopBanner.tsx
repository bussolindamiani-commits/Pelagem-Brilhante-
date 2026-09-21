import React, { useMemo } from 'react';

export const TopBanner: React.FC = () => {
  const formattedDate = useMemo(() => {
    try {
      const now = new Date();
      // Formato em português, ex: 20 DE SETEMBRO DE 2026
      return now
        .toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        })
        .toUpperCase();
    } catch {
      return 'HOJE';
    }
  }, []);

  return (
    <div
      id="top-notification-banner"
      className="bg-[#123F36] text-white py-2.5 px-4 text-center text-xs sm:text-sm font-extrabold tracking-wide uppercase shadow-sm border-b border-[#C99A56]/30 flex items-center justify-center gap-2"
    >
      <span>
        OFERTA VÁLIDA SOMENTE HOJE – <span className="text-[#C99A56] underline decoration-[#C99A56] decoration-2 underline-offset-2">{formattedDate}</span>
      </span>
    </div>
  );
};
