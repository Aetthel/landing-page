import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="w-full bg-stone-100 dark:bg-neutral-900 border-t border-stone-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 mt-auto py-16">
      {/* Shared container margin matching header & all sections */}
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-300 dark:border-neutral-800">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="font-serif text-2xl tracking-tight text-neutral-900 dark:text-neutral-100 block">
              {siteConfig.name}
            </Link>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="pt-2 text-xs font-mono text-neutral-500">
              [ ESTRUCTURA: FOOTER & CONTACTO ]
            </div>
          </div>

          {/* Nav Group 1 (Principal) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Navegación Principal
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.mainNavItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:underline flex items-center gap-1">
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Group 2 (Secundarios & Socials) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Secundarios & Redes
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.secondaryNavItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:underline flex items-center gap-1">
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-mono gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.</p>
          <p>[ Estructura de Maquetación Limpia ]</p>
        </div>
      </div>
    </footer>
  );
};
