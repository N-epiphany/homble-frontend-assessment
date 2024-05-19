import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../axios";
import { Container, Image, Accordion } from "react-bootstrap";

const ProductDetail = () => {
  const { id } = useParams();
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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <h3>Product not found</h3>
      </Container>
    );
  }
  return (
    <Container className="product-detail-container">
      <div className="product-details-wrapper">
        <div className="product-image-container">
          <Image src={product.productImage} fluid className="product-image" />
        </div>
        <div className="product-details">
          <h2 className="product-name">{product.name}</h2>
          <Accordion>
            <Accordion.Item
              eventKey="0"
              expanded={descriptionExpanded}
              onClick={() => setDescriptionExpanded(!descriptionExpanded)}
            >
              <Accordion.Header>Description</Accordion.Header>
              <Accordion.Body>{product.description}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="1"
              expanded={allergenExpanded}
              onClick={() => setAllergenExpanded(!allergenExpanded)}
            >
              <Accordion.Header>Allergen Information</Accordion.Header>
              <Accordion.Body>{product.allergen_info}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="2"
              expanded={usageExpanded}
              onClick={() => setUsageExpanded(!usageExpanded)}
            >
              <Accordion.Header>Usage Instructions</Accordion.Header>
              <Accordion.Body>{product.cooking_instruction}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <p className="product-price">Price: ₹{product.selling_price}</p>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
