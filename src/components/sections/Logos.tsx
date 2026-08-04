import React from "react";

export const Logos: React.FC = () => {
  const logos = ["Vercel", "Stripe", "Supabase", "Linear", "Tailwind", "Resend"];

  return (
    <section className="py-12 border-y border-slate-200/60 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-8">
          Compatible con las mejores herramientas del ecosistema moderno
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-lg sm:text-xl font-bold text-slate-600 dark:text-slate-300 tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
