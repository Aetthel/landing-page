import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bodyFont.variable} ${displayFont.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        {children}
      </body>
    </html>
  );
}
