import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="w-full bg-[#0E0F11] text-white pt-20 pb-12 border-t border-neutral-900">
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Main Grid: Headline & Action Left / Address & Contacts Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline & Orange Pill CTA Button */}
          <div className="lg:col-span-8 space-y-10">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] text-white max-w-3xl">
              Hacer crecer una marca puede ser complejo,{" "}
              <span className="text-neutral-200">hagámoslo simple.</span>
            </h2>

            <div className="pt-2">
              <a
                href="mailto:aetthel@gmail.com"
                className="inline-flex items-center gap-3 px-7 py-3 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-neutral-950 font-mono text-xs uppercase tracking-widest transition-all group"
              >
                <span>INICIAR TU PROYECTO</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2]" />
              </a>
            </div>
          </div>

          {/* Right Column: Address & Direct Phone/Email Info */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-12 lg:text-right">
            
            {/* Location & Contact Info */}
            <div className="space-y-4 font-mono text-xs text-neutral-400 uppercase tracking-widest leading-relaxed">
              <div>
                BARCELONA, CATALUNYA<br />
                ESPAÑA
              </div>
              
              <div className="pt-2 space-y-1">
                <a href="tel:+34696352940" className="hover:text-white transition-colors block">
                  +34 696 35 29 40
                </a>
                <a href="tel:+34639971393" className="hover:text-white transition-colors block">
                  +34 639 97 13 93
                </a>
                <a href="mailto:aetthel@gmail.com" className="hover:text-white transition-colors block text-neutral-300 font-semibold">
                  aetthel@gmail.com
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Navigation & Legal Links Row */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs font-mono text-neutral-400">
          
          {/* Left Navigation Links */}
          <div className="flex flex-wrap items-center gap-6">
            <Link href="#proyectos" className="hover:text-white transition-colors">Proyectos</Link>
            <Link href="#servicios" className="hover:text-white transition-colors">Servicios</Link>
            <Link href="#aetthel-lab" className="hover:text-white transition-colors">Estudio</Link>
            <Link href="#clientes" className="hover:text-white transition-colors">Clientes</Link>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>

          {/* Right Legal Links & Copyright */}
          <div className="flex flex-wrap items-center gap-6 text-neutral-500">
            <Link href="#" className="hover:text-neutral-400 transition-colors">Términos y Condiciones</Link>
            <Link href="#" className="hover:text-neutral-400 transition-colors">Política de Privacidad</Link>
            <Link href="#" className="hover:text-neutral-400 transition-colors">Política de Cookies</Link>
            <span>©2026 Aetthel Lab S.L.</span>
          </div>

        </div>

      </div>
    </footer>
  );
};