import { NextResponse } from "next/server";
import Stripe from "stripe";
import { COMMERCE_ENABLED, CURRENCY, getRitual } from "@/lib/products";

/**
 * Crea una sesión de Stripe Checkout (hospedada).
 *
 * Seguridad: los precios SIEMPRE se leen del servidor (lib/products.ts),
 * nunca del cliente. El cliente solo envía slug + cantidad.
 *
 * Requisitos para que funcione (ver .env.example):
 *  - NEXT_PUBLIC_COMMERCE_ENABLED=true
 *  - STRIPE_SECRET_KEY=sk_...
 */

// Monedas sin decimales en Stripe (el monto NO se multiplica por 100).
const ZERO_DECIMAL = new Set([
  "BIF", "CLP", "DJF", "GNF", "JPY", "KMF", "KRW", "MGA",
  "PYG", "RWF", "UGX", "VND", "VUV", "XAF", "XOF", "XPF",
]);

function toStripeAmount(amount: number): number {
  return ZERO_DECIMAL.has(CURRENCY)
    ? Math.round(amount)
    : Math.round(amount * 100);
}

interface Body {
  locale?: string;
  items?: { slug: string; quantity: number }[];
}

export async function POST(request: Request) {
  if (!COMMERCE_ENABLED) {
    return NextResponse.json({ error: "commerce disabled" }, { status: 503 });
  }

  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    return NextResponse.json(
      { error: "stripe not configured" },
      { status: 503 },
    );
  }

  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const items = body.items ?? [];
  if (items.length === 0) {
    return NextResponse.json({ error: "empty cart" }, { status: 400 });
  }

  // Construye line_items desde datos de servidor.
  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  for (const { slug, quantity } of items) {
    const ritual = getRitual(slug);
    if (!ritual || ritual.price == null || ritual.status !== "available") {
      continue; // ignora productos no comprables
    }
    const qty = Math.max(1, Math.min(10, Math.floor(quantity || 1)));
    line_items.push({
      quantity: qty,
      price_data: {
        currency: CURRENCY.toLowerCase(),
        unit_amount: toStripeAmount(ritual.price),
        product_data: {
          name: `NATIVA ${ritual.name}`,
          description: ritual.format,
        },
      },
    });
  }

  if (line_items.length === 0) {
    return NextResponse.json({ error: "no purchasable items" }, { status: 400 });
  }

  const origin =
    request.headers.get("origin") ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://nativa.skincare";
  const locale = body.locale === "en" ? "en" : "es";

  const stripe = new Stripe(key);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      // Permite recolectar dirección de envío para productos físicos.
      shipping_address_collection: { allowed_countries: ["AU", "CO", "US"] },
      success_url: `${origin}/${locale}?checkout=success`,
      cancel_url: `${origin}/${locale}?checkout=cancel`,
    });
    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json({ error: "stripe error" }, { status: 502 });
  }
}
