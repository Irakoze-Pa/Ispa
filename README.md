# ISPA Digital — Phases 1–10

React, Vite, TypeScript, Tailwind CSS, React Router and Lucide foundation. Manrope typography with orange accents, gray structure and white surfaces. The responsive corporate site includes the supplied ISPA Digital logo, complete service pages, sample project concepts, packages, contact and quote flows, an About page, and original insight articles. Production deployment is prepared; the private admin UI, verified business contact details and final legal approval remain outstanding.

## Run

Use Node.js 20.19+ or 22.12+. Run `npm install`, copy `.env.example` to `.env` if needed, then `npm run dev`. Validate with `npm run typecheck` and `npm run build`.

## Structure

- `src/app`: routing and application layout
- `src/components`: shared navigation, footer and UI primitives
- `src/config`: centralized public configuration and service route data
- `src/pages`: lazy-loaded corporate pages, articles, forms and 404
- `src/styles`: responsive design system and Tailwind integration
- `server/src`: modular Express API and Mongoose models
- `public`: supplied brand assets and crawler rules

All requested public routes resolve, including full Privacy Policy and Terms pages tailored to the site’s current functionality. Unknown routes show 404. Admin functionality is not exposed. Mobile navigation supports Escape, a focus trap and scroll locking. WhatsApp appears only when a valid configured number is supplied; no contact details, client results or testimonials are invented.

## Phase boundaries

1. Foundation (complete): design system, shared shell, routing, UI primitives.
2. Homepage (complete): full homepage flow with interactive sample projects, process and insights. Testimonials stay hidden until real approved feedback is added.
3. Services (complete): overview and seven full service pages with inclusions, benefits, process, FAQs and CTAs.
4. Portfolio (complete): filterable, typed sample concepts with reusable cards and accessible detail dialogs.
5. Packages (complete): standalone marketing and web plans plus the full add-on catalogue.
6. Contact and quote (complete): validated forms, modular Express endpoints and MongoDB persistence architecture. Configure `MONGODB_URI` to enable storage.
7. Blog and About (complete): original articles, per-page metadata, canonical URLs, structured data and production sitemap generation.
8. Backend and admin preparation (complete): secure password hashing, signed expiring bearer sessions, admin/editor role guards, protected content listings and models for future managed content.
9. Optimization (complete): mobile and desktop route smoke tests, horizontal-overflow checks, alt-text audit, duplicate logo announcement cleanup, reduced-motion support and render-safe dialog behavior.
10. Deployment preparation (complete): emitted API build, single-service SPA hosting, security and cache headers, graceful shutdown, health-aware multi-stage container and production runbook.

Production hosting must rewrite non-asset frontend routes to `index.html`. Set `VITE_API_URL` for the API and set both `VITE_SITE_URL` and server-side `SITE_URL` to the confirmed production origin. Run `npm run generate:seo` before deployment. Never expose MongoDB, SMTP or Cloudinary secrets through `VITE_` variables. Tracking variables are reserved and inactive. External Google Fonts currently supplies Manrope; self-hosting can be considered during performance optimization. Legal routes contain publication-ready working drafts and a visible final-review note until ISPA Digital approves the business-specific legal details.

## Brand refresh

The supplied `public/images/ispa-logo.png` is preserved as provided. CSS frames the logo for the shared navbar, mobile menu and footer without changing the artwork. Bright orange highlights and buttons pair with charcoal text, gray surfaces and white backgrounds. Darker orange is used for small text readability. The hero workspace is labeled as an illustrative concept and contains no client results.

## Homepage data

Package data lives in `src/data/packages.ts`; sample concepts live in `src/data/projects.ts`. Genuine feedback can be added to `src/data/testimonials.ts`. Package CTAs retain the selection in the quote URL for integration in Phase 6. The full blog and article routes are implemented with original editorial content and lightweight code-generated artwork. All concept artwork is lightweight HTML/CSS and SVG, without remote image requests.

The shared logo now uses the supplied symbol-only artwork at `public/images/ispa-symbol.png`, framed consistently in the header, mobile menu and footer. The previous full logo is retained as an original brand asset.

The current shared lockup uses the original two-dot ISPA symbol with a typeset ISPA / DIGITAL wordmark. The supplied artwork is preserved, with CSS framing only.

## Forms and API

Run `npm run dev:server` for the Express API on port 5050. Contact submits to `POST /api/contact`; quote requests submit to `POST /api/quotes`. In development Vite proxies `/api` to the backend. Both endpoints strictly validate input and store through Mongoose only when MongoDB is connected.

Admin APIs are server-only under `/api/admin` and require a signed bearer token with an `admin` or `editor` role. Configure a 32+ character `AUTH_SECRET`, MongoDB, `ADMIN_EMAIL` and a 12+ character `ADMIN_PASSWORD`, then run `npm run admin:create` to provision the first administrator. The script never ships default credentials. Run `npm run check` for frontend and server TypeScript checks.
