/**
 * Configurações da Oferta do PELAGEM BRILHANTE
 * Edite os links de checkout e preços facilmente aqui.
 */

export const OFFER_CONFIG = {
  basicPrice: "10",
  completePrice: "27,00",
  specialOfferPrice: "19,00",
  basicCheckoutUrl: "https://pay.lowify.com.br/checkout?product_id=NhMgin",
  completeCheckoutUrl: "https://pay.lowify.com.br/checkout?product_id=Cbe5jw",
  specialOfferCheckoutUrl: "https://pay.lowify.com.br/checkout?product_id=bK5x3Q",
};

/**
 * Order Bumps preparados para integração no checkout
 * (Conforme instrução: não aparecem na página de vendas, prontos no código para o checkout)
 */
export const ORDER_BUMPS = [
  {
    id: "bump-1",
    title: "30 RECEITAS E PETISCOS PARA UMA PELAGEM BONITA",
    description: "Ideias e receitas para complementar a rotina alimentar do seu cão com mais variedade.",
    price: "7,90",
    coverUrl: "/images/bump-receitas.png",
  },
  {
    id: "bump-2",
    title: "CALENDÁRIO DE BELEZA DO CÃO",
    description: "Uma rotina organizada de cuidados para saber quando fazer banho, escovação e outros cuidados com a pelagem.",
    price: "9,90",
    coverUrl: "/images/bump-calendario.png",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    question: "FUNCIONA PARA QUALQUER RAÇA?",
    answer: "Os princípios de cuidados podem ser aplicados a diferentes raças, adaptando a rotina ao tipo de pelagem e às necessidades individuais do cão.",
  },
  {
    question: "SERVE PARA CÃES DE PELO CURTO?",
    answer: "Sim. Cães de pelo curto também podem apresentar diferenças de brilho, textura e aparência da pelagem.",
  },
  {
    question: "PRECISO COMPRAR PRODUTOS CAROS?",
    answer: "Não. Um dos objetivos é justamente ajudar você a entender melhor quais cuidados realmente merecem atenção antes de sair comprando diversos produtos.",
  },
  {
    question: "FALA SOBRE ALIMENTAÇÃO?",
    answer: "O Plano Completo inclui um conteúdo específico sobre alimentação e pelagem.",
  },
  {
    question: "FALA SOBRE SUPLEMENTOS?",
    answer: "Sim. No Plano Completo existe um conteúdo complementar explicando os principais tipos de suplementos relacionados à pele e à pelagem. O uso deve respeitar as necessidades individuais do cão e orientação veterinária quando indicada.",
  },
  {
    question: "COMO RECEBO?",
    answer: "O conteúdo é digital e as informações de acesso são enviadas imediatamente após a confirmação da compra pelo e-mail cadastrado.",
  },
  {
    question: "TEM GARANTIA?",
    answer: "Sim. A compra possui garantia de 7 dias conforme as regras informadas no checkout. Se não gostar, basta solicitar o reembolso.",
  },
];

export const DOG_BREEDS = [
  {
    name: "Golden Retriever",
    coatType: "Pelo Longo & Dourado",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80",
    benefit: "Brilho e maciez exuberantes",
  },
  {
    name: "Spitz Alemão",
    coatType: "Pelo Volumoso & Duplo",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80",
    benefit: "Pelagem alinhada e fofa",
  },
  {
    name: "Pastor Alemão",
    coatType: "Pelo Médio & Denso",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=600&q=80",
    benefit: "Aspecto limpo e imponente",
  },
  {
    name: "Border Collie",
    coatType: "Pelo Sedoso & Liso",
    image: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f33?auto=format&fit=crop&w=600&q=80",
    benefit: "Textura macia ao toque",
  },
  {
    name: "Shih-tzu",
    coatType: "Pelo Longo & Fino",
    image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=600&q=80",
    benefit: "Sem nós e com toque aveludado",
  },
  {
    name: "Cão Sem Raça Definida (SRD)",
    coatType: "Todos os Tipos",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80",
    benefit: "Aparência de cão muito bem cuidado",
  },
];
