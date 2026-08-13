## Why

SVGs across the landing page (such as `IsotipoIcon`, header logos, and vector illustrations) render smaller than desired or shrink unexpectedly in constrained Flexbox layouts. This is caused by wide/untrimmed `viewBox` coordinates, tight default height utilities (e.g. `h-7`, `h-9`), and missing `shrink-0` bounds in parent flex containers.

## What Changes

- Normalize `IsotipoIcon` and logo SVG `viewBox` definitions and default sizing classes across Navbar, Hero, and Footer components.
- Enforce `shrink-0` (prevent unwanted Flexbox compression) on SVG icons and logos.
- Provide scalable, responsive height and width utilities for all logo variants.

## Capabilities

### New Capabilities
- `svg-sizing-optimization`: Standardized SVG viewport scaling, non-collapsible flex behavior, and optimized viewBox bounds for brand assets and icons.

### Modified Capabilities

## Impact

- `src/components/ui/logo-isotipo.tsx`: Adjusted default sizing and container alignment.
- `src/components/layout/Navbar.tsx`: Increased logo heights and added flex protection.
- `public/logos/*.svg`: Cleaned viewBox bounding boxes where applicable.
- `src/app/globals.css`: Ensured standard icon line-heights and stroke defaults without restricting visual scale.
