import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import ECommerceIcon from "../assets/ecommerce.svg";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  const { currentUser } = userLogin;

  const logoutHandler = () => {
    console.log("logging out");
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg={"dark"} variant={"dark"} expand="lg" collapseOnSelect>
        <Container className="header-container">
          <Navbar.Brand>
            <Link to="/">
              <h1>
                <img src={ECommerceIcon} height="45" alt="logo" />
                <span className="ml-4 text-center">Pro Shop</span>
              </h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className={`nav-links ms-auto ml-auto text-dark`}
              style={{ display: "flex", alignItems: "baseline" }}
            >
              <Link to="/cart">
                <i className={`fas fa-shopping-bag`}></i> Cart
              </Link>
              {!currentUser ? (
                <Link to="/login">
                  <i className="fas fa-user" /> Sign In
                </Link>
              ) : (
                <NavDropdown
                  title={currentUser.name}
                  variant="primary"
                  className="profile-nav"
                >
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
