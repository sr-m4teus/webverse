export type ItemPortfolio = {
  /** Nome do negócio. */
  nome: string;
  /** Tipo de negócio (aparece abaixo do nome). */
  tipo: string;
  /** Imagem do site (print). Coloque o arquivo em public/portfolio/. Ideal: 1200×750 (16:10). */
  imagem: string;
  /** Texto alternativo da imagem. */
  alt: string;
  /** Endereço do site no ar (ou caminho de um exemplo, como "/exemplos/padaria"). Use null se ainda não tiver link. */
  url: string | null;
  /** true = item de demonstração (mostra o selo "EXEMPLO"). Remova quando entrar cliente real. */
  exemplo?: boolean;
};

// TODO: trocar os exemplos por clientes reais.
// Os exemplos apontam para os sites mock em public/exemplos/ (npm run exemplos regenera os prints).
export const portfolio: ItemPortfolio[] = [
  {
    nome: "Padaria do Bairro",
    tipo: "Padaria",
    imagem: "/portfolio/exemplo-padaria.webp",
    alt: "Exemplo de site de padaria com cardápio, horários e botão do WhatsApp",
    url: "/exemplos/padaria",
    exemplo: true,
  },
  {
    nome: "Studio Bela",
    tipo: "Salão de beleza",
    imagem: "/portfolio/exemplo-salao.webp",
    alt: "Exemplo de site de salão de beleza com serviços e agendamento pelo WhatsApp",
    url: "/exemplos/salao",
    exemplo: true,
  },
  {
    nome: "Oficina Motor Forte",
    tipo: "Oficina mecânica",
    imagem: "/portfolio/exemplo-oficina.webp",
    alt: "Exemplo de site de oficina mecânica com serviços, endereço e orçamento pelo WhatsApp",
    url: "/exemplos/oficina",
    exemplo: true,
  },
];
