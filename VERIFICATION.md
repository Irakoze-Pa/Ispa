# Phase 1 verification

- TypeScript and Vite production build pass.
- Dependency audit: zero vulnerabilities at installation.
- Browser visual review: 1280px desktop, 768px tablet, 390px mobile.
- Mobile and tablet document width matches viewport width; no horizontal overflow observed.
- Mobile menu opens, services disclosure expands, service selection navigates and closes the menu.
- Focus handling includes visible links, buttons and the services summary; Escape closes the menu and restores the toggle focus.
- All requested public routes were visited, including service detail placeholders, dynamic article preview, legal pages and quote/contact placeholders.
- An unknown route renders the professional 404 page.
- WhatsApp is intentionally hidden without a configured number.

Later phases must validate functional forms, APIs, MongoDB storage, finalized SEO and production hosting; those features are outside Phase 1.

## Corporate brand refresh

- Supplied logo loads in the navigation, mobile menu and footer.
- Corporate homepage replaces development-focused messaging with client-facing service, partnership and CTA sections.
- Hero chart is clearly labeled as an illustration, with no fabricated client metrics.
- Updated styling reviewed in desktop and mobile browser layouts; no 390px horizontal overflow.

## Phase 2 — Homepage

- TypeScript and production build pass after the completed homepage implementation.
- Homepage flow includes value proposition, eight services, six agency differentiators, browser/device showcase, three sample concepts, four marketing packages, four website packages, five-step process, insights and final CTA.
- Testimonials have a reusable component and typed data structure; the empty section is hidden.
- Project details open in a native modal dialog with sample status, fictional client label and services.
- Selecting Grow changes the process detail and next-step control.
- Insight dialogs display the full homepage editorial copy and close correctly.
- Business Growth CTA navigates to `/request-quote?package=Business%20Growth`.
- Browser review at 390px mobile, 768px tablet and 1280px desktop; document width matches each viewport. Mobile package cards and device showcase reviewed visually.
- Secondary routes remain scheduled placeholders. No enquiry or quote submission is simulated.

## Phase 3 — Services

- TypeScript and production build pass.
- Services overview renders all seven primary service routes.
- Digital Marketing, Social Media Management, Content Creation, Website Development, E-commerce, SEO and Branding routes each render the expected unique H1 and three service-specific FAQs.
- Every detail page includes challenge, approach, inclusions, benefits, five-step process, related services, FAQ and quote CTA.
- Website Development FAQ disclosure tested in the browser; answer expands correctly.
- Desktop browser review confirms 1280px document width matches the viewport without horizontal overflow.
- Shared header and footer reviewed with the two-dot ISPA symbol plus the ISPA / DIGITAL wordmark.

## Phase 4 — Portfolio

- Filterable portfolio implements all requested categories.
- Five sample concepts are explicitly identified as fictional demonstrations with no client results.
- Category filter tested: Content Creation narrows five concepts to one.
- Accessible native project dialog tested with concept description, fictional client label, services and quote CTA.
- Homepage featured projects now reuse the same typed project cards and dialog.
- TypeScript and production build pass.

## Phase 5 — Packages

- Standalone packages page renders four digital marketing plans and four website development plans from shared typed data.
- Fifteen requested add-on services render with descriptions and icons.
- Advertising budget and starting-estimate notes are clearly visible.
- Browser check confirms eight pricing cards, fifteen add-on cards and correct page heading.
- TypeScript and production build pass.
