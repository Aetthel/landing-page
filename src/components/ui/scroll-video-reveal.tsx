"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollVideoRevealProps {
  videoSrc?: string;
  posterSrc?: string;
}

/**
 * ScrollVideoReveal Component
 * Con GSAP ScrollTrigger con PIN: La pantalla se fija y el vídeo se expande
 * progresivamente de borde a borde sin elementos de texto sobrepuestos.
 */
export function ScrollVideoReveal({
  videoSrc = "/videos/showreel.mp4",
  posterSrc,
}: ScrollVideoRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=120%",
          pin: true,
          scrub: 1,
        },
      });

      tl.fromTo(
        videoWrapperRef.current,
        {
          width: "80vw",
          height: "65vh",
          borderRadius: "0rem",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.6)",
        },
        {
          width: "100vw",
          height: "100vh",
          borderRadius: "0rem",
          boxShadow: "none",
          ease: "power2.inOut",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-dark overflow-hidden flex items-center justify-center"
    >
      <div
        ref={videoWrapperRef}
        className="relative overflow-hidden bg-dark flex items-center justify-center text-white group cursor-pointer origin-center"
        style={{ width: "80vw", height: "65vh" }}
      >
        {/* Vídeo HTML5 en loop de alta definición */}
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          loop
          muted
          playsInline
          onError={(e) => {
            const target = e.currentTarget;
            if (
              target.src !==
              "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            ) {
              target.src =
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";
            }
          }}
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />

        {/* Center Play Button Overlay */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-brand text-ink flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
            <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
