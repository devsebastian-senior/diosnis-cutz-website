import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE } from "@/lib/site";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const description =
  "Barbería premium en North Miami Beach. Fades, afeitado clásico y diseño de barba. 5.0 en Google. Reserva en Booksy o llama (786) 859-6242.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Dionis Cutz — Barbería Premium en North Miami Beach",
    template: "%s · Dionis Cutz",
  },
  description,
  keywords: [
    "barbería North Miami Beach",
    "barber North Miami Beach",
    "barbería Miami",
    "fade haircut Miami",
    "barber shop 33162",
    "corte de cabello North Miami Beach",
    "barba Miami",
    "afeitado clásico Miami",
    "Dionis Cutz",
    "barbería premium",
  ],
  authors: [{ name: "Dionis Cutz" }],
  creator: "Dionis Cutz",
  publisher: "Dionis Cutz",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_US",
    url: SITE.url,
    siteName: "Dionis Cutz",
    title: "Dionis Cutz — Barbería Premium en North Miami Beach",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dionis Cutz — Barbería Premium en North Miami Beach",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/logo.png", apple: "/logo.png" },
  category: "barbershop",
  formatDetection: {
    telephone: true,
    address: true,
  },
};

const schemaJsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: SITE.name,
  image: `${SITE.url}/logo.png`,
  logo: `${SITE.url}/logo.png`,
  "@id": SITE.url,
  url: SITE.url,
  telephone: SITE.phone.tel,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.line1,
    addressLocality: "North Miami Beach",
    addressRegion: "FL",
    postalCode: "33162",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.9295,
    longitude: -80.1734,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "12:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    SITE.social.instagram,
    SITE.booking.url,
    "https://www.google.com/maps/place/?q=place_id:Dionis+Cutz+North+Miami+Beach",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
  hasMap: SITE.address.mapsUrl,
  paymentAccepted: "Cash, Credit Card, Debit Card, Apple Pay",
  currenciesAccepted: "USD",
  areaServed: {
    "@type": "City",
    name: "North Miami Beach",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <head>
        <Script
          id="schema-barbershop"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-stone-950 text-stone-100">
        {children}
      </body>
    </html>
  );
}
