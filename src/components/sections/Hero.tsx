import React from "react";
import { MarkerHighlight } from "@/components/ui/marker-highlight";
// Fondo WebGL descartado de momento — se recupera descomentando esto y el
// <ProceduralGroundBackground /> de abajo.
// import { ProceduralGroundBackground } from "@/components/ui/procedural-ground-background";
import { RotatingText } from "@/components/ui/rotating-text";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative isolate w-full min-h-screen min-h-dvh flex flex-col justify-center py-32 sm:py-36 lg:py-40 overflow-hidden bg-canvas"
    >
      {/* Background WebGL Procedural Ground Animation — en pausa */}
      {/* <ProceduralGroundBackground className="absolute inset-0 -z-10" /> */}

      <div className="relative z-10 w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex flex-col justify-center items-center text-center">
        {/* Main Headline Statement */}
        {/* La frase no entra de golpe: se construye línea a línea en la estela
            de la cortina, y el subrayado se traza al final (ver `.marker`). */}
        <h1 className="text-[clamp(3.25rem,7.5vw,7.5rem)] font-normal tracking-tight leading-[1.05] text-ink text-center">
          <span className="block animate-rise-in rise-delay-1">
            El salto digital
          </span>
          {/* El trazo de rotulador vive fuera del texto: la palabra rotativa
              recorta su propio contenido y se llevaría por delante el subrayado */}
          <span className="relative inline-flex items-center justify-center align-middle my-1 animate-rise-in rise-delay-2">
            <MarkerHighlight />
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
