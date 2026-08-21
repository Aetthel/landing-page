"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { team } from "@/config/studio";

interface StudioTeamProps {
  hideHeader?: boolean;
}

export const StudioTeam: React.FC<StudioTeamProps> = ({ hideHeader = false }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (index: number, e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
    setHoveredIndex(index);
  };

  const members = team;

  return (
    <section
      id="equipo"
      data-cursor="none"
      onMouseMove={handleMouseMove}
      className="relative w-full bg-canvas py-20 sm:py-28 lg:py-36 selection:bg-brand selection:text-dark overflow-hidden"
    >
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 space-y-16 lg:space-y-24">
        {!hideHeader && (
          <SectionHeader
            eyebrow="EL EQUIPO"
            title="Las dos personas que van a tocar tu proyecto."
            description="Detrás de cada entrega hay dos nombres, y son siempre los mismos. Ni subcontratas, ni rotación de perfiles, ni un equipo distinto que ejecute después lo que tú contaste en la primera reunión."
          />
        )}

        {/* Distribución limpia en 2 Columnas alineada con la estética general del Home */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-28 items-start w-full">
          {/* COLUMNA 1: Martí Castaño */}
          <div
            className="w-full cursor-pointer"
            onMouseEnter={(e) => handleMouseEnter(0, e)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <MemberCard member={members[0]} />
          </div>

          {/* COLUMNA 2: Alex Cortell */}
          <div
            className="w-full cursor-pointer"
            onMouseEnter={(e) => handleMouseEnter(1, e)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <MemberCard member={members[1]} />
          </div>
        </div>
      </div>

      {/* FOTO FLOTANTE CENTRADA EXACTAMENTE EN EL CURSOR DEL RATÓN */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            key={hoveredIndex}
            initial={{ opacity: 0, scale: 0.85, x: mousePos.x, y: mousePos.y }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mousePos.x,
              y: mousePos.y,
            }}
            exit={{ opacity: 0, scale: 0.85, x: mousePos.x, y: mousePos.y }}
            transition={{
              type: "spring",
              stiffness: 450,
              damping: 30,
              mass: 0.35,
            }}
            className="pointer-events-none fixed top-0 left-0 z-40 -translate-x-1/2 -translate-y-1/2 w-56 h-72 sm:w-64 sm:h-80 lg:w-72 lg:h-96 rounded-none overflow-hidden shadow-2xl bg-dark border border-white/10"
          >
            <MemberAvatar
              photo={members[hoveredIndex].photo}
              name={members[hoveredIndex].name}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

function MemberAvatar({
  photo,
  name,
}: {
  photo?: string;
  name: string;
}) {
  const [hasError, setHasError] = useState(!photo);

  return (
    <div className="relative w-full h-full bg-dark rounded-none overflow-hidden">
      {photo && !hasError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo}
          alt={name}
          onError={() => setHasError(true)}
          className="w-full h-full object-cover rounded-none"
        />
      ) : (
        <div className="w-full h-full bg-dark rounded-none" />
      )}
    </div>
  );
}

function MemberCard({
  member,
}: {
  member: typeof team[0];
}) {
  return (
    <div className="w-full flex flex-col justify-between py-2 space-y-6 sm:space-y-8 text-ink">
      <div className="flex flex-col space-y-4 sm:space-y-6">
        {/* Eyebrow de rol impreso */}
        <span className="block type-eyebrow text-ink-muted">
          {member.role}
        </span>

        {/* Nombre en tipografía display grande e imponente */}
        <h3 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-normal tracking-tight text-ink leading-[1.05]">
          {member.name}
        </h3>

        {/* Descripción en tamaño editorial generoso */}
        <p className="type-lead font-sans text-base sm:text-lg lg:text-xl font-light text-ink-muted leading-relaxed max-w-xl">
          {member.bio}
        </p>
      </div>
    </div>
  );
}
