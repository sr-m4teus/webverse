import { ArrowRight, Search, X } from "lucide-react";
import { problema } from "@/content/textos";
import { Container } from "@/components/ui/Container";
import { Selo } from "@/components/ui/Selo";
import { Titulo } from "@/components/ui/Titulo";

export function Problema() {
  return (
    <section aria-labelledby="problema-titulo" className="bg-superficie py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Selo variante="cometa">{problema.selo}</Selo>
          <Titulo id="problema-titulo" trechos={problema.titulo} className="mt-5 text-[2rem] sm:text-5xl" />
          <p className="mt-5 max-w-lg text-lg text-texto-suave sm:text-xl">{problema.texto}</p>
        </div>

        {/* Ilustração: uma busca sem o seu negócio nos resultados */}
        <figure className="rounded-bloco border border-linha bg-fundo p-5 sm:p-7">
          <div className="flex items-center gap-3 rounded-full border border-linha bg-superficie px-5 py-3.5">
            <Search className="size-5 shrink-0 text-texto-suave" aria-hidden="true" />
            <span className="truncate text-base text-texto">{problema.busca}</span>
            <span className="cursor-piscando -ml-2 h-5 w-0.5 bg-orbita" aria-hidden="true" />
          </div>
          <figcaption className="mt-6 space-y-3 font-mono text-sm sm:text-base">
            <p className="flex items-start gap-3 text-cometa">
              <X className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
              <span>{problema.resultadoNegativo}</span>
            </p>
            <p className="flex items-start gap-3 text-texto-suave">
              <ArrowRight className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
              <span>{problema.resultadoConcorrentes}</span>
            </p>
          </figcaption>
          <div className="mt-6 space-y-3" aria-hidden="true">
            {[0.9, 0.75, 0.6].map((w, i) => (
              <div key={i} className="rounded-cartao border border-linha p-4">
                <div className="h-2.5 rounded-full bg-linha" style={{ width: `${w * 60}%` }} />
                <div className="mt-2.5 h-2 rounded-full bg-linha/60" style={{ width: `${w * 90}%` }} />
              </div>
            ))}
          </div>
        </figure>
      </Container>
    </section>
  );
}
