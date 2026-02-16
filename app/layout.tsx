import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nativamakeup.co"),
  title: "NATIVA | Maquillaje Profesional para Belleza Latina — Colombia",
  description:
    "Maquillaje profesional diseñado para la piel latina. Bases, rubores y labiales con tonos reales para piel trigueña, morena y canela. Cruelty-free. Hecho en Colombia. Envío a todo el país.",
  keywords: [
    "maquillaje profesional Colombia",
    "maquillaje piel latina",
    "maquillaje para piel trigueña",
    "base para piel morena Colombia",
    "maquillaje cruelty free Colombia",
    "cosmética colombiana",
    "maquillaje larga duración clima tropical",
    "tonos para piel latina",
  ],
  openGraph: {
    title: "NATIVA | Maquillaje Profesional para Belleza Latina",
    description:
      "Maquillaje profesional diseñado para la piel latina. Tonos reales. Fórmulas para clima tropical. Hecho en Colombia.",
    url: "https://nativamakeup.co",
    siteName: "NATIVA",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NATIVA | Maquillaje Profesional para Belleza Latina",
    description:
      "Maquillaje profesional diseñado para la piel latina. Tonos reales. Fórmulas para clima tropical. Hecho en Colombia.",
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NATIVA Cosmetics",
  alternateName: "Nativa Makeup",
  url: "https://nativamakeup.co",
  logo: "https://nativamakeup.co/logo.png",
  description:
    "Maquillaje profesional diseñado para la belleza latina. Hecho en Colombia.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogotá",
    addressRegion: "Cundinamarca",
    addressCountry: "CO",
  },
  sameAs: [
    "https://instagram.com/nativamakeup",
    "https://tiktok.com/@nativamakeup",
  ],
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
      name: "¿NATIVA tiene tonos para piel morena y trigueña?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. NATIVA fue creada específicamente para la diversidad de tonos de piel latinoamericana. Nuestra línea de bases incluye más de 35 tonos con subtonos cálidos, neutros y oliva, diseñados desde cero para pieles trigueñas, morenas, canela y porcelana latinas.",
      },
    },
    {
      "@type": "Question",
      name: "¿El maquillaje NATIVA resiste el clima tropical colombiano?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutamente. Todas nuestras fórmulas son probadas en condiciones de humedad y calor extremo en ciudades como Barranquilla, Cartagena y Cali. Nuestras bases y labiales tienen tecnología de larga duración que resiste hasta 12 horas sin transferencia ni oxidación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los productos NATIVA son cruelty-free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. NATIVA es 100% libre de crueldad animal. No testamos ni permitimos que terceros testen nuestros productos en animales.",
      },
    },
    {
      "@type": "Question",
      name: "¿NATIVA envía a toda Colombia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Realizamos envíos a todas las ciudades y municipios de Colombia. Envío gratis en compras superiores a $120.000 COP. Tiempo de entrega: 1-3 días hábiles en ciudades principales, 3-5 días en el resto del país.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué ingredientes nativos colombianos usa NATIVA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nuestras fórmulas incorporan aceite de cacay del Amazonas colombiano, extracto de café del Huila, manteca de cacao del Chocó, y otros ingredientes de la biodiversidad colombiana.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo encuentro mi tono exacto de base NATIVA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ofrecemos un quiz interactivo de tonos en nuestra web que analiza tu subtono y nivel de profundidad. También puedes visitarnos en nuestras tiendas aliadas en Bogotá, Medellín y Cali para una colorimetría personalizada gratuita.",
      },
    },
  ],
};

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "Brand",
  name: "NATIVA Cosmetics",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "10000",
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aggregateRatingSchema),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
