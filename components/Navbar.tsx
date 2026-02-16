"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Servicios", href: "#servicios" },
    { label: "Experiencias", href: "#experiencias" },
    { label: "Alejandra", href: "#alejandra" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-nativa-lino/95 backdrop-blur-md shadow-[0_1px_8px_rgba(61,43,31,0.06)]"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className={`font-[family-name:var(--font-display)] text-2xl tracking-wide transition-colors duration-300 ${
            scrolled ? "text-nativa-cacao" : "text-nativa-lino"
          }`}
          aria-label="NATIVA — Ir al inicio"
        >
          NATIVA
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 hover:opacity-70 ${
                scrolled ? "text-nativa-cacao" : "text-nativa-lino"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* CTA */}
          <a
            href="#contacto"
            className="rounded-full bg-nativa-terracota px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-nativa-terracota/90 hover:shadow-lg"
          >
            Agenda tu cita
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden transition-colors duration-300 ${
            scrolled ? "text-nativa-cacao" : "text-nativa-lino"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-nativa-lino shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <span className="font-[family-name:var(--font-display)] text-2xl text-nativa-cacao">
            NATIVA
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
            className="text-nativa-cacao"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-1 px-6 pt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-lg font-medium text-nativa-cacao transition-colors hover:bg-nativa-arena"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-nativa-noche/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}
