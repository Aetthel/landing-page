import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { StudioAbout } from "@/components/sections/StudioAbout";
import { StudioTeamIntro } from "@/components/sections/StudioTeamIntro";
import { StudioProcess } from "@/components/sections/StudioProcess";
import { StudioCare } from "@/components/sections/StudioCare";
import { HeroGradient } from "@/components/ui/aurora-background";

/* ==========================================================================
   /estudio — Aetthel Lab

   TESIS. La página responde a lo que se pregunta quien está a punto de
   encargarnos algo y no nos conoce de nada, y lo responde en tres bloques y ni
   uno más. Todo lo que no cabía en esos tres —el reportaje del taller, las
   láminas de respiro— se ha ido: eran fotos que no existen sosteniendo
   secciones que nadie había pedido.

   LOS CUATRO.
     1. El estudio  — qué es esto.
     2. El equipo   — quiénes lo hacemos.
     3. El proceso  — cómo va un proyecto de principio a fin.
     4. El trato    — cómo es hablar con nosotros mientras dura.

   ORDEN. Va de lo abstracto a lo personal a propósito. Las dos primeras son
   un díptico —el sitio y la gente, con el mismo reparto de columnas—, el
   proceso es la ficha técnica del medio y el trato cierra.

   NO HAY LLAMADA AL FINAL, y es decisión del estudio. La página tenía un
   cierre —«Al final, esto va de entenderse»— con el botón a /contacto y se
   retiró. La única puerta a la reunión que queda en esta página es la del
   Footer: si algún día se echa de menos, es aquí donde iba.

   DOS COSAS QUE SE LLAMAN «EQUIPO». `StudioTeamIntro` es la sección de aquí:
   presenta a los dos y reserva el hueco de la foto. `StudioTeam` es el reparto
   con los nombres a tamaño de cartel y los retratos, y va en la portada; sigue
   en el árbol a propósito, con su CSS `.roster-*` en `globals.css` y sus datos
   en `config/studio.ts`, listo para colgarlo de `/`. No es código muerto que
   barrer.

   MUNDO. El de siempre: cabecera a pantalla completa sobre grafito y, encima,
   una hoja de lienzo con las esquinas redondeadas. Lima solo en filetes y
   marcas, nunca en texto sobre claro. Jakarta para titulares, Inter para todo
   lo demás.
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
                    Sinónimo de
                  </span>
                  <span className="block text-brand animate-rise-in rise-delay-2">
                    construcción.
                  </span>
                </h1>
              </div>

              <p className="lg:col-span-5 max-w-xl type-lead hero-lead text-neutral-400 animate-rise-in rise-delay-3">
                Nuestro estudio, nuestro espacio de trabajo donde hacemos
                realidad tus ideas y formamos nuestros valores y métodos para
                conseguir el mejor resultado para ti.
              </p>
            </div>
          </div>
        </section>

        {/* La hoja de lienzo monta sobre el grafito, igual que en /servicios */}
        <div className="relative z-20 rounded-t-[3.5rem] sm:rounded-t-[4.5rem] bg-canvas border-t border-line/80 overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
          {/* 1. Qué es el estudio. */}
          <StudioAbout />

          {/* 2. Quiénes lo hacemos. Repite el reparto de la anterior: las dos
              forman un díptico —el sitio y la gente—. */}
          <StudioTeamIntro />

          {/* 3. Cómo va un proyecto de principio a fin. */}
          <StudioProcess />

          {/* 4. Cómo es hablar con nosotros mientras dura. Y aquí acaba la
              hoja: el trato es el último movimiento, sin cierre detrás. */}
          <StudioCare />
        </div>
      </main>

      <Footer />
    </div>
  );
}
