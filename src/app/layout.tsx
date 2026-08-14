import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import { IntroSequence } from "@/components/ui/intro-sequence";
import { INTRO_SESSION_KEY } from "@/lib/boot";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ScrollRail } from "@/components/ui/scroll-rail";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { AnimatedGridBackground } from "@/components/ui/animated-grid-background";
import "./globals.css";

/**
 * Corre antes de que se pinte nada: decide si esta visita ve la cortina de
 * entrada. Si no toca (ya se vio en esta pestaña, o el usuario pide menos
 * movimiento), suelta el freno ahí mismo y marca el <html> para que la cortina
 * ni se dibuje — así no hay fogonazo negro esperando a la hidratación.
 * Si algo falla, suelta el freno igualmente: la web nunca se queda congelada.
 */
const bootScript = `(function(){var d=document.documentElement;try{
var skip=sessionStorage.getItem(${JSON.stringify(INTRO_SESSION_KEY)})==="1"||
matchMedia("(prefers-reduced-motion: reduce)").matches;
if(skip){d.dataset.intro="skip";d.classList.remove("is-booting");}
else{sessionStorage.setItem(${JSON.stringify(INTRO_SESSION_KEY)},"1");}
}catch(e){d.dataset.intro="skip";d.classList.remove("is-booting");}})();`;

/* Titulares — neogrotesca moderna, limpia y geométrica */
const displayFont = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

/* Cuerpo de texto / UI */
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
      /* El script de arranque de abajo toca la clase y el `data-intro` de este
         mismo <html> antes de que React hidrate — tiene que ser así para que no
         haya fogonazo. La discrepancia con el HTML servido es intencionada. */
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink relative">
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />

        {/* Fondo animado de rejilla + partículas en toda la landing */}
        <AnimatedGridBackground />

        {/* Sin JS no hay observer que revele nada ni cortina que se levante:
            el contenido se ve de entrada y sin freno. */}
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }
.intro { display: none !important; }
.is-booting .animate-rise-in,
.is-booting .animate-fade-in,
.is-booting .animate-scroll-wheel,
.is-booting .animate-scroll-hop { animation-play-state: running !important; }
.marker { animation: none !important; clip-path: none !important; }`}</style>
        </noscript>

        {/* Entrada de marca: logo a fotogramas sobre negro antes de la web */}
        <IntroSequence />

        {/* Cursor personalizado de alta resolución */}
        <CustomCursor />

        {/* Barra de scroll de marca en sustitución de la del navegador */}
        <ScrollRail />

        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
