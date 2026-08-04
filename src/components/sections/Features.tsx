import React from "react";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/Badge";
import {
  Zap,
  BarChart3,
  ShieldCheck,
  Workflow,
  Sparkles,
  Globe,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  BarChart3,
  ShieldCheck,
  Workflow,
  Sparkles,
  Globe,
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="blue">Características Principales</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Todo lo que necesitas para escalar tu proyecto
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Diseñado cuidadosamente para que puedas concentrarte en el valor de tu negocio mientras nosotros nos encargamos de la infraestructura y el diseño.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.features.map((feature) => {
            const Icon = iconMap[feature.iconName] || Zap;
            return (
              <div
                key={feature.id}
                className="group relative p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    {feature.badge && <Badge variant="purple">{feature.badge}</Badge>}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
