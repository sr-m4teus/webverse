import { Check, X } from "lucide-react";
import { levelUp } from "@/content/textos";
import { Secao } from "@/components/ui/Secao";

export function LevelUp() {
  return (
    <Secao selo={levelUp.selo} titulo={levelUp.titulo} id="level-up">
      <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6">
        <div className="rounded-bloco border border-linha bg-superficie p-6 sm:p-8">
          <h3 className="font-mono text-sm font-bold tracking-[0.08em] text-texto-suave">{levelUp.nivel1.rotulo}</h3>
          <ul className="mt-6 space-y-4">
            {levelUp.nivel1.itens.map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg text-texto-suave">
                <X className="mt-1 size-5 shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-bloco bg-orbita p-6 text-on-orbita sm:p-8">
          <h3 className="font-mono text-sm font-bold tracking-[0.08em]">{levelUp.nivel2.rotulo}</h3>
          <ul className="mt-6 space-y-4">
            {levelUp.nivel2.itens.map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg font-semibold">
                <Check className="mt-1 size-5 shrink-0" strokeWidth={3} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Secao>
  );
}
