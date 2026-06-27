import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Logo from "./Logo";
import LocaleSwitcher from "./LocaleSwitcher";
import VipForm from "./VipForm";

export default function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");

  return (
    <footer className="border-t border-nativa-arena/50 bg-nativa-lino">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-1">
            <Logo withTagline />
            <p className="mt-4 font-display text-lg italic text-nativa-humo">
              {t("modernRituals")}
            </p>
          </div>

          {/* Rituales */}
          <nav aria-label={t("ritualsCol")}>
            <h2 className="text-xs uppercase tracking-[0.2em] text-nativa-humo">
              {t("ritualsCol")}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/rocio" className="text-nativa-cacao hover:text-nativa-terracota">
                  {tn("rocio")}
                </Link>
              </li>
              <li>
                <Link href="/rituales" className="text-nativa-cacao hover:text-nativa-terracota">
                  {tn("rituales")}
                </Link>
              </li>
              <li>
                <Link href="/manifiesto" className="text-nativa-cacao hover:text-nativa-terracota">
                  {tn("manifiesto")}
                </Link>
              </li>
            </ul>
            <h2 className="mt-6 text-xs uppercase tracking-[0.2em] text-nativa-humo">
              {t("social")}
            </h2>
            <a
              href="https://instagram.com/nativa.skincare"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-nativa-cacao hover:text-nativa-terracota"
            >
              {t("instagram")}
            </a>
          </nav>

          {/* VIP */}
          <div className="lg:col-span-2">
            <h2 className="text-xs uppercase tracking-[0.2em] text-nativa-humo">
              {t("vipCol")}
            </h2>
            <p className="mt-4 font-display text-xl text-nativa-cacao">
              {t("vipBlurb")}
            </p>
            <div className="mt-4">
              <VipForm source="footer" />
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-nativa-arena/50 pt-6">
          <p className="max-w-3xl text-xs leading-relaxed text-nativa-humo">
            {t("claimsNote")}
          </p>
          <div className="mt-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-xs text-nativa-humo">
              © {new Date().getFullYear()} NATIVA. {t("rights")}
            </p>
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
