"use client";

import { useTranslations } from "next-intl";
import { useCart } from "@/context/CartContext";
import type { Ritual } from "@/lib/products";

interface AddToCartButtonProps {
  ritual: Ritual;
  className?: string;
}

export default function AddToCartButton({
  ritual,
  className,
}: AddToCartButtonProps) {
  const t = useTranslations("cart");
  const { add, open } = useCart();

  if (ritual.price == null) return null;

  return (
    <button
      type="button"
      onClick={() => {
        add({
          slug: ritual.slug,
          name: ritual.name,
          price: ritual.price as number,
          format: ritual.format,
        });
        open();
      }}
      className={`inline-flex items-center justify-center rounded-full bg-nativa-cacao px-6 py-3 text-sm font-medium text-nativa-marfil transition-colors hover:bg-nativa-terracota ${className ?? ""}`}
    >
      {t("addToCart")}
    </button>
  );
}
