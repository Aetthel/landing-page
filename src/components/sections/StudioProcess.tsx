import React from "react";
import { processSteps } from "@/config/services";
import { Reveal } from "@/components/ui/reveal";
import { SealAetthel } from "@/components/ui/seal-aetthel";

/* --------------------------------------------------------------------------
   El proceso — un proyecto entero, del primer correo a la entrega.

   La página de contacto cuenta los tres primeros movimientos, hasta la primera
   conversación. Aquí va el recorrido completo, y con la columna que casi nadie
   publica: lo que se espera del cliente en cada paso. Contratar desarrollo da
   miedo por el tiempo que uno va a tener que poner y nadie le sabe decir
   cuánto; esa columna responde justo eso.

   Aquí no hay plazos. Los reales dependen del proyecto y salen en el
   presupuesto: publicar una horquilla genérica sería inventarse un dato que
   después no se sostiene.

   La numeración se imprime porque el orden es información: no se puede
   construir antes de validar el diseño, ni validar antes de cerrar el alcance.

   Va sobre lienzo como todo lo demás. La hoja clara es la misma de punta a
   punta de la web y no se rompe aquí: lo que separa esta sección de sus
   vecinas es el aire y el filete de la tabla, no un cambio de fondo.
   -------------------------------------------------------------------------- */
export const StudioProcess: React.FC = () => {
  return (
    <section id="proceso" className="w-full bg-canvas py-24 sm:py-32 lg:py-40">
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* El titular ocupa poco más de la mitad del ancho y dejaba muerta toda
            la derecha. El sello la habita sin competir: en tinta rebajada se lee
            como una marca de agua y no como un segundo foco.

            Probamos el lima y se descartó: sobre el lienzo claro da 1,14:1 de
            contraste y el sello se esfuma. Para recuperarlo hay que devolverle
            el disco de grafito de debajo, no subirle el tamaño. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 items-center">
          <Reveal className="lg:col-span-7 max-w-3xl">
            <h2 className="text-[clamp(2.25rem,5vw,4rem)] font-normal tracking-tight leading-[1.05] text-ink text-balance">
              El ciclo de vida de tu proyecto.
            </h2>
            <p className="mt-6 max-w-xl font-sans text-base sm:text-lg font-light leading-relaxed text-ink-muted">
              En Aetthel nos gusta crear nuestros propios métodos de trabajo, que
              seguimos de forma estricta para llevar un mayor control de todos los
              proyectos que vamos desarrollando y para garantizar que nuestros
              clientes se sienten acompañados durante el desarrollo.
            </p>
          </Reveal>

          {/* Va en las columnas 8 a 11 y centrado dentro de ellas, no pegado al
              canto: su eje cae casi exactamente en la mitad del blanco que deja
              el titular, que es donde un sello parece puesto y no arrinconado.

              Solo de `lg` para arriba: por debajo no hay hueco que llenar y
              pasaría de rellenar un vacío a robar altura al titular. */}
          {/* `reveal-stamp` en vez del ascenso de siempre: al entrar en pantalla
              el sello cae, gira y se estampa. Sin `delay`, que el retardo de
              <Reveal> es de transición y aquí manda una animación —el suyo va en
              la propia `stampPress`—. */}
          <Reveal className="reveal-stamp hidden lg:flex lg:col-start-8 lg:col-span-4 justify-center text-ink/30">
            <SealAetthel className="h-48 w-48 xl:h-56 xl:w-56" />
          </Reveal>
        </div>

        <Reveal className="mt-24 lg:mt-36">
          <div className="hidden lg:grid grid-cols-12 gap-x-6 pb-4 border-b border-ink/15 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
            {/* El número y la fase se titulaban a sí mismos —un «1» debajo de
                «Paso» y un nombre de fase debajo de «Fase» no añadían nada—, así
                que la cabecera arranca en la quinta columna: solo rotula las dos
                que sí necesitan que alguien diga de quién es el trabajo.

                Las dos columnas de prosa se reparten la mitad derecha a partes
                iguales —cuatro de doce cada una— y su contenido va centrado,
                rótulo y texto. Es lo que las convierte en dos bloques con su
                propio espacio en vez de dos filas de texto corridas: el aire lo
                pone el centrado, no un filete.

                El `px-6` es el seguro de esa idea: un texto centrado que llena
                su caja vuelve a tocar al vecino, y entonces los dos bloques se
                leen otra vez como una sola mancha. */}
            <span className="col-start-5 col-span-4 px-6 text-center">
              Lo que hacemos nosotros
            </span>
            <span className="col-span-4 px-6 text-center">
              Lo que necesitamos de ti
            </span>
          </div>

          <ol>
            {processSteps.map((item) => (
              <li
                key={item.step}
                className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-4 border-b border-line py-8"
              >
                {/* Número y fase son el estandarte de la fila: se leen antes
                    que nada y a distancia, y las dos columnas de prosa cuelgan
                    de ellos. De ahí el salto de tamaño.

                    `leading-none` en el número y `leading-[1.05]` en la fase no
                    son gusto: a estos cuerpos el interlineado por defecto abre
                    un hueco muerto por encima de las cifras y descuadraría los
                    dos remates superiores, que es justo lo que los emparenta.

                    El número va al gris legible y no al 30 % de tinta, que
                    sobre blanco no llega a 2:1. */}
                <span className="lg:col-span-1 font-display text-[clamp(2.25rem,3.6vw,3.5rem)] font-medium leading-none tracking-tight tabular-nums text-ink-muted">
                  {item.step}
                </span>

                {/* `whitespace-pre-line` para que un `\n` en el dato parta la
                    fase donde se quiera. Los títulos sin salto siguen partiendo
                    solos con `text-balance`, que no estorba al salto forzado. */}
                <h3 className="lg:col-span-3 whitespace-pre-line text-[clamp(1.5rem,2.2vw,2rem)] font-normal leading-[1.05] tracking-tight text-ink text-balance">
                  {item.title}
                </h3>

                {/* Centrado solo de `lg` para arriba. En móvil las dos cosas
                    caen una debajo de otra a todo el ancho: ahí no hay columna
                    vecina de la que separarse y un párrafo centrado a pantalla
                    completa solo cuesta de leer. */}
                <p className="lg:col-start-5 lg:col-span-4 lg:px-6 font-sans text-sm font-light leading-relaxed text-ink-muted lg:text-center">
                  {item.us}
                </p>

                <div className="lg:col-span-4 lg:px-6 space-y-1 lg:text-center">
                  <span className="lg:hidden block font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                    Lo que necesitamos de ti
                  </span>
                  {/* Mismo trato que la fase: un `\n` en el dato parte la línea
                      donde se quiera, y las celdas sin salto siguen partiendo
                      solas por el ancho de la columna. */}
                  <p className="whitespace-pre-line font-sans text-sm font-light leading-relaxed text-ink">
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
