import { Headset, Receipt, ScanBarcode, ShieldCheck, SlidersHorizontal, WifiOff } from "lucide-react";
import { diferenciais, segmentos } from "@/content/textos";
import { Secao } from "@/components/ui/Secao";

// Na mesma ordem de `diferenciais.itens`.
const icones = [WifiOff, ScanBarcode, Receipt, ShieldCheck, Headset, SlidersHorizontal];

export function Diferenciais() {
  return (
    <Secao id="diferenciais" selo={diferenciais.selo} titulo={diferenciais.titulo} subtitulo={diferenciais.subtitulo} fundo="superficie">
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {diferenciais.itens.map((item, i) => {
          const Icone = icones[i % icones.length];
          return (
            <li key={item.titulo} className="rounded-cartao border border-linha bg-fundo p-6 sm:p-7">
              <Icone className="size-7 text-orbita" aria-hidden="true" />
              <h3 className="mt-5 font-titulo text-lg font-bold leading-tight tracking-[-0.01em]">{item.titulo}</h3>
              <p className="mt-2 text-texto-suave">{item.texto}</p>
            </li>
          );
        })}
      </ul>

      <div className="mt-16">
        <h3 className="font-mono text-sm font-bold tracking-[0.08em] text-texto-suave">
          {"// "}
          {segmentos.selo}
        </h3>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {segmentos.itens.map((s) => (
            <li key={s} className="rounded-full border border-linha bg-fundo px-4 py-2 font-semibold">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </Secao>
  );
}
