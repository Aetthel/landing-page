import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { WordWheel } from "@/components/ui/word-wheel";
import { careValues } from "@/config/studio";

/* --------------------------------------------------------------------------
   El trato — la última de las cuatro secciones, y la más humana a propósito.

   Llega después de la tabla del proceso, que es lo más frío de la página, y
   justo antes de la llamada. Ese orden es el argumento: primero se demuestra
   que hay método, y solo entonces se puede decir «además somos majos» sin que
   suene a excusa por no tener lo otro.

   Vuelve al lienzo después del blanco de la tabla: la página termina en el
   mismo tono en el que empezó, y el bloque frío del proceso queda encerrado
   entre dos secciones que hablan de personas.

   A la derecha ya no van las tres promesas numeradas sino la rueda de valores:
   la prosa de la izquierda dice cómo tratamos al cliente y la rueda pone las
   palabras encima, sin desarrollarlas. Es un cambio de registro deliberado —de
   argumentar a afirmar—; las promesas siguen en `config/studio.ts` por si hace
   falta recuperar el argumento debajo de la rueda.
   -------------------------------------------------------------------------- */
export const StudioCare: React.FC = () => {
  return (
    <section
      id="trato"
      className="w-full bg-canvas py-24 sm:py-32 lg:py-40"
    >
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* `items-center` y no `items-start`: la prosa y el panel miden casi lo
            mismo pero no exactamente, y alineados por arriba el que sobra
            asoma solo por abajo y la pareja se lee descolgada. Centrados, el
            desajuste se reparte y los dos bloques quedan a nivel.

            Aquí vivía un `sticky` que mantenía la tesis a la vista mientras se
            recorrían las tres promesas de la derecha. Ya no hay lista que
            recorrer —hay un panel de una sola altura—, así que no tenía ningún
            trecho por el que pegarse. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-14 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              {/* A la escala de columna estrecha, no a la de titular ancho: en
                  cinco columnas, a 4rem, un titular de dos líneas se dispara. */}
              <h2 className="text-[clamp(1.75rem,3.4vw,2.9rem)] font-normal tracking-tight leading-[1.1] text-ink text-balance">
                De profesionales a profesionales.
              </h2>

              <p className="mt-6 max-w-md font-sans text-base sm:text-lg font-light leading-relaxed text-ink-muted">
                Uno de los ámbitos que más respetamos y protegemos en Aetthel es
                la comunicación con el cliente, intentando en todo momento
                transmitir cercanía y profesionalidad.
              </p>

              <p className="mt-5 max-w-md font-sans text-base sm:text-lg font-light leading-relaxed text-ink-muted">
                Nuestro principal objetivo es poder resolver tus problemas para
                hacer mucho más ameno tu día a día en tu negocio, y es por eso
                que siempre trabajamos con compromiso, asumiendo que nuestro
                trabajo mejora la calidad y el desempeño de otro tipo de
                trabajos.
              </p>
            </Reveal>
          </div>

          {/* La rueda ocupa el sitio de las tres promesas numeradas. Va sobre
              grafito y no sobre el lienzo por la misma razón de siempre: el lima
              solo rinde sobre oscuro, y aquí el lima es lo que marca cuál de las
              palabras está en foco. */}
          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <WordWheel words={careValues} />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
