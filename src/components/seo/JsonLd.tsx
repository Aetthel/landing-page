import React from "react";
import { siteConfig } from "@/config/site";
import { faqs } from "@/config/services";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "Organization"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: ["Aetthel Digital", "Aetthel Lab", "Aetthel Studio"],
        url: siteConfig.url,
        logo: `${siteConfig.url}/icon.svg`,
        image: `${siteConfig.url}/opengraph-image`,
        description:
          "Estudio digital en Barcelona especializado en desarrollo de landing pages de alta conversión, aplicaciones web a medida y automatizaciones de procesos para pymes y empresas.",
        telephone: "+34 696 35 29 40",
        email: "aetthel@gmail.com",
        priceRange: "€€",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Barcelona",
          addressRegion: "Catalunya",
          addressCountry: "ES",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "41.3879",
          longitude: "2.1699",
        },
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "Barcelona",
          },
          {
            "@type": "Country",
            name: "España",
          },
        ],
        sameAs: siteConfig.socials.map((s) => s.href),
        founder: [
          {
            "@type": "Person",
            name: "Martí Castaño",
            jobTitle: "Desarrollo y Arquitectura",
          },
          {
            "@type": "Person",
            name: "Alex Cortell",
            jobTitle: "Diseño y Producto",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios Digitales Aetthel",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Landing Pages de Alta Conversión",
                description:
                  "Páginas claras, ultra rápidas y optimizadas para captación y ventas.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Aplicaciones Web a Medida",
                description:
                  "Software, portales de cliente y paneles operativos adaptados al negocio.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Automatización de Procesos con IA",
                description:
                  "Conexión de herramientas (Stripe, WhatsApp, n8n, OpenAI) para eliminar trabajo manual.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: "es-ES",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
