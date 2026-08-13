## Context

In the landing page UI, SVGs are used for brand mark components (`IsotipoIcon`), navbar logos (`/logos/aetthel-logo-*.svg`), service diagrams, and Lucide icons. Issues with tiny SVG rendering stem from three key factors:
1. Untrimmed SVG `viewBox` coordinates adding excessive internal transparent padding.
2. Rigid height definitions in CSS/Tailwind (e.g. `h-7`, `h-9`) without sufficient responsive scaling.
3. Flex container compression (`flex-shrink: 1`) in navbar and header flex wrappers.

## Goals / Non-Goals

**Goals:**
- Provide clear visual hierarchy and proper scaling for `IsotipoIcon` and navbar logos across desktop and mobile screens.
- Apply `shrink-0` to all logo and icon wrappers inside flex layouts to prevent unwanted compression.
- Ensure consistent stroke and scale properties without breaking aspect ratios.

**Non-Goals:**
- Redesigning brand logos or changing brand colors/assets.

## Decisions

### 1. Standardize IsotipoIcon viewBox and default height
- **Decision**: Update `IsotipoIcon` default className from `h-9 w-auto fill-current` to responsive heights `h-9 sm:h-10 md:h-11 w-auto shrink-0 fill-current`.
- **Rationale**: Prevents flex container squeezing and provides prominent visual size on high-DPI displays.

### 2. Update Navbar logo image sizing
- **Decision**: Increase Next/Image height bounds and CSS height classes for navbar logos (`h-8 sm:h-9` instead of `h-7 sm:h-8`) and ensure parent wrappers include `shrink-0`.
- **Rationale**: Elevates brand legibility in both scrolled and transparent header states.

## Risks / Trade-offs

- [Header height shift] → Ensure `min-h-[44px]` or `min-h-[48px]` in Navbar flex container cleanly accommodates larger logo sizes without disrupting smooth scroll behavior.
