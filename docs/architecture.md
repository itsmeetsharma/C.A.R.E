# Architecture

C.A.R.E. currently contains a frontend-only foundation.

## Boundaries

- `src/app`: Application composition and top-level shell wiring.
- `src/components`: Shared UI and layout components.
- `src/config`: Branding and environment configuration.
- `src/lib`: Framework-agnostic utilities.
- `src/pages`: Route-level screens.
- `src/styles`: Global styles and Tailwind layers.
- `tests/e2e`: Playwright tests.

Backend, database, authentication, and Supabase/PostgreSQL concerns are intentionally absent in this phase.

## Future Supabase/PostgreSQL Readiness

Environment variable placeholders exist for future Supabase integration, but no client, schema, migration, auth flow, or runtime connection has been added.

When backend work begins, keep API clients, data access, and authentication logic outside presentational UI components.

## Future Architecture Direction

The intended architecture is documented here for planning only. These services are not provisioned, connected, or implemented in this foundation.

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
