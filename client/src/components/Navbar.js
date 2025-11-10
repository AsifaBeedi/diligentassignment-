import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar(){
  const { cart } = useCart();
  const totalItems = cart.reduce((s,i)=>s+i.quantity,0);
  return (
    <nav className="navbar">
      <div><Link to="/" style={{color:'#fff',textDecoration:'none'}}>E-Commerce</Link></div>
      <div><Link to="/cart" style={{color:'#fff',textDecoration:'none'}}>Cart ({totalItems})</Link></div>
    </nav>
  )
}
