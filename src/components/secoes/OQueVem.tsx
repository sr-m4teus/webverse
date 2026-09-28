import { Check } from "lucide-react";
import { oQueVem } from "@/content/textos";
import { Secao } from "@/components/ui/Secao";
import { Terminal } from "@/components/ui/Terminal";

export function OQueVem() {
  return (
    <Secao id="o-que-vem" selo={oQueVem.selo} titulo={oQueVem.titulo} subtitulo={oQueVem.subtitulo}>
      <Terminal titulo="~/seu-negocio" className="mt-12 max-w-2xl">
        <p className="text-texto">
          <span className="text-sinal" aria-hidden="true">
            &gt;{" "}
          </span>
          {oQueVem.comando}
        </p>
        <ul className="mt-4 space-y-2.5">
          {oQueVem.itens.map((item) => (
            <li key={item} className="flex items-start gap-3 text-texto">
              <Check className="mt-1 size-4 shrink-0 text-sinal sm:mt-1.5" strokeWidth={3} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-texto-suave" aria-hidden="true">
          <span className="text-sinal">&gt;</span> <span className="cursor-piscando inline-block h-4 w-2 translate-y-0.5 bg-texto" />
        </p>
      </Terminal>
    </Secao>
  );
}
