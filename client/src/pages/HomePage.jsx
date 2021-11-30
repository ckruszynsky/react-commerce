import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { listProducts } from "../actions/productActions";
import { Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Row style={{ borderBottom: "1px solid #eee" }}>
        <h1>Latest Products</h1>
      </Row>
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
          <Row>
            {products &&
              products.map((product) => (
                <Col
                  key={product._id}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
                  className="d-flex align-items-stretch"
                >
                  <ProductCard product={product} />
                </Col>
              ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomePage;
