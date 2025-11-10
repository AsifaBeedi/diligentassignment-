import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
