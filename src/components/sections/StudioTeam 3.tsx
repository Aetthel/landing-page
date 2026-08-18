import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { team, pillars } from "@/config/studio";

/* --------------------------------------------------------------------------
   El equipo — la sección que justifica la página entera.

   Un estudio de dos personas no compite por catálogo ni por tamaño: compite
   porque el cliente sabe con quién habla. Por eso las fichas dan nombre, cara
   —el monograma, hasta que haya retratos— y de qué se ocupa cada uno, en vez de
   un «equipo multidisciplinar» que no dice nada.

   Debajo, las tres promesas de trato. Van aquí y no en «valores» porque
   describen cómo es el día a día con nosotros, no en qué creemos: es la
   respuesta a «¿y esto cómo va a ir?».

   El hover no es decorativo: cada ficha se levanta, se traza el filete lima por
   arriba y el monograma se enciende. Sirve para que se lea como algo que se
   puede tocar —los enlaces a GitHub y LinkedIn están dentro—.
   -------------------------------------------------------------------------- */
export const StudioTeam: React.FC = () => {
  return (
    <section id="equipo" className="w-full bg-canvas py-24 sm:py-32 lg:py-40">
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal className="max-w-3xl">
          <span className="block type-eyebrow text-ink-muted">El equipo</span>
          <h2 className="mt-5 text-[clamp(2.25rem,5vw,4rem)] font-normal tracking-tight leading-[1.05] text-ink text-balance">
            Somos dos, y los dos escribimos el código.
          </h2>
          <p className="mt-6 max-w-xl font-sans text-base sm:text-lg font-light leading-relaxed text-ink-muted">
            No hay departamento comercial que te tome el encargo ni un equipo
            distinto que lo ejecute después. Nos cuentas el problema a nosotros y
            lo construimos nosotros, que es también la razón de que sepamos
            decirte que no cuando algo no te conviene.
          </p>
        </Reveal>

        {/* --- Las dos fichas ------------------------------------------------ */}
        <div className="mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 120} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-3xl border border-line bg-surface p-8 sm:p-10 transition duration-500 ease-out hover:-translate-y-1.5 hover:border-ink/25 hover:shadow-[0_24px_60px_rgba(26,26,30,0.10)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                {/* Filete lima trazándose por el canto superior: el mismo gesto
                    de izquierda a derecha del subrayado del hero y del foco de
                    los campos del formulario. */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
                />

                <div className="flex items-start gap-5">
                  {/* Monograma. En reposo es lienzo con filete; al pasar por
                      encima se enciende en lima y la tinta se mantiene, que es
                      la única combinación de marca que aguanta el contraste. */}
                  <span
                    aria-hidden="true"
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-line bg-canvas font-display text-xl font-medium tracking-tight text-ink transition-colors duration-500 ease-out group-hover:border-brand group-hover:bg-brand motion-reduce:transition-none"
                  >
                    {member.initials}
                  </span>

                  <div className="min-w-0 space-y-1">
                    <h3 className="type-title text-ink">{member.name}</h3>
                    <span className="block font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                      {member.role}
                    </span>
                  </div>
                </div>

                <p className="mt-6 font-sans text-sm sm:text-base font-light leading-relaxed text-ink-muted">
                  {member.bio}
                </p>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-line bg-canvas px-3 py-1 font-sans text-xs font-medium text-ink-muted transition-colors duration-300 group-hover:border-ink/20 group-hover:text-ink"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center gap-6 border-t border-line/70 pt-6">
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
                      {/* La flecha sale del sitio solo al apuntar al enlace, no
                          al pasar por la ficha entera: marca cuál de los dos. */}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none" />
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* --- Las tres promesas de trato ------------------------------------ */}
        <div className="mt-20 lg:mt-28 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.num} delay={i * 100}>
              {/* Sin tarjeta: aire y una hairline arriba. Tres cajas más debajo
                  de las dos fichas convertirían la sección en un muro de
                  recuadros. */}
              <div className="group border-t border-ink/15 pt-6">
                <span className="block font-sans text-xs font-medium tabular-nums tracking-[0.18em] text-ink/30 transition-colors duration-300 group-hover:text-accent">
                  {pillar.num}
                </span>

                <h3 className="mt-4 type-title text-ink">{pillar.title}</h3>

                {/* Trazo lima que se dibuja bajo el título al pasar por encima */}
                <span
                  aria-hidden="true"
                  className="mt-3 block h-0.5 w-10 origin-left scale-x-0 bg-brand transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
                />

                <p className="mt-4 font-sans text-sm sm:text-base font-light leading-relaxed text-ink-muted">
                  {pillar.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
