globalThis.process ??= {}; globalThis.process.env ??= {};
import { s as stripe } from '../../chunks/stripe_BVgsFTU5.mjs';
export { renderers } from '../../renderers.mjs';

async function dispatchFulfillmentOrder(order) {
  const apiUrl = process.env.POD_API_URL || "https://api.printprovider.example.com/v1/orders";
  const apiKey = process.env.POD_API_KEY;
  console.log("[Fulfillment Service] Preparing dispatch for Order:", {
    stripeSessionId: order.stripeSessionId,
    customer: order.customerName,
    shippingTo: `${order.shippingAddress.city}, ${order.shippingAddress.country}`,
    itemsCount: order.items.length,
    items: order.items.map((i) => `${i.quantity}x ${i.sku} (${i.size}/${i.color})`)
  });
  const supplierPayload = {
    external_order_id: order.stripeSessionId,
    shipping_method: "STANDARD_UK_TRACKED",
    recipient: {
      name: order.shippingAddress.name || order.customerName,
      address1: order.shippingAddress.line1,
      address2: order.shippingAddress.line2 || "",
      city: order.shippingAddress.city,
      zip: order.shippingAddress.postalCode,
      country_code: order.shippingAddress.country,
      email: order.customerEmail
    },
    line_items: order.items.map((item) => ({
      sku: `${item.sku}-${item.color.toUpperCase()}-${item.size.toUpperCase()}`,
      name: `${item.productTitle} - ${item.size} / ${item.color}`,
      quantity: item.quantity,
      price: (item.unitPricePence / 100).toFixed(2),
      currency: "GBP"
    })),
    packing_slip: {
      brand_name: "CANIS NOBILE ATELIER UK",
      message: "Elevated apparel for misunderstood giants. Handled with devotion in the United Kingdom."
    }
  };
  if (apiKey && apiKey !== "pod_test_key_sample" && !apiUrl.includes("example.com")) {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
          "X-Client-Platform": "Canis-Nobile-Astro-Storefront"
        },
        body: JSON.stringify(supplierPayload)
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.error("[Fulfillment Service] Supplier API returned error:", response.status, errorText);
        return {
          success: false,
          orderReference: order.stripeSessionId,
          provider: "POD_LIVE_API",
          status: "FAILED",
          message: `Supplier API rejected order: ${response.status} - ${errorText}`
        };
      }
      const supplierData = await response.json();
      return {
        success: true,
        orderReference: order.stripeSessionId,
        provider: "POD_LIVE_API",
        status: "QUEUED_FOR_PRODUCTION",
        message: "Order successfully registered with production facility.",
        supplierOrderId: supplierData.id || supplierData.order_id
      };
    } catch (err) {
      console.error("[Fulfillment Service] Exception communicating with POD API:", err);
      return {
        success: false,
        orderReference: order.stripeSessionId,
        provider: "POD_LIVE_API",
        status: "FAILED",
        message: err instanceof Error ? err.message : "Unknown network failure"
      };
    }
  }
  const mockSupplierId = `SUP-UK-${Math.floor(1e5 + Math.random() * 9e5)}`;
  console.log(`[Fulfillment Service] [SIMULATED SUCCESS] Registered order ${mockSupplierId} for ${order.stripeSessionId}`);
  return {
    success: true,
    orderReference: order.stripeSessionId,
    provider: "POD_DEV_ADAPTER",
    status: "SIMULATED_TEST",
    message: "Simulation: Supplier payload verified and queued for print-on-demand fulfillment.",
    supplierOrderId: mockSupplierId
  };
}

const prerender = false;
const POST = async ({ request }) => {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("[Stripe Webhook] Error: STRIPE_WEBHOOK_SECRET is not configured.");
    return new Response(JSON.stringify({ error: "Webhook secret unconfigured on server" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return new Response(JSON.stringify({ error: "Missing stripe-signature header" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  let event;
  try {
    const rawBody = await request.text();
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    console.error(`[Stripe Webhook] Signature verification failed: ${err.message}`);
    return new Response(JSON.stringify({ error: `Webhook Signature Verification Failed: ${err.message}` }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  console.log(`[Stripe Webhook] Received validated event: ${event.type} [${event.id}]`);
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    try {
      const expandedSession = await stripe.checkout.sessions.retrieve(session.id, {
        expand: ["line_items", "customer_details", "shipping_details"]
      });
      const customerDetails = expandedSession.customer_details;
      const shippingDetails = expandedSession.shipping_details;
      const metadata = expandedSession.metadata || {};
      const addressSource = shippingDetails?.address || customerDetails?.address;
      if (!addressSource || !addressSource.line1 || !addressSource.postal_code) {
        console.warn(`[Stripe Webhook] Session ${session.id} did not include complete shipping address.`, {
          shippingDetails,
          customerDetails
        });
      }
      const shippingAddress = {
        name: shippingDetails?.name || customerDetails?.name || "Customer",
        line1: addressSource?.line1 || "",
        line2: addressSource?.line2 || null,
        city: addressSource?.city || "",
        state: addressSource?.state || null,
        postalCode: addressSource?.postal_code || "",
        country: addressSource?.country || "GB"
      };
      const items = expandedSession.line_items?.data && expandedSession.line_items.data.length > 0 ? expandedSession.line_items.data.map((item) => ({
        sku: metadata.sku || "CN-GENERIC-SKU",
        productTitle: metadata.productTitle || item.description || "Apparel Item",
        size: metadata.size || "L",
        color: metadata.color || "Onyx",
        quantity: item.quantity || 1,
        unitPricePence: item.amount_total
      })) : [
        {
          sku: metadata.sku || "CN-GENERIC-SKU",
          productTitle: metadata.productTitle || "Canis Nobile Garment",
          size: metadata.size || "L",
          color: metadata.color || "Onyx",
          quantity: 1,
          unitPricePence: session.amount_total || 0
        }
      ];
      const fulfillmentResult = await dispatchFulfillmentOrder({
        stripeSessionId: session.id,
        stripePaymentIntentId: typeof session.payment_intent === "string" ? session.payment_intent : session.payment_intent?.id,
        customerEmail: customerDetails?.email || session.customer_email || "orders@canisnobile.co.uk",
        customerName: customerDetails?.name || shippingDetails?.name || "Valued Handler",
        shippingAddress,
        items,
        brand: "CANIS NOBILE ATELIER UK",
        notes: "Handcrafted UK Streetwear for Big Dog Owners",
        createdTimestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
      console.log("[Stripe Webhook] Fulfillment dispatch outcome:", fulfillmentResult);
      return new Response(JSON.stringify({
        received: true,
        session_id: session.id,
        fulfillment: fulfillmentResult
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } catch (processError) {
      console.error("[Stripe Webhook] Failed to process fulfillment for session:", processError);
      return new Response(JSON.stringify({
        error: "Failed to process checkout fulfillment",
        details: processError.message
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
  return new Response(JSON.stringify({ received: true, event: event.type }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
