import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsList from './ProductsList';
import useFetch from './useFetch';

const ProductCategory = () => {
  const { products, isLoading, error } = useFetch(
    'https://fakestoreapi.com/products',
  );
  const { category } = useParams();
  const getProductByCategory = products
    .map((product) => product.category)
    .find((productCategory) => productCategory === category);

  const result = products.filter(
    (product) => product.category === getProductByCategory,
  );
  if (!category) {
    return (
      <>
        <ProductsList products={products} error={error} isLoading={isLoading} />
      </>
    );
  } else {
    return (
      <>
        <ProductsList products={result} error={error} isLoading={isLoading} />
      </>
    );
  }
};

export default ProductCategory;
