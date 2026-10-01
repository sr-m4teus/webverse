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

/**
 * Promoção nos planos (não vale para extras nem manutenção).
 * - Para desligar: `promocao = null`.
 * - `ate`: último dia da promoção ("AAAA-MM-DD"), só exibido no site. O site é
 *   estático: a promoção NÃO sai do ar sozinha, desligue manualmente.
 */
export const promocao: { desconto: number; ate: string | null } | null = {
  desconto: 30,
  ate: null,
};

/** Preço com a promoção aplicada (arredondado para baixo). */
export const precoFinal = (preco: number) =>
  promocao ? Math.floor(preco * (1 - promocao.desconto / 100)) : preco;

export const brl = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(v);

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
  /** Mostra o selo "OPCIONAL" ao lado do nome. */
  opcional: true,
  preco: 69,
  periodo: "/mês",
  inclui: ["Hospedagem", "Domínio sempre em dia", "Até 2 alterações por mês"],
};

export const condicoes = [
  "Pagamento: 50% no início e 50% na entrega, no Pix.",
  "O domínio (.com.br) fica no seu nome e é pago por você.",
  "Sem a manutenção, a hospedagem fica por sua conta.",
];

/** Menor e maior preço final dos planos, ex.: "R$ 697 a R$ 1.957". */
export function faixaDePreco() {
  const precos = planos.flatMap((p) => (p.preco === null ? [] : [precoFinal(p.preco)]));
  if (precos.length === 0) return null;
  return { min: brl(Math.min(...precos)), max: brl(Math.max(...precos)) };
}
