import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { values } from "@/config/studio";

/* --------------------------------------------------------------------------
   Los valores, sobre grafito.

   Va en bloque oscuro por la misma razón que la postventa de /servicios: es la
   pausa que separa «cómo trabajamos» de «hablemos», y en una página larga de
   lienzo claro el cambio de fondo es lo que evita que todo se lea como una
   única parrafada.

   Cada valor está enunciado desde lo que gana el cliente —«todo a tu nombre»,
   no «somos transparentes»—: un principio que no se puede comprobar no es un
   valor, es un eslogan.
   -------------------------------------------------------------------------- */
export const StudioValues: React.FC = () => {
  return (
    <section
      data-cursor-surface="dark"
      className="relative isolate w-full overflow-hidden bg-dark py-24 sm:py-32 lg:py-40"
    >
      {/* Resplandor lima de apoyo, el mismo recurso que cierra /servicios */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/4 right-[-12%] -z-10 h-[34rem] w-[34rem] rounded-full bg-brand/10 blur-3xl"
      />

      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal className="max-w-3xl">
          <span className="block type-eyebrow text-brand">En qué no cedemos</span>
          <h2 className="mt-5 text-[clamp(2.25rem,5vw,4rem)] font-normal tracking-tight leading-[1.05] text-white text-balance">
            Cuatro cosas que puedes
            <br />
            <span className="text-brand">comprobar, no creer.</span>
          </h2>
          <p className="mt-6 max-w-xl font-sans text-base sm:text-lg font-light leading-relaxed text-neutral-400">
            Contratar desarrollo da miedo por lo que no se ve: quedarte atado a
            un proveedor que tiene tus llaves, o descubrir a mitad de camino un
            coste del que nadie te avisó. Estas cuatro están para responder a eso
            antes de que tengas que preguntarlo.
          </p>
        </Reveal>

        <div className="mt-14 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 100} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/12 bg-white/[0.02] p-8 transition duration-500 ease-out hover:-translate-y-1.5 hover:border-brand/50 hover:bg-white/[0.05] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                {/* Filete lima por el canto superior, igual que en las fichas
                    del equipo: la página entera responde al puntero igual. */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
                />

                <span className="block font-sans text-xs font-medium tabular-nums tracking-[0.18em] text-white/25 transition-colors duration-300 group-hover:text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 type-title text-white">{value.title}</h3>

                <p className="mt-3 font-sans text-sm font-light leading-relaxed text-neutral-400">
                  {value.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
