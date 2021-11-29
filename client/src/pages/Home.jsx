import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Row style={{ borderBottom: "1px solid #eee" }}>
        <h1>Latest Products</h1>
      </Row>
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
  );
};

export default Home;
