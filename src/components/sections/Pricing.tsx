"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <Badge variant="emerald">Planes y Precios</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Precios transparentes y sin sorpresas
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Escoge el plan perfecto para escalar la presencia de tu producto.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span
              className={cn(
                "text-sm font-medium transition-colors cursor-pointer",
                !isYearly ? "text-slate-900 dark:text-white font-bold" : "text-slate-600 dark:text-slate-400"
              )}
              onClick={() => setIsYearly(false)}
            >
              Facturación Mensual
            </span>
            <button
              type="button"
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-12 h-6 bg-slate-200 dark:bg-slate-800 rounded-full p-1 transition-colors duration-200 focus:outline-none"
              aria-label="Toggle pricing cycle"
            >
              <div
                className={cn(
                  "w-4 h-4 bg-blue-600 rounded-full transition-transform duration-200 shadow-md",
                  isYearly ? "translate-x-6" : "translate-x-0"
                )}
              />
            </button>
            <span
              className={cn(
                "text-sm font-medium transition-colors cursor-pointer flex items-center gap-1.5",
                isYearly ? "text-slate-900 dark:text-white font-bold" : "text-slate-600 dark:text-slate-400"
              )}
              onClick={() => setIsYearly(true)}
            >
              Facturación Anual
              <Badge variant="emerald" className="text-[10px] py-0 px-1.5">
                Ahorra 20%
              </Badge>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {siteConfig.pricing.map((plan) => {
            const price = isYearly ? plan.priceYearly : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={cn(
                  "relative rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between",
                  plan.popular
                    ? "bg-gradient-to-b from-blue-600/10 via-indigo-600/5 to-transparent dark:from-blue-950/40 dark:to-slate-900 border-2 border-blue-600 dark:border-blue-500 shadow-xl scale-105 z-10"
                    : "bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                    Más Popular
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 h-10">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
                      ${price}
                    </span>
                    <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                      / mes {isYearly ? "(facturado anualmente)" : ""}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={plan.popular ? "glow" : "outline"}
                  className="w-full justify-center"
                >
                  {plan.ctaText}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
