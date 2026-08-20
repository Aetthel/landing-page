## Why

The current landing page and section layouts lack clear 2-speed information architecture (scanning vs. deep reading) and currently feature enclosed card boxes and rounded image frames that don't fit the desired sharp, open architectural design system. This change restructures the landing page and specific pages to improve clarity, transparency, and user comprehension while enforcing borderless, zero-radius image frames across the codebase.

## What Changes

- Restructure the home page (`/`) into a logical 2-speed flow: *Hero → Quiénes Somos → Servicios → Proceso → Proyectos → CTA*.
- Reorganize specific pages (`/estudio`, `/servicios`, `/contacto`) so that only top hero header sections remain dark, while all secondary sections flow seamlessly on light canvas.
- Replace boxed cards with open, cardless section layouts divided by clean hairline borders.
- Enforce sharp, borderless, zero-radius (`rounded-none`, `border-0`) image framing across all project showcases, team profiles, and service illustrations.
- Add visible placeholders with explicit content guidance (`Espacio para imagen: ...`) where real images will be uploaded.

## Capabilities

### New Capabilities
- `landing-structure`: 2-speed user journey and logical section hierarchy across the home page and standalone pages.
- `sharp-image-architecture`: Borderless, zero-radius image slot framing system with content guidance for client transparency.

### Modified Capabilities
- None

## Impact

- `src/app/page.tsx`: Reordered and restructured sections.
- `src/app/estudio/page.tsx`, `src/app/servicios/page.tsx`, `src/app/contacto/page.tsx`: Unified section background flow and hero contrast.
- `src/components/sections/Projects.tsx`: Updated project showcase cards to open media frames with zero-radius images.
- `src/components/sections/StudioTeam.tsx`: Updated team cards to open layout with zero-radius portrait photo slots.
- `src/components/sections/StudioValues.tsx`, `ServicesAftercare.tsx`: Open cardless layout.
