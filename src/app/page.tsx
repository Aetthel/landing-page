import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { AboutUs } from "@/components/sections/AboutUs";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans selection:bg-orange-500 selection:text-white">
      {/* Dynamic Scroll Navbar */}
      <Navbar />

      {/* Main Structural Content */}
      <main className="flex-1 w-full">
        <Hero />
        <Services />
        <AboutUs />
        <Projects />
      </main>

      {/* Footer always fixed at bottom with uniform margin */}
      <Footer />
    </div>
  );
}
