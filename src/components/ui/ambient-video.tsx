"use client";

import React, { useEffect, useRef } from "react";

interface AmbientVideoProps {
  src: string;
  poster?: string;
  className?: string;
  /** Fallback remoto si el archivo local no carga. */
  fallbackSrc?: string;
}

/**
 * Vídeo decorativo en bucle que solo decodifica mientras se ve.
 *
 * Un <video autoPlay loop> sigue decodificando fotogramas aunque haya salido
 * de la pantalla: el navegador únicamente lo pausa cuando la pestaña entera
 * pasa a segundo plano. Con dos vídeos en la misma página eso significa dos
 * decodificaciones simultáneas compitiendo por el hilo de composición justo
 * mientras el scroll pide fluidez — y ahí es donde aparecen los tirones.
 *
 * Un IntersectionObserver pausa el que no se ve, así que en cada momento hay
 * como mucho un vídeo vivo.
 */
export function AmbientVideo({
  src,
  poster,
  className,
  fallbackSrc,
}: AmbientVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // play() rechaza si el elemento se desmonta a media promesa.
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      // Un margen holgado lo arranca antes de asomar, para que no se vea
      // el primer fotograma congelado al entrar en pantalla.
      { threshold: 0, rootMargin: "200px 0px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      // El decodificador de vídeo ya vive en su propia capa; declararlo evita
      // que el navegador la promocione y la tire en cada cambio de scroll.
      style={{ willChange: "transform" }}
      onError={(e) => {
        if (!fallbackSrc) return;
        const target = e.currentTarget;
        if (target.src !== fallbackSrc) target.src = fallbackSrc;
      }}
      className={className}
    />
  );
}

export default AmbientVideo;
