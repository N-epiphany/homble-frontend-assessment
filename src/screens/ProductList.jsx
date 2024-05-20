import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import ProductSkeleton from "../components/ProductSkeleton";
import AddProductModal from "../components/AddProductModal";
import useProductList from "../components/hooks/useProductList";
import "./stylesheet/Products.css";

const ProductList = () => {
  const { products, loading, error, addProduct } = useProductList();
  const [modalShow, setModalShow] = useState(false);

  const handleAddProduct = async (product) => {
    try {
      await addProduct(product);
      setModalShow(false);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  if (loading) {
    return (
      <Container>
        <div className="product-grid">
          {Array.from({ length: 6 }, (_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <p>{error}</p>
      </Container>
    );
  }

  return (
    <Container>
      <div className="product-grid">
        {products.map((product) => (
          <Card
            key={product.id}
            className="product-card"
            onClick={() => (window.location.href = `/products/${product.id}`)}
          >
            <Card.Img variant="top" src={product.productImage} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>Price: ₹{product.selling_price}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="add-product">
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Add Product
        </Button>
      </div>

      <AddProductModal
        show={modalShow}
        handleClose={() => setModalShow(false)}
        handleAddProduct={handleAddProduct}
      />
    </Container>
  );
};

export default ProductList;
