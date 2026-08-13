import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceSheet } from "@/components/sections/ServiceSheet";
import { ServicesAftercare } from "@/components/sections/ServicesAftercare";
import { ServicesFaq } from "@/components/sections/ServicesFaq";
import { services } from "@/config/services";

/* ==========================================================================
   /servicios — contrato de dirección

   TESIS: la página es el pliego abierto. Un estudio joven y sin cartera que
   enseñar solo tiene una prueba que dar: decir de antemano qué hace, en qué
   niveles se contrata, qué llega el día de la entrega y —sobre todo— lo que no
   entra. Rechaza la parrilla de tres tarjetas iguales con icono, titular y
   "consúltanos". El precio es lo único que se calla, porque todavía no está
   cerrado: se dice en la FAQ con todas las letras en lugar de insinuarlo con
   una cifra provisional. Ninguna sección publica cifras —ni tarifas, ni
   horquillas de semanas—; lo que sí se publica es el modelo de contratación de
   cada servicio, que sí está decidido.

   MUNDO PROPIO: el del sistema ya establecido —lienzo porcelana, bloque
   grafito, lima de marca, Jakarta de titular sobre Inter de texto— llevado a
   la gramática de un pliego: tablas regladas con hairlines, rótulos versalita a
   11px, y el filete lima como único gesto vivo. Cero tarjetas, cero sombras
   decorativas. La escalera de niveles se dibuja con un medidor de tres tramos:
   la progresión se ve sin necesidad de escribir un número.

   RELATO: la elección ya viene hecha de casa. A esta página se entra desde la
   lista de servicios de la home, que enlaza a la ficha concreta por su ancla,
   así que aquí no hay que volver a elegir: aterrizas en tu capítulo y lees sus
   niveles, qué incluye y qué no → el cierre te quita el miedo a quedarte atado
   → las dudas sueltas caen en la FAQ → escribes. Cada ficha lleva su propio
   botón: la decisión puede llegar en cualquier punto y no obliga a volver
   arriba.

   Cómo trabaja el estudio —el proceso paso a paso— no vive aquí: esta página
   responde qué se contrata, no cómo somos por dentro. Eso es materia de
   Aetthel Lab.

   PRIMER PANTALLAZO: bloque grafito a pantalla completa, sin más contenido que
   el titular a tres líneas con el cierre en lima y, a la derecha, la entradilla:
   de dónde salen los proyectos —una nota del móvil, algo que se repite— y qué
   nos gusta de ellos. Ni botón, ni datos, ni una palabra sobre dinero: la
   cabecera pone la voz y habla de lo que trae el cliente. Solo la ve entera
   quien llega sin ancla; el que viene señalando un servicio cae directamente en
   su ficha.

   FORMA: hoja de especificación / pliego abierto. Candidata 3 de la lista
   ordenada por resonancia; semilla ad4ca1db.
   ========================================================================== */

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Landing pages, web apps a medida y automatización de procesos. Los niveles de cada servicio, qué incluye, qué no entra y cómo trabajamos, explicado antes de empezar. Presupuesto a medida.",
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

            El titular habla en persona —una idea, un problema, alguien que
            escucha— y no adelanta ningún dato. El qué hacemos lo dice el
            sumario que va justo debajo, y lo dice con nombres y modelo de
            contratación: la cabecera pone la voz, la banda pone la información.
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
              {/* El cuerpo lo manda la línea más larga —la del cierre—: cabe en
                  algo menos de seis columnas al tamaño máximo, así que se le
                  reservan siete. Con las ocho de antes sobraba media columna de
                  aire que empujaba la entradilla contra el margen derecho y
                  rompía la pareja. Las tres líneas son un solo golpe de voz y
                  partir la última rompería el compás. */}
              <h1 className="lg:col-span-7 text-[clamp(2.25rem,4.4vw,4.5rem)] font-normal tracking-tight leading-[1.03] text-white">
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

              {/* Sin botón en la cabecera: cada ficha lleva el suyo, y el
                  sumario que viene justo debajo es la salida natural desde
                  aquí. Un CTA en el primer pantallazo pediría decidir antes de
                  haber leído qué se ofrece. */}
              <p className="lg:col-span-5 lg:col-start-8 max-w-md font-sans text-base sm:text-lg font-light leading-relaxed text-neutral-400 animate-rise-in rise-delay-3">
                Casi todo lo que construimos empieza en una nota del móvil o en
                una conversación a medias: una idea que llevas tiempo dando
                vueltas, algo que se repite cada semana y te come el día. Nos
                gusta esa parte —preguntar hasta entenderla del todo— tanto como
                la de sentarnos a construirla.
              </p>
            </div>
          </div>
        </section>

        {/* Sin sumario: a esta página se llega desde la lista de servicios de
            la home, y se llega ya apuntando a una ficha concreta por su ancla.
            Repetir aquí esa misma lista sería hacer elegir dos veces lo mismo.

            Las fichas alternan lienzo y grafito: tres capítulos seguidos sobre
            el mismo fondo se leerían como una única parrafada. */}
        {services.map((service, index) => (
          <ServiceSheet
            key={service.id}
            service={service}
            tone={index === 1 ? "dark" : "light"}
          />
        ))}

        {/* La tabla del proceso —cómo va un proyecto paso a paso— vive ahora en
            Aetthel Lab: cuenta cómo trabaja el estudio, no qué se contrata. Lo
            que de ella importaba aquí, el tiempo que tiene que poner el cliente,
            lo responde la FAQ. */}
        <ServicesAftercare />
        <ServicesFaq />
      </main>

      <Footer />
    </div>
  );
}
