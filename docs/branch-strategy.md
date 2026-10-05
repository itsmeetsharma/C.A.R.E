# Branch Strategy

C.A.R.E. uses two permanent branches:

- `main`: production.
- `test`: staging/test.

Feature branches are temporary and must start from the latest `main`.

## Workflow

```text
main
  -> feature/<feature-name>
  -> PR to test
  -> testing/review
  -> PR to main
  -> production
  -> delete feature branch
```

Do not create a permanent `prod` branch.

Production deployment requires human approval.
