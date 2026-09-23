# ISPA Digital

Full-stack corporate website built with React, Vite, TypeScript, Tailwind CSS, Express and MongoDB. The repository uses npm workspaces so the client and API remain separate while sharing root-level commands.

## Setup

Use Node.js 20.19+ or 22.12+.

```bash
npm install
cp client/.env.example client/.env
cp server/.env.example server/.env
npm run dev
```

The client runs at `http://localhost:3100` and proxies `/api` to the Express server at `http://localhost:5050`. `MONGODB_URI` is optional for the health endpoint, but contact and quote submissions return HTTP 503 until a database is configured.

## Commands

```bash
npm run dev          # client and server
npm run dev:client   # client only
npm run dev:server   # API only
npm run check        # all TypeScript checks
npm run build        # production client and server
npm run clean        # generated build files
npm run admin:create # provision an administrator
```

## Structure

- `client/src` — React application, pages, components, configuration and data
- `client/public` — public brand assets and crawler files
- `server/src` — Express API, validation, persistence and protected admin routes
- `Dockerfile` — multi-stage production image

Contact requests use `POST /api/contact`, quote requests use `POST /api/quotes`, and service health is available at `GET /api/health`. Protected APIs under `/api/admin` require a signed bearer token with an `admin` or `editor` role.

## Admin dashboard

Open `http://localhost:3100/admin` after starting the project. The dashboard provides authenticated views for messages, quote requests, blog entries, projects and services. Configure `MONGODB_URI`, `AUTH_SECRET`, `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `server/.env`, then provision or update the administrator with `npm run admin:create`.

## Production

Set `NODE_ENV=production`, `PORT`, `MONGODB_URI`, `CLIENT_ORIGIN`, `SITE_URL`, `VITE_SITE_URL`, `VITE_API_URL=/api`, and an `AUTH_SECRET` of at least 32 characters. Never expose MongoDB, SMTP, Cloudinary or authentication secrets through variables prefixed with `VITE_`.

Generate production crawler files before building:

```bash
SITE_URL=https://your-domain.example npm run generate:seo
npm ci
npm run check
npm run build
NODE_ENV=production npm start
```

The production Express server serves `client/dist`, falls back to the React application for browser routes, and applies immutable caching to fingerprinted assets. The container runs as the unprivileged `node` user and checks `/api/health` for readiness.

Before launch, complete the legal review note and configure verified contact details, business hours, social profiles and any enabled SMTP, Cloudinary or analytics integrations.
