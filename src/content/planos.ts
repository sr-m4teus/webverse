export type Plano = {
  nome: string;
  /** Preço em reais (pagamento único). Use null para mostrar "Orçamento pelo WhatsApp". */
  preco: number | null;
  /** Prazo de entrega em dias, contado a partir do recebimento das fotos e informações. */
  prazoDias: number;
  /** Frase curta abaixo do nome. */
  descricao: string;
  inclui: string[];
  /** Destaca o cartão (borda na cor da marca + selo). */
  destaque?: string;
};

export const planos: Plano[] = [
  {
    nome: "Órbita Baixa",
    preco: 997,
    prazoDias: 7,
    descricao: "Pra sair do zero e aparecer.",
    inclui: ["Site de uma página", "Botão direto pro WhatsApp", "Pronto pro Google", "1 rodada de ajustes"],
  },
  {
    nome: "Órbita",
    preco: 1797,
    prazoDias: 14,
    descricao: "Pra quem quer ser achado no mapa.",
    inclui: [
      "Tudo do Órbita Baixa",
      "Até 5 páginas",
      "Mapa e horários",
      "Perfil da Empresa no Google",
      "2 rodadas de ajustes",
    ],
    destaque: "RECOMENDADO",
  },
  {
    nome: "Galáxia",
    preco: 2797,
    prazoDias: 21,
    descricao: "Pra vender direto pelo site.",
    inclui: [
      "Tudo do Órbita",
      "Catálogo com até 30 itens",
      "Pedido direto pelo WhatsApp",
      "3 rodadas de ajustes",
    ],
  },
];

export type Extra = { nome: string; preco: string };

export const extras: Extra[] = [
  { nome: "Página adicional", preco: "R$ 250 cada" },
  { nome: "Textos do site", preco: "R$ 200" },
  { nome: "Logo simples", preco: "R$ 350" },
  { nome: "E-mail profissional", preco: "R$ 120" },
  { nome: "Agendamento online", preco: "R$ 200" },
  { nome: "Entrega expressa (metade do prazo)", preco: "+30%" },
];

export const manutencao = {
  nome: "Manutenção",
  preco: 69,
  periodo: "/mês",
  inclui: ["Hospedagem", "Domínio sempre em dia", "Até 2 alterações por mês"],
};

export const condicoes = [
  "Pagamento: 50% no início e 50% na entrega, no Pix.",
  "O domínio (.com.br) fica no seu nome e é pago por você.",
];
