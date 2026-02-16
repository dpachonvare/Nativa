"use client";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-nativa-cacao"
      aria-label="Hero — Servicio de maquillaje profesional NATIVA"
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
              aria-label="Alejandra Tovar maquillando a una novia — close-up de manos aplicando maquillaje, iluminación cálida dorada, ambiente íntimo y profesional"
            >
              {/* Aesthetic placeholder with layered tones */}
              <div className="absolute inset-0 bg-gradient-to-t from-nativa-cacao via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-nativa-cacao via-nativa-cacao/60 to-transparent lg:via-nativa-cacao/40" />
              <div className="flex h-full items-center justify-center">
                <div className="max-w-xs text-center opacity-30">
                  <div className="mx-auto mb-4 h-48 w-48 rounded-full bg-nativa-canela/30 lg:h-64 lg:w-64" />
                  <p className="font-[family-name:var(--font-accent)] text-sm italic text-nativa-arena/60">
                    Alejandra Tovar maquillando a una novia — iluminación cálida
                    dorada, ambiente íntimo y profesional
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
            Maquillaje profesional · Bogotá, Colombia
          </p>

          {/* H1 */}
          <h1 className="hero-animate hero-delay-2 font-[family-name:var(--font-display)] text-5xl leading-[1.1] text-nativa-lino sm:text-6xl lg:text-7xl">
            Tu rostro ya es
            <br />
            la obra. Nosotras
            <br />
            solo firmamos.
          </h1>

          {/* Subtitle */}
          <p className="hero-animate hero-delay-3 mt-6 max-w-md text-lg leading-relaxed text-nativa-piedra">
            Servicio de maquillaje profesional especializado en belleza latina.
            Para novias, eventos, producciones y momentos que merecen ser
            inolvidables.
          </p>

          {/* CTAs */}
          <div className="hero-animate hero-delay-4 mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-nativa-terracota px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-nativa-terracota/90 hover:shadow-lg"
            >
              Agenda tu consulta gratuita
              <span aria-hidden="true">&rarr;</span>
            </a>
            <a
              href="#servicios"
              className="text-sm font-medium text-nativa-oro transition-colors duration-300 hover:text-nativa-canela"
            >
              Conoce nuestros servicios
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
