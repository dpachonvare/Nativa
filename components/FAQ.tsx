"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "¿NATIVA tiene tonos para piel morena y trigueña?",
    answer:
      "Sí. NATIVA fue creada específicamente para la diversidad de tonos de piel latinoamericana. Nuestra línea de bases incluye más de 35 tonos con subtonos cálidos, neutros y oliva, diseñados desde cero para pieles trigueñas, morenas, canela y porcelana latinas. No adaptamos rangos internacionales — creamos los nuestros.",
  },
  {
    question: "¿El maquillaje NATIVA resiste el clima tropical colombiano?",
    answer:
      "Absolutamente. Todas nuestras fórmulas son probadas en condiciones de humedad y calor extremo en ciudades como Barranquilla, Cartagena y Cali. Nuestras bases y labiales tienen tecnología de larga duración que resiste hasta 12 horas sin transferencia ni oxidación, incluso en temperaturas superiores a 35°C.",
  },
  {
    question: "¿Los productos NATIVA son cruelty-free?",
    answer:
      "Sí. NATIVA es 100% libre de crueldad animal. No testamos ni permitimos que terceros testen nuestros productos en animales. Además, trabajamos con ingredientes de origen vegetal y nativos colombianos certificados.",
  },
  {
    question: "¿NATIVA envía a toda Colombia?",
    answer:
      "Sí. Realizamos envíos a todas las ciudades y municipios de Colombia. Envío gratis en compras superiores a $120.000 COP. Tiempo de entrega: 1-3 días hábiles en ciudades principales, 3-5 días en el resto del país.",
  },
  {
    question: "¿Qué ingredientes nativos colombianos usa NATIVA?",
    answer:
      "Nuestras fórmulas incorporan aceite de cacay del Amazonas colombiano (rico en retinol natural), extracto de café del Huila (antioxidante), manteca de cacao del Chocó (hidratación profunda), y otros ingredientes de la biodiversidad colombiana. Cada ingrediente es seleccionado por sus propiedades comprobadas para el cuidado de la piel latina.",
  },
  {
    question: "¿Cómo encuentro mi tono exacto de base NATIVA?",
    answer:
      "Ofrecemos un quiz interactivo de tonos en nuestra web que analiza tu subtono y nivel de profundidad. También puedes visitarnos en nuestras tiendas aliadas en Bogotá, Medellín y Cali para una colorimetría personalizada gratuita.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-nativa-canela/15">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors duration-200 hover:text-nativa-terra"
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-base font-semibold text-nativa-cacao sm:text-lg">
          {question}
        </span>
        <span
          className={`flex-shrink-0 text-nativa-canela transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm leading-relaxed text-nativa-humo sm:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2
          id="faq-heading"
          className={`mb-4 text-center font-[family-name:var(--font-display)] text-3xl text-nativa-cacao sm:text-4xl lg:text-5xl ${
            visible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Preguntas frecuentes
        </h2>
        <p
          className={`mb-12 text-center text-nativa-piedra ${
            visible ? "animate-fade-in-up animation-delay-150" : "opacity-0"
          }`}
        >
          Todo lo que necesitas saber sobre NATIVA
        </p>

        <div
          className={`${
            visible ? "animate-fade-in-up animation-delay-300" : "opacity-0"
          }`}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() =>
                setOpenIndex(openIndex === i ? null : i)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
