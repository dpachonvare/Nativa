import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nativamakeup.co"),
  title: "NATIVA | Maquillaje Profesional para Novias y Eventos — Bogotá, Colombia",
  description:
    "Servicio de maquillaje profesional para novias, eventos sociales, producciones audiovisuales y experiencias grupales. Especialistas en belleza latina. Maquillaje artístico y cinematográfico. Bogotá y toda Colombia.",
  keywords: [
    "maquillaje novia Bogotá",
    "maquilladora profesional Colombia",
    "maquillaje eventos sociales",
    "maquillaje artístico cinematográfico",
    "experiencia maquillaje grupal",
    "maquillaje quinceañera",
    "maquillaje grados Colombia",
    "maquillaje modelos influencers",
    "maquillaje profesional Colombia",
    "maquillaje piel latina",
  ],
  openGraph: {
    title: "NATIVA | Maquillaje Profesional para Novias y Eventos — Bogotá",
    description:
      "Servicio de maquillaje profesional especializado en belleza latina. Para novias, eventos, producciones y experiencias grupales. Bogotá y toda Colombia.",
    url: "https://nativamakeup.co",
    siteName: "NATIVA",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NATIVA | Maquillaje Profesional para Novias y Eventos — Bogotá",
    description:
      "Servicio de maquillaje profesional especializado en belleza latina. Para novias, eventos, producciones y experiencias grupales. Bogotá y toda Colombia.",
  },
  alternates: {
    canonical: "https://nativamakeup.co",
    languages: {
      "es-CO": "https://nativamakeup.co",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const beautySalonSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "NATIVA Makeup Studio",
  alternateName: "Nativa Maquillaje Profesional",
  description:
    "Servicio de maquillaje profesional especializado en belleza latina. Maquillaje para novias, eventos sociales, producciones audiovisuales y experiencias grupales.",
  url: "https://nativamakeup.co",
  image: "https://nativamakeup.co/og-image.jpg",
  telephone: "+57XXXXXXXXXX",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogotá",
    addressRegion: "Cundinamarca",
    addressCountry: "CO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 4.6097,
    longitude: -74.0817,
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "20:00",
  },
  founder: {
    "@type": "Person",
    name: "Alejandra Tovar",
    jobTitle: "Maquilladora Profesional & Fundadora",
    description:
      "Maquilladora profesional certificada con más de 5 años de experiencia. Formada en la Universidad Santo Tomás de Bogotá y VPro Makeup Center.",
  },
  areaServed: { "@type": "Country", name: "Colombia" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Maquillaje Profesional",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Maquillaje para Novias" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Maquillaje para Eventos Sociales" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Maquillaje Artístico y Cinematográfico" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Experiencias de Maquillaje Grupal" } },
    ],
  },
  sameAs: ["https://instagram.com/nativamakeup", "https://tiktok.com/@nativamakeup"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NATIVA",
  url: "https://nativamakeup.co",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://nativamakeup.co/buscar?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el servicio de maquillaje para novias?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El paquete de novia NATIVA incluye asesoría personalizada, prueba de maquillaje y servicio el día de la boda con productos profesionales de alta duración. Agenda una consulta gratuita y te enviaremos una cotización personalizada en menos de 24 horas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Ofrecen servicio a domicilio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Todos nuestros servicios son a domicilio dentro de Bogotá. También nos desplazamos a otras ciudades de Colombia para bodas, eventos y producciones.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye la prueba de maquillaje para novias?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La prueba de novia es una sesión de 2-3 horas donde definimos juntas el look final. Incluye diagnóstico de piel, análisis de colorimetría, prueba del maquillaje completo y ficha técnica para el día de la boda.",
      },
    },
    {
      "@type": "Question",
      name: "¿Quién es Alejandra Tovar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alejandra Tovar es la fundadora y maquilladora principal de NATIVA. Es profesional certificada por la Universidad Santo Tomás de Bogotá y VPro Makeup Center, con más de 5 años de experiencia en maquillaje social, artístico y cinematográfico.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es una Nativa Party?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es una experiencia de maquillaje grupal privada ideal para despedidas de soltera, cumpleaños o reuniones de amigas. Grupos de 4 a 12 personas, duración 2.5 a 3 horas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Trabajan con producciones audiovisuales y moda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. NATIVA ofrece servicio de maquillaje artístico y cinematográfico para producciones de cine, televisión, sesiones fotográficas editoriales, campañas publicitarias y pasarelas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Con cuánta anticipación debo reservar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para novias, mínimo 2-3 meses de anticipación. Para eventos sociales, 3-4 semanas. Para Nativa Parties y Masterclasses, 2 semanas.",
      },
    },
  ],
};

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "NATIVA Makeup Studio",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CO">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(beautySalonSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
