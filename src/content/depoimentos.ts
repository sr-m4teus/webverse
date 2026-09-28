export type Depoimento = {
  /** O que o cliente disse (sem aspas). */
  texto: string;
  /** Nome de quem falou. */
  nome: string;
  /** Negócio e cidade, ex.: "Padaria Pão Quente · Belo Horizonte". */
  negocio: string;
};

// A seção de depoimentos só aparece quando este array tiver pelo menos 1 item.
// Use apenas depoimentos reais, com autorização do cliente.
export const depoimentos: Depoimento[] = [];
