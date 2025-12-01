const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const products = [
  // Men's Category
  {
    name: "Classic Cotton T-Shirt",
    description: "Comfortable cotton t-shirt perfect for everyday wear",
    price: 599,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    category: "Men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 100
  },
  {
    name: "Denim Jacket",
    description: "Classic blue denim jacket with a modern fit",
    price: 2499,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
    category: "Men",
    sizes: ["M", "L", "XL"],
    stock: 50
  },
  {
    name: "Slim Fit Jeans",
    description: "Dark wash slim fit jeans for a sleek look",
    price: 1899,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
    category: "Men",
    sizes: ["S", "M", "L", "XL"],
    stock: 80
  },
  {
    name: "Casual Hoodie",
    description: "Warm and cozy hoodie for casual outings",
    price: 1499,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
    category: "Men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 120
  },
  {
    name: "Formal Dress Shirt",
    description: "Elegant white dress shirt for formal occasions",
    price: 1299,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
    category: "Men",
    sizes: ["S", "M", "L", "XL"],
    stock: 60
  },
  {
    name: "Cargo Pants",
    description: "Comfortable cargo pants with multiple pockets",
    price: 1799,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500",
    category: "Men",
    sizes: ["M", "L", "XL", "XXL"],
    stock: 70
  },
  {
    name: "Bomber Jacket",
    description: "Stylish bomber jacket for winter season",
    price: 3499,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
    category: "Men",
    sizes: ["M", "L", "XL"],
    stock: 40
  },
  
  // Women's Category
  {
    name: "Floral Summer Dress",
    description: "Beautiful floral print dress perfect for summer",
    price: 1999,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
    category: "Women",
    sizes: ["S", "M", "L", "XL"],
    stock: 90
  },
  {
    name: "Women's Blazer",
    description: "Professional blazer for office wear",
    price: 2899,
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500",
    category: "Women",
    sizes: ["S", "M", "L"],
    stock: 55
  },
  {
    name: "Yoga Pants",
    description: "Comfortable stretchy pants for yoga and fitness",
    price: 999,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500",
    category: "Women",
    sizes: ["S", "M", "L", "XL"],
    stock: 150
  },
  {
    name: "Knitted Sweater",
    description: "Cozy knitted sweater for cold weather",
    price: 1699,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500",
    category: "Women",
    sizes: ["S", "M", "L", "XL"],
    stock: 75
  },
  {
    name: "High-Waist Jeans",
    description: "Trendy high-waist jeans with perfect fit",
    price: 2199,
    image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=500",
    category: "Women",
    sizes: ["S", "M", "L"],
    stock: 85
  },
  {
    name: "Cotton Blouse",
    description: "Elegant cotton blouse for casual and formal wear",
    price: 1399,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500",
    category: "Women",
    sizes: ["S", "M", "L", "XL"],
    stock: 95
  },
  {
    name: "Maxi Skirt",
    description: "Flowing maxi skirt for a feminine look",
    price: 1599,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500",
    category: "Women",
    sizes: ["S", "M", "L"],
    stock: 65
  },

  // Kids' Category
  {
    name: "Kids Graphic T-Shirt",
    description: "Fun graphic t-shirt for kids with colorful designs",
    price: 399,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500",
    category: "Kids",
    sizes: ["S", "M", "L"],
    stock: 120
  },
  {
    name: "Kids Denim Shorts",
    description: "Comfortable denim shorts for active kids",
    price: 699,
    image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=500",
    category: "Kids",
    sizes: ["S", "M", "L"],
    stock: 100
  },
  {
    name: "Kids Winter Jacket",
    description: "Warm winter jacket to keep kids cozy",
    price: 1899,
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=500",
    category: "Kids",
    sizes: ["S", "M", "L", "XL"],
    stock: 60
  },
  {
    name: "Kids Hoodie",
    description: "Soft and comfortable hoodie for kids",
    price: 899,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500",
    category: "Kids",
    sizes: ["S", "M", "L"],
    stock: 110
  },
  {
    name: "Kids Sports Pants",
    description: "Athletic pants for active kids",
    price: 799,
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500",
    category: "Kids",
    sizes: ["S", "M", "L", "XL"],
    stock: 90
  },
  {
    name: "Kids Summer Dress",
    description: "Cute summer dress with vibrant patterns",
    price: 999,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=500",
    category: "Kids",
    sizes: ["S", "M", "L"],
    stock: 80
  },
  {
    name: "Kids Polo Shirt",
    description: "Classic polo shirt for kids",
    price: 599,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500",
    category: "Kids",
    sizes: ["S", "M", "L"],
    stock: 95
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected');

    // Clear existing products
    await Product.deleteMany({});
    console.log('🗑️  Cleared existing products');

    // Insert new products
    await Product.insertMany(products);
    console.log('✅ Successfully seeded 21 products');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();