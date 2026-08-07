import React from "react";
import { ProceduralGroundBackground } from "@/components/ui/procedural-ground-background";
import { RotatingText } from "@/components/ui/rotating-text";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative isolate w-full min-h-screen min-h-dvh flex flex-col justify-center py-32 sm:py-36 lg:py-40 overflow-hidden bg-[#FAF9F6]"
    >
      {/* Background WebGL Procedural Ground Animation */}
      <ProceduralGroundBackground className="-z-10" />

      <div className="relative z-10 w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex flex-col justify-center items-center text-center">
        {/* Main Headline Statement */}
        <h1 className="animate-rise-in rise-delay-1 text-[clamp(3.25rem,7.5vw,7.5rem)] font-normal tracking-tight leading-[1.05] text-neutral-950 text-center">
          <span className="block">El salto digital</span>
          <RotatingText
            words={["Páginas web", "Aplicaciones", "Automatizaciones"]}
            className="text-brand"
          />
          <span className="block">al alcance de tu negocio.</span>
        </h1>
      </div>
    </section>
  );
};
