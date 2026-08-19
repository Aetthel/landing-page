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
        "fixed top-5 sm:top-6 left-5 sm:left-6 right-5 sm:right-6 z-50 flex justify-center transition-all duration-300 pointer-events-none transform",
        visible || mobileMenuOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-24 opacity-0"
      )}
    >
      {/* DOCK BAR CON EFECTO CRISTAL ESMERILADO DE ALTO BLUR (BG-WHITE/75 BACKDROP-BLUR-XL)

          El cristal esmerilado es solo de `lg` para arriba. Un `backdrop-filter`
          sobre una barra fija obliga al navegador a volver a desenfocar todo lo
          que pasa por detrás en cada fotograma de scroll —es de las operaciones
          más caras que hay en móvil, y ahí se traduce en tirones justo al
          empezar a bajar—. Por debajo, el mismo blanco un punto más opaco: sin
          desenfoque que calcular, la barra se lee igual sobre el lienzo claro y
          sobre el reel oscuro. */}
      <div className="pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 px-6 sm:px-8 py-3.5 rounded-[2rem] border border-neutral-300/80 bg-white/90 lg:bg-white/75 lg:backdrop-blur-xl lg:backdrop-saturate-150 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 w-full text-ink">
        {/* LOGO VECTORIAL OFICIAL DE MARCA (PUBLIC/LOGOS/AETTHEL-LOGO.SVG) EN EL EXTREMO IZQUIERDO */}
        <Link
          href="/"
          aria-label={siteConfig.name}
          className="flex items-center px-2 py-1 rounded-xl hover:bg-neutral-200/50 transition-colors text-ink shrink-0"
        >
          <LogoWordmark className="h-6 sm:h-7 md:h-8 w-auto shrink-0" />
        </Link>

        {/* Un único selector que se desplaza entre enlaces, en vez de un fondo
            que se enciende y se apaga en cada uno */}
        <SlideTabs items={navItems} className="hidden lg:flex" />

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
                    /* Mismo blanco que la pastilla de escritorio: el activo se
                       señala igual en los dos menús */
                    isActive && "bg-white font-bold text-ink shadow-sm border border-neutral-200/80"
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
