import type { ReactNode } from "react";

type Variante = "primario" | "secundario" | "escuro" | "contorno-escuro";

type Props = {
  href: string;
  children: ReactNode;
  variante?: Variante;
  icone?: ReactNode;
  /** Abre em nova aba (links externos: WhatsApp, Instagram). */
  externo?: boolean;
  tamanho?: "md" | "sm";
  className?: string;
  "aria-label"?: string;
};

const estilos: Record<Variante, string> = {
  primario: "bg-orbita text-on-orbita hover:bg-texto",
  secundario: "border-2 border-linha text-texto hover:border-orbita hover:text-orbita",
  escuro: "bg-fundo text-texto hover:bg-superficie",
  "contorno-escuro": "border-2 border-on-orbita text-on-orbita hover:bg-on-orbita hover:text-orbita",
};

const tamanhos = {
  md: "min-h-12 px-6 text-base",
  sm: "min-h-10 px-4 text-sm",
};

export function Botao({
  href,
  children,
  variante = "primario",
  icone,
  externo = false,
  tamanho = "md",
  className = "",
  ...rest
}: Props) {
  return (
    <a
      href={href}
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-bold whitespace-nowrap transition-colors duration-200 ${estilos[variante]} ${tamanhos[tamanho]} ${className}`}
      {...rest}
    >
      {icone}
      {children}
    </a>
  );
}
