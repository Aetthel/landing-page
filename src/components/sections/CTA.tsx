import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { InteractiveHoverLink } from "@/components/ui/interactive-hover-button";

export const CTA: React.FC = () => {
  return (
    <section className="w-full py-20 sm:py-28 lg:py-36 bg-canvas border-t border-line/80">
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
          <span className="block type-eyebrow text-ink-muted">
            ¿HABLAMOS DE TU PROYECTO?
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-normal tracking-tight text-ink leading-[1.08] max-w-4xl">
            Al final, esto va de entenderse. Concretemos tu idea sin compromiso.
          </h2>

          <p className="type-lead font-sans text-base sm:text-lg lg:text-xl font-light text-ink-muted leading-relaxed max-w-2xl">
            Respondemos en menos de 24 horas con una primera lectura, propuesta de reunión y alcance claro.
          </p>

          <div className="pt-4">
            <InteractiveHoverLink
              href="/contacto"
              text="Agendar primera reunión"
              icon={<ArrowUpRight className="h-4 w-4" />}
              className="border-ink bg-ink px-8 py-4 text-white tracking-widest"
              blobClassName="bg-neutral-800"
              revealClassName="text-white"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
