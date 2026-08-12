# Capability: Docker Containerization

## Requirements

### Requirement: Standalone Production Build
The application SHALL configure Next.js standalone build output to produce self-contained server bundles for Docker.

#### Scenario: Standalone output configuration
- **Given** the `next.config.ts` configuration file
- **When** `pnpm build` is executed
- **Then** Next.js SHALL produce a `.next/standalone` output directory containing minimal runtime dependencies.

### Requirement: Multi-Stage Dockerfile with pnpm
The project SHALL include a multi-stage `Dockerfile` supporting `pnpm` for efficient, cached image builds.

#### Scenario: Building production Docker image
- **Given** the project source code and `pnpm-lock.yaml`
- **When** `docker build` is executed
- **Then** dependencies SHALL be installed via `pnpm install --frozen-lockfile`
- **And** the standalone production bundle SHALL be compiled
- **And** the final runtime image SHALL run as non-root user `nextjs` exposing port 3000.

### Requirement: Container Orchestration & Ignore Rules
The project SHALL include a `docker-compose.yml` file and `.dockerignore` file for deployment convenience and build optimization.

#### Scenario: Running container via docker-compose
- **Given** `docker-compose.yml` and `.dockerignore`
- **When** `docker compose up --build` is executed
- **Then** build context SHALL omit `node_modules` and `.next`
- **And** the landing page container SHALL start and serve application on port 3000.
