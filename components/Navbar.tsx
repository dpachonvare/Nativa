"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import Logo from "./Logo";
import LocaleSwitcher from "./LocaleSwitcher";

const LINKS = [
  { href: "/rocio", key: "rocio" },
  { href: "/rituales", key: "rituales" },
  { href: "/manifiesto", key: "manifiesto" },
  { href: "/vip", key: "vip" },
] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-nativa-arena/40 bg-nativa-marfil/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" aria-label="NATIVA" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7 text-sm tracking-wide">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors hover:text-nativa-terracota ${
                      active ? "text-nativa-terracota" : "text-nativa-cacao"
                    }`}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              );
            })}
          </ul>
          <LocaleSwitcher />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden"
          aria-label={open ? t("closeMenu") : t("openMenu")}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-nativa-cacao"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h16" strokeLinecap="round" />
                <path d="M4 12h16" strokeLinecap="round" />
                <path d="M4 17h16" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-nativa-arena/40 bg-nativa-marfil md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 text-base">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-nativa-cacao transition-colors hover:text-nativa-terracota"
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <LocaleSwitcher />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
