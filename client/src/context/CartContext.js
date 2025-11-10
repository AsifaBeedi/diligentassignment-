import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }){
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    const raw = localStorage.getItem('cart');
    if(raw) setCart(JSON.parse(raw));
  },[]);

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart));
  },[cart]);

  function addItem(product){
    setCart(prev=>{
      const idx = prev.findIndex(i=>i.productId === product._id);
      if(idx>-1){
        const copy = [...prev]; copy[idx].quantity += 1; return copy;
      }
      return [...prev, { productId: product._id, product, quantity: 1 }];
    });
  }

  function removeItem(productId){
    setCart(prev=>prev.filter(i=>i.productId!==productId));
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext);
