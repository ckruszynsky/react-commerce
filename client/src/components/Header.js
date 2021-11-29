import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import ECommerceIcon from "../assets/ecommerce.svg";

const Header = () => {
  const [isDark, setIsDark] = React.useState(true);

  return (
    <Navbar
      bg={isDark ? "dark" : "light"}
      variant={isDark ? "dark" : "light"}
      fixed="top"
      expand="lg"
      collapseOnSelect
    >
      <Container className="header-container">
        <Navbar.Brand>
          <Link to="/">
            <h2>
              <img src={ECommerceIcon} height="50" width="70" alt="logo" />
              <span className="ml-4">Pro Shop</span>
            </h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className={`nav-links ms-auto ${
              isDark ? "text-light" : "text-dark"
            }`}
          >
            <Link to="/cart">
              <i className={`fas fa-shopping-bag`}></i> Cart
            </Link>
            <Link to="/login">
              <i className="fas fa-user" /> Sign In
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
