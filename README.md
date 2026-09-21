# ISPA Digital — Phases 1–4

React, Vite, TypeScript, Tailwind CSS, React Router and Lucide foundation. Manrope typography with an orange accent with gray and white surfaces. The responsive homepage includes the supplied ISPA Digital logo, services, value proposition, web showcase, sample project dialogs, all marketing and web packages, an interactive five-step process and readable insights. This is not a production launch; secondary pages and backend features remain staged.

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

All requested public routes resolve. Secondary pages are still placeholders pending their scheduled phases. Unknown routes show 404. Admin functionality is not exposed. Mobile navigation supports Escape, a focus trap and scroll locking. WhatsApp appears only when a valid configured number is supplied; no contact details, client results or testimonials are invented.

## Phase boundaries

1. Foundation (current): design system, shared shell, routing, UI primitives.
2. Homepage (complete): full homepage flow with interactive sample projects, process and insights. Testimonials stay hidden until real approved feedback is added.
3. Services (complete): overview and seven full service pages with inclusions, benefits, process, FAQs and CTAs.
4. Portfolio (complete): filterable, typed sample concepts with reusable cards and accessible detail dialogs.
5. Standalone packages page.
6. Validated contact/quote forms, Express API and MongoDB persistence.
7. Blog, per-page metadata, canonical URLs, structured data and sitemap.
8. Backend modules and protected admin authentication architecture.
9. Accessibility, performance and responsive verification.
10. Production deployment configuration.

Production hosting must rewrite non-asset frontend routes to `index.html`. Set `VITE_API_URL` for the future API. Never expose MongoDB, SMTP or Cloudinary secrets through `VITE_` variables. Tracking variables are reserved; tracking is not activated in Phase 1. External Google Fonts currently supplies Manrope; self-hosting can be considered during performance optimization. Legal routes intentionally contain preview notices until approved policy content is supplied.

## Brand refresh

The supplied `public/images/ispa-logo.png` is preserved as provided. CSS frames the logo for the shared navbar, mobile menu and footer without changing the artwork. Bright orange highlights and buttons pair with charcoal text, gray surfaces and white backgrounds. Darker orange is used for small text readability. The hero workspace is labeled as an illustrative concept and contains no client results.

## Homepage data

Package data lives in `src/data/packages.ts`; sample concepts live in `src/data/projects.ts`. Genuine feedback can be added to `src/data/testimonials.ts`. Package CTAs retain the selection in the quote URL for integration in Phase 6. The full blog and article routes are implemented in Phase 7; homepage insights are currently readable in accessible dialogs. All concept artwork is lightweight HTML/CSS and SVG, without remote image requests.

The shared logo now uses the supplied symbol-only artwork at `public/images/ispa-symbol.png`, framed consistently in the header, mobile menu and footer. The previous full logo is retained as an original brand asset.

The current shared lockup uses the original two-dot ISPA symbol with a typeset ISPA / DIGITAL wordmark. The supplied artwork is preserved, with CSS framing only.
