# LuxeScents API

## Stack
- Node + Express + TypeScript
- Prisma ORM (PostgreSQL)

## Commands
```bash
# install deps
npm install
# generate client
npm run prisma:generate
# dev with auto-reload
npm run dev
# create dev migration
npm run prisma:dev -- --name init
# seed data
npm run seed
```

Set `DATABASE_URL` in environment.
