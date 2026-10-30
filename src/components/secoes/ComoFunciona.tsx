import { comoFunciona } from "@/content/textos";
import { Secao } from "@/components/ui/Secao";

const coresCirculo = ["bg-orbita", "bg-texto", "bg-sinal", "bg-cometa"];

export function ComoFunciona() {
  return (
    <Secao id="como-funciona" selo={comoFunciona.selo} titulo={comoFunciona.titulo}>
      <ol className="mt-12 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {comoFunciona.fases.map((fase, i) => (
          <li key={fase.titulo} className="rounded-cartao border border-linha bg-superficie p-6 sm:p-7">
            <span
              className={`flex size-14 items-center justify-center rounded-full font-mono text-lg font-bold text-on-orbita ${coresCirculo[i % coresCirculo.length]}`}
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-6 font-titulo text-xl font-bold leading-tight tracking-[-0.01em]">
              <span className="sr-only">Etapa {i + 1}: </span>
              {fase.titulo}
            </h3>
            <p className="mt-2 text-texto-suave">{fase.texto}</p>
          </li>
        ))}
      </ol>
    </Secao>
  );
}
