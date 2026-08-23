## Context

The landing page needs a refined layout that serves both quick scanners and deep evaluators. Furthermore, the design system requires zero-radius, borderless image frames (`rounded-none`, `border-0`) to achieve a sharp, modern architectural aesthetic.

## Goals / Non-Goals

**Goals:**
- Implement a clear 2-speed information hierarchy (*Scanners* vs *Evaluators*).
- Restructure section order across home and subpages (`/estudio`, `/servicios`, `/contacto`).
- Enforce `rounded-none border-0` for all image containers, removing rounded corners and boxed borders.
- Include explicit text guides inside image slots detailing what content belongs there.

**Non-Goals:**
- Modifying backend server logic or API endpoints.

## Decisions

- **Decision 1: Zero-Radius Image Framing (`rounded-none border-0`)**: All image wrappers will use `rounded-none border-0 overflow-hidden` to match sharp architectural guidelines rather than rounded pills or rounded cards.
- **Decision 2: 2-Speed Scannability**: Use short eyebrows (2-3 words) and bold lead paragraphs for fast readers, with expanders/drawers for detailed technical specs.
- **Decision 3: Light Canvas Consistency**: Keep dark backgrounds ONLY for top hero headers on `/estudio`, `/servicios`, `/contacto`, with all secondary content flowing seamlessly on light canvas (`bg-canvas text-ink`).

## Risks / Trade-offs

- *[Risk]* Missing real images when the user visits the live site.
  - *Mitigation*: Render elegant dark/glass placeholders with clear instructions (`Espacio para foto: /public/...`) that hide gracefully once real images are added.
