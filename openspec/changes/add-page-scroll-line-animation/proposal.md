## Why

Integrate the `Skiper19` line scroll animation component into `@/components/ui/svg-follow-scroll.tsx` using `framer-motion` and adapt it to wrap around the entire landing page from top to bottom with the project's primary brand color (`#B8FA4E`).

## What Changes

- Confirm codebase readiness for shadcn component structure (`src/components/ui/`), Tailwind CSS v4, and TypeScript.
- Install `framer-motion` package via pnpm.
- Add `src/components/ui/svg-follow-scroll.tsx` containing the `Skiper19` React component using `framer-motion` and `--color-brand` (`#B8FA4E`).
- Create an overall page background line animation wrapper/component (`PageScrollLine`) that spans from the top header down to the footer, animating an SVG stroke based on full-page scroll progress (`useScroll()`).

## Capabilities

### New Capabilities
- `page-scroll-line-animation`: SVG line stroke animation following page scroll progress from top to bottom styled with the primary brand color.

### Modified Capabilities

## Impact

- `src/components/ui/svg-follow-scroll.tsx` (new component)
- `package.json` (`framer-motion` dependency)
- Layout or main page (`src/app/layout.tsx` / `src/app/page.tsx`)
