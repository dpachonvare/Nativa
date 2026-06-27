import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

/**
 * Hero de la Home — enraizado + promesa visible.
 * Usa composición tipográfica/decorativa (sin depender de PNG ausentes).
 * Cuando exista /public/brand/Logo_Complementario.png, puede insertarse aquí
 * con next/image en la columna derecha.
 */
export default function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative overflow-hidden bg-nativa-marfil">
      <div className="noise-overlay absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
        <div className="hero-animate hero-delay-1">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-nativa-terracota">
            {t("tagline")}
          </p>
          <h1 className="font-display text-4xl leading-[1.05] text-nativa-cacao sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-nativa-cacao/80">
            {t("subtitle")}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/vip"
              className="inline-flex items-center justify-center rounded-full bg-nativa-terracota px-7 py-3 font-medium text-nativa-marfil transition-colors hover:bg-nativa-terracota-oscuro"
            >
              {t("ctaPrimary")}
            </Link>
            <Link
              href="/rocio"
              className="inline-flex items-center justify-center rounded-full border border-nativa-cacao/30 px-7 py-3 font-medium text-nativa-cacao transition-colors hover:border-nativa-cacao"
            >
              {t("ctaSecondary")}
            </Link>
          </div>
        </div>

        {/* Pieza visual de marca (placeholder editorial) */}
        <div className="hero-animate hero-delay-3 relative mx-auto aspect-[4/5] w-full max-w-md">
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-nativa-lino via-nativa-arena/60 to-nativa-terracota/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="font-display text-6xl tracking-[0.2em] text-nativa-cacao/80">
              ROCÍO
            </span>
            <span className="mt-3 text-xs uppercase tracking-[0.3em] text-nativa-humo">
              Hydrating Milky Toner
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
