import { Check, MessageCircle } from "lucide-react";
import { linkWhatsapp } from "@/config/site";
import { planos } from "@/content/planos";
import { planosTextos } from "@/content/textos";
import { Botao } from "@/components/ui/Botao";
import { Secao } from "@/components/ui/Secao";

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export function Planos() {
  if (planos.length === 0) return null;
  const varios = planos.length > 1;
  return (
    <Secao id="planos" selo={planosTextos.selo} titulo={planosTextos.titulo}>
      <ul className={`mt-12 grid gap-6 ${varios ? "md:grid-cols-2 lg:grid-cols-3" : "max-w-3xl"}`}>
        {planos.map((p) => (
          <li
            key={p.nome}
            className={`rounded-bloco border border-linha bg-superficie p-6 sm:p-8 ${varios ? "" : "md:grid md:grid-cols-2 md:gap-8"}`}
          >
            <div>
              <h3 className="font-titulo text-2xl font-bold leading-tight">{p.nome}</h3>
              <p className="mt-3 text-texto-suave">{p.descricao}</p>
              <div className="mt-6">
                {p.preco === null ? (
                  <p className="font-semibold text-texto">{planosTextos.semPreco}</p>
                ) : (
                  <p>
                    <span className="font-titulo text-4xl font-extrabold text-orbita">{brl.format(p.preco)}</span>
                    {p.periodo && <span className="ml-2 text-texto-suave">{p.periodo}</span>}
                  </p>
                )}
              </div>
              <Botao
                href={linkWhatsapp}
                externo
                className="mt-6 w-full sm:w-auto"
                icone={<MessageCircle className="size-5" aria-hidden="true" />}
              >
                {p.preco === null ? planosTextos.botao : "Chama no WhatsApp"}
              </Botao>
            </div>
            <ul className="mt-8 space-y-3 border-t border-linha pt-6 md:mt-0 md:border-t-0 md:border-l md:pt-0 md:pl-8">
              {p.inclui.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-orbita" strokeWidth={3} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
