import { Check, Globe, MessageCircle } from "lucide-react";
import { whatsappCom } from "@/config/site";
import { brl, condicoes, incluiSistemas, licencas, manutencao } from "@/content/preco";
import { precoTextos as t } from "@/content/textos";
import { Botao } from "@/components/ui/Botao";
import { Secao } from "@/components/ui/Secao";
import { Selo } from "@/components/ui/Selo";

export function Preco() {
  return (
    <Secao id="preco" selo={t.selo} titulo={t.titulo} subtitulo={t.subtitulo}>
      <div className="mt-12 grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:gap-6">
        {/* Sistemas: licença + orçamento */}
        <div className="flex flex-col rounded-bloco border-2 border-orbita bg-superficie p-6 sm:p-8">
          <h3 className="font-titulo text-2xl font-extrabold leading-tight">{t.sistemasTitulo}</h3>
          <p className="mt-3 text-lg text-texto-suave">{t.sistemasTexto}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {licencas.map((l) => (
              <li key={l.nome} className="rounded-cartao border border-linha bg-fundo p-4">
                <span className="block font-titulo text-lg font-extrabold text-orbita">{l.nome}</span>
                <span className="mt-1 block text-sm text-texto-suave">{l.texto}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex-1 space-y-3 border-t border-linha pt-6">
            {incluiSistemas.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-orbita" strokeWidth={3} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Botao
            href={whatsappCom(t.sistemasMensagem)}
            externo
            className="mt-8 w-full sm:w-auto sm:self-start"
            icone={<MessageCircle className="size-5" aria-hidden="true" />}
          >
            {t.sistemasBotao}
          </Botao>
        </div>

        {/* Sites: orçamento + manutenção opcional */}
        <div className="flex flex-col rounded-bloco border border-linha p-6 sm:p-8">
          <h3 className="flex items-center gap-3 font-titulo text-xl font-extrabold">
            <Globe className="size-6 text-orbita" aria-hidden="true" />
            {t.sitesTitulo}
          </h3>
          <p className="mt-2 text-texto-suave">{t.sitesTexto}</p>
          <p className="mt-6 flex items-center gap-2 font-semibold">
            {manutencao.nome}
            <Selo barras={false}>OPCIONAL</Selo>
          </p>
          <p className="mt-1 text-sm text-texto-suave">{t.manutencaoSubtitulo}</p>
          <p className="mt-4 flex items-baseline gap-1">
            <span className="font-titulo text-4xl font-extrabold tracking-[-0.02em] text-orbita">{brl(manutencao.preco)}</span>
            <span className="text-texto-suave">{manutencao.periodo}</span>
          </p>
          <ul className="mt-5 flex-1 space-y-3">
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
