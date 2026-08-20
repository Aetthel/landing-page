import React from "react";
import { cn } from "@/lib/utils";

/* --------------------------------------------------------------------------
   Las láminas de reserva — lo que ocupa el sitio de una foto que no está.

   /estudio se juega mucho en dos imágenes que todavía no existen: los dos
   retratos y las fotos del taller. Lo fácil sería un rectángulo gris; lo
   fácil también sería quitar el bloque hasta que hubiera fotos, y entonces la
   página no tendría nada que enseñar.

   Estas láminas son la tercera vía: un objeto compuesto —marca de encuadre,
   monograma o pie, filete lima— que se sostiene solo en el hueco de la foto y
   que se retira sin dejar rastro en cuanto el archivo aparece en `public/`.
   No son un error de carga: son la pieza mientras tanto.
   -------------------------------------------------------------------------- */

/* Marcas de encuadre en las cuatro esquinas, al grosor de línea del sistema.
   Van con bordes y no con un SVG estirado: la lámina cambia de proporción
   según la pieza, y un trazo escalado se deformaría con ella. */
const CropMarks: React.FC = () => (
  <span aria-hidden="true" className="pointer-events-none absolute inset-3">
    <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-ink/15" />
    <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-ink/15" />
    <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-ink/15" />
    <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-ink/15" />
  </span>
);

/** El resplandor lima de fondo, el mismo recurso que cierra las otras páginas. */
const LimeWash: React.FC = () => (
  <span
    aria-hidden="true"
    className="pointer-events-none absolute -bottom-1/3 -right-1/4 h-88 w-88 rounded-full bg-brand/20 blur-3xl"
  />
);

interface PortraitPlateProps {
  /** Iniciales del monograma. */
  initials: string;
  /** Nombre completo, al pie de la lámina. */
  name: string;
  className?: string;
}

/**
 * Reserva de retrato: monograma a tamaño de sello sobre superficie blanca, con
 * el nombre al pie. Proporción 3:4, la misma que tendrá la foto.
 */
export const PortraitPlate: React.FC<PortraitPlateProps> = ({
  initials,
  name,
  className,
}) => (
  <div
    className={cn(
      "relative flex aspect-3/4 w-full flex-col justify-between overflow-hidden border border-line bg-surface p-5",
      className
    )}
  >
    <LimeWash />
    <CropMarks />

    <span
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center font-display text-[clamp(3.5rem,9vw,6rem)] font-medium tracking-tight text-ink/12"
    >
      {initials}
    </span>

    <span aria-hidden="true" className="relative h-0.5 w-7 bg-brand" />

    <span className="relative font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted">
      {name}
    </span>
  </div>
);

interface ShotPlateProps {
  /** Pie de la foto que irá aquí; es lo que se lee mientras no esté. */
  caption: string;
  className?: string;
}

/**
 * Reserva de foto del taller: marco de contactos con el pie compuesto en la
 * tipografía de titulares. Hereda la proporción del contenedor, así que la
 * tira mantiene su ritmo irregular aunque no haya ni una imagen.
 */
export const ShotPlate: React.FC<ShotPlateProps> = ({ caption, className }) => (
  <div
    className={cn(
      "relative flex h-full w-full flex-col justify-end overflow-hidden border border-line bg-surface p-6 sm:p-8",
      className
    )}
  >
    <LimeWash />
    <CropMarks />

    <span className="relative block font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted">
      Taller
    </span>

    <p className="relative mt-2 max-w-[18ch] font-display text-lg font-normal leading-tight tracking-tight text-ink text-balance sm:text-xl">
      {caption}
    </p>

    <span aria-hidden="true" className="relative mt-4 h-0.5 w-7 bg-brand" />
  </div>
);
