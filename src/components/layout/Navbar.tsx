"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
          ? "bg-canvas/90 backdrop-blur-md border-b border-neutral-200/80 py-3 shadow-2xs"
          : "bg-transparent py-5"
      )}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Desktop Header */}
        <div className="hidden lg:block relative">
          {!scrolled ? (
            /* Top State: Centered Isotype | Right Principal Pills */
            <div className="flex items-center justify-end min-h-[44px]">

              {/* Centered Isotype */}
              <Link
                href="/"
                aria-label={siteConfig.name}
                className="absolute left-1/2 -translate-x-1/2 flex items-center"
              >
                <Image
                  src="/logos/aetthel-isotipo.png"
                  alt={siteConfig.name}
                  width={45}
                  height={36}
                  priority
                  className="h-9 w-auto"
                />
              </Link>

              {/* Right Principal Pills */}
              <nav className="flex items-center gap-2">
                {siteConfig.mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-1.5 rounded-full border border-line bg-white/70 hover:bg-brand hover:text-canvas hover:border-brand text-xs font-mono uppercase tracking-wider text-ink transition-all flex items-center gap-1"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </Link>
                ))}
              </nav>

            </div>
          ) : (
            /* Scrolled Down State: Full Wordmark on Left | Pills on Right */
            <div className="flex items-center justify-between min-h-[44px] animate-fade-in">
              <Link href="/" aria-label={siteConfig.name} className="flex items-center">
                <Image
                  src="/logos/aetthel-wordmark.png"
                  alt={siteConfig.name}
                  width={96}
                  height={24}
                  priority
                  className="h-6 w-auto"
                />
              </Link>

              <nav className="flex items-center gap-2">
                {siteConfig.mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-3.5 py-1.5 rounded-full border border-line bg-white/80 hover:bg-brand hover:text-canvas hover:border-brand text-[11px] font-mono uppercase tracking-wider text-ink transition-all flex items-center gap-1"
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
          <Link href="/" aria-label={siteConfig.name} className="flex items-center">
            <Image
              src="/logos/aetthel-wordmark.png"
              alt={siteConfig.name}
              width={88}
              height={22}
              priority
              className="h-5.5 w-auto"
            />
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
        <div className="lg:hidden bg-canvas border-b border-neutral-200 px-6 py-6 shadow-lg animate-fade-in">
          <div className="flex flex-col gap-2">
            {siteConfig.mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg border border-line bg-white hover:bg-brand hover:text-canvas hover:border-brand text-xs font-mono uppercase tracking-wider text-ink transition-all flex items-center justify-between"
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