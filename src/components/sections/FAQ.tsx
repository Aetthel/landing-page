"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/Badge";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <Badge variant="slate">Dudas Frecuentes</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Resuelve todas tus dudas sobre la arquitectura y puesta en marcha.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {siteConfig.faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white focus:outline-none hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200",
                      isOpen && "rotate-180 text-blue-600"
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
