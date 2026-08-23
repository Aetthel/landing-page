import React from "react";
import { cn } from "@/lib/utils";

/* --------------------------------------------------------------------------
   El sello de Aetthel Lab — el isotipo dentro de un anillo con su leyenda.

   POR QUÉ ES VECTOR Y NO LA IMAGEN. Existe un `sello aetthel.jfif` en
   `public/images/aetthellab/` que no se puede publicar: la leyenda del anillo
   está mal escrita —«TTHEL LETTHEL LAB LHEL»— y el archivo es un JPEG con la
   cuadrícula de transparencia calcada dentro, así que sobre el lienzo claro
   saldría un cuadrado oscuro a cuadros. Esto lo redibuja bien: mismo isotipo
   oficial que `IsotipoIcon`, leyenda correcta y fondo de verdad transparente.

   SIN FONDO Y TODO EN `currentColor`: anillos, leyenda e isotipo heredan el
   color de quien lo monta, así que la misma pieza sirve sobre lienzo y sobre
   grafito. En Aetthel Lab va en tinta rebajada, de marca de agua.

   OJO CON EL LIMA SOBRE CLARO. Es tentador y no funciona: #B8FA4E contra
   #F4F4F6 da 1,14:1 y el sello desaparece. Si se quiere el sello en lima sobre
   el lienzo hay que devolverle el disco de grafito que llevó un tiempo —está en
   el historial—, porque el arreglo es el fondo, no el tamaño.

   EL TEXTO SE ESTIRA A LA CIRCUNFERENCIA EXACTA (`textLength` sobre la
   longitud del arco) en vez de confiar en que tres repeticiones cuadren solas.
   Es lo que hace que el anillo cierre sin un hueco delator entre la última
   palabra y la primera. Si se cambia la leyenda, no hay que recalcular nada:
   el estirado reparte la diferencia.
   -------------------------------------------------------------------------- */

/** Radio de la línea sobre la que se compone la leyenda, en unidades del `viewBox`. */
const TEXT_RADIUS = 79.5;
/** Longitud del arco completo: es la medida a la que se estira la leyenda. */
const TEXT_PATH_LENGTH = 2 * Math.PI * TEXT_RADIUS;

interface SealAetthelProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const SealAetthel: React.FC<SealAetthelProps> = ({
  className,
  ...props
}) => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    className={cn("h-32 w-32 shrink-0", className)}
    {...props}
  >
    {/* Los tres anillos: el grueso de fuera, su acompañante fino y el que
        encierra el isotipo. El doble filete exterior es lo que lo hace leer
        como sello y no como un logotipo metido en un círculo. */}
    <g fill="none" stroke="currentColor">
      <circle cx="100" cy="100" r="97" strokeWidth="2" />
      <circle cx="100" cy="100" r="92" strokeWidth="0.9" />
      <circle cx="100" cy="100" r="66" strokeWidth="0.9" />
    </g>

    {/* La leyenda arranca en el eje de las doce y da la vuelta en el sentido
        de las agujas del reloj. */}
    <path
      id="sello-aetthel-arco"
      fill="none"
      d={`M 100,${100 - TEXT_RADIUS} A ${TEXT_RADIUS},${TEXT_RADIUS} 0 1,1 100,${100 + TEXT_RADIUS} A ${TEXT_RADIUS},${TEXT_RADIUS} 0 1,1 100,${100 - TEXT_RADIUS}`}
    />
    <text
      fill="currentColor"
      className="font-sans"
      fontSize="12.5"
      fontWeight={600}
      letterSpacing="2.4"
    >
      <textPath
        href="#sello-aetthel-arco"
        textLength={TEXT_PATH_LENGTH}
        lengthAdjust="spacing"
      >
        AETTHEL LAB · AETTHEL LAB · AETTHEL LAB ·
      </textPath>
    </text>

    {/* El isotipo oficial, el mismo trazado que `IsotipoIcon`. Viene de un
        lienzo de 512 centrado en (256,256), así que basta llevar ese centro al
        del sello y escalarlo: nada de recolocarlo a ojo. */}
    <g transform="translate(100 100) scale(0.17) translate(-256 -256)">
      <path
        fill="currentColor"
        d="M230.15 91.55 C228.79 92.23,226.87 93.81,225.79 95.11 C224.72 96.35,213.64 110.26,201.09 125.98 C165.25 170.92,163.78 172.78,106.28 244.58 C76.38 282.0,51.05 313.78,50.09 315.19 L48.28 317.73 L48.11 365.9 L48.0 414.06 L49.3 416.61 C50.15 418.14,51.45 419.55,52.86 420.34 L55.07 421.64 L105.32 421.64 L155.52 421.64 L157.73 420.4 C159.43 419.49,172.26 403.78,210.42 356.12 C238.12 321.41,262.31 291.33,264.12 289.18 C268.08 284.61,270.68 282.85,275.32 281.67 C278.09 280.93,279.44 280.87,282.1 281.38 C288.66 282.51,293.29 286.08,296.12 292.18 L297.59 295.29 L297.93 329.77 C298.27 367.09,298.27 366.86,301.6 376.98 C307.65 395.18,324.16 411.52,343.21 418.19 C353.28 421.7,352.48 421.64,407.26 421.64 L457.13 421.64 L459.44 419.94 C464.19 416.5,463.8 424.24,463.97 337.24 C464.08 283.76,463.91 259.22,463.51 257.64 C462.78 254.93,459.95 251.59,457.46 250.57 C455.99 249.95,447.06 249.78,410.15 249.78 C379.17 249.78,363.68 249.56,361.64 249.16 C354.24 247.63,345.64 241.19,342.42 234.8 C338.63 227.39,338.92 232.43,338.58 161.31 L338.29 96.86 L337.05 94.88 C336.37 93.75,334.79 92.28,333.6 91.6 L331.34 90.36 L281.99 90.36 C232.69 90.36,232.58 90.36,230.15 91.55"
      />
    </g>
  </svg>
);
