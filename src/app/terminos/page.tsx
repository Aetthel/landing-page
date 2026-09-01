import React from "react";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { HeroGradient } from "@/components/ui/aurora-background";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Aetthel",
  description:
    "Condiciones de uso, contratación y términos legales aplicables a los servicios y productos de Aetthel Lab S.L.",
  alternates: {
    canonical: "/terminos",
  },
};

export default function TerminosPage() {
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
                Legal
              </span>
              <h1 className="mt-6 type-display text-white">
                <span className="block animate-rise-in rise-delay-1">
                  Términos y
                </span>
                <span className="block text-brand animate-rise-in rise-delay-2">
                  Condiciones.
                </span>
              </h1>
              <p className="mt-6 type-lead text-neutral-400 animate-rise-in rise-delay-3 max-w-2xl">
                Última actualización: Agosto de 2026. Marco legal aplicable al uso de nuestro sitio web y a la contratación de los servicios de diseño y desarrollo digital de Aetthel Lab.
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
                  1. Información general y titularidad
                </h2>
                <p className="text-base sm:text-lg text-ink-muted">
                  En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que el presente sitio web es titularidad de <strong>Aetthel Lab S.L.</strong> (en adelante, «Aetthel»), con sede y operaciones en Barcelona, España, y correo electrónico de contacto: <a href="mailto:aetthel@gmail.com" className="text-ink underline decoration-brand decoration-2 underline-offset-4 hover:text-accent transition-colors font-normal">aetthel@gmail.com</a>.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink tracking-tight">
                  2. Objeto y alcance de los servicios
                </h2>
                <p className="text-base sm:text-lg text-ink-muted">
                  Aetthel es un estudio digital especializado en la conceptualización, diseño y desarrollo de landing pages de alto impacto, aplicaciones web a medida, plataformas digitales y automatización de procesos empresariales. Las presentes condiciones regulan tanto el acceso y navegación por el sitio web como las condiciones generales de prestación de servicios a clientes.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink tracking-tight">
                  3. Presupuestos, fases de trabajo y entregas
                </h2>
                <p className="text-base sm:text-lg text-ink-muted">
                  Cada proyecto se formaliza mediante una propuesta comercial y técnica individualizada que detalla el alcance, los hitos de entrega, las funcionalidades incluidas y el calendario de trabajo acordado:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-ink-muted text-base sm:text-lg">
                  <li><strong>Definición de alcance:</strong> Todo trabajo no especificado explícitamente en la propuesta inicial será presupuestado de manera independiente.</li>
                  <li><strong>Validaciones y revisiones:</strong> El cliente se compromete a revisar las fases de diseño y desarrollo en los plazos estipulados para evitar retrasos en el calendario.</li>
                  <li><strong>Entregables:</strong> Una vez completado el proyecto y abonada la totalidad del importe pactado, se transferirá el acceso al código fuente o despliegue en el entorno de producción del cliente.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink tracking-tight">
                  4. Propiedad intelectual e industrial
                </h2>
                <p className="text-base sm:text-lg text-ink-muted">
                  Todos los contenidos propios de este sitio web (logotipos, isotipos, textos, código fuente, animaciones, estilos y diseño de interfaz) son propiedad exclusiva de Aetthel o de terceros que han autorizado su uso, estando protegidos por la legislación española e internacional sobre propiedad intelectual.
                </p>
                <p className="text-base sm:text-lg text-ink-muted">
                  Respecto a los proyectos desarrollados para clientes, los derechos de explotación sobre el producto final personalizado se ceden al cliente tras el pago íntegro del proyecto, reservándose Aetthel el derecho moral de autoría y la posibilidad de mostrar el resultado en su portafolio comercial salvo acuerdo expreso de confidencialidad (NDA).
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink tracking-tight">
                  5. Precios, facturación y pagos
                </h2>
                <p className="text-base sm:text-lg text-ink-muted">
                  Los precios de los servicios se expresan en euros (€) e indican si los impuestos aplicables (como el IVA) están o no incluidos en la propuesta formal. La modalidad de pago estándar comprende un anticipo inicial para dar comienzo al proyecto y liquidaciones vinculadas a hitos de desarrollo o entrega final, según se establezca en el contrato de servicios.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink tracking-tight">
                  6. Responsabilidad y garantías
                </h2>
                <p className="text-base sm:text-lg text-ink-muted">
                  Aetthel garantiza que los desarrollos entregados cumplen con los estándares de calidad técnica, accesibilidad y rendimiento acordados. No nos hacemos responsables de interrupciones de servicio originadas por proveedores externos (servicios de hosting, APIs de terceros, registradores de dominio) ni de modificaciones realizadas por el cliente o terceros no autorizados en el código entregado.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink tracking-tight">
                  7. Ley aplicable y fuero judicial
                </h2>
                <p className="text-base sm:text-lg text-ink-muted">
                  Para cualquier controversia que pudiera derivarse del acceso al sitio web o de la ejecución de los servicios, las partes se someten expresamente a la legislación española y a los Juzgados y Tribunales de la ciudad de <strong>Barcelona</strong>, con renuncia a cualquier otro fuero que pudiera corresponderles.
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
