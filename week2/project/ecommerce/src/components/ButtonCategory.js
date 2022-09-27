import React, { useEffect, useState } from 'react';

const ButtonCategory = ({ setValue }) => {
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

  async function getCategory(e) {
    const category = e.target.innerText;
    setValue(category);
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
    </>
  );
};

export default ButtonCategory;
