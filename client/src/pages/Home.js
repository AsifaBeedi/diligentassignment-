import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function Home(){
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/products')
      .then(r=>r.json())
      .then(d=>{ if(d.success) setProducts(d.data) })
      .catch(err=>console.error(err));
  },[]);

  return (
    <div>
      <h2>Products</h2>
      <div className="products">
        {products.map(p=> <ProductCard key={p._id} product={p} />)}
      </div>
    </div>
  )
}
