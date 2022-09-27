import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ProductDetails() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const product = await response.json();
        setProduct(product);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [url]);
  return (
    <div className="item-container">
      <h1 className="item-title">{product.title}</h1>
      <div className='item-container-child'>
        <div className="description-container">
          <p className="item-description">{product.description}</p>
        </div>
        <img className="item-image" src={product.image} alt={product.title} />
      </div>
      <Link className="back-btn" to={'/'}>
        <p className="btn">Back</p>
      </Link>
    </div>
  );
}
