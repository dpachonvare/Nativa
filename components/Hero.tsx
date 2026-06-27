import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

/**
 * Hero de la Home — enraizado + promesa visible.
 * Columna derecha: logo complementario (mujer + orquídea) sobre tarjeta
 * con el mismo crema del arte para que no se vea costura.
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

        {/* Pieza visual de marca — logo complementario */}
        <div className="hero-animate hero-delay-3 relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2.5rem] bg-[#f5e6d7] shadow-sm">
          <Image
            src="/brand/NATIVA_Logo_Complementario.png"
            alt="NATIVA — Rituales de nuestra tierra"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 40vw"
            className="object-contain p-2"
          />
        </div>
      </div>
    </section>
  );
}
