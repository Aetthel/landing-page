import React from "react";
import { cn } from "@/lib/utils";

/* --------------------------------------------------------------------------
   Láminas de servicio — el dibujo técnico que acompaña a cada ficha.

   No son iconos ni capturas: son el croquis de lo que se entrega, trazado con
   la misma línea fina y los mismos remates redondeados que usa toda la web
   (`globals.css` los fija para la iconografía). Un solo grosor de trazo, una
   sola familia de esquinas, y el lima reservado a lo que el servicio hace
   suceder —el botón que convierte, la fila que se está trabajando, el nudo que
   dispara el proceso—.

   El tono se pasa desde fuera porque la ficha 02 se pinta sobre el bloque
   grafito: sobre oscuro el lima de marca luce, pero sobre el lienzo claro un
   trazo fino en #B8FA4E no llega al contraste mínimo y baja a `accent`, que es
   el mismo lima saturado.
   -------------------------------------------------------------------------- */

type Tone = "light" | "dark";

interface ServiceDiagramProps {
  kind: "landing" | "app" | "automation";
  tone?: Tone;
  className?: string;
}

const PALETTE = {
  light: {
    hair: "text-ink/15",
    line: "text-ink/30",
    strong: "text-ink/55",
    accent: "text-accent",
    surface: "fill-white",
    wash: "fill-accent/10",
    solid: "fill-brand",
  },
  dark: {
    hair: "text-white/12",
    line: "text-white/25",
    strong: "text-white/50",
    accent: "text-brand",
    surface: "fill-white/[0.03]",
    wash: "fill-brand/12",
    solid: "fill-brand",
  },
} as const;

/* Barra de texto simulado. El croquis nunca escribe palabras falsas: las
   líneas dicen "aquí va texto" sin fingir un contenido que no existe. */
const Bar: React.FC<{
  x: number;
  y: number;
  w: number;
  h?: number;
  className?: string;
}> = ({ x, y, w, h = 5, className }) => (
  <rect
    x={x}
    y={y}
    width={w}
    height={h}
    rx={h / 2}
    className={cn("fill-current", className)}
  />
);

