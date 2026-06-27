import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { COMMERCE_ENABLED, type Ritual } from "@/lib/products";

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

  if (COMMERCE_ENABLED && ritual.status === "available") {
    // Camino de checkout preferido: Stripe Payment Link (sin carrito a medida).
    // Alternativas: Snipcart o Shopify Buy Button. Cablear aquí al activar stock.
    return (
      <button
        type="button"
        className={`${base} bg-nativa-cacao text-nativa-marfil hover:bg-nativa-terracota ${className ?? ""}`}
      >
        {/* Reemplazar por la acción real de compra. */}
        {t("joinList")}
      </button>
    );
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
