import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export const AboutUs: React.FC = () => {
  return (
    <section
      id="aetthel-lab"
      className="w-full pt-16 pb-16 sm:pt-28 sm:pb-24 lg:pt-44 lg:pb-28 bg-[#FAF9F6]"
    >
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center space-y-8 sm:space-y-10">
        {/* Section Label — isotipo a la altura de las mayúsculas del rótulo */}
        <Reveal className="flex items-center gap-2 font-sans text-base sm:text-lg uppercase tracking-wider text-neutral-600 font-medium">
          <Image
            src="/logos/aetthel-isotipo.png"
            alt=""
            aria-hidden
            width={356}
            height={284}
            /* En `em`: la marca escala sola con el rótulo en cada breakpoint. */
            className="h-[0.73em] w-auto"
          />
          <span>AETTHEL LAB</span>
        </Reveal>

        {/* Large Statement Paragraph — ancho completo, igual que el reel */}
        <Reveal className="w-full" delay={120}>
          <p className="w-full text-balance text-3xl sm:text-5xl lg:text-6xl font-sans font-normal tracking-tight leading-[1.15] text-neutral-950">
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
