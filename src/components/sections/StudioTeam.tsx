"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { team } from "@/config/studio";

interface StudioTeamProps {
  hideHeader?: boolean;
}

export const StudioTeam: React.FC<StudioTeamProps> = ({ hideHeader = false }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) return;
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (index: number, e: React.MouseEvent) => {
    if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) return;
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
            >
              <MemberCard
                member={member}
                onLinksEnter={() => setHoveredIndex(null)}
                onLinksLeave={() => setHoveredIndex(index)}
              />
            </Reveal>
          ))}
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
            className="pointer-events-none fixed top-0 left-0 z-40 -translate-x-1/2 -translate-y-1/2 w-56 h-72 sm:w-64 sm:h-80 lg:w-72 lg:h-96 rounded-none overflow-hidden bg-dark border border-white/10"
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
  onLinksEnter,
  onLinksLeave,
}: {
  member: typeof team[0];
  onLinksEnter: () => void;
  onLinksLeave: () => void;
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

        <MemberLinks
          member={member}
          onEnter={onLinksEnter}
          onLeave={onLinksLeave}
        />
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------
   Los perfiles de cada persona, debajo de su descripción.

   SE FILTRAN LOS VACÍOS. Un `href=""` no es un enlace roto que se vea: es un
   enlace que recarga la página actual, y el visitante que lo pulsa cree que
   ha fallado la web. Mientras no haya URL, el perfil sencillamente no aparece;
   en cuanto se rellene en `config/studio.ts`, entra solo.

   Si una persona no tiene ninguno de los tres, no se pinta ni la fila: sin este
   corte quedaría el hueco del `space-y` del padre, un espacio en blanco bajo la
   biografía que no se explica.

   LA FILA SE PONE POR ENCIMA DE LA FOTO FLOTANTE (`z-50` contra su `z-40`).
   Retirarla al entrar aquí ya la quita de en medio, pero su desaparición es una
   animación de salida y dura unas décimas: sin este escalón, durante ese rato la
   imagen seguiría pasando por delante de los rótulos justo cuando el visitante
   va a pulsarlos.
   -------------------------------------------------------------------------- */
function MemberLinks({
  member,
  onEnter,
  onLeave,
}: {
  member: typeof team[0];
  onEnter: () => void;
  onLeave: () => void;
}) {
  const profiles = [
    { label: "LinkedIn", href: member.links.linkedin },
    { label: "Instagram", href: member.links.instagram },
    { label: "Portafolio", href: member.links.portfolio },
  ].filter((profile) => profile.href);

  if (profiles.length === 0) return null;

  return (
    <ul
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="relative z-50 flex flex-wrap items-center gap-x-6 gap-y-2 pt-1"
    >
      {profiles.map((profile) => (
        <li key={profile.label}>
          <a
            href={profile.href}
            target="_blank"
            rel="noopener noreferrer"
            /* El nombre va en la etiqueta accesible porque en la página hay dos
               «LinkedIn»: sin él, quien navegue por lista de enlaces oye el
               mismo rótulo dos veces y no sabe cuál es cuál. */
            aria-label={`${profile.label} de ${member.name}`}
            className="group/link inline-flex items-center gap-1.5 font-sans text-xs font-medium uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-ink"
          >
            {profile.label}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none" />
          </a>
        </li>
      ))}
    </ul>
  );
}
