# ISPA Digital — Phase 1

React, Vite, TypeScript, Tailwind CSS, React Router and Lucide foundation. Manrope typography with an orange accent with gray and white surfaces. The foundation now includes a corporate homepage refresh and the supplied ISPA Digital logo. This is not a production launch; secondary pages and backend features remain staged.

## Run

Use Node.js 20.19+ or 22.12+. Run `npm install`, copy `.env.example` to `.env` if needed, then `npm run dev`. Validate with `npm run typecheck` and `npm run build`.

## Structure

- `src/app`: routing and application layout
- `src/components`: shared navigation, footer and UI primitives
- `src/config`: centralized public configuration and service route data
- `src/pages`: lazy-loaded corporate homepage, placeholders and 404
- `src/styles`: responsive design system and Tailwind integration
- `server/src`: reserved for the later modular Express backend
- `public`: future static assets

All requested public routes resolve, including service routes and article previews. Unknown routes show 404. Admin functionality is not exposed. Mobile navigation supports Escape, a focus trap and scroll locking. WhatsApp appears only when a valid configured number is supplied; no contact details, client results or testimonials are invented.

## Phase boundaries

1. Foundation (current): design system, shared shell, routing, UI primitives.
2. Homepage: complete the remaining brief sections (showcase, sample portfolio, packages, process and insights). The corporate hero, core expertise, partnership and CTA are now in place.
3–5. Services, sample portfolio and packages.
6. Validated contact/quote forms, Express API and MongoDB persistence.
7. Blog, per-page metadata, canonical URLs, structured data and sitemap.
8. Backend modules and protected admin authentication architecture.
9. Accessibility, performance and responsive verification.
10. Production deployment configuration.

Production hosting must rewrite non-asset frontend routes to `index.html`. Set `VITE_API_URL` for the future API. Never expose MongoDB, SMTP or Cloudinary secrets through `VITE_` variables. Tracking variables are reserved; tracking is not activated in Phase 1. External Google Fonts currently supplies Manrope; self-hosting can be considered during performance optimization. Legal routes intentionally contain preview notices until approved policy content is supplied.

## Brand refresh

The supplied `public/images/ispa-logo.png` is preserved as provided. CSS frames the logo for the shared navbar, mobile menu and footer without changing the artwork. Bright orange highlights and buttons pair with charcoal text, gray surfaces and white backgrounds. Darker orange is used for small text readability. The hero workspace is labeled as an illustrative concept and contains no client results.
