import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VipForm from "@/components/VipForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.vip" });
  return { title: t("title"), description: t("description") };
}

function VipContent() {
  const t = useTranslations("vip");
  return (
    <main id="main">
      <section className="bg-nativa-marfil">
        <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center md:py-32">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-nativa-terracota">
            {t("eyebrow")}
          </p>
          <h1 className="font-display text-4xl text-nativa-cacao sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-nativa-cacao/80">
            {t("subtitle")}
          </p>
          <div className="mt-10 flex w-full justify-center">
            <VipForm source="vip-page" />
          </div>
          <p className="mt-8 font-display text-lg italic text-nativa-terracota">
            {t("promise")}
          </p>
        </div>
      </section>
    </main>
  );
}

export default async function VipPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <VipContent />
      <Footer />
    </>
  );
}
