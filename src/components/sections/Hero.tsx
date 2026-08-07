import React from "react";
import Link from "next/link";
import { ProceduralGroundBackground } from "@/components/ui/procedural-ground-background";
import { RotatingText } from "@/components/ui/rotating-text";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative isolate w-full min-h-screen min-h-dvh flex flex-col justify-between pt-32 pb-8 sm:pt-36 sm:pb-12 lg:pt-40 lg:pb-14 overflow-hidden bg-[#FAF9F6]"
    >
      {/* Background WebGL Procedural Ground Animation */}
      <ProceduralGroundBackground className="-z-10" />

      <div className="relative z-10 w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex flex-col justify-center items-center text-center">
        {/* Main Headline Statement */}
        <h1 className="animate-rise-in rise-delay-1 text-[clamp(3.25rem,7.5vw,7.5rem)] font-normal tracking-tight leading-[1.05] text-neutral-950 text-center">
          <span className="block">El salto digital</span>
          <RotatingText
            words={["Páginas web", "Aplicaciones", "Automatizaciones"]}
            className="font-serif italic text-brand"
          />
          <span className="block">al alcance de tu negocio.</span>
        </h1>
      </div>

      {/* Hero Bottom Meta Row & Divider Line */}
      <div className="relative z-10 w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 space-y-4 pt-6">
        <div className="animate-rise-in rise-delay-3 pt-6 flex items-center justify-between border-t border-neutral-200/80 text-xs font-mono text-neutral-500 uppercase tracking-wider">
          <Link
            href="#aetthel-lab"
            className="hover:text-neutral-900 transition-colors flex items-center gap-2"
          >
            <span>Descubre cómo transformamos negocios</span>
          </Link>
        </div>

        {/* Container Aligned Section Divider Line */}
        <div className="border-b border-neutral-300/80" />
      </div>
    </section>
  );
};
