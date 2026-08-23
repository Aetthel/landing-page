"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface PhotoSlide {
  id: string;
  imageSrc: string;
  alt: string;
  fallbackGradient: string;
}

/* Recuadro de partida: 80vw de ancho (10% a cada lado) y 65vh de alto (17.5% arriba/abajo) */
const INSET_START = "inset(17.5% 10%)";
const INSET_END = "inset(0% 0%)";

/* Escala inicial durante el ascenso hacia la parte superior del viewport */
const APPROACH_SCALE = 0.94;

export function ScrollGalleryReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const frame1Ref = useRef<HTMLDivElement>(null);

  const slides: PhotoSlide[] = [
    {
      id: "photo-1",
      imageSrc: "/images/home-gallery-1.jpg",
      alt: "Foto Principal Home 1",
      fallbackGradient: "from-neutral-900 via-neutral-950 to-dark",
    },
    {
      id: "photo-2",
      imageSrc: "/images/home-gallery-2.jpg",
      alt: "Foto Principal Home 2",
      fallbackGradient: "from-neutral-950 via-dark to-neutral-900",
    },
    {
      id: "photo-3",
      imageSrc: "/images/home-gallery-3.jpg",
      alt: "Foto Principal Home 3",
      fallbackGradient: "from-dark via-neutral-900 to-black",
    },
  ];

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      if (frame1Ref.current) {
        frame1Ref.current.style.clipPath = "none";
        frame1Ref.current.style.transform = "none";
      }
      return;
    }

    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      // Fase 1 — Aproximación: la ventana escala de 0.94 a 1 a medida que asoma por abajo
      gsap.fromTo(
        frame1Ref.current,
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

      // Fase 2 & 3 — Apertura de Foto 1 + Scroll horizontal por 2 fotos más
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=320%",
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      // 1. Apertura del recuadro de la Foto 1 a pantalla completa
      tl.fromTo(
        frame1Ref.current,
        { clipPath: INSET_START },
        {
          clipPath: INSET_END,
          ease: "power1.inOut",
          duration: 1,
        }
      );

      // 2. Desplazamiento horizontal para mostrar las 2 fotos siguientes
      tl.to(trackRef.current, {
        xPercent: -66.66667,
        ease: "power1.inOut",
        duration: 2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      data-cursor-surface="dark"
      className="relative w-full h-screen bg-canvas overflow-hidden"
    >
      <div
        ref={trackRef}
        className="flex w-[300vw] h-full will-change-transform"
      >
        {/* FOTO 1: Reemplazo del video (con apertura clip-path y primer slide) */}
        <div className="w-[100vw] h-full relative flex-shrink-0 flex items-center justify-center">
          <div
            ref={frame1Ref}
            className="absolute inset-0 w-full h-full bg-dark group overflow-hidden"
            style={{
              clipPath: INSET_START,
              transform: `scale(${APPROACH_SCALE})`,
              willChange: "clip-path, transform",
            }}
          >
            <SlideImage slide={slides[0]} />
          </div>
        </div>

        {/* FOTO 2: 1ª foto extra */}
        <div className="w-[100vw] h-full relative flex-shrink-0 flex items-center justify-center bg-dark overflow-hidden border-l border-white/10">
          <SlideImage slide={slides[1]} />
        </div>

        {/* FOTO 3: 2ª foto extra */}
        <div className="w-[100vw] h-full relative flex-shrink-0 flex items-center justify-center bg-dark overflow-hidden border-l border-white/10">
          <SlideImage slide={slides[2]} />
        </div>
      </div>
    </section>
  );
}

function SlideImage({ slide }: { slide: PhotoSlide }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Fondo de Imagen limpio sin textos */}
      <div className={`absolute inset-0 z-0 bg-gradient-to-br ${slide.fallbackGradient}`}>
        {!imgError && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={slide.imageSrc}
            alt={slide.alt}
            onError={() => setImgError(true)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        )}
        {/* Enrejado sutil de diseño para el recuadro cuando es el fallback */}
        {imgError && (
          <div className="absolute inset-0 bg-[radial-gradient(#b8fa4e_1px,transparent_1px)] [background-size:40px_40px] opacity-15" />
        )}
      </div>
    </div>
  );
}
