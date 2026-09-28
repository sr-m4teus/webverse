import { comoFunciona } from "@/content/textos";
import { Secao } from "@/components/ui/Secao";

const coresCirculo = ["bg-orbita", "bg-texto", "bg-cometa"];

export function ComoFunciona() {
  return (
    <Secao id="como-funciona" selo={comoFunciona.selo} titulo={comoFunciona.titulo} fundo="superficie">
      <ol className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">
        {comoFunciona.fases.map((fase, i) => (
          <li key={fase.titulo} className="rounded-cartao border border-linha bg-fundo p-6 sm:p-7">
            <span
              className={`flex size-14 items-center justify-center rounded-full font-mono text-lg font-bold text-on-orbita ${coresCirculo[i % 3]}`}
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-6 font-titulo text-xl font-bold leading-tight tracking-[-0.01em]">
              <span className="sr-only">Fase {i + 1}: </span>
              {fase.titulo}
            </h3>
            <p className="mt-2 text-texto-suave">{fase.texto}</p>
          </li>
        ))}
      </ol>
    </Secao>
  );
}
