import React from "react";
import { cn } from "@/lib/utils";

/* --------------------------------------------------------------------------
   Las láminas de reserva — lo que ocupa el sitio de una foto que no está.

   El hueco vivo es el de los retratos del reparto (`PortraitPlate`). Lo fácil
   sería un rectángulo gris; lo fácil también sería quitar el bloque hasta que
   hubiera fotos, y entonces la sección no tendría nada que enseñar.

   `ReservePlate` —la apaisada— está ahora mismo sin usar: la ocupaba la foto
   del equipo en /estudio, que ya existe. Se queda porque es la pieza a la que
   recurrir el próximo bloque con imagen pendiente, no porque se haya olvidado
   barrerla.

   Estas láminas son la tercera vía: un objeto compuesto —marcas de encuadre,
   monograma o rótulo, filete lima— que se sostiene solo en el hueco de la
   foto y que se retira sin dejar rastro en cuanto el archivo aparece en
   `public/`. No es un error de carga: es la pieza mientras tanto.

   Y llevan rótulo a propósito. Una reserva que se ve bonita y no dice nada es
   la que acaba publicada sin que nadie se acuerde de sustituirla.
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


interface ReservePlateProps {
  /** Qué foto va aquí. Se lee mientras no esté y se va con ella. */
  label: string;
  className?: string;
}

/**
 * Reserva apaisada, a la misma proporción que la lámina del laboratorio
 * (1024×572). Sirve para que un bloque con foto pendiente ocupe ya el sitio
 * exacto que ocupará la imagen: cuando entre el archivo, nada se mueve.
 */
export const ReservePlate: React.FC<ReservePlateProps> = ({
  label,
  className,
}) => (
  <div
    className={cn(
      "relative flex aspect-[1024/572] w-full flex-col justify-end overflow-hidden border border-line bg-surface p-6 sm:p-8",
      className
    )}
  >
    <LimeWash />
    <CropMarks />

    <span aria-hidden="true" className="relative block h-0.5 w-7 bg-brand" />

    <p className="relative mt-4 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
      {label}
    </p>
  </div>
);
