import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "./Header.css";
import servicesList from "../ServicePageComponents/ServiceHelper";

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

          <Dropdown>
            <Dropdown.Toggle className="nav-drop-toggle" id="dropdown-basic">
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
            <span className="nav-link header-link"> Contact Us</span>
          </Link>

          <Link to="/careers">
            <span className="nav-link header-link"> Careers</span>
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
