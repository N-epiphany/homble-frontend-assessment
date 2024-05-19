import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeleton = () => {
  return (
    <div className="product-skeleton">
      <div className="product-details-skeleton">
        <div className="product-image-skeleton">
          <Skeleton height={90} width={200} />
        </div>
        <Skeleton height={30} width={200} />
        <Skeleton height={20} width={150} />
        <Skeleton height={20} count={3} />
        <Skeleton height={20} width={100} />
      </div>
    </div>
  );
};

export default ProductSkeleton;
