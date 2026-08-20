"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Menu, X } from "lucide-react";
import { IsotipoIcon } from "@/components/ui/logo-isotipo";
import { LogoWordmark } from "@/components/ui/logo-wordmark";
import { SlideTabs } from "@/components/ui/slide-tabs";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let frame = 0;

    const read = () => {
      frame = 0;
      const currentScrollY = window.scrollY;

      if (currentScrollY > 40) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 8) {
          setVisible(false);
        } else if (lastScrollY - currentScrollY > 8) {
          setVisible(true);
        }
      } else {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    /* Un vistazo por fotograma como mucho. El scroll nativo de un móvil dispara
       muchos más eventos que fotogramas hay, y cada uno leía `scrollY` —que
       fuerza al navegador a resolver el layout pendiente— antes de decidir. */
    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(read);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    ...siteConfig.mainNavItems,
    ...(siteConfig.secondaryNavItems ?? []),
  ];

  return (
    <header
      className={cn(
        "fixed top-4 sm:top-5 left-4 sm:left-6 right-4 sm:right-6 z-50 flex justify-center transition-all duration-300 pointer-events-none transform",
        visible || mobileMenuOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-24 opacity-0"
      )}
    >
      {/* DOCK BAR CON EFECTO CRISTAL ESMERILADO DE ALTO BLUR (BG-WHITE/75 BACKDROP-BLUR-XL) */}
      <div className="pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 px-6 sm:px-8 py-3.5 rounded-[2rem] border border-neutral-300/80 bg-white/75 backdrop-blur-xl backdrop-saturate-150 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 w-full text-ink">
        {/* LOGO VECTORIAL OFICIAL DE MARCA (PUBLIC/LOGOS/AETTHEL-LOGO.SVG) EN EL EXTREMO IZQUIERDO */}
        <Link
          href="/"
          aria-label={siteConfig.name}
          className="flex items-center px-1.5 py-0.5 rounded-xl text-neutral-700 hover:text-neutral-950 hover:bg-neutral-200/40 transition-colors shrink-0"
        >
          <LogoWordmark className="h-6 sm:h-6.5 md:h-7 w-auto shrink-0 opacity-90 hover:opacity-100 transition-opacity" />
        </Link>

        {/* Selector deslizante de enlaces */}
        <SlideTabs items={navItems} className="hidden lg:flex" />

        {/* MOBILE MENU TOGGLE */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-transparent hover:bg-neutral-200/50 text-neutral-700 hover:text-neutral-950 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-18 left-4 sm:left-6 right-4 sm:right-6 bg-white/90 backdrop-blur-xl border border-neutral-200 rounded-[1.75rem] p-3.5 shadow-xl animate-fade-in lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium uppercase tracking-wider transition-colors",
                    "bg-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80",
                    isActive && "bg-white font-bold text-neutral-900 shadow-sm border border-neutral-200/80"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
