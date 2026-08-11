"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

/* Único número del escalonado: cuántos píxeles queda el bloque de texto por
   encima del servicio activo. Es una distancia fija, así que los tres guardan
   exactamente la misma relación con su título y no pueden descompensarse entre
   sí; subirlo o bajarlo los mueve a los tres a la vez.

   Se probó antes a comprimir la distancia proporcionalmente, y el efecto
   secundario era justo ese descuadre: cuanto más abajo el servicio, más se
   elevaba su panel, y cada uno pedía un retoque distinto. */
const PANEL_LIFT = 95;

export const Services: React.FC = () => {
  /* `null` = ninguno activo: la lista arranca dormida y vuelve a dormirse al
     salir el puntero. Solo el hover despierta un servicio. */
  const [activeService, setActiveService] = useState<string | null>(null);

  /* El último servicio señalado. Sobrevive a que `activeService` vuelva a
     `null`, y es lo que permite que el panel se desvanezca mostrando todavía su
     contenido en lugar de quedarse en blanco de golpe. */
  const [lastService, setLastService] = useState("01");

  /* Sube en cada activación y se usa como `key` del titular y la descripción:
     al cambiar, React los vuelve a montar y la animación de entrada se repite.
     Sin esto, volver a señalar el mismo servicio no reproduciría nada. */
  const [revealKey, setRevealKey] = useState(0);

  const wake = (id: string) => {
    // Ya despierto en ese mismo servicio: no hay nada que reanimar.
    if (activeService === id) return;

    setActiveService(id);
    setLastService(id);
    setRevealKey((count) => count + 1);
  };

  /* Clase de animación del panel. El caso de la carga inicial va aparte: con
     `panel-fade-out` reproduciría un fundido de visible a invisible, y el texto
     asomaría un instante al cargar la página antes de esconderse. Mientras no
     se haya señalado nada, se esconde sin animar. */
  const panelAnimation = (isDescription: boolean) => {
    if (activeService !== null) {
      return isDescription ? "panel-reveal-late" : "panel-reveal";
    }
    return revealKey === 0 ? "opacity-0" : "panel-fade-out";
  };

  /* Escalonado: el bloque de texto baja hasta quedar a la altura del servicio
     activo. Se mide la posición real en vez de aplicar márgenes fijos, porque
     el elemento activo crece (añade el número y el filete) y desplaza a los
     que tiene debajo: unos valores fijos se descuadrarían en cuanto cambias. */
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelCellRef = useRef<HTMLDivElement>(null);

  const servicesData = [
    {
      id: "01",
      number: "01",
      title: "Landing Pages",
      headline: "Convertir en segundos lo que eres",
      description:
        "Diseñamos landing pages claras, rápidas y optimizadas, pensadas para que cualquiera que las visite entienda de inmediato tu propuesta de valor y por qué elegirte a ti.",
    },
    {
      id: "02",
      number: "02",
      title: "Apps a Medida",
      headline: "El programa que se adapta a ti.",
      description:
        "Construimos la app que tu equipo necesita. Desarrollamos aplicaciones web a medida, paneles administrativos internos y plataformas de clientes adaptadas a tu flujo operativo real.",
    },
    {
      id: "03",
      number: "03",
      title: "Automatizaciones",
      /* El `\n` fuerza el corte de línea: lo respeta `whitespace-pre-line` en
         el titular. Los demás servicios no lo llevan y parten solos. */
      headline: "Que el trabajo repetitivo\ndeje de ser trabajo.",
      description:
        "Conectamos tus procesos e infraestructura existente para que la información fluya automáticamente. Reducimos errores humanos y liberamos horas operativas para lo que realmente genera valor.",
    },
  ];

  /* El panel se pinta siempre con el último servicio señalado, no con el
     activo: así conserva su contenido mientras se desvanece. */
  const panelService =
    servicesData.find((s) => s.id === lastService) || servicesData[0];

  const panelIndex = servicesData.findIndex((s) => s.id === lastService);

  const serviceCount = servicesData.length;

  /* La medida se escribe directamente en el DOM en vez de guardarse en estado:
     es una sincronización con el layout, y pasarla por `setState` obligaría a
     un render extra en cada cambio de servicio solo para colocar el bloque. */
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
      /* El `pb` largo deja correr el lienzo claro un buen rato antes del footer
         oscuro: el contraste llega como una pausa buscada y no como un corte
         encima del último servicio. */
      className="w-full pt-24 pb-40 sm:pt-32 sm:pb-56 lg:pt-40 lg:pb-80 bg-canvas"
    >
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Split Layout Container */}
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: List with Mouse Hover (onMouseEnter & onMouseMove) */}
          <div
            ref={listRef}
            className="lg:col-span-6 space-y-12 lg:space-y-20"
            onMouseLeave={() => setActiveService(null)}
          >
            {servicesData.map((service, index) => {
              const isActive = activeService === service.id;
              return (
                <div
                  key={service.id}
                  ref={(node) => {
                    itemRefs.current[index] = node;
                  }}
                  onMouseEnter={() => wake(service.id)}
                  onMouseMove={() => {
                    if (activeService !== service.id) wake(service.id);
                  }}
                  className="cursor-pointer select-none group py-2"
                >
                  {/* Una sola estructura para los dos estados. Antes se
                      alternaban dos bloques distintos, así que React
                      desmontaba uno y montaba el otro y no había nada que
                      interpolar: de ahí el corte seco. Ahora los nodos son
                      siempre los mismos y solo cambian color, opacidad y
                      desplazamiento, que el navegador sí sabe transicionar.

                      El número y la flecha se reservan su sitio aunque estén
                      invisibles: si aparecieran y desaparecieran del flujo, el
                      alto del elemento cambiaría y los servicios de abajo
                      darían un salto en cada hover. */}
                  <div className="space-y-2 pb-4">
                    <span
                      className={`block font-sans text-xs font-medium text-ink transition-all duration-300 ease-out ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-1"
                      }`}
                    >
                      {service.number}
                    </span>

                    <div className="flex items-center justify-between gap-4">
                      <h3
                        className={`text-4xl sm:text-6xl font-normal tracking-tight transition-colors duration-500 ease-out ${
                          isActive ? "text-ink" : "text-ink-muted/50"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <ArrowUpRight
                        className={`w-7 h-7 shrink-0 text-ink stroke-[1.75] transition-all duration-300 ease-out ${
                          isActive
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-2"
                        }`}
                      />
                    </div>
                  </div>

                  {/* El filete lima se traza de izquierda a derecha en vez de
                      encenderse de golpe */}
                  <span
                    className={`block h-0.5 origin-left bg-brand transition-transform duration-500 ease-out motion-reduce:transition-none ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Content updated on hover */}
          {/* `min-h` reserva el alto para que la columna no dé un salto al
              cambiar entre servicios con descripciones de distinta longitud;
              `reservedHeight` lo amplía a lo que exige el escalonado. */}
          <div
            ref={panelCellRef}
            className="lg:col-span-6 pt-4 lg:pt-8 min-h-[320px] text-center"
          >
            {/* Con la lista dormida el panel se desvanece pero sigue ocupando
                su sitio: si se desmontara, la sección encogería y la página
                pegaría un salto cada vez que el puntero sale de la lista.
                Este contenedor solo se encarga del `transform` que lo coloca a
                la altura del servicio; la aparición y la desaparición las
                llevan el titular y la descripción por separado. */}
            <div
              ref={panelRef}
              aria-hidden={activeService === null}
              className="space-y-6 transition-transform duration-500 ease-out motion-reduce:transition-none"
            >
              {/* Sin reserva de alto ni centrado: el titular arranca siempre a
                  la misma altura y la separación con la descripción es la del
                  `space-y-6`, la misma tenga una línea o dos. */}
              <h4
                key={`headline-${revealKey}`}
                className={`${panelAnimation(false)} text-2xl sm:text-4xl font-semibold tracking-tight text-ink leading-snug whitespace-pre-line`}
              >
                {panelService.headline}
              </h4>

              {/* El ancho máximo fija la medida de línea y `mx-auto` centra el
                  bloque; sin ellos el párrafo se estira hasta el borde de la
                  columna y cada descripción rompe a un ancho distinto.
                  `text-balance` reparte las palabras entre las líneas para que
                  ninguna quede mucho más corta que las demás. */}
              <p
                key={`description-${revealKey}`}
                className={`${panelAnimation(true)} mx-auto max-w-xl text-balance text-base sm:text-lg text-ink-muted font-sans font-light leading-relaxed`}
              >
                {panelService.description}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
