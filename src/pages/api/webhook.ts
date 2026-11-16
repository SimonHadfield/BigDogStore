export const prerender = false;

import type { APIRoute } from 'astro';
import type Stripe from 'stripe';
import { stripe } from '../../lib/stripe';
import { dispatchFulfillmentOrder } from '../../lib/fulfillment';

export const POST: APIRoute = async ({ request }) => {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error('[Stripe Webhook] Error: STRIPE_WEBHOOK_SECRET is not configured.');
    return new Response(JSON.stringify({ error: 'Webhook secret unconfigured on server' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const signature = request.headers.get('stripe-signature');
  if (!signature) {
    return new Response(JSON.stringify({ error: 'Missing stripe-signature header' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let event: Stripe.Event;

  try {
    const rawBody = await request.text();
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err: any) {
    console.error(`[Stripe Webhook] Signature verification failed: ${err.message}`);
    return new Response(JSON.stringify({ error: `Webhook Signature Verification Failed: ${err.message}` }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  console.log(`[Stripe Webhook] Received validated event: ${event.type} [${event.id}]`);

  // Handle successful checkout completion
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    try {
      // Retrieve line items with expand to ensure we extract item and product information
      const expandedSession = await stripe.checkout.sessions.retrieve(session.id, {
        expand: ['line_items', 'customer_details', 'shipping_details'],
      });

      const customerDetails = expandedSession.customer_details;
      const shippingDetails = expandedSession.shipping_details;
      const metadata = expandedSession.metadata || {};

      // Fallback address mapping from either shipping_details or customer_details
      const addressSource = shippingDetails?.address || customerDetails?.address;

      if (!addressSource || !addressSource.line1 || !addressSource.postal_code) {
        console.warn(`[Stripe Webhook] Session ${session.id} did not include complete shipping address.`, {
          shippingDetails,
          customerDetails,
        });
      }

      const shippingAddress = {
        name: shippingDetails?.name || customerDetails?.name || 'Customer',
        line1: addressSource?.line1 || '',
        line2: addressSource?.line2 || null,
        city: addressSource?.city || '',
        state: addressSource?.state || null,
        postalCode: addressSource?.postal_code || '',
        country: addressSource?.country || 'GB',
      };

      // Extract line items or derive from session metadata
      const items = (expandedSession.line_items?.data && expandedSession.line_items.data.length > 0)
        ? expandedSession.line_items.data.map(item => ({
            sku: metadata.sku || 'CN-GENERIC-SKU',
            productTitle: metadata.productTitle || item.description || 'Apparel Item',
            size: metadata.size || 'L',
            color: metadata.color || 'Onyx',
            quantity: item.quantity || 1,
            unitPricePence: item.amount_total,
          }))
        : [
            {
              sku: metadata.sku || 'CN-GENERIC-SKU',
              productTitle: metadata.productTitle || 'Canis Nobile Garment',
              size: metadata.size || 'L',
              color: metadata.color || 'Onyx',
              quantity: 1,
              unitPricePence: session.amount_total || 0,
            },
          ];

      // Dispatch to fulfillment provider
      const fulfillmentResult = await dispatchFulfillmentOrder({
        stripeSessionId: session.id,
        stripePaymentIntentId: typeof session.payment_intent === 'string' ? session.payment_intent : session.payment_intent?.id,
        customerEmail: customerDetails?.email || session.customer_email || 'orders@canisnobile.co.uk',
        customerName: customerDetails?.name || shippingDetails?.name || 'Valued Handler',
        shippingAddress,
        items,
        brand: 'CANIS NOBILE ATELIER UK',
        notes: 'Handcrafted UK Streetwear for Big Dog Owners',
        createdTimestamp: new Date().toISOString(),
      });

      console.log('[Stripe Webhook] Fulfillment dispatch outcome:', fulfillmentResult);

      return new Response(JSON.stringify({
        received: true,
        session_id: session.id,
        fulfillment: fulfillmentResult,
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (processError: any) {
      console.error('[Stripe Webhook] Failed to process fulfillment for session:', processError);
      return new Response(JSON.stringify({
        error: 'Failed to process checkout fulfillment',
        details: processError.message,
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  // Acknowledge other event types safely
  return new Response(JSON.stringify({ received: true, event: event.type }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
