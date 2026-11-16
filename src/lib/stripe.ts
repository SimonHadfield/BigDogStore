import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY || '';

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-11-20.acacia' as any,
  appInfo: {
    name: 'Canis Nobile UK Storefront',
    version: '1.0.0',
  },
});
