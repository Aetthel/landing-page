## Context

Actualmente, las distintas secciones de la web (`Projects`, `Services`, `StudioApproach`, `StudioSpace`, `StudioTeam`, `StudioValues`, `ContactForm`, etc.) implementan sus titulares de sección con estilos, tamaños de fuente, espaciados y etiquetas discontinuas. Algunas usan etiquetas pequeñas en minúsculas sin tracking, otras usan h2 simples o párrafos en negrita.

Tomando como referencia la captura del cliente ("EL TALLER", "Aquí es donde se hace."), se busca establecer un estándar tipográfico y estructurado mediante un componente React modular `<SectionHeader />` o patrón unificado en Tailwind v4.

## Goals / Non-Goals

**Goals:**
- Crear el componente `<SectionHeader />` en `src/components/ui/section-header.tsx` que unifique el patrón:
  1. **Eyebrow**: Texto en versalita uppercase (`type-eyebrow`), tracking amplio (`tracking-[0.2em]`), color atenuado (`text-ink-muted` o `text-neutral-400`).
  2. **Title**: Titular principal con font display (`var(--font-display)`), `type-display` / `text-4xl sm:text-6xl lg:text-7xl`, remate limpio.
  3. **Description / Subtitle** (opcional): Párrafo de acompañamiento en `type-lead` / `type-body` con ancho máximo equilibrado (`max-w-2xl` o `max-w-3xl`).
- Refactorizar las secciones clave para consumir `<SectionHeader />` o seguir estrictamente estas clases de utilidad.
- Garantizar que los encabezados funcionen correctamente en modo claro (`bg-canvas text-ink`) y en modo oscuro (`bg-dark text-white`).

**Non-Goals:**
- Rediseñar la maquetación interna o el comportamiento interactivo de los paneles de servicios/proyectos.
- Alterar el titular cinético/rotativo del Hero principal de la página de inicio.

## Decisions

1. **Creación del componente `<SectionHeader />` en `src/components/ui/section-header.tsx`**:
   - `eyebrow?: string`: Texto superior en caja alta (ej: "PROYECTOS DESTACADOS", "NUESTRO ESTUDIO").
   - `title: React.ReactNode`: Titular en font display (`h2` o `h1`).
   - `description?: React.ReactNode`: Texto secundario opcional.
   - `align?: "left" | "center" | "split"`: Para soportar titular a la izquierda, centrado, o layout en dos columnas (titular izquierda + entradilla derecha).
   - `tone?: "light" | "dark"`: Para adaptar los colores automáticamente si la sección es clara u oscura.

2. **Integración con `<Reveal />`**:
   - Encapsular la animación de entrada suave (`<Reveal>`) dentro del componente `<SectionHeader />` o permitir pasar la prop `reveal?: boolean` para mantener el efecto de aparición fluida en scroll.

3. **Refactorización sistemática de secciones**:
   - Secciones a actualizar: `Projects`, `Services`, `AboutUs`, `ContactForm`, `StudioApproach`, `StudioSpace`, `StudioTeam`, `StudioValues`, `ServicesProcess`, `ServicesFaq`, `ServicesAftercare`.

## Risks / Trade-offs

- **[Riesgo]** Títulos largos en pantallas móviles podrían requerir un ajuste de tamaño de letra fluido (`clamp`).
  - *Mitigación*: Utilizar las utilidades fluidas `.type-display` y clases adaptativas `text-3xl sm:text-5xl lg:text-6xl`.
