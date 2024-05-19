import React, { useEffect, useState } from "react";
import { getRequest, postRequest } from "../axios"; // Assuming you have a postRequest method defined similarly to getRequest
import { Modal, Button, Form, Container, Card } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import ProductSkeleton from "./components/ProductSkeleton";
import "./Products.css";
import AddProductModal from "./components/AddProductModal";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    getRequest("/products")
      .then((response) => {
        console.log("Fetched Products:", response.data); // Log the fetched products

        setProducts(
          response.data.sort((a, b) => a.selling_price - b.selling_price)
        );
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAddProduct = (product) => {
    postRequest("/products", product)
      .then((response) => {
        console.log("Added Product:", response.data); // Log the response

        setProducts([...products, response.data]);
        setModalShow(false);
      })
      .catch((error) => console.error("Error adding product:", error));
  };

  return (
    <Container>
      <div className="product-grid">
        {loading
          ? Array.from({ length: 6 }, (_, i) => <ProductSkeleton key={i} />)
          : products.map((product) => (
              <Card
                key={product.id}
                className="product-card"
                onClick={() =>
                  (window.location.href = `/product/${product.id}`)
                }
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
