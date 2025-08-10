# LuxeScents

Modern, elegant, mobile-first e‑commerce for luxury fragrances.

## Tech Stack
- Vite + React + TypeScript
- Tailwind CSS v4
- Icons: lucide-react

## Development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Environment
Create `.env` for future backend keys (Supabase, Stripe, etc.). Example:
```
VITE_API_URL=
```

## Deploy to Railway (frontend)
- Option A (Dashboard): Connect GitHub repo in Railway → set build: `npm run build` and start: `npm start` (serves `dist` via Caddy).
- Option B (GitHub Actions): We include `.github/workflows/railway-deploy.yml`.
  - Add GitHub Secrets:
    - `RAILWAY_TOKEN` – from Railway account settings.
    - `RAILWAY_PROJECT_ID` – Railway project → Settings → Project ID.
    - `RAILWAY_SERVICE_ID` – Service → Settings → Service ID.
  - Push to `main` to trigger deployment.

Caddyfile is configured for SPA fallback to `index.html` and uses `$PORT` from Railway.

## License
MIT
