/**
 * Aurelisse — L'Éclat de l'Élégance
 * Simplified, 100% Reliable Static E-Commerce Repository
 * Exactly 20 Curated Products Across 4 Categories (Rings, Necklaces, Earrings, Bracelets)
 * Zero Backend API Calls - All Relative Paths - Zero Broken/Duplicate Images
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

export const CATEGORIES = [
  { id: "Rings", name: "Rings", count: 5, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80", desc: "Solitaires, Engagement & Cocktail Masterpieces" },
  { id: "Necklaces", name: "Necklaces", count: 5, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80", desc: "Pendants, Chokers & Layered Gold Chains" },
  { id: "Earrings", name: "Earrings", count: 5, image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80", desc: "Diamond Studs, Hoops & Chandelier Drops" },
  { id: "Bracelets", name: "Bracelets", count: 5, image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80", desc: "Diamond Tennis Bracelets & Handcrafted Bangles" }
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
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80"],
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
    image: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1626497764746-6dc36546b388?auto=format&fit=crop&w=800&q=80"],
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
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=800&q=80"],
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
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80"],
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
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80"],
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
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80"],
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
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80"],
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
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80"],
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
    image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=800&q=80"],
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
    image: "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?auto=format&fit=crop&w=800&q=80"],
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
    image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=800&q=80"],
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
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=800&q=80"],
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
    image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=800&q=80"],
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
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80"],
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
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"],
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
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80"],
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
    image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=800&q=80"],
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
    image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=800&q=80"],
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
    image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=800&q=80"],
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
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"],
    description: "Forged in pure PT950 Platinum, this rigid hinged bangle features intricate Art Deco geometric engravings set with 3.20 carats of F-color brilliant diamonds.",
    material: "Pure PT950 Platinum • 3.20 Carats F-VVS1 Brilliant Diamonds"
  }
];

export const JOURNAL_POSTS = [
  {
    id: "post-01",
    title: "The Anatomy of Place Vendôme High Jewellery",
    category: "Craftsmanship & Heritage",
    date: "July 8, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=800&q=80",
    summary: "Step inside our Parisian atelier where master artisans dedicate upwards of 800 hours to hand-forging a single articulated diamond rivière..."
  },
  {
    id: "post-02",
    title: "How to Care for Heirloom Diamond & Pearl Pieces",
    category: "Jewellery Care Guide",
    date: "June 22, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    summary: "Diamonds are forever, but their settings require tender reverence. Learn our master jewelers' protocol for preserving luster across generations..."
  },
  {
    id: "post-03",
    title: "The Bridal Curations: Finding Your Signature Ring",
    category: "Styling Guides",
    date: "May 14, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=800&q=80",
    summary: "From the architectural purity of emerald cuts to the romantic fire of oval brilliants, discover how your diamond shape reflects your personal aesthetic..."
  }
];

export const FAQS = [
  {
    q: "Are all Aurelisse diamonds and gemstones certified?",
    a: "Yes. Every single Aurelisse diamond above 0.30 carats comes accompanied by an official, independent grading monograph from the Gemological Institute of America (GIA) or HRD Antwerp. Our rare colored gemstones (such as Burmese Rubies and Colombian Emeralds) are certified by Gubelin or SSEF Swiss laboratories."
  },
  {
    q: "What is your return and exchange policy?",
    a: "We offer a gracious 30-day return and exchange policy on all non-bespoke and non-engraved pieces. The item must be returned in its original, unworn condition with all authenticity certificates and luxury presentation trunks intact."
  },
  {
    q: "How does the Order via WhatsApp concierge service work?",
    a: "Clicking 'Order via WhatsApp' on any product page or in your shopping cart connects you instantly to a live Place Vendôme or regional luxury concierge via WhatsApp. Your message is pre-filled with the exact piece specifications (Metal, Size, Price, SKU), allowing our team to arrange private consultation, bespoke sizing, and white-glove insured delivery."
  },
  {
    q: "Do you offer international white-glove shipping?",
    a: "Yes. We ship worldwide via armored, fully insured express courier (Brinks / FedEx Priority VIP). Shipping is complimentary on all orders exceeding $2,500."
  },
  {
    q: "Can I book a private in-store or virtual video consultation?",
    a: "Absolutely. Our 'Book an Appointment' portal allows you to reserve a 60-minute one-on-one session with a Senior Gemologist either in our Paris, London, New York, or Tokyo salons, or via 4K high-definition video link."
  }
];

export const TIMELINE = [
  { year: "1894", title: "The Foundation", desc: "Henri Aurelisse opens his first boutique on Rue de la Paix, catering to European nobility and discerning collectors." },
  { year: "1926", title: "The Art Deco Revolution", desc: "Aurelisse introduces the iconic 'Lumière' geometric diamond setting, winning the Grand Prix in Paris." },
  { year: "1972", title: "The Place Vendôme Salon", desc: "The flagship headquarters moves to the prestigious Place Vendôme, solidifying our place among the world's elite jewellery houses." },
  { year: "2015", title: "100% Ethical & Conflict-Free", desc: "Aurelisse becomes one of the first high jewellery houses to certify 100% recycled precious metals and blockchain-traced diamonds." },
  { year: "2026", title: "L'Éclat Digital Experience", desc: "Launch of our award-winning digital luxury boutique, bringing the personalized touch of Place Vendôme directly to clients worldwide." }
];

export const TESTIMONIALS = [
  { quote: "Receiving our bespoke Aurelisse engagement ring felt like stepping into royal history. The packaging, the weight of the platinum, the fire of the diamond—perfection.", author: "Lady Victoria H.", location: "London & Zurich", rating: 5 },
  { quote: "The online WhatsApp concierge was exceptionally attentive. They filmed a 4K video of the sapphire chandelier earrings under different lighting before I made my purchase.", author: "Marcello D.", location: "Milan", rating: 5 },
  { quote: "Aurelisse captures true quiet luxury. No loud logos—just breathtaking stones and craftsmanship that speaks for itself across the room.", author: "Camilla S.", location: "New York", rating: 5 }
];

