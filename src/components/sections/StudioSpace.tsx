import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { DragTrack } from "@/components/ui/drag-track";
import { withResolvedImages } from "@/lib/assets";
import { workspaceShots } from "@/config/studio";

/* --------------------------------------------------------------------------
   El taller — lo primero que se ve al entrar en la hoja de lienzo.

   La página podría abrir con una declaración de intenciones. Abre con el sitio
   donde se trabaja, que dice lo mismo y no hay que creérselo: un espacio
   recogido es la prueba visible de la forma de trabajar que las secciones de
   abajo se dedican a explicar.

   La tira se sale por la derecha a propósito. Una fila centrada y completa se
   lee como una cuadrícula de fotos; una que se corta en el borde de la
   pantalla se lee como algo que sigue, y eso es lo que pide que la arrastres.
   -------------------------------------------------------------------------- */
export const StudioSpace: React.FC = () => {
  const shots = withResolvedImages(workspaceShots);

  return (
    <section className="w-full bg-canvas pt-24 sm:pt-32 lg:pt-40 pb-24 sm:pb-28 lg:pb-32">
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal className="max-w-3xl">
          <span className="block type-eyebrow text-ink-muted">El taller</span>
          <h2 className="mt-5 text-[clamp(2.25rem,5vw,4rem)] font-normal tracking-tight leading-[1.05] text-ink text-balance">
            Aquí es donde se hace.
          </h2>
          <p className="mt-6 max-w-xl font-sans text-base sm:text-lg font-light leading-relaxed text-ink-muted">
            Dos mesas enfrentadas, una pizarra donde cabe el alcance entero de
            un proyecto y la manía de recogerlo todo antes de irnos. Tener el
            sitio ordenado no es una cuestión estética: es la razón de que nada
            se pierda entre la primera conversación y la entrega.
          </p>
        </Reveal>
      </div>

      <Reveal className="bleed-right mt-14 lg:mt-20">
        <DragTrack
          items={shots}
          label="Fotos del taller de Aetthel"
          hint="Arrastra"
        />
      </Reveal>
    </section>
  );
};
