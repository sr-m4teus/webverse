import { MessageCircle } from "lucide-react";
import { linkWhatsapp } from "@/config/site";
import { Logo } from "@/components/marca/Logo";
import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";

const links = [
  { href: "#como-funciona", texto: "Como funciona" },
  { href: "#o-que-vem", texto: "O que vem" },
  { href: "#portfolio", texto: "Portfólio" },
  { href: "#planos", texto: "Planos" },
  { href: "#duvidas", texto: "Dúvidas" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-linha bg-fundo/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#topo" className="shrink-0" aria-label="Webverse, voltar ao início">
          <Logo altura={24} prioridade className="h-5 w-auto sm:h-6" />
        </a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm font-semibold text-texto-suave">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-texto">
                  {l.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Botao href={linkWhatsapp} externo tamanho="sm" icone={<MessageCircle className="size-4" aria-hidden="true" />}>
          Chama no WhatsApp
        </Botao>
      </Container>
    </header>
  );
}
