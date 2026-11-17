export interface BrandConfig {
  name: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  heroHeadline: string;
  heroHighlight: string;
  heroSubheadline: string;
  contactEmail: string;
  shippingCountry: string;
  dispatchNotice: string;
}

export const BRAND_CONFIG: BrandConfig = {
  name: 'Big Dog Club',
  shortName: 'BDC',
  tagline: 'Elevated Loungewear & Streetwear for Big Dog People',
  subTagline: 'Made for 40kg lapdogs, clumsy paws, and personal space violations.',
  heroHeadline: 'Streetwear for humans owned by',
  heroHighlight: '40kg lapdogs.',
  heroSubheadline: 'Warm, heavyweight apparel crafted for clumsy paws, couch monopolizers, zero personal space, and the goofy gentle giants who run our lives.',
  contactEmail: 'hello@bigdogclub.co.uk',
  shippingCountry: 'United Kingdom',
  dispatchNotice: 'Small-batch printed & hand-checked in the UK before dispatch (5–7 working days).'
};
