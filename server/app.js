const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

// Error handler
app.use(require('./middleware/errorHandler'));

module.exports = app;
