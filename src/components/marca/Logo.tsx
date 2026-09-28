import Image from "next/image";

/** Logotipo horizontal (SVG oficial em public/brand). Proporção 540×92. */
export function Logo({ altura = 28, className = "", prioridade = false }: { altura?: number; className?: string; prioridade?: boolean }) {
  const largura = Math.round((altura * 540) / 92);
  return (
    <Image
      src="/brand/logo-horizontal.svg"
      alt="Webverse"
      width={largura}
      height={altura}
      priority={prioridade}
      className={className}
    />
  );
}
