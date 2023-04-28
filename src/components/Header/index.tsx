import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <Navbar expand="lg" className="navy-black navy signika py-3" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link to="/">Fortress</Link>
        </Navbar.Brand>

        <Nav className={active ? "navbar-header open" : "navbar-header"}>
          <Link to="/">
            <span className="nav-link header-link"> Home</span>
          </Link>

          <Link to="/about">
            <span className="nav-link header-link"> About</span>
          </Link>

          <Link to="/service">
            <span className="nav-link header-link"> Services</span>
          </Link>

          <Link to="/service">
            <span className="nav-link header-link"> Contact Us</span>
          </Link>
        </Nav>

        <div
          className={active ? "toggle-button open" : "toggle-button"}
          onClick={() => setActive(!active)}
        >
          <span className="bar1"></span>
          <span className="bar2"></span>
          <span className="bar3"></span>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
