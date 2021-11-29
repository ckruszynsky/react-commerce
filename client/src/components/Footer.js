import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container className="text-center py-3">
        <Row>
          <Col>Copyright &copy; {new Date().getFullYear()}</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
