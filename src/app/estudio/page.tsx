import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Cpu, Layers, Sparkles, Compass } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/reveal";
import { InteractiveHoverLink } from "@/components/ui/interactive-hover-button";

export const metadata: Metadata = {
  title: "Aetthel Lab | Estudio",
  description:
    "Manifiesto, visión y metodología de Aetthel Lab. Arquitectura digital, diseño sintético y productos web de alta precisión.",
};

export default function EstudioPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-transparent text-ink font-sans selection:bg-dark selection:text-white">
      <Navbar />

      <main className="flex-1 w-full pt-28 sm:pt-36 lg:pt-40 pb-28 sm:pb-36">
        {/* Header Hero / Manifiesto */}
        <section className="w-full pb-16 sm:pb-24 border-b border-line">
          <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
              <div className="lg:col-span-8 space-y-6">
                <span className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-accent bg-accent-soft/60 px-3.5 py-1.5 rounded-full border border-accent/20 animate-rise-in rise-delay-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Aetthel Lab — Manifiesto
                </span>

                <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-normal tracking-tight leading-[1.03] text-ink animate-rise-in rise-delay-2">
                  Diseñamos productos digitales con la precisión de la <span className="text-accent font-medium">arquitectura técnica</span>.
                </h1>
              </div>

              <div className="lg:col-span-4 space-y-4 animate-rise-in rise-delay-3">
                <p className="font-sans text-base sm:text-lg font-light leading-relaxed text-ink-muted">
                  Aetthel es un estudio de desarrollo y diseño obsesionado por la claridad, la simplicidad radical y el rendimiento sin fricciones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pilares & Filosofía */}
        <section className="w-full py-20 sm:py-28">
          <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
            <Reveal className="mb-16">
              <span className="block font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted mb-3">
                01 / Filosofía de Trabajo
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight text-ink">
                Lo esencial. Sin adornos ni redundancia.
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Compass,
                  num: "01",
                  title: "Claridad de Propósito",
                  desc: "Cada píxel, animación y línea de código debe responder a un objetivo directo del usuario o del negocio. Si no aporta utilidad, se elimina.",
                },
                {
                  icon: Cpu,
                  num: "02",
                  title: "Rendimiento Brutal",
                  desc: "Construimos sobre cimientos modernos (Next.js, TypeScript, Tailwind) garantizando tiempos de carga instantáneos y 60 fps continuos.",
                },
                {
                  icon: Layers,
                  num: "03",
                  title: "Estructura & Escala",
                  desc: "Diseñamos sistemas de componentes modulares preparados para evolucionar sin acumular deuda técnica ni código espagueti.",
                },
              ].map((pilar, i) => (
                <Reveal key={pilar.num} delay={i * 100}>
                  <div className="p-8 sm:p-10 rounded-2xl border border-line bg-white/70 backdrop-blur-sm space-y-6 hover:border-ink/30 transition-all group">
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-xs font-semibold tracking-wider text-ink/30 tabular-nums">
                        {pilar.num}
                      </span>
                      <div className="p-2.5 rounded-xl bg-brand/20 text-ink group-hover:bg-brand transition-colors">
                        <pilar.icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <h3 className="text-xl font-display font-medium tracking-tight text-ink">
                        {pilar.title}
                      </h3>
                      <p className="font-sans text-sm font-light leading-relaxed text-ink-muted">
                        {pilar.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA a Servicios y Contacto */}
        <section className="w-full py-16 sm:py-24 border-t border-line">
          <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-8">
            <Reveal className="space-y-4 max-w-2xl mx-auto">
              <span className="block font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                ¿Construimos juntos?
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium tracking-tight text-ink">
                ¿Tienes un proyecto o idea en mente?
              </h2>
              <p className="font-sans text-base font-light text-ink-muted">
                Revisamos tus necesidades y te damos respuesta con presupuesto y hoja de ruta en menos de 24 horas.
              </p>
            </Reveal>

            <Reveal delay={150} className="flex items-center justify-center gap-4 pt-2">
              <InteractiveHoverLink href="/contacto" text="Iniciar Proyecto" />
              <Link
                href="/servicios"
                className="px-6 py-2.5 rounded-full border border-line bg-white/80 font-sans text-xs font-semibold uppercase tracking-wider text-ink hover:border-ink transition-colors inline-flex items-center gap-1.5"
              >
                <span>Ver Servicios</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
