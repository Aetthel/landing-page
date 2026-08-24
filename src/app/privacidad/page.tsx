import React from "react";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { HeroGradient } from "@/components/ui/aurora-background";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Política de Privacidad | Aetthel",
  description:
    "Información sobre el tratamiento de datos personales y ejercicio de derechos conforme al RGPD y la LOPDGDD en Aetthel Lab.",
};

export default function PrivacidadPage() {
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
                Privacidad
              </span>
              <h1 className="mt-6 type-display text-white">
                <span className="block animate-rise-in rise-delay-1">
                  Política de
                </span>
                <span className="block text-brand animate-rise-in rise-delay-2">
                  Privacidad.
                </span>
              </h1>
              <p className="mt-6 type-lead text-neutral-400 animate-rise-in rise-delay-3 max-w-2xl">
                Última actualización: Agosto de 2026. Tu privacidad y el tratamiento honesto y transparente de tus datos personales son prioritarios para nosotros.
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
                  1. Responsable del tratamiento
                </h2>
                <p className="text-base sm:text-lg text-ink-muted">
                  El responsable del tratamiento de los datos recabados en este sitio web es <strong>Aetthel Lab S.L.</strong>, con domicilio en Barcelona, España, y correo de contacto para asuntos de privacidad: <a href="mailto:aetthel@gmail.com" className="text-ink underline decoration-brand decoration-2 underline-offset-4 hover:text-accent transition-colors font-normal">aetthel@gmail.com</a>.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink tracking-tight">
                  2. Datos personales que recopilamos
                </h2>
                <p className="text-base sm:text-lg text-ink-muted">
                  Recopilamos únicamente los datos necesarios para atender tus peticiones y prestar nuestros servicios:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-ink-muted text-base sm:text-lg">
                  <li><strong>Formulario de contacto y solicitudes:</strong> Nombre completo, correo electrónico, nombre de empresa, número de teléfono, rango de presupuesto orientativo y detalles del mensaje o proyecto.</li>
                  <li><strong>Datos de navegación:</strong> Dirección IP anonimizada, tipo de navegador y datos técnicos de rendimiento estrictamente necesarios para la seguridad y operativa del sitio.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink tracking-tight">
                  3. Finalidad y base jurídica del tratamiento
                </h2>
                <p className="text-base sm:text-lg text-ink-muted">
                  Tratamos tus datos con arreglo al Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD) para las siguientes finalidades:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-ink-muted text-base sm:text-lg">
                  <li><strong>Gestión de consultas y propuestas:</strong> Responder a solicitudes de información, presupuestos y llamadas técnicas (Base legal: aplicación de medidas precontractuales a petición del interesado).</li>
                  <li><strong>Ejecución del contrato:</strong> Desarrollo, despliegue, facturación y mantenimiento de los proyectos contratados (Base legal: ejecución del contrato).</li>
                  <li><strong>Cumplimiento de obligaciones legales:</strong> Facturación contable y fiscal según la normativa española vigente.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink tracking-tight">
                  4. Conservación de los datos
                </h2>
                <p className="text-base sm:text-lg text-ink-muted">
                  Los datos facilitados para consultas se conservarán durante el tiempo necesario para resolver la solicitud o mientras pueda derivarse alguna relación comercial. En caso de formalizarse un contrato, los datos se mantendrán durante la vigencia del servicio y los plazos legalmente exigidos para la atención de responsabilidades fiscales y tributarias.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink tracking-tight">
                  5. Destinatarios y encargados de tratamiento
                </h2>
                <p className="text-base sm:text-lg text-ink-muted">
                  Aetthel no vende ni cede tus datos personales a terceros. Para prestar el servicio técnico utilizamos proveedores tecnológicos que actúan como encargados de tratamiento bajo garantías contractuales conformes al RGPD:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-ink-muted text-base sm:text-lg">
                  <li><strong>Servicio de correo y notificaciones:</strong> Resend Inc. (para la entrega segura y encriptada de correos transaccionales del formulario).</li>
                  <li><strong>Alojamiento e infraestructura web:</strong> Plataformas de hosting de alto rendimiento con servidores seguros ubicados en la Unión Europea.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink tracking-tight">
                  6. Tus derechos
                </h2>
                <p className="text-base sm:text-lg text-ink-muted">
                  Puedes ejercer en cualquier momento tus derechos de <strong>acceso, rectificación, supresión (derecho al olvido), limitación del tratamiento, portabilidad y oposición</strong> enviando un correo electrónico a <a href="mailto:aetthel@gmail.com" className="text-ink underline decoration-brand decoration-2 underline-offset-4 hover:text-accent transition-colors font-normal">aetthel@gmail.com</a> con el asunto «Protección de Datos». Asimismo, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si consideras que tus derechos han sido vulnerados.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink tracking-tight">
                  7. Medidas de seguridad
                </h2>
                <p className="text-base sm:text-lg text-ink-muted">
                  Implementamos medidas técnicas y organizativas adecuadas (cifrado SSL/TLS en tránsito, validación estricta de formularios y controles de acceso) para proteger tus datos personales frente a accesos no autorizados, pérdida o alteración ilícita.
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
