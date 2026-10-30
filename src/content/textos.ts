import type { Trecho } from "./tipos";

// Textos das seções da página. Nos títulos, `{ destaque: "..." }` marca a
// palavra que aparece na cor da marca.

export const hero = {
  selo: "SISTEMAS PARA O COMÉRCIO",
  titulo: ["O sistema que faz seu comércio ", { destaque: "girar." }] as Trecho[],
  subtitulo:
    "Caixa, estoque, comanda, delivery e nota fiscal para mercados, padarias, lojas e restaurantes. Funciona até sem internet, e quem instala e dá suporte é a gente.",
  botaoPrimario: "Chama no WhatsApp",
  botaoSecundario: "Ver os sistemas",
};

/** Tela de caixa ilustrativa do hero. Itens genéricos, sem marca nem cliente. */
export const caixaExemplo = {
  janela: "caixa-01 · aberto",
  offline: "OFFLINE OK",
  itens: [
    { nome: "Pão francês", qtd: "0,750 kg", total: 11.18 },
    { nome: "Leite integral 1L", qtd: "2 un", total: 11.98 },
    { nome: "Café torrado 500g", qtd: "1 un", total: 18.9 },
    { nome: "Queijo muçarela", qtd: "0,320 kg", total: 15.65 },
  ],
  rotuloTotal: "TOTAL",
  formas: ["Pix", "Dinheiro", "Cartão"],
  nota: "NFC-e autorizada",
};

export const problema = {
  selo: "CAIXA TRAVADO",
  titulo: ["Fila no caixa e estoque que ", { destaque: "não bate?" }] as Trecho[],
  texto:
    "Sistema que trava quando a internet cai, mensalidade cara, suporte que não atende e um monte de tela que ninguém usa. O seu negócio merece coisa melhor.",
  log: [
    "internet caiu: caixa parado",
    "estoque no sistema: 30 · na prateleira: 8",
    "suporte: aguarde na fila (posição 47)",
    "fechamento do caixa: diferença de R$ 112,00",
  ],
  solucao: "webverse: resolvendo",
};

export const produtosTextos = {
  selo: "SISTEMAS",
  titulo: ["Um sistema pra cada ", { destaque: "balcão" }] as Trecho[],
  subtitulo:
    "Feitos com quem está no caixa todo dia. Você começa com o que precisa e a gente ajusta ao jeito do seu negócio.",
  paraQuem: "Pra quem",
  emBreve: "EM BREVE",
  botao: "Quero conhecer",
};

export const segmentos = {
  selo: "PRA QUEM",
  itens: [
    "Mercados e mercearias",
    "Depósitos e material de construção",
    "Padarias e cafeterias",
    "Hamburguerias e pizzarias",
    "Lojas de roupas e móveis",
    "Clínicas e consultórios",
  ],
};

export const diferenciais = {
  selo: "POR QUE A WEBVERSE",
  titulo: ["Sem travar, sem ", { destaque: "enrolação" }] as Trecho[],
  subtitulo: "O que muda quando o sistema é feito pro seu dia a dia, e não pra uma planilha de vendas.",
  itens: [
    {
      titulo: "Funciona sem internet",
      texto: "O caixa roda no computador do seu negócio. A internet caiu, a venda continua.",
    },
    {
      titulo: "Feito pro balcão",
      texto: "Leitor de código de barras, atalhos de teclado, balança e impressora térmica. Venda em segundos.",
    },
    {
      titulo: "Nota fiscal integrada",
      texto: "A NFC-e sai do próprio caixa, autorizada pela SEFAZ, sem programa à parte.",
    },
    {
      titulo: "Seus dados protegidos",
      texto: "Backup automático todo fechamento de caixa. Cada operador com seu PIN e seu perfil.",
    },
    {
      titulo: "Suporte de perto",
      texto: "A gente instala, cadastra, treina sua equipe e atende no WhatsApp.",
    },
    {
      titulo: "Sob medida",
      texto: "Precisa de uma tela, um relatório ou um jeito diferente? A gente ajusta o sistema pra você.",
    },
  ],
};

export const comoFunciona = {
  selo: "COMO FUNCIONA",
  titulo: ["Do primeiro papo ao caixa ", { destaque: "rodando" }] as Trecho[],
  fases: [
    { titulo: "Conversa", texto: "Você conta como seu negócio funciona hoje e o que precisa resolver." },
    { titulo: "Implantação", texto: "A gente instala, cadastra os produtos e configura leitor, impressora e balança." },
    { titulo: "Treinamento", texto: "Sua equipe aprende no próprio balcão, com o sistema já valendo." },
    { titulo: "Suporte", texto: "Ficou dúvida ou quer mudar algo? É só chamar no WhatsApp." },
  ],
};

export const depoimentosTextos = {
  selo: "TRANSMISSÕES RECEBIDAS",
  titulo: ["Quem já está ", { destaque: "em órbita" }] as Trecho[],
};

export const precoTextos = {
  selo: "PREÇO",
  titulo: ["Licença do ", { destaque: "seu jeito" }] as Trecho[],
  subtitulo: "Sem taxa escondida e sem contrato de fidelidade. Você escolhe como prefere pagar.",
  texto:
    "O valor depende do sistema e de quantos caixas seu negócio tem. A gente passa o orçamento rápido e sem compromisso.",
  botao: "Pedir meu orçamento",
  mensagem: "Oi! Vim pelo site e quero um orçamento de sistema pro meu negócio 🪐",
};

export const duvidas = {
  selo: "DÚVIDAS",
  titulo: ["Perguntas ", { destaque: "frequentes" }] as Trecho[],
};

export const ctaFinal = {
  selo: "PRESS START",
  titulo: ["Bora colocar seu comércio em órbita?"] as Trecho[],
  texto: "Chama a gente no WhatsApp e conta como funciona seu negócio. A gente mostra o sistema rodando.",
  botaoWhatsapp: "Chama no WhatsApp",
  botaoInstagram: "Segue no Instagram",
};

export const rodape = {
  assinatura: "// feito com código e café",
};
