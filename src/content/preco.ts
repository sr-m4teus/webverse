// Seção "Preço". Os valores dos sistemas são passados por orçamento (textos em
// src/content/textos.ts → precoTextos). Aqui ficam os tipos de licença e a
// manutenção dos sites.

export const brl = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(v);

export const licencas = [
  { nome: "Mensal", texto: "Paga por mês, sem fidelidade." },
  { nome: "Anual", texto: "Um pagamento por ano, sai mais em conta." },
  { nome: "Vitalícia", texto: "Paga uma vez e o sistema é seu." },
];

export const incluiSistemas = [
  "Instalação e cadastro inicial",
  "Treinamento da equipe",
  "Suporte pelo WhatsApp",
];

export const manutencao = {
  nome: "Manutenção",
  preco: 69,
  periodo: "/mês",
  inclui: ["Hospedagem", "Domínio sempre em dia", "Até 2 alterações por mês"],
};

export const condicoes = ["O domínio (.com.br) fica no seu nome e é pago por você."];
