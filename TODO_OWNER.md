# Owner content and launch checklist

- [ ] Configure `VITE_FORM_ENDPOINT` with the correct Formspree endpoint and confirm submissions arrive at `mfkaisolutions@gmail.com`.
- [ ] Decide whether to use a booking provider; if so, set `VITE_BOOKING_URL` and test the embed on mobile.
- [ ] Confirm the public canonical origin in `VITE_SITE_URL` and keep it consistent with sitemap, robots, JSON-LD, and social image metadata.
- [ ] Add a confirmed founder story in `OWNER_INPUTS.story`.
- [ ] Add verified experience, education, certificate, and hackathon details, including public links where available.
- [ ] Add client-approved testimonials only after obtaining permission.
- [ ] Add verifiable project outcomes/results and mark any demo/sample data in `OWNER_INPUTS`.
- [ ] Review all project descriptions, screenshots, and demo links for client permission and personally identifying or confidential information.
- [ ] Replace screenshot `public/images/bizbrain-chat.jpg`: the assistant response and source-citation text is visibly garbled; it is labeled “Concept mockup” until replaced.
- [ ] Replace screenshot `public/images/competitrack-terminal.jpg`: the browser bar shows an unverified `competitrack.ai` URL and the dashboard contains illustrative metrics; it is labeled “Concept mockup” until replaced.
- [ ] ClinicFlow’s earlier screenshot was removed because it exposed patient details. The current `public/images/clinicflow-dashboard.svg` is an illustrative preview, not a live product screenshot.
- [ ] Confirm `public/Muhammad-Fayaz-Resume.pdf` is the intended public CV before deployment.
- [ ] Confirm service deliverables and engagement models; populate prices/timelines only if ready to publish.
- [ ] Configure `VITE_PLAUSIBLE_DOMAIN` only if analytics should be enabled.
