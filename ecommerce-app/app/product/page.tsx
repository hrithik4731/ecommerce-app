'use client';

import { useEffect, useState } from 'react';

export default function ProductPage() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);

  if (!product) return <p>Loading...</p>;

  const handleBuy = async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: product.id }),
    });
    const data = await res.json();
    window.location.href = data.checkoutUrl;
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
      <button onClick={handleBuy}>Buy Now</button>
    </div>
  );
}