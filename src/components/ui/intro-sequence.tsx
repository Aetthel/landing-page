"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { INTRO_HOLD, INTRO_LIFT, markBooted } from "@/lib/boot";

type Phase = "playing" | "lifting" | "gone";

/**
 * Cortina de entrada: sobre negro, el logotipo en lima se escribe de una
 * pasada; después la cortina sube y deja arrancar la web con sus propias
 * animaciones (ver `is-booting` en globals.css).
 *
 * El ritmo lo lleva el CSS con delays; aquí solo hay tres relojes: el que da la
 * salida, el que levanta la cortina y el que la desmonta.
 *
 * La salida no se da al montar sino en el primer frame ya hidratado. La
 * escritura anima `clip-path`, que va por el hilo principal: si arrancase
 * mientras el navegador compila el bundle, se consumiría detrás de un frame
 * congelado y el logo aparecería ya escrito, quieto.
 *
 * Para cambiar los fotogramas por un vídeo real, sustituye `.intro__stage` por
 * un <video muted playsInline autoPlay> y deja el resto igual: la cortina y el
 * arranque de la web no dependen del contenido.
 */
export const IntroSequence: React.FC = () => {
  const [phase, setPhase] = useState<Phase>("playing");
  const [running, setRunning] = useState(false);

  useEffect(() => {
    // El script de arranque del layout ya decidió si esta visita ve la entrada
    // (primera de la sesión y sin reducción de movimiento).
    if (document.documentElement.dataset.intro === "skip") {
      markBooted();
      setPhase("gone");
      return;
    }

    let lift = 0;
    let remove = 0;

    const start = window.requestAnimationFrame(() => {
      setRunning(true);

      lift = window.setTimeout(() => {
        // La web despierta cuando la cortina empieza a subir, no cuando
        // termina: así se solapan y la entrada no se siente encadenada.
        setPhase("lifting");
        markBooted();
      }, INTRO_HOLD);

      remove = window.setTimeout(
        () => setPhase("gone"),
        INTRO_HOLD + INTRO_LIFT + 150
      );
    });

    return () => {
      window.cancelAnimationFrame(start);
      window.clearTimeout(lift);
      window.clearTimeout(remove);
      // Si algo desmonta esto antes de tiempo, la web no se queda congelada.
      markBooted();
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      className={cn(
        "intro",
        running && "is-running",
        phase === "lifting" && "is-lifting"
      )}
      aria-hidden="true"
    >
      <div className="intro__stage">
        {/* El logotipo se descubre de izquierda a derecha */}
        <span className="intro__mark intro__mark--wordmark" />
        {/* El cursor que lo va escribiendo, pegado al borde del trazo */}
        <span className="intro__cursor" />
      </div>
    </div>
  );
};

export default IntroSequence;
