"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";

export default function CartDrawer() {
  const t = useTranslations("cart");
  const locale = useLocale();
  const { items, isOpen, close, subtotal, setQuantity, remove, count } =
    useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function checkout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          items: items.map((i) => ({ slug: i.slug, quantity: i.quantity })),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error || "checkout failed");
      window.location.href = data.url; // Stripe Checkout (hospedado)
    } catch {
      setError(t("checkoutError"));
      setLoading(false);
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden={!isOpen}
        onClick={close}
        className={`fixed inset-0 z-[60] bg-nativa-cacao/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={t("title")}
        className={`fixed right-0 top-0 z-[61] flex h-full w-full max-w-md flex-col bg-nativa-marfil shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-nativa-arena/50 px-6 py-5">
          <h2 className="font-display text-2xl text-nativa-cacao">
            {t("title")}
          </h2>
          <button
            type="button"
            onClick={close}
            aria-label={t("close")}
            className="text-nativa-humo hover:text-nativa-cacao"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <p className="font-display text-xl text-nativa-cacao">
              {t("empty")}
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-5 rounded-full border border-nativa-cacao/30 px-6 py-2 text-sm text-nativa-cacao hover:border-nativa-cacao"
            >
              {t("continueShopping")}
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-nativa-arena/40 overflow-y-auto px-6">
              {items.map((item) => (
                <li key={item.slug} className="flex gap-4 py-5">
                  <div className="flex-1">
                    <p className="font-display text-lg text-nativa-cacao">
                      {item.name}
                    </p>
                    <p className="text-xs text-nativa-humo">{item.format}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="inline-flex items-center rounded-full border border-nativa-arena">
                        <button
                          type="button"
                          aria-label={t("decrease")}
                          onClick={() => setQuantity(item.slug, item.quantity - 1)}
                          className="px-3 py-1 text-nativa-cacao hover:text-nativa-terracota"
                        >
                          −
                        </button>
                        <span className="min-w-6 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label={t("increase")}
                          onClick={() => setQuantity(item.slug, item.quantity + 1)}
                          className="px-3 py-1 text-nativa-cacao hover:text-nativa-terracota"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(item.slug)}
                        className="text-xs text-nativa-humo underline hover:text-nativa-terracota"
                      >
                        {t("remove")}
                      </button>
                    </div>
                  </div>
                  <p className="font-medium text-nativa-cacao">
                    {formatPrice(item.price * item.quantity, locale)}
                  </p>
                </li>
              ))}
            </ul>

            <footer className="border-t border-nativa-arena/50 px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-nativa-humo">{t("subtotal")}</span>
                <span className="font-display text-2xl text-nativa-cacao">
                  {formatPrice(subtotal, locale)}
                </span>
              </div>
              <p className="mt-1 text-xs text-nativa-humo">{t("taxesNote")}</p>
              {error && (
                <p role="alert" className="mt-3 text-sm text-nativa-terracota-oscuro">
                  {error}
                </p>
              )}
              <button
                type="button"
                onClick={checkout}
                disabled={loading || count === 0}
                className="mt-4 w-full rounded-full bg-nativa-terracota px-6 py-3 font-medium text-nativa-marfil transition-colors hover:bg-nativa-terracota-oscuro disabled:opacity-60"
              >
                {loading ? t("processing") : t("checkout")}
              </button>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}
