import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router";
import { ProductDetailsCard } from "../components/ProductDetailsCard";
import { ProductImage } from "../components/ProductImage";
import { listProductDetails } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const searchParams = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(searchParams.id));
  }, [dispatch, searchParams]);

  const onAddToCart = () => {
    if (qty === 0) {
      navigate(`/cart/${searchParams.id}?qty=${1}`);
    } else {
      navigate(`/cart/${searchParams.id}?qty=${qty}`);
    }
  };
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        GO BACK
      </Link>
      {loading ? (
        <Row>
          <Loader />
        </Row>
      ) : error ? (
        <Row>
          <Message variant="primary">{error}</Message>
        </Row>
      ) : (
        <>
          <Row className="mb-2">
            <Col sm={12} md={6}>
              {ProductImage(product)}
            </Col>
            <Col sm={12} md={6} className="d-flex align-items-md-stretch">
              {ProductDetailsCard(product, qty, setQty, onAddToCart)}
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductDetailsPage;
