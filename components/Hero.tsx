"use client";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-nativa-cacao"
      aria-label="Hero — Bienvenida a NATIVA"
    >
      {/* Background image placeholder */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-br from-nativa-cacao via-[#5a3e28] to-nativa-cacao" />
        {/* Image overlay area — 60% right on desktop */}
        <div className="absolute inset-0 lg:left-[40%]">
          <div className="relative h-full w-full overflow-hidden">
            <div
              className="absolute inset-0 bg-nativa-canela/20"
              role="img"
              aria-label="Retrato editorial de mujer colombiana con piel trigueña, iluminación dorada lateral, maquillaje natural-glam NATIVA"
            >
              {/* Aesthetic placeholder with layered tones */}
              <div className="absolute inset-0 bg-gradient-to-t from-nativa-cacao via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-nativa-cacao via-nativa-cacao/60 to-transparent lg:via-nativa-cacao/40" />
              <div className="flex h-full items-center justify-center">
                <div className="max-w-xs text-center opacity-30">
                  <div className="mx-auto mb-4 h-48 w-48 rounded-full bg-nativa-canela/30 lg:h-64 lg:w-64" />
                  <p className="font-[family-name:var(--font-accent)] text-sm italic text-nativa-arena/60">
                    Fotografía editorial — Mujer colombiana, piel trigueña,
                    iluminación dorada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-8">
        <div className="max-w-xl py-32 lg:py-0">
          {/* Micro-label */}
          <p className="hero-animate hero-delay-1 mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-nativa-oro">
            Maquillaje profesional · Hecho en Colombia
          </p>

          {/* H1 */}
          <h1 className="hero-animate hero-delay-2 font-[family-name:var(--font-display)] text-5xl leading-[1.1] text-nativa-lino sm:text-6xl lg:text-7xl">
            Belleza que nace
            <br />
            de la raíz.
          </h1>

          {/* Subtitle */}
          <p className="hero-animate hero-delay-3 mt-6 max-w-md text-lg leading-relaxed text-nativa-piedra">
            Maquillaje profesional diseñado para tu piel latina. Tonos reales.
            Fórmulas para clima tropical. Alma colombiana.
          </p>

          {/* CTAs */}
          <div className="hero-animate hero-delay-4 mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#categorias"
              className="inline-flex items-center gap-2 rounded-full bg-nativa-terracota px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-nativa-terracota/90 hover:shadow-lg"
            >
              Descubre la colección
              <span aria-hidden="true">&rarr;</span>
            </a>
            <a
              href="#quiz"
              className="text-sm font-medium text-nativa-oro transition-colors duration-300 hover:text-nativa-canela"
            >
              Encuentra tu tono perfecto
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-animate hero-delay-5 absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-nativa-piedra/60">
            Scroll
          </span>
          <div className="h-8 w-[1px] animate-pulse bg-nativa-piedra/40" />
        </div>
      </div>
    </section>
  );
}
