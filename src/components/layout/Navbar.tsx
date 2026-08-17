"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Menu, X } from "lucide-react";
import { IsotipoIcon } from "@/components/ui/logo-isotipo";
import { LogoWordmark } from "@/components/ui/logo-wordmark";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    ...siteConfig.mainNavItems,
    ...(siteConfig.secondaryNavItems ?? []),
  ];

  return (
    <header
      className={cn(
        "fixed top-5 sm:top-6 left-5 sm:left-6 right-5 sm:right-6 z-50 flex justify-center transition-all duration-300 pointer-events-none transform",
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
          className="flex items-center px-2 py-1 rounded-xl hover:bg-neutral-200/50 transition-colors text-ink shrink-0"
        >
          <LogoWordmark className="h-6 sm:h-7 md:h-8 w-auto shrink-0" />
        </Link>

        {/* BOTONES MAS CUADRADOS, SIN FONDO (SOLO HOVER EN CLARO) */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-xl type-body font-semibold uppercase tracking-wider transition-all duration-200",
                  "bg-transparent text-ink hover:bg-neutral-200/50",
                  isActive && "bg-neutral-200/60 font-bold"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-transparent hover:bg-neutral-200/50 text-ink transition-colors"
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

      {/* MOBILE MENU DRAWER CON BLUR */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-20 left-5 sm:left-6 right-5 sm:right-6 bg-white/90 backdrop-blur-xl border border-neutral-200 rounded-[2rem] p-4 shadow-2xl animate-fade-in lg:hidden">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl type-body font-semibold uppercase tracking-wider transition-colors",
                    "bg-transparent text-ink hover:bg-neutral-100",
                    isActive && "bg-neutral-100 font-bold"
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
