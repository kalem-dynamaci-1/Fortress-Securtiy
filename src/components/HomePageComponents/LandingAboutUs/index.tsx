import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GoShield } from "react-icons/go";
import { GiCctvCamera } from "react-icons/gi";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./LandingAbout.css";

const LandingPageAboutUs = () => {
  return (
    <div className="landing-about">
      <Container>
        <Row className="align-items-center landing-row">
          <Col xs={12} md={6}>
            <Row>
              <Col>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  delay={100}
                  duration={1}
                  animateOnce={true}
                >
                  <div>
                    <GoShield size={60} />
                    <span className="blue-color fs-3 fw-bold mt-5"> 40+ </span>
                  </div>
                  <p className="fs-5 fw-bold dark-color mt-2">
                    YEARS EXPERIENCE
                  </p>

                  <hr className="landing-line" />
                </AnimationOnScroll>
              </Col>
              <Col>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  delay={350}
                  duration={1}
                  animateOnce={true}
                >
                  <div>
                    <GiCctvCamera size={60} />
                    <span className="blue-color fs-3 fw-bold mt-5"> 200+ </span>
                  </div>
                  <p className="fs-5 fw-bold dark-color mt-2">
                    HAPPY CUSTOMERS
                  </p>

                  <hr className="landing-line" />
                </AnimationOnScroll>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              delay={550}
              duration={1}
              animateOnce={true}
            >
              <div className="dark-color">
                <h3 className="fs-2 fw-bold mb-4">Welcome To Our Company</h3>
                <p>
                  Fortress Security Services Limited is an innovative,
                  professional medium sized security firm with demonstrated
                  experience. We provide high caliber security personnel who
                  have been extensively trained using practical techniques based
                  on modern anticrime strategies.
                </p>
              </div>
            </AnimationOnScroll>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPageAboutUs;
