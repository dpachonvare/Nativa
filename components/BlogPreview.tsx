"use client";

import { useEffect, useRef, useState } from "react";

const articles = [
  {
    category: "Guía de tonos",
    title: "Guía definitiva de maquillaje para piel trigueña colombiana",
    excerpt:
      "Tu piel trigueña tiene subtonos únicos que las marcas internacionales ignoran. Aprende a identificar si eres cálida, neutra u oliva y descubre los productos exactos que resaltarán tu belleza natural.",
    placeholder:
      "Collage de 4 mujeres con diferentes tonos de piel trigueña",
    color: "from-nativa-canela/30 to-nativa-oro/10",
  },
  {
    category: "Tutoriales",
    title: "Maquillaje que sobrevive 12 horas en clima tropical",
    excerpt:
      "Probamos técnicas profesionales en Cartagena, Cali y Barranquilla. Estos son los 5 pasos que hacen que tu maquillaje resista humedad, calor y la vida real colombiana.",
    placeholder: "Before/after de maquillaje tras día completo",
    color: "from-nativa-terracota/20 to-nativa-canela/10",
  },
  {
    category: "Ingredientes",
    title:
      "Cacay, café y cacao: los ingredientes nativos que transforman tu piel",
    excerpt:
      "Colombia tiene una biodiversidad cosmética inexplorada. Descubre cómo el aceite de cacay del Amazonas, el extracto de café del Huila y la manteca de cacao del Chocó trabajan en tu rutina de belleza.",
    placeholder: "Flat lay de ingredientes naturales colombianos",
    color: "from-nativa-selva/15 to-nativa-arena/30",
  },
];

const articleSchema = articles.map((a) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: a.title,
  description: a.excerpt,
  author: {
    "@type": "Organization",
    name: "NATIVA Cosmetics",
  },
  publisher: {
    "@type": "Organization",
    name: "NATIVA Cosmetics",
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
            Tutoriales, guías y secretos de belleza para la mujer latina
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
