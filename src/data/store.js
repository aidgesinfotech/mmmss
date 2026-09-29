// ==========================================================
//  KISHOO - STORE CONFIG + PRODUCT DATA (demo / learning project)
//  Product names, photos & descriptions: https://dummyjson.com (free demo API)
// ==========================================================

export const STORE = {
  name: "Kishoo",
  themeColor: "#9f2089",
  offerText: "Buy 2 Get 1 Free (Add 3 items to cart)",
  currency: "₹",
  onlineOff: 33,
};

export const CATEGORIES = [
  {
    "id": "grocery",
    "name": "Grocery",
    "img": "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp"
  },
  {
    "id": "home",
    "name": "Home & Kitchen",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/thumbnail.webp"
  },
  {
    "id": "tv-appliances",
    "name": "TV & Appliances",
    "img": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp"
  },
  {
    "id": "smart-gadget",
    "name": "Smart Gadget",
    "img": "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/thumbnail.webp"
  },
  {
    "id": "mobiles",
    "name": "Mobiles",
    "img": "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/thumbnail.webp"
  },
  {
    "id": "electronics",
    "name": "Electronics & Accessories",
    "img": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-pro/thumbnail.webp"
  },
  {
    "id": "bags-luggage",
    "name": "Aristocrat",
    "img": "https://cdn.dummyjson.com/product-images/womens-bags/black-handbag/thumbnail.webp"
  },
  {
    "id": "women-fashion",
    "name": "Women Fashion",
    "img": "https://cdn.dummyjson.com/product-images/tops/blue-frock/thumbnail.webp"
  },
  {
    "id": "men-fashion",
    "name": "Men Fashion",
    "img": "https://cdn.dummyjson.com/product-images/mens-shirts/classic-navy-blazer/thumbnail.webp"
  },
  {
    "id": "footwear",
    "name": "Footwear",
    "img": "https://cdn.dummyjson.com/product-images/mens-shoes/converse-all-star/thumbnail.webp"
  },
  {
    "id": "beauty",
    "name": "Beauty, Toys & Sports",
    "img": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
  },
  {
    "id": "fashion",
    "name": "Fashion",
    "img": "https://cdn.dummyjson.com/product-images/tops/blue-frock/thumbnail.webp"
  },
  {
    "id": "sports",
    "name": "Sports",
    "img": "https://cdn.dummyjson.com/product-images/sports-accessories/american-football/thumbnail.webp"
  },
  {
    "id": "watches",
    "name": "Watches & Eyewear",
    "img": "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/thumbnail.webp"
  },
  {
    "id": "jewellery",
    "name": "Jewellery",
    "img": "https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/thumbnail.webp"
  }
];

