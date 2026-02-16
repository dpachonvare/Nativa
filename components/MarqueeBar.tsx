export default function MarqueeBar() {
  const items = [
    "Maquillaje profesional certificado",
    "+5 años de experiencia",
    "Especialistas en belleza latina",
    "Novias",
    "Eventos",
    "Producciones",
    "Experiencias grupales",
    "A domicilio en toda Colombia",
    "Cruelty-free",
  ];

  const separator = (
    <span className="mx-4 text-nativa-canela/40" aria-hidden="true">
      ·
    </span>
  );

  const renderItems = () =>
    items.map((item, i) => (
      <span key={i} className="flex items-center whitespace-nowrap">
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-nativa-humo">
          {item}
        </span>
        {separator}
      </span>
    ));

  return (
    <div
      className="overflow-hidden border-y border-nativa-canela/15 bg-nativa-arena py-3"
      aria-label="Beneficios del servicio NATIVA"
      role="marquee"
    >
      <div className="animate-marquee flex w-max">
        {renderItems()}
        {renderItems()}
      </div>
    </div>
  );
}
