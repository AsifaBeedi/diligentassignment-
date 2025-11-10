import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductDetails(){
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addItem } = useCart();

  useEffect(()=>{
    fetch(`http://localhost:5000/products/${id}`)
      .then(r=>r.json())
      .then(d=>{ if(d.success) setProduct(d.data) })
      .catch(err=>console.error(err));
  },[id]);

  if(!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image || 'https://via.placeholder.com/600x300'} alt={product.name} style={{maxWidth:'100%'}} />
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <button className="btn" onClick={()=>addItem(product)}>Add to cart</button>
    </div>
  )
}
