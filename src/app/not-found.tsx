import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { linkWhatsapp } from "@/config/site";
import { Estrelas } from "@/components/marca/Estrelas";
import { Logo } from "@/components/marca/Logo";
import { Planeta } from "@/components/marca/Planeta";
import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { Selo } from "@/components/ui/Selo";
import { Terminal } from "@/components/ui/Terminal";

export const metadata: Metadata = {
  title: "Página não encontrada | Webverse",
  robots: { index: false },
};

export default function NaoEncontrada() {
  return (
    <main id="conteudo" className="relative flex min-h-svh flex-col overflow-hidden">
      <Estrelas />
      <Container className="relative py-6">
        <Link href="/" aria-label="Webverse, voltar ao início" className="inline-block">
          <Logo altura={24} prioridade className="h-6 w-auto" />
        </Link>
      </Container>
      <Container className="relative grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <Selo variante="cometa">ERRO 404</Selo>
          <h1 className="titulo mt-6 text-[2.2rem] sm:text-6xl">
            Essa página saiu de <span className="text-orbita">órbita.</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-texto-suave">
            O endereço que você acessou não existe ou mudou de lugar. Bora voltar pra base?
          </p>
          <Terminal className="mt-8 max-w-md">
            <p>
              <span className="text-sinal">&gt;</span> cd /pagina-perdida
            </p>
            <p className="text-cometa">erro: planeta não encontrado</p>
            <p>
              <span className="text-sinal">&gt;</span> cd /
            </p>
          </Terminal>
          <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
            <Botao href="/" icone={<ArrowLeft className="size-5" aria-hidden="true" />}>
              Voltar pro início
            </Botao>
            <Botao
              href={linkWhatsapp}
              externo
              variante="secundario"
              icone={<MessageCircle className="size-5" aria-hidden="true" />}
            >
              Chama no WhatsApp
            </Botao>
          </div>
        </div>
        <Planeta id="planeta-404" animado className="mx-auto hidden w-full max-w-sm lg:block" />
      </Container>
    </main>
  );
}
