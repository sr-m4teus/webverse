import { Check, X } from "lucide-react";
import { problema } from "@/content/textos";
import { Container } from "@/components/ui/Container";
import { Selo } from "@/components/ui/Selo";
import { Terminal } from "@/components/ui/Terminal";
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

        {/* Ilustração: o log de um dia ruim no caixa */}
        <Terminal titulo="~/caixa.log" className="bg-fundo">
          <ul className="space-y-3">
            {problema.log.map((linha) => (
              <li key={linha} className="flex items-start gap-3 text-cometa">
                <X className="mt-1 size-4 shrink-0" strokeWidth={3} aria-hidden="true" />
                <span>{linha}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 flex items-center gap-3 border-t border-linha pt-5 text-orbita">
            <Check className="size-4 shrink-0" strokeWidth={3} aria-hidden="true" />
            <span>{problema.solucao}</span>
            <span className="cursor-piscando -ml-2 inline-block h-4 w-2 bg-orbita" aria-hidden="true" />
          </p>
        </Terminal>
      </Container>
    </section>
  );
}
