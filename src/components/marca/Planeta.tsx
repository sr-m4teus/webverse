type Props = {
  /** "claro": planeta orbita sobre fundo escuro. "escuro": planeta escuro sobre fundo orbita. */
  variante?: "claro" | "escuro";
  /** Satélite girando no anel (desligado automaticamente com prefers-reduced-motion). */
  animado?: boolean;
  /** Id único na página (usado no clipPath). */
  id: string;
  className?: string;
};

// Proporção do anel (elipse 28×9). O satélite gira num círculo de raio 28
// que é achatado para a elipse; um contra-transform mantém o satélite redondo.
const ACHATAR = 9 / 28;
// Posição inicial do satélite (igual ao logo), no espaço "desachatado".
const SAT_X = 10.6;
const SAT_Y = 32 + (26.2 - 32) / ACHATAR;

function Satelite({ cor, animado }: { cor: string; animado: boolean }) {
  if (!animado) return <circle cx="10.6" cy="26.2" r="4.5" fill={cor} />;
  return (
    <g transform={`translate(0 32) scale(1 ${ACHATAR}) translate(0 -32)`}>
      <g className="satelite-giro">
        <g className="satelite-contra" style={{ transformOrigin: `${SAT_X}px ${SAT_Y}px` }}>
          <circle cx={SAT_X} cy={SAT_Y} r="4.5" fill={cor} />
        </g>
      </g>
    </g>
  );
}

export function Planeta({ variante = "claro", animado = false, id, className }: Props) {
  const escuro = variante === "escuro";
  const corPlaneta = escuro ? "var(--color-on-orbita)" : "var(--color-orbita)";
  const corAnel = escuro ? "var(--color-on-orbita)" : "var(--color-texto)";
  const corSatelite = "var(--color-cometa)";
  const clip = `${id}-frente`;

  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <defs>
        <clipPath id={clip}>
          <rect x="-12" y="32" width="88" height="40" />
        </clipPath>
        <clipPath id={`${id}-planeta`}>
          <circle cx="32" cy="32" r="15" />
        </clipPath>
      </defs>
      <g transform="rotate(-22 32 32)">
        {/* Metade de trás do anel */}
        <path d="M4 32 A28 9 0 0 1 60 32" stroke={corAnel} strokeWidth="4" fill="none" strokeLinecap="round" />
        {animado && <Satelite cor={corSatelite} animado />}
        <circle cx="32" cy="32" r="15" fill={corPlaneta} />
        {/* No planeta escuro, um respiro separa o anel da frente do planeta */}
        {escuro && (
          <path
            d="M4 32 A28 9 0 0 0 60 32"
            stroke="var(--color-orbita)"
            strokeWidth="9"
            fill="none"
            clipPath={`url(#${id}-planeta)`}
          />
        )}
        {/* Metade da frente do anel */}
        <path d="M4 32 A28 9 0 0 0 60 32" stroke={corAnel} strokeWidth="4" fill="none" strokeLinecap="round" />
        {animado ? (
          <g clipPath={`url(#${clip})`}>
            <Satelite cor={corSatelite} animado />
          </g>
        ) : (
          <Satelite cor={corSatelite} animado={false} />
        )}
      </g>
    </svg>
  );
}
