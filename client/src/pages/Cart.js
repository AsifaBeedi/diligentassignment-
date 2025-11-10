import React from 'react';
import { useCart } from '../context/CartContext';

export default function Cart(){
  const { cart, removeItem } = useCart();

  const total = cart.reduce((s,i)=>s + (i.product?.price || 0) * i.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      <div className="cart-list">
        {cart.map(i=> (
          <div key={i.productId} className="card" style={{display:'flex',gap:'1rem',alignItems:'center'}}>
            <img src={i.product.image || 'https://via.placeholder.com/80'} alt="" style={{width:80,height:80,objectFit:'cover'}} />
            <div style={{flex:1}}>
              <strong>{i.product.name}</strong>
              <div>Quantity: {i.quantity}</div>
            </div>
            <div>${(i.product.price * i.quantity).toFixed(2)}</div>
            <button className="btn" onClick={()=>removeItem(i.productId)}>Remove</button>
          </div>
        ))}
      </div>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  )
}
