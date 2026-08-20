"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

/* --------------------------------------------------------------------------
   Auroras (21st.dev) — adaptado a este proyecto.

   Cuatro cambios respecto al original, todos obligados:

    1. El envoltorio de <AuroraBackground> es un <div>, no un <main>. La página
       ya monta su propio <main> y anidar uno dentro de otro es HTML inválido.
       El original no le da estilo, así que no cambia nada a la vista.
    2. Un solo color. El original recorre cinco tonos —azul, índigo, violeta—
       que las variables `var(--blue-500)` y compañía publicaba el plugin
       `addVariablesForColors` del `tailwind.config.js`. Aquí, con Tailwind v4 y
       sin ese archivo, la paleta se declara a mano en `globals.css` y es la
       lima de marca en tres opacidades: entre parada y parada cambia la
       transparencia, nunca el tono.
    3. Ni celosía blanca ni `invert`. Eran las dos piezas que hacían que el
       efecto solo funcionase sobre fondo claro; aquí los huecos entre vetas son
       transparentes, así que la capa se comporta igual sobre blanco que sobre
       negro.
    4. La capa animada vive en <AuroraLayer>, que usan los dos componentes de
       abajo: el envoltorio de pantalla completa y el fondo fijo de la web.

   Nada de esto se mueve con el scroll: el degradado se anima solo con
   `background-position` y la capa de refuerzo va con `background-attachment:
   fixed`, así que el trabajo por fotograma no toca layout.
   -------------------------------------------------------------------------- */

interface AuroraLayerProps {
  showRadialGradient?: boolean;
}

/**
 * La capa de degradados en sí. Rellena a su contenedor posicionado.
 *
 * Dos copias del mismo haz de vetas, una quieta y otra recorriéndola, sumadas
 * con `plus-lighter`: sumar dos limas da lima más brillante donde se cruzan,
 * que es de donde sale la sensación de pliegue. Es la razón de no usar el
 * `difference` del original —restar dos colores devuelve un tercero, y ahí es
 * donde el efecto se iba del lima—.
 *
 * La celosía va con `transparent`, no con blanco: los huecos tienen que ser
 * huecos de verdad para que la capa funcione igual sobre claro que sobre negro.
 */
export const AuroraLayer = ({ showRadialGradient = true }: AuroraLayerProps) => (
  <div
    className={cn(
      /* `aurora-layer` no pinta nada por sí sola: es el asidero desde el que
         `globals.css` congela la deriva y aligera el desenfoque en móvil. Una
         capa a sangre, desenfocada y con fusión encima, repintándose sin parar
         es de lo más caro que puede hacer una GPU de teléfono, y con un ciclo
         de 60 s a opacidad 0,15 el movimiento allí no se percibe. */
      "aurora-layer",
      `
      [--ribbons:repeating-linear-gradient(100deg,var(--aurora-strong)_0%,var(--aurora-mid)_5%,var(--transparent)_9%,var(--transparent)_15%,var(--aurora-faint)_18%,var(--aurora-strong)_24%)]
      [background-image:var(--ribbons)]
      [background-size:300%,_200%]
      [background-position:50%_50%,50%_50%]
      filter blur-[10px]
      after:content-[""] after:absolute after:inset-0 after:[background-image:var(--ribbons)]
      after:[background-size:200%,_100%]
      after:animate-aurora after:mix-blend-plus-lighter
      pointer-events-none
      absolute -inset-[10px] will-change-transform`,

      showRadialGradient &&
        `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
    )}
  ></div>
);

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

/**
 * Bloque a pantalla completa con las auroras de fondo y el contenido centrado.
 * Es la forma original del componente; se mantiene por si hace falta un hero
 * suelto con su propio fondo.
 */
export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col  h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900  text-slate-950 transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <AuroraLayer showRadialGradient={showRadialGradient} />
      </div>
      {children}
    </div>
  );
};

interface AuroraGlowProps {
  className?: string;
  showRadialGradient?: boolean;
}

/**
 * AuroraGlow — las auroras como capa fija de toda la web.
 *
 * Se monta una sola vez, en el layout, y se queda clavada al viewport: no
 * scrollea, no se apaga en ninguna sección y no cambia de color según lo que
 * tenga debajo. Siempre la misma lima, de principio a fin de la página.
 *
 * Va por encima del contenido, no por detrás, y esa es la clave para que no
 * desaparezca: la web alterna hojas claras con bloques negros y todos pintan
 * fondo opaco, así que cualquier capa por debajo quedaría tapada en cuanto
 * empieza una sección. Puesta encima, la lima toca todo por igual.
 *
 * Son dos copias exactas de la misma capa, y de su reparto sale que el efecto
 * pese menos sobre negro que sobre el lienzo claro:
 *
 *  - La primera se pinta sin fusión y muy tenue. Es la única que se ve sobre
 *    los bloques oscuros, donde el texto va en blanco y cualquier velo encima
 *    le come contraste.
 *  - La segunda va en `multiply`, que solo puede oscurecer: sobre negro no
 *    tiene nada que restar y desaparece sola, mientras que sobre el lienzo
 *    claro es la que da la presencia. El fondo decide, sin condicionales.
 *
 * Las dos animan igual, así que las vetas van sincronizadas y se leen como una
 * sola. Suben o bajan de intensidad con su `opacity`.
 *
 * Van sueltas, sin envoltorio común, y eso es deliberado: un contenedor con
 * `z-index` abre contexto de apilamiento y la fusión de dentro dejaría de ver
 * la página —se mezclaría con la otra capa en vez de con el fondo—.
 *
 * El `mask` las concentra en la esquina superior derecha, lejos del grueso del
 * texto. Y `z-40` las deja por debajo de la Navbar (z-50), de la barra de
 * scroll (z-60) y de la cortina de entrada (z-100), con `pointer-events-none`
 * para no interceptar ni un clic.
 */
export const HeroGlow = ({
  className,
  showRadialGradient = true,
}: AuroraGlowProps) => (
  <>
    {/* Base — la que sobrevive sobre negro. Deliberadamente sutil. */}
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 z-40 opacity-15",
        className
      )}
    >
      <AuroraLayer showRadialGradient={showRadialGradient} />
    </div>

    {/* Refuerzo — solo pinta donde hay claridad que oscurecer. */}
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 z-40 opacity-40 mix-blend-multiply",
        className
      )}
    >
      <AuroraLayer showRadialGradient={showRadialGradient} />
    </div>
  </>
);

interface HeroGradientProps {
  tone?: "light" | "dark";
  className?: string;
}

/**
 * HeroGradient — degradado estático para las cabeceras/hero de las páginas.
 * Permanece estático al principio de la sección y se adapta al tono de fondo (claro u oscuro).
 */
export const HeroGradient = ({
  tone = "light",
  className,
}: HeroGradientProps) => (
  <div
    aria-hidden="true"
    className={cn(
      "pointer-events-none absolute inset-0 z-0 overflow-hidden",
      className
    )}
  >
    {tone === "dark" ? (
      <div className="absolute inset-0 opacity-25">
        <AuroraLayer showRadialGradient={true} />
      </div>
    ) : (
      <div className="absolute inset-0 opacity-40 mix-blend-multiply">
        <AuroraLayer showRadialGradient={true} />
      </div>
    )}
  </div>
);
