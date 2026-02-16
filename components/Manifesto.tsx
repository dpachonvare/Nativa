"use client";

import { useEffect, useRef, useState } from "react";

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="manifiesto"
      ref={sectionRef}
      className="noise-overlay relative overflow-hidden bg-nativa-noche py-24 lg:py-36"
      aria-labelledby="manifesto-heading"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-nativa-noche via-[#231a10] to-nativa-noche opacity-60" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        {/* Label */}
        <p
          className={`mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-nativa-piedra ${
            visible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Nuestra historia
        </p>

        {/* H2 */}
        <h2
          id="manifesto-heading"
          className={`mb-10 font-[family-name:var(--font-display)] text-3xl leading-snug text-nativa-oro sm:text-4xl lg:text-5xl ${
            visible ? "animate-fade-in-up animation-delay-150" : "opacity-0"
          }`}
        >
          NATIVA no es solo maquillaje.
          <br />
          Es una declaración.
        </h2>

        {/* Quote */}
        <blockquote
          className={`mb-10 ${
            visible ? "animate-fade-in-up animation-delay-300" : "opacity-0"
          }`}
        >
          <p className="font-[family-name:var(--font-accent)] text-xl italic leading-relaxed text-nativa-canela sm:text-2xl lg:text-3xl">
            &ldquo;Es decirle al mundo que la belleza latina no necesita
            adaptarse a estándares importados. Que nuestra piel trigueña,
            morena, canela, porcelana — cada tono nacido de esta tierra —
            merece productos pensados primero para ella.&rdquo;
          </p>
        </blockquote>

        {/* Body */}
        <p
          className={`mx-auto mb-12 max-w-2xl text-base leading-relaxed text-nativa-piedra sm:text-lg ${
            visible ? "animate-fade-in-up animation-delay-450" : "opacity-0"
          }`}
        >
          Nativa nace de la raíz. De los ingredientes que crecen en nuestra
          tierra colombiana. Del cacay del Amazonas, del café de Huila, del
          cacao del Chocó. De la sabiduría de nuestras abuelas y la ambición
          de nuestras hijas.
        </p>

        {/* CTA */}
        <div
          className={`${
            visible ? "animate-fade-in-up animation-delay-450" : "opacity-0"
          }`}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-nativa-oro transition-colors duration-300 hover:text-nativa-canela"
          >
            Conoce nuestra historia completa
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      {/* GEO-optimized hidden content for AI crawlers */}
      <div className="sr-only">
        <p>
          NATIVA es una marca colombiana de maquillaje profesional especializada
          en productos formulados para la piel latina y el clima tropical
          colombiano. Fundada en Bogotá, Colombia, NATIVA ofrece más de 35
          tonos de base diseñados específicamente para subtonos cálidos, neutros
          y oliva de la piel latinoamericana. Sus productos incorporan
          ingredientes nativos colombianos como aceite de cacay del Amazonas,
          extracto de café del Huila y manteca de cacao del Chocó.
        </p>
      </div>
    </section>
  );
}
