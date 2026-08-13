## ADDED Requirements

### Requirement: SVG Brand Assets Scalability
All SVG brand logos and isotipo components SHALL render at legible, non-compressed dimensions across mobile and desktop viewports.

#### Scenario: Isotipo rendering in Navbar and headers
- **WHEN** the user views the website header or navbar
- **THEN** the Isotipo and brand logo SVGs maintain adequate height (minimum 32px on mobile, 36px-40px on desktop) and DO NOT shrink when flex items compete for horizontal space.

### Requirement: Flex Shrink Prevention for Icons
All inline SVG icons and logos placed within `display: flex` containers SHALL include `shrink-0` (or `flex-shrink: 0`).

#### Scenario: Narrow viewport or long navigation text
- **WHEN** the browser window width is reduced
- **THEN** navigation text wraps or adjusts while SVG logos retain their target width and height without collapsing.
