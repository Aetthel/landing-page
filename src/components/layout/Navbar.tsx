"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, Volume2, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-stone-50/90 dark:bg-neutral-900/90 backdrop-blur-md border-b border-stone-200 dark:border-neutral-800 py-3 shadow-xs"
          : "bg-transparent py-5"
      )}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Desktop Navbar Layout */}
        <div className="hidden lg:block relative">
          {!scrolled ? (
            /* TOP STATE: Left group | Centered Brand | Right group */
            <div className="flex items-center justify-between min-h-[44px]">
              {/* Left Principal Links */}
              <nav className="flex items-center gap-2">
                {siteConfig.mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-1.5 rounded-full border border-neutral-400/60 dark:border-neutral-600 text-xs font-medium uppercase tracking-wider text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-all flex items-center gap-1"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-70" />
                  </Link>
                ))}
              </nav>

              {/* Centered Brand Title */}
              <div className="absolute left-1/2 -translate-x-1/2 font-serif text-xl tracking-tight text-neutral-900 dark:text-neutral-100 font-normal">
                <Link href="/">{siteConfig.name}</Link>
              </div>

              {/* Right Secondary Links & Utility controls */}
              <nav className="flex items-center gap-2">
                {siteConfig.secondaryNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-1.5 rounded-full border border-neutral-400/60 dark:border-neutral-600 text-xs font-medium uppercase tracking-wider text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-all flex items-center gap-1"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-70" />
                  </Link>
                ))}

                {/* Audio Button */}
                <button
                  type="button"
                  aria-label="Audio toggle"
                  className="w-8 h-8 rounded-full border border-neutral-400/60 dark:border-neutral-600 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors ml-1"
                >
                  <Volume2 className="w-3.5 h-3.5 opacity-70" />
                </button>

                {/* Language Switch */}
                <div className="flex items-center bg-orange-600 text-white rounded-full px-2.5 py-1 text-xs font-bold gap-1.5 ml-1 select-none">
                  <span className="w-4 h-4 rounded-full bg-white text-orange-600 flex items-center justify-center text-[9px] font-extrabold">
                    ✓
                  </span>
                  <span>ES</span>
                </div>
              </nav>
            </div>
          ) : (
            /* SCROLLED DOWN STATE: Brand on far Left | All Links on Right */
            <div className="flex items-center justify-between min-h-[44px] animate-fade-in">
              {/* Brand Title on the Left */}
              <div className="font-serif text-xl tracking-tight text-neutral-900 dark:text-neutral-100 font-normal">
                <Link href="/">{siteConfig.name}</Link>
              </div>

              {/* Combined Navigation Links on the Right */}
              <nav className="flex items-center gap-2 flex-wrap justify-end">
                {/* Main links */}
                {siteConfig.mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-1.5 rounded-full border border-neutral-400/60 dark:border-neutral-600 text-xs font-medium uppercase tracking-wider text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-all flex items-center gap-1"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-70" />
                  </Link>
                ))}

                {/* Secondary links */}
                {siteConfig.secondaryNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-1.5 rounded-full border border-neutral-400/60 dark:border-neutral-600 text-xs font-medium uppercase tracking-wider text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-all flex items-center gap-1"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-70" />
                  </Link>
                ))}

                {/* Audio Button */}
                <button
                  type="button"
                  aria-label="Audio toggle"
                  className="w-8 h-8 rounded-full border border-neutral-400/60 dark:border-neutral-600 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors ml-1"
                >
                  <Volume2 className="w-3.5 h-3.5 opacity-70" />
                </button>

                {/* Language Switch */}
                <div className="flex items-center bg-orange-600 text-white rounded-full px-2.5 py-1 text-xs font-bold gap-1.5 ml-1 select-none">
                  <span className="w-4 h-4 rounded-full bg-white text-orange-600 flex items-center justify-center text-[9px] font-extrabold">
                    ✓
                  </span>
                  <span>ES</span>
                </div>
              </nav>
            </div>
          )}
        </div>

        {/* Mobile & Tablet Header Bar */}
        <div className="lg:hidden flex items-center justify-between min-h-[44px]">
          <Link href="/" className="font-serif text-lg tracking-tight font-normal text-neutral-900 dark:text-neutral-100">
            {siteConfig.name}
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-orange-600 text-white rounded-full px-2 py-0.5 text-xs font-bold gap-1 select-none">
              <span>ES</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-6 shadow-lg">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block mb-3">
              Principal
            </span>
            <div className="flex flex-col gap-2">
              {siteConfig.mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-xs font-medium uppercase tracking-wider text-neutral-800 dark:text-neutral-200 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block mb-3">
              Secundarios
            </span>
            <div className="flex flex-col gap-2">
              {siteConfig.secondaryNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-xs font-medium uppercase tracking-wider text-neutral-800 dark:text-neutral-200 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
