import React from "react";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HomeGallery } from "@/components/sections/HomeGallery";
import { Services } from "@/components/sections/Services";
import { AboutUs } from "@/components/sections/AboutUs";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-dark text-ink font-sans selection:bg-dark selection:text-white pt-2 sm:pt-3">
      <div className="relative min-h-screen w-full bg-canvas text-ink rounded-t-[2.5rem] sm:rounded-t-[3.5rem] overflow-hidden border-t border-line/60 shadow-2xl flex flex-col flex-1">
        {/* La Navbar la monta el layout, para que sobreviva a los cambios de
            ruta y su selector pueda desplazarse */}

        {/* Main Page Content */}
        <main className="flex-1 w-full">
          <Hero />
          <HomeGallery />
          <AboutUs />
          <Services />
        </main>

        {/* Footer CTA */}
        <Footer />
      </div>
    </div>
  );
}
