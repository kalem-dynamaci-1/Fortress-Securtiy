import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" className="navy-black navy signika py-3" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link to="/">Fortress</Link>
        </Navbar.Brand>

        <Navbar.Collapse id="navberScroll" className="justify-content-evenly">
          <Nav>
            <Link to="/">
              <span className="nav-link"> Home</span>
            </Link>

            <Link to="/about">
              <span className="nav-link"> About</span>
            </Link>

            <Link to="/service">
              <span className="nav-link"> Services</span>
            </Link>

            <Link to="/service">
              <span className="nav-link"> Contact Us</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="navbarScroll" className="nav-toggle" />
      </Container>
    </Navbar>
  );
};

export default Header;
