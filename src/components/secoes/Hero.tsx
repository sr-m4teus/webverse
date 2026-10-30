import { ArrowDown, BadgeCheck, MessageCircle, ScanBarcode, WifiOff } from "lucide-react";
import { linkWhatsapp } from "@/config/site";
import { caixaExemplo as cx, hero } from "@/content/textos";
import { Estrelas } from "@/components/marca/Estrelas";
import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { Selo } from "@/components/ui/Selo";
import { Titulo } from "@/components/ui/Titulo";

const moeda = (v: number) => v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function Hero() {
  const total = cx.itens.reduce((s, i) => s + i.total, 0);
  return (
    <section id="topo" aria-labelledby="hero-titulo" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <Estrelas />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <Selo>{hero.selo}</Selo>
          <Titulo
            como="h1"
            id="hero-titulo"
            trechos={hero.titulo}
            // min-h reserva a altura final (3 linhas) para
            // o texto não "pular" quando a fonte Unbounded terminar de carregar.
            className="mt-6 min-h-[3.12em] text-[2.1rem] min-[380px]:text-[2.35rem] min-[400px]:text-[2.5rem] sm:text-[3.4rem] lg:text-[3.25rem] xl:text-[3.6rem]"
          />
          <p className="mt-6 max-w-xl text-lg text-texto-suave sm:text-xl">{hero.subtitulo}</p>
          <div className="mt-9 flex flex-col gap-3 min-[420px]:flex-row">
            <Botao href={linkWhatsapp} externo icone={<MessageCircle className="size-5" aria-hidden="true" />}>
              {hero.botaoPrimario}
            </Botao>
            <Botao href="#sistemas" variante="secundario" icone={<ArrowDown className="size-5" aria-hidden="true" />}>
              {hero.botaoSecundario}
            </Botao>
          </div>
        </div>

        {/* Ilustração: tela de caixa (itens genéricos) */}
        <div aria-hidden="true" className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-6 rounded-[32px] bg-orbita/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-bloco border border-linha bg-superficie shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-linha px-4 py-3">
              <span className="size-3 rounded-full bg-cometa" />
              <span className="size-3 rounded-full bg-orbita" />
              <span className="size-3 rounded-full bg-linha" />
              <span className="ml-2 truncate font-mono text-xs text-texto-suave">{cx.janela}</span>
              <span className="ml-auto flex shrink-0 items-center gap-1.5 rounded-full border border-sinal/40 px-2 py-0.5 whitespace-nowrap font-mono text-[0.65rem] font-bold text-sinal">
                <WifiOff className="size-3" />
                {cx.offline}
              </span>
            </div>
            <div className="p-4 sm:p-5">
              <div className="flex items-center gap-3 rounded-cartao border border-orbita/60 bg-fundo px-4 py-3 font-mono text-sm text-texto-suave">
                <ScanBarcode className="size-5 text-orbita" />
                7891000100103
                <span className="cursor-piscando -ml-2 h-4 w-0.5 bg-orbita" />
              </div>
              <ul className="mt-4 divide-y divide-linha font-mono text-sm">
                {cx.itens.map((item, i) => (
                  <li key={item.nome} className="flex items-baseline gap-3 py-2.5">
                    <span className="text-texto-suave">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1 truncate text-texto">
                      {item.nome}
                      <span className="block text-xs text-texto-suave">{item.qtd}</span>
                    </span>
                    <span className="text-texto">{moeda(item.total)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex items-end justify-between rounded-cartao bg-orbita px-4 py-3 text-on-orbita">
                <span className="font-mono text-xs font-bold tracking-[0.08em]">{cx.rotuloTotal}</span>
                <span className="font-titulo text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl">R$ {moeda(total)}</span>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-xs">
                {cx.formas.map((f) => (
                  <span key={f} className="rounded-full border border-linha px-3 py-1 text-texto-suave">
                    {f}
                  </span>
                ))}
                <span className="ml-auto flex items-center gap-1.5 text-sinal">
                  <BadgeCheck className="size-4" />
                  {cx.nota}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
