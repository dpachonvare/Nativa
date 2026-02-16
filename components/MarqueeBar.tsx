export default function MarqueeBar() {
  const items = [
    "Cruelty-free",
    "Hecho en Colombia",
    "Formulado para clima tropical",
    "+35 tonos para piel latina",
    "Envío gratis +$120.000",
    "Ingredientes nativos colombianos",
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
      aria-label="Beneficios de NATIVA"
      role="marquee"
    >
      <div className="animate-marquee flex w-max">
        {renderItems()}
        {renderItems()}
      </div>
    </div>
  );
}
