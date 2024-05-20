import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddProductModal = ({ show, handleClose, handleAddProduct }) => {
  const [product, setNewProduct] = useState({
    name: "",
    description: "",
    allergen_info: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedProduct = setNewProduct({ ...product, [name]: value });

    console.log("Updated Product Data:", updatedProduct);
  };

  const handleSubmit = () => {
    console.log("Submitting Product Data:", product);

    handleAddProduct(product);
    setNewProduct({ name: "", description: "", allergen_info: "" });
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formProductName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              name="name"
              value={product.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formProductDescription" className="mt-3">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product description"
              name="description"
              value={product.description}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formProductAllergenInfo" className="mt-3">
            <Form.Label>Product Allergen Info</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter allergen information"
              name="allergen_info"
              value={product.allergen_info}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add Product
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddProductModal;
