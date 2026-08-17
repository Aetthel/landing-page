"use client";

import React, { useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Coffee,
  Hourglass,
  MessageCircle,
  Plus,
} from "lucide-react";
import { Service } from "@/types";
import { Reveal } from "@/components/ui/reveal";
import { ServiceDiagram } from "@/components/ui/service-diagram";
import { InteractiveHoverLink } from "@/components/ui/interactive-hover-button";
import { cn } from "@/lib/utils";

/* --------------------------------------------------------------------------
   Ficha de servicio — el capítulo del pliego.

   El capítulo tiene mucho que contar y por eso no lo suelta todo de golpe: el
   visitante pide lo que le interesa y el resto espera.

   1. Los niveles van en pestañas. Los tres escalones puestos uno al lado del
      otro obligaban a leer quince líneas de alcance para quedarse con cinco.
      Ahora se lee un nivel entero —a quién le encaja y qué incluye— y se salta
      al siguiente con un gesto. La transición es la misma que la lista de
      servicios de la home hace al cambiar de servicio: el panel se desvanece y
      el nuevo entra por debajo.
   2. Lo que va en todos los niveles y el soporte van en desplegables cerrados.
      Es información de contrato: hace falta que esté y que se encuentre, no
      que se lea de corrido antes de saber si el servicio sirve. Sin contador
      de puntos junto al rótulo: el número no aportaba nada que el propio
      desplegable no dijera al abrirse.
   3. La columna de datos —cómo se contrata, el botón— se queda fija: se puede
      escribir desde cualquier punto del capítulo sin volver arriba.
   4. Ninguna fila lleva hairline. Las listas y las secciones se separan por
      aire, no por línea: el espaciado es el único trazo divisorio de todo el
      capítulo.

   La ficha central se pinta sobre grafito: tres capítulos seguidos sobre el
   mismo lienzo claro se leerían como una sola parrafada, y el bloque oscuro es
   la pausa que marca que has cambiado de servicio.
   -------------------------------------------------------------------------- */

type Tone = "light" | "dark";

const TONE = {
  light: {
    section: "bg-canvas",
    title: "text-ink",
    lead: "text-ink-muted",
    body: "text-ink-muted",
    label: "text-ink-muted",
    accent: "text-accent",
    frame: "border-line bg-white",
    meterOn: "bg-accent",
    meterOff: "bg-ink/15",
    tabIdle:
      "border-line bg-white/70 text-ink-muted hover:border-ink hover:text-ink",
    tabActive: "border-brand bg-brand text-ink",
    toggle: "border-line bg-white group-hover:border-brand group-hover:bg-brand",
    toggleIcon: "text-ink",
    cta: "px-7 py-3 tracking-widest",
    ctaBlob: undefined,
    ctaReveal: undefined,
    ctaSurface: undefined,
  },
  dark: {
    section: "bg-dark",
    title: "text-white",
    lead: "text-neutral-300",
    body: "text-neutral-400",
    label: "text-neutral-400",
    accent: "text-brand",
    frame: "border-white/12 bg-white/[0.02]",
    meterOn: "bg-brand",
    meterOff: "bg-white/20",
    tabIdle:
      "border-white/15 bg-white/5 text-neutral-300 hover:border-white/50 hover:text-white",
    tabActive: "border-brand bg-brand text-ink",
    toggle:
      "border-white/20 bg-white/5 group-hover:border-brand group-hover:bg-brand",
    toggleIcon: "text-white group-hover:text-ink",
    cta: "border-brand bg-brand px-7 py-3 text-neutral-950 tracking-widest",
    ctaBlob: "bg-white",
    ctaReveal: "text-neutral-950",
    ctaSurface: "light" as const,
  },
} as const;

/* Rótulo versalita: el mismo en toda la página, así que se escribe una vez. */
const LABEL = "font-sans text-[11px] font-medium uppercase tracking-[0.18em]";

