import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - Estudio`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Aetthel", "Arquitectura", "Estudio", "Brand Spaces", "Diseño"],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
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
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased is-booting`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink relative">
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />

        {/* Fondo animado de rejilla + partículas en toda la landing */}
        <AnimatedGridBackground />

        {/* Entrada de marca */}
        <IntroSequence />

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
      </body>
    </html>
  );
}
