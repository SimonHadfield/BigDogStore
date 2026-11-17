# BigDogStore - Project Progress & Architecture

## Overview
High-converting, ultra-fast e-commerce storefront for **Big Dog Club** (configurable in `src/data/brand.ts`), a warm, casual, slightly goofy UK lifestyle brand for owners of clumsy 40kg lapdogs and gentle giants.

## Stack
- **Framework**: Astro 4 (SSR hybrid mode for dynamic Checkout & Webhook API routes)
- **Adapter**: Cloudflare Pages (`@astrojs/cloudflare`)
- **Styling**: Tailwind CSS with custom palette (Warm Cream `#FAF6F0`, Soft Sand `#F2EAE0`, Deep Espresso `#1E1B18`, Doberman Tan `#D97736`, Matcha Sage `#4A7C59`)
- **Typography**: Self-hosted `@fontsource/fraunces` and `@fontsource/plus-jakarta-sans` for zero third-party font calls and strict CSP compliance
- **Payment & Webhooks**: Stripe Node SDK with UK-only address collection
- **Security**: Strict Content-Security-Policy and HTTP security headers in `public/_headers` (A+ target on SecurityHeaders.com, 100/100 Lighthouse)

## Completed Milestones
- [x] Initialized Git repository and documented architecture.
- [x] Setup Astro 4 + Tailwind + `@astrojs/cloudflare` edge adapter.
- [x] Rebranded from dark aesthetic to warm, friendly lifestyle vibe (*Big Dog Club*).
- [x] Modularized brand configuration in `src/data/brand.ts` for quick renaming (e.g. *Big Dog Club* / *Velcro Dog Club*).
- [x] Upgraded typography to self-hosted `@fontsource` packages.
- [x] Re-architected homepage hero into bright two-column layout with product showcase card and honest trust bar.
- [x] Integrated manual small-batch UK hand-inspection messaging (5–7 working days) across product pages and confirmation screens.
- [x] Preserved and verified Stripe checkout API (`/api/checkout`), webhook (`/api/webhook`), and POD fulfillment service (`src/lib/fulfillment.ts`).
- [x] Passed automated verification test suite and Cloudflare Pages production build.

## Ongoing Maintenance & Enhancements
- [ ] Connect production Stripe API keys in Cloudflare Pages environment variables (`STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`).
- [ ] Connect production UK Print-on-Demand supplier credentials in `src/lib/fulfillment.ts`.
