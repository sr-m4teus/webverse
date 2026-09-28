export type Plano = {
  nome: string;
  descricao: string;
  /** Preço em reais. Enquanto for null, a seção mostra "Orçamento pelo WhatsApp". */
  preco: number | null;
  /** Texto curto ao lado do preço, ex.: "pagamento único" ou "/mês". */
  periodo?: string;
  inclui: string[];
};

// TODO: definir preço. Com `preco: null`, o site pede orçamento pelo WhatsApp.
export const planos: Plano[] = [
  {
    nome: "Site em órbita",
    descricao: "Tudo que seu negócio precisa para ser encontrado e chamado no WhatsApp.",
    preco: null,
    periodo: "pagamento único",
    inclui: [
      "Página com a cara do seu negócio",
      "Botão direto pro WhatsApp",
      "Configurado para aparecer no Google",
      "Perfeito no celular",
      "Endereço próprio (.com.br)",
      "No ar em até 7 dias",
    ],
  },
];
