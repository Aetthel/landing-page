/**
 * Arranque de la web.
 *
 * Mientras la cortina de entrada está en pantalla, la página de debajo espera:
 * la clase `is-booting` del <html> congela las animaciones de entrada y este
 * módulo avisa a lo que se mueve por JS (la palabra rotativa) de cuándo puede
 * empezar. Así las animaciones que ya teníamos se ven enteras al levantarse la
 * cortina, en vez de haberse gastado detrás de ella.
 */

/**
 * Desde que arranca la escritura hasta que sube la cortina (ms).
 * Tiene que cubrir `--intro-wait` + `--intro-write` de globals.css (0,45 + 1,5)
 * más el respiro con la palabra ya escrita.
 */
export const INTRO_HOLD = 2600;

/** Cuánto tarda la cortina en salir de pantalla (ms). */
export const INTRO_LIFT = 700;

/** Clave de sesión: la entrada se ve una vez por pestaña, no en cada recarga. */
export const INTRO_SESSION_KEY = "aetthel:intro";

const BOOTED_EVENT = "aetthel:booted";

let booted = false;

/** Levanta el freno: quita `is-booting` y despierta a los suscriptores. */
export function markBooted(): void {
  if (booted) return;
  booted = true;
  document.documentElement.classList.remove("is-booting");
  window.dispatchEvent(new Event(BOOTED_EVENT));
}

/**
 * Ejecuta `callback` cuando la web arranca — en el acto si ya arrancó.
 * Devuelve la función para cancelar la suscripción.
 */
export function onBooted(callback: () => void): () => void {
  if (booted) {
    callback();
    return () => {};
  }

  window.addEventListener(BOOTED_EVENT, callback, { once: true });
  return () => window.removeEventListener(BOOTED_EVENT, callback);
}
