"use client";

import { useEffect, useRef, useState } from "react";

const props = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    title: "+35 tonos reales",
    text: "No adaptamos tonos 'internacionales'. Creamos cada tono desde cero para subtonos cálidos, neutros y oliva de la piel latinoamericana. Tu match perfecto existe.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
    title: "Fórmula clima tropical",
    text: "Probado en Barranquilla, Cartagena y Cali. Nuestras fórmulas resisten humedad extrema, calor y movimiento. 12 horas sin retoques. Sin transferencia.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.466.732-3.558" />
      </svg>
    ),
    title: "De nuestra tierra",
    text: "Ingredientes nativos colombianos: aceite de cacay del Amazonas, extracto de café del Huila, manteca de cacao del Chocó. Cruelty-free y con registro INVIMA.",
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
          Maquillaje que entiende tu piel
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
