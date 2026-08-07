"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Retraso en ms, para escalonar varios bloques dentro de una misma sección. */
  delay?: number;
}

/**
 * Reveal
 * Envoltorio que deja el contenido oculto y desplazado hacia abajo hasta que
 * entra en pantalla; entonces sube y aparece. La animación se dispara una sola
 * vez: al volver a subir el bloque se queda visible, sin re-animar.
 *
 * El estado inicial vive en CSS (`.reveal`), así no hay salto entre el HTML
 * servido y la hidratación.
 */
export const Reveal: React.FC<RevealProps> = ({
  delay = 0,
  className,
  style,
  children,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Sin soporte de observer, el contenido se muestra sin más: nunca se queda oculto.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      // El margen inferior negativo marca la línea de disparo: el bloque se
      // revela cuando su borde superior la cruza, también si es más alto que
      // la pantalla. El margen superior enorme extiende la zona hasta el
      // infinito hacia arriba, de modo que un salto instantáneo (restauración
      // de scroll, tecla Fin, enlace ancla) que deje el bloque por encima del
      // viewport también cuenta como visible en vez de quedarse oculto.
      { threshold: 0, rootMargin: "9999px 0px -12% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms`, ...style } : style}
      {...props}
    >
      {children}
    </div>
  );
};

export default Reveal;
