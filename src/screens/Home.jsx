import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ padding: 20 }}>
      <h3>Welcome to Homble Frontend Assessment</h3>
      <p>Pages overview:</p>
      <ul>
        <li>
          <Link to="/products">
            Page 1 - Product list page and create button
          </Link>
        </li>
        <li>Page 2 - Product detail page (Check from Product page)</li>
        <li>
          <Link to="/dashboard">Page 3 - Product dashboard</Link>
        </li>
        <li>
          I have hosted this on{" "}
          <Link to="https://homble-frontend-assessment-two.vercel.app/">
            vercel
          </Link>
          . You can test it here{" "}
        </li>
      </ul>
    </div>
  );
};

export default Home;
