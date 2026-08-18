import React from "react";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/reveal";
import { InteractiveHoverLink } from "@/components/ui/interactive-hover-button";

import { HeroGradient } from "@/components/ui/aurora-background";

export const metadata: Metadata = {
  title: "Estudio | Aetthel",
  description:
    "Conoce al equipo, visión y valores de Aetthel. Ingeniería web moderna, trato directo sin intermediarios y soluciones orientadas al crecimiento de tu negocio.",
};

const teamMembers = [
  {
    name: "Martí Castaño",
    role: "Lead Engineer & Architecture",
    bio: "Especialista en infraestructura, backend y rendimiento. Enfocado en construir sistemas robustos con PostgreSQL, Docker y arquitecturas escalables que garantizan estabilidad absoluta.",
    initials: "MC",
    skills: ["PostgreSQL", "Docker", "Node.js", "Arquitectura"],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Alex",
    role: "Design Engineer & Frontend",
    bio: "Especialista en interfaces visuales, interactividad y experiencia de usuario. Transforma necesidades de negocio en código limpio y dinámico con Next.js, Tailwind y GSAP.",
    initials: "AL",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "UX/UI"],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
];

const pillars = [
  {
    title: "Trato directo",
    desc: "Hablas directamente con los ingenieros que escriben el código de tu proyecto, sin comerciales ni capas de gestión intermedias.",
    num: "01",
  },
  {
    title: "Velocidad y agilidad",
    desc: "Entregas rápidas e iterativas sin burocracia ni dilaciones innecesarias.",
    num: "02",
  },
  {
    title: "Rigor técnico",
    desc: "Aplicamos estándares de ingeniería modernos para que cada web cargue al instante y funcione sin fallos.",
    num: "03",
  },
];

const values = [
  {
    title: "Código limpio y sin ataduras",
    desc: "Construimos software mantenible, sin código espagueti ni plataformas cerradas.",
  },
  {
    title: "Propiedad 100% tuya",
    desc: "Todo lo desarrollado —código, accesos y bases de datos— te pertenece por completo desde el primer día.",
  },
  {
    title: "Transparencia absoluta",
    desc: "Presupuestos claros, sin costes ocultos y con explicaciones llanas sin jerga técnica innecesaria.",
  },
  {
    title: "Compromiso pragmático",
    desc: "Priorizamos siempre la utilidad real y el retorno comercial antes que la complejidad innecesaria.",
  },
];

