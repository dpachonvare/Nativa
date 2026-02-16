"use client";

import { useEffect, useRef, useState } from "react";

const serviceOptions = [
  "Maquillaje de novia",
  "Evento social (quinceañera, grado, primera comunión)",
  "Producción audiovisual / editorial",
  "Imagen corporativa",
  "Nativa Party (experiencia grupal)",
  "Nativa Masterclass",
  "Otro",
];

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const inputClasses =
    "w-full rounded-xl border border-nativa-canela/20 bg-white px-5 py-3 text-sm text-nativa-cacao placeholder:text-nativa-piedra transition-all duration-300 focus:border-nativa-oro focus:ring-2 focus:ring-nativa-oro/20 focus:outline-none";

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="noise-overlay relative overflow-hidden bg-nativa-lino py-20 lg:py-28"
      aria-labelledby="contact-heading"
    >
      {/* Subtle pattern overlay */}
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

      <div className="relative z-10 mx-auto max-w-2xl px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="contact-heading"
            className={`mb-4 font-[family-name:var(--font-display)] text-3xl text-nativa-cacao sm:text-4xl ${
              visible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Agenda tu consulta gratuita
          </h2>
          <p
            className={`mb-10 text-nativa-humo ${
              visible ? "animate-fade-in-up animation-delay-150" : "opacity-0"
            }`}
          >
            Cuéntanos sobre tu evento y te contactaremos en menos de 24 horas
            con una propuesta personalizada.
          </p>
        </div>

        {submitted ? (
          <div
            className={`rounded-2xl border border-nativa-selva/20 bg-nativa-selva/5 p-8 text-center ${
              visible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-nativa-selva/10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7 text-nativa-selva">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <p className="text-lg font-semibold text-nativa-selva">
              ¡Gracias! Te contactaremos pronto.
            </p>
            <p className="mt-2 text-sm text-nativa-humo">
              Respuesta garantizada en menos de 24 horas. Revisa tu WhatsApp o
              correo electrónico.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`space-y-4 ${
              visible ? "animate-fade-in-up animation-delay-300" : "opacity-0"
            }`}
          >
            {/* Name & Phone */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-nativa-cacao">
                  Nombre *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-nativa-cacao">
                  WhatsApp o teléfono *
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+57 300 123 4567"
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-nativa-cacao">
                Email <span className="font-normal normal-case text-nativa-piedra">(opcional)</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@correo.com"
                className={inputClasses}
              />
            </div>

            {/* Service type */}
            <div>
              <label htmlFor="contact-service" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-nativa-cacao">
                Tipo de servicio
              </label>
              <select
                id="contact-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`${inputClasses} appearance-none`}
              >
                <option value="">Selecciona un servicio</option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label htmlFor="contact-date" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-nativa-cacao">
                Fecha tentativa del evento <span className="font-normal normal-case text-nativa-piedra">(opcional)</span>
              </label>
              <input
                id="contact-date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-nativa-cacao">
                Cuéntanos más <span className="font-normal normal-case text-nativa-piedra">(opcional)</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="¿En qué ciudad? ¿Cuántas personas? ¿Algún detalle especial?"
                className={`${inputClasses} resize-none`}
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full rounded-full bg-nativa-terracota px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:bg-nativa-terracota/90 hover:shadow-lg sm:w-auto"
              >
                Enviar consulta
              </button>
            </div>

            <p className="text-xs text-nativa-piedra">
              Respuesta garantizada en menos de 24 horas. También puedes
              escribirnos directo por{" "}
              <a
                href="https://wa.me/57XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-nativa-terra hover:underline"
              >
                WhatsApp
              </a>
              .
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
