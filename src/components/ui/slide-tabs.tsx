"use client";

import React, { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { animate, motion, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

/* --------------------------------------------------------------------------
   SlideTabs — sliding pill indicator.

   Una sola pastilla que se desplaza y se estira de una opción a otra siguiendo
   al puntero. Nunca aparece ni desaparece: siempre viaja.

   La pastilla **no vuelve sola** a la página activa al soltar el menú. Volver
   la hacía retroceder cada vez que el puntero se apartaba un momento, y para
   elegir otra página había que empujarla otra vez desde el principio: el
   recorrido se sentía en contra. Ahora se queda donde la dejas y solo salta por
   su cuenta al cargar y al cambiar de ruta.

   Quien señala en todo momento la página actual es la negrita del enlace, que
   no se mueve. La pastilla señala hacia dónde vas, no dónde estás.

   Diferencias respecto al original de 21st, todas por el sitio donde se monta:

    1. Tipado. El original guarda los <li> en un `useRef([])` sin tipo y pasa la
       ref al hijo con un `forwardRef` sin firma. Aquí las pestañas son enlaces
       de verdad y las refs van a un array de `HTMLAnchorElement`.
    2. Enlaces, no botones. Cada pestaña es un <Link> de Next y la seleccionada
       la decide la ruta (`usePathname`), no un estado interno: al recargar en
       /servicios la pastilla ya está en su sitio.
    3. La posición vive en motion values, no en estado de React. El original
       hace `setPosition` en cada `mouseenter`, y eso re-renderiza el menú
       entero por cada pestaña que rozas. Un motion value se actualiza fuera del
       ciclo de React: el recorrido no cuesta ni un render.
    4. Sin `mix-blend-difference` en el texto. Ese truco del original pinta el
       texto en blanco y lo invierte contra un cursor negro; sobre lima daría
       magenta. Aquí el texto va en tinta, que se lee igual sobre el cristal de
       la barra que sobre la pastilla.

   Para que el desplazamiento entre páginas se vea, quien monte esto tiene que
   seguir montado al cambiar de ruta —en esta web, la Navbar vive en el layout—.
   Si se remonta en cada página, React lo destruye a mitad de recorrido y solo
   se ve el salto.
   -------------------------------------------------------------------------- */

interface SlideTabsItem {
  label: string;
  href: string;
}

interface SlideTabsProps {
  items: SlideTabsItem[];
  className?: string;
}

/* Muelle de la pastilla: sale al instante con el gesto y se asienta sin rebote.
   Es lo que separa un desplazamiento vivo de uno arrastrado por un cronómetro. */
const SPRING = { type: "spring", stiffness: 400, damping: 34, mass: 0.85 } as const;

export const SlideTabs: React.FC<SlideTabsProps> = ({ items, className }) => {
  const pathname = usePathname();
  /* Las refs van al <li>, no al <a> de dentro. `offsetLeft` se mide contra el
     ancestro posicionado más cercano, así que midiendo el enlace —envuelto en
     un <li> con `relative`— todas las pestañas devolverían 0 y la pastilla se
     quedaría clavada en la primera cambiando solo de ancho. El <li> sí tiene
     como referencia el <ul>, que es el elemento posicionado del bloque. */
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  const left = useMotionValue(0);
  const width = useMotionValue(0);
  const opacity = useMotionValue(0);

  /* La primera colocación es un salto, no un viaje: sin esto la pastilla
     entraría deslizándose desde el margen izquierdo en cada carga. */
  const placed = useRef(false);

  const selected = items.findIndex((item) => item.href === pathname);

  /* Mide una pestaña y manda ahí la pastilla. `offsetLeft` va respecto al <ul>,
     que es el elemento posicionado, así que sirve tal cual para el `left`. */
  const moveTo = useCallback(
    (index: number, animated = true) => {
      const tab = tabsRef.current[index];
      if (!tab) return;

      const target = {
        left: tab.offsetLeft,
        width: tab.getBoundingClientRect().width,
      };

      if (!animated) {
        left.set(target.left);
        width.set(target.width);
        opacity.set(1);
        return;
      }

      animate(left, target.left, SPRING);
      animate(width, target.width, SPRING);
      animate(opacity, 1, { duration: 0.2, ease: "easeOut" });
    },
    [left, width, opacity]
  );

  /* Los dos únicos momentos en que la pastilla se mueve sin que la empuje el
     puntero: al montar el menú y al cambiar de ruta. */
  const syncToSelected = useCallback(
    (animated = true) => {
      if (selected < 0) {
        // Ninguna pestaña corresponde a esta página —la home, por ejemplo—: la
        // pastilla se retira en el sitio, sin encogerse hasta el margen.
        animate(opacity, 0, { duration: 0.2, ease: "easeOut" });
        return;
      }
      moveTo(selected, animated);
    },
    [selected, moveTo, opacity]
  );

  useEffect(() => {
    syncToSelected(placed.current);
    placed.current = true;
  }, [syncToSelected]);

  useEffect(() => {
    /* Los anchos cambian al redimensionar y cuando entra la tipografía real,
       que llega después del primer pintado. Se recoloca sin animar, y sobre la
       pestaña activa: es el único punto de referencia fiable, porque dónde
       estaba el puntero ya no se sabe. */
    const remeasure = () => syncToSelected(false);

    window.addEventListener("resize", remeasure);
    document.fonts?.ready.then(remeasure).catch(() => {});

    return () => window.removeEventListener("resize", remeasure);
  }, [syncToSelected]);

  // Sin `onMouseLeave`: al salir del menú la pastilla se queda donde está.
  return (
    <ul className={cn("relative flex items-center gap-1", className)}>
      {/* La pastilla. Va en `inset-y-0` en vez de con alto fijo para que crezca
          con la barra, y detrás del texto (`z-0` contra el `z-10` de arriba). */}
      <motion.li
        aria-hidden="true"
        style={{ left, width, opacity }}
        className="pointer-events-none absolute inset-y-0 z-0 rounded-xl bg-white shadow-sm border border-neutral-200/80"
      />

      {items.map((item, i) => {
        const isSelected = i === selected;
        return (
          /* Los eventos van en el <li>, que es lo que se mide. `focus` burbujea
             en React, así que lo recoge igual desde el enlace de dentro: el
             teclado mueve la pastilla como el ratón. Sin `blur`, por lo mismo
             que sin `mouseleave`: al soltar, se queda. */
          <li
            key={item.href}
            ref={(node) => {
              tabsRef.current[i] = node;
            }}
            onMouseEnter={() => moveTo(i)}
            onFocus={() => moveTo(i)}
            className="relative z-10"
          >
            <Link
              href={item.href}
              aria-current={isSelected ? "page" : undefined}
              className={cn(
                "block cursor-pointer rounded-xl px-4 py-2 type-body uppercase tracking-wider text-ink transition-[font-weight] duration-200",
                isSelected ? "font-bold" : "font-semibold"
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
