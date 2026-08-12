"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { InteractiveHoverLink } from "@/components/ui/interactive-hover-button";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 30) {
        setScrolled(true);
        // Hide when scrolling down, reveal when scrolling up
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
          setVisible(false);
        } else if (lastScrollY - currentScrollY > 5) {
          setVisible(true);
        }
      } else {
        setScrolled(false);
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform",
        visible || mobileMenuOpen ? "translate-y-0" : "-translate-y-full",
        scrolled
          ? "bg-canvas/90 backdrop-blur-md border-b border-neutral-200/80 py-3 shadow-2xs"
          : "bg-transparent py-4",
      )}
    >
      {/* La animación va aquí dentro y no en el <header>: ese transform lo usa
          el ocultado por scroll y una animación con `both` lo dejaría fijado. */}
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 animate-rise-in rise-delay-3">
        {/* Desktop Header */}
        <div className="hidden lg:block relative">
          {!scrolled ? (
            /* Top State: Left Main Pills | Centered Isotype | Right Contact Pill */
            <div className="flex items-center justify-between min-h-[44px]">
              {/* Left Main Pills */}
              <nav className="flex items-center gap-2">
                {siteConfig.mainNavItems.map((item) => (
                  <InteractiveHoverLink
                    key={item.href}
                    href={item.href}
                    text={item.label}
                  />
                ))}
              </nav>

              {/* Centered Isotype */}
              <Link
                href="/"
                aria-label={siteConfig.name}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center pointer-events-auto"
              >
                <Image
                  src="/logos/aetthel-isotipo.png"
                  alt={siteConfig.name}
                  width={45}
                  height={36}
                  priority
                  className="h-9 w-auto brightness-0 invert"
                />
              </Link>

              {/* Right Secondary Pills & Contact */}
              <nav className="flex items-center gap-2">
                {siteConfig.secondaryNavItems?.map((item) => (
                  <InteractiveHoverLink
                    key={item.href}
                    href={item.href}
                    text={item.label}
                  />
                ))}
              </nav>
            </div>
          ) : (
            /* Scrolled Down State: Full Wordmark on Left | Pills on Right */
            <div className="flex items-center justify-between min-h-[44px] animate-fade-in">
              <Link
                href="/"
                aria-label={siteConfig.name}
                className="flex items-center"
              >
                <Image
                  src="/logos/aetthel-wordmark.png"
                  alt={siteConfig.name}
                  width={96}
                  height={24}
                  priority
                  className="h-6 w-auto brightness-0"
                />
              </Link>

              <nav className="flex items-center gap-2">
                {siteConfig.mainNavItems.map((item) => (
                  <InteractiveHoverLink
                    key={item.href}
                    href={item.href}
                    text={item.label}
                    className="px-5 py-1.5 text-[11px] bg-white/80"
                  />
                ))}
              </nav>
            </div>
          )}
        </div>

        {/* Mobile Header Bar */}
        <div className="lg:hidden flex items-center justify-between min-h-[44px]">
          <Link
            href="/"
            aria-label={siteConfig.name}
            className="flex items-center"
          >
            <Image
              src="/logos/aetthel-wordmark.png"
              alt={siteConfig.name}
              width={88}
              height={22}
              priority
              className={cn("h-5.5 w-auto transition-all", scrolled ? "brightness-0" : "brightness-0 invert")}
            />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full border border-neutral-300 bg-white text-neutral-800"
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

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-canvas border-b border-neutral-200 px-6 py-6 shadow-lg animate-fade-in">
          <div className="flex flex-col gap-2">
            {siteConfig.mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg border border-line bg-white hover:bg-ink hover:text-white hover:border-ink text-xs font-sans font-medium uppercase tracking-wider text-ink transition-all flex items-center justify-between"
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
