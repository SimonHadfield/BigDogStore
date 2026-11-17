import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('Cloudflare Pages _headers has strict security headers', () => {
  const headersPath = path.resolve('public/_headers');
  assert.ok(fs.existsSync(headersPath), 'public/_headers must exist');

  const content = fs.readFileSync(headersPath, 'utf8');
  assert.ok(content.includes('Content-Security-Policy:'), 'Must include CSP header');
  assert.ok(content.includes('X-Frame-Options: DENY'), 'Must include X-Frame-Options DENY');
  assert.ok(content.includes('X-Content-Type-Options: nosniff'), 'Must include nosniff');
  assert.ok(content.includes('Referrer-Policy: strict-origin-when-cross-origin'), 'Must include Referrer-Policy');
  assert.ok(content.includes('Strict-Transport-Security: max-age=31536000'), 'Must include HSTS');
});

test('Brand config has Clumsy Giants name and WAITLIST_MODE flag', async () => {
  const { BRAND_CONFIG } = await import('../src/data/brand.ts');
  assert.equal(BRAND_CONFIG.name, 'Clumsy Giants');
  assert.equal(typeof BRAND_CONFIG.WAITLIST_MODE, 'boolean');
});

test('Waitlist API route exists and handles email validation', async () => {
  const { POST } = await import('../src/pages/api/waitlist.ts');

  // Test invalid email
  const invalidReq = new Request('http://localhost/api/waitlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'not-an-email' }),
  });
  const invalidRes = await POST({ request: invalidReq });
  assert.equal(invalidRes.status, 400);

  // Test valid email
  const validReq = new Request('http://localhost/api/waitlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'doberman.lover@example.co.uk' }),
  });
  const validRes = await POST({ request: validReq });
  assert.equal(validRes.status, 200);
  const data = await validRes.json();
  assert.ok(data.success);
  assert.ok(data.message.includes('pack'));
});

test('Dist artifact includes _headers and _routes.json for Cloudflare Pages', () => {
  assert.ok(fs.existsSync(path.resolve('dist/_headers')), 'dist/_headers must be copied');
  assert.ok(fs.existsSync(path.resolve('dist/_routes.json')), 'dist/_routes.json must be generated');
  assert.ok(fs.existsSync(path.resolve('dist/_worker.js')), 'dist/_worker.js must be generated for SSR endpoints');
});

test('Product catalog data contains all required products with specs and UK currency', async () => {
  const { PRODUCTS, getProductBySlug, getProductById } = await import('../src/data/products.ts');

  assert.ok(PRODUCTS.length >= 4, 'Catalog should feature at least 4 products');

  const hoodie = getProductBySlug('nobile-heavyweight-hoodie');
  assert.ok(hoodie, 'Heavyweight hoodie must exist');
  assert.equal(hoodie?.currency, 'GBP');
  assert.ok(hoodie?.specs.weight.includes('480 GSM'));
  assert.deepEqual(hoodie?.sizes, ['S', 'M', 'L', 'XL', 'XXL']);

  const tee = getProductBySlug('gentle-giant-oversized-tee');
  assert.ok(tee, 'Gentle giant tee must exist');
  assert.ok(tee?.specs.weight.includes('280 GSM'));

  const byId = getProductById('prod_doberman_hoodie_01');
  assert.equal(byId?.id, 'prod_doberman_hoodie_01');
});

test('Fulfillment service dispatches order and builds clean POD supplier payload', async () => {
  const { dispatchFulfillmentOrder } = await import('../src/lib/fulfillment.ts');

  const result = await dispatchFulfillmentOrder({
    stripeSessionId: 'cs_test_mock_123456789',
    stripePaymentIntentId: 'pi_test_mock_987654321',
    customerEmail: 'handler@doberman.co.uk',
    customerName: 'Alistair Vance',
    shippingAddress: {
      line1: '42 Meadow Lane',
      city: 'Cotswolds',
      postalCode: 'GL54 1AA',
      country: 'GB',
    },
    items: [
      {
        sku: 'CN-HD-480-BLK',
        title: 'Nobile 480GSM Heavyweight Hoodie',
        size: 'L',
        color: 'Pitch Onyx',
        quantity: 1,
      },
    ],
  });

  assert.ok(result.success, 'Fulfillment dispatch must succeed');
  assert.ok(result.supplierOrderId?.startsWith('SUP-UK-'), 'Must generate UK supplier reference');
});
