## Why

Currently, section headers across the landing page and inner pages have inconsistent typography, layout spacing, eyebrow styling, and structural patterns. Estandarizar la jerarquía visual de los títulos (eyebrow en versalita uppercase + titular grande `type-display` con punto final) inspirada en la línea de diseño del estudio ("EL TALLER", "Aquí es donde se hace.") creará una identidad de marca coherente, pulida y reconocible en todas las secciones.

## What Changes

- Crear un componente reutilizable `<SectionHeader />` (o utilidades estandarizadas de encabezado) con soporte para:
  - **Eyebrow**: etiqueta superior versalita (`type-eyebrow`), ligera en caja alta (`text-ink-muted`, `tracking-[0.2em]`).
  - **Title**: titular en `type-display` / `text-4xl sm:text-6xl lg:text-7xl` con remate tipográfico limpio.
  - **Entradilla/Description** (opcional): párrafo de acompañamiento en `type-lead` o `type-body`.
  - **Alineación**: soportes de alineación (`left`, `center`, o `split` con entradilla a la derecha).
- Refactorizar los encabezados de las secciones clave (`Projects`, `Services`, `AboutUs`, `ContactForm`, `StudioApproach`, `StudioSpace`, `StudioTeam`, `StudioValues`, `ServicesProcess`, `ServicesFaq`, etc.) para emplear el nuevo estándar visual unificado.

## Capabilities

### New Capabilities
- `section-header-component`: Componente y jerarquía tipográfica estandarizada para todos los encabezados de sección del sitio.

### Modified Capabilities
- `landing-structure`: Estandarización del formato visual y la estructura de los títulos en las secciones de la landing page.

## Impact

- Componentes afectados en `src/components/sections/` (`Projects`, `Services`, `ContactForm`, `StudioApproach`, `StudioSpace`, `StudioTeam`, `StudioValues`, `ServicesProcess`, etc.).
- Sin dependencias externas nuevas (utiliza las variables de sistema `@theme` y clases tipográficas existentes en `globals.css`).
