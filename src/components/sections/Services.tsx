"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { LogoCloud } from "@/components/ui/logo-cloud";

/* Único número del escalonado: cuántos píxeles queda el bloque de texto por
   encima del servicio activo. Es una distancia fija, así que los tres guardan
   exactamente la misma relación con su título y no pueden descompensarse entre
   sí; subirlo o bajarlo los mueve a los tres a la vez.

   Se probó antes a comprimir la distancia proporcionalmente, y el efecto
   secundario era justo ese descuadre: cuanto más abajo el servicio, más se
   elevaba su panel, y cada uno pedía un retoque distinto. */
const PANEL_LIFT = 95;

interface ServicesProps {
  hideHeader?: boolean;
}

export const Services: React.FC<ServicesProps> = ({ hideHeader = false }) => {
  /* El primer servicio ("01") está activo por defecto. Al mover el ratón,
     cambia al servicio señalado y se queda ahí activado. */
  const [activeService, setActiveService] = useState<string>("01");

  /* Sube en cada activación y se usa como `key` del titular y la descripción:
     al cambiar, React los vuelve a montar y la animación de entrada se repite. */
  const [revealKey, setRevealKey] = useState(0);

  const wake = (id: string) => {
    // Ya despierto en ese mismo servicio: no hay nada que reanimar.
    if (activeService === id) return;

    setActiveService(id);
    setRevealKey((count) => count + 1);
  };

  /* Animación del panel al cambiar entre servicios */
  const panelAnimation = (isDescription: boolean) => {
    return isDescription ? "panel-reveal-late" : "panel-reveal";
  };

  /* Escalonado: el bloque de texto baja hasta quedar a la altura del servicio
     activo. Se mide la posición real en vez de aplicar márgenes fijos. */
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelCellRef = useRef<HTMLDivElement>(null);

  /* `slug` es el ancla de la ficha correspondiente en /servicios —los ids
     viven en `config/services.ts`—. Esta lista es la única puerta de entrada a
     cada servicio: la página de servicios ya no lleva sumario propio, así que
     el recorrido es este de aquí y el enlace tiene que caer en la ficha
     concreta, no en lo alto de la página. */
  const servicesData = [
    {
      id: "01",
      number: "01",
      title: "Landing Pages",
      slug: "landing-pages",
      headline: "Convertir en segundos lo que eres",
      description:
        "Diseñamos landing pages claras, rápidas y optimizadas, pensadas para que cualquiera que las visite entienda de inmediato tu propuesta de valor y por qué elegirte a ti.",
    },
    {
      id: "02",
      number: "02",
      title: "Web Apps",
      slug: "web-apps",
      headline: "El programa que se adapta a ti.",
      description:
        "Construimos la app que tu equipo necesita. Desarrollamos aplicaciones web a medida, paneles administrativos internos y plataformas de clientes adaptadas a tu flujo operativo real.",
    },
    {
      id: "03",
      number: "03",
      title: "Automatizaciones",
      slug: "automatizaciones",
      /* El `\n` fuerza el corte de línea: lo respeta `whitespace-pre-line` en
         el titular. Los demás servicios no lo llevan y parten solos. */
      headline: "Que el trabajo repetitivo\ndeje de ser trabajo.",
      description:
        "Conectamos tus procesos e infraestructura existente para que la información fluya automáticamente. Reducimos errores humanos y liberamos horas operativas para lo que realmente genera valor.",
    },
  ];

  const panelService =
    servicesData.find((s) => s.id === activeService) || servicesData[0];

  const panelIndex = servicesData.findIndex((s) => s.id === activeService);

  const serviceCount = servicesData.length;

  useEffect(() => {
    const list = listRef.current;
    const panel = panelRef.current;
    const cell = panelCellRef.current;
    if (!list || !panel || !cell) return;

    const place = () => {
      // Por debajo de `lg` las columnas se apilan y el escalonado no aplica.
      if (!window.matchMedia("(min-width: 1024px)").matches) {
        panel.style.transform = "";
        cell.style.minHeight = "";
        return;
      }

      const listTop = list.getBoundingClientRect().top;
      const topOf = (index: number) => {
        const item = itemRefs.current[index];
        return item ? item.getBoundingClientRect().top - listTop : 0;
      };

      const placeAt = (index: number) => topOf(index) - PANEL_LIFT;

      panel.style.transform = `translateY(${placeAt(Math.max(0, panelIndex))}px)`;
      // El caso más bajo posible: último servicio, con el panel entero debajo.
      cell.style.minHeight = `${placeAt(serviceCount - 1) + panel.offsetHeight}px`;
    };

    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [panelIndex, serviceCount]);

  return (
    <section
      id="servicios"
      className="w-full py-20 sm:py-28 lg:py-36 bg-transparent"
    >
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
        {!hideHeader && (
          <SectionHeader
            eyebrow="SERVICIOS"
            title="Lo que hacemos por tu negocio."
            className="mb-12 lg:mb-16"
          />
        )}

        {/* Split Layout Container */}
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: List with Mouse Hover */}
          <div
            ref={listRef}
            className="lg:col-span-6 space-y-16 lg:space-y-20"
          >
            {servicesData.map((service, index) => {
              const isActive = activeService === service.id;
              return (
                <Link
                  key={service.id}
                  href={`/servicios#${service.slug}`}
                  ref={(node) => {
                    itemRefs.current[index] = node;
                  }}
                  onMouseEnter={() => wake(service.id)}
                  onMouseMove={() => {
                    if (activeService !== service.id) wake(service.id);
                  }}
                  className="block cursor-pointer select-none group py-2"
                >
                  <div className="space-y-2 pb-4">
                    <span
                      className={`block font-sans text-xs font-medium text-ink transition-all duration-300 ease-out ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-100 translate-y-0 lg:opacity-0 lg:-translate-y-1"
                      }`}
                    >
                      {service.number}
                    </span>

                    <div className="flex items-center justify-between gap-4">
                      <h3
                        className={`text-4xl sm:text-6xl font-normal tracking-tight transition-colors duration-500 ease-out ${
                          isActive ? "text-ink" : "text-ink lg:text-ink-muted/50"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <ArrowUpRight
                        className={`w-7 h-7 shrink-0 text-ink stroke-[1.75] transition-all duration-300 ease-out ${
                          isActive
                            ? "opacity-100 translate-x-0"
                            : "opacity-100 translate-x-0 lg:opacity-0 lg:-translate-x-2"
                        }`}
                      />
                    </div>
                  </div>

                  <span
                    className={`block h-0.5 origin-left bg-brand transition-transform duration-500 ease-out motion-reduce:transition-none ${
                      isActive ? "scale-x-100" : "scale-x-100 lg:scale-x-0"
                    }`}
                  />

                  {/* Versión móvil de la ficha: sin puntero no hay hover, así que
                      el texto del panel derecho no llegaría nunca a leerse. Aquí
                      cada servicio lleva su propio titular y descripción siempre
                      visibles, y el enlace sigue llevando a su ficha en
                      /servicios. Es `lg:hidden`: en escritorio manda el panel. */}
                  <div className="lg:hidden pt-5 space-y-3">
                    <h4 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink leading-snug whitespace-pre-line">
                      {service.headline}
                    </h4>
                    <p className="text-base text-ink-muted font-sans font-light leading-relaxed">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-sans text-xs font-medium uppercase tracking-[0.14em] text-ink">
                      Ver servicio
                      <ArrowUpRight className="w-4 h-4 stroke-[1.75]" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Right Column: Dynamic Content permanently showing last hovered service.
              Oculta por debajo de `lg`: ahí el texto ya va dentro de cada
              servicio de la lista y este panel solo repetiría uno de los tres. */}
          <div
            ref={panelCellRef}
            className="hidden lg:block lg:col-span-6 pt-4 lg:pt-8 min-h-[320px] text-center"
          >
            <div
              ref={panelRef}
              className="space-y-6 transition-transform duration-500 ease-out motion-reduce:transition-none"
            >
              <h4
                key={`headline-${revealKey}`}
                className={`${panelAnimation(false)} text-2xl sm:text-4xl font-semibold tracking-tight text-ink leading-snug whitespace-pre-line`}
              >
                {panelService.headline}
              </h4>

              <p
                key={`description-${revealKey}`}
                className={`${panelAnimation(true)} mx-auto max-w-xl text-balance text-base sm:text-lg text-ink-muted font-sans font-light leading-relaxed`}
              >
                {panelService.description}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Nube de logos / Tecnologías justo debajo de Servicios */}
        <div className="pt-16 lg:pt-24 w-full">
          <LogoCloud />
        </div>
      </div>
    </section>
  );
};
