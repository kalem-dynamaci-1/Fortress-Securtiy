import React, { useState } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "./Header.css";
import servicesList from "../ServicePageComponents/ServiceHelper";
import fortressLogo from "../../assets/img/fortress-logo.png";

const Header = () => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  return (
    <Navbar expand="lg" className="navy-black navy signika py-3" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Image src={fortressLogo} alt="Fortress Logo" width={80} />
          </Link>
        </Navbar.Brand>

        <Nav className={active ? "navbar-header open" : "navbar-header"}>
          <Link to="/">
            <span
              className={`nav-link header-link me-3 ${
                path === "/" && "active"
              }`}
            >
              {" "}
              Home
            </span>
          </Link>

          <Link to="/about">
            <span
              className={`nav-link header-link me-3 ${
                path === "/about" && "active"
              }`}
            >
              {" "}
              About
            </span>
          </Link>

          <Dropdown className="drop-menu-header me-3">
            <Dropdown.Toggle
              className="nav-drop-toggle"
              as={"span"}
              id="dropdown-basic"
            >
              Services
            </Dropdown.Toggle>

            <Dropdown.Menu className="drop-menu-nav">
              <Dropdown.Item as={"div"}>
                <Link to="/services">
                  <span className="nav-link header-link">See All</span>
                </Link>
              </Dropdown.Item>
              {servicesList.map((service, index) => {
                return (
                  <Dropdown.Item key={index} as={"div"}>
                    <Link to={`/services/${service.title}`}>
                      <span className="nav-link header-link">
                        {service.title}
                      </span>
                    </Link>
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>

          <Link to="/contact-us">
            <span
              className={`nav-link header-link me-3 ${
                path === "/contact-us" && "active"
              }`}
            >
              {" "}
              Contact Us
            </span>
          </Link>

          <Link to="/careers">
            <span
              className={`nav-link header-link me-3 ${
                path === "/careers" && "active"
              }`}
            >
              {" "}
              Careers
            </span>
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
