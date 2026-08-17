import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceSheet } from "@/components/sections/ServiceSheet";
import { ServicesAftercare } from "@/components/sections/ServicesAftercare";
import { ServicesFaq } from "@/components/sections/ServicesFaq";
import { services } from "@/config/services";

export const metadata: Metadata = {
  title: "Servicios | Aetthel",
  description:
    "Landing pages, web apps a medida y automatización de procesos. Los niveles de cada servicio, qué incluye, qué no entra y cómo trabajamos, explicado antes de empezar. Presupuesto a medida.",
};

export default function ServiciosPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-dark text-white font-sans selection:bg-dark selection:text-white">
      <Navbar />

      <main className="flex-1 w-full">
        {/* HERO CABECERA EN NEGRO SIN DEGRADADO */}
        <section
          data-cursor-surface="dark"
          className="relative isolate w-full min-h-screen min-h-dvh flex flex-col justify-center overflow-hidden bg-dark text-white pt-32 pb-32 sm:pt-36 sm:pb-36"
        >
          <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
              <div className="lg:col-span-8">
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

              <p className="lg:col-span-4 max-w-md type-body text-neutral-400 animate-rise-in rise-delay-3">
                Casi todas las ideas que tenemos nacen de una nota en el móvil, de un anuncio en la televisión o de una simple conversación pero que nunca llega a concretarse por falta de tiempo o miedo a enfrentarse a las adversidades, en Aetthel construimos todas esas ideas que nacen de ti y las convertimos en un producto de valor para tu trabajo.
              </p>
            </div>
          </div>
        </section>

        <div className="relative z-20 rounded-t-[3.5rem] sm:rounded-t-[4.5rem] bg-canvas border-t border-line/80 overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
          {services.map((service, index) => (
            <ServiceSheet
              key={service.id}
              service={service}
              tone={index === 1 ? "dark" : "light"}
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
