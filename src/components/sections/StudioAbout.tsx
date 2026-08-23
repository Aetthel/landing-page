import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

/* --------------------------------------------------------------------------
   El estudio — la primera de las cuatro secciones de Aetthel Lab.

   Un solo movimiento: qué es esto. Un laboratorio, no una oficina que enseñar,
   y un sitio en el que se entra y no al que se encarga desde fuera.

   DOS BLOQUES, NO TRES. El titular y su prosa van juntos en la columna
   estrecha —son la misma voz y se leen seguidos—, y la lámina ocupa la ancha
   ella sola. Antes el titular estaba arriba a la izquierda, el texto a la
   derecha y la foto colgando debajo del titular: tres piezas empezando a tres
   alturas distintas, con la imagen desbordando por abajo media pantalla más
   que el texto. Puestas en dos columnas que arrancan a la misma altura, la
   sección se lee de una sola vez.

   Las alturas se corresponden por construcción, no por casualidad: en la
   columna de cinco el titular ocupa unas tres líneas y los dos párrafos otras
   nueve, y la lámina, a 16:9 en la columna de siete, cae dentro de ese mismo
   margen. Si la prosa crece mucho, es la lámina la que sube de columna, no el
   texto el que se recorta.
   -------------------------------------------------------------------------- */
export const StudioAbout: React.FC = () => {
  return (
    <section
      id="estudio"
      className="w-full bg-canvas pt-24 sm:pt-32 lg:pt-40 pb-24 sm:pb-32 lg:pb-40"
    >
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10 items-start">
          {/* --- Titular y prosa, una sola pieza ---------------------------- */}
          <Reveal className="lg:col-span-5">
            {/* Sin lima en el titular: sobre lienzo no llega ni a 2:1 de
                contraste. El color de marca vive en los filetes y en el
                grafito del hero, no en texto sobre claro. */}
            <h2 className="text-[clamp(2.25rem,5vw,4rem)] font-normal tracking-tight leading-[1.05] text-ink text-balance">
              De la creatividad a las soluciones.
            </h2>

            <p className="mt-8 font-sans text-base sm:text-lg font-light leading-relaxed text-ink-muted">
              Aetthel Lab no es un estudio físico. Aetthel Lab es nuestro
              pequeño laboratorio donde no solo construimos con todas las
              posibles soluciones tecnológicas para tu negocio, sino que
              también experimentamos día a día con nuevos métodos y prácticas
              para seguir creciendo juntos.
            </p>

            <p className="mt-5 font-sans text-base sm:text-lg font-light leading-relaxed text-ink-muted">
              Compartir nuestro laboratorio de trabajo con vosotros a la hora
              de desarrollar vuestra herramienta os da la oportunidad de
              involucraros de lleno y explorar cómo avanza vuestro proyecto.
            </p>
          </Reveal>

          {/* --- La lámina --------------------------------------------------
              `lg:mt-3` es corrección óptica, no espaciado: el titular tiene
              aire por encima de sus mayúsculas y sin ese empujón el canto de
              la foto queda visiblemente más alto que la primera línea. */}
          <Reveal delay={120} className="lg:col-span-7 lg:mt-3">
            <figure className="overflow-hidden border border-line bg-surface">
              <Image
                src="/images/aetthellab/laboratorio.jpg"
                alt="El espacio de trabajo de Aetthel Lab: dos puestos enfrentados con las pantallas encendidas y el logotipo de Aetthel en la pared del fondo."
                width={1024}
                height={572}
                sizes="(min-width: 1024px) 57vw, 100vw"
                className="block h-auto w-full"
              />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
