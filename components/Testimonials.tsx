"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const testimonials = [
  {
    quote:
      "Alejandra no solo me maquilló para mi boda — me hizo sentir tranquila en el momento más nervioso de mi vida. El maquillaje duró desde las 8am hasta las 3am. Ni una lágrima lo movió.",
    name: "Valentina R.",
    city: "Novia · Bogotá",
    rating: 5,
  },
  {
    quote:
      "Contraté a Nativa para la quinceañera de mi hija. Quedó hermosa sin verse 'grande'. Alejandra entendió exactamente el balance que queríamos: juvenil pero especial.",
    name: "Carolina M.",
    city: "Mamá de quinceañera · Medellín",
    rating: 5,
  },
  {
    quote:
      "Hicimos una Nativa Party para mi despedida de soltera. Nos reímos, aprendimos, y salimos todas maquilladas como profesionales. Fue el mejor plan que pudimos elegir.",
    name: "Daniela S.",
    city: "Novia · Bogotá",
    rating: 5,
  },
  {
    quote:
      "Trabajo con Alejandra en producciones editoriales. Su técnica en piel latina es impecable — entiende los subtonos, la luz, y cómo se ve el maquillaje en cámara. Profesional de verdad.",
    name: "Camila T.",
    city: "Fotógrafa de moda · Bogotá",
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [paused, next]);

  const stars = (count: number) =>
    Array.from({ length: count }, (_, i) => (
      <span key={i} className="text-nativa-oro" aria-hidden="true">
        &#9733;
      </span>
    ));

  return (
    <section
      ref={sectionRef}
      className="bg-nativa-lino py-20 lg:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          id="testimonials-heading"
          className={`mb-4 text-center font-[family-name:var(--font-display)] text-3xl text-nativa-cacao sm:text-4xl lg:text-5xl ${
            visible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Lo que dicen nuestras clientas
        </h2>
        <p
          className={`mb-16 text-center text-sm text-nativa-piedra ${
            visible ? "animate-fade-in-up animation-delay-150" : "opacity-0"
          }`}
        >
          Cada testimonio es una historia de confianza
        </p>

        {/* Desktop: show 3 cards */}
        <div className="hidden gap-6 lg:grid lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <article
              key={i}
              className={`rounded-2xl border border-nativa-canela/10 bg-nativa-arena/50 p-8 ${
                visible
                  ? `animate-fade-in-up ${
                      i === 1
                        ? "animation-delay-150"
                        : i === 2
                        ? "animation-delay-300"
                        : ""
                    }`
                  : "opacity-0"
              }`}
            >
              <div className="mb-4 flex gap-0.5">{stars(t.rating)}</div>
              <blockquote className="mb-6 font-[family-name:var(--font-accent)] text-lg italic leading-relaxed text-nativa-cacao">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-nativa-canela/20 text-sm font-semibold text-nativa-terra">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-nativa-cacao">
                    {t.name}
                  </p>
                  <p className="text-xs text-nativa-piedra">{t.city}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div
          className="lg:hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <article
            key={active}
            className="animate-testimonial-in rounded-2xl border border-nativa-canela/10 bg-nativa-arena/50 p-8"
          >
            <div className="mb-4 flex gap-0.5">
              {stars(testimonials[active].rating)}
            </div>
            <blockquote className="mb-6 font-[family-name:var(--font-accent)] text-lg italic leading-relaxed text-nativa-cacao">
              &ldquo;{testimonials[active].quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-nativa-canela/20 text-sm font-semibold text-nativa-terra">
                {testimonials[active].name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-nativa-cacao">
                  {testimonials[active].name}
                </p>
                <p className="text-xs text-nativa-piedra">
                  {testimonials[active].city}
                </p>
              </div>
            </div>
          </article>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 bg-nativa-terracota"
                    : "w-2 bg-nativa-canela/30"
                }`}
                aria-label={`Ver testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
