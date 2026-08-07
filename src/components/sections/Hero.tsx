import React from "react";
import { ProceduralGroundBackground } from "@/components/ui/procedural-ground-background";
import { RotatingText } from "@/components/ui/rotating-text";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="w-full min-h-[70vh] flex flex-col justify-between pt-24 pb-4 sm:pt-28 sm:pb-6"
    >
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex flex-col justify-center">
        {/* Large Monogram / Wordmark Tag */}
        <div className="mb-4 inline-block font-sans text-base sm:text-lg uppercase tracking-wider text-neutral-600 font-medium">
          AETTHEL STUDIO — BRAND & TECH ARCHITECTURE
        </div>

        {/* Main Headline Statement */}
        <h1 className="animate-rise-in rise-delay-1 text-[clamp(2.625rem,6vw,6rem)] font-normal tracking-tight leading-[1.05] text-neutral-950">
          <span className="block">El salto digital</span>
          <RotatingText
            words={["Páginas web", "Aplicaciones", "Automatizaciones"]}
            className="font-serif italic text-brand"
          />
          <span className="block">al alcance de tu negocio.</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-neutral-600 font-sans max-w-2xl leading-relaxed">
          Diseñamos webs de alto rendimiento, aplicaciones a medida y
          automatizaciones estratégicas que ayudan a las empresas a vender más y
          operar mejor.
        </p>
      </div>

      {/* Hero Bottom Meta Row & Divider Line */}
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 space-y-4 pt-6">
        <div className="pt-6 flex items-center justify-between border-t border-neutral-200 text-xs font-mono text-neutral-500 uppercase tracking-wider">
          <Link
            href="#aetthel-lab"
            className="hover:text-neutral-900 transition-colors flex items-center gap-2"
          >
            <span>Descubre cómo transformamos negocios</span>
          </Link>

          <div className="flex items-center gap-1 text-neutral-400">
            <span>(SCROLL)</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Container Aligned Section Divider Line */}
        <div className="border-b border-neutral-300/80" />
      </div>
    </section>
  );
};
