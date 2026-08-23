## Context

Aetthel's landing page codebase contains brand alignment issues (`siteConfig.ts` & `layout.tsx` metadata), ESLint errors under React 19 rules in component effects, duplicate source files, and opportunities to optimize conversion and user experience on key pages like `/estudio` and `/tienda`.

## Goals / Non-Goals

**Goals:**
- Align site configuration, metadata, and keywords strictly with `PRODUCT.md` (Digital studio: Landing pages, Web apps, Automation).
- Visually label sample work in `ScrollGalleryReveal` as "Maqueta ilustrativa".
- Clean up all ESLint errors (`react-hooks/set-state-in-effect` and `@typescript-eslint/no-explicit-any`) to ensure `pnpm run lint` passes cleanly.
- Delete 12 residual `* 2.tsx` duplicate files.
- Enhance `/estudio` canvas with a clear CTA section leading to `/contacto`.
- Refine `/tienda` to communicate upcoming availability with clear user engagement options.
- Optimize image loading by migrating `<img>` elements to `next/image` where suitable.

**Non-Goals:**
- Backend API redesign or external database integration.
- Redesigning overall visual design system or brand color palette.

## Decisions

1. **Brand Metadata Sync**: Update `siteConfig.description` to `"Estudio digital especializado en landing pages, aplicaciones web a medida y automatizaciones de procesos."` and update keywords in `layout.tsx`.
2. **React 19 State in Effect Fixes**:
   - `intro-sequence.tsx`: Use `useSyncExternalStore` or inline dataset check during state initialization instead of calling `setPhase("gone")` synchronously inside `useEffect`.
   - `loading-overlay.tsx`: Derive visibility state or handle transitions cleanly in effect without synchronous state cascade.
   - `magic-text.tsx`: Initialize `isTouch` using lazy initial state callback `useState(() => typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches)`.
3. **Type Safety in Button.tsx**: Replace `any` parameters with proper React types (`React.ElementType` or `React.ComponentPropsWithRef`).
4. **Subpage CTA & Layout**: Add a clear conversion CTA block at the end of `EstudioPage` canvas.
5. **Orphan File Removal**: Remove 12 files matching `* 2.tsx`.

## Risks / Trade-offs

- **[Risk] Effect refactoring alters animation timing**:
  - *Mitigation*: Verify intro sequence and loading overlay to ensure initial page load animations remain smooth and respect `prefers-reduced-motion`.
