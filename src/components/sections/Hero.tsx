import React from "react";
import { MarkerHighlight } from "@/components/ui/marker-highlight";
import { RotatingText } from "@/components/ui/rotating-text";
import { StudioTilePattern } from "@/components/ui/studio-tile-pattern";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative isolate w-full pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden bg-canvas text-ink border-b border-line"
    >
      <StudioTilePattern />

      <div className="relative z-10 w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center mt-4 sm:mt-8">
        {/* Main Headline Statement */}
        <h1 className="type-display text-ink text-center">
          <span className="block animate-rise-in rise-delay-1">
            El salto digital
          </span>
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
