# Features Specification & Roadmap

## Brand Identity: CANIS NOBILE / BIG DOG ATELIER UK
- **Philosophy**: Elevated, architectural luxury streetwear celebrating the grace, loyalty, and quiet power of large breeds (Dobermans, Great Danes, Cane Corsos, Irish Wolfhounds).
- **Tone**: Clean, modern editorial aesthetics; high-fashion typography, deep obsidian, muted chalk, rich rust, and raw titanium tones. No aggressive or intimidating tropes.

## Core Features
1. **Cloudflare Pages Deployment & Edge Performance**
   - SSR Hybrid mode via `@astrojs/cloudflare`
   - Strict Security Headers via `public/_headers` (HSTS, CSP, X-Frame-Options: DENY, X-Content-Type-Options: nosniff, Referrer-Policy: strict-origin-when-cross-origin)
   - Zero-bloat client runtime for 100/100 Lighthouse score.

2. **Editorial Homepage (`/`)**
   - Hero banner: *"Elevated Apparel for Misunderstood Giants"*
   - Product Grid: 480GSM heavyweight hoodies, 280GSM oversized boxy tees, and heavyweight outerwear.
   - Size & Fit Guide: Oversized streetwear silhouettes with model specs (human & canine sizing guidance).
   - Brand Story: Narrative highlighting companionship, quiet strength, and premium craftsmanship.

3. **Dynamic Product Detail Page (`/products/[slug]`)**
   - JSON/TypeScript catalog (`src/data/products.ts`)
   - Interactive size selection (S, M, L, XL, XXL)
   - Color swatches & fabric specifications (garment weight, French terry, double-needle stitching)
   - Direct-to-checkout 'Buy Now' flow integrating Stripe Checkout.

4. **Server-Side Checkout API (`/api/checkout.ts`)**
   - Official `stripe` SDK
   - Restricted to UK shipping addresses (`shipping_address_collection: { allowed_countries: ['GB'] }`)
   - Line items dynamically generated from catalog specs
   - Metadata forwarding for fulfillment tracking.

5. **Fulfillment Webhook API (`/api/webhook.ts`) & Service (`src/lib/fulfillment.ts`)**
   - Verification of `stripe-signature` with signing secret
   - Handler for `checkout.session.completed`
   - Customer shipping address, SKU, size, and color extraction
   - Print-on-Demand (POD) / 3PL supplier integration adapter with clean JSON payload dispatch.

6. **Order Experience Pages**
   - Order Confirmation (`/order-confirmation`) with order reference and next steps.
   - Cart Recovery / Cancel (`/cart-recovery`) with reassuring messaging and quick-return CTA.
