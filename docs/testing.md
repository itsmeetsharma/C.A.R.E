# Testing

The foundation includes unit tests with Vitest and end-to-end tests with Playwright.

Every applicable feature should include automated tests. Do not bypass tests when preparing code for review or production.

## Unit Tests

```bash
npm run test
```

Unit tests use React Testing Library and `jsdom`.

## End-to-End Tests

```bash
npm run test:e2e
```

Playwright starts the production preview server through the project configuration.

Install Playwright browsers locally if needed:

```bash
npx playwright install
```
