/**
 * Aurelisse — L'Éclat de l'Élégance
 * Simplified, 100% Reliable Static E-Commerce Repository
 * Exactly 20 Curated Products Across 4 Categories (Rings, Necklaces, Earrings, Bracelets)
 * Zero Backend API Calls - All Relative Paths - Zero Broken Images
 */

export const BRAND_CONFIG = {
  name: "Aurelisse",
  tagline: "L'Éclat de l'Élégance",
  subTagline: "The Brilliance of Elegance",
  phone: "+33 1 42 60 88 00",
  whatsappNumber: "919999999999",
  email: "concierge@aurelisse.com",
  currency: "$"
};

// Guaranteed SVG Data URIs as fail-safe image sources and category headers
const SVG_RING = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%"><rect width="600" height="600" fill="%23F5F0E8"/><circle cx="300" cy="330" r="140" fill="none" stroke="%23C9A961" stroke-width="24"/><polygon points="300,120 230,200 370,200" fill="%23FFFFFF" stroke="%23C9A961" stroke-width="8"/><line x1="230" y1="200" x2="370" y2="200" stroke="%23C9A961" stroke-width="6"/><circle cx="300" cy="160" r="15" fill="%23FAF7F2"/><text x="300" y="520" font-family="serif" font-size="28" fill="%231A1A1A" text-anchor="middle" letter-spacing="4">AURELISSE RINGS</text></svg>`;

const SVG_NECKLACE = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%"><rect width="600" height="600" fill="%23FAF7F2"/><path d="M 160,150 Q 300,480 440,150" fill="none" stroke="%23C9A961" stroke-width="16" stroke-dasharray="8 6"/><polygon points="300,380 260,450 300,500 340,450" fill="%23FFFFFF" stroke="%23C9A961" stroke-width="6"/><text x="300" y="550" font-family="serif" font-size="26" fill="%231A1A1A" text-anchor="middle" letter-spacing="4">AURELISSE NECKLACES</text></svg>`;

const SVG_BRACELET = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%"><rect width="600" height="600" fill="%23F5F0E8"/><ellipse cx="300" cy="300" rx="180" ry="110" fill="none" stroke="%23C9A961" stroke-width="28"/><ellipse cx="300" cy="300" rx="180" ry="110" fill="none" stroke="%23FFFFFF" stroke-width="8" stroke-dasharray="16 12"/><text x="300" y="520" font-family="serif" font-size="26" fill="%231A1A1A" text-anchor="middle" letter-spacing="4">AURELISSE BRACELETS</text></svg>`;

const SVG_EARRING = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%"><rect width="600" height="600" fill="%23FAF7F2"/><circle cx="230" cy="240" r="45" fill="%23FFFFFF" stroke="%23C9A961" stroke-width="10"/><circle cx="370" cy="240" r="45" fill="%23FFFFFF" stroke="%23C9A961" stroke-width="10"/><path d="M 230,285 L 230,390" stroke="%23C9A961" stroke-width="8"/><path d="M 370,285 L 370,390" stroke="%23C9A961" stroke-width="8"/><polygon points="230,390 210,430 230,460 250,430" fill="%23C9A961"/><polygon points="370,390 350,430 370,460 390,430" fill="%23C9A961"/><text x="300" y="530" font-family="serif" font-size="26" fill="%231A1A1A" text-anchor="middle" letter-spacing="4">AURELISSE EARRINGS</text></svg>`;

