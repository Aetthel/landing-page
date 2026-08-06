import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="w-full bg-canvas border-t border-neutral-300/80 text-neutral-900 pt-24 pb-12">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Top Footer Section: Large Claim + Contact Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-16 border-b border-neutral-300/80">
          
          {/* Large Claim */}
          <div className="space-y-2 max-w-3xl">
            <p className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.05] text-neutral-950">
              To grow a brand can be complicated, <span className="font-serif italic font-normal text-neutral-800">let’s make it simple.</span>
            </p>
          </div>

          {/* Address & Direct Contact Info */}
          <div className="space-y-4 font-mono text-xs text-neutral-600 uppercase tracking-wider flex-shrink-0">
            <div>
              Torre Aetthel Studio, 2B<br />
              28001 Madrid<br />
              España
            </div>
            <div>
              <a href="tel:+34910000000" className="hover:text-neutral-950 transition-colors block">
                +34 910 000 000
              </a>
              <a href="mailto:hello@aetthel.com" className="hover:text-neutral-950 transition-colors block">
                hello@aetthel.com
              </a>
            </div>
          </div>

        </div>

        {/* Big Action CTA Button */}
        <div className="flex items-center justify-between flex-wrap gap-6">
          <Link
            href="mailto:hello@aetthel.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-mono uppercase tracking-widest shadow-md transition-all group"
          >
            <span>Iniciar tu proyecto</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          {/* Socials Pills */}
          <div className="flex items-center gap-2">
            {siteConfig.socials.map((soc) => (
              <a
                key={soc.platform}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full border border-neutral-300 bg-white hover:bg-neutral-900 hover:text-white text-xs font-mono uppercase tracking-wider text-neutral-800 transition-all"
              >
                {soc.platform}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name} Brand & Tech Studio SL. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6 text-neutral-500">
            <Link href="#" className="hover:text-neutral-900">Aviso Legal</Link>
            <Link href="#" className="hover:text-neutral-900">Privacidad</Link>
            <Link href="#" className="hover:text-neutral-900">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};