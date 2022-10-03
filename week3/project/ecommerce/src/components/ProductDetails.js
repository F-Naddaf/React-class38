import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductsContext } from './ProductContext';

const ProductDetails = () => {
  const [products, error, isLoading] = useContext(ProductsContext);
  const { id } = useParams();
  console.log('id', id);
  const getProductById = products.map((product) => product.id === id);

  console.log(getProductById);
  return (
    <>
      {error ? (
        <p className="error-message">{`Something went wrong ${error}!`}</p>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        getProductById.map((product) => (
          <div className="item-container" key={product.id}>
            <h1 className="item-title">{product.title}</h1>
            <div className="item-container-child">
              <img
                className="item-image"
                src={product.image}
                alt={product.title}
              />
              <div className="description-container">
                <p className="item-description">{product.description}</p>
                <p className="product-price">Price: €{product.price}</p>
              </div>
              <Link className="back-btn" to={'/'}>
                <p className="btn">HOME</p>
              </Link>
            </div>
          </div>
        ))
      )}
    </>
  );
};
//   })
// }
// ))
// const [product, setProduct] = useState([]);
// const [error, setError] = useState('');
// const [response, setResponse] = useState('');
// const [isLoading, setIsLoading] = useState(false);
// const url = `https://fakestoreapi.com/products/${id}`;
// useEffect(() => {
//   (async () => {
//     try {
//       const response = await fetch(url);
//       setResponse(response);
//       const product = await response.json();
//       setProduct(product);
//     } catch (error) {
//       setError(error);
//       setIsLoading(true);
//     }
//   })();
// }, [url]);

export default ProductDetails;
