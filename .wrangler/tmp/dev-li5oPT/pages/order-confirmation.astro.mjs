globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                         */
import { c as createAstro, a as createComponent, f as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DmkEL685.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BYx0Wyra.mjs';
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Order Confirmed - Canis Nobile Atelier", "description": "Your Canis Nobile order has been received and queued for handcrafted UK fulfillment." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"> <!-- Success Badge --> <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-doberman-rust/20 border border-doberman-rust text-doberman-tan mb-8"> <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <span class="text-xs font-mono uppercase tracking-widest text-doberman-tan block mb-2">
Order Confirmed &middot; Royal Mail Tracked 24
</span> <h1 class="text-3xl sm:text-5xl font-editorial font-bold text-white tracking-tight mb-4">
The Walk Begins.
</h1> <p class="text-sm sm:text-base text-atelier-300 leading-relaxed max-w-xl mx-auto mb-10">
Thank you for standing with the gentle giants. Your order is registered and will be hand-inspected at our British atelier before dispatch.
</p> <!-- Order Metadata Card --> <div class="p-6 sm:p-8 bg-atelier-900/60 border border-atelier-800 text-left font-mono text-xs space-y-4 mb-10"> <div class="flex flex-col sm:flex-row justify-between border-b border-atelier-850 pb-4"> <div> <span class="text-atelier-400 block uppercase text-[10px]">Stripe Reference</span> <span class="text-white font-semibold">${sessionId ? sessionId.slice(0, 24) + "..." : "REF-UK-" + Math.floor(1e5 + Math.random() * 9e5)}</span> </div> <div class="mt-3 sm:mt-0 sm:text-right"> <span class="text-atelier-400 block uppercase text-[10px]">Status</span> <span class="text-emerald-400 font-semibold">&bull; Queued for Production</span> </div> </div> ${orderDetails?.customer_details && renderTemplate`<div class="border-b border-atelier-850 pb-4"> <span class="text-atelier-400 block uppercase text-[10px] mb-1">Confirmation Sent To</span> <span class="text-white font-semibold">${orderDetails.customer_details.email}</span> </div>`} ${orderDetails?.shipping_details?.address && renderTemplate`<div class="border-b border-atelier-850 pb-4"> <span class="text-atelier-400 block uppercase text-[10px] mb-1">Destination Address</span> <span class="text-atelier-200"> ${orderDetails.shipping_details.address.line1}, ${orderDetails.shipping_details.address.city}, ${orderDetails.shipping_details.address.postal_code}, United Kingdom
</span> </div>`} <div class="flex justify-between items-center pt-2"> <span class="text-atelier-400 uppercase text-[10px]">Estimated Delivery</span> <span class="text-white font-semibold">2 &ndash; 3 Business Days</span> </div> </div> <!-- Actions --> <div class="flex flex-col sm:flex-row items-center justify-center gap-4"> <a href="/" class="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-doberman-bone text-atelier-950 font-mono text-xs uppercase tracking-widest font-semibold transition-all">
Return to Atelier
</a> <a href="/#brand-story" class="w-full sm:w-auto px-8 py-3.5 border border-atelier-750 hover:border-white text-white font-mono text-xs uppercase tracking-widest transition-all">
Read The Philosophy
</a> </div> </main> ` })}`;
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
