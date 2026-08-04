"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, Loader2, Mail } from "lucide-react";

export const CTA: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 sm:p-14 text-white shadow-2xl overflow-hidden">
          {/* Decorative overlay shapes */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              ¿Listo para lanzar tu proyecto hoy?
            </h2>
            <p className="text-base sm:text-lg text-blue-100 font-normal">
              Únete a cientos de emprendedores y desarrolladores que ya están construyendo landing pages de alto impacto con Next.js y Tailwind.
            </p>

            {status === "success" ? (
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 inline-flex items-center gap-2 text-white font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>¡Gracias! Te hemos enviado un enlace de acceso prioritario.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Mail className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white text-sm shadow-inner"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-slate-900 hover:bg-slate-800 text-white py-3.5 px-6 rounded-xl font-bold shadow-lg gap-2 text-sm shrink-0"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <span>Unirse Gratis</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            )}

            <p className="text-xs text-blue-200">
              Sin tarjeta de crédito requerida · Prueba gratuita de 14 días · Cancela cuando quieras
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
