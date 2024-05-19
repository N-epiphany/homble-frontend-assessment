import React, { useState, useEffect } from "react";
import { getRequest, postRequest } from "../axios"; // Assuming you have a postRequest method defined similarly to getRequest

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [sortedBy, setSortedBy] = useState(null); // 'id', 'price', 'name'
  const [searchTerm, setSearchTerm] = useState("");

 
  useEffect(() => {
    getRequest("/dashboard")
      .then((response) => {
        console.log("Fetched Products in Dashboard:", response.data); // Log the fetched products

        setProducts(
          response.data.products)
        );
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleSort = (criteria) => {
    let sortedProducts = [...products];
    if (criteria === "id") {
      sortedProducts.sort((a, b) => a.id - b.id);
    } else if (criteria === "price") {
      sortedProducts.sort((a, b) => a.selling_price - b.selling_price);
    } else if (criteria === "name") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    setSortedBy(criteria);
    setProducts(sortedProducts);
  };

  const handleCheck = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toString().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search by name or ID"
        value={searchTerm}
        onChange={handleSearch}
      />
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}>Product ID</th>
            <th onClick={() => handleSort("price")}>Selling Price</th>
            <th onClick={() => handleSort("name")}>Product Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.selling_price}</td>
              <td>{product.name}</td>
              <td>
                <button onClick={() => handleCheck(product.id)}>Check</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
