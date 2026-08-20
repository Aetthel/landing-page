# landing-structure Specification

## Purpose
TBD - created by archiving change restructure-landing-and-images. Update Purpose after archive.
## Requirements
### Requirement: 2-Speed landing page hierarchy
The system SHALL organize the landing page and subpages into a 2-speed layout that allows quick scanning and deep reading.

#### Scenario: Scanning landing sections
- **WHEN** a user visits the landing page
- **THEN** sections follow the order Hero -> Team -> Services -> Process -> Projects -> CTA with clean eyebrows and bold lead texts.

### Requirement: Unified page contrast flow
The system SHALL render dark background styling ONLY on top hero headers of `/estudio`, `/servicios`, and `/contacto`, and light canvas background on all secondary sections.

#### Scenario: Navigating secondary sections
- **WHEN** a user scrolls past the top hero header on any page
- **THEN** all subsequent sections render on light canvas (`bg-canvas text-ink`).

