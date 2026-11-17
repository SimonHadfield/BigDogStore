globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAstro, a as createComponent, b as addAttribute, r as renderHead, d as renderSlot, e as renderTemplate } from './astro/server_DmkEL685.mjs';

const $$Astro = createAstro("https://canisnobile.co.uk");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description,
    image = "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80",
    canonical = Astro2.url.href
  } = Astro2.props;
  const siteName = "CANIS NOBILE UK | High-End Streetwear for Gentle Giants";
  const fullTitle = `${title} | ${siteName}`;
  return renderTemplate`<html lang="en-GB" class="scroll-smooth bg-atelier-950 text-atelier-100 antialiased selection:bg-doberman-rust selection:text-white"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="canonical"${addAttribute(canonical, "href")}><!-- SEO Core Meta --><title>${fullTitle}</title><meta name="title"${addAttribute(fullTitle, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="robots" content="index, follow"><meta name="theme-color" content="#0a0a0a"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonical, "content")}><meta property="og:title"${addAttribute(fullTitle, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><meta property="og:locale" content="en_GB"><meta property="og:site_name" content="Canis Nobile"><!-- Twitter Cards --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonical, "content")}><meta property="twitter:title"${addAttribute(fullTitle, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(image, "content")}><!-- Performance Prefetch --><link rel="preconnect" href="https://images.unsplash.com" crossorigin>${renderHead()}</head> <body class="min-h-screen flex flex-col justify-between font-sans selection:bg-doberman-rust selection:text-white"> <!-- Announcement Banner --> <div class="bg-atelier-900 border-b border-atelier-800 text-xs py-2 px-4 text-center tracking-widest uppercase font-mono text-atelier-400"> <span>Complimentary Tracked Royal Mail 24 on all UK orders over £75</span> </div> <!-- Main Navigation Header --> <header class="sticky top-0 z-40 bg-atelier-950/90 backdrop-blur-md border-b border-atelier-850"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"> <!-- Logo / Brand Title --> <a href="/" class="flex flex-col group focus:outline-none focus:ring-1 focus:ring-doberman-rust p-1" aria-label="Canis Nobile Homepage"> <span class="text-xl sm:text-2xl font-editorial font-bold tracking-widest text-white group-hover:text-doberman-tan transition-colors">
CANIS NOBILE
</span> <span class="text-[10px] tracking-ultra uppercase text-atelier-400 font-mono">
Atelier UK &middot; Gentle Giants
</span> </a> <!-- Navigation Links --> <nav class="hidden md:flex items-center space-x-8 text-xs font-mono tracking-widest uppercase text-atelier-200" aria-label="Primary Navigation"> <a href="/#collection" class="hover:text-white transition-colors py-1 border-b border-transparent hover:border-doberman-rust">
Apparel Collection
</a> <a href="/#size-guide" class="hover:text-white transition-colors py-1 border-b border-transparent hover:border-doberman-rust">
Size & Fit Guide
</a> <a href="/#brand-story" class="hover:text-white transition-colors py-1 border-b border-transparent hover:border-doberman-rust">
The Philosophy
</a> </nav> <!-- Header Actions / Direct Contact --> <div class="flex items-center space-x-4"> <a href="/#collection" class="inline-flex items-center justify-center px-4 py-2 border border-atelier-700 hover:border-doberman-tan text-xs font-mono uppercase tracking-widest text-white bg-atelier-900 hover:bg-atelier-850 transition-all focus:ring-2 focus:ring-doberman-rust focus:outline-none">
Shop Now
</a> </div> </div> </header> <!-- Main Content Area --> <main class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </main> <!-- Semantic Editorial Footer --> <footer class="bg-atelier-900 border-t border-atelier-800 text-atelier-400 mt-24"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12"> <!-- Column 1: Brand --> <div class="space-y-4 md:col-span-1"> <span class="text-lg font-editorial font-bold text-white tracking-widest block">
CANIS NOBILE
</span> <p class="text-xs leading-relaxed text-atelier-400">
Architectural British streetwear honoring the poise, majesty, and gentle nature of big dog breeds. From Dobermans to Wolfhounds, crafted without intimidation.
</p> <div class="text-[11px] font-mono text-atelier-400 pt-2">
UNITED KINGDOM &middot; EST. 2024
</div> </div> <!-- Column 2: Navigation --> <div class="space-y-3"> <p class="text-xs font-mono uppercase tracking-widest text-white font-semibold">
Collection
</p> <ul class="space-y-2 text-xs font-mono"> <li><a href="/products/nobile-heavyweight-hoodie" class="hover:text-white transition-colors">480GSM Hoodies</a></li> <li><a href="/products/gentle-giant-oversized-tee" class="hover:text-white transition-colors">280GSM Boxy Tees</a></li> <li><a href="/products/atelier-handler-chore-jacket" class="hover:text-white transition-colors">Heavyweight Chore Jackets</a></li> <li><a href="/products/corso-heavy-fleece-pant" class="hover:text-white transition-colors">Architectural Sweatpants</a></li> </ul> </div> <!-- Column 3: Handlers & Sizing --> <div class="space-y-3"> <p class="text-xs font-mono uppercase tracking-widest text-white font-semibold">
Handler Guidance
</p> <ul class="space-y-2 text-xs font-mono"> <li><a href="/#size-guide" class="hover:text-white transition-colors">Handler & Canine Fit Guide</a></li> <li><a href="/#brand-story" class="hover:text-white transition-colors">British Loopback Craftsmanship</a></li> <li><span class="text-atelier-400">Complimentary Royal Mail 24</span></li> <li><span class="text-atelier-400">30-Day UK Hassle-Free Returns</span></li> </ul> </div> <!-- Column 4: Newsletter / Security --> <div class="space-y-3"> <p class="text-xs font-mono uppercase tracking-widest text-white font-semibold">
Payment & Integrity
</p> <p class="text-xs leading-relaxed">
Direct 256-bit encrypted checkout via Stripe. All orders dispatched from our Midlands atelier with carbon-neutral logistics.
</p> <div class="flex items-center space-x-2 pt-2 text-[11px] font-mono text-atelier-400"> <span class="inline-block w-2 h-2 rounded-full bg-emerald-500"></span> <span>PCI-DSS Level 1 Encrypted</span> </div> </div> </div> <!-- Copyright Bar --> <div class="border-t border-atelier-850 py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-atelier-400 gap-4"> <p>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} CANIS NOBILE ATELIER UK. All rights reserved.</p> <div class="flex space-x-6 text-[11px]"> <span>Privacy Policy</span> <span>Terms of Service</span> <span>Security Headers A+ Verified</span> </div> </div> </footer> </body></html>`;
}, "A:/dev/BigDogStore/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
