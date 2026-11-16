export const prerender = false;

import type { APIRoute } from 'astro';
import { stripe } from '../../lib/stripe';
import { getProductById } from '../../data/products';

export const POST: APIRoute = async ({ request, url }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    let productId = '';
    let size = '';
    let color = '';
    let quantity = 1;

    if (contentType.includes('application/json')) {
      const body = await request.json();
      productId = body.productId;
      size = body.size;
      color = body.color;
      quantity = parseInt(body.quantity || 1, 10);
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await request.formData();
      productId = formData.get('productId')?.toString() || '';
      size = formData.get('size')?.toString() || '';
      color = formData.get('color')?.toString() || '';
      quantity = parseInt(formData.get('quantity')?.toString() || '1', 10);
    } else {
      return new Response(JSON.stringify({ error: 'Unsupported Content-Type' }), {
        status: 415,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!productId || !size || !color) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: productId, size, and color are mandatory' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const product = getProductById(productId);
    if (!product) {
      return new Response(
        JSON.stringify({ error: `Product with ID '${productId}' was not found in catalog` }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Determine absolute origin for callbacks
    const siteUrl = process.env.PUBLIC_SITE_URL || url.origin;

    // Build the Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      currency: 'gbp',
      shipping_address_collection: {
        allowed_countries: ['GB'], // Strict UK shipping requirement
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0, // Free Royal Mail Tracked 24/48 for elevated experience
              currency: 'gbp',
            },
            display_name: 'Complimentary UK Tracked Courier (Royal Mail 24)',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 2 },
              maximum: { unit: 'business_day', value: 3 },
            },
          },
        },
      ],
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: `${product.title} (${size.toUpperCase()} / ${color.toUpperCase()})`,
              description: `${product.subtitle} - SKU: ${product.sku}`,
              images: [product.images.primary],
              metadata: {
                sku: product.sku,
                size: size,
                color: color,
                category: 'Luxury Canine Streetwear',
              },
            },
            unit_amount: Math.round(product.price * 100), // Stripe expects pence for GBP
          },
          quantity: quantity > 0 ? quantity : 1,
        },
      ],
      metadata: {
        productId: product.id,
        sku: product.sku,
        size: size,
        color: color,
        productTitle: product.title,
        brand: 'Canis Nobile Atelier UK',
      },
      success_url: `${siteUrl}/order-confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cart-recovery?slug=${product.slug}`,
    });

    if (contentType.includes('application/x-www-form-urlencoded')) {
      // Standard HTML Form redirection
      return Response.redirect(session.url!, 303);
    }

    return new Response(JSON.stringify({ url: session.url, sessionId: session.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('[Stripe Checkout API] Error:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to initiate Stripe Checkout session',
        details: error?.message || 'Internal server error',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
