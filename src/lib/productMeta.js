import { STORE } from "../data/store";

// Seeded by product id so every product gets its own stable reviews, breakdown & details.
function rng(seed) {
  let a = seed * 2654435761;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const pick = (r, arr) => arr[Math.floor(r() * arr.length)];
const between = (r, min, max) => Math.floor(min + r() * (max - min + 1));

const NAMES = [
  "Chelsi Shukla", "Gopi Patil", "Bhumi Bhanushali", "Ajay Kapoor", "Priya Sharma", "Rahul Verma", "Sneha Iyer",
  "Arjun Mehta", "Pooja Yadav", "Vikas Singh", "Neha Gupta", "Rohit Chauhan", "Kavya Reddy", "Aman Joshi",
  "Simran Kaur", "Manish Tiwari", "Anjali Desai", "Suresh Nair", "Ritu Agarwal", "Deepak Mishra", "Komal Jain",
  "Sanjay Pandey", "Meera Pillai", "Harsh Rathod", "Nisha Saini", "Karan Malhotra", "Divya Menon", "Imran Khan",
  "Tanvi Kulkarni", "Yash Thakur",
];

const TEXTS = {
  5: [
    "Excellent product, totally worth the price!",
    "Loved it! Quality is much better than expected.",
    "Superb quality and fast delivery. Highly recommended.",
    "Same as shown in the picture. Very happy with the purchase.",
    "Best purchase in this price range. Go for it!",
  ],
  4: [
    "Good product, value for money.",
    "Quality is nice, packaging could be better.",
    "Could be better, but overall satisfied.",
    "Nice product, delivered on time.",
    "Pretty good for the price. Would buy again.",
  ],
  3: [
    "The product is just okay, not great.",
    "Average quality, does the job.",
    "Decent product but expected a little more.",
  ],
  2: ["Not as expected, quality is below average.", "Material feels cheap. Not satisfied."],
  1: ["Very poor quality, don't buy.", "Product received was different from the picture."],
};

const BRANDS = {
  fashion: ["Kishoo Fashion", "Trendy Vibes", "Urban Loom", "StyleCart"],
  electronics: ["Kishoo Tech", "Boltz", "Zentrix", "VoltEdge"],
  beauty: ["Kishoo Beauty", "GlowUp", "Pure Bloom", "Velvet Touch"],
  home: ["Kishoo Home", "HomeNest", "KitchenKraft", "CasaLiving"],
  watches: ["Kishoo Time", "Chronix", "Titanium Line", "VisionPro"],
  jewellery: ["Kishoo Jewels", "Shringar", "Aabhushan", "Glam Studio"],
  sports: ["Kishoo Sports", "FitNation", "ProStrike", "Energize"],
  grocery: ["Kishoo Fresh", "Farm Basket", "Desi Harvest", "Annapurna"],
};

const VARIANTS = {
  fashion: { label: "Size", values: ["S", "M", "L", "XL", "Free Size"] },
  electronics: { label: "Color", values: ["Black", "White", "Blue", "Grey"] },
  beauty: { label: "Skin Type", values: ["All Skin Types", "Oily", "Dry", "Normal"] },
  home: { label: "Material", values: ["Stainless Steel", "Plastic", "Wood", "Ceramic", "Glass"] },
  watches: { label: "Color", values: ["Black", "Brown", "Silver", "Gold"] },
  jewellery: { label: "Plating", values: ["Gold Plated", "Silver Plated", "Rose Gold", "Oxidised"] },
  sports: { label: "Color", values: ["Black", "Red", "Blue", "Multicolor"] },
  grocery: { label: "Variant", values: ["Raw", "Organic", "Premium", "Regular"] },
};

export const RATING_LABELS = ["Excellent", "Very Good", "Good", "Average", "Poor"];

// Split `total` ratings into 5★..1★ buckets so the weighted average lands on `avg`.
function breakdown(total, avg, r) {
  const shares = (beta) => [5, 4, 3, 2, 1].map((k) => Math.exp(beta * (k - 3)));
  const mean = (w) => w.reduce((s, x, i) => s + x * (5 - i), 0) / w.reduce((s, x) => s + x, 0);
  let lo = -5;
  let hi = 5;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    if (mean(shares(mid)) < avg) lo = mid;
    else hi = mid;
  }
  const w = shares(lo).map((x) => x * (0.9 + r() * 0.2));
  const sum = w.reduce((s, x) => s + x, 0);
  const counts = w.map((x) => Math.round((x / sum) * total));
  counts[0] += total - counts.reduce((s, x) => s + x, 0);
  return counts;
}

const DATE_FMT = { year: "numeric", month: "long", day: "numeric" };

export function productMeta(p) {
  const r = rng(p.id);

  const reviewsCount = p.reviews;
  const ratingsCount = reviewsCount + between(r, Math.round(reviewsCount * 0.05), Math.round(reviewsCount * 0.2) + 5);
  const counts = breakdown(ratingsCount, p.rating, r);

  const reviewTotal = Math.min(12, Math.max(4, Math.round(reviewsCount / 40)));
  const weights = counts.map((c, i) => c * (i < 2 ? 1 : 0.6));
  const weightSum = weights.reduce((s, x) => s + x, 0);
  const names = [...NAMES].sort(() => r() - 0.5);
  const today = new Date();

  const reviews = Array.from({ length: reviewTotal }, (_, i) => {
    let roll = r() * weightSum;
    let bucket = 0;
    while (bucket < 4 && roll > weights[bucket]) roll -= weights[bucket++];
    const stars = 5 - bucket;
    const date = new Date(today);
    date.setDate(today.getDate() - between(r, 1, 45));
    return {
      id: `${p.id}-${i}`,
      name: names[i % names.length],
      rating: stars === 5 || r() < 0.5 ? stars : +(stars + r() * 0.9).toFixed(1),
      text: pick(r, TEXTS[stars]),
      img: pick(r, p.images),
      date,
      dateText: date.toLocaleDateString("en-US", DATE_FMT),
      helpful: between(r, 5, 900),
    };
  }).sort((a, b) => b.helpful - a.helpful);

  const variant = VARIANTS[p.category] || VARIANTS.grocery;
  const details = [
    ["Brand", pick(r, BRANDS[p.category] || BRANDS.grocery)],
    ["Name", p.name],
    ["Type", p.tag || p.name.split(" ").slice(-1)[0]],
    ["Net Quantity (N)", r() < 0.8 ? "1" : `Pack of ${between(r, 2, 4)}`],
    [variant.label, pick(r, variant.values)],
    ["Country of Origin", "India"],
  ];

  const offers = [
    `Pay online & get extra ${STORE.currency}${STORE.onlineOff} off`,
    "Buy 2 Get 1 Free — add any 3 items, lowest priced is free",
  ];

  return {
    ratingsCount,
    reviewsCount,
    breakdown: counts,
    reviews,
    details,
    offers,
    offerPrice: Math.max(0, p.price - STORE.onlineOff),
  };
}
