# landing-ux-conversion Specification

## ADDED Requirements

### Requirement: Subpage Conversion Endpoints
The system SHALL provide a direct call-to-action link or form to contact Aetthel at the conclusion of informative subpages.

#### Scenario: End of Estudio page scroll
- **WHEN** a user reaches the bottom of the canvas on `/estudio`
- **THEN** a CTA section is presented inviting the user to start a project or schedule a meeting

### Requirement: Coarse Pointer Responsive Adaptations
The system SHALL disable mouse cursor-following animations on touch/coarse pointer devices.

#### Scenario: Viewing team cards on mobile
- **WHEN** a user interacts with team cards on a touch screen device
- **THEN** member avatars render statically without attempting to track cursor coordinates
