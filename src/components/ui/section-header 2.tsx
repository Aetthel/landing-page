"use client";

import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center" | "split";
  tone?: "light" | "dark";
  className?: string;
  reveal?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  reveal = true,
}) => {
  const isDark = tone === "dark";

  const content = (
    <div
      className={cn(
        "w-full space-y-3 sm:space-y-4",
        align === "center" && "text-center mx-auto max-w-3xl flex flex-col items-center",
        align === "split" && "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start space-y-0",
        className
      )}
    >
      {align === "split" ? (
        <>
          <div className="lg:col-span-6 space-y-3">
            {eyebrow && (
              <span
                className={cn(
                  "block font-sans text-xs sm:text-sm font-medium uppercase tracking-[0.2em]",
                  isDark ? "text-neutral-400" : "text-ink-muted"
                )}
              >
                {eyebrow}
              </span>
            )}
            <h2
              className={cn(
                "type-display font-normal tracking-tight leading-[1.06]",
                isDark ? "text-white" : "text-ink"
              )}
            >
              {title}
            </h2>
          </div>
          {description && (
            <div className="lg:col-span-6 lg:hero-lead font-sans text-base sm:text-lg font-light leading-relaxed">
              <p className={isDark ? "text-neutral-300" : "text-ink-muted"}>
                {description}
              </p>
            </div>
          )}
        </>
      ) : (
        <>
          {eyebrow && (
            <span
              className={cn(
                "block font-sans text-xs sm:text-sm font-medium uppercase tracking-[0.2em]",
                isDark ? "text-neutral-400" : "text-ink-muted"
              )}
            >
              {eyebrow}
            </span>
          )}
          <h2
            className={cn(
              "type-display font-normal tracking-tight leading-[1.06]",
              isDark ? "text-white" : "text-ink"
            )}
          >
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                "text-base sm:text-lg font-sans font-light leading-relaxed max-w-2xl",
                align === "center" && "mx-auto",
                isDark ? "text-neutral-300" : "text-ink-muted"
              )}
            >
              {description}
            </p>
          )}
        </>
      )}
    </div>
  );

  if (reveal) {
    return <Reveal className="w-full">{content}</Reveal>;
  }

  return content;
};
