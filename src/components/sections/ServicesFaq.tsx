"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { faqs } from "@/config/services";
import { Reveal } from "@/components/ui/reveal";

/* --------------------------------------------------------------------------
   Dudas sueltas.

   Acordeón de una sola respuesta abierta: son preguntas independientes y
   tenerlas todas desplegadas a la vez devuelve el muro de texto que el acordeón
   venía a evitar. La primera arranca abierta para que se vea que esto se abre,
   y es la del precio: es la que trae a la gente hasta aquí.

   La apertura se anima con `grid-template-rows` de `0fr` a `1fr`: es la única
   forma de interpolar hasta el alto real del contenido sin medirlo en
   JavaScript ni fijar un máximo a ojo que recorte las respuestas largas.
   -------------------------------------------------------------------------- */
export const ServicesFaq: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full bg-canvas py-20 sm:py-28 lg:py-36 border-t border-line/80">
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
        <Reveal className="w-full max-w-4xl space-y-4">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-normal tracking-tight leading-[1.04] text-ink">
            Lo que nos preguntan siempre.
          </h2>
          <p className="font-sans text-lg sm:text-xl font-light leading-relaxed text-ink-muted">
            Si tu duda no está aquí,{" "}
            <Link
              href="/contacto"
              className="text-ink underline underline-offset-4 decoration-brand decoration-2 hover:text-accent transition-colors"
            >
              escríbenos
            </Link>{" "}
            y te respondemos con lo que sea que necesites saber.
          </p>
        </Reveal>

        <Reveal delay={120} className="w-full">
          <dl className="border-t border-ink/15 w-full">
            {faqs.map((item, index) => {
              const isOpen = open === index;
              return (
                <div key={item.question} className="border-b border-line">
                  <dt>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                    >
                      <span className="text-lg sm:text-xl font-display font-medium tracking-tight text-ink text-balance">
                        {item.question}
                      </span>
                      {/* El signo gira a aspa al abrir; en reposo el círculo
                          solo se tiñe de lima al pasar por encima. */}
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-white transition-colors duration-300 group-hover:border-ink group-hover:bg-ink">
                        <Plus
                          aria-hidden="true"
                          className={`h-3.5 w-3.5 text-ink group-hover:text-white transition-transform duration-300 ease-out motion-reduce:transition-none ${
                            isOpen ? "rotate-45" : "rotate-0"
                          }`}
                        />
                      </span>
                    </button>
                  </dt>

                  <dd
                    id={`faq-answer-${index}`}
                    /* El contenedor exterior es la rejilla que se abre; el
                       interior necesita `overflow-hidden` para que el texto
                       quede recortado mientras la fila crece. */
                    className={`grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={`max-w-4xl pb-7 pr-10 font-sans text-sm sm:text-base font-light leading-relaxed text-ink-muted transition-opacity duration-300 ${
                          isOpen ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </dd>
                </div>
              );
            })}
          </dl>
        </Reveal>
      </div>
    </section>
  );
};
