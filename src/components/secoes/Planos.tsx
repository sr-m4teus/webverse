import { Check, MessageCircle, Plus, Wrench } from "lucide-react";
import { linkWhatsapp, whatsappCom } from "@/config/site";
import { condicoes, extras, manutencao, planos } from "@/content/planos";
import { planosTextos as t } from "@/content/textos";
import { Botao } from "@/components/ui/Botao";
import { Secao } from "@/components/ui/Secao";
import { Selo } from "@/components/ui/Selo";

const brl = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(v);

export function Planos() {
  if (planos.length === 0) return null;
  return (
    <Secao id="planos" selo={t.selo} titulo={t.titulo} subtitulo={t.subtitulo}>
      <ul className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-6">
        {planos.map((p) => (
          <li
            key={p.nome}
            className={`relative flex flex-col rounded-bloco bg-superficie p-6 sm:p-8 ${
              p.destaque ? "border-2 border-orbita" : "border border-linha"
            }`}
          >
            {p.destaque && (
              <Selo variante="cometa" barras={false} className="absolute -top-3.5 left-6 sm:left-8">
                {p.destaque}
              </Selo>
            )}
            <h3 className="font-titulo text-2xl font-extrabold leading-tight">{p.nome}</h3>
            <p className="mt-2 text-texto-suave">{p.descricao}</p>

            <div className="mt-6">
              {p.preco === null ? (
                <p className="font-semibold">{t.semPreco}</p>
              ) : (
                <p className="flex flex-wrap items-baseline gap-x-2">
                  <span className="font-titulo text-4xl font-extrabold tracking-[-0.02em] text-orbita">{brl(p.preco)}</span>
                  <span className="text-sm text-texto-suave">{t.pagamentoUnico}</span>
                </p>
              )}
              <p className="mt-3 font-mono text-xs font-bold tracking-[0.08em] text-texto-suave">
                {"// "}
                {t.prazo(p.prazoDias)}
              </p>
            </div>

            <ul className="mt-6 flex-1 space-y-3 border-t border-linha pt-6">
              {p.inclui.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-orbita" strokeWidth={3} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Botao
              href={p.preco === null ? linkWhatsapp : whatsappCom(t.mensagem(p.nome))}
              externo
              variante={p.destaque ? "primario" : "secundario"}
              className="mt-8 w-full"
              icone={<MessageCircle className="size-5" aria-hidden="true" />}
            >
              {t.botao(p.nome)}
            </Botao>
          </li>
        ))}
      </ul>

      <div className="mt-6 grid gap-5 lg:grid-cols-2 lg:gap-6">
        <div className="rounded-bloco border border-linha p-6 sm:p-8">
          <h3 className="flex items-center gap-3 font-titulo text-xl font-extrabold">
            <Plus className="size-6 text-orbita" aria-hidden="true" />
            {t.extrasTitulo}
          </h3>
          <p className="mt-2 text-texto-suave">{t.extrasSubtitulo}</p>
          <ul className="mt-5 divide-y divide-linha">
            {extras.map((e) => (
              <li key={e.nome} className="flex items-baseline justify-between gap-4 py-3">
                <span>{e.nome}</span>
                <span className="shrink-0 font-mono text-sm font-bold text-orbita">{e.preco}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col rounded-bloco border border-linha p-6 sm:p-8">
          <h3 className="flex items-center gap-3 font-titulo text-xl font-extrabold">
            <Wrench className="size-6 text-orbita" aria-hidden="true" />
            {manutencao.nome}
          </h3>
          <p className="mt-2 text-texto-suave">{t.manutencaoSubtitulo}</p>
          <p className="mt-5 flex items-baseline gap-1">
            <span className="font-titulo text-4xl font-extrabold tracking-[-0.02em] text-orbita">{brl(manutencao.preco)}</span>
            <span className="text-texto-suave">{manutencao.periodo}</span>
          </p>
          <ul className="mt-5 space-y-3">
            {manutencao.inclui.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-orbita" strokeWidth={3} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-8 space-y-1 border-t border-linha pt-5 text-sm text-texto-suave">
            {condicoes.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </Secao>
  );
}
