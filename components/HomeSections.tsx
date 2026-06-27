import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import RitualsGrid from "./RitualsGrid";

/** Empatía clima/manchas — gancho emocional (brief §4). */
export function ClimateEmpathy() {
  const t = useTranslations("home.climate");
  return (
    <section className="bg-nativa-lino">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-nativa-terracota">
          {t("eyebrow")}
        </p>
        <h2 className="font-display text-3xl leading-snug text-nativa-cacao sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-nativa-cacao/80">
          {t("body")}
        </p>
      </div>
    </section>
  );
}

/** Promesa de resultado (compliant). */
export function Promise() {
  const t = useTranslations("home.promise");
  const items = t.raw("items") as string[];
  return (
    <section className="bg-nativa-marfil">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <div className="text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-nativa-terracota">
            {t("eyebrow")}
          </p>
          <h2 className="font-display text-3xl text-nativa-cacao sm:text-4xl">
            {t("title")}
          </h2>
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {items.map((item, i) => (
            <li
              key={i}
              className="rounded-3xl border border-nativa-arena/60 bg-nativa-lino px-7 py-10 text-center"
            >
              <span className="font-display text-4xl text-nativa-terracota">
                0{i + 1}
              </span>
              <p className="mt-4 text-lg leading-relaxed text-nativa-cacao">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** ROCÍO como héroe en la Home. */
export function RocioHero() {
  const t = useTranslations("home.rocio");
  return (
    <section className="bg-nativa-cacao text-nativa-marfil">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[2.5rem] shadow-lg">
          <Image
            src="/brand/rocio-bottle.jpg"
            alt="NATIVA ROCÍO — Hydrating Milk Tonic, 150 ml"
            fill
            sizes="(max-width: 1024px) 90vw, 40vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-nativa-arena">
            {t("eyebrow")}
          </p>
          <h2 className="font-display text-4xl text-nativa-marfil sm:text-5xl">
            {t("name")}
          </h2>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-nativa-arena">
            {t("type")}
          </p>
          <p className="mt-6 font-display text-2xl italic text-nativa-marfil/90">
            {t("tagline")}
          </p>
          <p className="mt-4 max-w-md leading-relaxed text-nativa-marfil/75">
            {t("description")}
          </p>
          <Link
            href="/rocio"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-nativa-terracota px-7 py-3 font-medium text-nativa-marfil transition-colors hover:bg-nativa-terracota-oscuro"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Ciencia con alma. */
export function ScienceSoul() {
  const t = useTranslations("home.science");
  const items = t.raw("items") as { title: string; body: string }[];
  return (
    <section className="bg-nativa-marfil">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-nativa-terracota">
            {t("eyebrow")}
          </p>
          <h2 className="font-display text-3xl text-nativa-cacao sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-5 leading-relaxed text-nativa-cacao/80">{t("body")}</p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <div key={i} className="text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-nativa-terracota/40 font-display text-xl text-nativa-terracota">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-xl text-nativa-cacao">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-nativa-humo">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Los 5 rituales en la Home. */
export function RitualsHome() {
  const t = useTranslations("home.rituals");
  return (
    <section className="bg-nativa-lino">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-nativa-terracota">
            {t("eyebrow")}
          </p>
          <h2 className="font-display text-3xl text-nativa-cacao sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 leading-relaxed text-nativa-cacao/80">
            {t("subtitle")}
          </p>
        </div>
        <RitualsGrid />
      </div>
    </section>
  );
}

/** Honestidad SPF. */
export function SpfHonesty() {
  const t = useTranslations("home.spf");
  return (
    <section className="bg-nativa-marfil">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-nativa-terracota">
          {t("eyebrow")}
        </p>
        <h2 className="font-display text-2xl italic text-nativa-cacao sm:text-3xl">
          {t("title")}
        </h2>
        <p className="mt-4 leading-relaxed text-nativa-humo">{t("body")}</p>
      </div>
    </section>
  );
}
