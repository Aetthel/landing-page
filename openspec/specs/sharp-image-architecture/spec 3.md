# sharp-image-architecture Specification

## Purpose
TBD - created by archiving change restructure-landing-and-images. Update Purpose after archive.
## Requirements
### Requirement: Zero-radius borderless image framing
The system SHALL display image containers and photo slots with zero border radius (`rounded-none`) and zero borders (`border-0`), providing clean architectural edge-to-edge media frames.

#### Scenario: Rendering project and team images
- **WHEN** an image slot is rendered in a project or team profile
- **THEN** the image container uses `rounded-none border-0` styling.

### Requirement: Content guidance placeholders
The system SHALL render explicit text guidance inside empty image slots indicating what specific photo or asset belongs in that location.

#### Scenario: Viewing placeholder image slot
- **WHEN** no custom image file is uploaded for an image slot
- **THEN** the placeholder displays clear text instructions indicating the target asset path.

