import { useEffect, useState } from "react";
import { getRequest, postRequest } from "../../axios";
import "../../screens/stylesheet/Products.css";

const useProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getRequest("/products");
        setProducts(
          response.data.sort((a, b) => a.selling_price - b.selling_price)
        );
        setLoading(false);
      } catch (error) {
        setError("Something went wrong. Please try again later.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addProduct = async (product) => {
    try {
      const response = await postRequest("/products", product);
      setProducts([...products, response.data]);
      return response.data;
    } catch (error) {
      console.error("Error adding product:", error);
      throw new Error("Failed to add product. Please try again.");
    }
  };

  return {
    products,
    loading,
    error,
    addProduct,
  };
};

export default useProductList;
