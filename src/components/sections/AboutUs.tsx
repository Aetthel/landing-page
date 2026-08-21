import React from "react";
import { MagicText } from "@/components/ui/magic-text";

export const AboutUs: React.FC = () => {
  return (
    <section
      id="aetthel-lab"
      className="w-full py-20 sm:py-28 lg:py-36 bg-transparent"
    >
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center space-y-8 sm:space-y-10">
        {/* Large Statement Paragraph — ancho completo, igual que el reel.
            Ya no entra con <Reveal>: ahora la frase es su propia animación, se
            pinta en lima palabra a palabra al bajar. */}
        <MagicText
          text={
            "Somos un estudio especializado en estrategia digital, desarrollo web y aplicaciones a medida. Trabajamos codo a codo contigo, con procesos claros de principio a fin para obtener tu resultado perfecto."
          }
          className="w-full justify-center text-3xl sm:text-5xl lg:text-6xl font-display font-normal tracking-tight leading-[1.12]"
        />
      </div>
    </section>
  );
};
