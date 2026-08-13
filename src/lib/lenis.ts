import type Lenis from "lenis";

/**
 * Registro de la instancia de Lenis viva.
 *
 * Lenis mantiene su propia posición interpolada y la impone en cada fotograma.
 * Quien mueva la página por su cuenta —un `window.scrollTo` desde la barra de
 * scroll, por ejemplo— pelea con esa interpolación y el resultado es un tirón
 * en sentido contrario. La forma correcta de mover la página desde fuera es
 * pedírselo a la propia instancia, así que <SmoothScroll> la deja aquí y quien
 * la necesite la recoge.
 *
 * Devuelve `null` cuando no hay scroll suavizado (movimiento reducido): en ese
 * caso el scroll nativo es el bueno y se puede tocar directamente.
 */

let instance: Lenis | null = null;

export function setLenis(lenis: Lenis | null): void {
  instance = lenis;
}

export function getLenis(): Lenis | null {
  return instance;
}

/** Salta a una posición absoluta por la vía que corresponda. */
export function scrollToY(y: number): void {
  const lenis = getLenis();

  if (lenis) {
    // `immediate`: el arrastre de la barra ya es la posición final que pide el
    // usuario; interpolarla otra vez la haría llegar tarde al puntero.
    lenis.scrollTo(y, { immediate: true });
    return;
  }

  window.scrollTo(0, y);
}
