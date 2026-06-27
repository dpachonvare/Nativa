import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RitualsGrid from "@/components/RitualsGrid";
import VipSection from "@/components/VipSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.rituals" });
  return { title: t("title"), description: t("description") };
}

function RitualsHeader() {
  const t = useTranslations("rituals.page");
  return (
    <section className="bg-nativa-lino">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-nativa-terracota">
          {t("eyebrow")}
        </p>
        <h1 className="font-display text-4xl text-nativa-cacao sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-nativa-cacao/80">
          {t("subtitle")}
        </p>
      </div>
    </section>
  );
}

export default async function RitualsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main id="main">
        <RitualsHeader />
        <section className="bg-nativa-marfil">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <RitualsGrid />
          </div>
        </section>
        <VipSection namespace="home.vip" source="rituals" />
      </main>
      <Footer />
    </>
  );
}
