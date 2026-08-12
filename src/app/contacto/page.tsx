import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos qué quieres construir. Respondemos en menos de 24 horas con una primera lectura del proyecto, presupuesto y plazos.",
};

export default function ContactoPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-canvas text-ink font-sans selection:bg-dark selection:text-white">
      <Navbar />

      <main className="flex-1 w-full">
        {/* ------------------------------------------------------------------
            Encabezado en bloque oscuro. Además de abrir con contraste, es lo
            que mantiene legible el logotipo en negativo de la Navbar sin
            scroll, igual que hace el hero de la home.
            ------------------------------------------------------------------ */}
        <section
          data-cursor-surface="dark"
          /* Ocupa la pantalla entera: la primera impresión es el bloque negro
             con el titular centrado, y el formulario claro no asoma hasta que
             se hace scroll. `dvh` va después de `screen` para que en móvil
             mande la altura real, sin contar la barra del navegador. */
          className="relative isolate w-full min-h-screen min-h-dvh flex flex-col justify-center overflow-hidden bg-dark text-white pt-32 pb-32 sm:pt-36 sm:pb-36"
        >
          {/* Resplandor lima arriba a la derecha: el mismo acento que el lienzo
              claro lleva de fondo, traducido al bloque oscuro. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-1/3 right-[-10%] -z-10 h-[38rem] w-[38rem] rounded-full bg-brand/12 blur-3xl"
          />

          <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
              <div className="lg:col-span-8">
                <span className="block font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-brand animate-rise-in rise-delay-1">
                  Contacto
                </span>

                <h1 className="mt-6 text-[clamp(2.75rem,6.5vw,6rem)] font-normal tracking-tight leading-[1.03] text-white">
                  <span className="block animate-rise-in rise-delay-1">
                    Hablemos de tu
                  </span>
                  {/* El acento va en lima plana y no con el subrayado a
                      rotulador: ese trazo se pinta en `multiply` y sobre el
                      grafito del bloque se apagaría hasta desaparecer. */}
                  <span className="block text-brand animate-rise-in rise-delay-2">
                    próximo proyecto.
                  </span>
                </h1>
              </div>

              <p className="lg:col-span-4 max-w-md font-sans text-base sm:text-lg font-light leading-relaxed text-neutral-400 animate-rise-in rise-delay-3">
                Una web, una app o cualquier proceso repetitivo que quieras
                automatizar. Cuéntanos tus ideas y nosotros nos encargaremos de
                hacerlas realidad, con un seguimiento cercano y con
                transparencia en cada paso.
              </p>
            </div>
          </div>

          {/* Sin indicador de scroll: el raíl lima de la derecha ya dice que
              queda recorrido por delante. */}
        </section>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
