import type { Trecho } from "./tipos";

// Textos das seções da página. Nos títulos, `{ destaque: "..." }` marca a
// palavra que aparece na cor da marca.

export const hero = {
  selo: "NOVO NO UNIVERSO",
  titulo: ["Seu negócio já tem um ", { destaque: "planeta" }, " nesse universo?"] as Trecho[],
  subtitulo:
    "A gente cria sites para quem empreende. Com a cara do seu negócio, no ar a partir de 7 dias e sem complicação.",
  botaoPrimario: "Chama no WhatsApp",
  botaoSecundario: "Ver como funciona",
};

export const problema = {
  selo: "ERRO 404",
  titulo: ["Seu cliente te procurou no Google. ", { destaque: "Achou?" }] as Trecho[],
  texto: "Antes de ir até você, a pessoa pesquisa. Se não aparece nada, ela vai no concorrente que aparece.",
  busca: "padaria perto de mim",
  resultadoNegativo: "nenhum resultado para o seu negócio",
  resultadoConcorrentes: "3 concorrentes aparecendo",
};

export const oQueVem = {
  selo: "INVENTÁRIO",
  titulo: ["O que vem no ", { destaque: "seu site" }] as Trecho[],
  subtitulo: "Tudo pronto para seu cliente te achar e te chamar. Sem você precisar mexer em nada.",
  comando: "webverse --incluso",
  itens: [
    "página com a cara do seu negócio",
    "botão direto pro WhatsApp",
    "aparecendo no Google",
    "perfeito no celular",
    "endereço próprio (.com.br)",
    "link pra bio do Instagram",
  ],
};

export const comoFunciona = {
  selo: "COMO FUNCIONA",
  titulo: ["Missão em ", { destaque: "3 fases" }] as Trecho[],
  fases: [
    { titulo: "Você chama no WhatsApp", texto: "Conta do seu negócio e do que precisa." },
    { titulo: "Manda fotos e infos", texto: "Logo, fotos, horários, cardápio ou serviços." },
    { titulo: "Seu site em órbita", texto: "No ar a partir de 7 dias. Missão cumprida." },
  ],
};

export const levelUp = {
  selo: "LEVEL UP",
  titulo: ["Instagram é ótimo. Com site, é ", { destaque: "outro nível." }] as Trecho[],
  nivel1: {
    rotulo: "LV. 1 · SÓ INSTAGRAM",
    itens: ["Só te acha quem já te segue", "Não aparece no Google", "Informação perdida no feed", "Depende do algoritmo"],
  },
  nivel2: {
    rotulo: "LV. 2 · INSTA + SITE",
    itens: ["Te acha quem ainda não te conhece", "Aparece no Google", "Tudo organizado num link", "Um endereço que é seu"],
  },
};

export const portfolioTextos = {
  selo: "PORTFÓLIO",
  titulo: [{ destaque: "Planetas" }, " que a gente já colocou em órbita"] as Trecho[],
  seloExemplo: "EXEMPLO",
  verSite: "Ver site",
  verExemplo: "Ver exemplo",
  emBreve: "Em breve",
};

export const depoimentosTextos = {
  selo: "TRANSMISSÕES RECEBIDAS",
  titulo: ["Quem já está ", { destaque: "em órbita" }] as Trecho[],
};

export const planosTextos = {
  selo: "PLANOS",
  titulo: ["Quanto custa entrar em ", { destaque: "órbita?" }] as Trecho[],
  subtitulo: "Pagamento único, sem mensalidade obrigatória. Escolhe o plano e chama no WhatsApp.",
  semPreco: "Orçamento pelo WhatsApp: resposta rápida e sem compromisso",
  pagamentoUnico: "pagamento único",
  prazo: (dias: number) => `NO AR EM ${dias} DIAS`,
  botao: (plano: string) => `Quero o ${plano}`,
  mensagem: (plano: string) => `Oi! Vim pelo site e quero o plano ${plano} 🪐`,
  extrasTitulo: "Extras",
  extrasSubtitulo: "Adicione a qualquer plano.",
  manutencaoSubtitulo: "Pra você não se preocupar com nada depois que o site estiver no ar.",
};

export const duvidas = {
  selo: "DÚVIDAS",
  titulo: ["Perguntas ", { destaque: "frequentes" }] as Trecho[],
};

export const ctaFinal = {
  selo: "PRESS START",
  titulo: ["Bora colocar seu negócio em órbita?"] as Trecho[],
  texto: "Chama a gente no WhatsApp. Seu site pode estar no ar a partir de 7 dias.",
  botaoWhatsapp: "Chama no WhatsApp",
  botaoInstagram: "Segue no Instagram",
};

export const rodape = {
  assinatura: "// feito com código e café",
};
