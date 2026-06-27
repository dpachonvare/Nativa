"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useTransition } from "react";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const t = useTranslations("common");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: string) {
    if (next === locale) return;
    startTransition(() => {
      // pathname de next-intl ya viene sin el prefijo de locale.
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div
      className="inline-flex items-center rounded-full border border-nativa-arena/70 text-xs"
      role="group"
      aria-label={t("selectLanguage")}
    >
      {routing.locales.map((loc) => {
        const active = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => switchTo(loc)}
            disabled={isPending}
            aria-pressed={active}
            className={`rounded-full px-3 py-1 uppercase tracking-wider transition-colors ${
              active
                ? "bg-nativa-cacao text-nativa-marfil"
                : "text-nativa-humo hover:text-nativa-cacao"
            }`}
          >
            {loc}
          </button>
        );
      })}
    </div>
  );
}
