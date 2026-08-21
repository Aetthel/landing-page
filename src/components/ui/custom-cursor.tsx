"use client";

import { useEffect, useRef, useState } from "react";

/**
 * CustomCursor - Cursor de círculo único interactivo con física inercial (lerp).
 * Un único círculo minimalista y elegante que sigue suavemente al puntero del ratón
 * y se expande al posarse sobre elementos interactivos.
 *
 * Sobre fondos oscuros se invierte a blanco: la tinta del cursor es del color
 * del texto, así que sin invertir desaparecería en el footer, el reel y las
 * tarjetas de proyecto. Se marca la superficie con `data-cursor-surface`
 * ("dark" | "light") y gana la más cercana, de modo que un botón lima dentro
 * de un bloque oscuro puede volver a pedir cursor oscuro.
 */

/* Paleta del cursor por tipo de superficie. El `ring` es un contorno exterior
   del color contrario: mantiene el círculo legible aunque caiga sobre un tono
   intermedio (una foto, un degradado) que no sea ni claro ni oscuro. */
const CURSOR_SKIN = {
  light: {
    idle: {
      background: "rgba(26, 26, 30, 0.03)",
      border: "1.5px solid rgba(26, 26, 30, 0.4)",
      ring: "0 0 0 1px rgba(255, 255, 255, 0.28)",
    },
    hover: {
      background: "rgba(26, 26, 30, 0.06)",
      border: "1.5px solid rgba(26, 26, 30, 0.85)",
      ring: "0 0 0 1px rgba(255, 255, 255, 0.4)",
    },
  },
  dark: {
    idle: {
      background: "rgba(255, 255, 255, 0.06)",
      border: "1.5px solid rgba(255, 255, 255, 0.55)",
      ring: "0 0 0 1px rgba(0, 0, 0, 0.28)",
    },
    hover: {
      background: "rgba(255, 255, 255, 0.12)",
      border: "1.5px solid rgba(255, 255, 255, 0.95)",
      ring: "0 0 0 1px rgba(0, 0, 0, 0.4)",
    },
  },
} as const;

/* Diámetros en px. El salto es de 1,4x: se nota el cambio de estado sin que el
   círculo se coma el elemento que hay debajo. */
const SIZE_IDLE = 40;
const SIZE_HOVER = 56;

export function CustomCursor() {
  const circleRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [onDarkSurface, setOnDarkSurface] = useState(false);

  useEffect(() => {
    // Si el dispositivo es táctil (móvil/tablet), el cursor personalizado no se dibuja
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId: number;
    // Al hacer scroll cambia el suelo bajo un puntero inmóvil, y ahí no hay
    // `mouseover` que valga. Se marca y se resuelve en el siguiente frame.
    let surfaceIsStale = false;

    /* Resuelve de una vez las dos preguntas que le hacemos al elemento que hay
       bajo el cursor: si es clicable y si su superficie es oscura. React
       descarta por su cuenta los estados que no cambian, así que puede
       llamarse tan a menudo como haga falta. */
    const readSurface = (target: Element | null) => {
      if (!target) return;

      const isCursorHidden = Boolean(target.closest('[data-cursor="none"]'));
      if (isCursorHidden) {
        setIsVisible(false);
        return;
      }

      setIsVisible(true);

      const isInteractive = Boolean(
        target.closest(
          'a, button, input, textarea, select, [role="button"], .cursor-pointer, [data-cursor-hover]'
        )
      );

      const surface = target
        .closest<HTMLElement>("[data-cursor-surface]")
        ?.dataset.cursorSurface;

      setIsHovered(isInteractive);
      setOnDarkSurface(surface === "dark");
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      readSurface(e.target as Element);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    // Bucle de renderizado inercial a 60/120 FPS
    const render = () => {
      // Lerp suavizado: 0.25 proporciona una respuesta ágil pero fluida
      currentX += (mouseX - currentX) * 0.25;
      currentY += (mouseY - currentY) * 0.25;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      // Un único sondeo por frame como mucho, por muchos eventos de scroll
      // que hayan llegado: `elementFromPoint` obliga al navegador a calcular
      // posiciones y no conviene abusar.
      if (surfaceIsStale) {
        surfaceIsStale = false;
        readSurface(document.elementFromPoint(mouseX, mouseY));
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.body.addEventListener("mouseenter", onMouseEnter);
    document.body.addEventListener("mouseleave", onMouseLeave);

    // Delegación de eventos para el caso normal: el puntero se mueve y el
    // navegador nos dice sobre qué ha entrado.
    const handleMouseOver = (e: MouseEvent) => readSurface(e.target as Element);

    // Y el caso contrario: el puntero quieto y la página moviéndose debajo.
    const handleScroll = () => {
      surfaceIsStale = true;
    };

    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseenter", onMouseEnter);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  const skin = CURSOR_SKIN[onDarkSurface ? "dark" : "light"];
  const tone = isHovered ? skin.hover : skin.idle;
  const size = `${isHovered ? SIZE_HOVER : SIZE_IDLE}px`;

  return (
    <div
      ref={circleRef}
      aria-hidden="true"
      className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        width: size,
        height: size,
        backgroundColor: tone.background,
        border: tone.border,
        boxShadow: tone.ring,
        transition:
          "width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, opacity 0.3s ease",
        willChange: "transform",
      }}
    />
  );
}
