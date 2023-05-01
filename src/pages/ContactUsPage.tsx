import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactUsInfo from "../components/ContactUsComponents/ContactInfo";
import FooterForm from "../components/Footer/FooterForm";

const ContactUsPage = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Contact Us</h1>
      <Row>
        <Col md={6} xs={12} className="mb-5">
          <ContactUsInfo />
        </Col>
        <Col md={6} xs={12}>
          <div className="px-4">
            <h2>Send Us A Message: </h2>
            <FooterForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsPage;
