import React from "react";
import { ProceduralGroundBackground } from "@/components/ui/procedural-ground-background";
import { RotatingText } from "@/components/ui/rotating-text";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative isolate w-full min-h-dvh flex flex-col justify-center pt-36 pb-16 border-b border-neutral-300/80 overflow-hidden">
      {/* Background */}
      <ProceduralGroundBackground className="-z-10" />

      <div className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex flex-col justify-center items-center text-center">

        {/* Main Headline Statement */}
        <h1 className="animate-rise-in rise-delay-1 text-[clamp(2.625rem,6vw,6rem)] font-normal tracking-tight leading-[1.05] text-neutral-950">
          <span className="block">El salto digital</span>
          <RotatingText
            words={["Páginas web", "Aplicaciones", "Automatizaciones"]}
            className="font-serif italic text-brand"
          />
          <span className="block">al alcance de tu negocio.</span>
        </h1>

        <p className="animate-rise-in rise-delay-2 mt-8 mx-auto text-lg sm:text-xl text-neutral-700 font-sans max-w-xl leading-relaxed text-balance">
          Diseño y desarrollo a medida para empresas que quieren vender más y operar mejor.
        </p>

        {/* Indicador de scroll — lleva a la siguiente sección */}
        <a
          href="#video"
          className="animate-rise-in rise-delay-3 group mt-14 inline-flex flex-col items-center gap-3 text-neutral-500 transition-colors hover:text-brand"
        >
          <span className="animate-scroll-hop flex h-9 w-5.5 justify-center rounded-full border border-current pt-1.5 opacity-70 transition-opacity group-hover:opacity-100">
            <span className="animate-scroll-wheel h-1.5 w-1 rounded-full bg-current" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em]">
            Descubrir
          </span>
        </a>

      </div>
    </section>
  );
};
