# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Pymes, autónomos y equipos pequeños de habla hispana (base en Barcelona) que
necesitan producto digital a medida y no tienen equipo técnico propio. Llegan
con una idea o con un proceso manual que les come horas, no con un pliego
técnico: la decisión la toma quien dirige el negocio, no un CTO.

## Product Purpose

Aetthel es un estudio digital que diseña y construye tres cosas: landing pages,
aplicaciones web a medida y automatizaciones de procesos. El éxito es que el
cliente entienda qué se le va a entregar, en cuánto tiempo y por cuánto, antes
de firmar; y que el resultado funcione sin depender del estudio para el día a
día.

## Positioning

Estudio pequeño que trabaja codo a codo con el cliente: proceso claro de
principio a fin, seguimiento cercano y precio cerrado tras la primera reunión.
No es una agencia con capas de cuentas ni un marketplace de plantillas.

## Operating Context

Entrada por formulario web o contacto directo (email/teléfono). Flujo
confirmado: se lee el mensaje el mismo día → respuesta en menos de 24 h con
dudas y propuesta de reunión → primera reunión donde se encajan alcance, plazos
y precio cerrado.

## Capabilities and Constraints

- Servicios (los tres, sin más pilares al mismo nivel):
  1. **Landing pages** — páginas claras, rápidas y optimizadas para conversión.
  2. **Apps a medida** — aplicaciones web, paneles internos y plataformas de
     cliente adaptadas al flujo operativo real.
  3. **Automatizaciones** — conexión de procesos e infraestructura existente
     para eliminar trabajo repetitivo y errores humanos.
- **Precios: sin definir a 13 ago 2026.** El estudio descartó publicar suelos
  de entrada porque las tarifas todavía no están cerradas. Ninguna pieza puede
  mostrar cifras hasta que existan; el presupuesto se fija en la primera
  reunión y se entrega por escrito.
- Stack del sitio: Next.js (App Router) + TypeScript + Tailwind v4, scroll
  suave con Lenis. Rutas: `/`, `/estudio` (Aetthel Lab), `/servicios`,
  `/contacto`.
- El formulario de contacto todavía no envía: valida en cliente y deja el
  payload listo para el endpoint (`TODO` en `ContactForm.tsx`).

## Brand Commitments

- Nombre y logotipos: Aetthel (isotipo y wordmark en `/public/logos`).
- Idioma español, tuteo, primera persona del plural. Voz cercana, concreta y
  sin jerga de agencia; se promete lo que se cumple.
- Contacto público: aetthel@gmail.com, +34 696 35 29 40, +34 639 97 13 93.
  Base en Barcelona, Catalunya.

## Evidence on Hand

- Vídeo de showreel propio (`/public/videos/showreel.mp4`).
- **No hay clientes, logotipos, testimonios, métricas ni casos de éxito
  publicables.** Ninguna pieza puede afirmar lo contrario. Los ejemplos de
  trabajo que aparezcan en el sitio son maquetas ilustrativas y deben ir
  etiquetadas visiblemente como tales, para sustituirlas por trabajo real en
  cuanto exista.

## Product Principles

1. Transparencia antes que persuasión: alcance, plazo y lo que queda fuera, a
   la vista. Lo que no esté decidido se calla, no se aproxima.
2. Se explica el trabajo, no el resultado prometido. Mientras no haya clientes,
   la credibilidad la sostiene el método.
3. Un cliente sin equipo técnico tiene que poder decidir solo: nada de jerga
   sin traducir.
4. Tres servicios, no un catálogo. Ampliar la lista diluye la propuesta.

## Accessibility & Inclusion

Sin requisito formal establecido por el cliente. El sitio ya respeta
`prefers-reduced-motion` en todas sus animaciones y esa base se mantiene.
