# C.A.R.E.

C.A.R.E. is the Clinic Administration & Record Environment. This repository currently contains only the initial frontend foundation for a production-grade clinic management application.

Business features such as patient management, queueing, dashboards, reports, announcements, clinic status, and authentication UI are intentionally not implemented yet.

## Current Stage

Initial production foundation. The goal of this stage is to establish a clean, tested, documented frontend codebase that can be built feature-by-feature.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui conventions
- ESLint
- Prettier
- Vitest
- Playwright

## Getting Started

```bash
npm install
npx playwright install
npm run dev
```

## Available Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the local Vite development server. |
| `npm run build` | Typecheck and build the production frontend bundle. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint. |
| `npm run typecheck` | Run TypeScript without emitting files. |
| `npm run test` | Run Vitest unit tests. |
| `npm run test:e2e` | Run Playwright end-to-end tests. |
| `npm run format` | Format files with Prettier. |
| `npm run format:check` | Check formatting with Prettier. |

## Required Checks Before Merge

```bash
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
```

## Environment

Copy `.env.example` to `.env` for local configuration. Do not commit `.env` files or secrets.

Supabase/PostgreSQL integration is planned for a later phase. This foundation includes environment placeholders only and does not connect to Supabase.

## Branch Strategy

- `main` is production.
- `test` is staging/test.
- Feature branches are temporary and must start from the latest `main`.
- Feature branch format: `feature/<feature-name>`.
- Feature work flows through a pull request into `test`, then testing/review, then a pull request into `main`.
- Delete feature branches after merge.
- Do not create a permanent `prod` branch.

```text
main
  -> feature/<feature-name>
  -> PR to test
  -> testing/review
  -> PR to main
  -> production
  -> delete feature branch
```

## Future Architecture Direction

These services are planned but not provisioned or connected yet:

| Area | Direction |
| --- | --- |
| Frontend | React + Vite + TypeScript + Tailwind CSS + shadcn/ui |
| Backend | Supabase Edge Functions |
| Database | Supabase PostgreSQL |
| Realtime | Supabase Realtime |
| Authentication | Supabase Auth |
| Storage | Supabase Storage |
| Deployment | Cloudflare |
| CI/CD | GitHub Actions |
| E2E | Playwright |

## Documentation

- [Architecture](docs/architecture.md)
- [Branch Strategy](docs/branch-strategy.md)
- [Environment](docs/environment.md)
- [Testing](docs/testing.md)
