import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { team } from "@/config/studio";

/* --------------------------------------------------------------------------
   Nuestro equipo — quiénes están detrás del laboratorio.

   Va justo debajo de «De la creatividad a las soluciones» y repite su reparto
   al pie de la letra: columna de cinco a la izquierda, lámina en la de siete,
   las dos arrancando a la misma altura. Que sean idénticas es lo que las hace
   leerse como un díptico —el sitio y la gente— en vez de como dos secciones
   que se parecen sin querer.

   AQUÍ NO HAY PROSA. Donde antes iban dos párrafos explicando de corrido quién
   hace qué, ahora van dos fichas —una por persona— con el nombre, el oficio y
   la parte del proyecto que le toca. Es la misma información, pero pareada:
   el lector no tiene que deshacer una frase para saber a quién le pregunta por
   la base de datos y a quién por la interfaz.

   LOS DATOS SALEN DE `config/studio.ts`, no de aquí. Es la misma tabla que
   alimenta al reparto de la portada, así que el oficio y la descripción de
   cada uno se cambian en un solo sitio y no se pueden contradecir entre
   páginas.

   OJO, NO CONFUNDIR con `StudioTeam`: aquel es el reparto con los nombres a
   tamaño de cartel y los retratos, y va en la portada. Este solo presenta al
   equipo dentro del recorrido de /estudio.

   LA FOTO NO LLEVA PROPORCIÓN FIJA, y es a propósito. En escritorio la fila
   estira las dos columnas a la misma altura (`lg:items-stretch`) y la imagen
   se recorta para llenar la suya, así que su canto inferior cae exactamente
   sobre la última línea de la ficha de abajo —vengan dos líneas de texto o
   cuatro— en vez de quedarse corta a media columna. En móvil, donde no hay
   pareja que igualar, vuelve a su 3:2.
   -------------------------------------------------------------------------- */
export const StudioTeamIntro: React.FC = () => {
  /* Mismo aire arriba y abajo que el resto de secciones: así los huecos de la
     hoja miden todos lo mismo y ninguna pareja se lee más pegada que las
     demás por accidente. */
  return (
    <section id="equipo" className="w-full bg-canvas py-24 sm:py-32 lg:py-40">
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10 items-start lg:items-stretch">
          {/* --- Titular y fichas, una sola pieza --------------------------- */}
          <Reveal className="lg:col-span-5">
            <h2 className="text-[clamp(2.25rem,5vw,4rem)] font-normal tracking-tight leading-[1.05] text-ink text-balance">
              Nuestro equipo.
            </h2>

            {/* Dos columnas mientras la sección ocupa el ancho entero, y una
                sola en escritorio: ahí esta columna mide cinco de doce y las
                fichas apiladas es lo único que deja respirar a la descripción
                sin partirle todas las líneas.

                EL HUECO ES DE 72 px Y NO DE 40 POR UNA RAZÓN QUE NO SE VE AQUÍ:
                la foto de al lado se estira a la altura de esta columna, así que
                el aire de este margen es también el tamaño de la imagen. Aquí
                iba un filete lima que ocupaba 34 px; al retirarlo, la foto
                encogió lo mismo. El margen se queda con lo que sumaban los dos
                para que la lámina siga midiendo lo que medía. */}
            <div className="mt-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-10 gap-y-8">
              {team.map((member) => (
                <div key={member.name} className="border-t border-ink/15 pt-6">
                  <h3 className="font-display text-xl sm:text-2xl font-normal tracking-tight leading-tight text-ink">
                    {member.name}
                  </h3>

                  <p className="mt-2 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                    {member.role}
                  </p>

                  <p className="mt-4 max-w-md font-sans text-sm sm:text-base font-light leading-relaxed text-ink-muted">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* --- La foto -----------------------------------------------------
              `lg:mt-3` es corrección óptica, no espaciado: el titular tiene
              aire por encima de sus mayúsculas y sin ese empujón el canto de
              la foto queda visiblemente más alto que la primera línea.

              `fill` en vez de medidas: así la imagen no aporta altura a la
              fila —la pone entera la columna de texto— y no hay pescadilla que
              se muerda la cola entre «la foto mide lo que el texto» y «la fila
              mide lo que la foto». */}
          <Reveal delay={120} className="lg:col-span-7 lg:mt-3">
            <figure className="relative aspect-[3/2] lg:aspect-auto lg:h-full w-full overflow-hidden border border-line bg-surface">
              <Image
                src="/images/aetthellab/equipo.png"
                alt="El equipo de Aetthel: Martí Castaño y Alex Cortell, de brazos cruzados sobre un fondo blanco."
                fill
                sizes="(min-width: 1024px) 57vw, 100vw"
                className="object-cover object-top"
              />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
