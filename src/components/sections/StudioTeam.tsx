"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { team } from "@/config/studio";

interface StudioTeamProps {
  hideHeader?: boolean;
}

export const StudioTeam: React.FC<StudioTeamProps> = ({
  hideHeader = false,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const members = team;

  return (
    <section
      id="equipo"
      className="relative w-full bg-canvas py-20 sm:py-28 lg:py-36 selection:bg-brand selection:text-dark overflow-visible"
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
          {members.map((member, index) => (
            /* La foto flotante va centrada en el puntero, así que tapa
               exactamente aquello a lo que apuntas: sobre la fila de perfiles
               dejaba los enlaces debajo de la imagen, invisibles e imposibles de
               acertar. Al entrar en esa fila se retira la foto, y al salir de
               ella —sin salir de la columna— vuelve.

               Hace falta devolverla a mano porque `onMouseEnter` de la columna
               ya se disparó al entrar y no se repite al moverse por dentro. */
            /* <Reveal> es un div con el revelado por scroll encima y reparte
               el resto de props, así que entra en el sitio exacto del div que
               había aquí, con sus manejadores intactos. Hace falta montarlo por
               ficha y no en la sección: en la home esta sección va con
               `hideHeader`, y con la cabecera se iba el único revelado que
               tenía. El escalonado hace que las dos fichas no entren a la vez. */
            <Reveal
              key={member.name}
              delay={index * 120}
              className="w-full cursor-pointer"
              onMouseEnter={(e) => handleMouseEnter(index, e)}
              onMouseLeave={() => setHoveredIndex(null)}
              aria-label={`Ver portafolio de ${member.name}`}
            >
              <MemberCard member={member} isHovered={hoveredIndex === index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

function MemberCard({
  member,
  isHovered,
}: {
  member: (typeof team)[0];
  isHovered: boolean;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Muelle con inercia suave para el desplazamiento sutil de la imagen
  const springX = useSpring(mouseX, { stiffness: 180, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    // Desplazamiento elástico suave (+/- 14px)
    mouseX.set(relX * 0.07);
    mouseY.set(relY * 0.07);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full flex flex-col justify-start py-2 space-y-6 sm:space-y-8 text-ink min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]"
    >
      {/* Texto visible por defecto */}
      <div className="flex flex-col space-y-4 sm:space-y-6">
        {/* Eyebrow de rol impreso */}
        <span className="block type-eyebrow text-ink-muted">{member.role}</span>

        {/* Nombre en tipografía display grande e imponente */}
        <h3 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-normal tracking-tight text-ink leading-[1.05] transition-colors group-hover:text-ink/80">
          {member.name}
        </h3>

        {/* Descripción en tamaño editorial generoso */}
        <p className="type-lead font-sans text-base sm:text-lg lg:text-xl font-light text-ink-muted leading-relaxed max-w-xl">
          {member.bio}
        </p>
      </div>

      {/* Imagen con formato original y pequeña animación inercial con el ratón */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            style={{ x: springX, y: springY }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-56 h-72 sm:w-64 sm:h-80 lg:w-72 lg:h-96 rounded-none overflow-hidden bg-dark border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)] will-change-transform"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
