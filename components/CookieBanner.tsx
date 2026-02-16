"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("nativa-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("nativa-cookie-consent", "accepted");
    setVisible(false);
  };

  const configure = () => {
    localStorage.setItem("nativa-cookie-consent", "configured");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-nativa-canela/10 bg-nativa-lino/95 px-6 py-4 shadow-[0_-4px_16px_rgba(0,0,0,0.05)] backdrop-blur-md"
      role="dialog"
      aria-label="Consentimiento de cookies"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-nativa-humo">
          Usamos cookies para mejorar tu experiencia en nuestro sitio.
        </p>
        <div className="flex gap-3">
          <button
            onClick={configure}
            className="rounded-full border border-nativa-canela/20 px-5 py-2 text-xs font-medium text-nativa-humo transition-all duration-200 hover:border-nativa-canela/40 hover:text-nativa-cacao"
          >
            Configurar
          </button>
          <button
            onClick={accept}
            className="rounded-full bg-nativa-terracota px-5 py-2 text-xs font-semibold text-white transition-all duration-200 hover:bg-nativa-terracota/90"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
