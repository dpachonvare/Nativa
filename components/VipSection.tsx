import { useTranslations } from "next-intl";
import VipForm from "./VipForm";

/**
 * Bloque de captura de lista VIP. Reutilizable en Home y en /vip.
 * `namespace` permite usar el copy de home.vip o el de la página vip.
 */
interface VipSectionProps {
  namespace?: "home.vip" | "vip";
  source?: string;
}

export default function VipSection({
  namespace = "home.vip",
  source = "vip-section",
}: VipSectionProps) {
  const t = useTranslations(namespace);

  return (
    <section
      id="vip"
      className="bg-nativa-cacao text-nativa-marfil"
      aria-labelledby="vip-title"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center md:py-24">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-nativa-arena">
          {t("eyebrow")}
        </p>
        <h2
          id="vip-title"
          className="font-display text-3xl leading-tight sm:text-4xl"
        >
          {t("title")}
        </h2>
        <p className="mt-5 max-w-xl text-nativa-marfil/80">{t("subtitle")}</p>
        <div className="mt-9 flex w-full justify-center">
          <VipForm source={source} />
        </div>
      </div>
    </section>
  );
}
