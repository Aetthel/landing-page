## 1. Next.js Configuration

- [x] 1.1 Update `next.config.ts` to include `output: 'standalone'`

## 2. Docker Setup Files

- [x] 2.1 Create `.dockerignore` to optimize build context
- [x] 2.2 Create multi-stage `Dockerfile` with Node 22 Alpine and pnpm
- [x] 2.3 Create `docker-compose.yml` mapping port 3000
- [x] 2.4 Create `.env.example` file for production configuration template

## 3. Build & Verification

- [x] 3.1 Run `pnpm build` to confirm standalone output generation
- [x] 3.2 Validate Docker build and verify container execution
