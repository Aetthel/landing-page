import React from "react";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { HeroGradient } from "@/components/ui/aurora-background";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Política de Cookies | Aetthel",
  description:
    "Información sobre el uso de cookies y tecnologías de almacenamiento local en el sitio web de Aetthel Lab.",
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiesPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-dark text-white font-sans selection:bg-dark selection:text-white">
      <main className="flex-1 w-full">
        {/* HERO CABECERA */}
        <section
          data-cursor-surface="dark"
          className="relative isolate w-full min-h-[50vh] flex flex-col justify-center overflow-hidden bg-dark text-white pt-32 pb-20 sm:pt-40 sm:pb-28"
        >
          <HeroGradient tone="dark" />
          <div className="relative z-10 w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <span className="block type-eyebrow text-brand animate-rise-in rise-delay-1">
                Cookies
              </span>
              <h1 className="mt-6 type-display text-white">
                <span className="block animate-rise-in rise-delay-1">
                  Política de
                </span>
                <span className="block text-brand animate-rise-in rise-delay-2">
                  Cookies.
                </span>
              </h1>
              <p className="mt-6 type-lead text-neutral-400 animate-rise-in rise-delay-3 max-w-2xl">
                Última actualización: Agosto de 2026. Transparencia sobre el uso de cookies técnicas y almacenamiento local en nuestra plataforma.
              </p>
            </div>
          </div>
        </section>

        {/* CUERPO DEL DOCUMENTO */}
        <div className="relative z-20 rounded-t-[3.5rem] sm:rounded-t-[4.5rem] bg-canvas text-ink border-t border-line/80 py-20 sm:py-28 lg:py-32">
          <div className="w-full max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12">
            <Reveal className="prose prose-neutral max-w-none space-y-12 text-ink/90 font-light leading-relaxed">
              
              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink tracking-tight">
                  1. ¿Qué son las cookies y el almacenamiento web?
                </h2>
                <p className="text-base sm:text-lg text-ink-muted">
                  Las cookies y las tecnologías de almacenamiento web (como <code>sessionStorage</code> y <code>localStorage</code>) son pequeños archivos y registros de datos que los sitios web almacenan en tu dispositivo durante la navegación para recordar tus preferencias, optimizar el rendimiento técnico y mejorar la experiencia de usuario.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink tracking-tight">
                  2. ¿Qué cookies y tecnologías utiliza este sitio web?
                </h2>
                <p className="text-base sm:text-lg text-ink-muted">
                  En Aetthel apostamos por el mínimo impacto y la máxima privacidad. <strong>No utilizamos cookies invasivas de terceros, ni redes publicitarias de rastreo ni venta de datos</strong>. Empleamos exclusivamente tecnologías técnicas y de preferencia:
                </p>
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left border-collapse border border-line text-sm sm:text-base">
                    <thead>
                      <tr className="bg-white border-b border-line">
                        <th className="p-3.5 font-medium text-ink">Identificador / Nombre</th>
                        <th className="p-3.5 font-medium text-ink">Tipo</th>
                        <th className="p-3.5 font-medium text-ink">Finalidad</th>
                        <th className="p-3.5 font-medium text-ink">Duración</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line text-ink-muted">
                      <tr>
                        <td className="p-3.5 font-mono text-xs text-ink">aetthel:intro</td>
                        <td className="p-3.5">Técnica (sessionStorage)</td>
                        <td className="p-3.5">Evita reproducir la cortina de animación inicial de entrada en cada recarga de página dentro de la misma sesión.</td>
                        <td className="p-3.5">Sesión actual</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-mono text-xs text-ink">theme / preferences</td>
                        <td className="p-3.5">Preferencia (localStorage)</td>
                        <td className="p-3.5">Almacena preferencias del usuario como reducción de movimiento o accesibilidad del sistema.</td>
                        <td className="p-3.5">Persistente</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink tracking-tight">
                  3. Cookies de terceros
                </h2>
                <p className="text-base sm:text-lg text-ink-muted">
                  En caso de interactuar con elementos externos vinculados (como perfiles sociales en LinkedIn o Instagram, o vídeos externos), dichas plataformas externas pueden aplicar sus propias políticas de cookies cuando visitas sus respectivos dominios.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink tracking-tight">
                  4. Cómo gestionar o eliminar las cookies en tu navegador
                </h2>
                <p className="text-base sm:text-lg text-ink-muted">
                  Puedes configurar tu navegador en cualquier momento para rechazar, bloquear o eliminar cookies instaladas en tu equipo. A continuación te facilitamos los enlaces a la documentación oficial de los navegadores más habituales:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-ink-muted text-base sm:text-lg">
                  <li><strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
                  <li><strong>Apple Safari:</strong> Ajustes / Preferencias &gt; Privacidad &gt; Bloquear todas las cookies.</li>
                  <li><strong>Mozilla Firefox:</strong> Opciones &gt; Privacidad &amp; Seguridad &gt; Cookies y datos del sitio.</li>
                  <li><strong>Microsoft Edge:</strong> Configuración &gt; Permisos del sitio &gt; Cookies y datos de sitios almacenados.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink tracking-tight">
                  5. Contacto
                </h2>
                <p className="text-base sm:text-lg text-ink-muted">
                  Si tienes cualquier duda acerca de nuestra política de cookies o el tratamiento técnico de datos en Aetthel Lab, puedes escribirnos a <a href="mailto:aetthel@gmail.com" className="text-ink underline decoration-brand decoration-2 underline-offset-4 hover:text-accent transition-colors font-normal">aetthel@gmail.com</a>.
                </p>
              </section>

            </Reveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
