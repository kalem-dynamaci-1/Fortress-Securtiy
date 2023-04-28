import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./Footer.css";

function FooterForm() {
  return (
    <Form className="footer-form">
      <Row className="mb-3">
        <Col>
          <Form.Control
            type="text"
            placeholder="Your Name"
            className="name-field"
          />
        </Col>
        <Col>
          <Form.Control
            type="text"
            placeholder="Phone"
            className="phone-field"
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Control
            type="email"
            placeholder="Email"
            className="email-field"
          />
        </Col>
        <Col>
          <Form.Control
            type="text"
            placeholder="Reason for Inquiry"
            className="reason-field"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Message"
            className="message-field"
          />
        </Col>
      </Row>

      <Button variant="outline-secondary" className="mt-4" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FooterForm;
