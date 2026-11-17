globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                         */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_C9zdQGRS.mjs';
import { $ as $$BaseLayout, B as BRAND_CONFIG } from '../chunks/BaseLayout_Da0yOAvO.mjs';
import { s as stripe } from '../chunks/stripe_BVgsFTU5.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://canisnobile.co.uk");
const prerender = false;
const $$OrderConfirmation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OrderConfirmation;
  const sessionId = Astro2.url.searchParams.get("session_id");
  let orderDetails = null;
  if (sessionId) {
    try {
      orderDetails = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ["customer_details", "shipping_details", "line_items"]
      });
    } catch (err) {
      console.error("Error fetching session details:", err);
    }
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Order Confirmed! Welcome to ${BRAND_CONFIG.name}`, "description": "Your Big Dog Club order has been received and queued for small-batch UK hand-inspection." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"> <!-- Playful Success Icon --> <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-tan-faint border-2 border-tan text-tan mb-6 shadow-sm"> <span class="text-3xl">🐾</span> </div> <span class="text-xs font-bold uppercase tracking-wider text-tan block mb-2">
Order Confirmed &bull; Royal Mail Tracked 24
</span> <h1 class="text-3xl sm:text-5xl font-display font-bold text-espresso tracking-tight mb-4">
Give Your Dog a Treat!
</h1> <p class="text-base text-espresso-700 leading-relaxed max-w-xl mx-auto mb-8">
Your order is locked in! Give that giant goofball an ear scratch for us. We've got everything queued up for production.
</p> <!-- Small-Batch Fulfillment Notice Box --> <div class="p-5 bg-sand-100 border border-sand-200 rounded-2xl text-left text-sm text-espresso-800 space-y-2 mb-8 shadow-sm"> <div class="flex items-center gap-2 font-bold text-espresso"> <span class="text-lg">🔍</span> <span>Small-Batch Hand Inspection (5–7 Working Days)</span> </div> <p class="text-xs sm:text-sm text-espresso-600 leading-relaxed">
Because we care about top-tier quality, your garments are printed in small batches and hand-checked right here in the UK before dispatch (5–7 working days) so every print and seam is 100% spot-on. Once inspected and packed in our eco-friendly mailers, you'll receive your Royal Mail Tracked 24 number straight to your inbox.
</p> </div> <!-- Order Metadata Card --> <div class="p-6 sm:p-8 bg-sand-100 border border-sand-200 rounded-2xl text-left text-xs space-y-4 mb-8 shadow-sm"> <div class="flex flex-col sm:flex-row justify-between border-b border-sand-200 pb-4"> <div> <span class="text-espresso-500 block uppercase text-[10px] font-bold">Stripe Reference</span> <span class="text-espresso font-mono font-semibold">${sessionId ? sessionId.slice(0, 24) + "..." : "REF-BDC-" + Math.floor(1e5 + Math.random() * 9e5)}</span> </div> <div class="mt-2 sm:mt-0"> <span class="text-espresso-500 block uppercase text-[10px] font-bold">Status</span> <span class="text-sage font-bold flex items-center"> <span class="w-2 h-2 rounded-full bg-sage mr-1.5 animate-pulse"></span>
Queued for Hand-Check
</span> </div> </div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-sand-200 pb-4"> <div> <span class="text-espresso-500 block uppercase text-[10px] font-bold">Estimated Dispatch</span> <span class="text-espresso font-semibold">5–7 Working Days (UK Hand-Check)</span> </div> <div> <span class="text-espresso-500 block uppercase text-[10px] font-bold">Shipping Carrier</span> <span class="text-espresso font-semibold">Royal Mail Tracked 24 (United Kingdom)</span> </div> </div> ${orderDetails?.shipping_details?.address && renderTemplate`<div class="pt-2"> <span class="text-espresso-500 block uppercase text-[10px] font-bold">Delivery Address</span> <p class="text-espresso mt-1"> ${orderDetails.shipping_details.name}<br> ${orderDetails.shipping_details.address.line1}<br> ${orderDetails.shipping_details.address.city}, ${orderDetails.shipping_details.address.postal_code}<br> ${orderDetails.shipping_details.address.country} </p> </div>`} </div> <!-- Help & Next Steps --> <div class="space-y-4"> <p class="text-xs text-espresso-600">
Need to change your size or shipping address before batch printing starts? Email us directly at <a${addAttribute(`mailto:${BRAND_CONFIG.contactEmail}`, "href")} class="text-tan underline font-semibold">${BRAND_CONFIG.contactEmail}</a>.
</p> <div class="pt-4"> <a href="/" class="inline-flex items-center px-8 py-3.5 bg-espresso hover:bg-tan text-white text-xs uppercase tracking-wider font-bold rounded-full transition-colors shadow-sm">
Return to ${BRAND_CONFIG.name} Store &rarr;
</a> </div> </div> </main> ` })}`;
}, "A:/dev/BigDogStore/src/pages/order-confirmation.astro", void 0);

const $$file = "A:/dev/BigDogStore/src/pages/order-confirmation.astro";
const $$url = "/order-confirmation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OrderConfirmation,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
