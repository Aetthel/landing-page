import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const AboutUs: React.FC = () => {
  return (
    <section id="aetthel-lab" className="w-full py-24 md:py-32 border-b border-neutral-300/70 dark:border-neutral-800">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center">
        <p className="max-w-5xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-normal tracking-tight leading-tight text-neutral-900 dark:text-neutral-100">
          Somos un estudio especializado en soluciones tecnológicas. Ayudamos a
          que la presencia digital de un negocio refleje lo que realmente es:{" "}
          <mark className="bg-orange-500/15 text-neutral-900 dark:text-neutral-100 rounded px-1">
            cercano, capaz y listo para crecer
          </mark>{" "}
          sin las complicaciones ni la distancia de una agencia tradicional.
        </p>

        <Link
          href="/aetthel-lab"
          className="mt-12 inline-flex items-center gap-2 px-6 py-3 rounded-md border border-neutral-400/60 dark:border-neutral-600 text-xs font-medium uppercase tracking-wider text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-all"
        >
          <span>Conocer Aetthel Lab</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
        </Link>
      </div>
    </section>
  );
};
