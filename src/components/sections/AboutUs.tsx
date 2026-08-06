import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const AboutUs: React.FC = () => {
  return (
    <section id="aetthel-lab" className="w-full py-14 sm:py-20 border-b border-neutral-300/80 bg-[#FAF9F6]">
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-start space-y-8">
        
        {/* Section Label */}
        <div className="font-mono text-base sm:text-lg uppercase tracking-widest text-neutral-500 font-medium">
          Manifiesto Aetthel
        </div>

        {/* Large Statement Paragraph */}
        <p className="text-3xl sm:text-5xl lg:text-6xl font-sans font-normal tracking-tight leading-[1.15] text-neutral-950 max-w-5xl">
          Somos un estudio especializado en{" "}
          <em className="font-serif italic font-normal text-neutral-900">
            estrategia digital, desarrollo web y aplicaciones a medida.
          </em>{" "}
          Ayudamos a las empresas a alinear lo que son, lo que hacen y lo que sus clientes perciben de ellas.
        </p>

        {/* Magnetic Pill Button */}
        <Link
          href="#servicios"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-400/80 bg-white hover:bg-neutral-950 hover:text-white hover:border-neutral-950 text-xs font-mono uppercase tracking-wider text-neutral-900 transition-all shadow-2xs"
        >
          <span>Conocer Aetthel Lab</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>

      </div>
    </section>
  );
};

