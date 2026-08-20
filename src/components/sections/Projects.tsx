"use client";

import React, { useRef, useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export const Projects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const baseProjects = [
    {
      id: "copreci",
      title: "Copreci",
      category: "SaaS & Web App",
      year: "2025",
      tagline: "Plataforma industrial en tiempo real",
      image: "/projects/copreci.jpg",
      aspect: "aspect-[4/5]",
      width: "min-w-[300px] sm:min-w-[380px] lg:min-w-[440px]",
      content: (
        <div
          data-cursor-surface="dark"
          className="relative w-full h-full bg-dark flex flex-col justify-between p-8 text-white rounded-none border-0 overflow-hidden group/card"
        >
          {/* Fondo de Imagen con corte recto (rounded-none border-0) */}
          <div className="absolute inset-0 z-0 bg-neutral-900 rounded-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/copreci.jpg"
              alt="Copreci"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
              className="absolute inset-0 w-full h-full object-cover opacity-70 rounded-none transition-transform duration-700 group-hover/card:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent z-10" />
          </div>

          <div className="relative z-20 flex items-center justify-between font-sans font-medium text-xs text-neutral-300 uppercase tracking-widest">
            <span>01 / 05</span>
            <span>Copreci®</span>
          </div>

          {/* Marcador guía de contenido para imagen */}
          <div className="relative z-20 my-auto p-4 rounded-none border-0 bg-white/10 backdrop-blur-md text-center">
            <span className="font-mono text-[11px] text-neutral-200">
              Captura de pantalla o mockup del Dashboard Analytics SaaS<br />
              <code className="text-brand font-bold">/public/projects/copreci.jpg</code>
            </span>
          </div>

          <div className="relative z-20 space-y-2 mb-2">
            <h3 className="text-4xl font-bold tracking-tight text-white font-sans">
              Copreci
            </h3>
            <p className="text-xs text-neutral-300 font-sans font-medium uppercase tracking-wider">
              Plataforma Analytics & Control
            </p>
          </div>

          <div className="relative z-20 pt-4 border-t border-white/10 flex items-center justify-between font-sans font-medium text-xs text-neutral-400">
            <span>SaaS Industrial</span>
            <span className="flex items-center gap-1 text-white">
              VER <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "beldarrain",
      title: "Beldarrain",
      category: "Brand Spaces & App",
      year: "2025",
      tagline: "Innovación y cuidado por las personas",
      image: "/projects/beldarrain.jpg",
      aspect: "aspect-[4/5]",
      width: "min-w-[320px] sm:min-w-[420px] lg:min-w-[480px]",
      content: (
        <div
          data-cursor-surface="dark"
          className="relative w-full h-full bg-dark flex flex-col justify-between p-8 text-white rounded-none border-0 overflow-hidden group/card"
        >
          {/* Fondo de Imagen con corte recto (rounded-none border-0) */}
          <div className="absolute inset-0 z-0 bg-neutral-900 rounded-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/beldarrain.jpg"
              alt="Beldarrain"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
              className="absolute inset-0 w-full h-full object-cover opacity-70 rounded-none transition-transform duration-700 group-hover/card:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent z-10" />
          </div>

          <div className="relative z-20 flex items-center justify-between font-sans font-medium text-xs text-neutral-300 uppercase tracking-widest">
            <span>02 / 05</span>
            <span>Beldarrain®</span>
          </div>

          {/* Marcador guía de contenido para imagen */}
          <div className="relative z-20 my-auto p-4 rounded-none border-0 bg-white/10 backdrop-blur-md text-center">
            <span className="font-mono text-[11px] text-neutral-200">
              Mockup de App Móvil / Espacio de Marca<br />
              <code className="text-brand font-bold">/public/projects/beldarrain.jpg</code>
            </span>
          </div>

          <div className="relative z-20 space-y-2 mb-2">
            <h3 className="text-4xl font-bold tracking-tight text-white font-sans">
              Beldarrain
            </h3>
            <p className="text-xs text-neutral-300 font-sans font-medium uppercase tracking-wider">
              Brand & Mobile Experience
            </p>
          </div>

          <div className="relative z-20 pt-4 border-t border-white/10 flex items-center justify-between font-sans font-medium text-xs text-neutral-400">
            <span>Brand & Mobile</span>
            <span className="flex items-center gap-1 text-white">
              VER <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "guidinn",
      title: "Guidinn Espacio",
      category: "Arquitectura",
      year: "2025",
      tagline: "Espacios de diseño y líneas puras",
      aspect: "aspect-[4/5]",
      width: "min-w-[300px] sm:min-w-[380px] lg:min-w-[440px]",
      content: (
        <div className="relative w-full h-full bg-surface-muted flex flex-col justify-between p-8 text-ink">
          <div className="flex items-center justify-between font-sans font-medium text-xs text-ink-muted uppercase tracking-widest">
            <span>03 / 05</span>
            <span>Guidinn®</span>
          </div>

          {/* Minimalist Stair & Rail Graphic */}
          <div className="my-auto space-y-4">
            <div className="h-1.5 w-full bg-accent transform -rotate-12" />
            <div className="space-y-1">
              <h3 className="text-3xl font-normal tracking-tight text-ink font-sans">
                Guidinn Espacio
              </h3>
              <p className="text-xs text-ink-muted font-sans font-medium uppercase tracking-wider">
                Arquitectura Residencial
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-line flex items-center justify-between font-sans font-medium text-xs text-ink-muted">
            <span>Interiorismo</span>
            <span className="flex items-center gap-1 text-ink font-bold">
              VER <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "orbea",
      title: "Orbea",
      category: "E-Commerce Digital",
      year: "2024",
      tagline: "Configurador digital de experiencia omnicanal",
      aspect: "aspect-[4/5]",
      width: "min-w-[320px] sm:min-w-[420px] lg:min-w-[480px]",
      content: (
        <div
          data-cursor-surface="dark"
          className="relative w-full h-full bg-dark flex flex-col justify-between p-8 text-white"
        >
          <div className="flex items-center justify-between font-sans font-medium text-xs text-neutral-400 uppercase tracking-widest">
            <span>04 / 05</span>
            <span>Orbea®</span>
          </div>

          <div className="my-auto space-y-3 text-left">
            <span className="font-extrabold text-5xl tracking-tighter text-white font-sans uppercase">
              ORBEA
            </span>
            <p className="text-sm text-neutral-300 font-sans">
              Configurador digital personalizado de alta gama.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between font-sans font-medium text-xs text-neutral-400">
            <span>Retail & Digital</span>
            <span className="flex items-center gap-1 text-white">
              VER <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "danobat",
      title: "Danobat",
      category: "Digital Twin",
      year: "2024",
      tagline: "Panel de control y gemelo digital",
      aspect: "aspect-[4/5]",
      width: "min-w-[300px] sm:min-w-[380px] lg:min-w-[440px]",
      content: (
        <div className="relative w-full h-full bg-surface-muted flex flex-col justify-between p-8 text-ink border border-line">
          <div className="flex items-center justify-between font-sans font-medium text-xs text-ink-muted uppercase tracking-widest">
            <span>05 / 05</span>
            <span>Danobat®</span>
          </div>

          <div className="my-auto space-y-2">
            <h3 className="text-3xl font-bold text-ink font-sans">
              Danobat Group
            </h3>
            <p className="text-xs text-ink-muted font-sans font-medium uppercase tracking-wider">
              Control System & IoT
            </p>
          </div>

          <div className="pt-4 border-t border-line flex items-center justify-between font-sans font-medium text-xs text-ink-muted">
            <span>Software Industrial</span>
            <span className="flex items-center gap-1 text-ink font-bold">
              VER <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      ),
    },
  ];

  // Triplicate list for infinite seamless loop
  const infiniteProjectList = [
    ...baseProjects.map((p, i) => ({ ...p, uniqueKey: `set1-${p.id}-${i}` })),
    ...baseProjects.map((p, i) => ({ ...p, uniqueKey: `set2-${p.id}-${i}` })),
    ...baseProjects.map((p, i) => ({ ...p, uniqueKey: `set3-${p.id}-${i}` })),
  ];

  // Center scroll position initial set
  useEffect(() => {
    if (scrollRef.current) {
      const oneSetWidth = scrollRef.current.scrollWidth / 3;
      scrollRef.current.scrollLeft = oneSetWidth;
    }
  }, []);

  // Seamless Infinite Scroll Wrap Handler
  const handleScrollLoop = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth } = scrollRef.current;
    const oneSetWidth = scrollWidth / 3;

    if (scrollLeft >= oneSetWidth * 2) {
      scrollRef.current.scrollLeft = scrollLeft - oneSetWidth;
    } else if (scrollLeft <= 5) {
      scrollRef.current.scrollLeft = scrollLeft + oneSetWidth;
    }
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section
      id="proyectos"
      className="w-full py-16 sm:py-24 lg:py-28 bg-canvas overflow-hidden"
    >
      <div className="w-full space-y-8 sm:space-y-12">
        {/* Section Top Header */}
        <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="font-sans text-base sm:text-lg uppercase tracking-wider text-ink-muted font-medium">
            PROYECTOS DESTACADOS
          </Reveal>
        </div>

        {/* Infinite Horizontal Scroll / Drag Strip (No Radius, No Shadows, Margin 0) */}
        <Reveal delay={120}>
          <div
            ref={scrollRef}
            onScroll={handleScrollLoop}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-none snap-x snap-mandatory px-6 sm:px-8 lg:px-12 py-2 cursor-grab active:cursor-grabbing select-none w-full"
          >
            {infiniteProjectList.map((project) => (
              <div
                key={project.uniqueKey}
                className={`snap-start ${project.width} ${project.aspect} rounded-none shadow-none transition-all duration-300 flex-shrink-0 group`}
              >
                {project.content}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Container Aligned Section Divider Line */}
        <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 pt-2">
          <div className="border-b border-neutral-300/80" />
        </div>
      </div>
    </section>
  );
};
