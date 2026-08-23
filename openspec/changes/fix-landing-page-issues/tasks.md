## 1. Brand Alignment & SEO Metadata

- [x] 1.1 Update `src/config/site.ts` description to state Aetthel as a digital studio for landing pages, web apps, and automations
- [x] 1.2 Update `src/app/layout.tsx` SEO keywords and OpenGraph metadata to remove architecture references
- [x] 1.3 Add visual "Maqueta ilustrativa" badge to work sample slides in `src/components/ui/scroll-gallery-reveal.tsx`

## 2. Code Quality & ESLint Fixes

- [x] 2.1 Refactor state update in `src/components/ui/intro-sequence.tsx` to resolve React 19 `set-state-in-effect` error
- [x] 2.2 Refactor visibility effect in `src/components/ui/loading-overlay.tsx` to eliminate synchronous state setting
- [x] 2.3 Refactor touch detection in `src/components/ui/magic-text.tsx` using lazy initializer to eliminate effect state update
- [x] 2.4 Replace `any` types with explicit React component types in `src/components/ui/Button.tsx`
- [x] 2.5 Delete 12 residual `* 2.tsx` duplicate files from `src/components/` and clean up unused imports in `Navbar.tsx` and `ServiceSheet.tsx`

## 3. UX, Conversion & Subpage Enhancements

- [x] 3.1 Add a call-to-action conversion section to the end of `src/app/estudio/page.tsx` canvas leading to `/contacto`
- [x] 3.2 Refactor mouse position tracking in `src/components/sections/StudioTeam.tsx` to handle coarse pointer touch devices gracefully
- [x] 3.3 Verify and refine `/tienda` page messaging and conversion options
- [x] 3.4 Run `pnpm run lint` and `pnpm run build` to verify clean build execution
