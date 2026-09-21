import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

interface MockupCardProps {
  src: string;
  alt: string;
  title: string;
  badge?: string;
  subtitle?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
}

export const MockupCard: React.FC<MockupCardProps> = ({
  src,
  alt,
  title,
  badge,
  subtitle,
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'max-w-[180px] sm:max-w-[200px]',
    md: 'max-w-[240px] sm:max-w-[280px]',
    lg: 'max-w-[290px] sm:max-w-[340px]',
    hero: 'max-w-[320px] sm:max-w-[380px] lg:max-w-[420px]',
  };

  return (
    <div
      className={`relative group mx-auto w-full transition-transform duration-300 hover:-translate-y-1 ${sizeClasses[size]} ${className}`}
    >
      {/* Subtle outer glow on hover */}
      <div className="absolute -inset-2 bg-gradient-to-b from-[#1F7664]/10 to-[#C99A56]/15 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 -z-10" />

      {/* Book Mockup Container */}
      <div className="relative rounded-2xl overflow-hidden shadow-[0_18px_40px_-12px_rgba(18,63,54,0.22)] bg-white border border-[#123F36]/10 flex flex-col items-center">
        {/* Badge if provided */}
        {badge && (
          <div className="absolute top-3 right-3 z-20 bg-[#123F36] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#C99A56]" />
            {badge}
          </div>
        )}

        {/* Primary Image Tag - Direct path for easy user replacement */}
        <div className="w-full relative aspect-[3/4] bg-gradient-to-b from-[#EDF7F3]/40 to-white flex items-center justify-center overflow-hidden">
          <img
            id={`mockup-${alt.toLowerCase().replace(/\s+/g, '-')}`}
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full h-full object-contain p-2 drop-shadow-md transition-transform duration-500 group-hover:scale-[1.02]"
          />

          {/* Spine light reflection effect for book feel */}
          <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/10 via-white/20 to-transparent pointer-events-none" />
        </div>

        {/* Caption below mockup */}
        <div className="w-full bg-[#FAFCFB] border-t border-[#EDF7F3] p-3 text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#123F36]">
            <BookOpen className="w-3.5 h-3.5 text-[#1F7664]" />
            <span className="truncate">{title}</span>
          </div>
          {subtitle && (
            <p className="text-[11px] text-[#68716E] mt-0.5 line-clamp-1">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
