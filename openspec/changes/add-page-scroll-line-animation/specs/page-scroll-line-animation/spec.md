# page-scroll-line-animation Specification

## Requirements

### Requirement 1: UI Component Placement
- The component code MUST be located in `src/components/ui/svg-follow-scroll.tsx`.
- It MUST export `Skiper19` (and optional full page variants).

### Requirement 2: Dependencies & Styling
- `framer-motion` MUST be installed and imported.
- The stroke color MUST utilize the primary brand color `#B8FA4E`.

### Requirement 3: Full Page Scroll Animation Integration
- The animated line MUST react smoothly to scroll progress across the page.
- Layout overflow MUST be handled cleanly (`pointer-events-none`, `overflow-hidden`).
