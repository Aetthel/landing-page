import React from "react";
import { processSteps } from "@/config/services";
import { Reveal } from "@/components/ui/reveal";

/* --------------------------------------------------------------------------
   El proyecto entero, paso a paso.

   La página de contacto cuenta los tres primeros movimientos, hasta la primera
   reunión. Aquí va el recorrido completo, y con una columna que casi nadie
   publica: lo que se espera del cliente en cada paso. Contratar desarrollo da
   miedo por el tiempo que uno va a tener que poner y nadie le sabe decir
   cuánto; esa columna responde justo eso.

   La numeración se imprime porque el orden es información: no se puede
   construir antes de validar el diseño, ni validar antes de cerrar el alcance.
   -------------------------------------------------------------------------- */
export const ServicesProcess: React.FC = () => {
  return (
    <section className="w-full bg-canvas py-24 sm:py-32 lg:py-40">
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal className="max-w-3xl">
          <h2 className="text-[clamp(2.25rem,5vw,4rem)] font-normal tracking-tight leading-[1.05] text-ink text-balance">
            Cómo va un proyecto, de la primera línea a la entrega.
          </h2>
          <p className="mt-6 max-w-xl font-sans text-base sm:text-lg font-light leading-relaxed text-ink-muted">
            Seis pasos, siempre los mismos. Los plazos son los reales de un
            proyecto medio: si el tuyo se sale, lo sabrás en la propuesta y no
            sobre la marcha.
          </p>
        </Reveal>

        <Reveal className="mt-14 lg:mt-20">
          <div className="hidden lg:grid grid-cols-12 gap-x-6 pb-4 border-b border-ink/15 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
            <span className="col-span-1">Paso</span>
            <span className="col-span-3">Momento</span>
            <span className="col-span-4">Lo que hacemos nosotros</span>
            <span className="col-span-4">Lo que necesitamos de ti</span>
          </div>

          <ol>
            {processSteps.map((item) => (
              <li
                key={item.step}
                className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-4 border-b border-line py-8"
              >
                <span className="lg:col-span-1 font-sans text-sm font-medium tabular-nums text-ink/30">
                  {item.step}
                </span>

                <div className="lg:col-span-3 space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-ink">
                    {item.title}
                  </h3>
                  {/* El plazo lleva el filete lima: es el dato que la gente
                      viene a buscar en esta tabla. */}
                  <span className="inline-block border-b-2 border-brand pb-0.5 font-sans text-xs font-medium tracking-wide text-ink">
                    {item.when}
                  </span>
                </div>

                <p className="lg:col-span-4 max-w-lg font-sans text-sm font-light leading-relaxed text-ink-muted">
                  {item.us}
                </p>

                <div className="lg:col-span-4 max-w-lg space-y-1">
                  <span className="lg:hidden block font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                    Lo que necesitamos de ti
                  </span>
                  <p className="font-sans text-sm font-light leading-relaxed text-ink">
                    {item.you}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
};
