"use client";

import { useEffect, useRef, useState } from "react";

const categories = [
  {
    name: "Rostro",
    tagline: "Tu piel, tu lienzo",
    description: "Bases, correctores, primers, polvos, contornos",
    color: "from-nativa-canela/40 to-nativa-canela/10",
    placeholder: "Close-up de piel latina perfecta con base aplicada, textura visible",
    large: true,
  },
  {
    name: "Ojos",
    tagline: "Miradas que cuentan historias",
    description: "Paletas de sombras, delineadores, máscaras, cejas",
    color: "from-nativa-terra/30 to-nativa-oro/10",
    placeholder: "Close-up de ojo con sombras en tonos tierra y dorados",
    large: false,
  },
  {
    name: "Labios",
    tagline: "Color que habla por ti",
    description: "Labiales, lip gloss, delineadores de labios",
    color: "from-nativa-terracota/30 to-nativa-terracota/10",
    placeholder: "Close-up de labios con labial terracota profundo",
    large: false,
  },
  {
    name: "Accesorios",
    tagline: "Las herramientas de una pro",
    description: "Brochas, esponjas, neceseres, kits",
    color: "from-nativa-piedra/30 to-nativa-arena/40",
    placeholder: "Flat lay de brochas sobre fondo de lino natural",
    large: false,
  },
];

export default function ProductCategories() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="categorias"
      ref={sectionRef}
      className="bg-nativa-arena py-20 lg:py-28"
      aria-labelledby="categories-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          id="categories-heading"
          className={`mb-16 text-center font-[family-name:var(--font-display)] text-3xl text-nativa-cacao sm:text-4xl lg:text-5xl ${
            visible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Encuentra tu ritual Nativa
        </h2>

        {/* Desktop: asymmetric grid */}
        <div className="hidden gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-2" style={{ gridTemplateRows: "280px 280px" }}>
          {/* Large card — spans 2 rows */}
          <div
            className={`group relative row-span-2 cursor-pointer overflow-hidden rounded-2xl ${
              visible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${categories[0].color}`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="max-w-[200px] text-center font-[family-name:var(--font-accent)] text-xs italic text-nativa-humo/40">
                {categories[0].placeholder}
              </p>
            </div>
            <div className="absolute inset-0 bg-nativa-noche/0 transition-all duration-400 group-hover:bg-nativa-noche/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-all duration-400 group-hover:opacity-100">
              <span className="mb-1 text-xs uppercase tracking-widest text-nativa-oro">
                {categories[0].description}
              </span>
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-4xl text-white">
                {categories[0].name}
              </h3>
              <p className="mb-4 font-[family-name:var(--font-accent)] text-lg italic text-nativa-canela">
                {categories[0].tagline}
              </p>
              <span className="text-sm font-medium text-white underline underline-offset-4">
                Explorar &rarr;
              </span>
            </div>
            {/* Always-visible label */}
            <div className="absolute bottom-6 left-6 transition-opacity duration-400 group-hover:opacity-0">
              <h3 className="font-[family-name:var(--font-display)] text-3xl text-nativa-cacao">
                {categories[0].name}
              </h3>
              <p className="font-[family-name:var(--font-accent)] italic text-nativa-humo">
                {categories[0].tagline}
              </p>
            </div>
          </div>

          {/* Three smaller cards */}
          {categories.slice(1).map((cat, i) => (
            <div
              key={cat.name}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ${
                visible
                  ? `animate-fade-in-up ${
                      i === 0
                        ? "animation-delay-150"
                        : i === 1
                        ? "animation-delay-300"
                        : "animation-delay-450"
                    }`
                  : "opacity-0"
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color}`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="max-w-[180px] text-center font-[family-name:var(--font-accent)] text-xs italic text-nativa-humo/30">
                  {cat.placeholder}
                </p>
              </div>
              <div className="absolute inset-0 bg-nativa-noche/0 transition-all duration-400 group-hover:bg-nativa-noche/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-all duration-400 group-hover:opacity-100">
                <span className="mb-1 text-[10px] uppercase tracking-widest text-nativa-oro">
                  {cat.description}
                </span>
                <h3 className="mb-1 font-[family-name:var(--font-display)] text-3xl text-white">
                  {cat.name}
                </h3>
                <p className="mb-3 font-[family-name:var(--font-accent)] italic text-nativa-canela">
                  {cat.tagline}
                </p>
                <span className="text-sm font-medium text-white underline underline-offset-4">
                  Explorar &rarr;
                </span>
              </div>
              {/* Always-visible label */}
              <div className="absolute bottom-5 left-5 transition-opacity duration-400 group-hover:opacity-0">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-nativa-cacao">
                  {cat.name}
                </h3>
                <p className="font-[family-name:var(--font-accent)] text-sm italic text-nativa-humo">
                  {cat.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 lg:hidden">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className={`relative min-w-[260px] flex-shrink-0 overflow-hidden rounded-2xl ${
                visible
                  ? `animate-fade-in-up ${i > 0 ? `animation-delay-${i * 150}` : ""}`
                  : "opacity-0"
              }`}
              style={{ height: "320px" }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color}`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="max-w-[160px] text-center font-[family-name:var(--font-accent)] text-xs italic text-nativa-humo/30">
                  {cat.placeholder}
                </p>
              </div>
              <div className="absolute bottom-5 left-5">
                <span className="mb-1 block text-[10px] uppercase tracking-widest text-nativa-humo/60">
                  {cat.description}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-nativa-cacao">
                  {cat.name}
                </h3>
                <p className="font-[family-name:var(--font-accent)] text-sm italic text-nativa-humo">
                  {cat.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
