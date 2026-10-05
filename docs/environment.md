# Environment

Use `.env.example` as the public template for local configuration.

Local secrets belong in `.env` or another ignored `.env.*` file. They must not be committed.

## Variables

| Variable | Purpose |
| --- | --- |
| `VITE_APP_NAME` | Public product name. |
| `VITE_APP_FULL_NAME` | Public expanded product name. |
| `VITE_APP_ENV` | Current app environment label. |
| `VITE_API_BASE_URL` | Future API base URL. |
| `VITE_SUPABASE_URL` | Future Supabase project URL. |
| `VITE_SUPABASE_ANON_KEY` | Future Supabase public anonymous key. |

Only `VITE_` variables are exposed to the Vite frontend bundle.
