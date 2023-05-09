import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import servicesList from "../components/ServicePageComponents/ServiceHelper";
const servicesCategory = [
  "All",
  "monitoring",
  "courier",
  "protection",
  "other",
];

const ServicesPage = () => {
  const [activeCat, setActiveCat] = useState<string>("All");

  const filteredServices = servicesList.filter((service) => {
    if (activeCat === "All") {
      return service;
    }
    return service.category === activeCat;
  });

  return (
    <Container fluid>
      <h1 className="display-2 my-3 text-center fw-bold">Services</h1>

      <Row className="my-4">
        {servicesCategory.map((category, index) => {
          return (
            <Col key={index} sm={3} md={2} xs={6} className="text-center mb-2">
              <Button
                variant={activeCat === category ? "primary" : "outline-primary"}
                onClick={() => setActiveCat(category)}
              >
                {category}
              </Button>
            </Col>
          );
        })}
      </Row>

      <Row>
        {filteredServices.map((service, index) => {
          return (
            <Col key={index} md={6} lg={4} xs={12}>
              <Card className="mb-4" style={{ minHeight: "700px" }}>
                <Card.Img
                  variant="top"
                  src={service.thumbnail}
                  style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{service.title}</Card.Title>
                  <Card.Text>{service.shortDescription}</Card.Text>
                  <Link to={`/services/${service.title}`}>
                    <Button variant="primary">Read More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ServicesPage;
