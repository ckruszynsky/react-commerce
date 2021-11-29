import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const ProductCard = ({ product }) => {
  const productDetailLink = `/product/${product._id}`;
  return (
    <Card className="productCard my-2  bg-light">
      <Link to={productDetailLink}>
        <Card.Img variant="top" src={product.image} />
      </Link>
      <Card.Body>
        <Card.Title>
          <Link to={productDetailLink}>{product.name}</Link>
        </Card.Title>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        <Card.Text as="h3">{`$${product.price}`}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
