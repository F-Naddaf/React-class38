import React, { useEffect, useState } from 'react';
import ProductsList from './ProductsList';

const ButtonCategory = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://fakestoreapi.com/products/categories',
      );
      const categories = await response.json();
      setCategories(categories);
    })();
  }, []);

  async function getCategory(e) {
    const category = e.target.innerText;
    setCategory(category);
  }
  return (
    <>
      <ul className="category-list">
        {categories.map((category, index) => {
          return (
            <li className="category-button" key={index}>
              <button className="button" onClick={getCategory}>
                {category}
              </button>
            </li>
          );
        })}
      </ul>
      <ProductsList category={category} />
    </>
  );
};

export default ButtonCategory;
