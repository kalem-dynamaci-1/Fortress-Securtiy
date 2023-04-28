import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
import FooterContactInfo from "./FooterContactInfo";
import FooterForm from "./FooterForm";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  const [contact, setContact] = useState(true);
  const [serviceFrom, setServiceForm] = useState(false);

  const contactClicked = () => {
    setContact(true);
    setServiceForm(false);
  };

  const serviceClicked = () => {
    setContact(false);
    setServiceForm(true);
  };

  return (
    <div className="footer py-5 text-center">
      <Container>
        <div className="footer-text">
          <h3 className="fs-4 font-monospace">
            Professional Security Services
          </h3>
          <span className="fs-1">contact us</span>
          <div className="square my-3 mb-5" />

          <span
            onClick={contactClicked}
            className={
              contact ? "footer-btn me-3 active" : "footer-btn me-3 not-active"
            }
          >
            Contact Info
          </span>
          <span
            onClick={serviceClicked}
            className={
              serviceFrom
                ? "footer-btn me-3 active"
                : "footer-btn me-3 not-active"
            }
          >
            Service Inquiry
          </span>

          <p className="footer-msg mb-5">
            Thank you for choosing Fortresses Security for your security needs.
            Your safety and security are our top priority.
          </p>

          {contact && <FooterContactInfo />}
          {serviceFrom && <FooterForm />}

          <div className="text-muted mt-5">
            <a
              href="https://www.facebook.com/fortresstt/"
              className="text-muted"
            >
              <BsFacebook />
            </a>
            <p className="fs-6 mt-3">
              © 2017 Fortress Security Services. All rights reserved
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
