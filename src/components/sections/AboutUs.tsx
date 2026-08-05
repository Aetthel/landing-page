import React from "react";

export const AboutUs: React.FC = () => {
  return (
    <section id="estudio" className="w-full py-20 border-b border-neutral-300/70 dark:border-neutral-800">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Structural Tag */}
        <div className="mb-6 inline-block border border-neutral-300 dark:border-neutral-700 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-neutral-500 rounded">
          [ ESTRUCTURA: ABOUT US / ESTUDIO ]
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Section Heading Column */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-3xl font-serif tracking-tight text-neutral-900 dark:text-neutral-100 font-normal">
              Sobre el Estudio
            </h2>
            <p className="text-sm font-mono text-neutral-500 uppercase">
              // Filosofía & Enfoque de Trabajo
            </p>
          </div>

          {/* Content & Pillars Columns */}
          <div className="lg:col-span-8 space-y-8">
            <p className="text-base text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed">
              Estructura modular diseñada para presentar la visión, historia y capacidades del estudio. Permite organizar proyectos arquitectónicos, espacios comerciales e identidad de marca.
            </p>

            {/* 3 Column Structure Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="border border-neutral-300 dark:border-neutral-800 p-5 rounded-lg space-y-2">
                <span className="font-mono text-xs text-neutral-400">01. ARQUITECTURA</span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                  Diseño Espacial
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Estructuración de volúmenes, luz natural y optimización de espacios funcionales.
                </p>
              </div>

              <div className="border border-neutral-300 dark:border-neutral-800 p-5 rounded-lg space-y-2">
                <span className="font-mono text-xs text-neutral-400">02. BRAND SPACES</span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                  Experiencia de Marca
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Conexión física y visual entre la identidad de marca y sus entornos interactivos.
                </p>
              </div>

              <div className="border border-neutral-300 dark:border-neutral-800 p-5 rounded-lg space-y-2">
                <span className="font-mono text-xs text-neutral-400">03. INNOVACIÓN</span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                  Sostenibilidad
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Integración de soluciones constructivas eficientes y materiales de bajo impacto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
