# Agent Guide

This repository is the C.A.R.E. frontend foundation.

C.A.R.E. stands for Clinic Administration & Record Environment.

## Current Scope

Keep this phase limited to project structure, developer tooling, branding primitives, documentation, and a basic health/status page.

Do not implement patient management, queues, dashboards, reports, announcements, clinic status, authentication UI, or other business features until requested.

## Architecture Rules

- Keep frontend and backend concerns separated.
- Keep branding centralized in `src/config/brand.ts`.
- Keep environment handling centralized in `src/config/environment.ts`.
- Do not connect to Supabase until that phase is explicitly requested.
- Do not add real API keys, secrets, or fake production infrastructure.
- Use `.env.example` for documented variables and local `.env` files for private values.
- Never commit secrets.

## Branch Strategy

- `main` is production.
- `test` is staging/test.
- Feature branches are temporary and use `feature/<feature-name>`.
- New feature branches must always start from the latest `main`.
- Open feature pull requests into `test` for testing and review.
- Promote reviewed work from `test` to `main` with a pull request.
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

## C.A.R.E. Engineering Rules

1. Never bypass tests.
2. Never directly modify production data to fix an application problem.
3. Never expose patient data in logs.
4. Never commit secrets.
5. All database changes must use migrations.
6. Feature branches are temporary.
7. main is production.
8. test is staging/test.
9. Every applicable feature requires automated tests.
10. Production deployment requires human approval.
11. Never remove existing functionality without explicit approval.
12. Preserve C.A.R.E. terminology and UX requirements.
13. Keep documentation updated when architecture changes.
14. Never fabricate patient, visit, medical, or clinic data in production.
15. Production and test environments must remain separated.
16. Do not use production credentials locally or in automated tests.
17. Do not put sensitive patient information into error messages, analytics, or telemetry.

## Quality Bar

Before handing off changes, run:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Run `npm run test:e2e` when UI behavior or routing changes.
