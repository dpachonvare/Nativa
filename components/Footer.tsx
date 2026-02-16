"use client";

import { useState } from "react";

const columns = [
  {
    title: "Tienda",
    links: [
      "Rostro",
      "Ojos",
      "Labios",
      "Accesorios",
      "Kits & Sets",
      "Lo nuevo",
      "Más vendidos",
    ],
  },
  {
    title: "Sobre Nativa",
    links: [
      "Nuestra historia",
      "Ingredientes",
      "Sostenibilidad",
      "Prensa",
      "Trabaja con nosotros",
    ],
  },
  {
    title: "Ayuda",
    links: [
      "Envíos y devoluciones",
      "Encuentra tu tono",
      "Preguntas frecuentes",
      "Contacto",
      "WhatsApp",
    ],
  },
];

const socials = [
  { name: "Instagram", href: "https://instagram.com/nativamakeup" },
  { name: "TikTok", href: "https://tiktok.com/@nativamakeup" },
  { name: "YouTube", href: "#" },
  { name: "Facebook", href: "#" },
];

function AccordionColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-nativa-canela/10 lg:border-0">
      {/* Mobile: accordion trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left lg:cursor-default lg:py-0"
        aria-expanded={open}
      >
        <h3 className="text-xs font-bold uppercase tracking-widest text-nativa-oro">
          {title}
        </h3>
        <span
          className={`text-nativa-piedra transition-transform duration-300 lg:hidden ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>

      {/* Desktop: always visible / Mobile: collapsible */}
      <ul
        className={`space-y-2.5 overflow-hidden transition-all duration-300 lg:mt-4 lg:max-h-none lg:opacity-100 ${
          open ? "max-h-96 py-3 opacity-100" : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100"
        }`}
      >
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-nativa-piedra transition-colors duration-200 hover:text-nativa-canela"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-nativa-cacao" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-4 lg:gap-12">
          {/* Brand column */}
          <div>
            <a
              href="/"
              className="mb-4 inline-block font-[family-name:var(--font-display)] text-3xl text-nativa-lino"
              aria-label="NATIVA — Ir al inicio"
            >
              NATIVA
            </a>
            <p className="mb-6 font-[family-name:var(--font-accent)] text-sm italic text-nativa-canela">
              Belleza que nace de la raíz.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-nativa-piedra transition-colors duration-200 hover:text-nativa-oro"
                  aria-label={`Síguenos en ${social.name}`}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <AccordionColumn
              key={col.title}
              title={col.title}
              links={col.links}
            />
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-nativa-canela/10">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center text-xs text-nativa-piedra sm:flex-row sm:justify-between sm:text-left">
            <p>
              &copy; 2026 Nativa Cosmetics S.A.S. · Registro INVIMA · Todos los
              derechos reservados
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="transition-colors hover:text-nativa-canela"
              >
                Política de privacidad
              </a>
              <a
                href="#"
                className="transition-colors hover:text-nativa-canela"
              >
                Términos y condiciones
              </a>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-nativa-humo">
            Hecho con &#129150; en Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
