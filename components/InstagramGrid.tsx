"use client";

import { useEffect, useRef, useState } from "react";

const posts = [
  {
    description: "Selfie mujer morena con rubor Nativa",
    likes: "2.4k",
    color: "from-nativa-canela/40 to-nativa-terracota/20",
  },
  {
    description: "Flat lay de productos sobre mesa de madera",
    likes: "1.8k",
    color: "from-nativa-oro/20 to-nativa-canela/30",
  },
  {
    description: "Tutorial step-by-step labial",
    likes: "3.1k",
    color: "from-nativa-terracota/30 to-nativa-canela/15",
  },
  {
    description: "Mujer profesional en oficina con look natural Nativa",
    likes: "1.5k",
    color: "from-nativa-canela/20 to-nativa-oro/15",
  },
  {
    description: "Close-up de textura de producto",
    likes: "2.0k",
    color: "from-nativa-terra/20 to-nativa-canela/20",
  },
  {
    description: "Behind-the-scenes de producción",
    likes: "1.2k",
    color: "from-nativa-selva/10 to-nativa-canela/20",
  },
];

export default function InstagramGrid() {
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
      ref={sectionRef}
      className="bg-nativa-arena py-20 lg:py-28"
      aria-labelledby="instagram-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2
            id="instagram-heading"
            className={`mb-3 font-[family-name:var(--font-display)] text-3xl text-nativa-cacao sm:text-4xl lg:text-5xl ${
              visible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Comparte tu glow Nativo
          </h2>
          <p
            className={`text-nativa-piedra ${
              visible ? "animate-fade-in-up animation-delay-150" : "opacity-0"
            }`}
          >
            Síguenos{" "}
            <a
              href="https://instagram.com/nativamakeup"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-nativa-terra hover:underline"
            >
              @nativamakeup
            </a>{" "}
            · Usa{" "}
            <span className="font-semibold text-nativa-terra">#SoyNativa</span>{" "}
            para aparecer aquí
          </p>
        </div>

        {/* Grid: 3x2 desktop, 2x3 mobile */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {posts.map((post, i) => (
            <a
              key={i}
              href="https://instagram.com/nativamakeup"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative aspect-square overflow-hidden rounded-xl ${
                visible
                  ? `animate-fade-in-up ${
                      i >= 2 ? `animation-delay-${Math.min(i, 3) * 150}` : ""
                    }`
                  : "opacity-0"
              }`}
              aria-label={`Post de Instagram: ${post.description}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${post.color} transition-transform duration-300 group-hover:scale-105`}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="max-w-[140px] text-center font-[family-name:var(--font-accent)] text-xs italic text-nativa-humo/30">
                  {post.description}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-nativa-noche/0 transition-all duration-300 group-hover:bg-nativa-noche/50">
                <div className="flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-white" aria-hidden="true">
                    &#9829;
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {post.likes}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
