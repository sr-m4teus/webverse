import type { Trecho } from "@/content/tipos";

type Props = {
  trechos: Trecho[];
  como?: "h1" | "h2";
  /** Cor da palavra-chave. Em fundo orbita, use "escuro". */
  destaque?: "orbita" | "escuro";
  className?: string;
  id?: string;
};

export function Titulo({ trechos, como: Tag = "h2", destaque = "orbita", className = "", id }: Props) {
  const corDestaque = destaque === "orbita" ? "text-orbita" : "underline decoration-4 underline-offset-[0.18em]";
  return (
    <Tag id={id} className={`titulo ${className}`}>
      {trechos.map((t, i) =>
        typeof t === "string" ? (
          t
        ) : (
          <span key={i} className={corDestaque}>
            {t.destaque}
          </span>
        ),
      )}
    </Tag>
  );
}
