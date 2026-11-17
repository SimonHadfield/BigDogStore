globalThis.process ??= {}; globalThis.process.env ??= {};
const PRODUCTS = [
  {
    id: "prod_doberman_hoodie_01",
    slug: "nobile-heavyweight-hoodie",
    sku: "BDC-HD-480-ESP",
    title: '480GSM "Personal Space Violator" Heavyweight Hoodie',
    subtitle: "Ultra-plush French terry built for 40kg dogs who think they are teacup chihuahuas",
    price: 95,
    currency: "GBP",
    description: "An ultra-heavyweight, relaxed-fit pullover cut from custom 480GSM organic combed cotton loopback fleece. Dedicated to the clumsy, affectionate giant who rests their heavy 10-pound chin directly on your collarbone the moment you sit down. Heavy enough to shield you from enthusiastic front paw taps, roomy enough for cozy sofa cuddles.",
    editorialNote: "Dense, durable loopback weave that repels loose fur better than fleece and holds its shape through muddy woodland walks, sofa zoomies, and endless wash cycles.",
    inspiration: "Inspired by Dobermans and gentle giants who have zero concept of personal boundaries.",
    goofyQuote: `"If I fits, I sits. And even if I don't fits, I still sits on your lap."`,
    images: {
      primary: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80",
      secondary: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=80",
      alt: "Big Dog Club 480GSM Heavyweight Hoodie in Warm Espresso on model"
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Warm Espresso", hex: "#1E1B18", slug: "espresso" },
      { name: "Doberman Tan", hex: "#D97736", slug: "tan" },
      { name: "Oatmeal Bone", hex: "#F2EAE0", slug: "oatmeal" }
    ],
    specs: {
      weight: "480 GSM (Ultra-Heavyweight Loopback)",
      material: "100% GOTS Certified Organic Combed Cotton",
      fit: "Relaxed streetwear fit, dropped shoulder, roomy pouch pocket",
      origin: "Printed, embroidered & hand-checked in Leicester, UK",
      care: "Machine wash warm (30°C) with like colors, air dry flat. Dog hair brushes off easily."
    },
    features: [
      "Small-batch drop: hand-checked in the UK before dispatch (5–7 working days)",
      "Thick double-layered crossover hood to keep chilly UK winds and slobbery headshakes at bay",
      "Reinforced kangaroo pouch pocket designed to survive frantic paw digs and treat stash retrieval",
      "Pre-shrunk organic cotton so it stays big, slouchy, and comfy forever"
    ],
    inStock: true,
    badge: "Couch Potato Favorite"
  },
  {
    id: "prod_gentle_giant_tee_02",
    slug: "gentle-giant-oversized-tee",
    sku: "BDC-TEE-280-SAN",
    title: '280GSM "Gentle Giant Club" Boxy Tee',
    subtitle: "Chunky vintage ribbed collar, thick organic jersey & 100% zero scary clichés",
    price: 45,
    currency: "GBP",
    description: "A heavyweight, boxy-cut tee formulated from 280GSM single-jersey cotton with elbow-skimming sleeves. Designed specifically to flip the script on big breeds—because while strangers cross the street, you know your 45kg hound is secretly terrified of the Roomba and crying over a fallen blueberry.",
    editorialNote: "Substantial, non-see-through hand feel with a chunky 3.2cm ribbed neckline that never sags or bacon-necks.",
    inspiration: "Celebrates the goofy, soulful heart of big dogs who melt into butter the moment belly rubs start.",
    goofyQuote: '"Looks like a bodyguard. Actually startled by plastic bags blowing in the wind."',
    images: {
      primary: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
      secondary: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
      alt: "Gentle Giant Club 280GSM Boxy Tee in Soft Sand"
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Soft Sand", hex: "#F2EAE0", slug: "sand" },
      { name: "Deep Espresso", hex: "#1E1B18", slug: "espresso" },
      { name: "Matcha Sage", hex: "#4A7C59", slug: "sage" }
    ],
    specs: {
      weight: "280 GSM (Chunky Single Jersey)",
      material: "100% Ring-Spun Organic Cotton",
      fit: "Boxy streetwear cut with drop shoulders and elbow-length sleeves",
      origin: "Silk-screened and finished in small batches in the UK",
      care: "Wash inside-out at 30°C. Shake out and hang dry."
    },
    features: [
      "Small-batch release: printed and hand-checked in the UK (5–7 working days dispatch)",
      'Retro collegiate "Big Dog Club & Social" typographic chest crest',
      "Ultra-dense 280GSM yarn that won't cling or show slobber watermarks",
      "Seamless twin-needle stitching built to withstand enthusiastic greetings"
    ],
    inStock: true,
    badge: "Bestseller"
  },
  {
    id: "prod_handler_jacket_03",
    slug: "handler-field-jacket",
    sku: "BDC-JKT-360-SAG",
    title: '360GSM "Mud & Zoomies" Canvas Overshirt',
    subtitle: "Rugged brushed duck canvas with deep treat-proof pockets & brass snaps",
    price: 130,
    currency: "GBP",
    description: "An overshirt tough enough for blackberry brambles and damp British park strolls, yet stylish enough for Sunday pub pints with your gentle monster. Cut from 360GSM heavy cotton duck canvas with dual cargo pockets big enough for tennis balls, half a bag of liver treats, and two sets of leashes.",
    editorialNote: "Pre-washed for a broken-in feel straight out of the box. The heavy canvas naturally sheds brambles and dried park mud.",
    inspiration: "For anyone who has been dragged across a muddy football pitch because their dog saw an interesting feather.",
    goofyQuote: '"Walking a big dog is 20% walking and 80% apologizing for enthusiastic tail wags."',
    images: {
      primary: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80",
      secondary: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&w=1200&q=80",
      alt: "Mud & Zoomies Canvas Overshirt in Forest Sage"
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Forest Sage", hex: "#4A7C59", slug: "sage" },
      { name: "Toasted Tan", hex: "#D97736", slug: "tan" },
      { name: "Dark Roast", hex: "#1E1B18", slug: "espresso" }
    ],
    specs: {
      weight: "360 GSM (Heavy Brushed Canvas)",
      material: "100% Heavyweight Cotton Duck Canvas with Corduroy Collar",
      fit: "Layering overshirt cut to slip easily over our 480GSM hoodie",
      origin: "Hand-inspected and finished in Leicester, UK",
      care: "Spot clean mud with a damp cloth; machine wash cold when necessary."
    },
    features: [
      "Small-batch run: individually reviewed for stitch perfection before delivery (5–7 days)",
      "Oversized gusseted storm pockets specifically tested to fit 2 Chuckit! tennis balls",
      "Reinforced antique brass snaps that won't catch on webbing leashes or harnesses",
      "Soft corduroy collar lining so your neck stays cozy during chilly 6am morning walks"
    ],
    inStock: true,
    badge: "Park Tested"
  },
  {
    id: "prod_corso_fleece_pant_04",
    slug: "corso-heavyweight-fleece-pant",
    sku: "BDC-PNT-450-ESP",
    title: '450GSM "Velcro Dog" Heavyweight Sweatpant',
    subtitle: "Relaxed tapered sweatpant for couch hogs and professional lap-warmers",
    price: 85,
    currency: "GBP",
    description: "When your 42kg dog insists on sleeping pressed firmly against your shins, you need sweatpants with serious thermal substance. Spun from 450GSM brushed-back cotton fleece with deep zippered phone pockets so your phone doesn't slide out under the cushions during cuddle wrestling matches.",
    editorialNote: "Thick, heavyweight fleece that cushions bony canine paws standing on your thighs.",
    inspiration: 'Honoring the "Velcro Dog" syndrome: where going to the kitchen requires a full canine escort.',
    goofyQuote: `"You thought you bought a sofa for yourself? That's adorable."`,
    images: {
      primary: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=1200&q=80",
      secondary: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=1200&q=80",
      alt: "Velcro Dog 450GSM Heavyweight Sweatpant in Warm Espresso"
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Warm Espresso", hex: "#1E1B18", slug: "espresso" },
      { name: "Oatmeal Bone", hex: "#F2EAE0", slug: "oatmeal" },
      { name: "Muted Matcha", hex: "#4A7C59", slug: "sage" }
    ],
    specs: {
      weight: "450 GSM (Heavy Brushed Fleece)",
      material: "100% Organic Cotton Fleece",
      fit: "Relaxed fit with gentle ankle taper and chunky ribbed waistband",
      origin: "Printed, embroidered & checked in Leicester, UK",
      care: "Wash cold inside out, tumble low or air dry for longest life."
    },
    features: [
      "Small-batch drop: hand-checked in the UK before dispatch (5–7 working days)",
      "Concealed YKK zippered side pockets to safeguard keys and treats on brisk trots",
      "Heavy-gauge cotton drawcord that won't pull through the waistband channel",
      "Ultra-dense knit that resists pet claw pulls and snagging"
    ],
    inStock: true,
    badge: "Ultimate Cozy"
  }
];
function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}
function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export { PRODUCTS as P, getProductBySlug as a, getProductById as g };
