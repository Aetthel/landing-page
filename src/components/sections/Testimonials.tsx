import React from "react";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/Badge";
import { Star, Quote } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="blue">Opiniones de Clientes</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Lo que dicen quienes ya confían en nosotros
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Descubre cómo empresas y startups están acelerando su crecimiento.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300 dark:text-slate-700" />
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <img
                  src={item.avatarUrl}
                  alt={item.author}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {item.role} · <span className="text-blue-600 dark:text-blue-400 font-medium">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
