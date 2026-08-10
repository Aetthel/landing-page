"use client";

import { useEffect, useRef, useState } from "react";

/**
 * CustomCursor - Cursor de círculo único interactivo con física inercial (lerp).
 * Un único círculo minimalista y elegante que sigue suavemente al puntero del ratón
 * y se expande al posarse sobre elementos interactivos.
 */
export function CustomCursor() {
  const circleRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
      }
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

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.body.addEventListener("mouseenter", onMouseEnter);
    document.body.addEventListener("mouseleave", onMouseLeave);

    // Delegación de eventos para detectar elementos clicables
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.closest(
          'a, button, input, textarea, select, [role="button"], .cursor-pointer, [data-cursor-hover]'
        )
      );

      setIsHovered(isInteractive);
    };

    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseenter", onMouseEnter);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <div
      ref={circleRef}
      aria-hidden="true"
      className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        width: isHovered ? "84px" : "40px",
        height: isHovered ? "84px" : "40px",
        backgroundColor: isHovered
          ? "rgba(26, 26, 30, 0.06)"
          : "rgba(26, 26, 30, 0.03)",
        border: isHovered
          ? "1.5px solid rgba(26, 26, 30, 0.85)"
          : "1.5px solid rgba(26, 26, 30, 0.4)",
        transition:
          "width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, border-color 0.25s ease, opacity 0.3s ease",
        willChange: "transform",
      }}
    />
  );
}
