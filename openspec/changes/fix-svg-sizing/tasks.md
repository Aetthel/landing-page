## 1. Audit and Update SVG Components

- [ ] 1.1 Update `IsotipoIcon` in `src/components/ui/logo-isotipo.tsx` with responsive sizing (`h-9 sm:h-10 md:h-11 w-auto shrink-0 fill-current`).
- [ ] 1.2 Update SVG Logo images in `src/components/layout/Navbar.tsx` to include `shrink-0` and optimal responsive height utilities (`h-7.5 sm:h-8.5 w-auto`).

## 2. Flex & CSS Styling Enhancements

- [ ] 2.1 Audit parent flex wrappers in `Navbar.tsx` and header components to ensure logos are not squeezed when viewport shrinks.
- [ ] 2.2 Verify icon stroke-width rules in `src/app/globals.css` to ensure Lucide/Heroicon SVGs maintain visual stroke weight without shrink issues.

## 3. Verification

- [ ] 3.1 Run `npm run build` / build checks to verify type-safety and formatting.
- [ ] 3.2 Verify SVG rendering on mobile and desktop layout views.
