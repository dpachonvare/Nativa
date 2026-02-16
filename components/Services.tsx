"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    name: "Novias",
    tagline: "Tu día más importante merece las mejores manos",
    description:
      "Asesoría personalizada + prueba de maquillaje + servicio el día de la boda. Incluye preparación de piel, maquillaje profesional de larga duración, retoque post-ceremonia y kit de emergencia nupcial.",
    color: "from-nativa-canela/40 to-nativa-canela/10",
    placeholder:
      "Novia latina preparándose, iluminación natural suave, close-up de Alejandra aplicando maquillaje",
    cta: "Más información",
    large: true,
  },
  {
    name: "Eventos sociales",
    tagline: "Quinceañeras · Grados · Primeras comuniones · Galas",
    description:
      "Maquillaje profesional adaptado a la ocasión, tu edad y tu estilo personal. Look completo que dura toda la celebración.",
    color: "from-nativa-terra/30 to-nativa-oro/10",
    placeholder: "Quinceañera latina con maquillaje fresco y juvenil",
    cta: "Consultar disponibilidad",
    large: false,
  },
  {
    name: "Producciones & editorial",
    tagline: "Cine · TV · Sesiones fotográficas · Pasarela",
    description:
      "Maquillaje artístico y cinematográfico para producciones audiovisuales, editoriales de moda, campañas publicitarias y pasarelas. Experiencia con actores, actrices, modelos e influencers.",
    color: "from-nativa-terracota/30 to-nativa-terracota/10",
    placeholder: "Modelo en sesión fotográfica, maquillaje editorial dramático",
    cta: "Solicitar portafolio",
    large: false,
  },
  {
    name: "Imagen corporativa",
    tagline: "Empresas · Headshots · Eventos corporativos",
    description:
      "Servicio de maquillaje profesional para equipos corporativos, sesiones de fotos ejecutivas, eventos empresariales y talleres de imagen personal para colaboradores.",
    color: "from-nativa-piedra/30 to-nativa-arena/40",
    placeholder:
      "Mujer ejecutiva profesional con maquillaje natural impecable",
    cta: "Solicitar cotización",
    large: false,
  },
];

export default function Services() {
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
      id="servicios"
      ref={sectionRef}
      className="bg-nativa-arena py-20 lg:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2
            id="services-heading"
            className={`mb-3 font-[family-name:var(--font-display)] text-3xl text-nativa-cacao sm:text-4xl lg:text-5xl ${
              visible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Nuestros servicios
          </h2>
          <p
            className={`mx-auto max-w-lg text-nativa-piedra ${
              visible ? "animate-fade-in-up animation-delay-150" : "opacity-0"
            }`}
          >
            Cada rostro es único. Cada momento, irrepetible. Estos son los
            servicios que ofrecemos para acompañarte.
          </p>
        </div>

        {/* Desktop: asymmetric grid */}
        <div
          className="hidden gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-2"
          style={{ gridTemplateRows: "280px 280px" }}
        >
          {/* Large card — spans 2 rows */}
          <div
            className={`group relative row-span-2 cursor-pointer overflow-hidden rounded-2xl ${
              visible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${services[0].color}`}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="max-w-[200px] text-center font-[family-name:var(--font-accent)] text-xs italic text-nativa-humo/40">
                {services[0].placeholder}
              </p>
            </div>
            <div className="absolute inset-0 bg-nativa-noche/0 transition-all duration-400 group-hover:bg-nativa-noche/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 transition-all duration-400 group-hover:opacity-100">
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-4xl text-white">
                {services[0].name}
              </h3>
              <p className="mb-2 font-[family-name:var(--font-accent)] text-lg italic text-nativa-canela">
                {services[0].tagline}
              </p>
              <p className="mb-4 max-w-sm text-center text-sm leading-relaxed text-nativa-arena/80">
                {services[0].description}
              </p>
              <a
                href="#contacto"
                className="text-sm font-medium text-white underline underline-offset-4"
              >
                {services[0].cta} &rarr;
              </a>
            </div>
            {/* Always-visible label */}
            <div className="absolute bottom-6 left-6 transition-opacity duration-400 group-hover:opacity-0">
              <h3 className="font-[family-name:var(--font-display)] text-3xl text-nativa-cacao">
                {services[0].name}
              </h3>
              <p className="font-[family-name:var(--font-accent)] italic text-nativa-humo">
                {services[0].tagline}
              </p>
            </div>
          </div>

          {/* Three smaller cards */}
          {services.slice(1).map((svc, i) => (
            <div
              key={svc.name}
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
              <div
                className={`absolute inset-0 bg-gradient-to-br ${svc.color}`}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="max-w-[180px] text-center font-[family-name:var(--font-accent)] text-xs italic text-nativa-humo/30">
                  {svc.placeholder}
                </p>
              </div>
              <div className="absolute inset-0 bg-nativa-noche/0 transition-all duration-400 group-hover:bg-nativa-noche/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 transition-all duration-400 group-hover:opacity-100">
                <h3 className="mb-1 font-[family-name:var(--font-display)] text-3xl text-white">
                  {svc.name}
                </h3>
                <p className="mb-2 font-[family-name:var(--font-accent)] text-sm italic text-nativa-canela">
                  {svc.tagline}
                </p>
                <p className="mb-3 max-w-xs text-center text-xs leading-relaxed text-nativa-arena/80">
                  {svc.description}
                </p>
                <a
                  href="#contacto"
                  className="text-sm font-medium text-white underline underline-offset-4"
                >
                  {svc.cta} &rarr;
                </a>
              </div>
              {/* Always-visible label */}
              <div className="absolute bottom-5 left-5 transition-opacity duration-400 group-hover:opacity-0">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-nativa-cacao">
                  {svc.name}
                </h3>
                <p className="font-[family-name:var(--font-accent)] text-sm italic text-nativa-humo">
                  {svc.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 lg:hidden">
          {services.map((svc, i) => (
            <div
              key={svc.name}
              className={`relative min-w-[260px] flex-shrink-0 overflow-hidden rounded-2xl ${
                visible
                  ? `animate-fade-in-up ${i > 0 ? `animation-delay-${i * 150}` : ""}`
                  : "opacity-0"
              }`}
              style={{ height: "320px" }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${svc.color}`}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="max-w-[160px] text-center font-[family-name:var(--font-accent)] text-xs italic text-nativa-humo/30">
                  {svc.placeholder}
                </p>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-nativa-cacao">
                  {svc.name}
                </h3>
                <p className="mb-2 font-[family-name:var(--font-accent)] text-sm italic text-nativa-humo">
                  {svc.tagline}
                </p>
                <a
                  href="#contacto"
                  className="text-xs font-medium text-nativa-terracota underline underline-offset-2"
                >
                  {svc.cta} &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
