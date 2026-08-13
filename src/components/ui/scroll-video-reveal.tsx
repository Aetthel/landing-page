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

/* Escala de la ventana al asomar por abajo. La fase de aproximación la lleva
   de aquí a 1 justo cuando la sección toca el borde superior, que es donde
   arranca la apertura: el movimiento nunca se corta. */
const APPROACH_SCALE = 0.94;

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
 *
 * El efecto son dos fases encadenadas, no una:
 *
 *  1. Aproximación (`top bottom` → `top top`, sin pin): mientras la sección
 *     sube a pantalla, la ventana crece de {@link APPROACH_SCALE} a 1.
 *  2. Apertura (`top top`, con pin): la ventana se abre a sangre.
 *
 * Sin la primera, al llegar la sección la página se para en seco con la ventana
 * quieta y el corte se nota como un salto. Con ella, la ventana ya viene en
 * movimiento cuando el pin entra, y la fase 2 empieza y acaba con `power1.inOut`
 * —velocidad cero en ambos extremos—, así que ni al fijar ni al soltar hay
 * cambio brusco de ritmo. Las dos fases usan propiedades distintas (`transform`
 * y `clip-path`) para que sus tweens no se pisen en el punto de relevo.
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
      // Sin animación no hay fase de aproximación que deshaga el encogido
      // inicial: la ventana se queda en su tamaño de reposo.
      if (frameRef.current) frameRef.current.style.transform = "none";
      return;
    }

    // En móvil, mostrar u ocultar la barra del navegador cambia la altura del
    // viewport; sin esto ScrollTrigger recalcularía a media apertura y la
    // sección daría un tirón en mitad del gesto.
    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      // Fase 1 — aproximación. Termina exactamente donde empieza el pin, así
      // que en el relevo la escala ya vale 1 y no hay salto de tamaño.
      gsap.fromTo(
        frameRef.current,
        { scale: APPROACH_SCALE },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        }
      );

      // Fase 2 — apertura con la sección fijada.
      gsap.fromTo(
        frameRef.current,
        { clipPath: INSET_START },
        {
          clipPath: INSET_END,
          // Arranca y frena con velocidad cero: el pin engancha y suelta sin
          // que la apertura cambie de ritmo de golpe.
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            // Recorrido algo más largo que antes: el ease concentra velocidad
            // en el tramo central y con 120% la apertura se sentía apurada.
            end: "+=140%",
            pin: true,
            // Lenis ya suaviza el scroll. Un `scrub` numérico añadiría una
            // segunda inercia encima y el vídeo llegaría siempre tarde al
            // gesto: se siente gomoso, no fluido.
            scrub: true,
            // Sin `anticipatePin`: adelanta el pin en función de la velocidad,
            // y con el scroll de Lenis ese adelanto es justo lo que se percibe
            // como el tirón al entrar en la sección.
            invalidateOnRefresh: true,
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
        // El estado inicial va en línea para que la ventana ya salga recortada
        // en el primer pintado, antes de que GSAP tome el control. `willChange`
        // declara de antemano las dos propiedades que anima el scroll.
        style={{
          clipPath: INSET_START,
          transform: `scale(${APPROACH_SCALE})`,
          willChange: "clip-path, transform",
        }}
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
