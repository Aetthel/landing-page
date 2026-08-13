import React from "react";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InteractiveHoverLink } from "@/components/ui/interactive-hover-button";
import { ServiceSheet } from "@/components/sections/ServiceSheet";
import { ServicesProcess } from "@/components/sections/ServicesProcess";
import { ServicesAftercare } from "@/components/sections/ServicesAftercare";
import { ServicesFaq } from "@/components/sections/ServicesFaq";
import { services } from "@/config/services";

/* ==========================================================================
   /servicios — contrato de dirección

   TESIS: la página es el pliego abierto. Un estudio sin cartera que enseñar
   solo tiene una prueba que dar: decir de antemano lo que tarda, lo que llega
   el día de la entrega y —sobre todo— lo que no entra. Rechaza la parrilla de
   tres tarjetas iguales con icono, titular y "consúltanos". El precio es lo
   único que se calla, porque todavía no está cerrado: se dice en la FAQ con
   todas las letras en lugar de insinuarlo con una cifra provisional.

   MUNDO PROPIO: el del sistema ya establecido —lienzo porcelana, bloque
   grafito, lima de marca, Jakarta de titular sobre Inter de texto— llevado a
   la gramática de un pliego: tablas regladas con hairlines, cifras tabulares,
   rótulos versalita a 11px, y el filete lima trazándose de izquierda a derecha
   como único gesto vivo. Cero tarjetas, cero sombras decorativas.

   RELATO: llegas con una idea a medias o un proceso que te quema horas → cada
   ficha te enseña qué se entrega y qué no → el proceso te dice cuánto tiempo
   tendrás que poner tú → el cierre te quita el miedo a quedarte atado →
   escribes. Sin sumario ni comparador previo: la página no se lee para elegir
   entre tres opciones, se lee entera hasta reconocerse en una.

   PRIMER PANTALLAZO: bloque grafito a pantalla completa, sin más contenido que
   el titular a tres líneas con el cierre en lima y, a la derecha, la entradilla
   y el CTA. La cabecera habla en persona —una idea, un problema, alguien que
   escucha— y no adelanta ningún dato. Ni rótulo sobre el titular ni banda de
   datos al pie.

   FORMA: hoja de especificación / pliego abierto. Candidata 3 de la lista
   ordenada por resonancia; semilla ad4ca1db.
   ========================================================================== */

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Landing pages, aplicaciones web a medida y automatización de procesos. Qué se entrega en cada servicio, qué no entra y cómo trabajamos, explicado antes de empezar.",
};

export default function ServiciosPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-canvas text-ink font-sans selection:bg-dark selection:text-white">
      <Navbar />

      <main className="flex-1 w-full">
        {/* ------------------------------------------------------------------
            Encabezado sobre grafito, igual que la página de contacto: abre con
            contraste y mantiene legible el logotipo en negativo de la Navbar
            antes del primer scroll.
            ------------------------------------------------------------------ */}
        <section
          data-cursor-surface="dark"
          className="relative isolate w-full min-h-screen min-h-dvh flex flex-col justify-center overflow-hidden bg-dark text-white pt-32 pb-32 sm:pt-36 sm:pb-36"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-1/3 right-[-10%] -z-10 h-[38rem] w-[38rem] rounded-full bg-brand/12 blur-3xl"
          />

          <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
              {/* El cuerpo lo manda la línea más larga —la del cierre—: ocupa
                  ocho columnas y el tamaño se topa donde esa línea todavía cabe
                  entera. Las tres líneas son un solo golpe de voz y partir la
                  última rompería el compás. */}
              <h1 className="lg:col-span-8 text-[clamp(2.25rem,4.4vw,4.5rem)] font-normal tracking-tight leading-[1.03] text-white">
                <span className="block animate-rise-in rise-delay-1">
                  Si tienes una idea
                </span>
                <span className="block animate-rise-in rise-delay-2">
                  o un problema.
                </span>
                {/* El acento va en lima plana, no con el subrayado a rotulador:
                    ese trazo se pinta en `multiply` y sobre el grafito se
                    apagaría hasta desaparecer. */}
                <span className="block text-brand animate-rise-in rise-delay-3">
                  Aetthel pone el resto.
                </span>
              </h1>

              <div className="lg:col-span-4 lg:col-start-9 space-y-8 animate-rise-in rise-delay-3">
                <p className="max-w-md font-sans text-base sm:text-lg font-light leading-relaxed text-neutral-400">
                  Casi todo lo que construimos empieza igual: alguien cansado de
                  repetir la misma tarea cada semana, o alguien con un proyecto
                  en la cabeza y ninguna idea de por dónde se abre. Escuchamos,
                  preguntamos lo que nadie pregunta y te lo devolvemos
                  convertido en algo que se puede abrir y usar.
                </p>

                <InteractiveHoverLink
                  href="/contacto"
                  text="Hablemos de tu idea"
                  data-cursor-surface="light"
                  icon={<ArrowUpRight className="h-4 w-4" />}
                  className="border-brand bg-brand px-7 py-3 text-neutral-950 tracking-widest"
                  blobClassName="bg-white"
                  revealClassName="text-neutral-950"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Las fichas alternan lienzo y grafito: tres capítulos seguidos sobre
            el mismo fondo se leerían como una única parrafada. */}
        {services.map((service, index) => (
          <ServiceSheet
            key={service.id}
            service={service}
            tone={index === 1 ? "dark" : "light"}
          />
        ))}

        <ServicesProcess />
        <ServicesAftercare />
        <ServicesFaq />
      </main>

      <Footer />
    </div>
  );
}
