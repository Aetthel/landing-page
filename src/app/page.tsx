import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { PromotionalVideo } from "@/components/sections/PromotionalVideo";
import { Services } from "@/components/sections/Services";
import { AboutUs } from "@/components/sections/AboutUs";
import { Projects } from "@/components/sections/Projects";
import { Clients } from "@/components/sections/Clients";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-neutral-950 font-sans selection:bg-neutral-900 selection:text-white">
      {/* Floating Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        <Hero />
        <PromotionalVideo />
        <AboutUs />
        <Services />
        <Projects />
        <Clients />
      </main>

      {/* Footer CTA */}
      <Footer />
    </div>
  );
}

