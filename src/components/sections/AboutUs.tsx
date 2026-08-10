import React from "react";
import { Reveal } from "@/components/ui/reveal";

export const AboutUs: React.FC = () => {
  return (
    <section
      id="aetthel-lab"
      className="w-full pt-16 pb-16 sm:pt-28 sm:pb-24 lg:pt-44 lg:pb-28 bg-canvas"
    >
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center space-y-8 sm:space-y-10">
        {/* Large Statement Paragraph — ancho completo, igual que el reel */}
        <Reveal className="w-full" delay={120}>
          <p className="w-full text-balance text-3xl sm:text-5xl lg:text-6xl font-sans font-normal tracking-tight leading-[1.15] text-ink">
            Somos un estudio especializado en estrategia digital, desarrollo web
            y aplicaciones a medida. Trabajamos codo a codo contigo, con
            procesos claros de principio a fin para obtener tu
            resultado&nbsp;perfecto.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
