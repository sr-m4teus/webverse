export const site = {
  nome: "Webverse",
  dominio: "https://usewebverse.com.br",
  instagram: "https://instagram.com/usewebverse",
  instagramHandle: "@usewebverse",
  whatsapp: "5577998612496",
  mensagemWhatsapp: "Oi! Vim pelo site e quero conhecer os sistemas da Webverse pro meu negócio 🪐",
  email: "usewebverse@gmail.com",

  titulo: "Webverse | Sistemas para o comércio",
  descricao:
    "Caixa, estoque, comanda, delivery e nota fiscal (NFC-e) para mercados, padarias, lojas e restaurantes. Funciona sem internet, com instalação e suporte pelo WhatsApp.",
  slogan: "Sistemas para o comércio",

  // Analytics: deixe `null` para não carregar nada.
  // Plausible: { tipo: "plausible", dominio: "usewebverse.com.br" }
  // Google Analytics: { tipo: "ga", id: "G-XXXXXXXXXX" }
  analytics: null as
    | null
    | { tipo: "plausible"; dominio: string }
    | { tipo: "ga"; id: string },
};

/** Link do WhatsApp com uma mensagem pronta (padrão: `mensagemWhatsapp`). */
export const whatsappCom = (mensagem: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
export const linkWhatsapp = whatsappCom(site.mensagemWhatsapp);
export const linkEmail = `mailto:${site.email}`;
