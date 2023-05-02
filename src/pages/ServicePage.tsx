import React from "react";
import { Link, useParams } from "react-router-dom";
import servicesList from "../components/ServicePageComponents/ServiceHelper";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import "../components/ServicePageComponents/ServicePage.css";

const ServicePage = () => {
  const { title } = useParams();
  const service = servicesList.find((service) => service.title === title);

  return (
    <Container className="service-page" fluid>
      <h1 className="text-center display-4 mb-5">{service?.title}</h1>
      <Row>
        <Col md={6} className="mb-4">
          <Carousel>
            {service?.img_urls.map((img_url, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={img_url}
                  alt={`Slide ${index}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={6} className="long-description">
          <p>{service?.longDescription}</p>
        </Col>
      </Row>
      <div className="cta-container">
        <Link to="/contact-us" className="cta-button">
          Contact Us
        </Link>
      </div>
    </Container>
  );
};

export default ServicePage;
