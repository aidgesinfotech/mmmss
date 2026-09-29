// ==========================================================
//  CATEGORIES PAGE MENU  â€”  edit this file to manage the page
// ----------------------------------------------------------
//  Left sidebar = GROUPS.  Right side = SECTIONS of ITEMS.
//
//  Group:   { id, name, icon?, sections: [...] }
//           icon  -> emoji ("â­") or image URL. Empty = first item's image.
//
//  Section: { title, items: [...] }
//
//  Item:    { id, name, category?, keywords?, img?, badge?, to? }
//           id        -> unique slug, used in the URL: /category/<id>
//           category  -> product category from store.js â€” use THESE in CSV:
//                        grocery | home | tv-appliances | smart-gadget |
//                        mobiles | electronics | bags-luggage |
//                        women-fashion | men-fashion | footwear |
//                        beauty | sports | toys
//           keywords  -> words matched against product names (start of a word, any case)
//           category + keywords together = both must match
//           img       -> optional. Empty = photo of the first matching product
//           badge     -> optional small label on the image, e.g. "Mall"
//           to        -> optional custom link instead of the product list
// ==========================================================

export const CATEGORY_MENU = [
  // â”€â”€ 1. GROCERY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "grocery",
    name: "Grocery",
    icon: "ðŸ›’",
    sections: [
      {
        title: "Grocery",
        items: [
          { id: "fruits-veg",  name: "Fruits & Vegetables", category: "grocery", keywords: ["Apple", "Kiwi", "Lemon", "Mulberry", "Cucumber", "Pepper", "Potatoes", "Onions"] },
          { id: "dairy",       name: "Dairy & Eggs",        category: "grocery", keywords: ["Milk", "Eggs", "Ice Cream"] },
          { id: "staples",     name: "Staples",             category: "grocery", keywords: ["Rice", "Oil", "Honey"] },
          { id: "beverages",   name: "Beverages",           category: "grocery", keywords: ["Juice", "Coffee", "Protein"] },
          { id: "pet-food",    name: "Pet Food",            category: "grocery", keywords: ["Cat Food", "Dog Food"] },
          { id: "grocery-all", name: "All Grocery",         category: "grocery" },
        ],
      },
    ],
  },

  // â”€â”€ 2. HOME & KITCHEN â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "home",
    name: "Home & Kitchen",
    icon: "ðŸ ",
    sections: [
      {
        title: "Kitchen",
        items: [
          { id: "cookware",      name: "Cookware",         category: "home", keywords: ["Pan", "Wok", "Silver Pot"] },
          { id: "appliances",    name: "Appliances",       category: "home", keywords: ["Blender", "Stove", "Microwave"] },
          { id: "kitchen-tools", name: "Kitchen Tools",    category: "home", keywords: ["Spatula", "Whisk", "Grater", "Peeler", "Knife", "Tongs", "Strainer", "Sieve", "Squeezer", "Slicer", "Turner", "Rolling Pin", "Chopping"] },
          { id: "dining",        name: "Dining & Serving", category: "home", keywords: ["Plate", "Spoon", "Fork", "Glass", "Cup", "Tray", "Lunch Box", "Mug"] },
        ],
      },
      {
        title: "Home Decor",
        items: [
          { id: "decor",    name: "Decor & Lighting",  category: "home", keywords: ["Swing", "Frame", "Showpiece", "Plant", "Lamp"] },
          { id: "home-all", name: "All Home & Kitchen", category: "home" },
        ],
      },
    ],
  },

  // â”€â”€ 3. TV & APPLIANCES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "tv-appliances",
    name: "TV & Appliances",
    icon: "ðŸ“º",
    sections: [
      {
        title: "TV & Appliances",
        items: [
          { id: "tvs",          name: "Televisions",         category: "tv-appliances", keywords: ["TV", "Television", "LED", "OLED", "Smart TV"] },
          { id: "washing",      name: "Washing Machines",    category: "tv-appliances", keywords: ["Washing Machine", "Washer"] },
          { id: "refrigerator", name: "Refrigerators",       category: "tv-appliances", keywords: ["Refrigerator", "Fridge"] },
          { id: "ac",           name: "Air Conditioners",    category: "tv-appliances", keywords: ["AC", "Air Conditioner"] },
          { id: "tv-all",       name: "All TV & Appliances", category: "tv-appliances" },
        ],
      },
    ],
  },

  // â”€â”€ 4. SMART GADGET â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "smart-gadget",
    name: "Smart Gadget",
    icon: "âš¡",
    sections: [
      {
        title: "Smart Gadgets",
        items: [
          { id: "smartwatch",    name: "Smart Watches",      category: "smart-gadget", keywords: ["Watch", "Smart Watch"] },
          { id: "smart-speaker", name: "Smart Speakers",     category: "smart-gadget", keywords: ["Echo", "HomePod", "Speaker"] },
          { id: "smart-home",    name: "Smart Home",         category: "smart-gadget", keywords: ["Smart", "IoT"] },
          { id: "gadget-all",    name: "All Smart Gadgets",  category: "smart-gadget" },
        ],
      },
    ],
  },

  // â”€â”€ 5. MOBILES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "mobiles",
    name: "Mobiles",
    icon: "ðŸ“±",
    sections: [
      {
        title: "Smartphones",
        items: [
          { id: "iphone",      name: "iPhones",          category: "mobiles", keywords: ["iPhone"] },
          { id: "samsung",     name: "Samsung",          category: "mobiles", keywords: ["Samsung"] },
          { id: "android",     name: "Android Phones",   category: "mobiles", keywords: ["Oppo", "Realme", "Vivo", "Redmi", "OnePlus"] },
          { id: "mobiles-all", name: "All Mobiles",      category: "mobiles" },
        ],
      },
      {
        title: "Tablets",
        items: [
          { id: "tablets", name: "Tablets", category: "mobiles", keywords: ["iPad", "Tab"] },
        ],
      },
    ],
  },

  // â”€â”€ 6. ELECTRONICS & ACCESSORIES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "electronics",
    name: "Electronics",
    icon: "ðŸ”Œ",
    sections: [
      {
        title: "Audio",
        items: [
          { id: "headphones", name: "Headphones",           category: "electronics", keywords: ["AirPods", "Airpods", "Beats", "Headphone"] },
          { id: "earphones",  name: "Earphones",            category: "electronics", keywords: ["Earphone", "Earbuds"] },
          { id: "speakers",   name: "Speakers",             category: "electronics", keywords: ["Speaker", "Echo", "HomePod"] },
        ],
      },
      {
        title: "Accessories",
        items: [
          { id: "chargers",  name: "Chargers & Cables",    category: "electronics", keywords: ["Charger", "Cable", "Battery", "Airpower"] },
          { id: "cases",     name: "Cases & Covers",       category: "electronics", keywords: ["Case", "Cover"] },
          { id: "selfie",    name: "Selfie & Camera Gear", category: "electronics", keywords: ["Selfie", "Monopod", "Camera"] },
          { id: "elec-all",  name: "All Electronics",      category: "electronics" },
        ],
      },
    ],
  },

  // â”€â”€ 7. ARISTOCRAT (Bags & Luggage) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "bags-luggage",
    name: "Aristocrat",
    icon: "ðŸ§³",
    sections: [
      {
        title: "Bags & Luggage",
        items: [
          { id: "handbags",  name: "Handbags",           category: "bags-luggage", keywords: ["Handbag", "Bag"] },
          { id: "backpacks", name: "Backpacks",          category: "bags-luggage", keywords: ["Backpack", "Rucksack"] },
          { id: "luggage",   name: "Luggage & Trolleys", category: "bags-luggage", keywords: ["Luggage", "Trolley", "Suitcase"] },
          { id: "wallets",   name: "Wallets & Pouches",  category: "bags-luggage", keywords: ["Wallet", "Pouch", "Purse"] },
          { id: "bags-all",  name: "All Bags & Luggage", category: "bags-luggage" },
        ],
      },
    ],
  },

  // â”€â”€ 8. WOMEN FASHION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "women-fashion",
    name: "Women Fashion",
    icon: "ðŸ‘—",
    sections: [
      {
        title: "Clothing",
        items: [
          { id: "dresses", name: "Dresses & Frocks", category: "women-fashion", keywords: ["Dress", "Frock", "Gown"] },
          { id: "skirts",  name: "Skirts & Corsets", category: "women-fashion", keywords: ["Skirt", "Corset"] },
          { id: "tops",    name: "Tops & Kurtis",    category: "women-fashion", keywords: ["Top", "Kurti", "Blouse"] },
          { id: "sarees",  name: "Sarees",           category: "women-fashion", keywords: ["Saree", "Sari"] },
        ],
      },
      {
        title: "Accessories",
        items: [
          { id: "earrings",   name: "Earrings",        category: "jewellery" },
          { id: "women-watch",name: "Women Watches",   category: "watches", keywords: ["Women", "Woman"] },
          { id: "wf-all",     name: "All Women Fashion", category: "women-fashion" },
        ],
      },
    ],
  },

  // â”€â”€ 9. MEN FASHION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "men-fashion",
    name: "Men Fashion",
    icon: "ðŸ‘”",
    sections: [
      {
        title: "Clothing",
        items: [
          { id: "shirts",   name: "Shirts & T-shirts", category: "men-fashion", keywords: ["Shirt", "Tshirt", "T-shirt"] },
          { id: "suits",    name: "Suits & Blazers",   category: "men-fashion", keywords: ["Suit", "Blazer"] },
          { id: "trousers", name: "Trousers & Jeans",  category: "men-fashion", keywords: ["Trouser", "Jeans", "Pant"] },
          { id: "kurta",    name: "Kurta & Ethnic",    category: "men-fashion", keywords: ["Kurta", "Ethnic"] },
        ],
      },
      {
        title: "Accessories",
        items: [
          { id: "men-watch",  name: "Men Watches",   category: "watches", keywords: ["Rolex", "Longines", "IWC", "Brown Leather"] },
          { id: "sunglasses", name: "Sunglasses",    category: "watches", keywords: ["Glasses", "Sunglasses"] },
          { id: "mf-all",     name: "All Men Fashion", category: "men-fashion" },
        ],
      },
    ],
  },

  // â”€â”€ 10. FOOTWEAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "footwear",
    name: "Footwear",
    icon: "ðŸ‘Ÿ",
    sections: [
      {
        title: "Footwear",
        items: [
          { id: "sneakers",     name: "Sneakers",         category: "footwear", keywords: ["Sneakers", "Nike", "Puma", "Adidas", "Converse"] },
          { id: "formal-shoes", name: "Formal Shoes",     category: "footwear", keywords: ["Formal", "Oxford", "Derby"] },
          { id: "heels",        name: "Heels & Sandals",  category: "footwear", keywords: ["Heel", "Sandal", "Wedge"] },
          { id: "slippers",     name: "Slippers & Flats", category: "footwear", keywords: ["Slipper", "Flat", "Flip Flop"] },
          { id: "footwear-all", name: "All Footwear",     category: "footwear" },
        ],
      },
    ],
  },

  // â”€â”€ 11. BEAUTY, TOYS & SPORTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "beauty",
    name: "Beauty, Toys & Sports",
    icon: "âœ¨",
    sections: [
      {
        title: "Beauty & Personal Care",
        items: [
          { id: "makeup",     name: "Makeup",         category: "beauty", keywords: ["Mascara", "Eyeshadow", "Powder", "Lipstick", "Nail"] },
          { id: "fragrances", name: "Perfumes",       category: "beauty", keywords: ["Eau", "CK One", "Dior", "Chanel", "Gucci"] },
          { id: "bath-body",  name: "Bath & Body",    category: "beauty", keywords: ["Soap", "Body Wash", "Lotion"] },
          { id: "beauty-all", name: "All Beauty",     category: "beauty" },
        ],
      },
      {
        title: "Toys & Games",
        items: [
          { id: "toys-kids",  name: "Kids Toys",   category: "toys", keywords: ["Toy", "Doll", "Lego"] },
          { id: "board-games",name: "Board Games", category: "toys", keywords: ["Game", "Puzzle"] },
          { id: "toys-all",   name: "All Toys",    category: "toys" },
        ],
      },
      {
        title: "Sports & Fitness",
        items: [
          { id: "cricket",    name: "Cricket",              category: "sports", keywords: ["Cricket"] },
          { id: "balls",      name: "Football & Basketball",category: "sports", keywords: ["Football", "Basketball", "Volleyball"] },
          { id: "racket",     name: "Tennis & Badminton",   category: "sports", keywords: ["Tennis", "Shuttlecock"] },
          { id: "sports-all", name: "All Sports",           category: "sports" },
        ],
      },
    ],
  },
];
