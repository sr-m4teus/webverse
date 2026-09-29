export const site = {
  nome: "Webverse",
  dominio: "https://usewebverse.com.br",
  instagram: "https://instagram.com/usewebverse",
  instagramHandle: "@usewebverse",
  whatsapp: "5577998612496",
  mensagemWhatsapp: "Oi! Vim pelo site e quero colocar meu negócio em órbita 🪐",
  email: "usewebverse@gmail.com",
  prazoDias: 7,

  titulo: "Webverse | Sites para quem empreende",
  descricao:
    "Seu negócio no Google, no celular e com botão pro WhatsApp. Site com a sua cara, no ar a partir de 7 dias.",
  slogan: "Sites para quem empreende",

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
