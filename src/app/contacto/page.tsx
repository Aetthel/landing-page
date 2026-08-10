import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contacto | Aetthel",
  description: "Página de contacto de Aetthel.",
};

export default function ContactoPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-canvas text-ink font-sans selection:bg-dark selection:text-white">
      <Navbar />

      <main className="flex-1 w-full pt-32 pb-20">
        <section className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight text-ink">
            Contacto
          </h1>
        </section>
      </main>

      <Footer />
    </div>
  );
}
