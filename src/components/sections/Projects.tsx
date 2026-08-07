"use client";

import React, { useRef, useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

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
      aspect: "aspect-[4/5]",
      width: "min-w-[300px] sm:min-w-[380px] lg:min-w-[440px]",
      content: (
        <div className="relative w-full h-full bg-neutral-900 flex flex-col justify-between p-8 text-white">
          <div className="flex items-center justify-between font-mono text-xs text-neutral-400 uppercase tracking-widest">
            <span>01 / 05</span>
            <span>Copreci®</span>
          </div>
          <div className="space-y-3">
            <h3 className="text-4xl font-bold tracking-tight text-white font-sans">
              Copreci
            </h3>
            <p className="text-xs text-neutral-300 font-mono uppercase tracking-wider">
              Plataforma Analytics & Control
            </p>
          </div>
          <div className="pt-4 border-t border-neutral-800 flex items-center justify-between font-mono text-xs text-neutral-400">
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
      aspect: "aspect-[4/5]",
      width: "min-w-[320px] sm:min-w-[420px] lg:min-w-[480px]",
      content: (
        <div className="relative w-full h-full bg-neutral-950 flex flex-col justify-between p-8 text-white border border-neutral-800">
          <div className="flex items-center justify-between font-mono text-xs text-neutral-400 uppercase tracking-widest">
            <span>02 / 05</span>
            <span>Beldarrain®</span>
          </div>

          {/* Mobile Phone Visual Mockup Frame (rounded-none, shadow-none) */}
          <div className="my-auto mx-auto w-full max-w-[240px] aspect-[9/16] bg-neutral-900 border-2 border-neutral-800 p-5 flex flex-col justify-between">
            <div className="w-12 h-1 bg-neutral-700 mx-auto mb-2" />
            <div className="space-y-2 text-left">
              <span className="font-bold text-lg text-white font-sans">
                beldarrain
              </span>
              <p className="text-xs text-neutral-300 leading-snug font-sans">
                Innovación y cuidado por las personas y el entorno.
              </p>
            </div>
            <div className="h-2 w-16 bg-orange-500" />
          </div>

          <div className="pt-4 border-t border-neutral-900 flex items-center justify-between font-mono text-xs text-neutral-400">
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
        <div className="relative w-full h-full bg-[#E8E6E1] flex flex-col justify-between p-8 text-neutral-900">
          <div className="flex items-center justify-between font-mono text-xs text-neutral-500 uppercase tracking-widest">
            <span>03 / 05</span>
            <span>Guidinn®</span>
          </div>

          {/* Minimalist Stair & Rail Graphic */}
          <div className="my-auto space-y-4">
            <div className="h-1.5 w-full bg-blue-600 transform -rotate-12" />
            <div className="space-y-1">
              <h3 className="text-3xl font-normal tracking-tight text-neutral-950 font-sans">
                Guidinn Espacio
              </h3>
              <p className="text-xs text-neutral-600 font-mono uppercase tracking-wider">
                Arquitectura Residencial
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-300/80 flex items-center justify-between font-mono text-xs text-neutral-600">
            <span>Interiorismo</span>
            <span className="flex items-center gap-1 text-neutral-950 font-bold">
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
        <div className="relative w-full h-full bg-neutral-900 flex flex-col justify-between p-8 text-white">
          <div className="flex items-center justify-between font-mono text-xs text-neutral-400 uppercase tracking-widest">
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

          <div className="pt-4 border-t border-neutral-800 flex items-center justify-between font-mono text-xs text-neutral-400">
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
        <div className="relative w-full h-full bg-neutral-100 flex flex-col justify-between p-8 text-neutral-900 border border-neutral-200">
          <div className="flex items-center justify-between font-mono text-xs text-neutral-500 uppercase tracking-widest">
            <span>05 / 05</span>
            <span>Danobat®</span>
          </div>

          <div className="my-auto space-y-2">
            <h3 className="text-3xl font-bold text-neutral-950 font-sans">
              Danobat Group
            </h3>
            <p className="text-xs text-neutral-600 font-mono uppercase tracking-wider">
              Control System & IoT
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-300 flex items-center justify-between font-mono text-xs text-neutral-600">
            <span>Software Industrial</span>
            <span className="flex items-center gap-1 text-neutral-950 font-bold">
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
      className="w-full pt-6 pb-4 sm:pt-8 sm:pb-6 bg-[#FAF9F6] overflow-hidden"
    >
      <div className="w-full space-y-6">
        {/* Section Top Header */}
        <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="font-sans text-base sm:text-lg uppercase tracking-wider text-neutral-600 font-medium">
            PROYECTOS DESTACADOS
          </div>
        </div>

        {/* Infinite Horizontal Scroll / Drag Strip (No Radius, No Shadows, Margin 0) */}
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

        {/* Container Aligned Section Divider Line */}
        <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 pt-2">
          <div className="border-b border-neutral-300/80" />
        </div>
      </div>
    </section>
  );
};