/* Medidor de nivel: tres tramos, tantos encendidos como escalón ocupa el
   nivel. Es la única forma que tiene la ficha de enseñar la progresión sin
   escribir un número —ni un precio, ni un rango—. Decorativo: el nombre del
   nivel y su alcance ya lo dicen todo en texto. */
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
          "h-1 w-7 rounded-full transition-colors duration-300",
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

  /* Nivel visible. Arranca en el primero: es el escalón de entrada y el que
     más gente va a mirar. */
  const [tier, setTier] = useState(0);
  const activeTier = service.tiers[tier];

  /* Qué desplegable está abierto, si alguno. Uno cada vez: son tres listas
     largas y abrirlas todas devuelve el muro de texto que esto viene a
     deshacer. */
  const [detail, setDetail] = useState<string | null>(null);

  /* Las pestañas se recorren con las flechas, no con el tabulador: un grupo de
     pestañas es una única parada de teclado y dentro se navega con el cursor. */
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onTabKeyDown = (event: React.KeyboardEvent) => {
    const last = service.tiers.length - 1;
    let next: number | null = null;

    if (event.key === "ArrowRight") next = tier === last ? 0 : tier + 1;
    if (event.key === "ArrowLeft") next = tier === 0 ? last : tier - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;

    if (next === null) return;
    event.preventDefault();
    setTier(next);
    tabRefs.current[next]?.focus();
  };

  /* Los bloques de contrato, montados en una sola lista para que el
     desplegable no tenga que saber cuál es cuál. El soporte es opcional: no
     todos los servicios lo llevan. Lo que no incluye ya no vive aquí: salió
     de la ficha entera. */
  const details: {
    id: string;
    label: string;
    content: React.ReactNode;
  }[] = [
    {
      id: "incluye",
      label: `Va en todos los ${service.tiersLabel.toLowerCase()}`,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
          {service.includes.map((item) => (
            <div key={item.title} className="flex gap-3 py-5">
              <Check
                aria-hidden="true"
                className={cn("mt-0.5 h-4 w-4 shrink-0", t.accent)}
              />
              <div className="space-y-1.5">
                <h4
                  className={cn(
                    "font-display text-lg font-medium tracking-tight",
                    t.title
                  )}
                >
                  {item.title}
                </h4>
                <p
                  className={cn(
                    "font-sans text-base font-light leading-relaxed",
                    t.body
                  )}
                >
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    ...(service.support
      ? [
          {
            id: "soporte",
            label: service.support.title,
            content: (
              <div className="space-y-5">
                {/* `whitespace-pre-line` respeta el `\n` que algún copy trae
                    como salto de línea deliberado; el resto de espacios se
                    colapsa igual que siempre. */}
                <p
                  className={cn(
                    "max-w-2xl whitespace-pre-line text-pretty font-sans text-base sm:text-lg font-light leading-relaxed",
                    t.body
                  )}
                >
                  {service.support.copy}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
                  {service.support.items.map((item) => (
                    <li key={item.title} className="flex gap-3 py-3.5">
                      <span
                        aria-hidden="true"
                        className={cn(
                          "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                          t.meterOn
                        )}
                      />
                      {/* El detalle es opcional: sin él, el título solo hace
                          de línea —"Mantenimiento y actualizaciones
                          técnicas."—; con él, es el rótulo de arriba —"Pago
                          único"— y el detalle explica a quién encaja. */}
                      <div className="space-y-1">
                        <p
                          className={cn(
                            "font-sans text-base font-medium leading-relaxed",
                            t.title
                          )}
                        >
                          {item.title}
                        </p>
                        {item.detail && (
                          <p
                            className={cn(
                              "font-sans text-base font-light leading-relaxed",
                              t.body
                            )}
                          >
                            {item.detail}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          },
        ]
      : []),
    ...(service.extra
      ? [
          {
            id: "extra",
            label: service.extra.title,
            content: (
              <p
                className={cn(
                  "max-w-2xl text-pretty font-sans text-base sm:text-lg font-light leading-relaxed",
                  t.body
                )}
              >
                {service.extra.copy}
              </p>
            ),
          },
        ]
      : []),
  ];

  return (
    <section
      id={service.id}
      /* `scroll-mt` deja sitio a la Navbar flotante cuando se llega desde la
         lista de servicios de la home: sin él el titular queda debajo. */
      data-cursor-surface={tone === "dark" ? "dark" : undefined}
      className={cn("w-full scroll-mt-24 py-24 sm:py-32 lg:py-40", t.section)}
    >
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          {/* Sin ordinal delante del titular: el capítulo abre directamente con
              el nombre del servicio. */}
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
              Columna de datos: para quién es, cómo se contrata y con qué se
              construye. Se queda fija en escritorio para acompañar a la lectura
              del detalle, y termina en el botón: la decisión de escribir puede
              llegar en cualquier punto del capítulo.

              Sin precio: las tarifas todavía no están cerradas y publicar una
              cifra provisional sería la única mentira de la página. Lo que sí
              está cerrado —el modelo de contratación— se dice aquí con todas
              las letras.
              ---------------------------------------------------------------- */}
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32 space-y-10">
            {/* Un solo dato, sin filetes: con una fila sola las hairlines
                dibujaban una tabla de una línea, que es un marco sin nada que
                enmarcar. */}
            <div className="space-y-2">
              <h3 className={cn(LABEL, t.label)}>Cómo se contrata</h3>
              <p
                className={cn(
                  "font-display text-lg font-medium tracking-tight text-balance",
                  t.title
                )}
              >
                {service.billing}
              </p>
            </div>

            <div className="space-y-8">
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
                className={cn(
                  "font-sans text-sm font-light leading-relaxed",
                  t.body
                )}
              >
                Cada proyecto se presupuesta a medida después de la primera
                reunión. Puedes escribirnos si lo prefieres directamente a{" "}
                <a
                  href="mailto:aetthel@gmail.com"
                  className={cn(
                    "underline underline-offset-2 decoration-brand decoration-2 transition-colors",
                    t.title,
                    tone === "dark" ? "hover:text-brand" : "hover:text-accent"
                  )}
                >
                  aetthel@gmail.com
                </a>
                .
              </p>

              {/* Últimos elementos de la columna, a propósito: son lo último
                  que se lee antes de decidir. Cada icono ya dice de qué va la
                  línea, sin necesidad de rótulo. */}
              <div className="space-y-5">
                <div className="flex items-center gap-2.5">
                  <Hourglass
                    aria-hidden="true"
                    className={cn("h-4 w-4 shrink-0", t.accent)}
                  />
                  <p
                    className={cn(
                      "font-display text-base font-medium tracking-tight",
                      t.title
                    )}
                  >
                    Respondemos en 24h
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <MessageCircle
                    aria-hidden="true"
                    className={cn("h-4 w-4 shrink-0", t.accent)}
                  />
                  <p
                    className={cn(
                      "font-display text-base font-medium tracking-tight",
                      t.title
                    )}
                  >
                    Asesoría desde el primer momento
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Coffee
                    aria-hidden="true"
                    className={cn("h-4 w-4 shrink-0", t.accent)}
                  />
                  <p
                    className={cn(
                      "font-display text-base font-medium tracking-tight",
                      t.title
                    )}
                  >
                    Primera reunión sin ningún compromiso
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ----------------------------------------------------------------
              Columna de contenido: qué es, cómo se ve, en qué niveles se
              contrata y la letra pequeña, plegada.
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
                {/* El rótulo se queda —el croquis no puede pasar por un
                    trabajo real— pero sin filete: la lámina y su etiqueta son
                    una sola pieza y la línea las partía en dos. */}
                <figcaption className={cn("px-5 pt-4 sm:px-8", LABEL, t.label)}>
                  Ejemplo ilustrativo
                </figcaption>
                <div className="px-5 pt-4 pb-7 sm:px-10 sm:pb-10">
                  <ServiceDiagram kind={service.diagram} tone={tone} />
                </div>
              </figure>
            </Reveal>

            {/* --------------------------------------------------------------
                Los niveles, uno cada vez. Las pestañas llevan el nombre del
                escalón porque es lo que la gente repite luego al escribirnos
                («queríamos el estándar»), no su posición en la escalera.
                -------------------------------------------------------------- */}
            {/* `pt` propio en vez de fiarse del `space-y` del contenedor: los
                márgenes de bloque colindantes se funden en el mayor de los dos
                y no sumarían el hueco extra que separa esto del croquis. El
                padding no colapsa, así que sí lo abre. */}
            <Reveal className="pt-6 sm:pt-10">
              <h3
                className={cn(
                  "font-display text-2xl sm:text-3xl font-medium tracking-tight",
                  t.title
                )}
              >
                {service.tiersLabel}
              </h3>

              <p
                className={cn(
                  "mt-4 max-w-2xl font-sans text-sm sm:text-base font-light leading-relaxed",
                  t.body
                )}
              >
                {service.tiersIntro}
              </p>

              <div
                role="tablist"
                aria-label={`${service.tiersLabel} de ${service.name}`}
                className="mt-8 flex flex-wrap gap-2.5"
              >
                {service.tiers.map((option, i) => {
                  const active = i === tier;
                  return (
                    <button
                      key={option.name}
                      ref={(node) => {
                        tabRefs.current[i] = node;
                      }}
                      type="button"
                      role="tab"
                      id={`${service.id}-tab-${i}`}
                      aria-selected={active}
                      aria-controls={`${service.id}-tier-${i}`}
                      tabIndex={active ? 0 : -1}
                      onClick={() => setTier(i)}
                      onKeyDown={onTabKeyDown}
                      className={cn(
                        "rounded-full border px-5 py-2.5 font-sans text-[11px] font-medium uppercase tracking-wider transition-all duration-200",
                        active ? t.tabActive : t.tabIdle
                      )}
                    >
                      {option.name}
                    </button>
                  );
                })}
              </div>

              {/* `key` fuerza a React a remontar el panel al cambiar de nivel, y
                  con el remontaje se reproduce la animación de entrada. Sin él
                  el contenido se sustituiría de golpe.

                  El alcance va debajo del título, no al lado: en dos columnas
                  dejaba un hueco enorme bajo el nombre del nivel cada vez que
                  éste no traía "a quién le encaja" (los paquetes de Landing
                  pages no lo llevan), y las viñetas quedaban flotando a la
                  derecha sin relación visual con el título ni con el margen
                  del resto de la ficha. */}
              <div
                key={tier}
                role="tabpanel"
                id={`${service.id}-tier-${tier}`}
                aria-labelledby={`${service.id}-tab-${tier}`}
                tabIndex={0}
                className="mt-10"
              >
                <div className="space-y-4 panel-reveal">
                  <TierMeter
                    level={tier + 1}
                    total={service.tiers.length}
                    tone={tone}
                  />
                  <h4
                    className={cn(
                      "font-display text-2xl font-medium tracking-tight",
                      t.title
                    )}
                  >
                    {activeTier.name}
                  </h4>
                  {/* Opcional: cuando el nivel no trae "a quién le encaja", el
                      nombre y el alcance de debajo ya bastan para reconocerse
                      en él, y el párrafo no deja hueco donde iría. */}
                  {activeTier.fit && (
                    <p
                      className={cn(
                        "max-w-xl font-sans text-sm font-light leading-relaxed",
                        t.lead
                      )}
                    >
                      {activeTier.fit}
                    </p>
                  )}
                </div>

                {/* Ligero sangrado a la derecha: sin él, el arranque de cada
                    viñeta caía justo en el mismo margen que el título y las
                    dos piezas se leían como un único bloque en vez de como
                    título + su contenido. */}
                <ul className="mt-6 max-w-2xl pl-7 sm:pl-10 panel-reveal-late">
                  {activeTier.scope.map((item) => (
                    <li
                      key={item}
                      className={cn(
                        "flex gap-3 py-3.5 font-sans text-base sm:text-lg font-light leading-relaxed",
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

            {/* --------------------------------------------------------------
                La letra pequeña del contrato, plegada. Tiene que estar y tiene
                que encontrarse; no tiene que leerse de corrido antes de saber
                si el servicio sirve.
                -------------------------------------------------------------- */}
            <Reveal>
              <div className="space-y-1">
                {details.map((block) => {
                  const isOpen = detail === block.id;
                  return (
                    <div key={block.id}>
                      <button
                        type="button"
                        onClick={() => setDetail(isOpen ? null : block.id)}
                        aria-expanded={isOpen}
                        aria-controls={`${service.id}-${block.id}`}
                        className="group flex w-full items-center justify-between gap-6 py-5 text-left"
                      >
                        <span
                          className={cn(
                            "font-display text-xl sm:text-2xl font-medium tracking-tight",
                            t.title
                          )}
                        >
                          {block.label}
                        </span>

                        {/* El signo gira a aspa al abrir, como en la FAQ. */}
                        <span
                          className={cn(
                            "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                            t.toggle
                          )}
                        >
                          <Plus
                            aria-hidden="true"
                            className={cn(
                              "h-3.5 w-3.5 transition-transform duration-300 ease-out motion-reduce:transition-none",
                              t.toggleIcon,
                              isOpen ? "rotate-45" : "rotate-0"
                            )}
                          />
                        </span>
                      </button>

                      {/* La rejilla de `0fr` a `1fr` interpola hasta el alto real
                          del contenido sin medirlo en JavaScript ni fijar un
                          máximo a ojo que recorte las listas largas. */}
                      <div
                        id={`${service.id}-${block.id}`}
                        className={cn(
                          "grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none",
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        )}
                      >
                        <div className="overflow-hidden">
                          <div
                            className={cn(
                              "pb-6 transition-opacity duration-300",
                              isOpen ? "opacity-100" : "opacity-0"
                            )}
                          >
                            {block.content}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
