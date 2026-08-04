import React from "react";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/Badge";
import { Sliders, Layers, Rocket, LucideIcon } from "lucide-react";

const stepIconMap: Record<string, LucideIcon> = {
  Sliders,
  Layers,
  Rocket,
};

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="purple">Paso a Paso</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            ¿Cómo funciona la estructura?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            De la idea al despliegue en producción en 3 sencillos pasos.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {siteConfig.steps.map((item, idx) => {
            const Icon = stepIconMap[item.iconName] || Rocket;
            return (
              <div
                key={item.step}
                className="relative bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-blue-600/30 dark:text-blue-500/20 font-mono">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Connecting Line for desktop (between cards) */}
                {idx < siteConfig.steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-10 w-8 border-t-2 border-dashed border-slate-300 dark:border-slate-700" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
