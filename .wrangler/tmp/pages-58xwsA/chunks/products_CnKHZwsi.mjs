globalThis.process ??= {}; globalThis.process.env ??= {};
const PRODUCTS = [
  {
    id: "prod_doberman_hoodie_01",
    slug: "nobile-heavyweight-hoodie",
    sku: "CN-HD-480-BLK",
    title: "Nobile 480GSM Heavyweight Hoodie",
    subtitle: "Architectural silhouette engineered in luxury loopback terry",
    price: 115,
    currency: "GBP",
    description: "An elevated, boxy-cut architectural pullover cut from custom-milled 480GSM French loopback cotton. Inspired by the sleek posture and quiet poise of the Doberman Pinscher, this garment replaces loud graphics with sculpted geometry, blind-stitched hems, and subtle tonal embroidery.",
    editorialNote: "Heavyweight loopback weave that maintains dramatic drape over shoulders and cuffs. Built for crisp UK dawns and effortless streetwear layering.",
    inspiration: "Dedicated to the poised guardian — a celebration of gentle giants without intimidation.",
    images: {
      primary: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80",
      secondary: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=80",
      alt: "Nobile 480GSM Heavyweight Hoodie in Pitch Obsidian on model"
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Pitch Onyx", hex: "#111113", slug: "onyx" },
      { name: "Doberman Rust", hex: "#873922", slug: "rust" },
      { name: "Chalk Bone", hex: "#ebe7df", slug: "bone" }
    ],
    specs: {
      weight: "480 GSM (Heavyweight)",
      material: "100% GOTS Certified Organic Combed Cotton Loopback Terry",
      fit: "Oversized, dropped shoulder, structured boxy drape",
      origin: "Knitted and handcrafted in Leicester, England",
      care: "Machine wash cold 30°C inside out, flat air dry. Do not tumble dry."
    },
    features: [
      "Double-lined ergonomic crossover hood without drawstrings for clean architectural lines",
      "High-density tonal micro-embroidery of the Gentle Giant heraldry",
      "Reinforced bar-tack pocket construction designed to withstand leashes and gear",
      "Pre-shrunk enzyme wash for a lifetime of structured wear"
    ],
    inStock: true,
    badge: "Signature Piece"
  },
  {
    id: "prod_gentle_giant_tee_02",
    slug: "gentle-giant-oversized-tee",
    sku: "CN-TEE-280-RAW",
    title: "Gentle Giant 280GSM Boxy Tee",
    subtitle: "High-density combed jersey with raw architectural proportions",
    price: 55,
    currency: "GBP",
    description: "A structural statement tee cut with an exaggerated 3.5cm ribbed collar and elbow-grazing sleeves. Formulated from premium 280GSM single-jersey cotton, celebrating the silent dignity of large breeds with an understated back typographic print.",
    editorialNote: "Substantial, non-translucent hand feel that holds its boxy form throughout all-day urban movement.",
    inspiration: "Inspired by the gentle giant breeds whose calm presence anchors any room they enter.",
    images: {
      primary: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
      secondary: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
      alt: "Gentle Giant 280GSM Boxy Tee in Bone Chalk"
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Bone Chalk", hex: "#ede8dd", slug: "bone" },
      { name: "Pitch Onyx", hex: "#111113", slug: "onyx" },
      { name: "Titanium Slate", hex: "#34383d", slug: "slate" }
    ],
    specs: {
      weight: "280 GSM (Ultra Heavy Jersey)",
      material: "100% Ring-Spun Long-Staple Combed Cotton",
      fit: "Relaxed oversized box cut with dropped armholes",
      origin: "Knitted in Lancashire, UK",
      care: "Cool wash at 30°C. Reshape while damp. Do not bleach."
    },
    features: [
      "3.5cm 1x1 rib thick collar that retains shape permanently",
      "Twin-needle hem and cuff stitching for durability",
      "Eco-friendly water-based discharge screenprint with zero plastic hand-feel",
      "Relaxed drape engineered for high-energy walks and urban leisure"
    ],
    inStock: true,
    badge: "Core Collection"
  },
  {
    id: "prod_canine_chore_coat_03",
    slug: "atelier-handler-chore-jacket",
    sku: "CN-JK-360-RST",
    title: "Atelier Handler Heavy Canvas Jacket",
    subtitle: "Utility chore coat engineered for British weather and big dog handling",
    price: 165,
    currency: "GBP",
    description: "A heavy-duty 360GSM duck canvas chore jacket designed with utility pockets for leads, treats, and everyday carry. Features anti-snag matte horn buttons, reinforced elbow patches, and a Doberman tan corduroy collar.",
    editorialNote: "A heritage workwear staple refitted through modern UK streetwear sensibilities. Built to endure canine claws and wet countryside trails.",
    inspiration: "Dedicated to the dedicated handlers who walk in pouring rain and crisp sunrises with unwavering devotion.",
    images: {
      primary: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80",
      secondary: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=1200&q=80",
      alt: "Atelier Handler Heavy Canvas Jacket in Doberman Rust"
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Doberman Rust", hex: "#873922", slug: "rust" },
      { name: "Pitch Onyx", hex: "#111113", slug: "onyx" },
      { name: "Moss Highland", hex: "#2b3628", slug: "moss" }
    ],
    specs: {
      weight: "360 GSM (Waxed Duck Canvas)",
      material: "100% Water-Repellent Cotton Canvas with 100% Cotton Corduroy accents",
      fit: "Square boxy silhouette for layering over heavyweight hoodies",
      origin: "Crafted in Birmingham, UK",
      care: "Sponge clean with cold water. Reproof with wax as needed."
    },
    features: [
      "Four deep reinforced front patch pockets with quick-access magnetic flap closure",
      "Interior secure zipped pocket for essentials",
      "Heavy-duty brass YKK zipper with storm flap snap closure",
      "Corduroy collar and storm cuffs to trap heat on biting coastal mornings"
    ],
    inStock: true,
    badge: "Outerwear"
  },
  {
    id: "prod_hound_heavy_pant_04",
    slug: "corso-heavy-fleece-pant",
    sku: "CN-SWP-450-ONYX",
    title: "Corso 450GSM Architectural Sweatpant",
    subtitle: "Structured relaxed sweatpants with darted knees and zip pockets",
    price: 95,
    currency: "GBP",
    description: "Built for active handlers demanding runway-grade drape and uncompromising durability. Featuring an articulated darted knee, deep zippered hand pockets to prevent dog treats from spilling, and an elasticated waistband with elongated waxed cotton cords.",
    editorialNote: "Thick 450GSM organic loopback ensures zero sagging at the knees even after days of constant movement.",
    inspiration: "Named in honour of the noble Italian Cane Corso — grounded, composed, and undeniably powerful.",
    images: {
      primary: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=1200&q=80",
      secondary: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=1200&q=80",
      alt: "Corso 450GSM Architectural Sweatpant in Pitch Onyx"
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Pitch Onyx", hex: "#111113", slug: "onyx" },
      { name: "Titanium Slate", hex: "#34383d", slug: "slate" }
    ],
    specs: {
      weight: "450 GSM Heavy Fleece",
      material: "100% Organic French Terry Cotton",
      fit: "Relaxed taper with articulated knee seams",
      origin: "Knitted and crafted in Leicester, England",
      care: "Wash cold at 30°C. Hang to dry."
    },
    features: [
      "Concealed waterproof YKK side zips with nylon leash pulls",
      "Articulated knee darts preventing fabric distortion during training",
      "Heavyweight 2x2 ribbed ankle cuffs with clean ankle stacking",
      "Deep rear welt pocket with magnetic closure"
    ],
    inStock: true
  }
];
function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}
function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export { PRODUCTS as P, getProductBySlug as a, getProductById as g };
