import React from "react";
import { MarkerHighlight } from "@/components/ui/marker-highlight";
import { RotatingText } from "@/components/ui/rotating-text";
import { HeroGradient } from "@/components/ui/aurora-background";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen min-h-dvh flex flex-col justify-center pt-32 pb-24 sm:pt-40 sm:pb-32 bg-canvas text-ink overflow-hidden"
    >
      {/* Degradado estático del Hero (solo visible al principio) */}
      <HeroGradient tone="light" />
      <div className="relative z-10 w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center">
        {/* Main Headline Statement */}
        {/* EL MÍNIMO DEL CLAMP MANDA EN MÓVIL, y no es decorativo: la palabra
            que rota reserva su ancho con `whitespace-nowrap` (ver
            `rotating-text`), así que «Automatizaciones» no puede partirse y es
            ella quien decide el ancho del titular.

            A `3rem` la fuente se quedaba clavada en 48 px por debajo de 600 px
            de ancho —`8vw` ya no llegaba— y esa palabra medía ~420 px contra
            los 327 útiles de un móvil de 375: se salía, y el `overflow-hidden`
            de la página la recortaba. Bajando el mínimo a `2rem` manda el `8vw`
            en cuanto la pantalla baja de 400 px, que es donde la palabra
            siempre cabe. Los otros dos versos sí parten solos, así que no les
            afecta. */}
        <h1 className="text-[clamp(2rem,8vw,7rem)] font-display font-normal tracking-tight text-ink text-center leading-[1.04]">
          <span className="block animate-rise-in rise-delay-1">
            El salto digital
          </span>
          <span className="relative inline-flex items-center justify-center align-middle my-1 animate-rise-in rise-delay-2">
            <MarkerHighlight />
            <RotatingText
              words={["Páginas web", "Aplicaciones", "Automatizaciones"]}
              className="text-ink font-medium"
            />
          </span>
          <span className="block animate-rise-in rise-delay-3">
            al alcance de tu negocio.
          </span>
        </h1>
      </div>
    </section>
  );
};
