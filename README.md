# MFK AI Solutions

Business website for MFK AI Solutions, an AI automation and software studio founded by Muhammad Fayaz Khan. Built with React, Vite, React Router, and custom CSS.

## Routes

- `/` — Home
- `/services` — Services and process
- `/projects` — Project portfolio
- `/about` — Studio overview and project proof
- `/founder` — Founder profile
- `/contact` — Contact form and booking/contact options

Unknown paths display a custom 404 page. `vercel.json` rewrites direct route requests to the SPA entry point.

## Development

Requirements: Node.js 20.19+ or 22.12+ and npm.

```sh
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

The production build is written to `dist/`.

## Configuration and owner content

Project, service, brand, founder, skills, proof, and form-option data is maintained in `src/data/portfolioData.js`. JSDoc types document the shared project and service shapes. Displayed raster project/profile images use optimized WebP copies; original public assets are retained.

Copy `.env.example` to `.env.local` and configure only public values:

- `VITE_SITE_URL` — canonical website origin used for metadata and structured data.
- `VITE_FORM_ENDPOINT` — optional Formspree endpoint. Until configured, the form explains that it is unavailable and directs visitors to email or WhatsApp.
- `VITE_BOOKING_URL` — optional Cal.com/Calendly URL. Without it, calls to action are labeled “Contact Us” and lead to `/contact`.
- `VITE_PLAUSIBLE_DOMAIN` — optional Plausible domain.

Vite exposes `VITE_*` values to visitors. Never put private credentials in these variables.

Missing owner-provided experience, education, project results, prices, and extra proof are represented in the config and hidden from the UI until supplied. See `TODO_OWNER.md` for the owner checklist and image replacements.

## SEO limitation

This is a client-rendered SPA. Route-specific titles, descriptions, canonical links, social metadata, and JSON-LD are updated after React loads, but crawlers that do not execute JavaScript may see only the Home metadata from `index.html`. Static prerendering is not configured.

## Deployment

Use the Vite preset on Vercel with `npm run build` and `dist`. Confirm `VITE_SITE_URL`, configure any optional form/booking/analytics integrations, and test refreshes on `/projects`, `/founder`, and other routes after deployment.