export default function EstudioPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-dark text-white font-sans selection:bg-dark selection:text-white">
      <main className="flex-1 w-full">
        {/* HERO CABECERA EN NEGRO */}
        <section
          data-cursor-surface="dark"
          className="relative isolate w-full min-h-screen min-h-dvh flex flex-col justify-center overflow-hidden bg-dark text-white pt-32 pb-32 sm:pt-36 sm:pb-36"
        >
          <HeroGradient tone="dark" />
          <div className="relative z-10 w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
            {/* `items-start` + `.hero-lead`: la entradilla cuelga del titular a
                una altura fija, en vez de alinearse por abajo y moverse según
                el largo del texto —que es lo que hacía distinta a cada página—. */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-7">
                <span className="block type-eyebrow text-brand animate-rise-in rise-delay-1">
                  Estudio
                </span>

                <h1 className="mt-6 type-display text-white">
                  <span className="block animate-rise-in rise-delay-1">
                    El salto digital,
                  </span>
                  <span className="block text-brand animate-rise-in rise-delay-2">
                    al alcance de tu negocio.
                  </span>
                </h1>
              </div>

              <p className="lg:col-span-5 max-w-xl type-lead hero-lead text-neutral-400 animate-rise-in rise-delay-3">
                Creemos que la tecnología moderna no debe ser un lujo reservado a grandes corporaciones. Existimos para dotar a pequeños y medianos negocios de herramientas digitales sólidas, webs de alto impacto y automatizaciones que ahorran horas de trabajo.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 01: EL EQUIPO */}
        <section className="relative z-20 w-full py-20 sm:py-28 border-t border-line/80 bg-canvas rounded-t-[3.5rem] sm:rounded-t-[4.5rem] overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
          <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
            <Reveal className="mb-14">
              <span className="block type-eyebrow text-ink-muted mb-3">
                01 / Quiénes Somos
              </span>
              <h2 className="type-display text-ink">
                El equipo detrás del código.
              </h2>
              <p className="type-body text-ink-muted max-w-2xl mt-4">
                Sin intermediarios ni agentes comerciales. Hablas y trabajas directamente con los ingenieros que diseñan y programan tu solución.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {teamMembers.map((member, idx) => (
                <Reveal key={member.name} delay={idx * 150}>
                  <div className="group relative p-8 sm:p-10 rounded-2xl border border-line bg-surface hover:border-ink/40 transition-all duration-300 shadow-sm hover:shadow-md space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-canvas border border-line flex items-center justify-center type-title font-bold text-ink group-hover:bg-ink group-hover:text-white transition-all">
                          {member.initials}
                        </div>
                        <div>
                          <h3 className="type-title text-ink">
                            {member.name}
                          </h3>
                          <span className="inline-block type-eyebrow text-ink-muted mt-0.5">
                            {member.role}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="font-sans text-sm sm:text-base font-light leading-relaxed text-ink-muted">
                      {member.bio}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-xs font-sans bg-canvas text-ink-muted border border-line/70"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-line/60 flex items-center gap-4">
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-sans font-medium text-ink-muted hover:text-ink transition-colors"
                      >
                        GitHub
                      </a>
                      <span className="text-line">•</span>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-sans font-medium text-ink-muted hover:text-ink transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN 02: CÓMO TRABAJAMOS / PILARES */}
        <section className="w-full py-20 sm:py-28 border-b border-line bg-canvas">
          <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5 space-y-6">
                <Reveal>
                  <span className="block font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-ink-muted mb-3">
                    02 / Qué Hacemos
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight text-ink">
                    Especialidades y flujo de trabajo.
                  </h2>
                  <p className="font-sans text-base font-light leading-relaxed text-ink-muted mt-4">
                    Desarrollo web a medida (Next.js, TypeScript), automatización de procesos repetitivos, integración de bases de datos y diseño enfocado 100% en conversión comercial.
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-7 space-y-6">
                {pillars.map((pilar, idx) => (
                  <Reveal key={pilar.title} delay={idx * 120}>
                    <div className="p-6 sm:p-8 rounded-2xl border border-line bg-surface flex flex-col sm:flex-row items-start gap-6 hover:border-ink/30 transition-all">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="font-sans text-xs font-bold text-ink-muted tracking-wider">
                            {pilar.num}
                          </span>
                          <h3 className="text-xl font-display font-medium text-ink">
                            {pilar.title}
                          </h3>
                        </div>
                        <p className="font-sans text-sm font-light leading-relaxed text-ink-muted">
                          {pilar.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 03: VALORES Y CULTURA */}
        <section className="w-full py-20 sm:py-28 border-b border-line bg-canvas">
          <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
            <Reveal className="mb-14 text-center max-w-2xl mx-auto">
              <span className="block font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-ink-muted mb-3">
                03 / Cultura de Trabajo
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight text-ink">
                Nuestros valores indispensables.
              </h2>
              <p className="font-sans text-base font-light text-ink-muted mt-3">
                Principios sobre los que construimos cada línea de código y cada relación con nuestros clientes.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, idx) => (
                <Reveal key={val.title} delay={idx * 100}>
                  <div className="h-full p-8 rounded-2xl border border-line bg-surface/70 backdrop-blur-sm space-y-4 hover:border-ink/30 transition-all flex flex-col justify-between">
                    <div className="space-y-3">
                      <h3 className="text-lg font-display font-medium text-ink leading-snug">
                        {val.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm font-light leading-relaxed text-ink-muted">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN 04: CTA */}
        <section className="w-full py-20 sm:py-28 bg-canvas">
          <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-8">
            <Reveal className="space-y-4 max-w-2xl mx-auto">
              <span className="block font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-ink-muted">
                04 / Empieza Hoy
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight text-ink">
                Cuéntanos qué necesita tu negocio.
              </h2>
              <p className="font-sans text-base sm:text-lg font-light text-ink-muted">
                Analizamos tu caso sin compromiso y te proponemos una solución técnica a medida con presupuesto cerrado.
              </p>
            </Reveal>

            <Reveal delay={150} className="flex items-center justify-center gap-4 pt-4">
              <InteractiveHoverLink href="/contacto" text="Iniciar proyecto" />
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
