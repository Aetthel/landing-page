"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * CustomCursor - Cursor de círculo único interactivo con física inercial (lerp).
 * Un único círculo minimalista y elegante que sigue suavemente al puntero del ratón
 * y se expande al posarse sobre elementos interactivos o con data-cursor-text.
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
  const [cursorText, setCursorText] = useState<string | null>(null);

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
    let surfaceIsStale = false;

    const readSurface = (target: Element | null) => {
      if (!target) return;

      const isCursorHidden = Boolean(target.closest('[data-cursor="none"]'));
      if (isCursorHidden) {
        setIsVisible(false);
        return;
      }

      setIsVisible(true);

      const textTarget = target.closest<HTMLElement>("[data-cursor-text]");
      setCursorText(textTarget?.dataset.cursorText || null);

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
      currentX += (mouseX - currentX) * 0.25;
      currentY += (mouseY - currentY) * 0.25;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

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

    const handleMouseOver = (e: MouseEvent) => readSurface(e.target as Element);
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

  const hasText = Boolean(cursorText);
  const skin = CURSOR_SKIN[onDarkSurface ? "dark" : "light"];
  const tone = isHovered ? skin.hover : skin.idle;

  const width = hasText ? "130px" : `${isHovered ? SIZE_HOVER : SIZE_IDLE}px`;
  const height = hasText ? "46px" : `${isHovered ? SIZE_HOVER : SIZE_IDLE}px`;

  // Mismo tono del cursor pero con más opacidad y cristal esmerilado
  const backgroundColor = hasText
    ? onDarkSurface
      ? "rgba(255, 255, 255, 0.88)"
      : "rgba(26, 26, 30, 0.82)"
    : tone.background;

  const borderColor = hasText
    ? onDarkSurface
      ? "rgba(255, 255, 255, 0.95)"
      : "rgba(26, 26, 30, 0.9)"
    : tone.border;

  const textColor = onDarkSurface ? "text-ink" : "text-white";

  const boxShadow = hasText
    ? "0 12px 32px -4px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2)"
    : tone.ring;

  return (
    <div
      ref={circleRef}
      aria-hidden="true"
      className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-300 flex items-center justify-center overflow-hidden ${
        hasText ? "backdrop-blur-md" : ""
      } ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{
        width,
        height,
        backgroundColor,
        border: `1.5px solid ${borderColor}`,
        boxShadow,
        transition:
          "width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, opacity 0.3s ease",
        willChange: "transform",
      }}
    >
      <div
        className={`flex items-center justify-center gap-1.5 px-3 ${textColor} transition-all duration-200 ${
          hasText
            ? "opacity-100 scale-100"
            : "opacity-0 scale-75 pointer-events-none"
        }`}
      >
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] whitespace-nowrap">
          {cursorText}
        </span>
        <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-brand" />
      </div>
    </div>
  );
}
