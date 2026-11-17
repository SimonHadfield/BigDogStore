# Testing & Quality Assurance Plan - Clumsy Giants

## Test Objectives
1. **Security Headers (SecurityHeaders.com Target: A+)**:
   - Validate presence of strict `Content-Security-Policy`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload` in `public/_headers` and `dist/_headers`.
   - Ensure zero external Google Font requests (100% self-hosted `@fontsource/fredoka` and `@fontsource/plus-jakarta-sans`).

2. **Waitlist Mode (`WAITLIST_MODE`) & API**:
   - `BRAND_CONFIG.WAITLIST_MODE: true` serves the high-converting Coming Soon landing page at `/`.
   - `POST /api/waitlist` validates email, stores subscriber, and returns pack confirmation ("You're in the pack! We'll bark when Drop 01 goes live. 🐾").
   - Full store catalog remains accessible at `/shop` for previewing and testing checkout flows.

3. **Lighthouse Target: 100/100 (Performance, Accessibility, Best Practices, SEO)**:
   - High color contrast between Retro Butter (`#F8D26A`), Vanilla cards (`#FFFDF7`), Deep Ink (`#1A1614`), and Doberman Rust (`#E06D3B`) meeting WCAG AA/AAA standards.
   - Zero-bloat client runtime (no heavy frameworks, minimal inline JS).
   - SVG vector mockup components ready for hoodie PNG drop-ins.

4. **Stripe Checkout & Webhook Integration**:
   - Server-side route `/api/checkout` restricting shipping to the UK (`GB`).
   - Server-side route `/api/webhook` verifying Stripe webhook signatures.
   - Small-batch UK fulfillment adapter (`src/lib/fulfillment.ts`) generating supplier order payloads.

## Running Tests
Run automated test suite:
```bash
npm test
```
Build for Cloudflare Pages:
```bash
npm run build
```
Preview locally:
```bash
npm run preview
```
