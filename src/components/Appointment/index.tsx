import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "./Appointments.css";

const Appointment = () => {
  return (
    <div className="appointments">
      <Container>
        <h3 className="oxygen display-5">
          BOOK YOUR
          <br />{" "}
          <span className="display-3  fw-bold text-uppercase">
            Appointment
          </span>{" "}
        </h3>

        <Form className="oxygen apt-form">
          <Row className="mb-3">
            <Col>
              <Form.Control type="text" placeholder="Your Name" />
            </Col>
            <Col>
              <Form.Control type="tel" placeholder="Phone #" />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Control type="email" placeholder="Email" />
            </Col>
            <Col>
              <Form.Control type="date" placeholder="Date" />
            </Col>
          </Row>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Message"
            className="mb-4"
          />

          <Button variant="outline-light" size="lg">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Appointment;
