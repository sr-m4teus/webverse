import { Mail, MessageCircle } from "lucide-react";
import { linkEmail, linkWhatsapp, site } from "@/config/site";
import { rodape } from "@/content/textos";
import { Logo } from "@/components/marca/Logo";
import { Container } from "@/components/ui/Container";
import { IconeInstagram } from "@/components/ui/icones";

export function Footer() {
  const ano = new Date().getFullYear();
  const links = [
    { href: linkWhatsapp, texto: "WhatsApp", icone: <MessageCircle className="size-5" aria-hidden="true" />, externo: true },
    { href: site.instagram, texto: `Instagram ${site.instagramHandle}`, icone: <IconeInstagram className="size-5" />, externo: true },
    { href: linkEmail, texto: site.email, icone: <Mail className="size-5" aria-hidden="true" />, externo: false },
  ];

  return (
    <footer className="border-t border-linha pt-12 pb-28 md:pb-12">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo altura={28} className="h-7 w-auto" />
            <p className="mt-3 text-texto-suave">{site.slogan}</p>
          </div>
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.texto}>
                <a
                  href={l.href}
                  {...(l.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex min-h-11 items-center gap-3 font-semibold transition-colors hover:text-orbita"
                >
                  {l.icone}
                  {l.texto}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-linha pt-6 text-sm text-texto-suave sm:flex-row sm:justify-between">
          <p>© {ano} Webverse</p>
          <p className="font-mono text-xs">{rodape.assinatura}</p>
        </div>
      </Container>
    </footer>
  );
}
