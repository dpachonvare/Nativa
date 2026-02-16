"use client";

import { useEffect, useRef, useState } from "react";

const articles = [
  {
    category: "Novias",
    title: "Guía completa de maquillaje de novia en Colombia: todo lo que debes saber",
    excerpt:
      "Desde cuándo agendar tu prueba hasta cómo elegir el look perfecto para tu tipo de piel y el clima de tu boda. Todo lo que una novia colombiana necesita saber sobre su maquillaje.",
    placeholder: "Novia colombiana preparándose para su boda",
    color: "from-nativa-canela/30 to-nativa-oro/10",
  },
  {
    category: "Tutoriales",
    title: "Cómo elegir a tu maquilladora profesional: 7 señales de que estás en buenas manos",
    excerpt:
      "No todas las maquilladoras son iguales. Aprende a identificar profesionalismo, técnica y experiencia real antes de confiar tu rostro en el día más importante.",
    placeholder: "Maquilladora profesional trabajando con cliente",
    color: "from-nativa-terracota/20 to-nativa-canela/10",
  },
  {
    category: "Experiencias",
    title: "Nativa Party: la nueva forma de celebrar con tus amigas",
    excerpt:
      "Olvídate de los planes de siempre. Descubre cómo una experiencia de maquillaje grupal se convirtió en el plan favorito para despedidas de soltera, cumpleaños y reuniones de amigas en Bogotá.",
    placeholder: "Grupo de amigas en una Nativa Party",
    color: "from-nativa-selva/15 to-nativa-arena/30",
  },
];

const articleSchema = articles.map((a) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: a.title,
  description: a.excerpt,
  author: {
    "@type": "Person",
    name: "Alejandra Tovar",
  },
  publisher: {
    "@type": "Organization",
    name: "NATIVA Makeup Studio",
  },
}));

export default function BlogPreview() {
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
      id="journal"
      ref={sectionRef}
      className="bg-nativa-lino py-20 lg:py-28"
      aria-labelledby="blog-heading"
    >
      {/* Article schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2
            id="blog-heading"
            className={`mb-3 font-[family-name:var(--font-display)] text-3xl text-nativa-cacao sm:text-4xl lg:text-5xl ${
              visible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            El Journal Nativa
          </h2>
          <p
            className={`text-nativa-piedra ${
              visible ? "animate-fade-in-up animation-delay-150" : "opacity-0"
            }`}
          >
            Guías, inspiración y consejos de belleza para tus momentos especiales
          </p>
        </div>

        {/* Desktop: 3-col grid / Mobile: horizontal scroll */}
        <div className="flex gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {articles.map((article, i) => (
            <article
              key={i}
              className={`group min-w-[300px] flex-shrink-0 cursor-pointer lg:min-w-0 ${
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
              {/* Image placeholder */}
              <div
                className={`relative mb-5 aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br ${article.color} transition-transform duration-300 group-hover:scale-[1.02]`}
              >
                <div className="flex h-full items-center justify-center">
                  <p className="max-w-[180px] text-center font-[family-name:var(--font-accent)] text-xs italic text-nativa-humo/40">
                    {article.placeholder}
                  </p>
                </div>
              </div>

              {/* Category tag */}
              <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-widest text-nativa-terracota">
                {article.category}
              </span>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold leading-snug text-nativa-cacao transition-colors duration-300 group-hover:text-nativa-terra">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm leading-relaxed text-nativa-humo">
                {article.excerpt}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-nativa-terracota transition-colors duration-300 hover:text-nativa-terra"
          >
            Explorar el Journal
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
