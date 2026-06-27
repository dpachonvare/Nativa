import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { COMMERCE_ENABLED, type Ritual } from "@/lib/products";
import AddToCartButton from "./cart/AddToCartButton";

/**
 * Slot de acción "cart-ready" (brief §9).
 *
 * Hoy renderiza "Únete a la lista / Avísame".
 * Cuando COMMERCE_ENABLED sea true y haya stock, renderiza "Añadir al carrito"
 * sin reescribir la página que lo usa.
 */
interface ProductActionSlotProps {
  ritual: Ritual;
  className?: string;
}

export default function ProductActionSlot({
  ritual,
  className,
}: ProductActionSlotProps) {
  const t = useTranslations("common");

  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors";

  // Comercio activo + producto disponible → "Añadir al carrito" (Stripe Checkout).
  if (COMMERCE_ENABLED && ritual.status === "available" && ritual.price != null) {
    return <AddToCartButton ritual={ritual} className={className} />;
  }

  const label =
    ritual.status === "available" ? t("joinList") : t("notifyMe");

  return (
    <Link
      href="/vip"
      className={`${base} bg-nativa-terracota text-nativa-marfil hover:bg-nativa-terracota-oscuro ${className ?? ""}`}
    >
      {label}
    </Link>
  );
}
