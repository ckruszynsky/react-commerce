import React from "react";
import { Image } from "react-bootstrap";

export function ProductImage(product) {
  return (
    <Image
      className="productImage"
      src={product.image}
      alt={product.name}
      fluid
    />
  );
}
