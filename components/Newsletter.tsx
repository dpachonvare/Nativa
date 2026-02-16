"use client";

import { useEffect, useRef, useState } from "react";

export default function Newsletter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section
      ref={sectionRef}
      className="noise-overlay relative overflow-hidden bg-nativa-lino py-20 lg:py-28"
      aria-labelledby="newsletter-heading"
    >
      {/* Subtle leaf pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, var(--color-nativa-canela) 1px, transparent 1px), radial-gradient(circle at 80% 20%, var(--color-nativa-canela) 1px, transparent 1px), radial-gradient(circle at 60% 80%, var(--color-nativa-canela) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-xl px-6 text-center lg:px-8">
        <h2
          id="newsletter-heading"
          className={`mb-4 font-[family-name:var(--font-display)] text-3xl text-nativa-cacao sm:text-4xl ${
            visible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Únete a la comunidad Nativa
        </h2>

        <p
          className={`mb-8 text-nativa-humo ${
            visible ? "animate-fade-in-up animation-delay-150" : "opacity-0"
          }`}
        >
          Recibe acceso anticipado a lanzamientos, tutoriales exclusivos y un
          15% de descuento en tu primera compra.
        </p>

        {submitted ? (
          <div
            className={`rounded-xl border border-nativa-selva/20 bg-nativa-selva/5 p-6 ${
              visible ? "animate-fade-in-up animation-delay-300" : "opacity-0"
            }`}
          >
            <p className="font-semibold text-nativa-selva">
              ¡Bienvenida a la comunidad Nativa!
            </p>
            <p className="mt-1 text-sm text-nativa-humo">
              Revisa tu correo para recibir tu código de descuento del 15%.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`flex flex-col gap-3 sm:flex-row ${
              visible ? "animate-fade-in-up animation-delay-300" : "opacity-0"
            }`}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Tu correo electrónico
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className="flex-1 rounded-full border border-nativa-canela/20 bg-white px-6 py-3.5 text-sm text-nativa-cacao placeholder:text-nativa-piedra transition-all duration-300 focus:border-nativa-oro focus:ring-2 focus:ring-nativa-oro/20 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-nativa-terracota px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-nativa-terracota/90 hover:shadow-lg"
            >
              Quiero ser Nativa
            </button>
          </form>
        )}

        <p
          className={`mt-4 text-xs text-nativa-piedra ${
            visible ? "animate-fade-in-up animation-delay-450" : "opacity-0"
          }`}
        >
          Sin spam. Solo belleza. Puedes salir cuando quieras.
        </p>
      </div>
    </section>
  );
}
