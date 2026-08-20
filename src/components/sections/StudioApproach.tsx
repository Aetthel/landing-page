import React from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ShotFigure } from "@/components/ui/shot-figure";
import { pillars, workspaceShots } from "@/config/studio";

/* --------------------------------------------------------------------------
   Cómo trabajamos — la parte que no se puede fotografiar.

   Dos movimientos, en el orden en que uno se los cree. Primero la afirmación
   grande, con su matiz enganchado detrás por una flecha: sin el matiz,
   «trabajamos de forma cercana» es lo que dice todo el mundo. Después las tres
   promesas concretas, numeradas porque son tres y porque van en orden —hablar,
   enterarse, cumplir—, y con una imagen del sitio al lado para que el bloque
   no sea una parrafada más.

   Las tres promesas vivían antes debajo de las fichas del equipo. Salieron de
   ahí porque no describen a nadie: describen el trato, y el trato es de lo que
   va esta sección.
   -------------------------------------------------------------------------- */
export const StudioApproach: React.FC = () => {
  return (
    <section className="w-full bg-canvas pb-24 sm:pb-32 lg:pb-40">
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* --- La afirmación ------------------------------------------------- */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-ink/15 pt-12 lg:pt-16">
            <h2 className="lg:col-span-6 text-[clamp(1.75rem,3.4vw,2.9rem)] font-light tracking-tight leading-[1.12] text-ink text-balance">
              Trabajar con nosotros se parece más a una conversación que a un
              contrato.
            </h2>

            <p className="lg:col-span-6 lg:col-start-8 max-w-xl font-sans text-base sm:text-lg font-light leading-relaxed text-ink-muted">
              {/* La flecha engancha el matiz a la frase de al lado: lo que
                  sigue no es un párrafo nuevo, es la letra pequeña de esa
                  afirmación. */}
              <ArrowRight
                aria-hidden="true"
                className="mr-2 inline-block h-4 w-4 shrink-0 -translate-y-px text-ink"
              />
              No significa que las cosas queden en el aire: el alcance y el
              precio se cierran por escrito antes de empezar. Significa que
              entre esa firma y la entrega no hay un formulario de incidencias
              ni un gestor de cuenta, sino dos personas que te contestan
              sabiendo de qué proyecto les hablas.
            </p>
          </div>
        </Reveal>

        {/* --- Las tres promesas, con el sitio al lado ------------------------ */}
        <div className="mt-20 lg:mt-28 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-14 items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <h3 className="max-w-xl text-[clamp(1.5rem,2.6vw,2.25rem)] font-light tracking-tight leading-[1.15] text-ink text-balance">
                La cercanía se puede describir o se puede comprobar.
              </h3>
              <p className="mt-5 max-w-lg font-sans text-base font-light leading-relaxed text-ink-muted">
                Estas tres son las que la convierten en una forma de trabajar y
                no en una frase de una web. Van en este orden porque cada una
                depende de la anterior.
              </p>
            </Reveal>

            <ol className="mt-12">
              {pillars.map((pillar, i) => (
                <Reveal key={pillar.num} delay={i * 100}>
                  <li className="group grid grid-cols-[auto_1fr] gap-x-5 sm:gap-x-8 border-t border-line py-7 last:border-b">
                    <span className="pt-1 font-sans text-xs font-medium tabular-nums tracking-[0.18em] text-ink-muted">
                      ({pillar.num})
                    </span>

                    <div>
                      <h4 className="text-xl sm:text-2xl font-normal tracking-tight text-ink">
                        {pillar.title}
                      </h4>

                      {/* Trazo lima que se dibuja al pasar por encima: el mismo
                          gesto que el subrayado del hero y el foco de los
                          campos del formulario. */}
                      <span
                        aria-hidden="true"
                        className="mt-3 block h-0.5 w-10 origin-left scale-x-0 bg-brand transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
                      />

                      <p className="mt-4 max-w-lg font-sans text-sm sm:text-base font-light leading-relaxed text-ink-muted">
                        {pillar.desc}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* El `sticky` va fuera del `Reveal`: este último anima un
              `transform`, y un elemento pegajoso que además se desplaza pelea
              consigo mismo mientras dura la entrada. */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal delay={120}>
              <ShotFigure shot={workspaceShots[1]} ar={0.82} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
