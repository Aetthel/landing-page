"use client";

import { useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setLenis, getLenis } from "@/lib/lenis";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollProps {
  children: ReactNode;
}

/**
 * Provider de Smooth Scroll impulsado por Lenis.
 *
 * Sincronizado con GSAP ticker y gestiona la navegación suave a secciones (#hash)
 * y el reseteo de scroll al cambiar de página.
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Si el usuario prefiere movimiento reducido, respetamos la preferencia del SO
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Táctil: manda el scroll nativo.
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva exponencial suave
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
      autoRaf: false,
    });

    setLenis(lenis);

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Interceptar clics en enlaces con ancla (#seccion)
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      const isInternalHash =
        href.startsWith("#") ||
        (href.includes("#") && href.split("#")[0] === window.location.pathname);

      if (isInternalHash) {
        const hash = href.startsWith("#") ? href : `#${href.split("#")[1]}`;
        if (hash === "#") return;
        try {
          const target = document.querySelector(hash);
          if (target) {
            e.preventDefault();
            lenis.scrollTo(target as HTMLElement, { offset: -60, duration: 1.2 });
            history.pushState(null, "", hash);
          }
        } catch {
          // Selector no válido
        }
      }
    };

    const onHashChange = () => {
      if (window.location.hash) {
        try {
          const target = document.querySelector(window.location.hash);
          if (target) {
            lenis.scrollTo(target as HTMLElement, { offset: -60, duration: 1.2 });
          }
        } catch {
          // Selector no válido
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("hashchange", onHashChange);
      gsap.ticker.remove(raf);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.off("scroll", onScroll);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  // Manejo de cambio de ruta (reseteo a top o scroll a ancla si viene en la URL)
  useEffect(() => {
    const lenis = getLenis();
    const hash = window.location.hash;

    const timer = setTimeout(() => {
      if (hash) {
        try {
          const target = document.querySelector(hash);
          if (target) {
            if (lenis) {
              lenis.scrollTo(target as HTMLElement, { offset: -60, duration: 1.2 });
            } else {
              target.scrollIntoView({ behavior: "smooth" });
            }
            return;
          }
        } catch {
          // Selector no válido
        }
      }

      // Si no hay hash, volver a la parte superior de la nueva página
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}
