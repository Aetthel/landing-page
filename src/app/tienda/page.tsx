import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { HeroGradient } from "@/components/ui/aurora-background";

export const metadata: Metadata = {
  title: "Tienda | Soluciones y Plantillas Digitales",
  description:
    "Tienda Aetthel: recursos, plantillas y componentes digitales optimizados. Próximamente disponible.",
  alternates: {
    canonical: "/tienda",
  },
};

export default function TiendaPage() {
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-7">
                <span className="block type-eyebrow text-brand animate-rise-in rise-delay-1">
                  Tienda Aetthel
                </span>

                <h1 className="mt-6 type-display text-white">
                  <span className="block animate-rise-in rise-delay-1">
                    Nuevo espacio,
                  </span>
                  <span className="block text-brand animate-rise-in rise-delay-2">
                    próximamente.
                  </span>
                </h1>
              </div>

              <div className="lg:col-span-5 max-w-xl space-y-6 animate-rise-in rise-delay-3">
                <p className="type-lead hero-lead text-neutral-400">
                  Estamos preparando productos digitales y recursos de diseño. Mientras tanto, si necesitas una solución a medida para tu negocio, escríbenos directamente.
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.18em] text-brand hover:text-white transition-colors"
                >
                  Contactar con el estudio
                  <ArrowUpRight className="w-4 h-4 stroke-[1.75]" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
