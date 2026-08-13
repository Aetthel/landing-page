import React from "react";
import { ArrowUpRight, Check, Minus } from "lucide-react";
import { Service } from "@/types";
import { Reveal } from "@/components/ui/reveal";
import { ServiceDiagram } from "@/components/ui/service-diagram";
import { InteractiveHoverLink } from "@/components/ui/interactive-hover-button";
import { cn } from "@/lib/utils";

/* --------------------------------------------------------------------------
   Ficha de servicio — el capítulo largo del pliego.

   Cuatro decisiones sostienen esta pieza:

   1. Los niveles son el centro del capítulo, no una nota al pie. Cada servicio
      se contrata por escalones —paquete, complejidad o dificultad— y saber en
      cuál cae uno es exactamente la pregunta que trae al visitante aquí.
   2. Ningún nivel lleva cifra. La escalera se lee por alcance y por a quién le
      encaja, y el salto entre niveles se ve además en un medidor de tres
      tramos: información visual sin fingir un precio que no está cerrado.
   3. Lo que NO entra se imprime con el mismo cuidado que lo que entra. Es la
      parte que un cliente sin equipo técnico no sabe preguntar, y la que evita
      la discusión del mes tres.
   4. La columna de datos —para quién es, cómo se contrata, con qué— se queda
      fija y termina en el botón: se puede escribir desde cualquier punto del
      capítulo sin volver arriba.

   La ficha central se pinta sobre grafito: tres capítulos seguidos sobre el
   mismo lienzo claro se leerían como una sola parrafada, y el bloque oscuro es
   la pausa que marca que has cambiado de servicio.
   -------------------------------------------------------------------------- */

type Tone = "light" | "dark";

const TONE = {
  light: {
    section: "bg-canvas",
    rule: "border-ink/15",
    hair: "border-line",
    title: "text-ink",
    lead: "text-ink-muted",
    body: "text-ink-muted",
    label: "text-ink-muted",
    accent: "text-accent",
    frame: "border-line bg-white",
    panel: "border-line bg-white",
    excluded: "text-ink-muted",
    meterOn: "bg-accent",
    meterOff: "bg-ink/15",
    cta: "px-7 py-3 tracking-widest",
    ctaBlob: undefined,
    ctaReveal: undefined,
    ctaSurface: undefined,
  },
  dark: {
    section: "bg-dark",
    rule: "border-white/20",
    hair: "border-white/12",
    title: "text-white",
    lead: "text-neutral-300",
    body: "text-neutral-400",
    label: "text-neutral-400",
    accent: "text-brand",
    frame: "border-white/12 bg-white/[0.02]",
    panel: "border-white/12 bg-white/[0.03]",
    excluded: "text-neutral-400",
    meterOn: "bg-brand",
    meterOff: "bg-white/20",
    cta: "border-brand bg-brand px-7 py-3 text-neutral-950 tracking-widest",
    ctaBlob: "bg-white",
    ctaReveal: "text-neutral-950",
    ctaSurface: "light" as const,
  },
} as const;

/* Rótulo versalita: el mismo en toda la página, así que se escribe una vez. */
const LABEL =
  "font-sans text-[11px] font-medium uppercase tracking-[0.18em]";

/* Medidor de nivel: tres tramos, tantos encendidos como escalón ocupa el
   nivel. Es la única forma que tiene la ficha de enseñar la progresión sin
   escribir un número —ni un precio, ni un rango, ni un recuento de nodos—.
   Decorativo: el nombre del nivel y su alcance ya lo dicen todo en texto. */
const TierMeter: React.FC<{ level: number; total: number; tone: Tone }> = ({
  level,
  total,
  tone,
}) => (
  <span aria-hidden="true" className="flex items-center gap-1.5">
    {Array.from({ length: total }).map((_, i) => (
      <span
        key={i}
        className={cn(
          "h-1 w-7 rounded-full",
          i < level ? TONE[tone].meterOn : TONE[tone].meterOff
        )}
      />
    ))}
  </span>
);

interface ServiceSheetProps {
  service: Service;
  tone?: Tone;
}

