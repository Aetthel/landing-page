import React from "react";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="w-full min-h-dvh flex items-center pt-28 md:pt-32 pb-20 border-b border-neutral-300/70 dark:border-neutral-800">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Structural Tag */}
        <div className="mb-6 inline-block border border-neutral-300 dark:border-neutral-700 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-neutral-500 rounded">
          [ ESTRUCTURA: HERO ]
        </div>

        {/* Structural Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-neutral-900 dark:text-neutral-100 font-normal leading-tight">
              El salto digital
              <br />
              al alcance de cualquier negocio
            </h1>

            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 font-sans max-w-2xl leading-relaxed">
              Webs, aplicaciones a medida y automatizaciones que resuelven lo que de verdad importa, que tu negocio funcione mejor, venda más y pierda menos tiempo.
            </p>
          </div>

          {/* Visual Showcase Wireframe Box */}
          <div className="lg:col-span-4 border border-dashed border-neutral-400 dark:border-neutral-700 rounded-lg p-6 min-h-[260px] flex flex-col justify-between bg-neutral-50/50 dark:bg-neutral-900/30">
            <span className="font-mono text-xs text-neutral-400 uppercase">[ ÁREA VISUAL / MEDIA HERO ]</span>
            <div className="space-y-2 text-xs text-neutral-500 font-mono">
              <div>• Ancho: 100% Contenedor</div>
              <div>• Proporción: Responsive</div>
              <div>• Alineación: Derecha</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};