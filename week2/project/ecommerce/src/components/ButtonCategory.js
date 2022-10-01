import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ButtonCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://fakestoreapi.com/products/categories',
      );
      const categories = await response.json();
      setCategories(categories);
    })();
  }, []);

  return (
    <>
      <ul className="category-list">
        {categories.map((category) => {
          return (
            <Link className="category-card" to={`/${category}`} key={category}>
              <li className="category-button">
                <button className="button">{category}</button>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default ButtonCategory;
