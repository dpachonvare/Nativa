/**
 * Logo NATIVA — wordmark tipográfico con sol, en SVG.
 *
 * Sirve de respaldo robusto: el sitio nunca depende de un PNG ausente.
 * Cuando existan los archivos en /public/brand/ (Logo.png), pueden
 * sustituirse con next/image en los puntos de uso.
 */
interface LogoProps {
  className?: string;
  withTagline?: boolean;
}

export default function Logo({ className, withTagline = false }: LogoProps) {
  return (
    <span
      className={`inline-flex flex-col items-center leading-none ${className ?? ""}`}
    >
      <span className="inline-flex items-center gap-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="text-nativa-terracota"
        >
          <circle cx="12" cy="12" r="4.5" fill="currentColor" />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * Math.PI) / 4;
            const x1 = 12 + Math.cos(angle) * 7.5;
            const y1 = 12 + Math.sin(angle) * 7.5;
            const x2 = 12 + Math.cos(angle) * 10.5;
            const y2 = 12 + Math.sin(angle) * 10.5;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            );
          })}
        </svg>
        <span
          className="font-display text-2xl tracking-[0.25em] text-nativa-cacao"
          style={{ fontWeight: 500 }}
        >
          NATIVA
        </span>
      </span>
      {withTagline && (
        <span className="mt-1 text-[0.6rem] uppercase tracking-[0.35em] text-nativa-humo">
          Rituales de nuestra tierra
        </span>
      )}
    </span>
  );
}
