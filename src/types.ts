export interface OfferPlan {
  id: 'basic' | 'complete';
  name: string;
  badge?: string;
  price: string;
  periodText: string;
  features: string[];
  bonusList?: string[];
  highlightText?: string;
  ctaText: string;
  checkoutUrl: string;
  isFeatured: boolean;
}

export interface BonusItem {
  id: string;
  number: number;
  mockupSrc: string;
  mockupTheme: 'green' | 'blue' | 'beige';
  title: string;
  description: string;
  benefits: string[];
  disclaimer?: string;
}
