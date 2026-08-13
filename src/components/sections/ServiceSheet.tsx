import React from "react";
import { Check, Minus } from "lucide-react";
import { Service } from "@/types";
import { Reveal } from "@/components/ui/reveal";
import { ServiceDiagram } from "@/components/ui/service-diagram";
import { cn } from "@/lib/utils";

/* --------------------------------------------------------------------------
   Ficha de servicio — el capítulo largo del pliego.

   Tres decisiones sostienen esta pieza:

   1. Los datos duros (precio de partida, plazo, qué se entrega) viven en una
      columna que se queda fija mientras el capítulo pasa: se puede leer el
      detalle sin perder de vista lo que cuesta.
   2. Lo que NO entra se imprime con el mismo cuidado que lo que entra. Es la
      parte que un cliente sin equipo técnico no sabe preguntar, y la que evita
      la discusión del mes tres.
   3. La lámina es un croquis, no una captura. Va etiquetada como ejemplo
      porque el estudio todavía no tiene trabajo publicable y ninguna pieza
      puede insinuar lo contrario.

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
    excluded: "text-ink-muted",
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
    excluded: "text-neutral-400",
  },
} as const;

interface ServiceSheetProps {
  service: Service;
  tone?: Tone;
}

export const ServiceSheet: React.FC<ServiceSheetProps> = ({
  service,
  tone = "light",
}) => {
  const t = TONE[tone];

  const facts = [
    { label: "Plazo", value: service.timeline },
    { label: "Se entrega", value: service.delivery },
  ];

  return (
    <section
      id={service.id}
      /* `scroll-mt` deja sitio a la Navbar flotante cuando se llega desde el
         sumario: sin él el titular queda debajo de la barra. */
      data-cursor-surface={tone === "dark" ? "dark" : undefined}
      className={cn(
        "w-full scroll-mt-24 py-24 sm:py-32 lg:py-40",
        t.section
      )}
    >
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          {/* El capítulo abre con el nombre del servicio y nada más: ni banda de
              cabecera ni ordinal. El precio y el plazo esperan en la columna de
              datos, que es donde se consultan. */}
          <h2
            className={cn(
              "text-[clamp(2.5rem,6vw,5rem)] font-normal tracking-tight leading-[1.02]",
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
              Columna de datos: cuándo estará y qué llega el día de la entrega.
              Se queda fija en escritorio para acompañar a la lectura del
              detalle en lugar de quedarse atrás.

              Sin precio: las tarifas todavía no están cerradas y publicar una
              cifra provisional sería la única mentira de la página. El filete
              superior cierra la tabla por arriba —con dos filas, sin él, se
              leería como un par de líneas sueltas—.
              ---------------------------------------------------------------- */}
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32">
            <dl className={cn("border-t", t.rule)}>
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className={cn(
                    "flex items-baseline justify-between gap-5 border-b py-4",
                    t.hair
                  )}
                >
                  <dt
                    className={cn(
                      "shrink-0 font-sans text-[11px] font-medium uppercase tracking-[0.18em]",
                      t.label
                    )}
                  >
                    {fact.label}
                  </dt>
                  <dd
                    className={cn(
                      "text-right text-balance font-display text-lg font-medium tracking-tight",
                      t.title
                    )}
                  >
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* ----------------------------------------------------------------
              Columna de contenido: qué es, cómo se ve y qué te llevas.
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
                  <span
                    className={cn(
                      "font-sans text-[11px] font-medium uppercase tracking-[0.18em]",
                      t.label
                    )}
                  >
                    Ejemplo ilustrativo
                  </span>
                  <span
                    className={cn("font-sans text-[11px] font-light", t.label)}
                  >
                    Croquis, no un proyecto real
                  </span>
                </figcaption>
                <div className="px-5 py-7 sm:px-10 sm:py-10">
                  <ServiceDiagram kind={service.diagram} tone={tone} />
                </div>
              </figure>
            </Reveal>

            {/* Entregables: matriz reglada, sin tarjetas. Cada fila es una
                cosa que existe el día de la entrega. */}
            <Reveal>
              <h3
                className={cn(
                  "border-b pb-4 font-sans text-[11px] font-medium uppercase tracking-[0.18em]",
                  t.rule,
                  t.label
                )}
              >
                Qué te llevas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
                {service.deliverables.map((item) => (
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

            {/* Lo que queda fuera, dicho antes de firmar y no después. */}
            <Reveal>
              <h3
                className={cn(
                  "border-b pb-4 font-sans text-[11px] font-medium uppercase tracking-[0.18em]",
                  t.rule,
                  t.label
                )}
              >
                Qué no entra en este precio
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
