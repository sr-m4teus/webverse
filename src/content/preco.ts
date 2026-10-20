// Seção "Preço": o valor do site é combinado por orçamento (textos em
// src/content/textos.ts → precoTextos). Aqui fica só a manutenção mensal.

export const brl = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(v);

export const manutencao = {
  nome: "Manutenção",
  /** Mostra o selo "OPCIONAL" ao lado do nome. */
  opcional: true,
  preco: 69,
  periodo: "/mês",
  inclui: ["Hospedagem", "Domínio sempre em dia", "Até 2 alterações por mês"],
};

export const condicoes = [
  "O domínio (.com.br) fica no seu nome e é pago por você.",
  "Sem a manutenção, a hospedagem fica por sua conta.",
];
