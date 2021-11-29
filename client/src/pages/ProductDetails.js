import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router";
import { ProductDetailsCard } from "../components/ProductDetailsCard";
import { ProductImage } from "../components/ProductImage";

const ProductDetails = () => {
  const searchParams = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${searchParams.id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [searchParams]);

  console.log(product);
  return (
    <>
      {product && (
        <>
          <Link className="btn btn-light my-3" to="/">
            GO BACK
          </Link>
          <Row className="mb-2">
            <Col sm={12} md={6}>
              {ProductImage(product)}
            </Col>
            <Col sm={12} md={6} className="d-flex align-items-md-stretch">
              {ProductDetailsCard(product)}
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductDetails;
