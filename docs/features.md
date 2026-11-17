# Features Specification & Roadmap

## Brand Identity: BIG DOG CLUB (Configurable in `src/data/brand.ts`)
- **Philosophy**: Warm, casual, slightly goofy lifestyle streetwear for big dog people—specifically inspired by how clumsy, affectionate, and silly Dobermans and gentle giants actually are (matching a playful retro 'Dog Mom Club' & social club streetwear aesthetic).
- **Tone**: Warm, witty, and deeply relatable: references 40kg lapdogs, clumsy paws, personal space violations, couch hogs, and small-batch quality checks rather than 'quiet luxury' or 'architectural proportions'. Zero scary or aggressive tropes.
- **Palette**: Warm Cream (`#FAF6F0`), Soft Sand (`#F2EAE0`), Deep Espresso (`#1E1B18`), Doberman Tan (`#D97736`), and Matcha/Sage (`#4A7C59`). Fully WCAG AA/AAA compliant.
- **Self-Hosted Typography**: `@fontsource/fraunces` (warm display serif) and `@fontsource/plus-jakarta-sans` (clean geometric body) with zero external Google Fonts requests for 100% CSP compliance.

## Core Features
1. **Cloudflare Pages Deployment & Edge Performance**
   - SSR Hybrid mode via `@astrojs/cloudflare`
   - Strict Security Headers via `public/_headers` (HSTS, strict CSP without external font origins, X-Frame-Options: DENY, X-Content-Type-Options: nosniff, Referrer-Policy: strict-origin-when-cross-origin)
   - Zero-bloat client runtime for 100/100 Lighthouse score.

2. **Warm Lifestyle Homepage (`/`)**
   - Hero: Two-column layout on Warm Cream featuring playful copy ("Streetwear for humans owned by 40kg lapdogs"), "Shop The Drop" CTA, and product showcase card.
   - Trust Bar: Fun, honest badges ("Heavyweight & Fur-Friendly", "Hand-Checked in the UK", "Small-Batch Drops", "Couch Tested").
   - Drop Grid: 480GSM Personal Space Violator Hoodie, 280GSM Gentle Giant Club Tee, 360GSM Mud & Zoomies Canvas Overshirt, 450GSM Velcro Dog Sweatpant.
   - Small-Batch UK Craftsmanship Section: Explains the 5–7 working days hand-check process before dispatch.
   - Sizing & Lapdog Matrix: Detailed S–XXL sizing guide with canine cuddle ratings.
   - Velcro Dog Manifesto: Anti-cliché tribute to big dogs and their total lack of personal boundaries.

3. **Dynamic Product Detail Page (`/products/[slug]`)**
   - JSON/TypeScript catalog (`src/data/products.ts`)
   - Interactive size selection (S, M, L, XL, XXL) and colorway swatches with real-time labeling
   - Relatable dog reality quotes, fabric specs, and dog-hair resistant loopback notes
   - Manual batch fulfillment notice explaining 5–7 day hand-inspection prior to dispatch
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
   - Order Confirmation (`/order-confirmation`) with playful reassurance ("Give Your Dog a Treat!"), Royal Mail Tracked 24 details, and 5–7 day batch hand-check notice.
   - Cart Recovery / Cancel (`/cart-recovery`) with witty copy ("Did a 40kg Paw Distract You?") and single-click cart resume CTA.
