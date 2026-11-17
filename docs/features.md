# Features Specification & Roadmap

## Brand Identity: CLUMSY GIANTS (Configurable in `src/data/brand.ts`)
- **Philosophy**: Colorful, goofy, retro-playful streetwear for big dogs and their humans—inspired by 70s/90s groovy typography, neo-brutalist sticker cards, and the clumsy, goofy personality of big dogs (40kg lapdogs, couch hogs, accidental knee knocks).
- **Aesthetic**: Neo-brutalist retro streetwear. Vibrant Retro Butter/Marigold canvas (`#F8D26A`), Off-White/Vanilla cards (`#FFFDF7`), Deep Ink 2px borders with 4px hard offset shadows (`boxShadow: '4px 4px 0px #1A1614'`), Doberman Rust CTA buttons (`#E06D3B`), and Mint/Sage sticker badges (`#52B788`).
- **Typography**: Self-hosted `@fontsource/fredoka` (chunky, rounded display weights 600/700) for bouncy retro headings, paired with `@fontsource/plus-jakarta-sans` for ultra-clean body text.
- **Sticker Details**: Tilted sticker pills (*'Certified Couch Potato'*, *'40kg Lapdog Approved'*, *'Slobber Tested'*).

## Waitlist / Coming Soon Architecture
- **Flag**: `BRAND_CONFIG.WAITLIST_MODE: true` in `src/data/brand.ts`.
- **Coming Soon Landing Page (`/`)**:
  - Bubbly hero with Drop 01 teaser card and vector hoodie mockup.
  - Interactive email waitlist form submitting to `POST /api/waitlist`.
  - Reassuring confirmation message (*"You're in the pack! We'll bark when Drop 01 goes live. 🐾"*).
  - Quick-link to preview full store at `/shop`.
- **Storefront Catalog (`/shop`)**:
  - Always live and fully browsable while waitlist collects emails.
  - Sizing & Lapdog Matrix (S–XXL).
  - Product Detail Pages (`/products/[slug]`).
  - Small-batch UK hand-inspection notices (5–7 working days dispatch).

## Core Commerce Engine
1. **Cloudflare Pages SSR**: Hybrid mode via `@astrojs/cloudflare` with `_worker.js` and `_routes.json`.
2. **Strict Security Headers (`public/_headers`)**: A+ rating with locked-down CSP, DENY frame options, nosniff, and HSTS.
3. **Stripe Checkout API (`/api/checkout`)**: Server-side session generation with UK shipping restriction (`allowed_countries: ['GB']`).
4. **Webhook & Fulfillment (`/api/webhook`, `src/lib/fulfillment.ts`)**: Stripe signature verification and small-batch UK POD supplier payload dispatch.
