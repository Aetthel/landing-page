import React from "react";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/reveal";
import { InteractiveHoverLink } from "@/components/ui/interactive-hover-button";
import { ShotFigure } from "@/components/ui/shot-figure";
import { StudioSpace } from "@/components/sections/StudioSpace";
import { StudioApproach } from "@/components/sections/StudioApproach";
import { StudioTeam } from "@/components/sections/StudioTeam";
import { StudioValues } from "@/components/sections/StudioValues";
import { ServicesProcess } from "@/components/sections/ServicesProcess";
import { HeroGradient } from "@/components/ui/aurora-background";
import { workspaceWide } from "@/config/studio";

/* ==========================================================================
   /estudio — Aetthel Lab

   TESIS. La página no vende servicios —los servicios ya tienen la suya—:
   responde a lo que se pregunta quien está a punto de encargarnos algo y no
   nos conoce de nada, y lo responde enseñando antes que afirmando. Rechaza el
   «sobre nosotros» de misión-visión-valores y la parrilla de tarjetas con
   foto y cargo.

   MUNDO. El de siempre: cabecera a pantalla completa sobre grafito y, encima,
   una hoja de lienzo con las esquinas redondeadas. Lima solo en filetes y
   marcas, nunca en texto sobre claro. Jakarta para titulares, Inter para todo
   lo demás.

   RECORRIDO. El sitio donde trabajamos → cómo es el trato → quiénes somos →
   una lámina de respiro → el proyecto paso a paso → en qué no cedemos →
   hablemos. Se abre por el taller a propósito: un espacio recogido es la
   prueba visible de lo que las secciones de abajo explican con palabras.

   MOMENTO. El reparto. Dos nombres a tamaño de cartel, apagados, que al pasar
   por encima se corren a la derecha para dejar salir la ficha y el retrato.
   Es la única pieza de la web que se comporta así, y es la que la página
   entera sostiene.

   IMÁGENES. Los retratos y las fotos del taller todavía no existen: cada
   hueco lleva una lámina de reserva compuesta que se retira sola en cuanto
   los archivos aparezcan en `public/team` y `public/workspace`. Los pies de
   foto de `config/studio.ts` son de relleno y hay que reescribirlos con las
   fotos reales.
   ========================================================================== */

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
                    Un estudio de dos,
                  </span>
                  <span className="block text-brand animate-rise-in rise-delay-2">
                    con la puerta abierta.
                  </span>
                </h1>
              </div>

              <p className="lg:col-span-5 max-w-xl type-lead hero-lead text-neutral-400 animate-rise-in rise-delay-3">
                Ni comerciales, ni gestores de cuenta, ni un equipo distinto que
                ejecute después lo que tú contaste al principio. Somos Martí y
                Alex, y esta página está para que sepas con quién vas a
                trabajar antes de escribirnos.
              </p>
            </div>
          </div>
        </section>

        {/* La hoja de lienzo monta sobre el grafito, igual que en /servicios */}
        <div className="relative z-20 rounded-t-[3.5rem] sm:rounded-t-[4.5rem] bg-canvas border-t border-line/80 overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
          {/* Primero el sitio: se enseña antes de explicarse. */}
          <StudioSpace />

          {/* Cómo es el trato, con las tres promesas que lo sostienen. */}
          <StudioApproach />

          {/* El reparto. El momento de la página. */}
          <StudioTeam />

          {/* Respiro. Una lámina ancha entre el bloque más ruidoso de la
              página y el más denso: sin ella, los nombres a tamaño de cartel
              desembocan directamente en una tabla de cinco columnas. */}
          <section className="w-full bg-canvas pb-24 sm:pb-32 lg:pb-40">
            <Reveal className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
              <ShotFigure shot={workspaceWide} />
            </Reveal>
          </section>

          {/* Cómo va un proyecto, paso a paso y con la columna que casi nadie
              publica: qué se espera del cliente en cada fase. */}
          <ServicesProcess />

          <StudioValues />

          {/* CIERRE. Primero la frase que resume la página entera, y solo
              después la llamada: pedir la reunión antes de haber cerrado la
              idea es lo que convierte un cierre en un banner. */}
          <section className="w-full bg-canvas py-24 sm:py-32 lg:py-40">
            <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
              <Reveal>
                <h2 className="max-w-4xl text-[clamp(2rem,4.6vw,3.75rem)] font-light tracking-tight leading-[1.08] text-ink text-balance">
                  Al final, esto va de entenderse.
                </h2>
                <p className="mt-7 max-w-2xl font-sans text-base sm:text-lg font-light leading-relaxed text-ink-muted">
                  De que entiendas qué se está construyendo y por qué, y de que
                  nosotros entendamos cómo funciona tu negocio de verdad. Todo
                  lo demás —el código, el servidor, el diseño— viene después de
                  eso, y sale bien o mal según lo bien que salga eso.
                </p>
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-ink/15 pt-12 lg:pt-16 items-start">
                  <h3 className="lg:col-span-6 text-[clamp(1.5rem,2.8vw,2.4rem)] font-normal tracking-tight leading-[1.12] text-ink text-balance">
                    Cuéntanos qué necesita tu negocio.
                  </h3>

                  <div className="lg:col-span-5 lg:col-start-8">
                    <p className="max-w-xl font-sans text-base font-light leading-relaxed text-ink-muted">
                      La primera reunión no compromete a nada: escuchamos el
                      caso, te decimos si lo vemos y te proponemos una solución
                      con presupuesto cerrado. Si creemos que no somos el equipo
                      adecuado, también te lo decimos ahí.
                    </p>

                    <InteractiveHoverLink
                      href="/contacto"
                      text="Iniciar proyecto"
                      className="mt-8 px-7 py-3 tracking-widest"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
