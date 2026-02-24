import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Augem – Perito tasador de joyas en Málaga | Tasaciones y certificados",
  description:
    "Tasaciones de joyas y diamantes con validez legal. Informes para aseguradoras, abogados y particulares. Servicio en Málaga y desplazamientos nacionales.",
  metadataBase: new URL("https://augem.es"),
  alternates: {
    canonical: "https://augem.es",
    languages: { "es-ES": "https://augem.es" },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Augem – Perito tasador de joyas en Málaga",
    description:
      "Tasaciones y certificados con validez legal. Particulares, aseguradoras y bufetes.",
    url: "https://augem.es",
    siteName: "Augem",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Augem" }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Augem – Perito tasador de joyas en Málaga",
    description:
      "Tasaciones y certificados con validez legal. Particulares, aseguradoras y bufetes.",
    images: ["/og.jpg"],
  },
};

function SEOJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Augem – Perito tasador de joyas",
    url: "https://augem.es",
    image: "https://augem.es/og.jpg",
    telephone: "+34676406196",
    email: "info@augem.es",
    taxID: "76428747T",
    identifier: "Socio A.E.T.A. nº 230",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Málaga",
      addressRegion: "Andalucía",
      addressCountry: "ES",
    },
    areaServed: ["Málaga", "España"],
    openingHours: "Mo-Fr 09:00-19:00",
    description:
      "Tasación y certificación de joyas, diamantes y gemas. Informes periciales claros, objetivos y con validez legal para particulares, aseguradoras y despachos.",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WRTQB6QCM1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WRTQB6QCM1');
          `}
        </Script>
      </head>
      <body>
        {children}
        {/* Datos estructurados globales */}
        <SEOJsonLd />
      </body>
    </html>
  );
}