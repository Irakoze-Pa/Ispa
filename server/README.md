# ISPA Digital API

The TypeScript Express API currently implements validated contact and quote submissions with Mongoose persistence.

## Run

Set `MONGODB_URI`, `CLIENT_ORIGIN` and optional `PORT` in the root `.env`, then run `npm run dev:server`. The frontend Vite server proxies `/api` to port 5050 during development.

Without `MONGODB_URI`, the health endpoint stays available but submission endpoints return HTTP 503. This prevents the UI from pretending an enquiry was saved. Request bodies are limited to 50 KB and validated with strict Zod schemas. CORS is restricted to `CLIENT_ORIGIN` and Express signature headers are disabled.

Future backend phases will add the blog, project, service, newsletter and protected authentication/admin modules. Cloudinary credentials remain reserved for future server-side image uploads.
