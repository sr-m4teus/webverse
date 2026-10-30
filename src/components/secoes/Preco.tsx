import { Check, MessageCircle } from "lucide-react";
import { whatsappCom } from "@/config/site";
import { incluiSistemas, licencas } from "@/content/preco";
import { precoTextos as t } from "@/content/textos";
import { Botao } from "@/components/ui/Botao";
import { Secao } from "@/components/ui/Secao";

export function Preco() {
  return (
    <Secao id="preco" selo={t.selo} titulo={t.titulo} subtitulo={t.subtitulo}>
      <div className="mt-12 rounded-bloco border-2 border-orbita bg-superficie p-6 sm:p-8">
        <p className="max-w-2xl text-lg text-texto-suave">{t.texto}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-3 sm:gap-4">
          {licencas.map((l) => (
            <li key={l.nome} className="rounded-cartao border border-linha bg-fundo p-5 sm:p-6">
              <span className="block font-titulo text-xl font-extrabold text-orbita">{l.nome}</span>
              <span className="mt-1 block text-texto-suave">{l.texto}</span>
            </li>
          ))}
        </ul>
        <ul className="mt-6 grid gap-3 border-t border-linha pt-6 sm:grid-cols-3">
          {incluiSistemas.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check className="mt-0.5 size-5 shrink-0 text-orbita" strokeWidth={3} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Botao
          href={whatsappCom(t.mensagem)}
          externo
          className="mt-8 w-full sm:w-auto"
          icone={<MessageCircle className="size-5" aria-hidden="true" />}
        >
          {t.botao}
        </Botao>
      </div>
    </Secao>
  );
}