export const PRODUCTS = [
  {
    "id": 1,
    "name": "Blue Frock",
    "price": 1609,
    "mrp": 2549,
    "category": "fashion",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/tops/blue-frock/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/tops/blue-frock/1.webp",
      "https://cdn.dummyjson.com/product-images/tops/blue-frock/2.webp",
      "https://cdn.dummyjson.com/product-images/tops/blue-frock/3.webp",
      "https://cdn.dummyjson.com/product-images/tops/blue-frock/4.webp"
    ],
    "desc": "The Blue Frock is a charming and stylish dress for various occasions. With a vibrant blue color and a comfortable design, it adds a touch of elegance to your wardrobe.",
    "rating": 4.2,
    "reviews": 237
  },
  {
    "id": 2,
    "name": "Girl Summer Dress",
    "price": 949,
    "mrp": 1699,
    "category": "fashion",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/1.webp",
      "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/2.webp",
      "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/3.webp",
      "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/4.webp"
    ],
    "desc": "The Girl Summer Dress is a cute and breezy dress designed for warm weather. With playful patterns and lightweight fabric, it's perfect for keeping cool and stylish during the summer.",
    "rating": 4.8,
    "reviews": 374
  },
  {
    "id": 3,
    "name": "Gray Dress",
    "price": 1449,
    "mrp": 2969,
    "category": "fashion",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/tops/gray-dress/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/tops/gray-dress/1.webp",
      "https://cdn.dummyjson.com/product-images/tops/gray-dress/2.webp",
      "https://cdn.dummyjson.com/product-images/tops/gray-dress/3.webp",
      "https://cdn.dummyjson.com/product-images/tops/gray-dress/4.webp"
    ],
    "desc": "The Gray Dress is a versatile and chic option for various occasions. With a neutral gray color, it can be dressed up or down, making it a wardrobe staple for any fashion-forward individual.",
    "rating": 2.7,
    "reviews": 511
  },
  {
    "id": 4,
    "name": "Short Frock",
    "price": 889,
    "mrp": 2119,
    "category": "fashion",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/tops/short-frock/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/tops/short-frock/1.webp",
      "https://cdn.dummyjson.com/product-images/tops/short-frock/2.webp",
      "https://cdn.dummyjson.com/product-images/tops/short-frock/3.webp",
      "https://cdn.dummyjson.com/product-images/tops/short-frock/4.webp"
    ],
    "desc": "The Short Frock is a playful and trendy dress with a shorter length. Ideal for casual outings or special occasions, it combines style and comfort for a fashionable look.",
    "rating": 3.2,
    "reviews": 648
  },
  {
    "id": 5,
    "name": "Tartan Dress",
    "price": 2239,
    "mrp": 3399,
    "category": "fashion",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/tops/tartan-dress/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/tops/tartan-dress/1.webp",
      "https://cdn.dummyjson.com/product-images/tops/tartan-dress/2.webp",
      "https://cdn.dummyjson.com/product-images/tops/tartan-dress/3.webp",
      "https://cdn.dummyjson.com/product-images/tops/tartan-dress/4.webp"
    ],
    "desc": "The Tartan Dress features a classic tartan pattern, bringing a timeless and sophisticated touch to your wardrobe. Perfect for fall and winter, it adds a hint of traditional charm.",
    "rating": 4.1,
    "reviews": 785
  },
  {
    "id": 6,
    "name": "Black Women's Gown",
    "price": 6519,
    "mrp": 11049,
    "category": "fashion",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/3.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/4.webp"
    ],
    "desc": "The Black Women's Gown is an elegant and timeless evening gown. With a sleek black design, it's perfect for formal events and special occasions, exuding sophistication and style.",
    "rating": 3.6,
    "reviews": 922
  },
  {
    "id": 7,
    "name": "Corset Leather With Skirt",
    "price": 3979,
    "mrp": 7649,
    "category": "fashion",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/3.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/4.webp"
    ],
    "desc": "The Corset Leather With Skirt is a bold and edgy ensemble that combines a stylish corset with a matching skirt. Ideal for fashion-forward individuals, it makes a statement at any event.",
    "rating": 3.1,
    "reviews": 1059
  },
  {
    "id": 8,
    "name": "Corset With Black Skirt",
    "price": 3059,
    "mrp": 6799,
    "category": "fashion",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/3.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/4.webp"
    ],
    "desc": "The Corset With Black Skirt is a chic and versatile outfit that pairs a fashionable corset with a classic black skirt. It offers a trendy and coordinated look for various occasions.",
    "rating": 4.5,
    "reviews": 1196
  },
  {
    "id": 9,
    "name": "Dress Pea",
    "price": 2929,
    "mrp": 4249,
    "category": "fashion",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/3.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/4.webp"
    ],
    "desc": "The Dress Pea is a stylish and comfortable dress with a pea pattern. Perfect for casual outings, it adds a playful and fun element to your wardrobe, making it a great choice for day-to-day wear.",
    "rating": 4.9,
    "reviews": 1333
  },
  {
    "id": 10,
    "name": "Marni Red & Black Suit",
    "price": 9489,
    "mrp": 15299,
    "category": "fashion",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/3.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/4.webp"
    ],
    "desc": "The Marni Red & Black Suit is a sophisticated and fashion-forward suit ensemble. With a combination of red and black tones, it showcases a modern design for a bold and confident look.",
    "rating": 4.5,
    "reviews": 1470
  },
  {
    "id": 11,
    "name": "Blue & Black Check Shirt",
    "price": 1399,
    "mrp": 2549,
    "category": "fashion",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/4.webp"
    ],
    "desc": "The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.",
    "rating": 3.6,
    "reviews": 1607
  },
  {
    "id": 12,
    "name": "Gigabyte Aorus Men Tshirt",
    "price": 1019,
    "mrp": 2119,
    "category": "fashion",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/4.webp"
    ],
    "desc": "The Gigabyte Aorus Men Tshirt is a cool and casual shirt for gaming enthusiasts. With the Aorus logo and sleek design, it's perfect for expressing your gaming style.",
    "rating": 3.2,
    "reviews": 1744
  },
  {
    "id": 13,
    "name": "Man Plaid Shirt",
    "price": 1219,
    "mrp": 2969,
    "category": "fashion",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/4.webp"
    ],
    "desc": "The Man Plaid Shirt is a timeless and versatile men's shirt with a classic plaid pattern. Its comfortable fit and casual style make it a wardrobe essential for various occasions.",
    "rating": 3.5,
    "reviews": 1881
  },
  {
    "id": 14,
    "name": "Man Short Sleeve Shirt",
    "price": 1099,
    "mrp": 1699,
    "category": "fashion",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/4.webp"
    ],
    "desc": "The Man Short Sleeve Shirt is a breezy and stylish option for warm days. With a comfortable fit and short sleeves, it's perfect for a laid-back yet polished look.",
    "rating": 2.9,
    "reviews": 2018
  },
  {
    "id": 15,
    "name": "Men Check Shirt",
    "price": 1379,
    "mrp": 2379,
    "category": "fashion",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/4.webp"
    ],
    "desc": "The Men Check Shirt is a classic and versatile shirt featuring a stylish check pattern. Suitable for various occasions, it adds a smart and polished touch to your wardrobe.",
    "rating": 2.7,
    "reviews": 2155
  },
  {
    "id": 16,
    "name": "Blue Women's Handbag",
    "price": 2169,
    "mrp": 4249,
    "category": "fashion",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/3.webp"
    ],
    "desc": "The Blue Women's Handbag is a stylish and spacious accessory for everyday use. With a vibrant blue color and multiple compartments, it combines fashion and functionality.",
    "rating": 2.9,
    "reviews": 2292
  },
  {
    "id": 17,
    "name": "Heshe Women's Leather Bag",
    "price": 4859,
    "mrp": 11049,
    "category": "fashion",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/3.webp"
    ],
    "desc": "The Heshe Women's Leather Bag is a luxurious and high-quality leather bag for the sophisticated woman. With a timeless design and durable craftsmanship, it's a versatile accessory.",
    "rating": 4.9,
    "reviews": 2429
  },
  {
    "id": 18,
    "name": "Prada Women Bag",
    "price": 34679,
    "mrp": 50999,
    "category": "fashion",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/3.webp"
    ],
    "desc": "The Prada Women Bag is an iconic designer bag that exudes elegance and luxury. Crafted with precision and featuring the Prada logo, it's a statement piece for fashion enthusiasts.",
    "rating": 2.7,
    "reviews": 2566
  },
  {
    "id": 19,
    "name": "White Faux Leather Backpack",
    "price": 2069,
    "mrp": 3399,
    "category": "fashion",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/3.webp"
    ],
    "desc": "The White Faux Leather Backpack is a trendy and practical backpack for the modern woman. With a sleek white design and ample storage space, it's perfect for both casual and on-the-go styles.",
    "rating": 3.4,
    "reviews": 2703
  },
  {
    "id": 20,
    "name": "Women Handbag Black",
    "price": 2749,
    "mrp": 5099,
    "category": "fashion",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/3.webp"
    ],
    "desc": "The Women Handbag in Black is a classic and versatile accessory that complements various outfits. With a timeless black color and functional design, it's a must-have in every woman's wardrobe.",
    "rating": 2.9,
    "reviews": 2840
  },
  {
    "id": 21,
    "name": "Nike Air Jordan 1 Red And Black",
    "price": 5989,
    "mrp": 12749,
    "category": "fashion",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/4.webp"
    ],
    "desc": "The Nike Air Jordan 1 in Red and Black is an iconic basketball sneaker known for its stylish design and high-performance features, making it a favorite among sneaker enthusiasts and athletes.",
    "rating": 4.8,
    "reviews": 2977
  },
  {
    "id": 22,
    "name": "Nike Baseball Cleats",
    "price": 2719,
    "mrp": 6799,
    "category": "fashion",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/4.webp"
    ],
    "desc": "Nike Baseball Cleats are designed for maximum traction and performance on the baseball field. They provide stability and support for players during games and practices.",
    "rating": 3.9,
    "reviews": 3114
  },
  {
    "id": 23,
    "name": "Puma Future Rider Trainers",
    "price": 4899,
    "mrp": 7649,
    "category": "fashion",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/4.webp"
    ],
    "desc": "The Puma Future Rider Trainers offer a blend of retro style and modern comfort. Perfect for casual wear, these trainers provide a fashionable and comfortable option for everyday use.",
    "rating": 4.9,
    "reviews": 3251
  },
  {
    "id": 24,
    "name": "Sports Sneakers Off White & Red",
    "price": 5809,
    "mrp": 10199,
    "category": "fashion",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/4.webp"
    ],
    "desc": "The Sports Sneakers in Off White and Red combine style and functionality, making them a fashionable choice for sports enthusiasts. The red and off-white color combination adds a bold and energetic touch.",
    "rating": 4.8,
    "reviews": 3388
  },
  {
    "id": 25,
    "name": "Sports Sneakers Off White Red",
    "price": 4669,
    "mrp": 9349,
    "category": "fashion",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/4.webp"
    ],
    "desc": "Another variant of the Sports Sneakers in Off White Red, featuring a unique design. These sneakers offer style and comfort for casual occasions.",
    "rating": 4.7,
    "reviews": 3525
  },
  {
    "id": 26,
    "name": "Black & Brown Slipper",
    "price": 729,
    "mrp": 1699,
    "category": "fashion",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/3.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/4.webp"
    ],
    "desc": "The Black & Brown Slipper is a comfortable and stylish choice for casual wear. Featuring a blend of black and brown colors, it adds a touch of sophistication to your relaxation.",
    "rating": 2.5,
    "reviews": 3662
  },
  {
    "id": 27,
    "name": "Calvin Klein Heel Shoes",
    "price": 4559,
    "mrp": 6799,
    "category": "fashion",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/3.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/4.webp"
    ],
    "desc": "Calvin Klein Heel Shoes are elegant and sophisticated, designed for formal occasions. With a classic design and high-quality materials, they complement your stylish ensemble.",
    "rating": 4.9,
    "reviews": 3799
  },
  {
    "id": 28,
    "name": "Golden Shoes Woman",
    "price": 2549,
    "mrp": 4249,
    "category": "fashion",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/3.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/4.webp"
    ],
    "desc": "The Golden Shoes for Women are a glamorous choice for special occasions. Featuring a golden hue and stylish design, they add a touch of luxury to your outfit.",
    "rating": 3.3,
    "reviews": 3936
  },
  {
    "id": 29,
    "name": "Pampi Shoes",
    "price": 1349,
    "mrp": 2549,
    "category": "fashion",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/3.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/4.webp"
    ],
    "desc": "Pampi Shoes offer a blend of comfort and style for everyday use. With a versatile design, they are suitable for various casual occasions, providing a trendy and relaxed look.",
    "rating": 3.1,
    "reviews": 4073
  },
  {
    "id": 30,
    "name": "Red Shoes",
    "price": 1369,
    "mrp": 2969,
    "category": "fashion",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/3.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/4.webp"
    ],
    "desc": "The Red Shoes make a bold statement with their vibrant red color. Whether for a party or a casual outing, these shoes add a pop of color and style to your wardrobe.",
    "rating": 3.3,
    "reviews": 4210
  },
  {
    "id": 31,
    "name": "Amazon Echo Plus",
    "price": 5949,
    "mrp": 8499,
    "category": "electronics",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/2.webp"
    ],
    "desc": "The Amazon Echo Plus is a smart speaker with built-in Alexa voice control. It features premium sound quality and serves as a hub for controlling smart home devices.",
    "rating": 5,
    "reviews": 4347
  },
  {
    "id": 32,
    "name": "Apple Airpods",
    "price": 6959,
    "mrp": 11049,
    "category": "electronics",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/2.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/3.webp"
    ],
    "desc": "The Apple Airpods offer a seamless wireless audio experience. With easy pairing, high-quality sound, and Siri integration, they are perfect for on-the-go listening.",
    "rating": 4.2,
    "reviews": 4484
  },
  {
    "id": 33,
    "name": "Apple AirPods Max Silver",
    "price": 26179,
    "mrp": 46749,
    "category": "electronics",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp"
    ],
    "desc": "The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.",
    "rating": 3.5,
    "reviews": 4621
  },
  {
    "id": 34,
    "name": "Apple Airpower Wireless Charger",
    "price": 3329,
    "mrp": 6799,
    "category": "electronics",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpower-wireless-charger/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpower-wireless-charger/1.webp"
    ],
    "desc": "The Apple AirPower Wireless Charger provides a convenient way to charge your compatible Apple devices wirelessly. Simply place your devices on the charging mat for effortless charging.",
    "rating": 3.7,
    "reviews": 4758
  },
  {
    "id": 35,
    "name": "Apple HomePod Mini Cosmic Grey",
    "price": 3569,
    "mrp": 8499,
    "category": "electronics",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-homepod-mini-cosmic-grey/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-homepod-mini-cosmic-grey/1.webp"
    ],
    "desc": "The Apple HomePod Mini in Cosmic Grey is a compact smart speaker that delivers impressive audio and integrates seamlessly with the Apple ecosystem for a smart home experience.",
    "rating": 4.6,
    "reviews": 4895
  },
  {
    "id": 36,
    "name": "Apple iPhone Charger",
    "price": 1119,
    "mrp": 1699,
    "category": "electronics",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-iphone-charger/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-iphone-charger/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-iphone-charger/2.webp"
    ],
    "desc": "The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.",
    "rating": 4.2,
    "reviews": 132
  },
  {
    "id": 37,
    "name": "Apple MagSafe Battery Pack",
    "price": 5009,
    "mrp": 8499,
    "category": "electronics",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/2.webp"
    ],
    "desc": "The Apple MagSafe Battery Pack is a portable and convenient way to add extra battery life to your MagSafe-compatible iPhone. Attach it magnetically for a secure connection.",
    "rating": 3.6,
    "reviews": 269
  },
  {
    "id": 38,
    "name": "Apple Watch Series 4 Gold",
    "price": 15469,
    "mrp": 29749,
    "category": "electronics",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/2.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/3.webp"
    ],
    "desc": "The Apple Watch Series 4 in Gold is a stylish and advanced smartwatch with features like heart rate monitoring, fitness tracking, and a beautiful Retina display.",
    "rating": 2.7,
    "reviews": 406
  },
  {
    "id": 39,
    "name": "Beats Flex Wireless Earphones",
    "price": 1909,
    "mrp": 4249,
    "category": "electronics",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/1.webp"
    ],
    "desc": "The Beats Flex Wireless Earphones offer a comfortable and versatile audio experience. With magnetic earbuds and up to 12 hours of battery life, they are ideal for everyday use.",
    "rating": 4.2,
    "reviews": 543
  },
  {
    "id": 40,
    "name": "iPhone 12 Silicone Case with MagSafe Plum",
    "price": 1759,
    "mrp": 2549,
    "category": "electronics",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/2.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/3.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/4.webp"
    ],
    "desc": "The iPhone 12 Silicone Case with MagSafe in Plum is a stylish and protective case designed for the iPhone 12. It features MagSafe technology for easy attachment of accessories.",
    "rating": 3.6,
    "reviews": 680
  },
  {
    "id": 41,
    "name": "Monopod",
    "price": 1049,
    "mrp": 1699,
    "category": "electronics",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/mobile-accessories/monopod/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/monopod/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/monopod/2.webp"
    ],
    "desc": "The Monopod is a versatile camera accessory for stable and adjustable shooting. Perfect for capturing selfies, group photos, and videos with ease.",
    "rating": 4.4,
    "reviews": 817
  },
  {
    "id": 42,
    "name": "Selfie Lamp with iPhone",
    "price": 699,
    "mrp": 1269,
    "category": "electronics",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-lamp-with-iphone/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-lamp-with-iphone/1.webp"
    ],
    "desc": "The Selfie Lamp with iPhone is a portable and adjustable LED light designed to enhance your selfies and video calls. Attach it to your iPhone for well-lit photos.",
    "rating": 3.6,
    "reviews": 954
  },
  {
    "id": 43,
    "name": "Selfie Stick Monopod",
    "price": 529,
    "mrp": 1099,
    "category": "electronics",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-stick-monopod/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-stick-monopod/1.webp"
    ],
    "desc": "The Selfie Stick Monopod is a extendable and foldable device for capturing the perfect selfie or group photo. Compatible with smartphones and cameras.",
    "rating": 3.9,
    "reviews": 1091
  },
  {
    "id": 44,
    "name": "TV Studio Camera Pedestal",
    "price": 17419,
    "mrp": 42499,
    "category": "electronics",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/mobile-accessories/tv-studio-camera-pedestal/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/tv-studio-camera-pedestal/1.webp"
    ],
    "desc": "The TV Studio Camera Pedestal is a professional-grade camera support system for smooth and precise camera movements in a studio setting. Ideal for broadcast and production.",
    "rating": 2.8,
    "reviews": 1228
  },
  {
    "id": 45,
    "name": "iPhone 5s",
    "price": 11049,
    "mrp": 16999,
    "category": "electronics",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/3.webp"
    ],
    "desc": "The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.",
    "rating": 2.8,
    "reviews": 1365
  },
  {
    "id": 46,
    "name": "iPhone 6",
    "price": 14789,
    "mrp": 25499,
    "category": "electronics",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/3.webp"
    ],
    "desc": "The iPhone 6 is a stylish and capable smartphone with a larger display and improved performance. It introduced new features and design elements, making it a popular choice in its time.",
    "rating": 3.4,
    "reviews": 1502
  },
  {
    "id": 47,
    "name": "iPhone 13 Pro",
    "price": 47679,
    "mrp": 93499,
    "category": "electronics",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/3.webp"
    ],
    "desc": "The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system, high-performance chip, and stunning display. It offers advanced features for users who demand top-notch technology.",
    "rating": 4.1,
    "reviews": 1639
  },
  {
    "id": 48,
    "name": "iPhone X",
    "price": 33659,
    "mrp": 76499,
    "category": "electronics",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/3.webp"
    ],
    "desc": "The iPhone X is a flagship smartphone featuring a bezel-less OLED display, facial recognition technology (Face ID), and impressive performance. It represents a milestone in iPhone design and innovation.",
    "rating": 2.5,
    "reviews": 1776
  },
  {
    "id": 49,
    "name": "Oppo A57",
    "price": 14449,
    "mrp": 21249,
    "category": "electronics",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/3.webp"
    ],
    "desc": "The Oppo A57 is a mid-range smartphone known for its sleek design and capable features. It offers a balance of performance and affordability, making it a popular choice.",
    "rating": 3.9,
    "reviews": 1913
  },
  {
    "id": 50,
    "name": "Oppo F19 Pro Plus",
    "price": 20739,
    "mrp": 33999,
    "category": "electronics",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/3.webp"
    ],
    "desc": "The Oppo F19 Pro Plus is a feature-rich smartphone with a focus on camera capabilities. It boasts advanced photography features and a powerful performance for a premium user experience.",
    "rating": 3.5,
    "reviews": 2050
  },
  {
    "id": 51,
    "name": "Oppo K1",
    "price": 13769,
    "mrp": 25499,
    "category": "electronics",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/3.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/4.webp"
    ],
    "desc": "The Oppo K1 series offers a range of smartphones with various features and specifications. Known for their stylish design and reliable performance, the Oppo K1 series caters to diverse user preferences.",
    "rating": 4.3,
    "reviews": 2187
  },
  {
    "id": 52,
    "name": "Realme C35",
    "price": 5989,
    "mrp": 12749,
    "category": "electronics",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/3.webp"
    ],
    "desc": "The Realme C35 is a budget-friendly smartphone with a focus on providing essential features for everyday use. It offers a reliable performance and user-friendly experience.",
    "rating": 4.2,
    "reviews": 2324
  },
  {
    "id": 53,
    "name": "Realme X",
    "price": 10199,
    "mrp": 25499,
    "category": "electronics",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/smartphones/realme-x/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/realme-x/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/realme-x/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/realme-x/3.webp"
    ],
    "desc": "The Realme X is a mid-range smartphone known for its sleek design and impressive display. It offers a good balance of performance and camera capabilities for users seeking a quality device.",
    "rating": 3.7,
    "reviews": 2461
  },
  {
    "id": 54,
    "name": "Realme XT",
    "price": 19039,
    "mrp": 29749,
    "category": "electronics",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/3.webp"
    ],
    "desc": "The Realme XT is a feature-rich smartphone with a focus on camera technology. It comes equipped with advanced camera sensors, delivering high-quality photos and videos for photography enthusiasts.",
    "rating": 4.6,
    "reviews": 2598
  },
  {
    "id": 55,
    "name": "Samsung Galaxy S7",
    "price": 14529,
    "mrp": 25499,
    "category": "electronics",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/3.webp"
    ],
    "desc": "The Samsung Galaxy S7 is a flagship smartphone known for its sleek design and advanced features. It features a high-resolution display, powerful camera, and robust performance.",
    "rating": 3.3,
    "reviews": 2735
  },
  {
    "id": 56,
    "name": "Samsung Galaxy S8",
    "price": 21249,
    "mrp": 42499,
    "category": "electronics",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/3.webp"
    ],
    "desc": "The Samsung Galaxy S8 is a premium smartphone with an Infinity Display, offering a stunning visual experience. It boasts advanced camera capabilities and cutting-edge technology.",
    "rating": 4.4,
    "reviews": 2872
  },
  {
    "id": 57,
    "name": "Samsung Galaxy S10",
    "price": 25579,
    "mrp": 59499,
    "category": "electronics",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/3.webp"
    ],
    "desc": "The Samsung Galaxy S10 is a flagship device featuring a dynamic AMOLED display, versatile camera system, and powerful performance. It represents innovation and excellence in smartphone technology.",
    "rating": 3.1,
    "reviews": 3009
  },
  {
    "id": 58,
    "name": "Vivo S1",
    "price": 14239,
    "mrp": 21249,
    "category": "electronics",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/3.webp"
    ],
    "desc": "The Vivo S1 is a stylish and mid-range smartphone offering a blend of design and performance. It features a vibrant display, capable camera system, and reliable functionality.",
    "rating": 3.5,
    "reviews": 3146
  },
  {
    "id": 59,
    "name": "Vivo V9",
    "price": 15299,
    "mrp": 25499,
    "category": "electronics",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/3.webp"
    ],
    "desc": "The Vivo V9 is a smartphone known for its sleek design and emphasis on capturing high-quality selfies. It features a notch display, dual-camera setup, and a modern design.",
    "rating": 3.6,
    "reviews": 3283
  },
  {
    "id": 60,
    "name": "Vivo X21",
    "price": 22519,
    "mrp": 42499,
    "category": "electronics",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/3.webp"
    ],
    "desc": "The Vivo X21 is a premium smartphone with a focus on cutting-edge technology. It features an in-display fingerprint sensor, a high-resolution display, and advanced camera capabilities.",
    "rating": 4.3,
    "reviews": 3420
  },
  {
    "id": 61,
    "name": "iPad Mini 2021 Starlight",
    "price": 19549,
    "mrp": 42499,
    "category": "electronics",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/1.webp",
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/2.webp",
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/3.webp",
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/4.webp"
    ],
    "desc": "The iPad Mini 2021 in Starlight is a compact and powerful tablet from Apple. Featuring a stunning Retina display, powerful A-series chip, and a sleek design, it offers a premium tablet experience.",
    "rating": 3.2,
    "reviews": 3557
  },
  {
    "id": 62,
    "name": "Samsung Galaxy Tab S8 Plus Grey",
    "price": 35699,
    "mrp": 50999,
    "category": "electronics",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/1.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/2.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/3.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/4.webp"
    ],
    "desc": "The Samsung Galaxy Tab S8 Plus in Grey is a high-performance Android tablet by Samsung. With a large AMOLED display, powerful processor, and S Pen support, it's ideal for productivity and entertainment.",
    "rating": 4.7,
    "reviews": 3694
  },
  {
    "id": 63,
    "name": "Samsung Galaxy Tab White",
    "price": 18739,
    "mrp": 29749,
    "category": "electronics",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/1.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/2.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/3.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/4.webp"
    ],
    "desc": "The Samsung Galaxy Tab in White is a sleek and versatile Android tablet. With a vibrant display, long-lasting battery, and a range of features, it offers a great user experience for various tasks.",
    "rating": 3.7,
    "reviews": 3831
  },
  {
    "id": 64,
    "name": "Essence Mascara Lash Princess",
    "price": 479,
    "mrp": 849,
    "category": "beauty",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
    ],
    "desc": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    "rating": 2.6,
    "reviews": 3968
  },
  {
    "id": 65,
    "name": "Eyeshadow Palette with Mirror",
    "price": 829,
    "mrp": 1699,
    "category": "beauty",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"
    ],
    "desc": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    "rating": 2.9,
    "reviews": 4105
  },
  {
    "id": 66,
    "name": "Powder Canister",
    "price": 529,
    "mrp": 1269,
    "category": "beauty",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"
    ],
    "desc": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    "rating": 4.6,
    "reviews": 4242
  },
  {
    "id": 67,
    "name": "Red Lipstick",
    "price": 729,
    "mrp": 1099,
    "category": "beauty",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp"
    ],
    "desc": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    "rating": 4.4,
    "reviews": 4379
  },
  {
    "id": 68,
    "name": "Red Nail Polish",
    "price": 449,
    "mrp": 759,
    "category": "beauty",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp"
    ],
    "desc": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    "rating": 4.3,
    "reviews": 4516
  },
  {
    "id": 69,
    "name": "Attitude Super Leaves Hand Soap",
    "price": 389,
    "mrp": 759,
    "category": "beauty",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/1.webp",
      "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/2.webp",
      "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/3.webp"
    ],
    "desc": "Attitude Super Leaves Hand Soap is a natural and nourishing hand soap enriched with the goodness of super leaves. It cleanses and moisturizes your hands, leaving them feeling fresh and soft.",
    "rating": 3.2,
    "reviews": 4653
  },
  {
    "id": 70,
    "name": "Olay Ultra Moisture Shea Butter Body Wash",
    "price": 489,
    "mrp": 1099,
    "category": "beauty",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/1.webp",
      "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/2.webp",
      "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/3.webp"
    ],
    "desc": "Olay Ultra Moisture Shea Butter Body Wash is a luxurious body wash that hydrates and nourishes your skin with the moisturizing power of shea butter. Enjoy a rich lather and silky-smooth skin.",
    "rating": 4.5,
    "reviews": 4790
  },
  {
    "id": 71,
    "name": "Vaseline Men Body and Face Lotion",
    "price": 589,
    "mrp": 849,
    "category": "beauty",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/1.webp",
      "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/2.webp",
      "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/3.webp"
    ],
    "desc": "Vaseline Men Body and Face Lotion is a specially formulated lotion designed to provide long-lasting moisture to men's skin. It absorbs quickly and helps keep the skin hydrated and healthy.",
    "rating": 3.2,
    "reviews": 4927
  },
  {
    "id": 72,
    "name": "Calvin Klein CK One",
    "price": 2629,
    "mrp": 4249,
    "category": "beauty",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp"
    ],
    "desc": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    "rating": 4.4,
    "reviews": 164
  },
  {
    "id": 73,
    "name": "Chanel Coco Noir Eau De",
    "price": 6079,
    "mrp": 11049,
    "category": "beauty",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp"
    ],
    "desc": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
    "rating": 4.3,
    "reviews": 301
  },
  {
    "id": 74,
    "name": "Dior J'adore",
    "price": 3669,
    "mrp": 7649,
    "category": "beauty",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/3.webp"
    ],
    "desc": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
    "rating": 3.8,
    "reviews": 438
  },
  {
    "id": 75,
    "name": "Dolce Shine Eau de",
    "price": 2439,
    "mrp": 5949,
    "category": "beauty",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/3.webp"
    ],
    "desc": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
    "rating": 4,
    "reviews": 575
  },
  {
    "id": 76,
    "name": "Gucci Bloom Eau de",
    "price": 4419,
    "mrp": 6799,
    "category": "beauty",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/3.webp"
    ],
    "desc": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
    "rating": 2.7,
    "reviews": 712
  },
  {
    "id": 77,
    "name": "Bamboo Spatula",
    "price": 389,
    "mrp": 679,
    "category": "home",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/1.webp"
    ],
    "desc": "The Bamboo Spatula is a versatile kitchen tool made from eco-friendly bamboo. Ideal for flipping, stirring, and serving various dishes.",
    "rating": 3.3,
    "reviews": 849
  },
  {
    "id": 78,
    "name": "Black Aluminium Cup",
    "price": 259,
    "mrp": 509,
    "category": "home",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/1.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/2.webp"
    ],
    "desc": "The Black Aluminium Cup is a stylish and durable cup suitable for both hot and cold beverages. Its sleek black design adds a modern touch to your drinkware collection.",
    "rating": 4.5,
    "reviews": 986
  },
  {
    "id": 79,
    "name": "Black Whisk",
    "price": 369,
    "mrp": 849,
    "category": "home",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-whisk/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-whisk/1.webp"
    ],
    "desc": "The Black Whisk is a kitchen essential for whisking and beating ingredients. Its ergonomic handle and sleek design make it a practical and stylish tool.",
    "rating": 3.9,
    "reviews": 1123
  },
  {
    "id": 80,
    "name": "Boxed Blender",
    "price": 2309,
    "mrp": 3399,
    "category": "home",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/1.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/2.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/3.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/4.webp"
    ],
    "desc": "The Boxed Blender is a powerful and compact blender perfect for smoothies, shakes, and more. Its convenient design and multiple functions make it a versatile kitchen appliance.",
    "rating": 4.6,
    "reviews": 1260
  },
  {
    "id": 81,
    "name": "Carbon Steel Wok",
    "price": 1549,
    "mrp": 2549,
    "category": "home",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/carbon-steel-wok/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/carbon-steel-wok/1.webp"
    ],
    "desc": "The Carbon Steel Wok is a versatile cooking pan suitable for stir-frying, sautéing, and deep frying. Its sturdy construction ensures even heat distribution for delicious meals.",
    "rating": 4.1,
    "reviews": 1397
  },
  {
    "id": 82,
    "name": "Chopping Board",
    "price": 589,
    "mrp": 1099,
    "category": "home",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/chopping-board/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/chopping-board/1.webp"
    ],
    "desc": "The Chopping Board is an essential kitchen accessory for food preparation. Made from durable material, it provides a safe and hygienic surface for cutting and chopping.",
    "rating": 3.7,
    "reviews": 1534
  },
  {
    "id": 83,
    "name": "Citrus Squeezer Yellow",
    "price": 359,
    "mrp": 759,
    "category": "home",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/citrus-squeezer-yellow/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/citrus-squeezer-yellow/1.webp"
    ],
    "desc": "The Citrus Squeezer in Yellow is a handy tool for extracting juice from citrus fruits. Its vibrant color adds a cheerful touch to your kitchen gadgets.",
    "rating": 4.6,
    "reviews": 1671
  },
  {
    "id": 84,
    "name": "Egg Slicer",
    "price": 239,
    "mrp": 589,
    "category": "home",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/egg-slicer/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/egg-slicer/1.webp"
    ],
    "desc": "The Egg Slicer is a convenient tool for slicing boiled eggs evenly. It's perfect for salads, sandwiches, and other dishes where sliced eggs are desired.",
    "rating": 3.1,
    "reviews": 1808
  },
  {
    "id": 85,
    "name": "Electric Stove",
    "price": 2719,
    "mrp": 4249,
    "category": "home",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/1.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/2.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/3.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/4.webp"
    ],
    "desc": "The Electric Stove provides a portable and efficient cooking solution. Ideal for small kitchens or as an additional cooking surface for various culinary needs.",
    "rating": 4.1,
    "reviews": 1945
  },
  {
    "id": 86,
    "name": "Fine Mesh Strainer",
    "price": 479,
    "mrp": 849,
    "category": "home",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/fine-mesh-strainer/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/fine-mesh-strainer/1.webp"
    ],
    "desc": "The Fine Mesh Strainer is a versatile tool for straining liquids and sifting dry ingredients. Its fine mesh ensures efficient filtering for smooth cooking and baking.",
    "rating": 3,
    "reviews": 2082
  },
  {
    "id": 87,
    "name": "Fork",
    "price": 169,
    "mrp": 339,
    "category": "home",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/fork/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/fork/1.webp"
    ],
    "desc": "The Fork is a classic utensil for various dining and serving purposes. Its durable and ergonomic design makes it a reliable choice for everyday use.",
    "rating": 3.1,
    "reviews": 2219
  },
  {
    "id": 88,
    "name": "Glass",
    "price": 179,
    "mrp": 419,
    "category": "home",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/glass/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/glass/1.webp"
    ],
    "desc": "The Glass is a versatile and elegant drinking vessel suitable for a variety of beverages. Its clear design allows you to enjoy the colors and textures of your drinks.",
    "rating": 4,
    "reviews": 2356
  },
  {
    "id": 89,
    "name": "Grater Black",
    "price": 619,
    "mrp": 929,
    "category": "home",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/grater-black/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/grater-black/1.webp"
    ],
    "desc": "The Grater in Black is a handy kitchen tool for grating cheese, vegetables, and more. Its sleek design and sharp blades make food preparation efficient and easy.",
    "rating": 3.2,
    "reviews": 2493
  },
  {
    "id": 90,
    "name": "Hand Blender",
    "price": 1779,
    "mrp": 2969,
    "category": "home",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/hand-blender/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/hand-blender/1.webp"
    ],
    "desc": "The Hand Blender is a versatile kitchen appliance for blending, pureeing, and mixing. Its compact design and powerful motor make it a convenient tool for various recipes.",
    "rating": 3.9,
    "reviews": 2630
  },
  {
    "id": 91,
    "name": "Ice Cube Tray",
    "price": 269,
    "mrp": 509,
    "category": "home",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/ice-cube-tray/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/ice-cube-tray/1.webp"
    ],
    "desc": "The Ice Cube Tray is a practical accessory for making ice cubes in various shapes. Perfect for keeping your drinks cool and adding a fun element to your beverages.",
    "rating": 4.7,
    "reviews": 2767
  },
  {
    "id": 92,
    "name": "Kitchen Sieve",
    "price": 309,
    "mrp": 679,
    "category": "home",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/kitchen-sieve/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/kitchen-sieve/1.webp"
    ],
    "desc": "The Kitchen Sieve is a versatile tool for sifting and straining dry and wet ingredients. Its fine mesh design ensures smooth results in your cooking and baking.",
    "rating": 3.1,
    "reviews": 2904
  },
  {
    "id": 93,
    "name": "Knife",
    "price": 889,
    "mrp": 1269,
    "category": "home",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/knife/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/knife/1.webp"
    ],
    "desc": "The Knife is an essential kitchen tool for chopping, slicing, and dicing. Its sharp blade and ergonomic handle make it a reliable choice for food preparation.",
    "rating": 3.3,
    "reviews": 3041
  },
  {
    "id": 94,
    "name": "Lunch Box",
    "price": 689,
    "mrp": 1099,
    "category": "home",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/lunch-box/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/lunch-box/1.webp"
    ],
    "desc": "The Lunch Box is a convenient and portable container for packing and carrying your meals. With compartments for different foods, it's perfect for on-the-go dining.",
    "rating": 4.9,
    "reviews": 3178
  },
  {
    "id": 95,
    "name": "Microwave Oven",
    "price": 4279,
    "mrp": 7649,
    "category": "home",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/1.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/2.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/3.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/4.webp"
    ],
    "desc": "The Microwave Oven is a versatile kitchen appliance for quick and efficient cooking, reheating, and defrosting. Its compact size makes it suitable for various kitchen setups.",
    "rating": 4.8,
    "reviews": 3315
  },
  {
    "id": 96,
    "name": "Mug Tree Stand",
    "price": 669,
    "mrp": 1359,
    "category": "home",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/mug-tree-stand/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/mug-tree-stand/1.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/mug-tree-stand/2.webp"
    ],
    "desc": "The Mug Tree Stand is a stylish and space-saving solution for organizing your mugs. Keep your favorite mugs easily accessible and neatly displayed in your kitchen.",
    "rating": 2.6,
    "reviews": 3452
  },
  {
    "id": 97,
    "name": "Pan",
    "price": 889,
    "mrp": 2119,
    "category": "home",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/pan/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/pan/1.webp"
    ],
    "desc": "The Pan is a versatile and essential cookware item for frying, sautéing, and cooking various dishes. Its non-stick coating ensures easy food release and cleanup.",
    "rating": 2.8,
    "reviews": 3589
  },
  {
    "id": 98,
    "name": "Plate",
    "price": 219,
    "mrp": 339,
    "category": "home",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/plate/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/plate/1.webp"
    ],
    "desc": "The Plate is a classic and essential dishware item for serving meals. Its durable and stylish design makes it suitable for everyday use or special occasions.",
    "rating": 3.7,
    "reviews": 3726
  },
  {
    "id": 99,
    "name": "Red Tongs",
    "price": 349,
    "mrp": 589,
    "category": "home",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/red-tongs/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/red-tongs/1.webp"
    ],
    "desc": "The Red Tongs are versatile kitchen tongs suitable for various cooking and serving tasks. Their vibrant color adds a pop of excitement to your kitchen utensils.",
    "rating": 4.4,
    "reviews": 3863
  },
  {
    "id": 100,
    "name": "Silver Pot With Glass Cap",
    "price": 1769,
    "mrp": 3399,
    "category": "home",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/silver-pot-with-glass-cap/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/silver-pot-with-glass-cap/1.webp"
    ],
    "desc": "The Silver Pot with Glass Cap is a stylish and functional cookware item for boiling, simmering, and preparing delicious meals. Its glass cap allows you to monitor cooking progress.",
    "rating": 3.2,
    "reviews": 4000
  },
  {
    "id": 101,
    "name": "Slotted Turner",
    "price": 339,
    "mrp": 759,
    "category": "home",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/slotted-turner/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/slotted-turner/1.webp"
    ],
    "desc": "The Slotted Turner is a kitchen utensil designed for flipping and turning food items. Its slotted design allows excess liquid to drain, making it ideal for frying and sautéing.",
    "rating": 3.4,
    "reviews": 4137
  },
  {
    "id": 102,
    "name": "Spice Rack",
    "price": 1169,
    "mrp": 1699,
    "category": "home",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/spice-rack/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/spice-rack/1.webp"
    ],
    "desc": "The Spice Rack is a convenient organizer for your spices and seasonings. Keep your kitchen essentials within reach and neatly arranged with this stylish spice rack.",
    "rating": 4.9,
    "reviews": 4274
  },
  {
    "id": 103,
    "name": "Spoon",
    "price": 259,
    "mrp": 419,
    "category": "home",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/spoon/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/spoon/1.webp"
    ],
    "desc": "The Spoon is a versatile kitchen utensil for stirring, serving, and tasting. Its ergonomic design and durable construction make it an essential tool for every kitchen.",
    "rating": 4,
    "reviews": 4411
  },
  {
    "id": 104,
    "name": "Tray",
    "price": 789,
    "mrp": 1439,
    "category": "home",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/tray/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/tray/1.webp"
    ],
    "desc": "The Tray is a functional and decorative item for serving snacks, appetizers, or drinks. Its stylish design makes it a versatile accessory for entertaining guests.",
    "rating": 4.6,
    "reviews": 4548
  },
  {
    "id": 105,
    "name": "Wooden Rolling Pin",
    "price": 489,
    "mrp": 1019,
    "category": "home",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/wooden-rolling-pin/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/wooden-rolling-pin/1.webp"
    ],
    "desc": "The Wooden Rolling Pin is a classic kitchen tool for rolling out dough for baking. Its smooth surface and sturdy handles make it easy to achieve uniform thickness.",
    "rating": 2.9,
    "reviews": 4685
  },
  {
    "id": 106,
    "name": "Yellow Peeler",
    "price": 209,
    "mrp": 509,
    "category": "home",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/kitchen-accessories/yellow-peeler/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/yellow-peeler/1.webp"
    ],
    "desc": "The Yellow Peeler is a handy tool for peeling fruits and vegetables with ease. Its bright yellow color adds a cheerful touch to your kitchen gadgets.",
    "rating": 4.2,
    "reviews": 4822
  },
  {
    "id": 107,
    "name": "Decoration Swing",
    "price": 3309,
    "mrp": 5099,
    "category": "home",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/1.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/2.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/3.webp"
    ],
    "desc": "The Decoration Swing is a charming addition to your home decor. Crafted with intricate details, it adds a touch of elegance and whimsy to any room.",
    "rating": 3.2,
    "reviews": 4959
  },
  {
    "id": 108,
    "name": "Family Tree Photo Frame",
    "price": 1479,
    "mrp": 2549,
    "category": "home",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/home-decoration/family-tree-photo-frame/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/home-decoration/family-tree-photo-frame/1.webp"
    ],
    "desc": "The Family Tree Photo Frame is a sentimental and stylish way to display your cherished family memories. With multiple photo slots, it tells the story of your loved ones.",
    "rating": 4.5,
    "reviews": 196
  },
  {
    "id": 109,
    "name": "House Showpiece Plant",
    "price": 1729,
    "mrp": 3399,
    "category": "home",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/1.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/2.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/3.webp"
    ],
    "desc": "The House Showpiece Plant is an artificial plant that brings a touch of nature to your home without the need for maintenance. It adds greenery and style to any space.",
    "rating": 4.7,
    "reviews": 333
  },
  {
    "id": 110,
    "name": "Plant Pot",
    "price": 559,
    "mrp": 1269,
    "category": "home",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/1.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/2.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/3.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/4.webp"
    ],
    "desc": "The Plant Pot is a stylish container for your favorite plants. With a sleek design, it complements your indoor or outdoor garden, adding a modern touch to your plant display.",
    "rating": 3,
    "reviews": 470
  },
  {
    "id": 111,
    "name": "Table Lamp",
    "price": 2889,
    "mrp": 4249,
    "category": "home",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/1.webp"
    ],
    "desc": "The Table Lamp is a functional and decorative lighting solution for your living space. With a modern design, it provides both ambient and task lighting, enhancing the atmosphere.",
    "rating": 3.6,
    "reviews": 607
  },
  {
    "id": 112,
    "name": "Brown Leather Belt Watch",
    "price": 4669,
    "mrp": 7649,
    "category": "watches",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/3.webp"
    ],
    "desc": "The Brown Leather Belt Watch is a stylish timepiece with a classic design. Featuring a genuine leather strap and a sleek dial, it adds a touch of sophistication to your look.",
    "rating": 4.2,
    "reviews": 744
  },
  {
    "id": 113,
    "name": "Longines Master Collection",
    "price": 68849,
    "mrp": 127499,
    "category": "watches",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/3.webp"
    ],
    "desc": "The Longines Master Collection is an elegant and refined watch known for its precision and craftsmanship. With a timeless design, it's a symbol of luxury and sophistication.",
    "rating": 3.9,
    "reviews": 881
  },
  {
    "id": 114,
    "name": "Rolex Cellini Date Black Dial",
    "price": 359549,
    "mrp": 764999,
    "category": "watches",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/3.webp"
    ],
    "desc": "The Rolex Cellini Date with Black Dial is a classic and prestigious watch. With a black dial and date complication, it exudes sophistication and is a symbol of Rolex's heritage.",
    "rating": 5,
    "reviews": 1018
  },
  {
    "id": 115,
    "name": "Rolex Cellini Moonphase",
    "price": 441999,
    "mrp": 1104999,
    "category": "watches",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/3.webp"
    ],
    "desc": "The Rolex Cellini Moonphase is a masterpiece of horology, featuring a moon phase complication and exquisite design. It reflects Rolex's commitment to precision and elegance.",
    "rating": 2.6,
    "reviews": 1155
  },
  {
    "id": 116,
    "name": "Rolex Datejust",
    "price": 598399,
    "mrp": 934999,
    "category": "watches",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/3.webp"
    ],
    "desc": "The Rolex Datejust is an iconic and versatile timepiece with a date window. Known for its timeless design and reliability, it's a symbol of Rolex's watchmaking excellence.",
    "rating": 3.7,
    "reviews": 1292
  },
  {
    "id": 117,
    "name": "Rolex Submariner Watch",
    "price": 678299,
    "mrp": 1189999,
    "category": "watches",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/3.webp"
    ],
    "desc": "The Rolex Submariner is a legendary dive watch with a rich history. Known for its durability and water resistance, it's a symbol of adventure and exploration.",
    "rating": 2.7,
    "reviews": 1429
  },
  {
    "id": 118,
    "name": "IWC Ingenieur Automatic Steel",
    "price": 212499,
    "mrp": 424999,
    "category": "watches",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/3.webp"
    ],
    "desc": "The IWC Ingenieur Automatic Steel watch is a durable and sophisticated timepiece. With a stainless steel case and automatic movement, it combines precision and style for watch enthusiasts.",
    "rating": 2.9,
    "reviews": 1566
  },
  {
    "id": 119,
    "name": "Rolex Cellini Moonphase",
    "price": 584799,
    "mrp": 1359999,
    "category": "watches",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/womens-watches/rolex-cellini-moonphase/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-watches/rolex-cellini-moonphase/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-watches/rolex-cellini-moonphase/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-watches/rolex-cellini-moonphase/3.webp"
    ],
    "desc": "The Rolex Cellini Moonphase watch is a masterpiece of horology. Featuring a moon phase complication, it showcases the craftsmanship and elegance that Rolex is renowned for.",
    "rating": 3.8,
    "reviews": 1703
  },
  {
    "id": 120,
    "name": "Rolex Datejust Women",
    "price": 626449,
    "mrp": 934999,
    "category": "watches",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/womens-watches/rolex-datejust-women/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-watches/rolex-datejust-women/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-watches/rolex-datejust-women/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-watches/rolex-datejust-women/3.webp"
    ],
    "desc": "The Rolex Datejust Women's watch is an iconic timepiece designed for women. With a timeless design and a date complication, it offers both elegance and functionality.",
    "rating": 2.9,
    "reviews": 1840
  },
  {
    "id": 121,
    "name": "Watch Gold for Women",
    "price": 40799,
    "mrp": 67999,
    "category": "watches",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/womens-watches/watch-gold-for-women/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-watches/watch-gold-for-women/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-watches/watch-gold-for-women/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-watches/watch-gold-for-women/3.webp"
    ],
    "desc": "The Gold Women's Watch is a stunning accessory that combines luxury and style. Featuring a gold-plated case and a chic design, it adds a touch of glamour to any outfit.",
    "rating": 4.2,
    "reviews": 1977
  },
  {
    "id": 122,
    "name": "Women's Wrist Watch",
    "price": 5859,
    "mrp": 11049,
    "category": "watches",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/womens-watches/women's-wrist-watch/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-watches/women's-wrist-watch/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-watches/women's-wrist-watch/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-watches/women's-wrist-watch/3.webp"
    ],
    "desc": "The Women's Wrist Watch is a versatile and fashionable timepiece for everyday wear. With a comfortable strap and a simple yet elegant design, it complements various styles.",
    "rating": 3.5,
    "reviews": 2114
  },
  {
    "id": 123,
    "name": "Black Sun Glasses",
    "price": 1169,
    "mrp": 2549,
    "category": "watches",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/1.webp",
      "https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/2.webp",
      "https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/3.webp"
    ],
    "desc": "The Black Sun Glasses are a classic and stylish choice, featuring a sleek black frame and tinted lenses. They provide both UV protection and a fashionable look.",
    "rating": 4.4,
    "reviews": 2251
  },
  {
    "id": 124,
    "name": "Classic Sun Glasses",
    "price": 1479,
    "mrp": 2119,
    "category": "watches",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/1.webp",
      "https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/2.webp",
      "https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/3.webp"
    ],
    "desc": "The Classic Sun Glasses offer a timeless design with a neutral frame and UV-protected lenses. These sunglasses are versatile and suitable for various occasions.",
    "rating": 3.9,
    "reviews": 2388
  },
  {
    "id": 125,
    "name": "Green and Black Glasses",
    "price": 1869,
    "mrp": 2969,
    "category": "watches",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/sunglasses/green-and-black-glasses/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sunglasses/green-and-black-glasses/1.webp",
      "https://cdn.dummyjson.com/product-images/sunglasses/green-and-black-glasses/2.webp",
      "https://cdn.dummyjson.com/product-images/sunglasses/green-and-black-glasses/3.webp"
    ],
    "desc": "The Green and Black Glasses feature a bold combination of green and black colors, adding a touch of vibrancy to your eyewear collection. They are both stylish and eye-catching.",
    "rating": 4.6,
    "reviews": 2525
  },
  {
    "id": 126,
    "name": "Party Glasses",
    "price": 949,
    "mrp": 1699,
    "category": "watches",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/1.webp",
      "https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/2.webp",
      "https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/3.webp"
    ],
    "desc": "The Party Glasses are designed to add flair to your party outfit. With unique shapes or colorful frames, they're perfect for adding a playful touch to your look during celebrations.",
    "rating": 2.8,
    "reviews": 2662
  },
  {
    "id": 127,
    "name": "Sunglasses",
    "price": 959,
    "mrp": 1949,
    "category": "watches",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/sunglasses/sunglasses/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sunglasses/sunglasses/1.webp",
      "https://cdn.dummyjson.com/product-images/sunglasses/sunglasses/2.webp",
      "https://cdn.dummyjson.com/product-images/sunglasses/sunglasses/3.webp"
    ],
    "desc": "The Sunglasses offer a classic and simple design with a focus on functionality. These sunglasses provide essential UV protection while maintaining a timeless look.",
    "rating": 3,
    "reviews": 2799
  },
  {
    "id": 128,
    "name": "Green Crystal Earring",
    "price": 1069,
    "mrp": 2549,
    "category": "jewellery",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/3.webp"
    ],
    "desc": "The Green Crystal Earring is a dazzling accessory that features a vibrant green crystal. With a classic design, it adds a touch of elegance to your ensemble, perfect for formal or special occasions.",
    "rating": 4,
    "reviews": 2936
  },
  {
    "id": 129,
    "name": "Green Oval Earring",
    "price": 1399,
    "mrp": 2119,
    "category": "jewellery",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/womens-jewellery/green-oval-earring/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-jewellery/green-oval-earring/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-jewellery/green-oval-earring/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-jewellery/green-oval-earring/3.webp"
    ],
    "desc": "The Green Oval Earring is a stylish and versatile accessory with a unique oval shape. Whether for casual or dressy occasions, its green hue and contemporary design make it a standout piece.",
    "rating": 3.6,
    "reviews": 3073
  },
  {
    "id": 130,
    "name": "Tropical Earring",
    "price": 999,
    "mrp": 1699,
    "category": "jewellery",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/womens-jewellery/tropical-earring/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-jewellery/tropical-earring/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-jewellery/tropical-earring/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-jewellery/tropical-earring/3.webp"
    ],
    "desc": "The Tropical Earring is a fun and playful accessory inspired by tropical elements. Featuring vibrant colors and a lively design, it's perfect for adding a touch of summer to your look.",
    "rating": 4.4,
    "reviews": 3210
  },
  {
    "id": 131,
    "name": "American Football",
    "price": 879,
    "mrp": 1699,
    "category": "sports",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/sports-accessories/american-football/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/american-football/1.webp"
    ],
    "desc": "The American Football is a classic ball used in American football games. It is designed for throwing and catching, making it an essential piece of equipment for the sport.",
    "rating": 4.9,
    "reviews": 3347
  },
  {
    "id": 132,
    "name": "Baseball Ball",
    "price": 339,
    "mrp": 759,
    "category": "sports",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-ball/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-ball/1.webp"
    ],
    "desc": "The Baseball Ball is a standard baseball used in baseball games. It features a durable leather cover and is designed for pitching, hitting, and fielding in the game of baseball.",
    "rating": 2.6,
    "reviews": 3484
  },
  {
    "id": 133,
    "name": "Baseball Glove",
    "price": 1459,
    "mrp": 2119,
    "category": "sports",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/1.webp",
      "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/2.webp",
      "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/3.webp"
    ],
    "desc": "The Baseball Glove is a protective glove worn by baseball players. It is designed to catch and field the baseball, providing players with comfort and control during the game.",
    "rating": 4,
    "reviews": 3621
  },
  {
    "id": 134,
    "name": "Basketball",
    "price": 789,
    "mrp": 1269,
    "category": "sports",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/sports-accessories/basketball/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/basketball/1.webp"
    ],
    "desc": "The Basketball is a standard ball used in basketball games. It is designed for dribbling, shooting, and passing in the game of basketball, suitable for both indoor and outdoor play.",
    "rating": 4.7,
    "reviews": 3758
  },
  {
    "id": 135,
    "name": "Basketball Rim",
    "price": 1869,
    "mrp": 3399,
    "category": "sports",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/sports-accessories/basketball-rim/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/basketball-rim/1.webp"
    ],
    "desc": "The Basketball Rim is a sturdy hoop and net assembly mounted on a basketball backboard. It provides a target for shooting and scoring in the game of basketball.",
    "rating": 4.6,
    "reviews": 3895
  },
  {
    "id": 136,
    "name": "Cricket Ball",
    "price": 529,
    "mrp": 1099,
    "category": "sports",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-ball/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-ball/1.webp"
    ],
    "desc": "The Cricket Ball is a hard leather ball used in the sport of cricket. It is bowled and batted in the game, and its hardness and seam contribute to the dynamics of cricket play.",
    "rating": 3.5,
    "reviews": 4032
  },
  {
    "id": 137,
    "name": "Cricket Bat",
    "price": 1049,
    "mrp": 2549,
    "category": "sports",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-bat/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-bat/1.webp"
    ],
    "desc": "The Cricket Bat is an essential piece of cricket equipment used by batsmen to hit the cricket ball. It is made of wood and comes in various sizes and designs.",
    "rating": 3.2,
    "reviews": 4169
  },
  {
    "id": 138,
    "name": "Cricket Helmet",
    "price": 2479,
    "mrp": 3819,
    "category": "sports",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/1.webp",
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/2.webp",
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/3.webp",
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/4.webp"
    ],
    "desc": "The Cricket Helmet is a protective headgear worn by cricket players, especially batsmen and wicketkeepers. It provides protection against fast bowling and bouncers.",
    "rating": 4.7,
    "reviews": 4306
  },
  {
    "id": 139,
    "name": "Cricket Wicket",
    "price": 1479,
    "mrp": 2549,
    "category": "sports",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-wicket/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-wicket/1.webp"
    ],
    "desc": "The Cricket Wicket is a set of three stumps and two bails, forming a wicket used in the sport of cricket. Batsmen aim to protect the wicket while scoring runs.",
    "rating": 4.7,
    "reviews": 4443
  },
  {
    "id": 140,
    "name": "Feather Shuttlecock",
    "price": 259,
    "mrp": 509,
    "category": "sports",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/sports-accessories/feather-shuttlecock/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/feather-shuttlecock/1.webp"
    ],
    "desc": "The Feather Shuttlecock is used in the sport of badminton. It features natural feathers and is designed for high-speed play, providing stability and accuracy during matches.",
    "rating": 2.9,
    "reviews": 4580
  },
  {
    "id": 141,
    "name": "Football",
    "price": 669,
    "mrp": 1529,
    "category": "sports",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/sports-accessories/football/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/football/1.webp"
    ],
    "desc": "The Football, also known as a soccer ball, is the standard ball used in the sport of football (soccer). It is designed for kicking and passing in the game.",
    "rating": 3.3,
    "reviews": 4717
  },
  {
    "id": 142,
    "name": "Golf Ball",
    "price": 579,
    "mrp": 849,
    "category": "sports",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/sports-accessories/golf-ball/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/golf-ball/1.webp"
    ],
    "desc": "The Golf Ball is a small ball used in the sport of golf. It features dimples on its surface, providing aerodynamic lift and distance when struck by a golf club.",
    "rating": 4.3,
    "reviews": 4854
  },
  {
    "id": 143,
    "name": "Iron Golf",
    "price": 2589,
    "mrp": 4249,
    "category": "sports",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/sports-accessories/iron-golf/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/iron-golf/1.webp"
    ],
    "desc": "The Iron Golf is a type of golf club designed for various golf shots. It features a solid metal head and is used for approach shots, chipping, and other golfing techniques.",
    "rating": 4.4,
    "reviews": 4991
  },
  {
    "id": 144,
    "name": "Metal Baseball Bat",
    "price": 1379,
    "mrp": 2549,
    "category": "sports",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/sports-accessories/metal-baseball-bat/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/metal-baseball-bat/1.webp"
    ],
    "desc": "The Metal Baseball Bat is a durable and lightweight baseball bat made from metal alloys. It is commonly used in baseball games for hitting and batting practice.",
    "rating": 4.7,
    "reviews": 228
  },
  {
    "id": 145,
    "name": "Tennis Ball",
    "price": 279,
    "mrp": 589,
    "category": "sports",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/sports-accessories/tennis-ball/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/tennis-ball/1.webp"
    ],
    "desc": "The Tennis Ball is a standard ball used in the sport of tennis. It is designed for bouncing and hitting with tennis rackets during matches or practice sessions.",
    "rating": 4.1,
    "reviews": 365
  },
  {
    "id": 146,
    "name": "Tennis Racket",
    "price": 1699,
    "mrp": 4249,
    "category": "sports",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/sports-accessories/tennis-racket/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/tennis-racket/1.webp"
    ],
    "desc": "The Tennis Racket is an essential piece of equipment used in the sport of tennis. It features a frame with strings and a grip, allowing players to hit the tennis ball.",
    "rating": 4,
    "reviews": 502
  },
  {
    "id": 147,
    "name": "Volleyball",
    "price": 649,
    "mrp": 1019,
    "category": "sports",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/sports-accessories/volleyball/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/volleyball/1.webp"
    ],
    "desc": "The Volleyball is a standard ball used in the sport of volleyball. It is designed for passing, setting, and spiking over the net during volleyball matches.",
    "rating": 3.8,
    "reviews": 639
  },
  {
    "id": 148,
    "name": "Apple",
    "price": 99,
    "mrp": 169,
    "category": "grocery",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp"
    ],
    "desc": "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
    "rating": 4.2,
    "reviews": 776
  },
  {
    "id": 149,
    "name": "Cat Food",
    "price": 379,
    "mrp": 759,
    "category": "grocery",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/cat-food/1.webp"
    ],
    "desc": "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
    "rating": 3.1,
    "reviews": 913
  },
  {
    "id": 150,
    "name": "Cooking Oil",
    "price": 179,
    "mrp": 419,
    "category": "grocery",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/1.webp"
    ],
    "desc": "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
    "rating": 4.8,
    "reviews": 1050
  },
  {
    "id": 151,
    "name": "Cucumber",
    "price": 89,
    "mrp": 129,
    "category": "grocery",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/groceries/cucumber/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/cucumber/1.webp"
    ],
    "desc": "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
    "rating": 4.1,
    "reviews": 1187
  },
  {
    "id": 152,
    "name": "Dog Food",
    "price": 559,
    "mrp": 929,
    "category": "grocery",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/dog-food/1.webp"
    ],
    "desc": "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
    "rating": 4.6,
    "reviews": 1324
  },
  {
    "id": 153,
    "name": "Eggs",
    "price": 129,
    "mrp": 249,
    "category": "grocery",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/eggs/1.webp"
    ],
    "desc": "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
    "rating": 2.5,
    "reviews": 1461
  },
  {
    "id": 154,
    "name": "Green Bell Pepper",
    "price": 49,
    "mrp": 109,
    "category": "grocery",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/1.webp"
    ],
    "desc": "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
    "rating": 3.3,
    "reviews": 1598
  },
  {
    "id": 155,
    "name": "Green Chili Pepper",
    "price": 69,
    "mrp": 99,
    "category": "grocery",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/1.webp"
    ],
    "desc": "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
    "rating": 3.7,
    "reviews": 1735
  },
  {
    "id": 156,
    "name": "Honey Jar",
    "price": 369,
    "mrp": 589,
    "category": "grocery",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/honey-jar/1.webp"
    ],
    "desc": "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
    "rating": 4,
    "reviews": 1872
  },
  {
    "id": 157,
    "name": "Ice Cream",
    "price": 259,
    "mrp": 469,
    "category": "grocery",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/ice-cream/1.webp",
      "https://cdn.dummyjson.com/product-images/groceries/ice-cream/2.webp",
      "https://cdn.dummyjson.com/product-images/groceries/ice-cream/3.webp",
      "https://cdn.dummyjson.com/product-images/groceries/ice-cream/4.webp"
    ],
    "desc": "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
    "rating": 3.4,
    "reviews": 2009
  },
  {
    "id": 158,
    "name": "Juice",
    "price": 169,
    "mrp": 339,
    "category": "grocery",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/juice/1.webp"
    ],
    "desc": "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
    "rating": 3.9,
    "reviews": 2146
  },
  {
    "id": 159,
    "name": "Kiwi",
    "price": 89,
    "mrp": 209,
    "category": "grocery",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/kiwi/1.webp"
    ],
    "desc": "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
    "rating": 4.9,
    "reviews": 2283
  },
  {
    "id": 160,
    "name": "Lemon",
    "price": 69,
    "mrp": 99,
    "category": "grocery",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/groceries/lemon/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/lemon/1.webp"
    ],
    "desc": "Zesty and tangy lemons, versatile for cooking, baking, or making refreshing beverages.",
    "rating": 3.5,
    "reviews": 2420
  },
  {
    "id": 161,
    "name": "Milk",
    "price": 179,
    "mrp": 299,
    "category": "grocery",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/groceries/milk/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/milk/1.webp"
    ],
    "desc": "Fresh and nutritious milk, a staple for various recipes and daily consumption.",
    "rating": 2.6,
    "reviews": 2557
  },
  {
    "id": 162,
    "name": "Mulberry",
    "price": 219,
    "mrp": 419,
    "category": "grocery",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/groceries/mulberry/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/mulberry/1.webp"
    ],
    "desc": "Sweet and juicy mulberries, perfect for snacking or adding to desserts and cereals.",
    "rating": 5,
    "reviews": 2694
  },
  {
    "id": 163,
    "name": "Nescafe Coffee",
    "price": 309,
    "mrp": 679,
    "category": "grocery",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/groceries/nescafe-coffee/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/nescafe-coffee/1.webp"
    ],
    "desc": "Quality coffee from Nescafe, available in various blends for a rich and satisfying cup.",
    "rating": 4.8,
    "reviews": 2831
  },
  {
    "id": 164,
    "name": "Potatoes",
    "price": 129,
    "mrp": 189,
    "category": "grocery",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/groceries/potatoes/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/potatoes/1.webp"
    ],
    "desc": "Versatile and starchy potatoes, great for roasting, mashing, or as a side dish.",
    "rating": 4.8,
    "reviews": 2968
  },
  {
    "id": 165,
    "name": "Protein Powder",
    "price": 1049,
    "mrp": 1699,
    "category": "grocery",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/groceries/protein-powder/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/protein-powder/1.webp"
    ],
    "desc": "Nutrient-packed protein powder, ideal for supplementing your diet with essential proteins.",
    "rating": 4.2,
    "reviews": 3105
  },
  {
    "id": 166,
    "name": "Red Onions",
    "price": 89,
    "mrp": 169,
    "category": "grocery",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/groceries/red-onions/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/red-onions/1.webp"
    ],
    "desc": "Flavorful and aromatic red onions, perfect for adding depth to your savory dishes.",
    "rating": 4.2,
    "reviews": 3242
  },
  {
    "id": 167,
    "name": "Rice",
    "price": 239,
    "mrp": 509,
    "category": "grocery",
    "tag": "Best Deal",
    "img": "https://cdn.dummyjson.com/product-images/groceries/rice/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/rice/1.webp"
    ],
    "desc": "High-quality rice, a staple for various cuisines and a versatile base for many dishes.",
    "rating": 3.2,
    "reviews": 3379
  },
  {
    "id": 168,
    "name": "Soft Drinks",
    "price": 69,
    "mrp": 169,
    "category": "grocery",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/groceries/soft-drinks/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/soft-drinks/1.webp"
    ],
    "desc": "Assorted soft drinks in various flavors, perfect for refreshing beverages.",
    "rating": 4.8,
    "reviews": 3516
  },
  {
    "id": 169,
    "name": "Strawberry",
    "price": 219,
    "mrp": 339,
    "category": "grocery",
    "tag": "",
    "img": "https://cdn.dummyjson.com/product-images/groceries/strawberry/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/strawberry/1.webp"
    ],
    "desc": "Sweet and succulent strawberries, great for snacking, desserts, or blending into smoothies.",
    "rating": 3.1,
    "reviews": 3653
  },
  {
    "id": 170,
    "name": "Tissue Paper Box",
    "price": 119,
    "mrp": 209,
    "category": "grocery",
    "tag": "Hot Sell",
    "img": "https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/1.webp",
      "https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/2.webp"
    ],
    "desc": "Convenient tissue paper box for everyday use, providing soft and absorbent tissues.",
    "rating": 2.7,
    "reviews": 3790
  },
  {
    "id": 171,
    "name": "Water",
    "price": 49,
    "mrp": 99,
    "category": "grocery",
    "tag": "Trending",
    "img": "https://cdn.dummyjson.com/product-images/groceries/water/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/water/1.webp"
    ],
    "desc": "Pure and refreshing bottled water, essential for staying hydrated throughout the day.",
    "rating": 5,
    "reviews": 3927
  }
];

// home feed mein products is order mein dikhte hain
export const FEED_ORDER = [101,71,41,142,11,112,82,52,153,22,123,93,63,164,33,134,3,104,74,44,145,14,115,85,55,156,25,126,96,66,167,36,137,6,107,77,47,148,17,118,88,58,159,28,129,99,69,170,39,140,9,110,80,50,151,20,121,91,61,162,31,132,1,102,72,42,143,12,113,83,53,154,23,124,94,64,165,34,135,4,105,75,45,146,15,116,86,56,157,26,127,97,67,168,37,138,7,108,78,48,149,18,119,89,59,160,29,130,100,70,171,40,141,10,111,81,51,152,21,122,92,62,163,32,133,2,103,73,43,144,13,114,84,54,155,24,125,95,65,166,35,136,5,106,76,46,147,16,117,87,57,158,27,128,98,68,169,38,139,8,109,79,49,150,19,120,90,60,161,30,131];

export function offPercent(mrp, price) {
  return Math.round(((mrp - price) / mrp) * 100);
}
