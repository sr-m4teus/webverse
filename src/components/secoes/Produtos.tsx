import { Check, Croissant, Globe, MessageCircle, Receipt, ShoppingBag, Store, UtensilsCrossed } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { whatsappCom } from "@/config/site";
import { produtos, type Icone } from "@/content/produtos";
import { produtosTextos as t } from "@/content/textos";
import { Botao } from "@/components/ui/Botao";
import { Secao } from "@/components/ui/Secao";
import { Selo } from "@/components/ui/Selo";

const icones: Record<Icone, ComponentType<SVGProps<SVGSVGElement>>> = {
  caixa: Store,
  comanda: Croissant,
  restaurante: UtensilsCrossed,
  gestao: ShoppingBag,
  fiscal: Receipt,
  site: Globe,
};

export function Produtos() {
  return (
    <Secao id="sistemas" selo={t.selo} titulo={t.titulo} subtitulo={t.subtitulo}>
      <ul className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {produtos.map((p) => {
          const Icone = icones[p.icone];
          return (
            <li key={p.id} id={p.id} className="flex">
              <article
                aria-labelledby={`${p.id}-nome`}
                className="flex w-full flex-col rounded-bloco border border-linha bg-superficie p-6 transition-colors hover:border-orbita/60 sm:p-7"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex size-12 items-center justify-center rounded-cartao bg-orbita text-on-orbita">
                    <Icone className="size-6" aria-hidden="true" />
                  </span>
                  {p.emBreve && (
                    <Selo variante="cometa" barras={false}>
                      {t.emBreve}
                    </Selo>
                  )}
                </div>
                <h3 id={`${p.id}-nome`} className="mt-6 font-titulo text-2xl font-extrabold tracking-[-0.02em]">
                  {p.nome}
                </h3>
                <p className="mt-1 font-semibold text-orbita">{p.resumo}</p>
                <p className="mt-4 text-texto-suave">{p.descricao}</p>
                <ul className="mt-5 flex-1 space-y-2.5 border-t border-linha pt-5 text-sm">
                  {p.destaques.map((d) => (
                    <li key={d} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-sinal" strokeWidth={3} aria-hidden="true" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 font-mono text-xs text-texto-suave">
                  <span className="font-bold text-texto">{t.paraQuem}:</span> {p.paraQuem}
                </p>
                <Botao
                  href={whatsappCom(p.mensagem)}
                  externo
                  variante="secundario"
                  tamanho="sm"
                  className="mt-6 self-start"
                  icone={<MessageCircle className="size-4" aria-hidden="true" />}
                  aria-label={`${t.botao}: ${p.nome}`}
                >
                  {t.botao}
                </Botao>
              </article>
            </li>
          );
        })}
      </ul>
    </Secao>
  );
}
