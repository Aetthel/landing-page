import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { PortraitPlate } from "@/components/ui/photo-plate";
import { publicAssetExists } from "@/lib/assets";
import { team } from "@/config/studio";

/* --------------------------------------------------------------------------
   El reparto — la sección que justifica la página entera.

   Un estudio de dos personas no compite por catálogo ni por tamaño: compite
   porque el cliente sabe exactamente con quién va a hablar. Así que el bloque
   se juega esa carta sin timidez y pone los dos nombres a tamaño de cartel,
   apagados y en fila, esperando a que alguien pase por encima.

   Entonces se enciende uno: el nombre se corre a la derecha, en el hueco que
   deja aparece el oficio con sus dos enlaces, y por la derecha entra el
   retrato centrado en la fila. La coreografía es CSS puro —cada retrato
   cuelga del centro de su propia fila—, así que esto es un componente de
   servidor: cero JavaScript enviado al navegador.

   Debajo, en voz baja, lo que el cartel no puede contar: qué hace cada uno y
   con qué. Es a propósito que sea lo tranquilo después de lo ruidoso, y es
   también donde vive el texto que no depende de que haya un ratón encima.
   -------------------------------------------------------------------------- */
export const StudioTeam: React.FC = () => {
  /* Se resuelve aquí, una vez, y el marcado ya solo distingue entre haber foto
     o no haberla. Ver la nota de imágenes en `config/studio.ts`. */
  const members = team.map((member) => ({
    ...member,
    photo: publicAssetExists(member.photo) ? member.photo : null,
  }));

  return (
    <section id="equipo" className="w-full bg-canvas py-24 sm:py-32 lg:py-40">
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal className="max-w-3xl">
          <h2 className="text-[clamp(2.25rem,5vw,4rem)] font-normal tracking-tight leading-[1.05] text-ink text-balance">
            Las dos personas que van a tocar tu proyecto.
          </h2>
          <p className="mt-6 max-w-xl font-sans text-base sm:text-lg font-light leading-relaxed text-ink-muted">
            Detrás de cada entrega hay dos nombres, y son siempre los mismos. Ni
            subcontratas, ni rotación de perfiles, ni un equipo distinto que
            ejecute después lo que tú contaste en la primera reunión.
          </p>
        </Reveal>

        {/* --- El cartel ------------------------------------------------------
            Sin `Reveal`: el bloque es más alto que la pantalla en escritorio y
            el retrato sobresale de su fila, así que animar el contenedor
            entero desplazaría piezas que están colocadas desde su centro. */}
        <ul className="roster-list mt-12 lg:mt-4">
          {members.map((member) => (
            <li key={member.name} className="roster-row">
              <span className="roster-name">{member.name}</span>

              <div className="roster-meta">
                <span className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] leading-relaxed text-ink-muted">
                  {member.role}
                </span>

                {/* Los enlaces son también la vía de teclado a esta ficha: al
                    recibir el foco encienden la fila entera (`:focus-within`),
                    y por eso el retrato y el oficio no se esconden con
                    `display: none` sino con opacidad. */}
                <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  {[
                    { label: "GitHub", href: member.github },
                    { label: "LinkedIn", href: member.linkedin },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.label} de ${member.name}`}
                      className="group/link inline-flex items-center gap-1 font-sans text-xs font-medium text-ink-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none" />
                    </a>
                  ))}
                </span>
              </div>

              <div className="roster-portrait">
                {member.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element -- ruta
                  // suelta que puede no existir todavía: el optimizador de Next
                  // devolvería un 500 en vez de dejar hueco.
                  <img
                    src={member.photo}
                    alt={`Retrato de ${member.name}`}
                    className="block aspect-3/4 w-full object-cover"
                    draggable={false}
                    loading="lazy"
                  />
                ) : (
                  <PortraitPlate
                    initials={member.initials}
                    name={member.name}
                    className="border-0"
                  />
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* --- La letra pequeña, que aquí es la que informa ------------------ */}
        <div className="mt-10 lg:mt-0 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {members.map((member, i) => (
            <Reveal key={member.name} delay={i * 100}>
              <div className="border-t border-ink/15 pt-6">
                <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-ink">
                  {member.name}
                </h3>

                <p className="mt-4 max-w-md font-sans text-sm sm:text-base font-light leading-relaxed text-ink-muted">
                  {member.bio}
                </p>

                <p className="mt-5 font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
                  {member.skills.join("  ·  ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
