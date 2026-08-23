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
      className="relative isolate w-full overflow-clip bg-canvas py-20 sm:py-28 lg:py-36 border-t border-line/80"
    >
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
        <Reveal className="w-full max-w-4xl space-y-4">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-normal tracking-tight leading-[1.04] text-ink">
            Y cuando ya está entregado,{" "}
            <span className="underline underline-offset-8 decoration-brand decoration-[3px]">¿qué?</span>
          </h2>
          <p className="font-sans text-lg sm:text-xl font-light leading-relaxed text-ink-muted">
            Un proyecto no termina el día que se publica. Estas cuatro cosas van en todos, sin que haya que pedirlas.
          </p>
        </Reveal>

        <Reveal delay={120} className="w-full">
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {afterDelivery.map((item) => (
              <div
                key={item.title}
                className="border-t border-line/70 pt-6 space-y-3"
              >
                <dt className="text-xl sm:text-2xl font-display font-medium tracking-tight text-ink">
                  {item.title}
                </dt>
                <dd className="font-sans text-base font-light leading-relaxed text-ink-muted">
                  {item.copy}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
};
