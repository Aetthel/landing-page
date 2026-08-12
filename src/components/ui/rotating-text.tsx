"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { onBooted } from "@/lib/boot";

interface RotatingTextProps {
  words: string[];
  /** ms que cada palabra permanece en pantalla (transición incluida) */
  interval?: number;
  /** ms de espera inicial, para no pisar la animación de entrada del hero */
  startDelay?: number;
  className?: string;
}

/**
 * Palabra rotativa con revelado vertical: la entrante sube desde abajo
 * mientras la saliente se va por arriba, ambas enmascaradas por el contenedor.
 * El ancho lo fija la palabra más larga, así el bloque nunca salta.
 */
export const RotatingText: React.FC<RotatingTextProps> = ({
  words,
  interval = 2800,
  startDelay = 1400,
  className,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length < 2) return;

    let kickoff: ReturnType<typeof setTimeout> | undefined;
    let cycle: ReturnType<typeof setInterval> | undefined;

    // El contador no corre detrás de la cortina de entrada: si hay entrada de
    // marca, la primera palabra se ve entera al levantarse.
    const unsubscribe = onBooted(() => {
      kickoff = setTimeout(() => {
        cycle = setInterval(
          () => setIndex((current) => (current + 1) % words.length),
          interval
        );
      }, startDelay);
    });

    return () => {
      unsubscribe();
      if (kickoff) clearTimeout(kickoff);
      if (cycle) clearInterval(cycle);
    };
  }, [words.length, interval, startDelay]);

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");
  const leavingIndex = (index - 1 + words.length) % words.length;

  return (
    <span
      className={cn(
        /* py/-my: aire para los descendentes de la itálica sin alterar el interlineado */
        "relative block overflow-hidden py-[0.12em] -my-[0.12em]",
        className
      )}
    >
      {/* Reserva de espacio: la palabra más larga, invisible */}
      <span className="invisible whitespace-nowrap" aria-hidden="true">
        {longest}
      </span>

      {/* El lector de pantalla lee la lista, no el carrusel */}
      <span className="sr-only">{words.join(", ")}</span>

      <span className="absolute inset-0" aria-hidden="true">
        {words.map((word, i) => (
          <span
            key={word}
            className={cn(
              "kinetic-word",
              i === index && "is-active",
              i === leavingIndex && "is-leaving"
            )}
          >
            {word}
          </span>
        ))}
      </span>
    </span>
  );
};
