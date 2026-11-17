# Clumsy Giants - Project Progress & Architecture

## Overview
Ultra-fast e-commerce storefront & waitlist launchpad for **Clumsy Giants**, a colorful, goofy, retro-playful UK streetwear brand dedicated to 40kg lapdogs and clumsy gentle giants.

## Stack & Architecture
- **Framework**: Astro 4 (SSR hybrid mode for dynamic Checkout, Webhook, and Waitlist API routes)
- **Adapter**: Cloudflare Pages (`@astrojs/cloudflare`)
- **Styling**: Tailwind CSS with custom Neo-Brutalist design tokens (Retro Butter `#F8D26A`, Vanilla `#FFFDF7`, Deep Ink `#1A1614` 2px borders with 4px hard offset shadows, Doberman Rust `#E06D3B`, Mint `#52B788`)
- **Typography**: Self-hosted `@fontsource/fredoka` (600/700) for bouncy retro hoodie headings, `@fontsource/plus-jakarta-sans` for readable body copy.
- **Waitlist Mode**: Built-in `WAITLIST_MODE` boolean toggle in `src/data/brand.ts` with dedicated coming soon landing page at `/` and store preview at `/shop`.
- **Payment & Webhooks**: Stripe Node SDK with UK-only address enforcement.
- **Security**: Strict Content-Security-Policy and HTTP security headers in `public/_headers` (A+ target on SecurityHeaders.com, 100/100 Lighthouse).

## Completed Milestones
- [x] Rebranded to **Clumsy Giants** with colorful retro-playful aesthetic.
- [x] Configured non-white vibrant canvas: Retro Butter (`#F8D26A`) with Vanilla cards (`#FFFDF7`) and hard 4px ink drop shadows (`shadow-brutal`).
- [x] Installed self-hosted `@fontsource/fredoka` for bubbly, goofy headings.
- [x] Created reusable SVG hoodie mockup slot component ([src/components/HoodieMockup.astro](file:///a:/dev/BigDogStore/src/components/HoodieMockup.astro)) replacing stock flat-lays.
- [x] Implemented `WAITLIST_MODE: true` in `src/data/brand.ts`.
- [x] Created high-converting Coming Soon landing page at `/` with Drop 01 teaser card.
- [x] Implemented `POST /api/waitlist` endpoint with validation, clear Cloudflare D1 comments, and cheerful pack confirmation.
- [x] Created full store route at `/shop` so the store can be previewed while waitlist is active.
- [x] Maintained small-batch UK hand-inspection messaging (5–7 working days) across all product detail and order confirmation pages.
- [x] Passed automated verification test suite (6/6 tests passing) and Cloudflare Pages build.