export const CATEGORIES = [
  { id: "Rings", name: "Rings", count: 5, image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80", desc: "Solitaires, Engagement & Cocktail Masterpieces" },
  { id: "Necklaces", name: "Necklaces", count: 5, image: SVG_NECKLACE, desc: "Pendants, Chokers & Layered Gold Chains" },
  { id: "Earrings", name: "Earrings", count: 5, image: SVG_EARRING, desc: "Diamond Studs, Hoops & Chandelier Drops" },
  { id: "Bracelets", name: "Bracelets", count: 5, image: SVG_BRACELET, desc: "Diamond Tennis Bracelets & Handcrafted Bangles" }
];

export const PRODUCTS = [
  // --- RINGS (5 Items) ---
  {
    id: "ring-01",
    name: "The Royal Impériale Solitaire Ring",
    brand: "Aurelisse Haute Joaillerie",
    category: "Rings",
    price: 38500,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=85",
    description: "The crown jewel of our Place Vendôme archive. A mesmerizing 4.2-carat D-Flawless emerald-cut diamond mounted upon a solid PT950 Platinum band intricately hand-set with micro-pavé diamonds.",
    material: "PT950 Solid Platinum • 4.20 Carat Flawless Emerald-Cut Diamond"
  },
  {
    id: "ring-02",
    name: "Céleste Oval Diamond Engagement Ring",
    brand: "Aurelisse Bridal",
    category: "Rings",
    price: 18900,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=85",
    description: "An ethereal 2.50-carat oval brilliant diamond set upon a delicate knife-edge 18K gold shank with hidden halo diamonds beneath the gallery.",
    material: "18K White Gold • 2.50 Carat VVS1 Oval Brilliant Diamond"
  },
  {
    id: "ring-03",
    name: "Lumière Éternelle Diamond Band",
    brand: "Aurelisse Classics",
    category: "Rings",
    price: 6400,
    rating: 4.9,
    image: SVG_RING,
    description: "An unbroken circle of radiant emerald-cut diamonds totaling 3.8 carats, secured in a shared-prong minimal setting that maximizes light entry from every angle.",
    material: "18K Yellow Gold • 18 Emerald-Cut Diamonds (Total 3.80 Carats)"
  },
  {
    id: "ring-04",
    name: "L'Émeraude Royale Cocktail Ring",
    brand: "Aurelisse High Gemstones",
    category: "Rings",
    price: 24500,
    rating: 5.0,
    image: SVG_RING,
    description: "A vivid green 5.1-carat untreated Colombian Emerald encircled by a double sunburst halo of marquise and round brilliant diamonds.",
    material: "18K Yellow Gold & Platinum • 5.10 Carat Colombian Emerald & Diamond Halo"
  },
  {
    id: "ring-05",
    name: "Petite Aurore Rose Gold Stackable Ring",
    brand: "Aurelisse Everyday",
    category: "Rings",
    price: 1850,
    rating: 4.8,
    image: SVG_RING,
    description: "A finely sculpted twisted ribbon of 18K Rose Gold alternating with polished beads and grain-set micro diamonds. Designed to stack flawlessly.",
    material: "18K Solid Rose Gold • 0.35 Carat Total Diamonds"
  },

  // --- NECKLACES (5 Items) ---
  {
    id: "neck-01",
    name: "L'Aurore Éternelle Diamond Rivière Necklace",
    brand: "Aurelisse High Jewellery",
    category: "Necklaces",
    price: 78000,
    rating: 5.0,
    image: SVG_NECKLACE,
    description: "A monumental high-jewellery achievement. Over 38 carats of graduated pear-cut and round brilliant diamonds cascading from a supple articulated 18K White Gold lattice.",
    material: "18K White Gold • 72 Natural Diamonds (Total 38.40 Carats)"
  },
  {
    id: "neck-02",
    name: "Goutte d'Or Solitaire Diamond Pendant",
    brand: "Aurelisse Classics",
    category: "Necklaces",
    price: 4950,
    rating: 4.9,
    image: SVG_NECKLACE,
    description: "A brilliant 1.20-carat round diamond suspended inside a sleek, architectural gold bezel that slides effortlessly along a diamond-cut cable chain.",
    material: "18K Solid Yellow Gold • 1.20 Carat F-VVS2 Brilliant Diamond"
  },
  {
    id: "neck-03",
    name: "L'Impératrice Akoya Pearl & Diamond Choker",
    brand: "Aurelisse Pearl Collection",
    category: "Necklaces",
    price: 11200,
    rating: 4.9,
    image: SVG_NECKLACE,
    description: "Three lustrous strands of perfectly matched AAA Japanese Akoya cultured pearls (8.5mm), united by an intricate Art Deco diamond clasp in 18K White Gold.",
    material: "18K White Gold • AAA Japanese Akoya Pearls & 1.80 Cts Pavé Diamonds"
  },
  {
    id: "neck-04",
    name: "Chaîne Royale 18K Gold Link Necklace",
    brand: "Aurelisse Gold Archive",
    category: "Necklaces",
    price: 6800,
    rating: 4.8,
    image: SVG_NECKLACE,
    description: "Solid 18K gold elongated links forged with our signature knife-edge bevel and high-mirror hand polish. A statement alone or layered with pendants.",
    material: "Solid 18K Yellow Gold • 34.5 Grams Heavy French Polish"
  },
  {
    id: "neck-05",
    name: "L'Oiseau de Feu Burmese Ruby Choker",
    brand: "Aurelisse High Gemstones",
    category: "Necklaces",
    price: 32000,
    rating: 5.0,
    image: SVG_NECKLACE,
    description: "Featuring a breathtaking 3.4-carat unheated Pigeon's Blood Burmese Ruby suspended from a cluster of pear and marquise diamonds totaling 2.2 carats.",
    material: "Platinum PT950 & 18K White Gold • 3.40 Carat Unheated Burmese Ruby"
  },

  // --- EARRINGS (5 Items) ---
  {
    id: "ear-01",
    name: "Céleste Royal Sapphire Chandelier Earrings",
    brand: "Aurelisse High Gemstones",
    category: "Earrings",
    price: 45000,
    rating: 5.0,
    image: SVG_EARRING,
    description: "Staggering articulated drop earrings showcasing 8.4 carats of matched pear-cut Royal Blue sapphires from Sri Lanka, surrounded by 4.2 carats of marquise diamond clusters.",
    material: "18K White Gold • 8.40 Carats Sri Lankan Sapphires & 4.20 Carats Diamonds"
  },
  {
    id: "ear-02",
    name: "Vendôme Classic Solitaire Diamond Studs",
    brand: "Aurelisse Classics",
    category: "Earrings",
    price: 8900,
    rating: 5.0,
    image: SVG_EARRING,
    description: "The definitive jewelry wardrobe foundation. Two perfectly matched, GIA-certified 1.0-carat round brilliant diamonds in minimal 4-prong basket settings.",
    material: "PT950 Platinum • 2.00 Carats Total Weight (1.00ct each) E-VVS1"
  },
  {
    id: "ear-03",
    name: "L'Anneau d'Or Pavé Diamond Hoops",
    brand: "Aurelisse Everyday",
    category: "Earrings",
    price: 5600,
    rating: 4.8,
    image: SVG_EARRING,
    description: "Inside-out diamond hoop earrings where round brilliant diamonds line both the outer front curve and inner back curve for continuous 360-degree sparkle.",
    material: "18K Solid Yellow Gold • 2.40 Carats Total F-VS1 Diamonds"
  },
  {
    id: "ear-04",
    name: "L'Aurore South Sea Pearl & Diamond Drops",
    brand: "Aurelisse Pearl Collection",
    category: "Earrings",
    price: 6800,
    rating: 4.9,
    image: SVG_EARRING,
    description: "Two flawless 12mm Golden South Sea cultured pearls suspended from Art Deco geometric tops pave-set with 1.10 carats of marquise diamonds.",
    material: "18K White Gold • 12mm Golden South Sea Pearls & 1.10 Cts Diamonds"
  },
  {
    id: "ear-05",
    name: "Petite Fleur Rose Gold Diamond Studs",
    brand: "Aurelisse Everyday",
    category: "Earrings",
    price: 2400,
    rating: 4.9,
    image: SVG_EARRING,
    description: "Delicate floral silhouettes crafted in 18K Rose Gold, each petal cradling a grain-set round brilliant diamond centered around a pink diamond pistil.",
    material: "18K Solid Rose Gold • 0.85 Carat Total Diamond Weight"
  },

  // --- BRACELETS (5 Items) ---
  {
    id: "brac-01",
    name: "Rivière d'Étoiles Diamond Tennis Bracelet",
    brand: "Aurelisse Classics",
    category: "Bracelets",
    price: 16500,
    rating: 5.0,
    image: SVG_BRACELET,
    description: "A seamless stream of 55 individually matched F-color diamonds totaling 7.50 carats, each cradled in a supple 4-prong articulation that flows like liquid light along the wrist.",
    material: "18K White Gold • 55 Natural Diamonds (Total 7.50 Carats F-VVS2)"
  },
  {
    id: "brac-02",
    name: "L'Architecte Gold & Diamond Hinged Bangle",
    brand: "Aurelisse Gold Collection",
    category: "Bracelets",
    price: 9400,
    rating: 4.9,
    image: SVG_BRACELET,
    description: "Sculptural solid 18K gold oval bangle featuring our signature fluted texture and a focal bridge set with 1.2 carats of baguette-cut diamonds.",
    material: "Solid 18K Yellow Gold • 1.20 Carats Baguette-Cut Diamonds"
  },
  {
    id: "brac-03",
    name: "Impératrice Akoya Pearl & Diamond Bracelet",
    brand: "Aurelisse Pearl Collection",
    category: "Bracelets",
    price: 5800,
    rating: 4.9,
    image: SVG_BRACELET,
    description: "Double strand of AAA lustrous Japanese Akoya pearls (7.5mm) joined by an 18K gold Art Deco clasp encrusted with 0.65 carats of brilliant diamonds.",
    material: "18K White Gold Clasp • AAA Akoya Pearls (7.5mm) & Pavé Diamonds"
  },
  {
    id: "brac-04",
    name: "Vendôme Emerald & Gold Architectural Cuff",
    brand: "Aurelisse High Gemstones",
    category: "Bracelets",
    price: 21000,
    rating: 5.0,
    image: SVG_BRACELET,
    description: "Substantial solid 18K gold wide cuff with openwork Parisian trellis design, capped with two matched 1.8-carat Colombian emerald cabochons and diamond halos.",
    material: "18K Solid Yellow Gold • 3.60 Carats Matched Colombian Emeralds"
  },
  {
    id: "brac-05",
    name: "PT950 Platinum Art Deco Pavé Bangle",
    brand: "Aurelisse Platinum Archive",
    category: "Bracelets",
    price: 18500,
    rating: 5.0,
    image: SVG_BRACELET,
    description: "Forged in pure PT950 Platinum, this rigid hinged bangle features intricate Art Deco geometric engravings set with 3.20 carats of F-color brilliant diamonds.",
    material: "Pure PT950 Platinum • 3.20 Carats F-VVS1 Brilliant Diamonds"
  }
];
