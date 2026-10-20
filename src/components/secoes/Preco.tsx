import { Check, MessageCircle, Wrench } from "lucide-react";
import { whatsappCom } from "@/config/site";
import { brl, condicoes, manutencao } from "@/content/preco";
import { precoTextos as t } from "@/content/textos";
import { Botao } from "@/components/ui/Botao";
import { Secao } from "@/components/ui/Secao";
import { Selo } from "@/components/ui/Selo";

export function Preco() {
  return (
    <Secao id="preco" selo={t.selo} titulo={t.titulo} subtitulo={t.subtitulo}>
      <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_1fr] lg:gap-6">
        {/* Orçamento sob medida */}
        <div className="flex flex-col rounded-bloco border-2 border-orbita bg-superficie p-6 sm:p-8">
          <h3 className="font-titulo text-2xl font-extrabold leading-tight">{t.ofertaTitulo}</h3>
          <p className="mt-3 text-lg text-texto-suave">{t.ofertaTexto}</p>
          <ul className="mt-6 flex-1 space-y-3 border-t border-linha pt-6">
            {t.ofertaItens.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-orbita" strokeWidth={3} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Botao
            href={whatsappCom(t.ofertaMensagem)}
            externo
            className="mt-8 w-full sm:w-auto sm:self-start"
            icone={<MessageCircle className="size-5" aria-hidden="true" />}
          >
            {t.ofertaBotao}
          </Botao>
        </div>

        {/* Manutenção mensal */}
        <div className="flex flex-col rounded-bloco border border-linha p-6 sm:p-8">
          <h3 className="flex items-center gap-3 font-titulo text-xl font-extrabold">
            <Wrench className="size-6 text-orbita" aria-hidden="true" />
            {manutencao.nome}
            {manutencao.opcional && (
              <Selo barras={false} className="ml-1">
                OPCIONAL
              </Selo>
            )}
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
