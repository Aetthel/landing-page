import React from "react";
import { afterDelivery } from "@/config/services";
import { Reveal } from "@/components/ui/reveal";

/* --------------------------------------------------------------------------
   Después de la entrega.

   La objeción real de quien nunca ha contratado desarrollo no es el precio: es
   quedarse atado a un proveedor que tiene tus llaves. Esta sección responde a
   eso antes de que haga falta preguntarlo, y va sobre grafito porque cierra el
   recorrido de servicios: a partir de aquí solo quedan dudas sueltas.
   -------------------------------------------------------------------------- */
export const ServicesAftercare: React.FC = () => {
  return (
    <section
      data-cursor-surface="dark"
      className="relative isolate w-full overflow-hidden bg-dark py-24 sm:py-32 lg:py-40"
    >
      {/* El mismo resplandor lima que abre la página, ahora al otro lado: cierra
          el bloque oscuro sin repetir la composición del encabezado. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-1/3 left-[-12%] -z-10 h-[34rem] w-[34rem] rounded-full bg-brand/10 blur-3xl"
      />

      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="text-[clamp(2.25rem,5vw,4rem)] font-normal tracking-tight leading-[1.05] text-white text-balance">
              Y cuando ya está
              <br />
              <span className="text-brand">entregado, ¿qué?</span>
            </h2>
            <p className="mt-6 max-w-md font-sans text-base sm:text-lg font-light leading-relaxed text-neutral-400">
              Un proyecto no termina el día que se publica. Estas cuatro cosas
              van en todos, sin que haya que pedirlas.
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7 lg:col-start-6">
            <dl>
              {afterDelivery.map((item) => (
                <div
                  key={item.title}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-x-8 gap-y-2 border-t border-white/12 py-7 first:border-t-0 first:pt-0 sm:first:pt-0"
                >
                  <dt className="sm:col-span-5 text-lg sm:text-xl font-display font-medium tracking-tight text-white">
                    {item.title}
                  </dt>
                  <dd className="sm:col-span-7 font-sans text-sm font-light leading-relaxed text-neutral-400">
                    {item.copy}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
