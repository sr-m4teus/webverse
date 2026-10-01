import { faixaDePreco, promocao } from "./planos";

export type Pergunta = { pergunta: string; resposta: string };

const faixa = faixaDePreco();

export const faq: Pergunta[] = [
  {
    pergunta: "Preciso entender de tecnologia?",
    resposta: "Nada. Você manda as informações e a gente cuida de tudo.",
  },
  {
    pergunta: "Em quanto tempo fica pronto?",
    resposta:
      "Depende do plano: 7 dias no Órbita Baixa, 14 no Órbita e 21 no Galáxia, contados a partir de quando a gente recebe suas fotos e informações. Tem entrega expressa, na metade do prazo, por +30%.",
  },
  {
    pergunta: "O site funciona no celular?",
    resposta: "Funciona e fica perfeito. A maioria dos seus clientes vai acessar por lá.",
  },
  {
    pergunta: "Vou aparecer no Google?",
    resposta:
      "A gente configura tudo para o Google encontrar seu site. Aparecer nas primeiras posições depende também de tempo e concorrência.",
  },
  {
    pergunta: "Posso pedir alterações depois?",
    resposta:
      "Pode sim! Cada plano inclui de 1 a 3 rodadas de ajustes antes da entrega. Depois que o site está no ar, a manutenção opcional (R$ 69/mês) cobre até 2 alterações por mês.",
  },
  {
    pergunta: "Preciso contratar a manutenção?",
    resposta:
      "Não, ela é opcional. Sem a manutenção, a hospedagem e as alterações depois da entrega ficam por sua conta. Com ela, por R$ 69/mês, a gente cuida da hospedagem, mantém o domínio em dia e faz até 2 alterações por mês.",
  },
  {
    pergunta: "Quanto custa?",
    resposta:
      (faixa ? `Os planos vão de ${faixa.min} a ${faixa.max}${promocao ? `, já com ${promocao.desconto}% off` : ""}. ` : "") +
      "Pagamento único e sem mensalidade obrigatória: 50% no início e 50% na entrega, no Pix. O domínio fica no seu nome e é pago por você. Na dúvida, chama no WhatsApp que a gente te ajuda a escolher.",
  },
];
