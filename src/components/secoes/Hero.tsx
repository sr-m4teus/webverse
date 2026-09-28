import { ArrowDown, MessageCircle } from "lucide-react";
import { linkWhatsapp } from "@/config/site";
import { hero } from "@/content/textos";
import { Estrelas } from "@/components/marca/Estrelas";
import { Planeta } from "@/components/marca/Planeta";
import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { Selo } from "@/components/ui/Selo";
import { Titulo } from "@/components/ui/Titulo";

export function Hero() {
  return (
    <section id="topo" aria-labelledby="hero-titulo" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <Estrelas />
      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <Selo>{hero.selo}</Selo>
          <Titulo
            como="h1"
            id="hero-titulo"
            trechos={hero.titulo}
            // min-h reserva a altura final (4 linhas no mobile, 3 no resto) para
            // o texto não "pular" quando a fonte Unbounded terminar de carregar.
            className="mt-6 min-h-[4.16em] sm:min-h-[3.12em] text-[2.1rem] min-[380px]:text-[2.35rem] min-[400px]:text-[2.5rem] sm:text-[3.4rem] lg:text-[3.25rem] xl:text-[3.6rem]"
          />
          <p className="mt-6 max-w-xl text-lg text-texto-suave sm:text-xl">{hero.subtitulo}</p>
          <div className="mt-9 flex flex-col gap-3 min-[420px]:flex-row">
            <Botao href={linkWhatsapp} externo icone={<MessageCircle className="size-5" aria-hidden="true" />}>
              {hero.botaoPrimario}
            </Botao>
            <Botao href="#como-funciona" variante="secundario" icone={<ArrowDown className="size-5" aria-hidden="true" />}>
              {hero.botaoSecundario}
            </Botao>
          </div>
        </div>
        <div className="relative -mr-24 ml-auto w-[min(88vw,420px)] sm:-mr-16 lg:mr-0 lg:w-full lg:max-w-[520px]">
          <Planeta id="planeta-hero" animado className="h-auto w-full" />
        </div>
      </Container>
    </section>
  );
}
