import React from "react";
import { cn } from "@/lib/utils";

/* --------------------------------------------------------------------------
   La rueda de palabras — panel de grafito con los valores en desfile vertical.

   La referencia es la pieza de la sección de servicios de benorth.studio, que
   allí es un vídeo de Vimeo, no código: una lista en diagonal que sube, con la
   palabra que cruza el centro nítida y en color de acento, señalada por una
   flecha, y el resto cada vez más desenfocadas conforme se alejan. Esto lo
   reconstruye en CSS con nuestro lima sobre grafito, Jakarta y `careValues`.

   CADA PALABRA LLEVA SU PROPIA ANIMACIÓN, todas iguales y arrancando cada una
   un turno más tarde. Es lo que permite que el desenfoque sea progresivo: si el
   desfile fuese una cinta única desplazándose, todas sus palabras compartirían
   un mismo `filter` y el borroso tendría que aplicarse por capas, con un salto
   entre la nítida y la borrosa. Aquí el desenfoque, el color y el tamaño son
   fotogramas del recorrido de cada palabra, así que crecen y decrecen con la
   distancia al centro sin escalones.

   Y como el foco viaja dentro de la misma animación que la posición, la palabra
   en lima es SIEMPRE la que está en el centro: no hay estado que sincronizar y
   no hace falta JavaScript.

   EL DESFASE VA EN NEGATIVO. Un retardo positivo dejaría el panel vacío durante
   la primera vuelta, esperando a que cada palabra entrase; en negativo se
   arranca con la animación ya avanzada y el panel aparece lleno y en marcha.
   -------------------------------------------------------------------------- */

interface WordWheelProps {
  /** Las palabras que desfilan, en orden. Ver la nota de `careValues`. */
  words: string[];
  className?: string;
}

export const WordWheel: React.FC<WordWheelProps> = ({ words, className }) => (
  <div
    className={cn(
      "wordwheel relative isolate aspect-[4/3] w-full overflow-hidden bg-dark",
      className
    )}
    style={{ "--wordwheel-count": words.length } as React.CSSProperties}
  >
    {/* El contenido real para quien no ve el panel: esto es una lista de
        valores, y como tal se anuncia una vez y en orden. */}
    <p className="sr-only">Nuestros valores: {words.join(", ")}.</p>

    {/* El escenario lleva la diagonal, y con ella todas las palabras. El
        `scale` no es estética: al girar, las esquinas del rectángulo se meten
        hacia dentro y dejarían cuatro cuñas de fondo vacías. */}
    <div className="wordwheel-stage" aria-hidden="true">
      {words.map((word, i) => (
        /* La casilla ocupa el panel entero y es la que se mueve; la palabra
           solo va centrada dentro. Que mida lo mismo que el contenedor es lo
           que permite dar el recorrido en porcentajes: si el `transform` fuera
           sobre la palabra, un 55 % sería una distancia distinta para
           «Cercanía» que para «Profesionalidad». */
        <span
          key={word}
          className="wordwheel-slot"
          style={
            {
              animationDelay: `calc(var(--wordwheel-step) * -${i})`,
            } as React.CSSProperties
          }
        >
          <span className="wordwheel-word">{word}</span>
        </span>
      ))}
    </div>
  </div>
);
