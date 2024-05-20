import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../../axios";

const useProductDetail = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const [allergenExpanded, setAllergenExpanded] = useState(false);
  const [usageExpanded, setUsageExpanded] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (!id) {
        setError("Product ID is missing");
        return;
      }
      try {
        setLoading(true);
        const response = await getRequest(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError("Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  return {
    product,
    loading,
    error,
    descriptionExpanded,
    setDescriptionExpanded,
    allergenExpanded,
    setAllergenExpanded,
    usageExpanded,
    setUsageExpanded,
  };
};

export default useProductDetail;
