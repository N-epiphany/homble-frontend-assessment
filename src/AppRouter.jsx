import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import ProductList from "./screens/ProductList";
import Products from "./screens/Products";
import ProductDetail from "./screens/ProductDetails";
import Dashboard from "./screens/Dashboard";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/productinfo" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
