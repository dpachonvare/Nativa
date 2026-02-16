"use client";

import { useEffect, useRef, useState } from "react";

const props = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    title: "Especialistas en belleza latina",
    text: "No aplicamos fórmulas genéricas. Cada servicio comienza con una lectura de tu piel, tus facciones y tu esencia. Maquillaje que respeta y resalta lo que ya eres.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Duración garantizada",
    text: "Técnicas profesionales de fijación probadas en el clima tropical colombiano. Tu maquillaje se mantiene impecable desde la ceremonia hasta la última canción. 12+ horas sin retoques.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: "La experiencia completa",
    text: "No solo te maquillamos — creamos un momento para ti. Desde la asesoría previa hasta el último retoque, cada detalle está pensado para que te sientas cuidada, escuchada y hermosa.",
  },
];

export default function ValueProps() {
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
      ref={sectionRef}
      className="bg-nativa-lino py-20 lg:py-28"
      aria-labelledby="value-props-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          id="value-props-heading"
          className={`mb-16 text-center font-[family-name:var(--font-display)] text-3xl text-nativa-cacao sm:text-4xl lg:text-5xl ${
            visible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          ¿Por qué elegir NATIVA?
        </h2>

        {/* Desktop grid / Mobile horizontal scroll */}
        <div className="flex gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-0">
          {props.map((prop, i) => (
            <article
              key={i}
              className={`group relative min-w-[280px] flex-shrink-0 rounded-2xl border border-nativa-canela/10 bg-nativa-arena/60 p-8 transition-all duration-300 hover:border-nativa-canela/30 hover:shadow-lg lg:min-w-0 ${
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
              <div className="mb-6 inline-flex rounded-xl bg-nativa-canela/10 p-3 text-nativa-terra">
                {prop.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-nativa-cacao">
                {prop.title}
              </h3>
              <p className="text-sm leading-relaxed text-nativa-humo">
                {prop.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
