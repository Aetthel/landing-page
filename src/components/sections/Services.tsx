"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

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
      headline: "Construir la herramienta que tu negocio necesita, no la que ya existe.",
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

  const currentService = servicesData.find((s) => s.id === activeService) || servicesData[0];

  return (
    <section id="servicios" className="w-full py-28 sm:py-36 border-b border-neutral-300/80 bg-[#FAF9F6]">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* Section Tag */}
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-400">
          Servicios
        </div>

        {/* Split Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Numbered List */}
          <div className="lg:col-span-5 space-y-4">
            {servicesData.map((service) => {
              const isActive = activeService === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group ${
                    isActive
                      ? "bg-neutral-950 text-white border-neutral-950 shadow-md"
                      : "bg-white text-neutral-900 border-neutral-300/80 hover:border-neutral-900"
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span className={`font-mono text-xs uppercase tracking-wider ${isActive ? "text-neutral-400" : "text-neutral-400"}`}>
                      {service.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-normal tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  <ArrowUpRight className={`w-5 h-5 transition-transform ${isActive ? "text-white translate-x-0.5 -translate-y-0.5" : "text-neutral-400 group-hover:text-neutral-900"}`} />
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Service Detail */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-neutral-300/80 shadow-2xs space-y-6">
            <h4 className="text-2xl sm:text-3xl font-normal tracking-tight text-neutral-950 leading-tight">
              {currentService.headline}
            </h4>

            <p className="text-base text-neutral-600 leading-relaxed font-sans">
              {currentService.description}
            </p>

            {/* Pill Tags Grid */}
            <div className="pt-4 border-t border-neutral-200 flex flex-wrap gap-2">
              {currentService.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full border border-neutral-300 bg-neutral-100 text-xs font-mono uppercase tracking-wider text-neutral-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

