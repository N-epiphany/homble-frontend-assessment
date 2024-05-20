import React, { useEffect, useState } from "react";
import "./stylesheet/Dashboard.css";
import { getRequest } from "../axios";
import {
  Container,
  Table,
  Button,
  FormControl,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  useEffect(() => {
    getRequest("/dashboard")
      .then((response) => {
        console.log("Fetched Products:", response.data); // Debugging log
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (key === "id" || key === "selling_price") {
        if (direction === "ascending") {
          return a[key] - b[key];
        } else {
          return b[key] - a[key];
        }
      } else {
        if (a[key] < b[key]) {
          return direction === "ascending" ? -1 : 1;
        }
        if (a[key] > b[key]) {
          return direction === "ascending" ? 1 : -1;
        }
        return 0;
      }
    });

    setFilteredProducts(sortedProducts);
  };

  const handleRemove = (id) => {
    const updatedProducts = filteredProducts.filter(
      (product) => product.id !== id
    );
    setFilteredProducts(updatedProducts);
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.id.toString().includes(term)
    );
    setFilteredProducts(filtered);
  };

  const handleSortChange = (key) => {
    handleSort(key);
  };

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? (
        <FontAwesomeIcon icon={faSortUp} />
      ) : (
        <FontAwesomeIcon icon={faSortDown} />
      );
    }
    return <FontAwesomeIcon icon={faSort} />;
  };

  return (
    <Container>
      <h1 className="dashboard-heading">Product Dashboard</h1>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search by Name or ID"
          value={searchTerm}
          onChange={handleSearch}
        />
        <DropdownButton
          as={InputGroup.Append}
          variant="outline-secondary"
          title="Sort By"
          id="input-group-dropdown-2"
          onSelect={handleSortChange}
        >
          <Dropdown.Item eventKey="id">Product ID</Dropdown.Item>
          <Dropdown.Item eventKey="name">Name</Dropdown.Item>
          <Dropdown.Item eventKey="selling_price">Selling Price</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}>
              Product ID {getSortIcon("id")}
            </th>
            <th onClick={() => handleSort("name")}>
              Name {getSortIcon("name")}
            </th>
            <th onClick={() => handleSort("selling_price")}>
              Selling Price {getSortIcon("selling_price")}
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.selling_price}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleRemove(product.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Dashboard;
