# Testing & Quality Assurance Plan

## 1. Security Header Verification
- Target: A+ on SecurityHeaders.com
- Cloudflare Pages `public/_headers` rules:
  - `Content-Security-Policy`: Default `'self'`, styles `'unsafe-inline'`, images `'self' data: https:`, fonts `'self' data: https:`, connect `'self' https://api.stripe.com`
  - `X-Frame-Options`: DENY
  - `X-Content-Type-Options`: nosniff
  - `Referrer-Policy`: strict-origin-when-cross-origin
  - `Permissions-Policy`: camera=(), microphone=(), geolocation=()
  - `Strict-Transport-Security`: max-age=31536000; includeSubDomains; preload

## 2. Lighthouse Audit Criteria (Target 100/100)
- **Performance**: Zero bulky client JS bundles; native semantic HTML; explicit image dimensions to prevent CLS.
- **Accessibility**: High-contrast WCAG AAA/AA ratios, aria-labels on interactive elements, logical heading hierarchies (`h1` -> `h2` -> `h3`), proper button states.
- **Best Practices**: Valid doctype, UTF-8 charset, HTTPS enforcement, modern modern image formats.
- **SEO**: Structured OpenGraph tags, Twitter cards, meta descriptions, canonical URLs, semantic schema / JSON-LD markup.

## 3. Stripe & Webhook Integration Tests
- Unit test for fulfillment payload serialization in `src/lib/fulfillment.ts`.
- Validation of Stripe API route parameters (valid SKU, quantity, size, color).
- Mock webhook verification with correct signature and event simulation (`checkout.session.completed`).

## 4. Build & Production Verification
- `npm run build` must compile cleanly with `@astrojs/cloudflare` output adapter.
- No TypeScript compiler errors.
