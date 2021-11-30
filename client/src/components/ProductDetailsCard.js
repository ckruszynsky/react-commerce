import React from "react";
import { Row, Col, ListGroup, Card, Button, Form } from "react-bootstrap";
import Rating from "./Rating";

export function ProductDetailsCard(product, qty, setQty, onAddToCart) {
  return (
    <Card className="productDetails">
      <Row>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2 className="text-primary">{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item className="text-black">
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item className="text-black">
              {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col
                  className={
                    product.countInStock > 0 ? "text-primary" : "text-danger"
                  }
                >
                  <strong>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </strong>
                </Col>
              </Row>
            </ListGroup.Item>
            {product.countInStock > 0 && (
              <ListGroup.Item>
                <Row>
                  <Col>Qty</Col>
                  <Col>
                    <Form>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Form>
                  </Col>
                </Row>
              </ListGroup.Item>
            )}
            <ListGroup.Item className="block-item">
              <Button
                className="btn btn-block btn-dark"
                type="button"
                disabled={product.countInStock === 0}
                onClick={onAddToCart}
              >
                Add to Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Card>
  );
}
