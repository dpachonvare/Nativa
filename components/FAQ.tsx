"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "¿Cuánto cuesta el servicio de maquillaje para novias?",
    answer:
      "El paquete de novia NATIVA incluye asesoría personalizada, prueba de maquillaje y servicio el día de la boda con productos profesionales de alta duración. El precio varía según la complejidad del look, servicios adicionales (como maquillaje para acompañantes) y la ubicación del evento. Agenda una consulta gratuita y te enviaremos una cotización personalizada en menos de 24 horas.",
  },
  {
    question: "¿Ofrecen servicio a domicilio?",
    answer:
      "Sí. Todos nuestros servicios son a domicilio dentro de Bogotá. También nos desplazamos a otras ciudades de Colombia para bodas, eventos y producciones. El servicio a domicilio está incluido dentro de Bogotá; para otras ubicaciones, cotizamos el desplazamiento según la distancia.",
  },
  {
    question: "¿Qué incluye la prueba de maquillaje para novias?",
    answer:
      "La prueba de novia es una sesión de 2-3 horas donde definimos juntas el look final para tu boda. Incluye diagnóstico de piel, análisis de colorimetría, prueba del maquillaje completo coordinado con tu vestido y accesorios, y la creación de una ficha técnica que garantiza que el resultado del día de tu boda sea exactamente lo que elegimos. La prueba se programa mínimo 3-4 semanas antes de la boda.",
  },
  {
    question: "¿Quién es Alejandra Tovar?",
    answer:
      "Alejandra Tovar es la fundadora y maquilladora principal de NATIVA. Es profesional certificada por la Universidad Santo Tomás de Bogotá y VPro Makeup Center, con más de 5 años de experiencia en maquillaje social, artístico y cinematográfico. Se especializa en belleza latina y ha trabajado con novias, producciones audiovisuales, modelos e influencers en toda Colombia.",
  },
  {
    question: "¿Qué es una Nativa Party?",
    answer:
      "Es una experiencia de maquillaje grupal privada ideal para despedidas de soltera, cumpleaños o reuniones de amigas. Alejandra guía a tu grupo paso a paso en una clase de maquillaje divertida y práctica. Incluye todos los productos profesionales, espumante, snacks, fotos del evento y tips personalizados para cada asistente. Grupos de 4 a 12 personas, duración 2.5 a 3 horas.",
  },
  {
    question: "¿Trabajan con producciones audiovisuales y moda?",
    answer:
      "Sí. NATIVA ofrece servicio de maquillaje artístico y cinematográfico para producciones de cine, televisión, sesiones fotográficas editoriales, campañas publicitarias y pasarelas. Alejandra tiene experiencia trabajando con actores, actrices, modelos e influencers, con técnicas especializadas para cámara y distintas condiciones de iluminación.",
  },
  {
    question: "¿Con cuánta anticipación debo reservar?",
    answer:
      "Para novias, recomendamos reservar con mínimo 2-3 meses de anticipación para garantizar disponibilidad. Para eventos sociales, 3-4 semanas es ideal. Para Nativa Parties y Masterclasses, 2 semanas de anticipación. Para producciones audiovisuales, el tiempo depende del alcance del proyecto — contáctanos para coordinar.",
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
          Todo lo que necesitas saber sobre nuestros servicios
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
