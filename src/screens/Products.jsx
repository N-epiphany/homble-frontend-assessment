// src/components/Products.js
import React, { useEffect, useState } from "react";
import { fetchAllProducts } from "../axios"; // Adjust the path based on your file structure

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productList = await fetchAllProducts();
        setProducts(productList);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {Object.entries(product).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value.toString()}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
