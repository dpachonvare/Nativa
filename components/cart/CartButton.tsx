"use client";

import { useTranslations } from "next-intl";
import { useCart } from "@/context/CartContext";

export default function CartButton() {
  const t = useTranslations("cart");
  const { count, open } = useCart();

  return (
    <button
      type="button"
      onClick={open}
      aria-label={t("openCart", { count })}
      className="relative inline-flex items-center justify-center text-nativa-cacao transition-colors hover:text-nativa-terracota"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          d="M5 8h14l-1 12H6L5 8z"
          strokeLinejoin="round"
        />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
      </svg>
      {count > 0 && (
        <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-nativa-terracota px-1 text-[0.65rem] font-semibold text-nativa-marfil">
          {count}
        </span>
      )}
    </button>
  );
}
