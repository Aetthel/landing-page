"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";
import { AmbientVideo } from "@/components/ui/ambient-video";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollVideoRevealProps {
  videoSrc?: string;
  posterSrc?: string;
}

/* La ventana de partida, en porcentaje del marco a pantalla completa:
   80vw de ancho deja 10% de recorte a cada lado, 65vh de alto deja 17,5%. */
const INSET_START = "inset(17.5% 10%)";
const INSET_END = "inset(0% 0%)";

/**
 * ScrollVideoReveal
 *
 * La sección se fija y el vídeo se abre de una ventana centrada al borde de la
 * pantalla.
 *
 * La apertura se anima con `clip-path`, no con `width`/`height`. Animar la caja
 * de un <video> obliga al navegador a rehacer el layout y a reescalar la
 * textura del vídeo en cada fotograma del scroll, que es justo la combinación
 * que atasca el hilo principal. Con `clip-path` el vídeo se monta una sola vez
 * a tamaño completo y lo único que cambia es cuánto se ve de él.
 */
export function ScrollVideoReveal({
  videoSrc = "/videos/showreel.mp4",
  posterSrc,
}: ScrollVideoRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        frameRef.current,
        { clipPath: INSET_START },
        {
          clipPath: INSET_END,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=120%",
            pin: true,
            // Lenis ya suaviza el scroll. Un `scrub` numérico añadiría una
            // segunda inercia encima y el vídeo llegaría siempre tarde al
            // gesto: se siente gomoso, no fluido.
            scrub: true,
            // Prepara el pin un poco antes para que un scroll rápido no
            // provoque el salto de un fotograma al fijar la sección.
            anticipatePin: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      data-cursor-surface="dark"
      className="relative w-full h-screen bg-dark overflow-hidden"
    >
      <div
        ref={frameRef}
        className="absolute inset-0 flex items-center justify-center bg-dark text-white group cursor-pointer"
        style={{ clipPath: INSET_START }}
      >
        <AmbientVideo
          src={videoSrc}
          poster={posterSrc}
          fallbackSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Botón de reproducción centrado */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-brand text-ink flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
