const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product');

dotenv.config({ path: __dirname + '/../.env' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('MONGODB_URI not set in environment');
  process.exit(1);
}

const products = [
  { name: 'Classic T-Shirt', price: 19.99, image: 'https://via.placeholder.com/600x300?text=T-Shirt', description: 'Comfortable cotton t-shirt.' },
  { name: 'Running Shoes', price: 79.99, image: 'https://via.placeholder.com/600x300?text=Shoes', description: 'Lightweight running shoes.' },
  { name: 'Wireless Headphones', price: 129.99, image: 'https://via.placeholder.com/600x300?text=Headphones', description: 'Noise-cancelling over-ear headphones.' },
  { name: 'Coffee Mug', price: 9.99, image: 'https://via.placeholder.com/600x300?text=Mug', description: 'Ceramic mug, 12oz.' }
];

async function run(){
  try{
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB for seeding');
    await Product.deleteMany({});
    const created = await Product.insertMany(products);
    console.log(`Seeded ${created.length} products`);
    process.exit(0);
  }catch(err){
    console.error(err);
    process.exit(1);
  }
}

run();
