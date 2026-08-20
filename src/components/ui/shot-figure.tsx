import React from "react";
import { ShotPlate } from "@/components/ui/photo-plate";
import { publicAssetExists } from "@/lib/assets";
import type { WorkspaceShot } from "@/config/studio";
import { cn } from "@/lib/utils";

/* --------------------------------------------------------------------------
   Una lámina suelta del taller — la misma pieza que la tira, pero quieta.

   Se usa para los respiros de la página: el bloque grande que corta después
   del reparto y la imagen que acompaña a los tres criterios. Mantiene la
   proporción declarada en el dato, así que la caja ocupa su sitio antes de que
   la foto cargue y la página no da el salto típico al terminar de bajar.
   -------------------------------------------------------------------------- */
interface ShotFigureProps {
  shot: WorkspaceShot;
  /** Proporción a la que se recorta aquí, si no es la nativa de la foto. */
  ar?: number;
  className?: string;
  /** `eager` para la lámina que entra en la primera pantalla. */
  priority?: boolean;
}

export const ShotFigure: React.FC<ShotFigureProps> = ({
  shot,
  ar,
  className,
  priority = false,
}) => {
  const src = publicAssetExists(shot.src) ? shot.src : null;
  const ratio = ar ?? shot.ar;

  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-[2rem] bg-surface sm:rounded-[2.5rem]",
        className
      )}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element -- ruta suelta que
        // puede no existir todavía: el optimizador de Next devolvería un 500.
        <img
          src={src}
          alt={shot.alt}
          className="block h-full w-full object-cover"
          draggable={false}
          loading={priority ? "eager" : "lazy"}
        />
      ) : (
        <ShotPlate caption={shot.caption} className="rounded-none border-0" />
      )}
    </figure>
  );
};
