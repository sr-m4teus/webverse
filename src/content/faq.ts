export type Pergunta = { pergunta: string; resposta: string };

export const faq: Pergunta[] = [
  {
    pergunta: "Precisa de internet pra funcionar?",
    resposta:
      "Não. Os sistemas de caixa rodam no computador do seu negócio e continuam vendendo sem internet. A internet só é usada para a nota fiscal, e se ela cair a nota sai em contingência.",
  },
  {
    pergunta: "Funciona com o leitor, a impressora e a balança que eu já tenho?",
    resposta:
      "Na maioria dos casos, sim. Leitor de código de barras USB, impressora térmica e impressora de etiquetas comuns funcionam. A gente confere seu equipamento antes de instalar.",
  },
  {
    pergunta: "Emite nota fiscal?",
    resposta:
      "Sim. A NFC-e sai do próprio caixa, autorizada pela SEFAZ-BA. Você precisa do certificado digital A1 e do CSC, e a gente ajuda a conseguir os dois.",
  },
  {
    pergunta: "Já uso outro sistema. Dá pra trocar?",
    resposta:
      "Dá. A gente traz seus produtos e preços e continua a numeração das notas de onde o sistema antigo parou.",
  },
  {
    pergunta: "E se o computador quebrar?",
    resposta:
      "O sistema faz backup automático a cada fechamento de caixa. Com a cópia em um pendrive ou na nuvem, a gente reinstala e você volta de onde parou.",
  },
  {
    pergunta: "Minha equipe vai conseguir usar?",
    resposta:
      "Vai. As telas são feitas para o balcão, com poucos campos e atalhos de teclado. E o treinamento é feito no seu negócio, com o sistema já valendo.",
  },
  {
    pergunta: "Quanto custa?",
    resposta:
      "Depende do sistema e de quantos caixas seu negócio tem. A licença pode ser mensal, anual ou vitalícia. Chama no WhatsApp que a gente passa o orçamento rapidinho e sem compromisso.",
  },
];
