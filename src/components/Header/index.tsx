import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
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

          <Dropdown>
            <Dropdown.Toggle className="nav-drop-toggle" id="dropdown-basic">
              Services
            </Dropdown.Toggle>

            <Dropdown.Menu className="drop-menu-nav">
              <Dropdown.Item as={"div"}>
                <Link to="/service/protection-officers">
                  <span className="nav-link header-link">
                    Protection Officers
                  </span>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item as={"div"}>
                <Link to="/service/personal-protection">
                  <span className="nav-link header-link">
                    {" "}
                    Personal Protection
                  </span>
                </Link>{" "}
              </Dropdown.Item>
              <Dropdown.Item as={"div"}>
                <Link to="/service/cash-in-transit">
                  <span className="nav-link header-link">
                    {" "}
                    Cash In Transit Services
                  </span>
                </Link>{" "}
              </Dropdown.Item>
              <Dropdown.Item as={"div"}>
                <Link to="/service/cctv-and-alarms">
                  <span className="nav-link header-link"> CCTV & Alarms</span>
                </Link>{" "}
              </Dropdown.Item>
              <Dropdown.Item as={"div"}>
                <Link to="/service/alarms-monitoring">
                  <span className="nav-link header-link">
                    {" "}
                    Alarm Monitoring
                  </span>
                </Link>{" "}
              </Dropdown.Item>
              <Dropdown.Item as={"div"}>
                <Link to="/service/courier-service">
                  <span className="nav-link header-link"> Courier Service</span>
                </Link>{" "}
              </Dropdown.Item>
              <Dropdown.Item as={"div"}>
                <Link to="/service/investigations">
                  <span className="nav-link header-link"> Investigations</span>
                </Link>{" "}
              </Dropdown.Item>
              <Dropdown.Item as={"div"}>
                <Link to="/service/special-event-security">
                  <span className="nav-link header-link">
                    {" "}
                    Special Event Security
                  </span>
                </Link>{" "}
              </Dropdown.Item>
              <Dropdown.Item as={"div"}>
                <Link to="/service/gps-services">
                  <span className="nav-link header-link"> GPS Services</span>
                </Link>{" "}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Link to="/contact-us">
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
