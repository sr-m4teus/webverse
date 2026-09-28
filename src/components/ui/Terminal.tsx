import type { ReactNode } from "react";

type Props = {
  titulo?: string;
  children: ReactNode;
  className?: string;
};

/** Janela de terminal: superfície, borda linha, três pontinhos no topo. */
export function Terminal({ titulo, children, className = "" }: Props) {
  return (
    <div className={`overflow-hidden rounded-bloco border border-linha bg-superficie ${className}`}>
      <div className="flex items-center gap-2 border-b border-linha px-4 py-3">
        <span className="size-3 rounded-full bg-cometa" aria-hidden="true" />
        <span className="size-3 rounded-full bg-orbita" aria-hidden="true" />
        <span className="size-3 rounded-full bg-linha" aria-hidden="true" />
        {titulo && <span className="ml-2 font-mono text-xs text-texto-suave">{titulo}</span>}
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed sm:p-6 sm:text-base">{children}</div>
    </div>
  );
}
