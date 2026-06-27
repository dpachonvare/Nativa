/**
 * NATIVA Originals — los 5 rituales.
 *
 * Datos estructurales (no traducibles): nombre, slug, formato, estado.
 * Los nombres van EN ESPAÑOL — no negociable (brief §8).
 * El copy traducible (tipo, descripción, sensorial…) vive en messages,
 * bajo la clave `rituals.<slug>`.
 *
 * Pre-lanzamiento: sin checkout. La ficha se diseña "cart-ready":
 * el slot de acción hoy renderiza "Únete a la lista / Avísame" y mañana
 * "Añadir al carrito" cambiando COMMERCE_ENABLED, sin reescribir la página.
 */

// Bandera maestra de comercio. Se controla por variable de entorno para poder
// encender la tienda SIN tocar código (en Vercel: NEXT_PUBLIC_COMMERCE_ENABLED=true).
// Mientras sea false: el sitio muestra "Únete a la lista" y el carrito queda oculto.
// Para vender de verdad hace falta además STRIPE_SECRET_KEY (ver .env.example).
export const COMMERCE_ENABLED =
  process.env.NEXT_PUBLIC_COMMERCE_ENABLED === "true";

// Moneda de cobro. Configurable por entorno (default AUD por dominio .com.au).
// Usa código ISO de 3 letras: "AUD", "USD", "COP"…
export const CURRENCY = (
  process.env.NEXT_PUBLIC_CURRENCY || "AUD"
).toUpperCase();

export type RitualStatus = "available" | "coming-soon";

export interface Ritual {
  slug: string;
  /** Nombre de marca, siempre en español. */
  name: string;
  /** Formato/volumen — referencia estructural. */
  format: string;
  status: RitualStatus;
  /** Solo el héroe tiene ficha propia (/rocio). */
  hasDetailPage: boolean;
  /**
   * Precio en unidades mayores de la moneda (p. ej. 49 = $49.00).
   * null = sin precio aún (productos "Próximamente").
   * TODO: confirmar el precio real de ROCÍO antes de activar la venta.
   */
  price: number | null;
}

export const RITUALS: Ritual[] = [
  {
    slug: "rocio",
    name: "ROCÍO",
    format: "150 ml · 5.07 fl oz",
    status: "available",
    hasDetailPage: true,
    price: 49, // ⚠️ placeholder — ajustar al precio real
  },
  {
    slug: "raiz",
    name: "RAÍZ",
    format: "100 ml",
    status: "coming-soon",
    hasDetailPage: false,
    price: null,
  },
  {
    slug: "bruma",
    name: "BRUMA",
    format: "100 ml",
    status: "coming-soon",
    hasDetailPage: false,
    price: null,
  },
  {
    slug: "aura",
    name: "AURA",
    format: "15 ml",
    status: "coming-soon",
    hasDetailPage: false,
    price: null,
  },
  {
    slug: "velo",
    name: "VELO",
    format: "60 pads",
    status: "coming-soon",
    hasDetailPage: false,
    price: null,
  },
];

export const HERO_RITUAL = RITUALS[0];

export function getRitual(slug: string): Ritual | undefined {
  return RITUALS.find((r) => r.slug === slug);
}

/** Formatea un precio en la moneda configurada, según el locale. */
export function formatPrice(
  amount: number,
  locale: string = "es",
): string {
  return new Intl.NumberFormat(locale === "en" ? "en-AU" : "es-CO", {
    style: "currency",
    currency: CURRENCY,
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount);
}
