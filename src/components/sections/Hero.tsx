import React from "react";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="w-full pt-32 md:pt-40 pb-20 border-b border-neutral-300/70 dark:border-neutral-800">
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
              Estructura Principal del Hero Header
            </h1>

            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 font-sans max-w-2xl leading-relaxed">
              Bloque descriptivo del Hero. Define la propuesta de valor y el propósito del estudio o proyecto dentro del contenedor principal.
            </p>

            {/* Action Buttons Wireframe */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#proyectos"
                className="px-6 py-3 border border-neutral-900 bg-neutral-900 text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 text-xs uppercase tracking-wider font-medium rounded-full hover:opacity-90 transition-opacity"
              >
                Ver Proyectos
              </a>
              <a
                href="#contacto"
                className="px-6 py-3 border border-neutral-400 dark:border-neutral-600 text-neutral-800 dark:text-neutral-200 text-xs uppercase tracking-wider font-medium rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                Contactar Estudio
              </a>
            </div>
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
