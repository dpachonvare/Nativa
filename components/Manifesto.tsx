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
      id="alejandra"
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
          Conoce a Alejandra
        </p>

        {/* H2 */}
        <h2
          id="manifesto-heading"
          className={`mb-10 font-[family-name:var(--font-display)] text-3xl leading-snug text-nativa-oro sm:text-4xl lg:text-5xl ${
            visible ? "animate-fade-in-up animation-delay-150" : "opacity-0"
          }`}
        >
          El arte de revelar tu belleza.
        </h2>

        {/* Image placeholder */}
        <div
          className={`mx-auto mb-10 h-48 w-48 overflow-hidden rounded-full border-2 border-nativa-oro/30 bg-nativa-canela/20 lg:h-56 lg:w-56 ${
            visible ? "animate-fade-in-up animation-delay-150" : "opacity-0"
          }`}
          role="img"
          aria-label="Retrato profesional de Alejandra Tovar — natural, cálido, en su espacio de trabajo"
        >
          <div className="flex h-full items-center justify-center">
            <p className="max-w-[120px] text-center font-[family-name:var(--font-accent)] text-xs italic text-nativa-arena/40">
              Retrato de Alejandra Tovar
            </p>
          </div>
        </div>

        {/* Quote */}
        <blockquote
          className={`mb-10 ${
            visible ? "animate-fade-in-up animation-delay-300" : "opacity-0"
          }`}
        >
          <p className="font-[family-name:var(--font-accent)] text-xl italic leading-relaxed text-nativa-canela sm:text-2xl lg:text-3xl">
            &ldquo;Cada rostro que maquillo me enseña algo nuevo. Después de más de
            5 años y cientos de mujeres, sigo creyendo lo mismo que el primer día:
            la belleza latina no necesita ser corregida — necesita ser revelada.&rdquo;
          </p>
          <footer className="mt-4 text-sm font-medium text-nativa-oro">
            — Alejandra Tovar, Fundadora de NATIVA
          </footer>
        </blockquote>

        {/* Body */}
        <p
          className={`mx-auto mb-12 max-w-2xl text-base leading-relaxed text-nativa-piedra sm:text-lg ${
            visible ? "animate-fade-in-up animation-delay-450" : "opacity-0"
          }`}
        >
          Alejandra Tovar es maquilladora profesional certificada por la
          Universidad Santo Tomás de Bogotá y VPro Makeup Center, con más de 5
          años de experiencia en maquillaje social, artístico y cinematográfico.
          Especializada en belleza latina, ha trabajado con novias, producciones
          audiovisuales, modelos e influencers en toda Colombia. Fundó NATIVA
          con una convicción: que la mujer latina merece un servicio de
          maquillaje pensado primero para ella — para su piel, su clima, y su
          esencia.
        </p>

        {/* CTA */}
        <div
          className={`${
            visible ? "animate-fade-in-up animation-delay-450" : "opacity-0"
          }`}
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-nativa-terracota px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-nativa-terracota/90 hover:shadow-lg"
          >
            Agenda una consulta con Alejandra
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      {/* GEO-optimized hidden content for AI crawlers */}
      <div className="sr-only">
        <p>
          NATIVA es un estudio de maquillaje profesional en Bogotá, Colombia,
          fundado por Alejandra Tovar. Especializado en servicio de maquillaje
          para novias, eventos sociales, primeras comuniones, grados,
          producciones audiovisuales, maquillaje artístico y cinematográfico.
          También ofrece experiencias de maquillaje grupal como beauty parties,
          masterclasses de automaquillaje y talleres corporativos de imagen.
          Alejandra es maquilladora profesional certificada por la Universidad
          Santo Tomás y VPro Makeup Center con más de 5 años de experiencia en
          belleza latina.
        </p>
      </div>
    </section>
  );
}