export const ServiceDiagram: React.FC<ServiceDiagramProps> = ({
  kind,
  tone = "light",
  className,
}) => {
  const c = PALETTE[tone];

  return (
    <svg
      viewBox="0 0 400 250"
      role="img"
      aria-label={
        kind === "landing"
          ? "Croquis de una landing page: titular, llamada a la acción y curva de conversión."
          : kind === "app"
            ? "Croquis de una aplicación interna: menú lateral, listado de registros y gráfica."
            : "Croquis de una automatización: tres orígenes de datos que confluyen en un proceso y salen a dos destinos."
      }
      className={cn("w-full h-auto", className)}
    >
      {kind === "landing" && (
        <>
          {/* Marco de la página */}
          <rect
            x="18"
            y="16"
            width="364"
            height="218"
            rx="10"
            className={cn("stroke-current", c.line)}
            strokeWidth="1.5"
            fill="none"
          />
          <rect
            x="18"
            y="16"
            width="364"
            height="218"
            rx="10"
            className={c.surface}
          />
          {/* Barra del navegador: hairline y marca */}
          <path
            d="M18 44 H382"
            className={cn("stroke-current", c.hair)}
            strokeWidth="1.5"
          />
          <circle cx="36" cy="30" r="3.5" className={cn("fill-current", c.line)} />
          <Bar x={50} y={27.5} w={34} className={c.hair} />
          <Bar x={316} y={27.5} w={50} className={c.hair} />

          {/* Titular a dos líneas y entradilla */}
          <Bar x={44} y={72} w={196} h={11} className={c.strong} />
          <Bar x={44} y={92} w={132} h={11} className={c.strong} />
          <Bar x={44} y={118} w={168} className={c.line} />
          <Bar x={44} y={130} w={128} className={c.line} />

          {/* El único elemento lleno de la lámina: el botón que convierte */}
          <rect x="44" y="152" width="92" height="26" rx="13" className={c.solid} />
          <path
            d="M108 165 h12 m-4.5 -4.5 4.5 4.5 -4.5 4.5"
            stroke="#1A1A1E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Bloque de imagen a la derecha */}
          <rect
            x="262"
            y="66"
            width="96"
            height="76"
            rx="6"
            className={cn("stroke-current", c.hair)}
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M262 126 l24 -22 18 16 14 -12 40 34"
            className={cn("stroke-current", c.line)}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="288" cy="86" r="5" className={cn("fill-current", c.hair)} />

          {/* Curva de conversión: lo que la página hace subir */}
          <path
            d="M262 210 C 288 210, 300 196, 320 182 S 348 158, 358 152"
            className={cn("stroke-current", c.accent)}
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="358" cy="152" r="4" className={c.solid} />
          <path
            d="M262 210 H358"
            className={cn("stroke-current", c.hair)}
            strokeWidth="1.5"
          />

          {/* Tres pruebas al pie */}
          {[44, 118, 192].map((x) => (
            <g key={x}>
              <path
                d={`M${x} 198 h44`}
                className={cn("stroke-current", c.accent)}
                strokeWidth="2"
                strokeLinecap="round"
              />
              <Bar x={x} y={208} w={44} h={4} className={c.hair} />
              <Bar x={x} y={218} w={30} h={4} className={c.hair} />
            </g>
          ))}
        </>
      )}

      {kind === "app" && (
        <>
          <rect
            x="18"
            y="16"
            width="364"
            height="218"
            rx="10"
            className={cn("stroke-current", c.line)}
            strokeWidth="1.5"
            fill="none"
          />
          <rect
            x="18"
            y="16"
            width="364"
            height="218"
            rx="10"
            className={c.surface}
          />

          {/* Menú lateral con la sección activa marcada en lima */}
          <path
            d="M104 16 V234"
            className={cn("stroke-current", c.hair)}
            strokeWidth="1.5"
          />
          <rect x="18" y="16" width="86" height="218" rx="10" className={c.wash} />
          <circle cx="38" cy="38" r="5" className={cn("fill-current", c.strong)} />
          <Bar x={50} y={35.5} w={34} className={c.line} />
          {[68, 90, 112, 134, 156].map((y, i) => (
            <g key={y}>
              {i === 1 && (
                <rect x="26" y={y - 7} width="70" height="20" rx="6" className={c.wash} />
              )}
              <path
                d={`M34 ${y} h${i === 1 ? 8 : 6}`}
                className={cn(
                  "stroke-current",
                  i === 1 ? c.accent : c.line
                )}
                strokeWidth="2"
                strokeLinecap="round"
              />
              <Bar
                x={50}
                y={y - 2.5}
                w={i === 1 ? 40 : 32}
                h={4}
                className={i === 1 ? c.strong : c.hair}
              />
            </g>
          ))}

          {/* Cabecera con buscador */}
          <path
            d="M104 58 H382"
            className={cn("stroke-current", c.hair)}
            strokeWidth="1.5"
          />
          <circle
            cx="126"
            cy="37"
            r="6"
            className={cn("stroke-current", c.line)}
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M130.5 41.5 L135 46"
            className={cn("stroke-current", c.line)}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <Bar x={146} y={34.5} w={70} className={c.hair} />
          <rect x="330" y="29" width="36" height="16" rx="8" className={c.solid} />

          {/* Listado: la fila viva es la que el equipo está trabajando */}
          {[80, 106, 132, 158, 184].map((y, i) => (
            <g key={y}>
              {i === 2 && (
                <rect
                  x="118"
                  y={y - 11}
                  width="182"
                  height="22"
                  rx="6"
                  className={c.wash}
                />
              )}
              <circle
                cx="128"
                cy={y}
                r="4"
                className={cn(i === 2 ? "fill-current" : "stroke-current", i === 2 ? c.accent : c.hair)}
                strokeWidth="1.5"
                fill={i === 2 ? undefined : "none"}
              />
              <Bar x={142} y={y - 2.5} w={i % 2 === 0 ? 96 : 78} className={i === 2 ? c.strong : c.line} />
              <Bar x={252} y={y - 2} w={38} h={4} className={c.hair} />
              <path
                d={`M118 ${y + 13} H300`}
                className={cn("stroke-current", c.hair)}
                strokeWidth="1"
              />
            </g>
          ))}

          {/* Gráfica de la columna derecha */}
          <path
            d="M316 200 V78"
            className={cn("stroke-current", c.hair)}
            strokeWidth="1.5"
          />
          <path
            d="M316 200 H370"
            className={cn("stroke-current", c.hair)}
            strokeWidth="1.5"
          />
          {[
            { x: 324, h: 34 },
            { x: 338, h: 56 },
            { x: 352, h: 44 },
          ].map((bar, i) => (
            <rect
              key={bar.x}
              x={bar.x}
              y={200 - bar.h}
              width="9"
              height={bar.h}
              rx="3"
              className={i === 1 ? c.solid : cn("fill-current", c.line)}
            />
          ))}
          <Bar x={316} y={212} w={54} h={4} className={c.hair} />
        </>
      )}

      {kind === "automation" && (
        <>
          {/* Tres orígenes a la izquierda */}
          {[54, 125, 196].map((y, i) => (
            <g key={y}>
              <rect
                x="20"
                y={y}
                width="74"
                height="40"
                rx="8"
                className={cn("stroke-current", c.line)}
                strokeWidth="1.5"
                fill="none"
              />
              <rect x="20" y={y} width="74" height="40" rx="8" className={c.surface} />
              <Bar x={32} y={y + 13} w={34} h={4} className={c.strong} />
              <Bar x={32} y={y + 24} w={22} h={4} className={c.hair} />
              {/* El tercero llega por tarea programada: trazo discontinuo */}
              <path
                d={`M94 ${y + 20} C 140 ${y + 20}, 150 125, 168 125`}
                className={cn("stroke-current", i === 2 ? c.line : c.accent)}
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={i === 2 ? "4 6" : undefined}
                fill="none"
              />
            </g>
          ))}

          {/* El nudo: donde el proceso ocurre */}
          <rect
            x="168"
            y="93"
            width="64"
            height="64"
            rx="14"
            className={cn("stroke-current", c.accent)}
            strokeWidth="2"
            fill="none"
          />
          <rect x="168" y="93" width="64" height="64" rx="14" className={c.wash} />
          <path
            d="M186 125 h28 m-9 -9 9 9 -9 9"
            className={cn("stroke-current", c.accent)}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Dos destinos */}
          {[74, 156].map((y) => (
            <g key={y}>
              <path
                d={`M232 125 C 262 125, 268 ${y + 20}, 306 ${y + 20}`}
                className={cn("stroke-current", c.accent)}
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              <rect
                x="306"
                y={y}
                width="74"
                height="40"
                rx="8"
                className={cn("stroke-current", c.line)}
                strokeWidth="1.5"
                fill="none"
              />
              <rect x="306" y={y} width="74" height="40" rx="8" className={c.surface} />
              <Bar x={318} y={y + 13} w={38} h={4} className={c.strong} />
              <Bar x={318} y={y + 24} w={26} h={4} className={c.hair} />
            </g>
          ))}

          {/* El aviso: si el proceso falla, alguien se entera */}
          <circle cx="200" cy="196" r="13" className={c.solid} />
          <path
            d="M200 190 v6 l4 3"
            stroke="#1A1A1E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M200 157 V183"
            className={cn("stroke-current", c.hair)}
            strokeWidth="1.5"
            strokeDasharray="3 5"
          />
        </>
      )}
    </svg>
  );
};
