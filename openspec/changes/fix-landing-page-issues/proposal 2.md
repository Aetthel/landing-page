## Why

Audit identified critical contradictions between marketing definitions and site code/SEO, code quality issues causing build lint failures in React 19, residual duplicated source files, and opportunities to improve UX conversion on subpages like `/estudio` and `/tienda`. Resolving these issues guarantees brand alignment with PRODUCT.md, clean builds, and a frictionless user conversion funnel.

## What Changes

- **Brand & SEO Alignment**: Update `siteConfig.ts` description and `layout.tsx` SEO keywords to reflect Aetthel's identity as a digital studio (landing pages, web apps, automation) instead of architecture.
- **Evidence Compliance**: Add a visible "Maqueta ilustrativa" tag to mock project images in `ScrollGalleryReveal`.
- **Code Quality & React 19 Linting**: Fix `react-hooks/set-state-in-effect` warnings in `intro-sequence.tsx`, `loading-overlay.tsx`, and `magic-text.tsx`. Replace explicit `any` types in `Button.tsx`. Remove unused imports and delete 12 orphaned `* 2.tsx` duplicate files.
- **UX & Conversion Enhancements**: Add a primary "Hablar con el equipo" CTA section at the end of `/estudio` canvas, refine `/tienda` hero copy to include a lead capture form or contact link, replace native `<img>` elements with optimized `next/image` components, and disable continuous mouse tracking for team hover cards on coarse pointer devices.

## Capabilities

### New Capabilities
- `landing-brand-compliance`: Enforce brand positioning, SEO metadata alignment, and clear visual labeling for illustrative mockups per PRODUCT.md commitments.
- `landing-ux-conversion`: Provide clear call-to-action conversion points on informative subpages (`/estudio`, `/tienda`) and refine responsive interaction states.

### Modified Capabilities
- `landing-structure`: Ensure all subpage canvas layouts end with clear conversion pathways and consistent dark-to-light section transitions.

## Impact

- Affected files: `src/config/site.ts`, `src/app/layout.tsx`, `src/components/ui/scroll-gallery-reveal.tsx`, `src/components/sections/StudioTeam.tsx`, `src/components/ui/intro-sequence.tsx`, `src/components/ui/loading-overlay.tsx`, `src/components/ui/magic-text.tsx`, `src/components/ui/Button.tsx`, `src/app/estudio/page.tsx`, `src/app/tienda/page.tsx`, and orphaned `* 2.tsx` files.
- Build & Linting: `pnpm run lint` will pass cleanly with 0 errors.
