import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }){
  const { addItem } = useCart();
  return (
    <div className="card">
      <img src={product.image || 'https://via.placeholder.com/300x150'} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <div style={{display:'flex',gap:'0.5rem'}}>
        <button className="btn" onClick={()=>addItem(product)}>Add</button>
        <Link to={`/product/${product._id}`} className="btn" style={{background:'#28a745'}}>Details</Link>
      </div>
    </div>
  )
}
