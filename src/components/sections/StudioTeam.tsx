"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
            /* <Reveal> es un div con el revelado por scroll encima y reparte
               el resto de props, así que entra en el sitio exacto del div que
               había aquí, con sus manejadores intactos. Hace falta montarlo por
               ficha y no en la sección: en la home esta sección va con
               `hideHeader`, y con la cabecera se iba el único revelado que
               tenía. El escalonado hace que las dos fichas no entren a la vez.

               AQUÍ SOLO SE MARCA QUÉ FICHA ESTÁ ACTIVA. El seguimiento del ratón
               vive dentro de `MemberCard`, que mueve su propia imagen con
               muelles a partir de coordenadas relativas a su caja. La sección no
               necesita saber dónde está el puntero, así que este manejador no
               recibe el evento. */
            <Reveal
              key={member.name}
              delay={index * 120}
              className="w-full cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
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

  /* Posición del puntero dentro de la tarjeta, para el botón que lo persigue.
     Va aparte del par de arriba porque no es lo mismo: la imagen solo insinúa
     el movimiento (un 7 %) y el botón tiene que ir donde está el cursor, al
     100 %. Su muelle es bastante más tenso que el de la lámina —el botón
     persigue, no flota—, pero con algo de retraso: pegado sin inercia parece
     un trozo del cursor en vez de una pieza que lo sigue. */
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const buttonX = useSpring(pointerX, {
    stiffness: 400,
    damping: 34,
    mass: 0.4,
  });
  const buttonY = useSpring(pointerY, {
    stiffness: 400,
    damping: 34,
    mass: 0.4,
  });

  /** Puntero relativo al centro de la tarjeta. */
  const readPointer = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    return {
      x: e.clientX - (rect.left + rect.width / 2),
      y: e.clientY - (rect.top + rect.height / 2),
    };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { x, y } = readPointer(e);
    // Desplazamiento elástico suave (+/- 14px)
    mouseX.set(x * 0.07);
    mouseY.set(y * 0.07);
    pointerX.set(x);
    pointerY.set(y);
  };

  /* Al entrar hay que COLOCAR el botón, no animarlo hasta su sitio: el muelle
     conserva la posición de la última visita, así que sin este salto el botón
     aparecería en el punto por donde saliste y cruzaría la tarjeta en diagonal
     para alcanzar el cursor. `jump` fija el valor sin recorrido. */
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const { x, y } = readPointer(e);
    pointerX.set(x);
    pointerY.set(y);
    buttonX.jump(x);
    buttonY.jump(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
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
            /* La lámina es oscura sobre una sección clara, así que el cursor de
               marca tiene que invertirse a blanco mientras esté encima: gana el
               `data-cursor-surface` más cercano. */
            data-cursor-surface="dark"
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

      {/* PORTAFOLIO — cabalga sobre el cursor mientras dura el hover y lleva al
          portafolio de esta persona. Se salta a quien lo tenga vacío, como el
          resto de perfiles: la ficha de `studio.ts` avisa de que inventarse la
          URL o apuntar a la cuenta del estudio es mentir al que pulsa.

          VA FUERA DE LA LÁMINA, como hermano y no como hijo. Dentro heredaría
          el `transform` del muelle de la imagen y acabaría con dos movimientos
          encima: el suyo y el 7 % de la foto.

          Y VA CENTRADO EN EL PUNTERO, no encima con un hueco: el cursor tiene
          que caer dentro de su caja o no habría manera de pulsarlo —el ratón
          nunca llegaría a tocar un botón que huye siempre por delante—. */}
      <AnimatePresence>
        {isHovered && member.links.portfolio && (
          <motion.div
            style={{ x: buttonX, y: buttonY }}
            /* `top/left` colocan el origen en el centro de la tarjeta y el
               muelle mide desde ahí. El `-translate-1/2` que centra la píldora
               sobre el punto es propiedad `translate` de Tailwind v4, distinta
               del `transform` que escribe Framer: se componen en vez de
               pisarse. */
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 will-change-transform"
          >
            <motion.a
              href={member.links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver el portafolio de ${member.name}`}
              /* Solo opacidad y escala: cualquier desplazamiento aquí pelearía
                 con la persecución del padre. */
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              /* Negra siempre: sin cambio de color al pasar por encima. El
                 cursor va dentro de su caja por definición, así que un estado
                 hover aquí se dispararía en el mismo instante que la píldora
                 aparece —nunca se vería el color de reposo—. */
              className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full border border-neutral-950 bg-neutral-950 px-5 py-2.5 font-sans text-[11px] font-medium uppercase tracking-widest whitespace-nowrap text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
            >
              Portafolio
              <ArrowUpRight className="h-3.5 w-3.5" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
