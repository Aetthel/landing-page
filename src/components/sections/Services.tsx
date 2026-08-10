"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState("01");

  const servicesData = [
    {
      id: "01",
      number: "01",
      title: "Landing Pages",
      headline: "Convertir en segundos lo que eres, en por qué elegirte.",
      description:
        "Una página no vende por tenerla, sino por cómo comunica. Diseñamos landing pages ultra-rápidas y optimizadas para SEO, pensadas para que cada visitante entienda de inmediato tu propuesta de valor y tome acción.",
      tags: [
        "Copywriting Persuasivo",
        "PageSpeed 99+ Score",
        "Diseño Responsive UX",
        "Analítica & Conversión",
      ],
    },
    {
      id: "02",
      number: "02",
      title: "Apps a Medida",
      headline:
        "Construir la herramienta que tu negocio necesita, no la que ya existe.",
      description:
        "Cada empresa trabaja distinto y las herramientas genéricas rara vez encajan del todo. Desarrollamos aplicaciones web a medida, paneles administrativos internos y plataformas de clientes adaptadas a tu flujo operativo real.",
      tags: [
        "Paneles Administrativos",
        "Autenticación & Roles",
        "Pasarelas de Pago",
        "Arquitectura Escalable",
      ],
    },
    {
      id: "03",
      number: "03",
      title: "Automatizaciones",
      headline: "Que el trabajo repetitivo deje de ser trabajo.",
      description:
        "Conectamos tus procesos e infraestructura existente para que la información fluya automáticamente. Reducimos errores humanos y liberamos horas operativas para lo que realmente genera valor.",
      tags: [
        "Sincronización CRM",
        "Flujos Automáticos",
        "Integración de APIs",
        "Notificaciones Inteligentes",
      ],
    },
  ];

  const currentService =
    servicesData.find((s) => s.id === activeService) || servicesData[0];

  return (
    <section
      id="servicios"
      className="w-full py-16 sm:py-24 lg:py-28 bg-canvas"
    >
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 space-y-8 sm:space-y-12">
        {/* Section Label */}
        <Reveal className="font-sans text-base sm:text-lg uppercase tracking-wider text-ink-muted font-medium">
          SERVICIOS
        </Reveal>

        {/* Split Layout Container */}
        <Reveal
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          delay={120}
        >
          {/* Left Column: List with Mouse Hover (onMouseEnter & onMouseMove) */}
          <div className="lg:col-span-6 space-y-8">
            {servicesData.map((service) => {
              const isActive = activeService === service.id;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseMove={() => {
                    if (activeService !== service.id)
                      setActiveService(service.id);
                  }}
                  className="cursor-pointer transition-all duration-300 select-none group py-2"
                >
                  {isActive ? (
                    /* ACTIVE SERVICE ITEM */
                    <div className="space-y-2 border-b-2 border-accent pb-4 animate-fade-in">
                      <span className="font-sans text-xs font-bold text-accent block">
                        {service.number}
                      </span>

                      <div className="flex items-center justify-between">
                        <h3 className="text-4xl sm:text-6xl font-normal tracking-tight text-ink">
                          {service.title}
                        </h3>
                        <ArrowUpRight className="w-7 h-7 text-accent stroke-[1.75]" />
                      </div>
                    </div>
                  ) : (
                    /* INACTIVE SERVICE ITEM */
                    <div className="py-2 border-b border-transparent hover:border-line transition-colors">
                      <h3 className="text-4xl sm:text-6xl font-light tracking-tight text-ink-muted/50 group-hover:text-ink-muted transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Content updated on hover */}
          <div className="lg:col-span-6 space-y-8 pt-4 lg:pt-8 min-h-[320px] flex flex-col justify-between">
            <div className="space-y-6">
              <h4 className="text-2xl sm:text-4xl font-semibold tracking-tight text-ink leading-snug">
                {currentService.headline}
              </h4>

              <p className="text-base sm:text-lg text-ink-muted font-sans font-light leading-relaxed">
                {currentService.description}
              </p>
            </div>

            {/* Pill Tags Grid with Accent Borders */}
            <div className="pt-6 flex flex-wrap gap-2.5">
              {currentService.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full border border-accent/40 text-xs font-sans font-medium uppercase tracking-wider text-accent bg-transparent hover:bg-accent/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Container Aligned Section Divider Line */}
        <div className="w-full pt-2 border-b border-neutral-300/80" />
      </div>
    </section>
  );
};
