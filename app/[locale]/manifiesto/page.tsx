import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VipSection from "@/components/VipSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.manifesto" });
  return { title: t("title"), description: t("description") };
}

function ManifestoContent() {
  const t = useTranslations("manifesto");
  const values = t.raw("values") as { title: string; body: string }[];

  return (
    <main id="main">
      <section className="bg-nativa-marfil">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-nativa-terracota">
            {t("eyebrow")}
          </p>
          <h1 className="font-display text-4xl leading-tight text-nativa-cacao sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-nativa-cacao/80">
            {t("intro")}
          </p>
        </div>
      </section>

      <section className="bg-nativa-cacao text-nativa-marfil">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-display text-3xl">{t("bridge.title")}</h2>
          <p className="mt-5 text-lg leading-relaxed text-nativa-marfil/85">
            {t("bridge.body")}
          </p>
        </div>
      </section>

      <section className="bg-nativa-lino">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((value, i) => (
              <div
                key={i}
                className="rounded-3xl border border-nativa-arena/60 bg-nativa-marfil px-7 py-10"
              >
                <h3 className="font-display text-2xl text-nativa-cacao">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-nativa-humo">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-nativa-marfil">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-display text-3xl text-nativa-cacao">
            {t("woman.title")}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-nativa-cacao/80">
            {t("woman.body")}
          </p>
          <p className="mt-12 font-display text-2xl italic text-nativa-terracota">
            {t("closing")}
          </p>
        </div>
      </section>
    </main>
  );
}

export default async function ManifestoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <ManifestoContent />
      <VipSection namespace="home.vip" source="manifesto" />
      <Footer />
    </>
  );
}
