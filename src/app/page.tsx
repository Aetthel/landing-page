import React from "react";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { AboutUs } from "@/components/sections/AboutUs";
import { StudioTeam } from "@/components/sections/StudioTeam";
import IntegrationsSection from "@/components/ui/integrations-3";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-dark text-ink font-sans selection:bg-dark selection:text-white pt-2 sm:pt-3">
      <div className="relative min-h-screen w-full bg-canvas text-ink rounded-t-[2.5rem] sm:rounded-t-[3.5rem] overflow-hidden flex flex-col flex-1">
        {/* La Navbar la monta el layout, para que sobreviva a los cambios de
            ruta y su selector pueda desplazarse */}

        {/* Main Page Content.
            El `pb` es el respiro entre la última sección y el pie. Va aquí y no
            en `Services` a propósito: es una cuestión de esta página —dónde
            acaba el contenido y empieza el bloque oscuro—, no del ritmo interno
            de la sección, que se usaría igual en cualquier otro sitio. */}
        <main className="flex-1 w-full pb-12 sm:pb-16 lg:pb-24">
          <Hero />
          <AboutUs />
          <IntegrationsSection />
          <StudioTeam hideHeader />
          <Services hideHeader />
        </main>

        {/* Footer CTA */}
        <Footer />
      </div>
    </div>
  );
}
