"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedGridBackgroundProps {
  className?: string;
  gridSize?: number;
}

/**
 * AnimatedGridBackground — Fondo de cuadrícula que se desplaza de forma natural
 * con el scroll de la página (posicionamiento absolute en la zona superior).
 */
export const AnimatedGridBackground: React.FC<AnimatedGridBackgroundProps> = ({
  className,
  gridSize = 44,
}) => {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute top-0 left-0 right-0 h-[1100px] pointer-events-none z-0 overflow-hidden select-none bg-canvas",
        className
      )}
    >
      {/* Rejilla de líneas finas con desvanecimiento gradual que se mueve con el scroll */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(26, 26, 30, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(26, 26, 30, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          WebkitMaskImage:
            "radial-gradient(ellipse 130% 75% at 50% 0%, black 20%, transparent 95%)",
          maskImage:
            "radial-gradient(ellipse 130% 75% at 50% 0%, black 20%, transparent 95%)",
        }}
      />
    </div>
  );
};
