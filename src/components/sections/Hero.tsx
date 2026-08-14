import React from "react";
import { MarkerHighlight } from "@/components/ui/marker-highlight";
import { RotatingText } from "@/components/ui/rotating-text";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative isolate w-full min-h-screen min-h-dvh flex flex-col justify-start pt-28 sm:pt-36 lg:pt-40 pb-20 overflow-hidden bg-transparent text-ink"
    >
      <div className="relative z-10 w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center mt-4 sm:mt-8">
        {/* Main Headline Statement */}
        <h1 className="text-[clamp(3.25rem,7.5vw,7.5rem)] font-normal tracking-tight leading-[1.05] text-ink text-center">
          <span className="block animate-rise-in rise-delay-1">
            El salto digital
          </span>
          <span className="relative inline-flex items-center justify-center align-middle my-1 animate-rise-in rise-delay-2">
            <MarkerHighlight />
            {/* Tinta sobre el subrayado lima: en negro el trazo de marcador
                hace de fondo y la palabra gana contraste. */}
            <RotatingText
              words={["Páginas web", "Aplicaciones", "Automatizaciones"]}
              className="text-ink font-medium"
            />
          </span>
          <span className="block animate-rise-in rise-delay-3">
            al alcance de tu negocio.
          </span>
        </h1>
      </div>
    </section>
  );
};

