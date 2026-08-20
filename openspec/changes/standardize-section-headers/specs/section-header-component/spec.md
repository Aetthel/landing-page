## ADDED Requirements

### Requirement: Section header visual component
The system SHALL provide a reusable `<SectionHeader />` component in `src/components/ui/section-header.tsx` that standardizes section titles across the application.

#### Scenario: Rendering standard section header
- **WHEN** a section renders `<SectionHeader eyebrow="EL TALLER" title="Aquí es donde se hace." />`
- **THEN** the eyebrow renders in uppercase with wide tracking (`tracking-[0.2em]`) above the title, and the title renders using display typography.

#### Scenario: Responsive alignment modes
- **WHEN** `align="center"` or `align="left"` or `align="split"` is specified on `<SectionHeader />`
- **THEN** the header layout adjusts its alignment and column arrangement accordingly across mobile and desktop viewports.

#### Scenario: Contrast tone support
- **WHEN** `tone="dark"` is specified on `<SectionHeader />`
- **THEN** text colors automatically switch to high-contrast white and muted neutral tones for dark background sections.
