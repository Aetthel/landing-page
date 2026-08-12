import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InteractiveHoverLink } from "@/components/ui/interactive-hover-button";

export const Footer: React.FC = () => {
  return (
    <footer
      id="contacto"
      data-cursor-surface="dark"
      className="w-full bg-dark text-white py-20 sm:py-28 lg:py-32 border-t border-neutral-800"
    >
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Main Grid: Headline & Action Left / Address & Contacts Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline & Action CTA Button */}
          <div className="lg:col-span-8 space-y-10">
            {/* Los cortes de línea son parte del texto, no del reparto: la
                frase está pensada en tres golpes. `max-w-4xl` da sitio a la
                línea más larga para que no se parta por su cuenta. */}
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] text-white max-w-4xl">
              Transformamos tus ideas
              <br />
              en un producto real
              <br />
              {/* Bicolor de la marca: el cierre de la frase baja a gris */}
              <span className="text-neutral-400">contigo, paso a paso</span>
            </h2>

            <div className="pt-2">
              {/* Isla clara dentro del bloque oscuro: el cursor vuelve a tinta.
                  Colores invertidos respecto al uso en la Navbar: aquí la
                  píldora ya es lima, así que el punto que crece va en blanco
                  —conservando el `hover:bg-white` que tenía este CTA. */}
              <InteractiveHoverLink
                href="mailto:aetthel@gmail.com"
                text="Iniciar tu proyecto"
                data-cursor-surface="light"
                icon={<ArrowUpRight className="h-4 w-4" />}
                className="border-brand bg-brand px-7 py-3 text-neutral-950 tracking-widest"
                blobClassName="bg-white"
                revealClassName="text-neutral-950"
              />
            </div>
          </div>

          {/* Right Column: Address & Direct Phone/Email Info */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-12 lg:text-right">
            {/* Location & Contact Info */}
            {/* Mismo tratamiento de siempre —versalitas, tracking ancho, gris—
                solo que un punto más grande. El espaciado sube en proporción
                para que al crecer la letra el bloque no se apelmace. */}
            <div className="space-y-5 font-sans font-medium text-sm sm:text-base text-neutral-400 uppercase tracking-widest leading-relaxed">
              <div>
                BARCELONA, CATALUNYA
                <br />
                ESPAÑA
              </div>

              <div className="pt-2 space-y-1.5">
                <a
                  href="tel:+34696352940"
                  className="hover:text-white transition-colors block"
                >
                  +34 696 35 29 40
                </a>
                <a
                  href="tel:+34639971393"
                  className="hover:text-white transition-colors block"
                >
                  +34 639 97 13 93
                </a>
                <a
                  href="mailto:aetthel@gmail.com"
                  className="hover:text-white transition-colors block text-neutral-300 font-semibold"
                >
                  aetthel@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation & Legal Links Row */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs font-sans font-medium text-neutral-400">
          {/* Left Navigation Links */}
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="#proyectos"
              className="hover:text-white transition-colors"
            >
              Proyectos
            </Link>
            <Link
              href="#servicios"
              className="hover:text-white transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="#aetthel-lab"
              className="hover:text-white transition-colors"
            >
              Estudio
            </Link>
            <Link
              href="#clientes"
              className="hover:text-white transition-colors"
            >
              Clientes
            </Link>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>

          {/* Right Legal Links & Copyright */}
          <div className="flex flex-wrap items-center gap-6 text-neutral-500">
            <Link href="#" className="hover:text-neutral-400 transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="#" className="hover:text-neutral-400 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="hover:text-neutral-400 transition-colors">
              Política de Cookies
            </Link>
            <span>©2026 Aetthel Lab S.L.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
