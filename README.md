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
1. Push this repo to GitHub.
2. On Railway, create a New Project → Deploy from GitHub → select this repo.
3. Build command: `npm run build`
4. Static publish: `dist`
5. Set any `VITE_...` env vars in Railway → Variables.

## License
MIT
