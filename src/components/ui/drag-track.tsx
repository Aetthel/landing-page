"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ShotPlate } from "@/components/ui/photo-plate";
import { cn } from "@/lib/utils";

/* --------------------------------------------------------------------------
   La tira del taller — se arrastra con el ratón, se desliza con el dedo.

   Por debajo es un contenedor con `overflow-x: auto`, y eso es lo importante:
   el dedo, la rueda del trackpad, las flechas del teclado, la búsqueda en
   página y el lector de pantalla ya funcionan sin escribir una línea. Lo único
   que el navegador no da en escritorio es agarrar y tirar con el ratón, y eso
   es lo que añade este componente moviendo `scrollLeft`.

   Tres detalles que se notan aunque no se vean:

   - El arrastre solo se intercepta cuando el puntero es un ratón. En táctil el
     scroll nativo tiene inercia, rebote y cancelación; imitarlo desde JS sale
     peor siempre.
   - Al soltar, la tira sigue un poco por su cuenta. La velocidad se mide sobre
     los últimos milisegundos, no sobre todo el gesto, para que un tirón final
     mande sobre un arrastre lento previo.
   - El recorrido se pinta en el filete de abajo. Es lo que dice que hay más
     fotos a la derecha en una tira que, por diseño, se sale del encuadre.
   -------------------------------------------------------------------------- */

export interface DragTrackItem {
  /** Ruta de la foto, o `null` si el archivo todavía no está en `public/`. */
  src: string | null;
  alt: string;
  caption: string;
  ar: number;
}

interface DragTrackProps {
  items: DragTrackItem[];
  /** Nombre de la región para lector de pantalla y navegación por teclado. */
  label: string;
  /** Texto de la pastilla de ayuda; desaparece al primer movimiento. */
  hint?: string;
  className?: string;
}

/** Rozamiento por fotograma de la inercia al soltar. */
const FRICTION = 0.94;
/** Por debajo de esto ya no se aprecia movimiento: se corta y se acabó. */
const MIN_VELOCITY = 0.08;

export const DragTrack: React.FC<DragTrackProps> = ({
  items,
  label,
  hint = "Arrastra",
  className,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [moved, setMoved] = useState(false);

  /* Todo el estado del gesto vive en una `ref`: cambia en cada `pointermove` y
     pasarlo por el estado de React repintaría la tira decenas de veces por
     segundo para no cambiar ni un píxel del marcado. */
  const gesture = useRef({
    active: false,
    startX: 0,
    startScroll: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
  });
  const inertia = useRef<number | null>(null);

  const stopInertia = useCallback(() => {
    if (inertia.current !== null) {
      cancelAnimationFrame(inertia.current);
      inertia.current = null;
    }
  }, []);

  /* El progreso se escribe como variable CSS en vez de como estado: es una
     propiedad puramente visual y así el scroll no arrastra un render de React
     detrás en cada fotograma. */
  const syncRail = useCallback(() => {
    const track = trackRef.current;
    const rail = railRef.current;
    if (!track || !rail) return;

    const travel = track.scrollWidth - track.clientWidth;
    const progress = travel > 0 ? track.scrollLeft / travel : 1;
    rail.style.setProperty("--progress", String(Math.min(1, Math.max(0, progress))));
  }, []);

  useEffect(() => {
    syncRail();

    // Un cambio de ancho cambia cuánto recorrido queda: el filete tiene que
    // enterarse aunque nadie haya hecho scroll.
    const track = trackRef.current;
    if (!track || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(syncRail);
    observer.observe(track);
    return () => observer.disconnect();
  }, [syncRail]);

  useEffect(() => stopInertia, [stopInertia]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    // El dedo y el lápiz ya tienen su propio scroll, con inercia y rebote del
    // sistema. Solo se toma el control con ratón.
    if (event.pointerType !== "mouse") return;

    const track = trackRef.current;
    if (!track) return;

    stopInertia();
    gesture.current = {
      active: true,
      startX: event.clientX,
      startScroll: track.scrollLeft,
      lastX: event.clientX,
      lastTime: event.timeStamp,
      velocity: 0,
    };

    track.setPointerCapture(event.pointerId);
    track.dataset.dragging = "true";
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const state = gesture.current;
    const track = trackRef.current;
    if (!state.active || !track) return;

    track.scrollLeft = state.startScroll - (event.clientX - state.startX);

    const elapsed = event.timeStamp - state.lastTime;
    if (elapsed > 0) {
      // Media ponderada: el gesto reciente pesa más que el acumulado, que es
      // lo que hace que un latigazo final se sienta como un latigazo.
      const instant = (event.clientX - state.lastX) / elapsed;
      state.velocity = state.velocity * 0.7 + instant * 0.3;
      state.lastX = event.clientX;
      state.lastTime = event.timeStamp;
    }

    if (Math.abs(event.clientX - state.startX) > 8) setMoved(true);
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const state = gesture.current;
    const track = trackRef.current;
    if (!state.active || !track) return;

    state.active = false;
    delete track.dataset.dragging;
    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }

    const calm =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (calm) return;

    let velocity = state.velocity * 16; // px por fotograma a 60 Hz
    const glide = () => {
      velocity *= FRICTION;
      if (Math.abs(velocity) < MIN_VELOCITY) {
        inertia.current = null;
        return;
      }
      track.scrollLeft -= velocity;
      inertia.current = requestAnimationFrame(glide);
    };

    if (Math.abs(velocity) >= MIN_VELOCITY) {
      inertia.current = requestAnimationFrame(glide);
    }
  };

  const handleScroll = () => {
    syncRail();
    if (!moved) setMoved(true);
  };

  return (
    <div className={cn("relative", className)}>
      <div
        ref={trackRef}
        className="wtrack"
        role="region"
        aria-label={label}
        // Un contenedor con scroll tiene que poder recibir el foco para que las
        // flechas lo muevan; Chrome no se lo da solo si no hay nada enfocable
        // dentro, y aquí no lo hay.
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onScroll={handleScroll}
      >
        {items.map((item) => (
          <figure
            key={item.src ?? item.caption}
            className="wtrack-item"
            style={{ "--ar": item.ar } as React.CSSProperties}
          >
            {item.src ? (
              // eslint-disable-next-line @next/next/no-img-element -- ruta suelta
              // que puede no existir todavía; el optimizador de Next daría 500.
              <img src={item.src} alt={item.alt} draggable={false} loading="lazy" />
            ) : (
              <ShotPlate caption={item.caption} className="rounded-none border-0" />
            )}
          </figure>
        ))}
      </div>

      {/* Recorrido restante. Decorativo: la información que da —que hay más a
          la derecha— ya la da el propio contenedor con scroll a quien navega
          con teclado o lector de pantalla. */}
      <div ref={railRef} className="wtrack-rail mt-6" aria-hidden="true">
        <span />
      </div>

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none mt-4 flex items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted transition-opacity duration-500",
          moved ? "opacity-0" : "opacity-100"
        )}
      >
        <DragGlyph />
        {hint}
      </div>
    </div>
  );
};

/** Dos puntas de flecha enfrentadas: el gesto, dibujado, no un emoji. */
const DragGlyph: React.FC = () => (
  <svg
    viewBox="0 0 24 12"
    className="h-3 w-6 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 2 L1 6 L4 10" />
    <path d="M20 2 L23 6 L20 10" />
    <path d="M8 6 H16" />
  </svg>
);

export default DragTrack;
