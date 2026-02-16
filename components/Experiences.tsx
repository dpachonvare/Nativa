"use client";

import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    title: "Nativa Party",
    forLabel: "Despedidas de soltera · Cumpleaños · Reunión de amigas",
    description:
      "Una experiencia de maquillaje privada para ti y tus amigas. Aprenden técnicas profesionales paso a paso, se maquillan entre risas, y terminan listas para salir a brillar. Incluye espumante, snacks y un recuerdo fotográfico del momento.",
    duration: "2.5 — 3 horas",
    group: "4 a 12 personas",
    includes: [
      "Clase guiada por Alejandra",
      "Productos profesionales",
      "Espumante y snacks",
      "Fotos del evento",
      "Tips personalizados para cada asistente",
    ],
    cta: "Reserva tu Nativa Party",
    color: "from-nativa-canela/25 to-nativa-oro/15",
  },
  {
    title: "Nativa Masterclass",
    forLabel: "Automaquillaje · Regalo experiencia · Desarrollo personal",
    description:
      "Sesión personalizada donde aprendes a maquillarte como una profesional. Alejandra analiza tu rostro, tu piel y tu estilo para enseñarte técnicas que puedes replicar en tu día a día. Te llevas una guía paso a paso personalizada.",
    duration: "2 horas",
    group: "1 a 3 personas",
    includes: [
      "Diagnóstico de piel y colorimetría",
      "Clase práctica paso a paso",
      "Guía personalizada en PDF",
      "Recomendación de productos",
    ],
    cta: "Agenda tu Masterclass",
    color: "from-nativa-terracota/15 to-nativa-canela/20",
  },
  {
    title: "Nativa Team",
    forLabel: "Equipos de trabajo · Workshops empresariales · Team building",
    description:
      "Taller de imagen personal y maquillaje profesional para equipos corporativos. Elevamos la imagen de tu empresa mientras tu equipo disfruta de una actividad diferente y empoderadora.",
    duration: "2 — 4 horas",
    group: "8 a 25 personas",
    includes: [
      "Taller práctico adaptado",
      "Análisis de imagen profesional",
      "Material de apoyo",
      "Certificado de participación",
    ],
    cta: "Solicita propuesta corporativa",
    color: "from-nativa-selva/10 to-nativa-canela/15",
  },
];

export default function Experiences() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experiencias"
      ref={sectionRef}
      className="bg-nativa-arena py-20 lg:py-28"
      aria-labelledby="experiences-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2
            id="experiences-heading"
            className={`mb-3 font-[family-name:var(--font-display)] text-3xl text-nativa-cacao sm:text-4xl lg:text-5xl ${
              visible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Experiencias Nativa
          </h2>
          <p
            className={`mx-auto max-w-lg text-nativa-piedra ${
              visible ? "animate-fade-in-up animation-delay-150" : "opacity-0"
            }`}
          >
            Momentos únicos de belleza para compartir. Porque el maquillaje
            también se vive en grupo.
          </p>
        </div>

        <div className="space-y-6 lg:space-y-8">
          {experiences.map((exp, i) => (
            <article
              key={exp.title}
              className={`overflow-hidden rounded-2xl border border-nativa-canela/10 bg-nativa-lino transition-all duration-300 hover:shadow-lg ${
                visible
                  ? `animate-fade-in-up`
                  : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="grid lg:grid-cols-5">
                {/* Image placeholder */}
                <div
                  className={`relative aspect-[16/9] lg:col-span-2 lg:aspect-auto bg-gradient-to-br ${exp.color}`}
                >
                  <div className="flex h-full min-h-[200px] items-center justify-center">
                    <p className="max-w-[160px] text-center font-[family-name:var(--font-accent)] text-xs italic text-nativa-humo/30">
                      Experiencia {exp.title}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:col-span-3 lg:p-8">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl text-nativa-cacao sm:text-3xl">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-nativa-terracota">
                    {exp.forLabel}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-nativa-humo">
                    {exp.description}
                  </p>

                  {/* Meta */}
                  <div className="mb-4 flex flex-wrap gap-4 text-xs text-nativa-piedra">
                    <span className="flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 text-nativa-canela">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 text-nativa-canela">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                      </svg>
                      {exp.group}
                    </span>
                  </div>

                  {/* Includes */}
                  <div className="mb-5">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-nativa-cacao">
                      Incluye:
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {exp.includes.map((item) => (
                        <li
                          key={item}
                          className="rounded-full bg-nativa-canela/10 px-3 py-1 text-xs text-nativa-humo"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 rounded-full bg-nativa-terracota px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-nativa-terracota/90 hover:shadow-lg"
                  >
                    {exp.cta}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
