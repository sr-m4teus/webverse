type Props = {
  children: string;
  /** "padrao": sobre fundo escuro. "escuro": sobre fundo orbita. "cometa": selo de destaque. */
  variante?: "padrao" | "escuro" | "cometa";
  /** Mostra o `//` na frente (padrão: sim). */
  barras?: boolean;
  className?: string;
};

const estilos = {
  padrao: "border border-linha text-orbita",
  escuro: "border border-on-orbita/30 text-on-orbita",
  cometa: "bg-cometa text-on-orbita",
};

export function Selo({ children, variante = "padrao", barras = true, className = "" }: Props) {
  return (
    <span
      className={`flex w-fit items-center rounded-full px-3 py-1 font-mono text-xs font-bold uppercase tracking-[0.08em] ${estilos[variante]} ${className}`}
    >
      {barras && "// "}
      {children}
    </span>
  );
}
