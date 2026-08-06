import React from "react";
import { ArrowDown } from "lucide-react";
import { ProceduralGroundBackground } from "@/components/ui/procedural-ground-background";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative isolate w-full min-h-dvh flex flex-col justify-between pt-36 pb-12 border-b border-neutral-300/80 overflow-hidden">
      {/* Background */}
      <ProceduralGroundBackground className="-z-10" />

      <div className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex flex-col justify-center">
        
        {/* Main Headline Statement */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.05] text-neutral-950 max-w-5xl text-balance">
          El <em className="font-serif italic font-normal text-brand">salto digital</em>, al alcance de cualquier negocio.
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-neutral-600 font-sans max-w-2xl leading-relaxed text-balance">
          Diseñamos webs de alto rendimiento, aplicaciones a medida y automatizaciones estratégicas que ayudan a las empresas a vender más y operar mejor.
        </p>

      </div>

      {/* Hero Bottom Meta Row */}
      <div className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-12 flex items-center justify-end text-xs font-mono text-neutral-500 uppercase tracking-wider">
        <div className="flex items-center gap-1 text-neutral-400">
          <span>(SCROLL)</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </div>
      </div>
    </section>
  );
};