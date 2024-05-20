import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ padding: 20 }}>
      <h3>Welcome to Homble Frontend Assessment</h3>
      <p>Pages overview:</p>
      <ul>
        <li>
          <Link to="/product">
            Page 1 - Product list page and create button
          </Link>
        </li>
        <li>
          <Link to="http://localhost:3000/product/7">
            Page 2 - Product detail page (this will take you to id = 7 just for
            demo){" "}
          </Link>
        </li>
        <li>
          <Link to="/dashboard">Page 3 - Product dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