export const ServiceSheet: React.FC<ServiceSheetProps> = ({
  service,
  tone = "light",
}) => {
  const t = TONE[tone];

  return (
    <section
      id={service.id}
      /* `scroll-mt` deja sitio a la Navbar flotante cuando se llega desde el
         sumario: sin él el titular queda debajo de la barra. */
      data-cursor-surface={tone === "dark" ? "dark" : undefined}
      className={cn("w-full scroll-mt-24 py-24 sm:py-32 lg:py-40", t.section)}
    >
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          {/* El ordinal es el mismo que numera la lista de servicios de la
              home: quien llega desde allí reconoce al instante que ha aterrizado
              en la ficha que había señalado. */}
          <span className={cn("block tabular-nums", LABEL, t.accent)}>
            {service.index}
          </span>

          <h2
            className={cn(
              "mt-4 text-[clamp(2.5rem,6vw,5rem)] font-normal tracking-tight leading-[1.02]",
              t.title
            )}
          >
            {service.name}
          </h2>

          <p
            className={cn(
              "mt-6 max-w-3xl text-balance text-xl sm:text-2xl lg:text-3xl font-light leading-snug tracking-tight",
              t.lead
            )}
          >
            {service.headline}
          </p>
        </Reveal>

        <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ----------------------------------------------------------------
              Columna de datos: para quién es, cómo se contrata y con qué se
              construye. Se queda fija en escritorio para acompañar a la lectura
              del detalle, y termina en el botón: la decisión de escribir puede
              llegar en cualquier punto del capítulo.

              Sin precio: las tarifas todavía no están cerradas y publicar una
              cifra provisional sería la única mentira de la página. Lo que sí
              está cerrado —el modelo de contratación— se dice aquí con todas
              las letras.
              ---------------------------------------------------------------- */}
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
            <dl className={cn("border-t", t.rule)}>
              <div className={cn("border-b py-5 space-y-2", t.hair)}>
                <dt className={cn(LABEL, t.label)}>Para quién es</dt>
                <dd
                  className={cn(
                    "font-sans text-sm font-light leading-relaxed",
                    t.body
                  )}
                >
                  {service.audience}
                </dd>
              </div>

              <div className={cn("border-b py-5 space-y-2", t.hair)}>
                <dt className={cn(LABEL, t.label)}>Cómo se contrata</dt>
                <dd
                  className={cn(
                    "font-display text-lg font-medium tracking-tight text-balance",
                    t.title
                  )}
                >
                  {service.billing}
                </dd>
              </div>

              <div className={cn("border-b py-5 space-y-3", t.hair)}>
                <dt className={cn(LABEL, t.label)}>Con qué lo construimos</dt>
                <dd className="flex flex-wrap gap-x-2 gap-y-2">
                  {service.stack.map((tool) => (
                    <span
                      key={tool}
                      className={cn(
                        "rounded-full border px-3 py-1 font-sans text-xs font-light",
                        t.hair,
                        t.body
                      )}
                    >
                      {tool}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            <div className="space-y-3">
              <InteractiveHoverLink
                href="/contacto"
                text={service.cta}
                data-cursor-surface={t.ctaSurface}
                icon={<ArrowUpRight className="h-4 w-4" />}
                className={t.cta}
                blobClassName={t.ctaBlob}
                revealClassName={t.ctaReveal}
              />
              <p
                className={cn("font-sans text-xs font-light leading-relaxed", t.body)}
              >
                Cada proyecto se presupuesta a medida después de hablarlo.
              </p>
            </div>
          </Reveal>

          {/* ----------------------------------------------------------------
              Columna de contenido: qué es, cómo se ve, cómo se escalona y qué
              te llevas.
              ---------------------------------------------------------------- */}
          <div className="lg:col-span-8 space-y-16 lg:space-y-20">
            <Reveal>
              <p
                className={cn(
                  "max-w-2xl font-sans text-base sm:text-lg font-light leading-relaxed",
                  t.body
                )}
              >
                {service.summary}
              </p>
            </Reveal>

            {/* Lámina ilustrativa, en su marco y con su etiqueta. */}
            <Reveal delay={80}>
              <figure className={cn("rounded-2xl border", t.frame)}>
                <figcaption
                  className={cn(
                    "flex items-center justify-between gap-4 border-b px-5 py-3 sm:px-6",
                    t.hair
                  )}
                >
                  <span className={cn(LABEL, t.label)}>Ejemplo ilustrativo</span>
                  <span className={cn("font-sans text-[11px] font-light", t.label)}>
                    Croquis, no un proyecto real
                  </span>
                </figcaption>
                <div className="px-5 py-7 sm:px-10 sm:py-10">
                  <ServiceDiagram kind={service.diagram} tone={tone} />
                </div>
              </figure>
            </Reveal>

            {/* --------------------------------------------------------------
                Los niveles. Columnas regladas, sin tarjetas ni comparador de
                casillas: cada escalón se lee entero de arriba abajo, con su
                medidor, para quién es y en qué se diferencia del anterior.
                -------------------------------------------------------------- */}
            <Reveal>
              <h3 className={cn("border-b pb-4", LABEL, t.rule, t.label)}>
                {service.tiersLabel}
              </h3>

              <p
                className={cn(
                  "mt-5 max-w-2xl font-sans text-sm sm:text-base font-light leading-relaxed",
                  t.body
                )}
              >
                {service.tiersIntro}
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10">
                {service.tiers.map((tier, i) => (
                  <div key={tier.name} className="space-y-4">
                    <TierMeter
                      level={i + 1}
                      total={service.tiers.length}
                      tone={tone}
                    />

                    <div className="space-y-2">
                      <h4
                        className={cn(
                          "font-display text-xl font-medium tracking-tight",
                          t.title
                        )}
                      >
                        {tier.name}
                      </h4>
                      <p
                        className={cn(
                          "font-sans text-sm font-light leading-relaxed",
                          t.lead
                        )}
                      >
                        {tier.fit}
                      </p>
                    </div>

                    <ul className={cn("border-t pt-2", t.hair)}>
                      {tier.scope.map((item) => (
                        <li
                          key={item}
                          className={cn(
                            "border-b py-3 font-sans text-sm font-light leading-relaxed",
                            t.hair,
                            t.body
                          )}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Lo que va en todos los niveles: matriz reglada, sin tarjetas. */}
            <Reveal>
              <h3 className={cn("border-b pb-4", LABEL, t.rule, t.label)}>
                Va en todos los niveles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
                {service.includes.map((item) => (
                  <div
                    key={item.title}
                    className={cn("flex gap-3 border-b py-5", t.hair)}
                  >
                    <Check
                      aria-hidden="true"
                      className={cn("mt-0.5 h-4 w-4 shrink-0", t.accent)}
                    />
                    <div className="space-y-1.5">
                      <h4
                        className={cn(
                          "font-display text-base font-medium tracking-tight",
                          t.title
                        )}
                      >
                        {item.title}
                      </h4>
                      <p
                        className={cn(
                          "font-sans text-sm font-light leading-relaxed",
                          t.body
                        )}
                      >
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Contratación complementaria: el soporte mensual de las landings,
                la doble vía de las apps. Va en panel porque no es alcance del
                proyecto, sino una decisión aparte que se toma y se paga aparte. */}
            {service.support && (
              <Reveal>
                <div
                  className={cn("rounded-2xl border p-6 sm:p-8 space-y-5", t.panel)}
                >
                  <div className="space-y-3">
                    <h3
                      className={cn(
                        "font-display text-xl sm:text-2xl font-medium tracking-tight",
                        t.title
                      )}
                    >
                      {service.support.title}
                    </h3>
                    <p
                      className={cn(
                        "max-w-2xl font-sans text-sm sm:text-base font-light leading-relaxed",
                        t.body
                      )}
                    >
                      {service.support.copy}
                    </p>
                  </div>

                  <ul className={cn("border-t", t.hair)}>
                    {service.support.items.map((item) => (
                      <li
                        key={item}
                        className={cn(
                          "flex gap-3 border-b py-3.5 font-sans text-sm font-light leading-relaxed last:border-b-0",
                          t.hair,
                          t.body
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                            t.meterOn
                          )}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            {/* Lo que queda fuera, dicho antes de presupuestar y no después. */}
            <Reveal>
              <h3 className={cn("border-b pb-4", LABEL, t.rule, t.label)}>
                Qué no incluye
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
                {service.excludes.map((item) => (
                  <li
                    key={item}
                    className={cn(
                      "flex gap-3 border-b py-4 font-sans text-sm font-light leading-relaxed",
                      t.hair,
                      t.excluded
                    )}
                  >
                    <Minus
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 opacity-40"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
