// Produtos da Webverse. Nunca coloque aqui nome de cliente: descreva o tipo de
// negócio ("depósito de material de construção"), não quem usa.

export type Icone = "caixa" | "comanda" | "restaurante" | "gestao" | "fiscal" | "site";

export type Produto = {
  /** Âncora e chave do item. */
  id: string;
  nome: string;
  /** Uma linha: o que é. */
  resumo: string;
  /** Pra quem foi feito. */
  paraQuem: string;
  descricao: string;
  destaques: string[];
  icone: Icone;
  /** true = mostra o selo "EM BREVE". */
  emBreve?: boolean;
  /** Mensagem pronta do botão de WhatsApp do card. */
  mensagem: string;
};

export const produtos: Produto[] = [
  {
    id: "gondola",
    nome: "Gôndola",
    resumo: "Caixa e estoque para o varejo",
    paraQuem: "Mercados, mercearias, depósitos e lojas de material de construção",
    descricao:
      "Frente de caixa rápida no leitor de código de barras e estoque que bate de verdade. Roda no computador do seu negócio, sem depender de internet.",
    destaques: [
      "Caixa com Pix, dinheiro e troco, sangria e fechamento",
      "Venda por peso, entrada de nota e inventário",
      "Etiquetas de preço na impressora térmica",
      "Relatórios de lucro, margem e curva ABC",
    ],
    icone: "caixa",
    mensagem: "Oi! Vim pelo site e quero conhecer o Gôndola (caixa e estoque) 🪐",
  },
  {
    id: "comanda",
    nome: "Comanda",
    resumo: "Caixa por comanda para padarias",
    paraQuem: "Padarias, cafeterias e lanchonetes de balcão",
    descricao:
      "O cliente pega um cartão na entrada, consome pela loja e paga no caixa. Um bip abre a comanda, outro lança o produto.",
    destaques: [
      "Cartões numerados com código de barras",
      "Pão e frios por quilo, cafezinho por código curto",
      "Pagamento dividido: Pix, cartão, dinheiro e vale",
      "Fechamento do dia por forma de pagamento",
    ],
    icone: "comanda",
    mensagem: "Oi! Vim pelo site e quero conhecer o sistema de comandas para padaria 🪐",
  },
  {
    id: "salao-delivery",
    nome: "Salão & Delivery",
    resumo: "Cardápio online, garçom e caixa no mesmo sistema",
    paraQuem: "Hamburguerias, pizzarias e restaurantes",
    descricao:
      "Pedido do delivery chega direto no caixa, o garçom lança a mesa pelo celular e a gerência acompanha tudo em tempo real.",
    destaques: [
      "Cardápio digital com adicionais e sacola",
      "App do garçom com mesas e comandas",
      "Caixa com mesas, delivery e Pix",
      "Painel da gerência com cardápio e vendas",
    ],
    icone: "restaurante",
    emBreve: true,
    mensagem: "Oi! Vim pelo site e quero conhecer o sistema para restaurante e delivery 🪐",
  },
  {
    id: "storeflow",
    nome: "StoreFlow",
    resumo: "Gestão comercial com crediário",
    paraQuem: "Lojas de roupas, móveis, calçados e variedades",
    descricao:
      "Do pedido do vendedor ao caixa, com crediário em nota promissória, cobrança e metas da equipe. Uma ou várias lojas.",
    destaques: [
      "Vendedor monta o pedido, caixa recebe",
      "Crediário com carnê, juros, multa e cobrança",
      "Estoque com grade, curva ABC e balanço",
      "Painel de vendas, metas e ranking de vendedores",
    ],
    icone: "gestao",
    mensagem: "Oi! Vim pelo site e quero conhecer o StoreFlow (gestão com crediário) 🪐",
  },
  {
    id: "fiscal",
    nome: "Nota fiscal",
    resumo: "Emissão de NFC-e integrada ao caixa",
    paraQuem: "Quem usa os sistemas da Webverse na Bahia",
    descricao:
      "O caixa fecha a venda e a nota sai autorizada pela SEFAZ-BA, com QR Code, direto na impressora térmica. Sem programa à parte.",
    destaques: [
      "NFC-e autorizada em segundos",
      "Cupom impresso na térmica de 58 ou 80 mm",
      "Contingência quando a SEFAZ cai",
      "Aviso antes do certificado digital vencer",
    ],
    icone: "fiscal",
    mensagem: "Oi! Vim pelo site e quero saber da emissão de nota fiscal 🪐",
  },
  {
    id: "sites",
    nome: "Sites",
    resumo: "Site profissional com botão pro WhatsApp",
    paraQuem: "Clínicas, consultórios e profissionais liberais",
    descricao:
      "Seu negócio aparecendo no Google e no celular, com agendamento pelo WhatsApp e endereço próprio.",
    destaques: [
      "Página com a cara do seu negócio",
      "Agendamento com mensagem pronta",
      "Aparecendo no Google",
      "Perfeito no celular",
    ],
    icone: "site",
    mensagem: "Oi! Vim pelo site e quero um site pro meu negócio 🪐",
  },
];
