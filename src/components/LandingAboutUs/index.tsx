import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GoShield } from "react-icons/go";
import { GiCctvCamera } from "react-icons/gi";
import "./LandingAbout.css";

const LandingPageAboutUs = () => {
  return (
    <div className="landing-about">
      <Container>
        <Row className="align-items-center landing-row">
          <Col xs={12} md={6}>
            <Row>
              <Col>
                <div>
                  <GoShield size={60} />
                  <span className="blue-color fs-3 fw-bold mt-5"> 10+ </span>
                </div>
                <p className="fs-5 fw-bold dark-color mt-2">YEARS EXPERIENCE</p>

                <hr className="landing-line" />
              </Col>
              <Col>
                <div>
                  <GiCctvCamera size={60} />
                  <span className="blue-color fs-3 fw-bold mt-5"> 200+ </span>
                </div>
                <p className="fs-5 fw-bold dark-color mt-2">HAPPY CUSTOMERS</p>

                <hr className="landing-line" />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <div className="dark-color">
              <h3 className="fs-2 fw-bold mb-4">Welcome To Our Company</h3>
              <p>
                Fortress Security Services Limited is an innovative,
                professional medium sized security firm with demonstrated
                experience. We provide high caliber security personnel who have
                been extensively trained using practical techniques based on
                modern anticrime strategies.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPageAboutUs;
