# Design Overview: Full Page Scroll Line Animation

## Architecture

1. **Standalone UI Component (`src/components/ui/svg-follow-scroll.tsx`)**:
   - Contains the `Skiper19` component as requested.
   - Uses `framer-motion`'s `useScroll` and `useTransform`.
   - Updated stroke color to `#B8FA4E` (Growth Lime).

2. **Full Page Animation Integration**:
   - Create a global wrapper SVG path component (`PageScrollLine`) that binds to viewport / page height scroll progress (`scrollYProgress`).
   - SVG path positioned absolute / fixed overlaying page borders or flowing down section transitions.
   - Responsive scaling and non-intrusive pointer-events (`pointer-events-none`).
