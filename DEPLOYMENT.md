# Production deployment

The project ships as one Node service: Vite builds the public site into `dist`, TypeScript builds the API into `dist-server`, and Express serves both in production.

## Required configuration

Set `NODE_ENV=production`, `PORT`, `MONGODB_URI`, `CLIENT_ORIGIN`, a random `AUTH_SECRET` of at least 32 characters, `VITE_SITE_URL`, `SITE_URL`, and `VITE_API_URL=/api`. Configure SMTP, Cloudinary and tracking variables from `.env.example` only when those integrations are enabled. Never place server secrets in a `VITE_` variable.

Before the final build, run `SITE_URL=https://your-confirmed-domain.example npm run generate:seo` so the sitemap and robots file use the real origin. Complete the legal review note on the Privacy Policy and Terms pages, then provide verified phone, email, business hours, social profiles and WhatsApp number before launch.

## Build and run

```bash
npm ci
npm run check
npm run build
NODE_ENV=production npm start
```

The health endpoint is `/api/health`. All other `/api/*` misses return JSON 404 responses, while public browser routes fall back to the React application. Fingerprinted frontend assets receive long-lived immutable caching.

## Container

`Dockerfile` uses a Node 22 multi-stage build, installs production dependencies only in the runtime image, runs as the unprivileged `node` user and includes a health check. Build and run it with your platform's secret manager rather than copying a local `.env` file into the image.
