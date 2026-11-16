/**
 * Print-on-Demand (POD) / 3PL Supplier Fulfillment Service
 * 
 * Adapts incoming Stripe Checkout completion payloads to standard
 * Print-on-Demand REST API contracts (such as Gelato, Printful, Two Fifteen UK, Inkthreadable, etc.)
 */

export interface CustomerShippingAddress {
  name: string;
  line1: string;
  line2?: string | null;
  city: string;
  state?: string | null;
  postalCode: string;
  country: string;
}

export interface FulfillmentOrderRequest {
  stripeSessionId: string;
  stripePaymentIntentId?: string | null;
  customerEmail: string;
  customerName: string;
  shippingAddress: CustomerShippingAddress;
  items: Array<{
    sku: string;
    productTitle: string;
    size: string;
    color: string;
    quantity: number;
    unitPricePence: number;
  }>;
  brand: string;
  notes?: string;
  createdTimestamp: string;
}

export interface FulfillmentResponse {
  success: boolean;
  orderReference: string;
  provider: string;
  status: 'QUEUED_FOR_PRODUCTION' | 'SIMULATED_TEST' | 'FAILED';
  message: string;
  supplierOrderId?: string;
}

/**
 * Dispatches an order payload to the configured Print-On-Demand supplier.
 * Ready for live production credentials or simulated environment fallback.
 */
export async function dispatchFulfillmentOrder(
  order: FulfillmentOrderRequest
): Promise<FulfillmentResponse> {
  const apiUrl = process.env.POD_API_URL || 'https://api.printprovider.example.com/v1/orders';
  const apiKey = process.env.POD_API_KEY;

  console.log('[Fulfillment Service] Preparing dispatch for Order:', {
    stripeSessionId: order.stripeSessionId,
    customer: order.customerName,
    shippingTo: `${order.shippingAddress.city}, ${order.shippingAddress.country}`,
    itemsCount: order.items.length,
    items: order.items.map(i => `${i.quantity}x ${i.sku} (${i.size}/${i.color})`)
  });

  // Standard payload format expected by top UK POD services (Two Fifteen, Inkthreadable, Gelato)
  const supplierPayload = {
    external_order_id: order.stripeSessionId,
    shipping_method: 'STANDARD_UK_TRACKED',
    recipient: {
      name: order.shippingAddress.name || order.customerName,
      address1: order.shippingAddress.line1,
      address2: order.shippingAddress.line2 || '',
      city: order.shippingAddress.city,
      zip: order.shippingAddress.postalCode,
      country_code: order.shippingAddress.country,
      email: order.customerEmail,
    },
    line_items: order.items.map(item => ({
      sku: `${item.sku}-${item.color.toUpperCase()}-${item.size.toUpperCase()}`,
      name: `${item.productTitle} - ${item.size} / ${item.color}`,
      quantity: item.quantity,
      price: (item.unitPricePence / 100).toFixed(2),
      currency: 'GBP'
    })),
    packing_slip: {
      brand_name: 'CANIS NOBILE ATELIER UK',
      message: 'Elevated apparel for misunderstood giants. Handled with devotion in the United Kingdom.'
    }
  };

  // If live credentials are valid and not a placeholder, dispatch live HTTP request
  if (apiKey && apiKey !== 'pod_test_key_sample' && !apiUrl.includes('example.com')) {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'X-Client-Platform': 'Canis-Nobile-Astro-Storefront'
        },
        body: JSON.stringify(supplierPayload)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('[Fulfillment Service] Supplier API returned error:', response.status, errorText);
        return {
          success: false,
          orderReference: order.stripeSessionId,
          provider: 'POD_LIVE_API',
          status: 'FAILED',
          message: `Supplier API rejected order: ${response.status} - ${errorText}`
        };
      }

      const supplierData = await response.json();
      return {
        success: true,
        orderReference: order.stripeSessionId,
        provider: 'POD_LIVE_API',
        status: 'QUEUED_FOR_PRODUCTION',
        message: 'Order successfully registered with production facility.',
        supplierOrderId: supplierData.id || supplierData.order_id
      };
    } catch (err) {
      console.error('[Fulfillment Service] Exception communicating with POD API:', err);
      return {
        success: false,
        orderReference: order.stripeSessionId,
        provider: 'POD_LIVE_API',
        status: 'FAILED',
        message: err instanceof Error ? err.message : 'Unknown network failure'
      };
    }
  }

  // Graceful simulated test output for local development / test harness
  const mockSupplierId = `SUP-UK-${Math.floor(100000 + Math.random() * 900000)}`;
  console.log(`[Fulfillment Service] [SIMULATED SUCCESS] Registered order ${mockSupplierId} for ${order.stripeSessionId}`);

  return {
    success: true,
    orderReference: order.stripeSessionId,
    provider: 'POD_DEV_ADAPTER',
    status: 'SIMULATED_TEST',
    message: 'Simulation: Supplier payload verified and queued for print-on-demand fulfillment.',
    supplierOrderId: mockSupplierId
  };
}
