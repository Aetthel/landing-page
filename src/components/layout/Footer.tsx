import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="w-full bg-[#0E0F11] text-white pt-20 pb-12 border-t border-neutral-900">
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Main Grid: Headline & Action Left / Address & Seal Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline & Orange Pill CTA Button */}
          <div className="lg:col-span-8 space-y-10">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] text-white max-w-3xl">
              To grow a brand can be complicated,{" "}
              <span className="text-neutral-200">let’s make it simple.</span>
            </h2>

            <div className="pt-2">
              <Link
                href="mailto:hello@aetthel.com"
                className="inline-flex items-center gap-3 px-7 py-3 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-neutral-950 font-mono text-xs uppercase tracking-widest transition-all group"
              >
                <span>START YOUR PROJECT</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Address, Phone & Certified Badge */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-12 lg:text-right">
            
            {/* Location & Contact Info */}
            <div className="space-y-4 font-mono text-xs text-neutral-400 uppercase tracking-widest leading-relaxed">
              <div>
                TORRE AETTHEL STUDIO, 2B<br />
                28001 MADRID<br />
                ESPAÑA
              </div>
              
              <div className="pt-2">
                <a href="tel:+34910000000" className="hover:text-white transition-colors block">
                  +34 910 000 000
                </a>
                <a href="mailto:hello@aetthel.com" className="hover:text-white transition-colors block">
                  hello@aetthel.com
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

          {/* Right Legal Links */}
          <div className="flex flex-wrap items-center gap-6 text-neutral-500">
            <Link href="#" className="hover:text-neutral-400 transition-colors">Terms & Conditions</Link>
            <Link href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-neutral-400 transition-colors">Política de cookies</Link>
            <span>©2026 Aetthel.Studio</span>
          </div>

        </div>

      </div>
    </footer>
  );
};