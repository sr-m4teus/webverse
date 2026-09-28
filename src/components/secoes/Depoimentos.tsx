import { depoimentos } from "@/content/depoimentos";
import { depoimentosTextos } from "@/content/textos";
import { Secao } from "@/components/ui/Secao";

/** Oculta enquanto não houver depoimentos reais em src/content/depoimentos.ts. */
export function Depoimentos() {
  if (depoimentos.length === 0) return null;
  return (
    <Secao id="depoimentos" selo={depoimentosTextos.selo} titulo={depoimentosTextos.titulo}>
      <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {depoimentos.map((d) => (
          <li key={d.nome + d.negocio}>
            <figure className="flex h-full flex-col rounded-cartao border border-linha bg-superficie p-6 sm:p-7">
              <blockquote className="flex-1 text-lg">
                <p>“{d.texto}”</p>
              </blockquote>
              <figcaption className="mt-6">
                <span className="block font-bold">{d.nome}</span>
                <span className="block font-mono text-xs text-texto-suave">{d.negocio}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
