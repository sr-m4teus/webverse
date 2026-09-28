// Pontinhos de estrela discretos. Posições fixas (em %) para o
// HTML ser idêntico em todo build.
const PONTOS: Array<[x: number, y: number, r: number, o: number]> = [
  [6, 12, 1.2, 0.5], [18, 30, 0.8, 0.35], [27, 8, 1, 0.45], [41, 22, 0.7, 0.3],
  [52, 6, 1.3, 0.55], [63, 34, 0.8, 0.35], [74, 14, 1, 0.5], [88, 9, 0.8, 0.4],
  [94, 28, 1.2, 0.45], [11, 58, 0.9, 0.35], [34, 72, 1.1, 0.4], [47, 88, 0.8, 0.3],
  [69, 66, 1, 0.4], [82, 84, 1.2, 0.5], [96, 62, 0.8, 0.35], [3, 90, 1, 0.4],
  [58, 52, 0.7, 0.3], [23, 94, 0.9, 0.35],
];

export function Estrelas({ className = "", cor = "var(--color-texto)" }: { className?: string; cor?: string }) {
  return (
    <svg className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} aria-hidden="true" focusable="false">
      {PONTOS.map(([x, y, r, o], i) => (
        <circle key={i} cx={`${x}%`} cy={`${y}%`} r={r * 1.4} fill={cor} opacity={o} />
      ))}
    </svg>
  );
}
