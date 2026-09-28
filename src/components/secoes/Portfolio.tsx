import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/content/portfolio";
import { portfolioTextos } from "@/content/textos";
import { Secao } from "@/components/ui/Secao";
import { Selo } from "@/components/ui/Selo";

function dominioDe(url: string | null, nome: string) {
  if (url) return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return `${nome.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "")}.com.br`;
}

export function Portfolio() {
  if (portfolio.length === 0) return null;
  return (
    <Secao id="portfolio" selo={portfolioTextos.selo} titulo={portfolioTextos.titulo} fundo="superficie">
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((item) => (
          <li key={item.nome} className="flex flex-col overflow-hidden rounded-cartao border border-linha bg-fundo">
            {/* Mockup de navegador */}
            <div className="flex items-center gap-1.5 border-b border-linha px-3 py-2.5" aria-hidden="true">
              <span className="size-2 rounded-full bg-linha" />
              <span className="size-2 rounded-full bg-linha" />
              <span className="size-2 rounded-full bg-linha" />
              <span className="ml-2 truncate rounded-full bg-superficie px-3 py-0.5 font-mono text-[11px] text-texto-suave">
                {dominioDe(item.url, item.nome)}
              </span>
            </div>
            <div className="relative aspect-[16/10] bg-superficie">
              <Image
                src={item.imagem}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top"
              />
              {item.exemplo && (
                <Selo variante="cometa" barras={false} className="absolute top-3 left-3">
                  {portfolioTextos.seloExemplo}
                </Selo>
              )}
            </div>
            <div className="flex flex-1 items-end justify-between gap-4 p-5">
              <div>
                <h3 className="font-titulo text-lg font-bold leading-tight">{item.nome}</h3>
                <p className="mt-1 text-sm text-texto-suave">{item.tipo}</p>
              </div>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 shrink-0 items-center gap-1 rounded-full border-2 border-linha px-4 text-sm font-bold transition-colors hover:border-orbita hover:text-orbita"
                >
                  {portfolioTextos.verSite}
                  <span className="sr-only"> de {item.nome} (abre em nova aba)</span>
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              ) : (
                <span className="shrink-0 font-mono text-xs text-texto-suave">{portfolioTextos.emBreve}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
