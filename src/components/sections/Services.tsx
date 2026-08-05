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
              <h3 className="font-mono text-sm uppercase text-neutral-800 dark:text-neutral-200 mb-3">01 — Landing Pages</h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3 leading-snug">
                Convertir en segundos lo que eres, en por qué elegirte.
              </p>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Una página no vende por tenerla, sino por cómo comunica. Diseñamos landing pages claras y rápidas, pensadas para que quien llegue entienda de inmediato qué ofreces y por qué confiar en ti.
              </p>
            </div>
            <div className="border border-neutral-300 dark:border-neutral-800 p-6 rounded-lg">
              <h3 className="font-mono text-sm uppercase text-neutral-800 dark:text-neutral-200 mb-3">02 — Apps a medida</h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3 leading-snug">
                Construir la herramienta que tu negocio necesita, no la que ya existe.
              </p>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Cada negocio trabaja distinto, y las soluciones genéricas rara vez encajan del todo. Desarrollamos aplicaciones web a medida paneles internos, plataformas para clientes o herramientas específicas pensadas desde cómo trabajas realmente.
              </p>
            </div>
            <div className="border border-neutral-300 dark:border-neutral-800 p-6 rounded-lg">
              <h3 className="font-mono text-sm uppercase text-neutral-800 dark:text-neutral-200 mb-3">03 — Automatizaciones</h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3 leading-snug">
                Que el trabajo repetitivo deje de ser trabajo.
              </p>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Conectamos tus procesos y herramientas para que la información fluya sola, reduciendo errores y liberando tiempo para lo que sí importa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
