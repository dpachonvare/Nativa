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

// Bandera maestra de comercio. Cuando haya stock, ponerla en true.
// Camino de checkout preferido (sin carrito a medida): Stripe Payment Links.
// Alternativas: Snipcart o Shopify Buy Button.
export const COMMERCE_ENABLED = false;

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
}

export const RITUALS: Ritual[] = [
  {
    slug: "rocio",
    name: "ROCÍO",
    format: "150 ml · 5.07 fl oz",
    status: "available",
    hasDetailPage: true,
  },
  {
    slug: "raiz",
    name: "RAÍZ",
    format: "100 ml",
    status: "coming-soon",
    hasDetailPage: false,
  },
  {
    slug: "bruma",
    name: "BRUMA",
    format: "100 ml",
    status: "coming-soon",
    hasDetailPage: false,
  },
  {
    slug: "aura",
    name: "AURA",
    format: "15 ml",
    status: "coming-soon",
    hasDetailPage: false,
  },
  {
    slug: "velo",
    name: "VELO",
    format: "60 pads",
    status: "coming-soon",
    hasDetailPage: false,
  },
];

export const HERO_RITUAL = RITUALS[0];

export function getRitual(slug: string): Ritual | undefined {
  return RITUALS.find((r) => r.slug === slug);
}
