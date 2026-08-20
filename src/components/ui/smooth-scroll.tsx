"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setLenis } from "@/lib/lenis";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollProps {
  children: ReactNode;
}

/**
 * Provider de Smooth Scroll impulsado por Lenis.
 *
 * Lenis y ScrollTrigger comparten reloj a propósito. Cada uno por su cuenta
 * tiene su propio bucle: Lenis mueve la página en su rAF y ScrollTrigger
 * recalcula en el suyo, escuchando el evento nativo de scroll. Al ir
 * desacompasados, ScrollTrigger coloca las secciones fijadas con una posición
 * de scroll de un fotograma antes — y eso, sobre un `pin`, se ve como un
 * temblor constante mientras se baja.
 *
 * La solución no es tocar la animación sino el orden: un único ticker (el de
 * GSAP) que avanza Lenis, y una actualización de ScrollTrigger disparada por
 * el propio Lenis cuando ya ha movido la página.
 *
 * En táctil no se monta. Ahí el scroll nativo lo lleva el compositor del
 * navegador —fuera del hilo principal, con la inercia del sistema ya afinada
 * para el dedo—, mientras que Lenis lo devuelve al hilo principal: cada
 * fotograma pasa por JS y compite con GSAP, los observers y React. En un móvil
 * eso se nota como un scroll pastoso y con enganchones, justo lo contrario de
 * lo que el efecto busca. En escritorio sí compensa, porque ahí el scroll
 * nativo llega a saltos discretos de rueda y es Lenis quien los suaviza.
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Si el usuario prefiere movimiento reducido, respetamos la preferencia del SO
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Táctil: manda el scroll nativo. `scrollToY` ya cae en `window.scrollTo`
    // cuando no hay instancia registrada, así que la barra de marca y los
    // anclajes siguen funcionando igual.
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva exponencial suave "hielo"
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
      // El bucle lo lleva el ticker de GSAP, no Lenis.
      autoRaf: false,
    });

    // Disponible para quien tenga que mover la página desde fuera (la barra de
    // scroll de marca la usa para arrastrar).
    setLenis(lenis);

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    // GSAP cuenta en segundos y Lenis en milisegundos.
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);

    // El suavizado de lag descarta el tiempo de los fotogramas largos para
    // disimular los tirones. Con un scroll sincronizado eso es justo lo
    // contrario de lo que queremos: desincroniza a Lenis del reloj real.
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.off("scroll", onScroll);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return <>{children}</>;
}
