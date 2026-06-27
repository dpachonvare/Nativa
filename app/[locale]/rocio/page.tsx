import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductActionSlot from "@/components/ProductActionSlot";
import { HERO_RITUAL } from "@/lib/products";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.rocio" });
  return { title: t("title"), description: t("description") };
}

function RocioContent() {
  const t = useTranslations("rocio");
  const notItems = t.raw("whatItIsNot.items") as string[];
  const ingredients = t.raw("ingredients.items") as {
    name: string;
    note: string;
  }[];
  const steps = t.raw("howToUse.steps") as string[];
  const seals = t.raw("seals.items") as string[];

  return (
    <main id="main">
      {/* Encabezado / héroe del producto */}
      <section className="bg-nativa-cacao text-nativa-marfil">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[2.5rem] shadow-lg">
            <Image
              src="/brand/rocio-bottle.jpg"
              alt="NATIVA ROCÍO — Hydrating Milk Tonic, 150 ml"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-nativa-arena">
              {t("eyebrow")}
            </p>
            <h1 className="font-display text-5xl text-nativa-marfil sm:text-6xl">
              {t("name")}
            </h1>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-nativa-arena">
              {t("type")} · {t("format")}
            </p>
            <p className="mt-6 font-display text-2xl italic text-nativa-marfil/90">
              {t("tagline")}
            </p>
            <p className="mt-3 text-sm text-nativa-arena">{t("usage")}</p>

            {/* Slot de acción cart-ready */}
            <div className="mt-8 rounded-3xl bg-nativa-marfil/10 p-6">
              <p className="font-display text-lg text-nativa-marfil">
                {t("action.preLaunchTitle")}
              </p>
              <p className="mt-1 text-sm text-nativa-marfil/75">
                {t("action.preLaunchBody")}
              </p>
              <div className="mt-4">
                <ProductActionSlot ritual={HERO_RITUAL} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es / Qué no es */}
      <section className="bg-nativa-marfil">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-nativa-cacao">
              {t("whatItIs.title")}
            </h2>
            <p className="mt-4 leading-relaxed text-nativa-cacao/80">
              {t("whatItIs.body")}
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl text-nativa-cacao">
              {t("whatItIsNot.title")}
            </h2>
            <ul className="mt-4 space-y-2">
              {notItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-nativa-humo"
                >
                  <span aria-hidden="true" className="mt-1 text-nativa-terracota">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Experiencia sensorial */}
      <section className="bg-nativa-lino">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-display text-3xl text-nativa-cacao">
            {t("sensorial.title")}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-nativa-cacao/80">
            {t("sensorial.body")}
          </p>
        </div>
      </section>

      {/* Ingredientes */}
      <section className="bg-nativa-marfil">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-nativa-cacao">
              {t("ingredients.title")}
            </h2>
            <p className="mt-3 text-nativa-humo">{t("ingredients.subtitle")}</p>
          </div>
          <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {ingredients.map((ing, i) => (
              <li
                key={i}
                className="rounded-2xl border border-nativa-arena/60 bg-nativa-lino px-6 py-5"
              >
                <p className="font-display text-xl text-nativa-cacao">
                  {ing.name}
                </p>
                <p className="mt-1 text-sm text-nativa-humo">{ing.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Modo de uso */}
      <section className="bg-nativa-lino">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-center font-display text-3xl text-nativa-cacao">
            {t("howToUse.title")}
          </h2>
          <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {steps.map((step, i) => (
              <li key={i} className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-nativa-terracota font-display text-xl text-nativa-marfil">
                  {i + 1}
                </span>
                <p className="mt-4 leading-relaxed text-nativa-cacao/80">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Promesa + SPF + sellos */}
      <section className="bg-nativa-marfil">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="rounded-3xl bg-nativa-cacao px-8 py-12 text-center text-nativa-marfil">
            <h2 className="font-display text-2xl">{t("promise.title")}</h2>
            <p className="mt-4 text-lg leading-relaxed text-nativa-marfil/85">
              {t("promise.body")}
            </p>
            <div className="mx-auto mt-8 max-w-xl border-t border-nativa-marfil/20 pt-6">
              <p className="font-display text-lg">{t("spf.title")}</p>
              <p className="mt-2 text-sm leading-relaxed text-nativa-marfil/75">
                {t("spf.body")}
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xs uppercase tracking-[0.3em] text-nativa-humo">
              {t("seals.title")}
            </h3>
            <ul className="mt-5 flex flex-wrap items-center justify-center gap-3">
              {seals.map((seal, i) => (
                <li
                  key={i}
                  className="rounded-full border border-nativa-arena bg-nativa-lino px-5 py-2 text-sm text-nativa-cacao"
                >
                  {seal}
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-5 max-w-lg text-xs italic text-nativa-humo">
              {t("seals.disclaimer")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default async function RocioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <RocioContent />
      <Footer />
    </>
  );
}
