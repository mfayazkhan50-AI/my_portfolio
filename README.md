# MFK AI Solutions website

Client-focused portfolio and agency site built with React, Vite, and React Router.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Local development

```sh
npm install
npm run dev
```

Copy `.env.example` to `.env.local`, then set the optional values as needed:

- `VITE_SITE_URL`: public canonical site origin.
- `VITE_FORM_ENDPOINT`: Formspree endpoint configured to deliver to `mfkaisolutions@gmail.com`.
- `VITE_BOOKING_URL`: optional booking-provider embed URL. Without it, contact visitors can schedule by WhatsApp.
- `VITE_PLAUSIBLE_DOMAIN`: optional domain for Plausible analytics.

The contact form reports an error and offers direct email/WhatsApp links until a form endpoint is configured. Confirm the Formspree account's destination and test delivery before advertising the form as operational. Do not put private API keys in `VITE_*` variables; Vite exposes them to browsers.

## Verify and build

```sh
npm run lint
npm run build
npm run preview
```

The production output is written to `dist/`.

## Vercel deployment

Import the repository into Vercel and use the Vite preset, `npm run build` as the build command, and `dist` as the output directory. Set the required environment variables in the Vercel project before deploying. Rebuild after changing environment values. Confirm direct navigation to nested routes, the contact submission, booking fallback, and social preview metadata on the deployed site.

## Content

Project, service, brand, and profile content is maintained in `src/data/portfolioData.js`. Owner-supplied items that still need confirmation are listed in `TODO_OWNER.md`.
