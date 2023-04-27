import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer py-5 text-center">
      <Container>
        <div className="footer-text">
          <h3 className="fs-4 font-monospace">
            Professional Security Services
          </h3>
          <span className="fs-1">contact us</span>
          <div className="square my-3 mb-5" />

          <span className="footer-btn me-3">Contact Info</span>
          <span className="footer-btn">Service Inquiry</span>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
