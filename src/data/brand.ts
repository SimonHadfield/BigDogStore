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
  WAITLIST_MODE: boolean;
}

export const BRAND_CONFIG: BrandConfig = {
  name: 'Clumsy Giants',
  shortName: 'CG',
  tagline: 'Retro Streetwear for Big Dogs & Their Humans',
  subTagline: 'Made for 40kg lapdogs, goofy clumsy paws, and accidental sofa takeovers.',
  heroHeadline: 'Streetwear for humans owned by',
  heroHighlight: '40kg clumsy giants.',
  heroSubheadline: 'Ultra-heavyweight 480GSM hoodies & streetwear inspired by clumsy paws, zero personal space, and the lovable gentle giants who secretly run our lives.',
  contactEmail: 'bark@clumsygiants.co.uk',
  shippingCountry: 'United Kingdom',
  dispatchNotice: 'Small-batch printed & hand-checked in the UK before dispatch (5–7 working days).',
  WAITLIST_MODE: true // Toggle to false to display the full storefront at /
};
