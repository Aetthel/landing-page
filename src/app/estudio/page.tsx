import React from "react";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/reveal";
import { InteractiveHoverLink } from "@/components/ui/interactive-hover-button";
import { StudioTeam } from "@/components/sections/StudioTeam";
import { StudioValues } from "@/components/sections/StudioValues";
import { ServicesProcess } from "@/components/sections/ServicesProcess";

/* ==========================================================================
   /estudio — Aetthel Lab

   La página no vende servicios: los servicios ya tienen la suya. Esta responde
   a la pregunta que se hace quien está a punto de encargarnos algo y no nos
   conoce de nada —¿quiénes son y cómo va a ser trabajar con ellos?—, y la
   responde en ese orden:

     el equipo (con nombre y cara) → cómo va un proyecto, paso a paso → en qué
     no cedemos → hablemos.

   Misma gramática que /servicios y /contacto: cabecera a pantalla completa
   sobre grafito y, a partir de ahí, una hoja de lienzo con esquinas redondeadas
   que monta encima. Dentro de la hoja, el bloque de valores vuelve al grafito
   para partir la lectura antes del cierre.

   La tabla del proceso es <ServicesProcess>, que llevaba tiempo escrita
   esperando esta página: cuenta cómo trabaja el estudio, no qué se contrata, y
   por eso salió de /servicios.
   ========================================================================== */

import { HeroGradient } from "@/components/ui/aurora-background";

export const metadata: Metadata = {
  title: "Aetthel Lab | Aetthel",
  description:
    "Quiénes somos y cómo trabajamos: un estudio de dos ingenieros, trato directo sin intermediarios, todo a tu nombre y presupuesto cerrado antes de empezar.",
};

export default function EstudioPage() {
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
                  Aetthel Lab
                </span>

                <h1 className="mt-6 type-display text-white">
                  <span className="block animate-rise-in rise-delay-1">
                    El salto digital,
                  </span>
                  <span className="block text-brand animate-rise-in rise-delay-2">
                    al alcance de tu negocio.
                  </span>
                </h1>
              </div>

              <p className="lg:col-span-5 max-w-xl type-lead hero-lead text-neutral-400 animate-rise-in rise-delay-3">
                Creemos que la tecnología moderna no debe ser un lujo reservado a grandes corporaciones. Existimos para dotar a pequeños y medianos negocios de herramientas digitales sólidas, webs de alto impacto y automatizaciones que ahorran horas de trabajo.
              </p>
            </div>
          </div>
        </section>

        {/* La hoja de lienzo monta sobre el grafito, igual que en /servicios */}
        <div className="relative z-20 rounded-t-[3.5rem] sm:rounded-t-[4.5rem] bg-canvas border-t border-line/80 overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
          <StudioTeam />

          {/* Cómo trabajamos, paso a paso y con la columna que casi nadie
              publica: qué se espera del cliente en cada fase. */}
          <ServicesProcess />

          <StudioValues />

          {/* CIERRE */}
          <section className="w-full bg-canvas py-24 sm:py-32 lg:py-40">
            <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
              <Reveal className="max-w-3xl">
                <span className="block type-eyebrow text-ink-muted">
                  Empieza aquí
                </span>
                <h2 className="mt-5 text-[clamp(2.25rem,5vw,4rem)] font-normal tracking-tight leading-[1.05] text-ink text-balance">
                  Cuéntanos qué necesita tu negocio.
                </h2>
                <p className="mt-6 max-w-xl font-sans text-base sm:text-lg font-light leading-relaxed text-ink-muted">
                  La primera reunión no compromete a nada: escuchamos el caso, te
                  decimos si lo vemos y te proponemos una solución con
                  presupuesto cerrado. Si creemos que no somos el equipo
                  adecuado, también te lo decimos ahí.
                </p>
              </Reveal>

              <Reveal delay={120} className="mt-10">
                <InteractiveHoverLink
                  href="/contacto"
                  text="Iniciar proyecto"
                  className="px-7 py-3 tracking-widest"
                />
              </Reveal>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
