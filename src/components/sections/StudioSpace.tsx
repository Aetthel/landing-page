import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { DragTrack } from "@/components/ui/drag-track";
import { SectionHeader } from "@/components/ui/section-header";
import { withResolvedImages } from "@/lib/assets";
import { workspaceShots } from "@/config/studio";

/* --------------------------------------------------------------------------
   El taller — lo primero que se ve al entrar en la hoja de lienzo.
   -------------------------------------------------------------------------- */
export const StudioSpace: React.FC = () => {
  const shots = withResolvedImages(workspaceShots);

  return (
    <section className="w-full bg-canvas pt-24 sm:pt-32 lg:pt-40 pb-24 sm:pb-28 lg:pb-32">
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          eyebrow="EL TALLER"
          title="Aquí es donde se hace."
          description="Dos mesas enfrentadas, una pizarra donde cabe el alcance entero de un proyecto y la manía de recogerlo todo antes de irnos. Tener el sitio ordenado no es una cuestión estética: es la razón de que nada se pierda entre la primera conversación y la entrega."
        />
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
