## 1. Landing Structure & Section Flow

- [x] 1.1 Update `src/app/page.tsx` home sections to follow 2-speed flow (Hero -> Team -> Services -> Process -> Projects -> CTA).
- [x] 1.2 Unify section backgrounds across `/estudio`, `/servicios`, `/contacto` so dark background is restricted to the top hero header section.

## 2. Sharp Image Architecture & Zero-Radius Framing

- [x] 2.1 Refactor `StudioTeam.tsx` to use `rounded-none border-0` image slots with explicit guide text for portrait photos (`/public/team/marti.jpg`).
- [x] 2.2 Refactor `Projects.tsx` to use `rounded-none border-0` edge-to-edge project media frames with explicit content guides (`/public/projects/copreci.jpg`).
- [x] 2.3 Add image slots for services in `ServiceSheet.tsx` with `rounded-none border-0` frames and content guidance (`/public/images/services/web-dev.jpg`).

## 3. Verification & Build Validation

- [x] 3.1 Verify visual layout across `/`, `/estudio`, `/servicios`, and `/contacto`.
- [x] 3.2 Run `pnpm build` to ensure zero compilation or TypeScript errors.
