import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import { IntroSequence } from "@/components/ui/intro-sequence";
import { INTRO_SESSION_KEY } from "@/lib/boot";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ScrollRail } from "@/components/ui/scroll-rail";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { AnimatedGridBackground } from "@/components/ui/animated-grid-background";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const bootScript = `(function(){var d=document.documentElement;try{
var skip=sessionStorage.getItem(${JSON.stringify(INTRO_SESSION_KEY)})==="1"||
matchMedia("(prefers-reduced-motion: reduce)").matches;
if(skip){d.dataset.intro="skip";d.classList.remove("is-booting");}
else{sessionStorage.setItem(${JSON.stringify(INTRO_SESSION_KEY)},"1");}
}catch(e){d.dataset.intro="skip";d.classList.remove("is-booting");}})();`;

const displayFont = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

import { LoadingProvider } from "@/context/LoadingContext";
import { LoadingOverlay } from "@/components/ui/loading-overlay";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Estudio de Desarrollo Web y Automatización en Barcelona`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Aetthel",
    "Aetthel Digital",
    "Estudio digital Barcelona",
    "Desarrollo web Barcelona",
    "Diseño de landing pages Barcelona",
    "Landing pages de alta conversión",
    "Desarrollo de aplicaciones web a medida",
    "Software a medida pymes",
    "Automatización de procesos",
    "Automatización con IA para empresas",
    "Agencia desarrollo web Barcelona",
    "Aetthel Lab",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "./",
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
  verification: {
    google: "google3b3ea3f429026696",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    title: `${siteConfig.name} | Estudio de Desarrollo Web y Automatización en Barcelona`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Estudio Digital en Barcelona`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Estudio de Desarrollo Web y Automatización en Barcelona`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
      { url: "/favicon.ico?v=2", sizes: "any" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.png?v=2",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased is-booting`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink relative">
        <Script id="boot-script" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: bootScript }} />
        <OrganizationJsonLd />

        <LoadingProvider>
          {/* Fondo animado de rejilla + partículas en toda la landing */}
          <AnimatedGridBackground />

          {/* Entrada de marca */}
          <IntroSequence />

          {/* Carga dinámica bajo demanda */}
          <LoadingOverlay />

          {/* Cursor personalizado */}
          <CustomCursor />

          {/* Barra de scroll de marca */}
          <ScrollRail />

          {/* La Navbar vive aquí y no dentro de cada página a propósito: montada
              por página, React la destruiría en cada navegación y el selector
              deslizante no llegaría a recorrer nada —se vería un salto—. Montada
              una sola vez, sobrevive al cambio de ruta y la pastilla viaja. */}
          <Navbar />

          <SmoothScroll>{children}</SmoothScroll>
        </LoadingProvider>
      </body>
    </html>
  );
}
