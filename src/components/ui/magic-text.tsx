"use client";

import React, { useRef } from "react";
import {
  easeInOut,
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";

export interface MagicTextProps {
  text: string;
  /** Tipografía y alineación las pone quien lo usa, no el componente. */
  className?: string;
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

/* Cuántas palabras se están pintando a la vez. Con 1 el efecto es un contador:
   una palabra entra, termina, entra la siguiente. Solapando los tramos, el
   trazo avanza como una ola y el ojo deja de ver los escalones. */
const WORDS_IN_FLIGHT = 3;

/**
 * Una palabra en tinta sólida con un trazo lima que se pinta por detrás.
 *
 * El trazo crece por `scaleX` desde el borde izquierdo, así que la palabra se
 * subraya en el sentido de la lectura. El texto nunca cambia de color: se lee
 * igual de bien antes y después de pasar el rotulador.
 */
const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  // El easing suaviza el arranque y el remate de cada trazo; sin él, con los
  // tramos solapados se notaría dónde empieza y acaba cada palabra.
  const scaleX = useTransform(progress, range, [0, 1], { ease: easeInOut });

  return (
    <span className="relative">
      {/* El trazo va primero y en `absolute`: se pinta por debajo del texto sin
          entrar en el reparto de líneas. Se desborda un pelo a los lados para
          que entre palabra y palabra el trazo casi se dé la mano. */}
      <motion.span
        aria-hidden="true"
        style={{ scaleX }}
        className="absolute -left-[0.08em] -right-[0.08em] top-[0.2em] bottom-[0.08em] origin-left rounded-[0.06em] bg-brand"
      />
      <span className="relative">{children}</span>
    </span>
  );
};

/**
 * MagicText — el párrafo se subraya palabra a palabra conforme bajas.
 *
 * El progreso de scroll pasa por un muelle antes de repartirse: la rueda del
 * ratón llega a saltos discretos y sin amortiguar esos saltos se transmiten
 * tal cual al trazo.
 */
export const MagicText: React.FC<MagicTextProps> = ({ text, className }) => {
  const container = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    /* Un recorrido largo y generoso: cuanto más scroll abarca el párrafo, más
       píxeles le tocan a cada palabra y más fino queda el pintado. */
    offset: ["start 0.9", "end 0.4"],
  });

  /* Muelle tenso y bien amortiguado: quita los escalones sin que el trazo se
     quede rezagado respecto al scroll. `restDelta` lo deja parar limpio en vez
     de temblar en el último decimal. */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 32,
    mass: 0.4,
    restDelta: 0.0005,
  });

  const words = text.split(" ");

  /* Cada palabra dura `span` y todas arrancan repartidas por lo que queda, de
     modo que la última termina justo en 1 y ninguna se queda a medias. */
  const span = Math.min(1, WORDS_IN_FLIGHT / words.length);
  const step = words.length > 1 ? (1 - span) / (words.length - 1) : 0;

  return (
    <p
      ref={container}
      /* `gap-x` hace de espacio entre palabras: al ser cada una un elemento
         flex, los espacios del texto original desaparecen del reparto. */
      className={cn("flex flex-wrap gap-x-[0.26em] text-ink", className)}
    >
      {words.map((word, index) => {
        const start = index * step;

        return (
          <Word
            key={`${word}-${index}`}
            progress={smoothProgress}
            range={[start, start + span]}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
};
