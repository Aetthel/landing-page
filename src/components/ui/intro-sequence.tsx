"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";
import { INTRO_HOLD, INTRO_LIFT, markBooted } from "@/lib/boot";

type Phase = "playing" | "lifting" | "gone";

/* --------------------------------------------------------------------------
   ¿Esta visita se salta la entrada?

   Lo decidió el script de arranque del layout —visita repetida en la sesión o
   movimiento reducido— y lo dejó escrito en `data-intro` del <html> antes de
   que React hidratase. O sea: es un dato que vive fuera de React y no cambia
   en toda la vida de la página. De ahí `useSyncExternalStore`, que es
   exactamente la herramienta para eso.

   La alternativa evidente —leer el atributo y meterlo en el estado desde un
   efecto— tiene dos problemas: encadena un render de más nada más montar, y
   deja un fotograma con la cortina puesta antes de quitarla. Y leerlo en el
   inicializador de `useState` tampoco vale: en el servidor no existe el
   atributo, así que servidor y cliente pintarían cosas distintas y React
   avisaría de discrepancia al hidratar.

   `useSyncExternalStore` resuelve las dos: usa la respuesta del servidor
   mientras hidrata y salta a la del navegador justo después. Sin suscripción
   real, porque el atributo ya no se vuelve a tocar.
   -------------------------------------------------------------------------- */
const noop = () => () => {};

function readSkip() {
  return document.documentElement.dataset.intro === "skip";
}

/** En el servidor nunca se salta: se pinta la cortina y ya decidirá el cliente. */
function serverSkip() {
  return false;
}

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
  const skip = useSyncExternalStore(noop, readSkip, serverSkip);

  useEffect(() => {
    // El script de arranque del layout ya decidió si esta visita ve la entrada.
    // Aquí solo queda despertar a la web: la cortina no se pinta (ver abajo).
    if (skip) {
      markBooted();
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
  }, [skip]);

  if (skip || phase === "gone") return null;

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
