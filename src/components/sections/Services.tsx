import React from "react";

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="w-full py-20 border-b border-neutral-300/70 dark:border-neutral-800">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* SERVICIOS */}
        <div>
          <div className="mb-6 inline-block border border-neutral-300 dark:border-neutral-700 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-neutral-500 rounded">
            [ ESTRUCTURA: SERVICIOS ]
          </div>
          <h2 className="text-3xl font-serif text-neutral-900 dark:text-neutral-100 mb-6">
            Servicios Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-neutral-300 dark:border-neutral-800 p-6 rounded-lg">
              <h3 className="font-mono text-sm uppercase text-neutral-800 dark:text-neutral-200 mb-2">01 / Consultoría Espacial</h3>
              <p className="text-xs text-neutral-500">Estudio y viabilidad de proyectos arquitectónicos.</p>
            </div>
            <div className="border border-neutral-300 dark:border-neutral-800 p-6 rounded-lg">
              <h3 className="font-mono text-sm uppercase text-neutral-800 dark:text-neutral-200 mb-2">02 / Dirección Ejecutiva</h3>
              <p className="text-xs text-neutral-500">Supervisión integral de obra y contratistas.</p>
            </div>
            <div className="border border-neutral-300 dark:border-neutral-800 p-6 rounded-lg">
              <h3 className="font-mono text-sm uppercase text-neutral-800 dark:text-neutral-200 mb-2">03 / Dirección Creativa</h3>
              <p className="text-xs text-neutral-500">Concepto, dirección de arte e identidad.</p>
            </div>
          </div>
        </div>

        {/* BRAND SPACES */}
        <div id="brand-spaces" className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div className="mb-6 inline-block border border-neutral-300 dark:border-neutral-700 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-neutral-500 rounded">
            [ ESTRUCTURA: BRAND SPACES ]
          </div>
          <h2 className="text-3xl font-serif text-neutral-900 dark:text-neutral-100 mb-4">
            Brand Spaces
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
            Área dedicada al diseño de espacios de experiencia de marca, pop-ups, showrooms y entornos efímeros.
          </p>
        </div>

        {/* BE NEXT & SHOP */}
        <div id="be-next" className="pt-8 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-4 inline-block border border-neutral-300 dark:border-neutral-700 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-neutral-500 rounded">
              [ ESTRUCTURA: BE NEXT ]
            </div>
            <h3 className="text-2xl font-serif text-neutral-900 dark:text-neutral-100 mb-2">Be Next</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Iniciativas de innovación, investigación de materiales y laboratorios creativos del futuro.
            </p>
          </div>

          <div id="shop">
            <div className="mb-4 inline-block border border-neutral-300 dark:border-neutral-700 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-neutral-500 rounded">
              [ ESTRUCTURA: SHOP ]
            </div>
            <h3 className="text-2xl font-serif text-neutral-900 dark:text-neutral-100 mb-2">Shop</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Catálogo de piezas de edición limitada, publicaciones y objetos diseñados por el estudio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
