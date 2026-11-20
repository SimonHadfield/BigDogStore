export interface ProductColor {
  name: string;
  hex: string;
  slug: string;
}

export interface ProductSpec {
  weight: string;
  material: string;
  fit: string;
  origin: string;
  care: string;
}

export interface Product {
  id: string;
  slug: string;
  sku: string;
  title: string;
  subtitle: string;
  price: number; // in GBP
  currency: string;
  description: string;
  editorialNote: string;
  inspiration: string;
  images: {
    primary: string;
    secondary: string;
    alt: string;
    // TODO: Drop transparent hoodie PNGs (e.g. dog-mom-club-hoodie.png) into src/assets/products/
    assetPath?: string;
  };
  sizes: ('S' | 'M' | 'L' | 'XL' | 'XXL')[];
  colors: ProductColor[];
  specs: ProductSpec;
  features: string[];
  inStock: boolean;
  badge?: string;
  goofyQuote?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'prod_doberman_hoodie_01',
    slug: 'nobile-heavyweight-hoodie',
    sku: 'BDC-HD-480-ESP',
    title: '480GSM "Personal Space Violator" Heavyweight Hoodie',
    subtitle: 'Ultra-plush French terry built for 40kg dogs who think they are teacup chihuahuas',
    price: 95,
    currency: 'GBP',
    description: 'An ultra-heavyweight, relaxed-fit pullover cut from custom 480GSM organic combed cotton loopback fleece. Dedicated to the clumsy, affectionate giant who rests their heavy 10-pound chin directly on your collarbone the moment you sit down. Heavy enough to shield you from enthusiastic front paw taps, roomy enough for cozy sofa cuddles.',
    editorialNote: 'Dense, durable loopback weave that repels loose fur better than fleece and holds its shape through muddy woodland walks, sofa zoomies, and endless wash cycles.',
    inspiration: 'Inspired by Dobermans and gentle giants who have zero concept of personal boundaries.',
    goofyQuote: '"If I fits, I sits. And even if I don\'t fits, I still sits on your lap."',
    images: {
      primary: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=80',
      alt: 'Clumsy Giants 480GSM Heavyweight Hoodie in Warm Charcoal on model',
      // TODO: Drop transparent hoodie PNGs (e.g. dog-mom-club-hoodie.png) into src/assets/products/
      assetPath: 'src/assets/products/dog-mom-club-hoodie.png'
    },
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Warm Charcoal', hex: '#1C1917', slug: 'charcoal' },
      { name: 'Doberman Tan', hex: '#C87A4B', slug: 'tan' },
      { name: 'Forest Olive', hex: '#4B5842', slug: 'olive' }
    ],
    specs: {
      weight: '480 GSM (Ultra-Heavyweight Loopback)',
      material: '100% GOTS Certified Organic Combed Cotton',
      fit: 'Relaxed streetwear fit, dropped shoulder, roomy pouch pocket',
      origin: 'Printed, embroidered & hand-checked in Leicester, UK',
      care: 'Machine wash warm (30°C) with like colors, air dry flat. Dog hair brushes off easily.'
    },
    features: [
      'Small-batch drop: hand-checked in the UK before dispatch (5–7 working days)',
      'Thick double-layered crossover hood to keep chilly UK winds and slobbery headshakes at bay',
      'Reinforced kangaroo pouch pocket designed to survive frantic paw digs and treat stash retrieval',
      'Pre-shrunk organic cotton so it stays big, slouchy, and comfy forever'
    ],
    inStock: true,
    badge: 'Couch Potato Favorite'
  },
  {
    id: 'prod_gentle_giant_tee_02',
    slug: 'gentle-giant-oversized-tee',
    sku: 'BDC-TEE-280-SAN',
    title: '280GSM "Gentle Giant Club" Boxy Tee',
    subtitle: 'Chunky vintage ribbed collar, thick organic jersey & 100% zero scary clichés',
    price: 45,
    currency: 'GBP',
    description: 'A heavyweight, boxy-cut tee formulated from 280GSM single-jersey cotton with elbow-skimming sleeves. Designed specifically to flip the script on big breeds—because while strangers cross the street, you know your 45kg hound is secretly terrified of the Roomba and crying over a fallen blueberry.',
    editorialNote: 'Substantial, non-see-through hand feel with a chunky 3.2cm ribbed neckline that never sags or bacon-necks.',
    inspiration: 'Celebrates the goofy, soulful heart of big dogs who melt into butter the moment belly rubs start.',
    goofyQuote: '"Looks like a bodyguard. Actually startled by plastic bags blowing in the wind."',
    images: {
      primary: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80',
      alt: 'Gentle Giant Club 280GSM Boxy Tee in Soft Sand',
      // TODO: Drop transparent hoodie PNGs (e.g. dog-mom-club-hoodie.png) into src/assets/products/
      assetPath: 'src/assets/products/gentle-giant-tee.png'
    },
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Warm Oat', hex: '#EDE3D5', slug: 'oat' },
      { name: 'Deep Charcoal', hex: '#1C1917', slug: 'charcoal' },
      { name: 'Forest Olive', hex: '#4B5842', slug: 'olive' }
    ],
    specs: {
      weight: '280 GSM (Chunky Single Jersey)',
      material: '100% Ring-Spun Organic Cotton',
      fit: 'Boxy streetwear cut with drop shoulders and elbow-length sleeves',
      origin: 'Silk-screened and finished in small batches in the UK',
      care: 'Wash inside-out at 30°C. Shake out and hang dry.'
    },
    features: [
      'Small-batch release: printed and hand-checked in the UK (5–7 working days dispatch)',
      'Retro collegiate "Gentle Giant Club" typographic chest crest',
      'Ultra-dense 280GSM yarn that won\'t cling or show slobber watermarks',
      'Seamless twin-needle stitching built to withstand enthusiastic greetings'
    ],
    inStock: true,
    badge: 'Bestseller'
  },
  {
    id: 'prod_handler_jacket_03',
    slug: 'cold-walks-overshirt',
    sku: 'BDC-SH-350-FOR',
    title: '350GSM "Cold Morning Walks" Field Overshirt',
    subtitle: 'Heavy canvas utility shirt with reinforced pocketing for 500 bags & high-value treats',
    price: 110,
    currency: 'GBP',
    description: 'A heavy 350GSM brushed organic cotton twill overshirt tailored for blustery 6:30 AM winter park missions with your gentle giant. Built with dual oversized chest pockets deep enough for tennis balls, lead clips, and emergency treats.',
    editorialNote: 'Sturdy, mud-resistant weave that takes muddy paws in stride and looks even better broken in.',
    inspiration: 'Field-tested in damp British parks where your hound sprints into briar bushes and then expects you to carry them.',
    goofyQuote: '"Pockets specifically deep enough for four tennis balls and 3 rolls of poop bags."',
    images: {
      primary: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Cold Walks Field Overshirt in Forest Olive',
      // TODO: Drop transparent hoodie PNGs (e.g. dog-mom-club-hoodie.png) into src/assets/products/
      assetPath: 'src/assets/products/cold-walks-overshirt.png'
    },
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Forest Olive', hex: '#4B5842', slug: 'olive' },
      { name: 'Warm Charcoal', hex: '#1C1917', slug: 'charcoal' }
    ],
    specs: {
      weight: '350 GSM (Brushed Cotton Canvas Twill)',
      material: '100% Organic Canvas Twill',
      fit: 'Relaxed utility fit; layer comfortably over our 480GSM hoodie',
      origin: 'Constructed & finished in small UK batches',
      care: 'Cold wash, hang dry. Brushes clean easily when mud dries.'
    },
    features: [
      'Twin oversized chest bellow pockets with heavy button-down flaps',
      'Reinforced elbows designed for clumsy wrestling sessions',
      'Corozo nut buttons stitched with heavy thread',
      'UK small-batch inspection before dispatch'
    ],
    inStock: true,
    badge: 'Park Ready'
  },
  {
    id: 'prod_velcro_dog_fleece_04',
    slug: 'velcro-dog-snap-pullover',
    sku: 'BDC-FL-400-OAT',
    title: '400GSM "Velcro Dog" Sherpa Snap Pullover',
    subtitle: 'Deep-pile thermal fleece for dogs who must be physically touching you at all times',
    price: 105,
    currency: 'GBP',
    description: 'A plush, 400GSM recycled deep-pile sherpa pullover featuring retro 4-snap placket, nylon stand collar, and contrast binding. Designed for those dogs who follow you into the bathroom, sit on your feet while you brush your teeth, and act like a shadow with floppy ears.',
    editorialNote: 'Silky smooth internal lining ensures no itch, while high-pile exterior repels autumn breezes on frosty morning walks.',
    inspiration: 'Inspired by Dobermans and large breeds who cannot bear to be more than 2 inches away from your shin.',
    goofyQuote: '"Personal space? Never heard of her. I will now lay on your slippers."',
    images: {
      primary: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80',
      alt: 'Velcro Dog Sherpa Snap Pullover in Warm Oat with Forest Olive trim',
      // TODO: Drop transparent hoodie PNGs (e.g. dog-mom-club-hoodie.png) into src/assets/products/
      assetPath: 'src/assets/products/velcro-dog-fleece.png'
    },
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Warm Oat / Olive', hex: '#EDE3D5', slug: 'oat-olive' },
      { name: 'Burgundy / Charcoal', hex: '#5C2B33', slug: 'burgundy' }
    ],
    specs: {
      weight: '400 GSM (Deep-Pile Thermal Sherpa)',
      material: '100% Recycled Poly-Sherpa with Organic Cotton Lining',
      fit: 'Slightly roomy vintage outdoor silhouette with elasticated cuffs',
      origin: 'Hand-finished in small batches in the UK',
      care: 'Delicate cycle 30°C, air dry. Shakes out like new.'
    },
    features: [
      'Retro 4-snap placket with reinforced taslan nylon backing',
      'Ultra-soft windproof organic cotton lining against your skin',
      'Concealed zip handwarmer pockets lined with brushed micro-jersey',
      'Small-batch UK verified for perfect stitching'
    ],
    inStock: true,
    badge: 'Cozy Pick'
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
