# Design: Production Docker Setup

## Context

The landing-page application is built with Next.js 16 (React 19) and managed using `pnpm`. For production deployment, we require a lightweight, portable container setup that handles dependencies efficiently and provides fast startup times.

## Goals / Non-Goals

**Goals:**
- Configure Next.js standalone output mode to create minimal server bundles.
- Implement a 3-stage Dockerfile leveraging Node.js 22 Alpine and Corepack pnpm.
- Provide `docker-compose.yml` for local container testing and deployment orchestration.
- Enforce non-root user execution (`nextjs` UID 1001) for container security.

**Non-Goals:**
- Creating cloud deployment infra (Terraform, Cloud Run, Kubernetes manifests).
- Setting up CI/CD automation pipelines.

## Decisions

### 1. Standalone Output Mode
- **Decision**: Set `output: 'standalone'` in `next.config.ts`.
- **Rationale**: Next.js standalone mode traces module dependencies and includes only required `node_modules`, reducing final container size from ~800MB to ~120MB.

### 2. Multi-Stage Dockerfile Strategy
- **Deps Stage**: Install dependencies with `pnpm i --frozen-lockfile`.
- **Builder Stage**: Run `pnpm build`.
- **Runner Stage**: Minimal `node:22-alpine` runtime copying `.next/standalone` and `.next/static`.

### 3. Non-Root Container Execution
- **Decision**: Create a dedicated `nodejs` group and `nextjs` user.
- **Rationale**: Prevents potential privilege escalation vulnerabilities inside the container runtime.

## Risks / Trade-offs

- **[Asset Copying Risk]**: Standalone mode requires static files to be copied explicitly → **Mitigation**: Copy `public/` to `public/` and `.next/static` to `.next/standalone/.next/static`.
- **[Host Binding]**: Next.js in container must bind to `0.0.0.0` instead of `localhost` → **Mitigation**: Set `ENV HOSTNAME="0.0.0.0"` in Dockerfile.
