# Clumsy Giants - Project Progress & Architecture

## Overview
Ultra-fast e-commerce storefront & waitlist launchpad for **Clumsy Giants**, an authentic, warm, and playful UK streetwear brand for large breed dog lovers, inspired by Dobermans and gentle giants. Founded by Pati & Obi.

## Stack & Architecture
- **Framework**: Astro 4 (SSR hybrid mode for dynamic Checkout, Webhook, and Waitlist API routes)
- **Adapter**: Cloudflare Pages (`@astrojs/cloudflare`)
- **Styling**: Tailwind CSS with warm, outdoorsy earthy tones (Warm Oat/Sand `#EDE3D5`, Warm Cream `#F8F4EE`, Deep Charcoal `#1C1917` 2px borders with 4px hard offset shadows, Doberman Tan `#C87A4B`, Forest Olive `#4B5842`, Burgundy `#5C2B33`)
- **Typography**: Self-hosted `@fontsource/fredoka` (600/700) for bouncy retro hoodie display headings, `@fontsource/plus-jakarta-sans` for readable body copy. Zero external Google Font CDN calls.
- **Navigation & Brand Wordmark**: Centered wordmark logo ([src/components/Logo.astro](file:///a:/dev/BigDogStore/src/components/Logo.astro)) flanked by left and right boutique streetwear links.
- **Authentic Founder Story & Assets**: Hero photo frame in [src/pages/index.astro](file:///a:/dev/BigDogStore/src/pages/index.astro) prepared for Pati & Obi with graceful fallback and TODO comments (`src/assets/pati-and-obi.jpg`).
- **Product Assets Slot**: [src/components/HoodieMockup.astro](file:///a:/dev/BigDogStore/src/components/HoodieMockup.astro) and [src/data/products.ts](file:///a:/dev/BigDogStore/src/data/products.ts) configured with TODO slots for transparent hoodie PNGs (`src/assets/products/`).
- **Simplified Homepage**: Focused Drop 01 hero teaser with hand-drawn SVG doodles (sparkles, motion lines, hearts), 4-pillar trust bar, and unboxing block *"Packed with Love (And Probably Dog Hair)"*.
- **Waitlist Mode**: Built-in `WAITLIST_MODE` boolean toggle in `src/data/brand.ts` with coming soon landing page at `/` and store preview at `/shop`.
- **Payment & Webhooks**: Stripe Node SDK with UK-only address enforcement (`GB`).
- **Security**: Strict Content-Security-Policy and HTTP security headers in `public/_headers` (A+ target on SecurityHeaders.com, 100/100 Lighthouse).

## Completed Milestones
- [x] Centered clean wordmark logo ([src/components/Logo.astro](file:///a:/dev/BigDogStore/src/components/Logo.astro)) in header navigation with `— LARGE BREED STREETWEAR —` tracked subtitle and TODO comment for Pati's final transparent vector/PNG.
- [x] Removed silhouettes from text logo.
- [x] Shifted color tokens to warm earthy/outdoorsy palette: Warm Oat canvas (`#EDE3D5`), Warm Cream cards (`#F8F4EE`), Deep Charcoal (`#1C1917`), Doberman Tan (`#C87A4B`), Forest Olive (`#4B5842`), and Burgundy (`#5C2B33`).
- [x] Built authentic Hero Section with Pati & Obi photo frame in [src/pages/index.astro](file:///a:/dev/BigDogStore/src/pages/index.astro) with graceful fallback and TODO slot for `src/assets/pati-and-obi.jpg`.
- [x] Configured transparent hoodie PNG slots in [src/data/products.ts](file:///a:/dev/BigDogStore/src/data/products.ts) and [src/components/HoodieMockup.astro](file:///a:/dev/BigDogStore/src/components/HoodieMockup.astro) (`src/assets/products/`).
- [x] Decorated hero headline *"Streetwear for Large Breed Lovers"* with hand-drawn inline SVG doodle accents (sparkles, motion lines, heart).
- [x] Simplified homepage: removed bulky 4-card collection grid in favor of small, curated Drop 01 launch focus.
- [x] Kept 4-pillar trust bar (*"Premium Heavyweight Quality"*, *"Hand-Packed Unboxing Experience"*, *"Large Breed Community"*, *"Small-Batch Designs"*).
- [x] Added compact *"Packed With Love (And Probably Dog Hair)"* unboxing & story block detailing small-batch checks, paw tissue wrap, and free vinyl die-cut stickers.
- [x] Preserved 100/100 Lighthouse setup: self-hosted fonts, strict CSP headers in `public/_headers`, Cloudflare Pages adapter, and Stripe endpoints.
- [x] All 6 test suites passing cleanly (`npm test`). Production build verified (`npm run build`).
