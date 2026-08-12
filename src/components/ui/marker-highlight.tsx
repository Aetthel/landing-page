import React from "react";
import { cn } from "@/lib/utils";

interface MarkerHighlightProps {
  className?: string;
}

/**
 * Subrayado a rotulador: se pinta detrás del texto como tinta translúcida.
 * Nada de contornos perfectos — la silueta se rompe con turbulencia, los
 * extremos van ladeados y se pasan de largo, y una segunda pasada más baja
 * acumula tinta donde se solapa, igual que al subrayar a mano.
 */
export const MarkerHighlight: React.FC<MarkerHighlightProps> = ({
  className,
}) => (
  <span aria-hidden="true" className={cn("marker", className)}>
    {/* Filtro de borde: la turbulencia desplaza el contorno y lo deja mordido */}
    <svg className="marker__defs" width="0" height="0" focusable="false">
      <filter
        id="marker-rough"
        x="-15%"
        y="-45%"
        width="130%"
        height="190%"
        colorInterpolationFilters="sRGB"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.03 0.018"
          numOctaves="3"
          seed="11"
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="7"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>

    <span className="marker__pass marker__pass--base" />
    <span className="marker__pass marker__pass--over" />
  </span>
);
