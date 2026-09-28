export const site = {
  nome: "Webverse",
  dominio: "https://usewebverse.com.br",
  instagram: "https://instagram.com/usewebverse",
  instagramHandle: "@usewebverse",
  whatsapp: "55XXXXXXXXXXX", // TODO: preencher com DDI+DDD+número
  mensagemWhatsapp: "Oi! Vim pelo site e quero colocar meu negócio em órbita 🪐",
  email: "contato@usewebverse.com.br", // TODO: confirmar
  prazoDias: 7,

  titulo: "Webverse | Sites para quem empreende",
  descricao:
    "Seu negócio no Google, no celular e com botão pro WhatsApp. Site com a sua cara, no ar em até 7 dias.",
  slogan: "Sites para quem empreende",

  // Analytics: deixe `null` para não carregar nada.
  // Plausible: { tipo: "plausible", dominio: "usewebverse.com.br" }
  // Google Analytics: { tipo: "ga", id: "G-XXXXXXXXXX" }
  analytics: null as
    | null
    | { tipo: "plausible"; dominio: string }
    | { tipo: "ga"; id: string },
};

export const linkWhatsapp = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.mensagemWhatsapp)}`;
export const linkEmail = `mailto:${site.email}`;
