import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeleton = () => {
  return (
    <div className="product-card-skeleton">
      <Skeleton height={300} className="product-card-image" />
      <div className="product-card-body">
        <Skeleton height={20} width={150} className="product-card-title" />
        <Skeleton height={15} width={100} className="product-card-text" />
        <Skeleton height={15} width={80} className="product-card-text" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
