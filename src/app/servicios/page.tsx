import React from "react";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { ServiceSheet } from "@/components/sections/ServiceSheet";
import { ServicesAftercare } from "@/components/sections/ServicesAftercare";
import { ServicesFaq } from "@/components/sections/ServicesFaq";
import { services } from "@/config/services";
import { HeroGradient } from "@/components/ui/aurora-background";

export const metadata: Metadata = {
  title: "Servicios | Aetthel",
  description:
    "Landing pages, web apps a medida y automatización de procesos. Los niveles de cada servicio, qué incluye, qué no entra y cómo trabajamos, explicado antes de empezar. Presupuesto a medida.",
};

export default function ServiciosPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-dark text-white font-sans selection:bg-dark selection:text-white">
      <main className="flex-1 w-full">
        {/* HERO CABECERA EN NEGRO */}
        <section
          data-cursor-surface="dark"
          className="relative isolate w-full min-h-screen min-h-dvh flex flex-col justify-center overflow-hidden bg-dark text-white pt-32 pb-32 sm:pt-36 sm:pb-36"
        >
          <HeroGradient tone="dark" />
          <div className="relative z-10 w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
            {/* `items-start` + `.hero-lead`: la entradilla cuelga del titular a
                una altura fija, en vez de alinearse por abajo y moverse según
                el largo del texto —que es lo que hacía distinta a cada página—. */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-7">
                <span className="block type-eyebrow text-brand animate-rise-in rise-delay-1">
                  Servicios
                </span>

                <h1 className="mt-6 type-display text-white">
                  <span className="block animate-rise-in rise-delay-1">
                    Tu idea o problema,
                  </span>
                  <span className="block text-brand animate-rise-in rise-delay-2">
                    nosotros el resto.
                  </span>
                </h1>
              </div>

              <p className="lg:col-span-5 max-w-xl type-lead hero-lead text-neutral-400 animate-rise-in rise-delay-3">
                Casi todas las ideas que tenemos nacen de una nota en el móvil, de un anuncio en la televisión o de una simple conversación pero que nunca llega a concretarse por falta de tiempo o miedo a enfrentarse a las adversidades, en Aetthel construimos todas esas ideas que nacen de ti y las convertimos en un producto de valor para tu trabajo.
              </p>
            </div>
          </div>
        </section>

        {/* `overflow-clip` y no `overflow-hidden`: los dos recortan igual a las
            esquinas redondeadas, pero `hidden` convierte a este bloque en el
            marco de scroll de todo lo que lleva dentro, y entonces las columnas
            `sticky` de las fichas, la postventa y la FAQ dejan de pegarse al
            viewport —se quedan quietas—. `clip` no crea marco de scroll. */}
        <div className="relative z-20 rounded-t-[3.5rem] sm:rounded-t-[4.5rem] bg-canvas border-t border-line/80 overflow-clip shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
          {services.map((service) => (
            <ServiceSheet
              key={service.id}
              service={service}
              tone="light"
            />
          ))}

          <ServicesAftercare />
          <ServicesFaq />
        </div>
      </main>

      <Footer />
    </div>
  );
}
