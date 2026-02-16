"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Consulta",
    description:
      "Conversamos sobre tu evento, tu estilo, tus referencias y tu piel. Entendemos qué quieres transmitir y diseñamos una propuesta a tu medida.",
  },
  {
    number: "02",
    title: "Prueba",
    note: "Para novias y producciones",
    description:
      "Realizamos una sesión de prueba donde definimos el look final. Ajustamos cada detalle: tonos, texturas, acabados. Creamos una ficha técnica para el día del evento.",
  },
  {
    number: "03",
    title: "Preparación",
    description:
      "Antes de cada pincelada, preparamos tu piel con una rutina de skincare profesional. La base de un gran maquillaje siempre es una piel cuidada.",
  },
  {
    number: "04",
    title: "El ritual",
    description:
      "Aplicamos tu maquillaje con técnicas profesionales de alta duración. Cada producto es seleccionado para tu tono de piel, el clima del lugar y la duración del evento.",
  },
  {
    number: "05",
    title: "Acompañamiento",
    description:
      "No te dejamos sola. Para novias y eventos largos, ofrecemos servicio de retoque y un kit de emergencia para que estés perfecta hasta el final.",
  },
];

export default function Process() {
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
      ref={sectionRef}
      className="bg-nativa-lino py-20 lg:py-28"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2
            id="process-heading"
            className={`mb-3 font-[family-name:var(--font-display)] text-3xl text-nativa-cacao sm:text-4xl lg:text-5xl ${
              visible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Así trabajamos
          </h2>
          <p
            className={`mx-auto max-w-lg text-nativa-piedra ${
              visible ? "animate-fade-in-up animation-delay-150" : "opacity-0"
            }`}
          >
            Cada servicio NATIVA sigue un proceso diseñado para que el resultado
            sea exactamente lo que soñaste.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-8 h-[1px] bg-nativa-canela/20" />

            <div className="grid grid-cols-5 gap-6">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`relative ${
                    visible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  {/* Circle */}
                  <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-nativa-canela/30 bg-nativa-lino">
                    <span className="font-[family-name:var(--font-display)] text-xl text-nativa-terracota">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="mb-1 text-lg font-semibold text-nativa-cacao">
                    {step.title}
                  </h3>
                  {step.note && (
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-nativa-terracota">
                      {step.note}
                    </p>
                  )}
                  <p className="text-sm leading-relaxed text-nativa-humo">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden">
          <div className="relative pl-8">
            {/* Connecting line */}
            <div className="absolute bottom-0 left-[15px] top-0 w-[1px] bg-nativa-canela/20" />

            <div className="space-y-10">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`relative ${
                    visible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Circle */}
                  <div className="absolute -left-8 top-0 flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-nativa-canela/30 bg-nativa-lino">
                    <span className="font-[family-name:var(--font-display)] text-xs text-nativa-terracota">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="mb-1 text-lg font-semibold text-nativa-cacao">
                    {step.title}
                  </h3>
                  {step.note && (
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-nativa-terracota">
                      {step.note}
                    </p>
                  )}
                  <p className="text-sm leading-relaxed text-nativa-humo">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
