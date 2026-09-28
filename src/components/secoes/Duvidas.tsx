import { Plus } from "lucide-react";
import { faq } from "@/content/faq";
import { duvidas } from "@/content/textos";
import { Secao } from "@/components/ui/Secao";

export function Duvidas() {
  return (
    <Secao id="duvidas" selo={duvidas.selo} titulo={duvidas.titulo} fundo="superficie">
      <div className="mt-12 max-w-3xl divide-y divide-linha border-y border-linha">
        {faq.map((item) => (
          <details key={item.pergunta} className="group">
            <summary className="flex min-h-16 items-center justify-between gap-4 py-5 text-lg font-bold transition-colors hover:text-orbita">
              {item.pergunta}
              <Plus
                className="size-6 shrink-0 text-orbita transition-transform duration-200 group-open:rotate-45"
                aria-hidden="true"
              />
            </summary>
            <p className="pb-6 pr-10 text-texto-suave">{item.resposta}</p>
          </details>
        ))}
      </div>
    </Secao>
  );
}
