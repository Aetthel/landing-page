"use client";

import { useEffect, useRef } from "react";
import { scrollToY } from "@/lib/lenis";

/** Alto mínimo del pulgar, en px: por larga que sea la página sigue agarrable. */
const MIN_THUMB = 56;

/**
 * ScrollRail — la barra de scroll de la casa.
 *
 * Sustituye a la gris del navegador por un raíl fino con el recorrido ya hecho
 * en lima y un pulgar del mismo color que baja con la página. No es solo un
 * indicador: se puede arrastrar y se puede pinchar en cualquier punto del raíl
 * para saltar allí, igual que la nativa.
 *
 * Solo se monta con puntero fino. En táctil la barra del sistema es efímera y
 * no estorba, y un raíl arrastrable al borde de la pantalla competiría con el
 * gesto de scroll — por eso `globals.css` esconde la nativa únicamente en
 * `(pointer: fine)`, que es exactamente donde esta aparece.
 *
 * Todo lo que se mueve son `transform`: el pulgar viaja con `translate3d` y el
 * relleno crece con `scaleY`. Ninguno toca layout, así que el trabajo por
 * fotograma se queda en el compositor y el scroll no se resiente.
 */
export function ScrollRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLSpanElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rail = railRef.current;
    const thumb = thumbRef.current;
    const fill = fillRef.current;
    const count = countRef.current;
    if (!rail || !thumb || !fill || !count) return;

    let railHeight = 0;
    let thumbHeight = 0;
    let maxScroll = 0;
    let lastPercent = -1;
    let frame = 0;

    /* --- Pintado ------------------------------------------------------- */

    const draw = () => {
      const progress =
        maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
      const travel = railHeight - thumbHeight;

      thumb.style.transform = `translate3d(0, ${progress * travel}px, 0)`;
      // El relleno llega justo al canto superior del pulgar, no al centro del
      // raíl: por eso se escala contra el recorrido y no contra el alto total.
      fill.style.transform = `scaleY(${
        railHeight > 0 ? (progress * travel) / railHeight : 0
      })`;

      const percent = Math.round(progress * 100);
      if (percent !== lastPercent) {
        lastPercent = percent;
        count.textContent = `${percent}`;
      }
    };

    const measure = () => {
      const viewport = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      railHeight = rail.clientHeight;
      maxScroll = Math.max(0, docHeight - viewport);
      // Misma convención que una barra real: el pulgar mide lo que la ventana
      // ocupa dentro del documento, así su tamaño ya dice cuánto queda.
      thumbHeight = Math.min(
        railHeight,
        Math.max(MIN_THUMB, Math.round((railHeight * viewport) / docHeight))
      );

      thumb.style.height = `${thumbHeight}px`;
      // Página que cabe entera: no hay nada que recorrer, el raíl se aparta.
      rail.classList.toggle("is-hidden", maxScroll < 1);
      draw();
    };

    // Un pintado por fotograma como mucho, lleguen los eventos que lleguen.
    const schedule = (job: () => void) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        job();
      });
    };

    const onScroll = () => schedule(draw);
    const onResize = () => schedule(measure);

    /* --- Arrastre ------------------------------------------------------ */

    // Distancia entre el punto agarrado y el canto superior del pulgar: sin
    // ella, el pulgar saltaría a centrarse bajo el puntero al empezar.
    let grabOffset = 0;
    let railTop = 0;
    let dragging = false;

    const seek = (clientY: number) => {
      const travel = railHeight - thumbHeight;
      if (travel <= 0) return;
      const local = clientY - railTop - grabOffset;
      scrollToY(Math.min(1, Math.max(0, local / travel)) * maxScroll);
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0 || maxScroll < 1) return;

      const bounds = rail.getBoundingClientRect();
      railTop = bounds.top;

      // Pinchar en el pulgar lo arrastra desde donde se agarró; pinchar en el
      // raíl lo trae al puntero y sigue el arrastre desde ahí.
      const offsetInRail = event.clientY - railTop;
      const thumbTop = thumb.getBoundingClientRect().top - railTop;
      const onThumb =
        offsetInRail >= thumbTop && offsetInRail <= thumbTop + thumbHeight;

      grabOffset = onThumb ? offsetInRail - thumbTop : thumbHeight / 2;

      dragging = true;
      rail.setPointerCapture(event.pointerId);
      rail.classList.add("is-dragging");
      document.body.style.userSelect = "none";
      seek(event.clientY);
      event.preventDefault();
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      seek(event.clientY);
    };

    const endDrag = (event: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      if (rail.hasPointerCapture(event.pointerId)) {
        rail.releasePointerCapture(event.pointerId);
      }
      rail.classList.remove("is-dragging");
      document.body.style.userSelect = "";
    };

    /* --- Alta y baja ---------------------------------------------------- */

    measure();
    rail.classList.add("is-ready");

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    rail.addEventListener("pointerdown", onPointerDown);
    rail.addEventListener("pointermove", onPointerMove);
    rail.addEventListener("pointerup", endDrag);
    rail.addEventListener("pointercancel", endDrag);

    // El alto del documento cambia sin que medie un `resize`: las secciones
    // fijadas de GSAP reservan su espacio al refrescar, las imágenes acaban de
    // cargar, un panel se abre. Sin esto el pulgar mediría lo que ya no es.
    const observer = new ResizeObserver(() => schedule(measure));
    observer.observe(document.body);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      rail.removeEventListener("pointerdown", onPointerDown);
      rail.removeEventListener("pointermove", onPointerMove);
      rail.removeEventListener("pointerup", endDrag);
      rail.removeEventListener("pointercancel", endDrag);
      observer.disconnect();
      document.body.style.userSelect = "";
    };
  }, []);

  return (
    // Duplica una función del navegador que el lector de pantalla ya tiene
    // resuelta; para él no existe.
    <div ref={railRef} className="scroll-rail" aria-hidden="true">
      <span className="scroll-rail__track" />
      <span ref={fillRef} className="scroll-rail__fill" />
      <span ref={thumbRef} className="scroll-rail__thumb">
        <span ref={countRef} className="scroll-rail__count">
          0
        </span>
      </span>
    </div>
  );
}
