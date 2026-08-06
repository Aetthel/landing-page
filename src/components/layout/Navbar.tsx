"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#FAF9F6]/90 backdrop-blur-md border-b border-neutral-200/80 py-3 shadow-2xs"
          : "bg-transparent py-4"
      )}
    >
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Desktop Header */}
        <div className="hidden lg:block relative">
          {!scrolled ? (
            /* Top State: Left Pills | Center Coordinates | Right Pills + Lang */
            <div className="flex items-center justify-between min-h-[44px]">
              
              {/* Left Principal Pills */}
              <nav className="flex items-center gap-2">
                {siteConfig.mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-1.5 rounded-full border border-neutral-300/80 bg-white/70 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 text-xs font-mono uppercase tracking-wider text-neutral-800 transition-all flex items-center gap-1"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </Link>
                ))}
              </nav>

              {/* Center Coordinates & Location Stamp */}
              <div className="absolute left-1/2 -translate-x-1/2 text-center text-[11px] font-mono text-neutral-500 uppercase tracking-widest leading-tight">
                41.387 N, 2.168 E<br />
                <span className="text-neutral-400">EST. 2024 · BARCELONA</span>
              </div>

              {/* Right Secondary Pills & Contact */}
              <nav className="flex items-center gap-2">
                {siteConfig.secondaryNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-1.5 rounded-full border border-neutral-300/80 bg-white/70 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 text-xs font-mono uppercase tracking-wider text-neutral-800 transition-all flex items-center gap-1"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </Link>
                ))}

                {/* Language Switch */}
                <button
                  type="button"
                  className="px-3 py-1.5 rounded-full border border-neutral-300 bg-neutral-100 hover:bg-neutral-200 text-[11px] font-mono uppercase tracking-wider text-neutral-800 transition-colors ml-2"
                >
                  ES
                </button>
              </nav>

            </div>
          ) : (
            /* Scrolled Down State: Logo on Left | Combined Pills on Right */
            <div className="flex items-center justify-between min-h-[44px] animate-fade-in">
              <Link href="/" className="font-sans text-xl font-bold tracking-tight text-neutral-900">
                {siteConfig.name}®
              </Link>

              <nav className="flex items-center gap-2">
                {[...siteConfig.mainNavItems, ...siteConfig.secondaryNavItems].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-3.5 py-1.5 rounded-full border border-neutral-300/80 bg-white/80 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 text-[11px] font-mono uppercase tracking-wider text-neutral-800 transition-all flex items-center gap-1"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>

        {/* Mobile Header Bar */}
        <div className="lg:hidden flex items-center justify-between min-h-[44px]">
          <Link href="/" className="font-sans text-lg font-bold tracking-tight text-neutral-900">
            {siteConfig.name}®
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full border border-neutral-300 bg-white text-neutral-800"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F6] border-b border-neutral-200 px-6 py-6 shadow-lg animate-fade-in">
          <div className="flex flex-col gap-2">
            {[...siteConfig.mainNavItems, ...siteConfig.secondaryNavItems].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg border border-neutral-200 bg-white text-xs font-mono uppercase tracking-wider text-neutral-800 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};