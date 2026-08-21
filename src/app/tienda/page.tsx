import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { HeroGradient } from "@/components/ui/aurora-background";

/* ==========================================================================
   /tienda — la tienda, todavía sin abrir.

   POR QUÉ EXISTE UNA PÁGINA PARA ALGO QUE NO ESTÁ. «Tienda» lleva tiempo en el
   menú apuntando a `#`, que es un enlace que no lleva a ningún sitio: se pulsa,
   no pasa nada y el visitante no sabe si ha fallado él o la web. Una página que
   dice «próximamente» responde la pregunta y cuesta una pantalla.

   ES SOLO LA CABECERA. El mismo hero de las demás páginas —grafito a pantalla
   completa, antetítulo lima, titular a dos líneas con la segunda en lima— y
   directo al Footer, sin la hoja de lienzo que en las otras sostiene el
   contenido. Aquí no hay contenido que sostener, y montar la hoja vacía dejaría
   un cajón blanco sin nada dentro. El Footer va sobre grafito, así que la
   cabecera enlaza con él sin costura.

   SOLO EL TITULAR. Las demás páginas abren con antetítulo, titular y una
   entradilla al lado; esta se queda con el titular a secas. No hay nada que
   contar todavía, y un texto de relleno sobre lo que quizá se venda envejece
   mal. El antetítulo también sobra: repetía la palabra del menú por el que se
   acaba de llegar.
   ========================================================================== */

export const metadata: Metadata = {
  title: "Tienda | Aetthel",
  description:
    "Nuestra tienda todavía no está abierta. Estamos preparándola; mientras tanto, cuéntanos qué necesitas y lo vemos.",
};

export default function TiendaPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-dark text-white font-sans selection:bg-dark selection:text-white">
      <main className="flex-1 w-full">
        {/* HERO CABECERA EN NEGRO */}
        <section
          data-cursor-surface="dark"
          className="relative isolate w-full min-h-screen min-h-dvh flex flex-col justify-center overflow-hidden bg-dark text-white pt-32 pb-32 sm:pt-36 sm:pb-36"
        >
          <HeroGradient tone="dark" />
          <div className="relative z-10 w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
            {/* Sin entradilla: la cabecera es solo el titular. Se conserva la
                rejilla de doce y las siete columnas del bloque para que el
                titular caiga exactamente donde cae en las demás páginas —si se
                soltara a todo el ancho, se rompería la única línea que tienen
                todas en común—. */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-7">
                <h1 className="type-display text-white">
                  <span className="block animate-rise-in rise-delay-1">
                    Nuevo espacio,
                  </span>
                  <span className="block text-brand animate-rise-in rise-delay-2">
                    próximamente.
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
