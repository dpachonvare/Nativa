import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { RITUALS } from "@/lib/products";

/**
 * Grilla de los 5 rituales (NATIVA Originals).
 * ROCÍO disponible (con ficha); los otros 4 "Próximamente / Avísame".
 * Reutilizable en Home y en la página /rituales.
 */
export default function RitualsGrid() {
  const t = useTranslations("rituals.items");
  const tc = useTranslations("common");

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {RITUALS.map((ritual) => {
        const available = ritual.status === "available";
        const card = (
          <article className="group flex h-full flex-col rounded-3xl border border-nativa-arena/60 bg-nativa-marfil p-7 transition-colors hover:border-nativa-terracota/50">
            {/* Imagen del frasco para ROCÍO; marco editorial para los próximos */}
            <div className="relative mb-6 flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl bg-nativa-lino">
              {ritual.slug === "rocio" ? (
                <Image
                  src="/brand/rocio-bottle.jpg"
                  alt={`NATIVA ${ritual.name}`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover"
                />
              ) : (
                <span className="font-display text-3xl tracking-[0.2em] text-nativa-arena">
                  {ritual.name}
                </span>
              )}
            </div>

            <div className="mb-2 flex items-center justify-between gap-2">
              <span
                className={`text-[0.65rem] uppercase tracking-[0.2em] ${
                  available ? "text-nativa-terracota" : "text-nativa-humo"
                }`}
              >
                {available ? tc("available") : tc("comingSoon")}
              </span>
              <span className="text-xs text-nativa-humo">{ritual.format}</span>
            </div>

            <h3 className="font-display text-2xl tracking-wide text-nativa-cacao">
              {ritual.name}
            </h3>
            <p className="mt-1 text-sm italic text-nativa-humo">
              {t(`${ritual.slug}.type`)}
            </p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-nativa-cacao/80">
              {t(`${ritual.slug}.shortDescription`)}
            </p>

            <span
              className={`mt-6 inline-flex items-center text-sm font-medium ${
                available ? "text-nativa-terracota" : "text-nativa-humo"
              }`}
            >
              {available ? tc("learnMore") : tc("notifyMe")}
              <span aria-hidden="true" className="ml-1 transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </article>
        );

        return (
          <li key={ritual.slug}>
            <Link
              href={available ? "/rocio" : "/vip"}
              className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-nativa-terracota focus-visible:ring-offset-2"
            >
              {card}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
