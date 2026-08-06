import React from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="w-full min-h-[75vh] flex flex-col justify-between pt-28 pb-8 border-b border-neutral-300/80">
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex flex-col justify-center">
        
        {/* Large Monogram / Wordmark Tag */}
        <div className="mb-4 inline-block font-mono text-xs sm:text-sm uppercase tracking-[0.18em] text-neutral-500 font-medium">
          AETTHEL STUDIO — BRAND & TECH ARCHITECTURE
        </div>

        {/* Main Headline Statement */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.05] text-neutral-950 max-w-5xl">
          We build <em className="font-serif italic font-normal">bold digital products</em> for ambitious brands
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-neutral-600 font-sans max-w-2xl leading-relaxed">
          Diseñamos webs de alto rendimiento, aplicaciones a medida y automatizaciones estratégicas que ayudan a las empresas a vender más y operar mejor.
        </p>

      </div>

      {/* Hero Bottom Meta Row */}
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 pt-8 flex items-center justify-between border-t border-neutral-200 text-xs font-mono text-neutral-500 uppercase tracking-wider">
        <Link href="#aetthel-lab" className="hover:text-neutral-900 transition-colors flex items-center gap-2">
          <span>Descubre cómo transformamos negocios</span>
        </Link>

        <div className="flex items-center gap-1 text-neutral-400">
          <span>(SCROLL)</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </div>
      </div>
    </section>
  );
};