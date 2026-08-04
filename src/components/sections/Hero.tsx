"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Play, Star, CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/0 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Top Pill Announcement */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-xs font-semibold text-blue-700 dark:text-blue-300 shadow-sm animate-fade-in">
            <Badge variant="blue" className="bg-blue-600 text-white border-none py-0.5 px-2">
              Nuevo v2.0
            </Badge>
            <span>Optimizado para Next.js App Router & Tailwind CSS</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Lanza tu producto web con{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              máxima conversión
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {siteConfig.description} Diseñado desde cero para rendimiento extremo, mantenibilidad y rapidez de desarrollo.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button variant="glow" size="lg" className="w-full sm:w-auto gap-2 text-base">
              <span>Empieza gratis hoy</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 text-base">
              <Play className="w-4 h-4 text-blue-600 fill-blue-600/20" />
              <span>Ver demostración</span>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex -space-x-2">
              <img
                className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                alt="Usuario 1"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
                alt="Usuario 2"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                alt="Usuario 3"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 object-cover"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100"
                alt="Usuario 4"
              />
            </div>
            <div className="flex items-center gap-1">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-slate-900 dark:text-slate-200 ml-1">4.9/5</span>
              <span>de +1,200 creadores y desarrolladores</span>
            </div>
          </div>
        </div>

        {/* Product Dashboard Preview Mockup Card */}
        <div className="mt-14 relative mx-auto max-w-5xl">
          <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl shadow-2xl overflow-hidden p-4 sm:p-6">
            {/* Window Top Controls */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
                <span className="ml-2 text-xs font-mono text-slate-600 dark:text-slate-400 hidden sm:inline">
                  dashboard.launchpulse.app
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Sistema Online
                </span>
              </div>
            </div>

            {/* Dashboard Mockup Widgets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 font-medium mb-1">
                  <span>Conversiones Totales</span>
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">14,280</div>
                <div className="text-xs text-emerald-600 font-medium mt-1">+24.5% este mes</div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 font-medium mb-1">
                  <span>Usuarios Activos</span>
                  <Users className="w-4 h-4 text-blue-500" />
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">8,940</div>
                <div className="text-xs text-blue-600 font-medium mt-1">+12.1% esta semana</div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 font-medium mb-1">
                  <span>Velocidad de Carga</span>
                  <Zap className="w-4 h-4 text-purple-500" />
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">0.4s</div>
                <div className="text-xs text-purple-600 font-medium mt-1">Score Lighthouse: 100/100</div>
              </div>
            </div>

            {/* Mock Chart Area */}
            <div className="h-44 sm:h-56 bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent rounded-xl border border-blue-500/20 p-4 flex flex-col justify-end">
              <div className="flex items-end justify-between h-full gap-2 pt-6">
                {[40, 65, 45, 80, 55, 90, 75, 100, 85, 110, 95, 120].map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
                    <div
                      className="w-full bg-gradient-to-t from-blue-600 to-indigo-500 rounded-t group-hover:from-blue-500 group-hover:to-indigo-400 transition-all duration-300"
                      style={{ height: `${(val / 120) * 100}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
