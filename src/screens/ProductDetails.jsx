import React from "react";
import { Container, Image, Accordion } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useProductDetail from "../components/hooks/useProductDetail"; // Assuming hook location

const ProductDetail = () => {
  const { id } = useParams();
  const {
    product,
    loading,
    error,
    descriptionExpanded,
    setDescriptionExpanded,
    allergenExpanded,
    setAllergenExpanded,
    usageExpanded,
    setUsageExpanded,
  } = useProductDetail(id);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <h3>{error}</h3>
      </Container>
    );
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
