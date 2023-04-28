import React from "react";
import { Container } from "react-bootstrap";
import aboutBg from "../../../assets/img/about-bg.jpg";
import { AiOutlineRight } from "react-icons/ai";
import "./SecurityApproach.css";

const SecurityApproach = () => {
  return (
    <div
      style={{ backgroundImage: `url(${aboutBg})` }}
      className="about-us-area text-white py-5"
    >
      <Container className="approach-container">
        <h2 className=" display-5 fw-bold mb-2">Our Approach to Security</h2>
        <p className="ms-5 mt-2">
          The conventional approach to security and merely understanding the
          markets is no longer sufficient. With criminal activity and the threat
          it poses, to business becoming increasingly sophisticated, we realize
          that the only way to manage and minimize risk, is by being proactive
          in anticipating future losses and designing systems to counter these
          losses. In 2006, Personnel Protection Services Limited, now Fortress
          Security Services Limited, was founded. Fortress Security Services
          Limited is an innovative, professional medium sized security firm with
          demonstrated experience in protective security services. Our
          operational and business philosophy is quite simple: Develop and
          provide the best security service program for our clients. With over
          forty years of experience, training business experts and security
          experts got together and formed this impeccable army in the fight
          against crime to offer unique security services to the public.
        </p>

        <h3 className=" fs-4 my-2">Our motto is to provide:</h3>
        <span className="fst-italic">“Protection Beyond Your Expectation”</span>
        <p className="ms-5 mt-2">
          We provide our Security Officers with practical training techniques
          and modern anticrime strategies which is spearheaded by highly
          competent individuals with experience in private security, military
          training, law enforcement and safety.
        </p>

        <h3 className=" fs-4 my-2">We are committed to:</h3>
        <div>
          <AiOutlineRight className="me-4" />{" "}
          <span className="fs-6">The prevention of losses</span>
        </div>
        <div>
          <AiOutlineRight className="me-4" />{" "}
          <span className="fs-6">
            The protection of life, property and information
          </span>
        </div>
        <div>
          <AiOutlineRight className="me-4" />{" "}
          <span className="fs-6">
            Being recognized as an astute member of the Army in the fight
            against crime.
          </span>
        </div>
        <p className="ms-5 mt-2">
          One of the foundations upon which we have built our business is our
          commitment to service excellence and our customers’ needs are our
          highest priority. Members of our Management team are on call 24/7 to
          help our clients achieve their security objectives and address any
          issue that may arise.
        </p>
        <h3 className=" fs-4 my-2">VISION STATEMENT</h3>
        <p className="ms-5 mt-2">
          It is our vision to be the premier Security Services Provider in
          Trinidad and Tobago and the wider Caribbean by providing Security
          Services and Technological Solutions and Services which cogitates the
          corporate vision and image of our clients, motivate client
          satisfaction and loyalty and to provide economic value. We shall
          achieve excellence through highly inspired Security Professionals
          which shall be mirrored by our clients and our Security Officers and
          the entire community.
        </p>

        <h3 className=" fs-4 my-2">MISSION STATEMENT</h3>
        <p className="ms-5 mt-2">
          Our Mission is to provide our clients with a network of innovative
          security solutions and technology to ensure a safe and secure
          environment capable of attending to the ongoing protection needs which
          would enable safety and security and further realize more effective
          integrated security systems With a strong focus on quality outcomes,
          we guarantee to provide a constant superior service to our clients,
          responding to their needs and providing solutions is only a small part
          of what we achieve.{" "}
        </p>
      </Container>
    </div>
  );
};

export default SecurityApproach;
