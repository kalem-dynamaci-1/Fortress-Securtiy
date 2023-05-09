import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineAim } from "react-icons/ai";
import { GiPlanetConquest } from "react-icons/gi";
import { MdAssuredWorkload } from "react-icons/md";
import "./MissionStatements.css";
import { statements } from "./helper";

const MissionStatements = () => {
  const [activeStatement, setActiveStatement] = useState(statements[0]);
  return (
    <Container className="py-5">
      <Row>
        <Col
          xs={12}
          md={4}
          className={`text-center statement st-1 ${
            activeStatement === statements[0] ? "active" : ""
          }`}
          onClick={() => setActiveStatement(statements[0])}
        >
          <AiOutlineAim size={50} />
          <h3>Our Mission Statement</h3>
        </Col>
        <Col
          xs={12}
          md={4}
          className={`text-center statement st-2 ${
            activeStatement === statements[1] ? "active" : ""
          }`}
          onClick={() => setActiveStatement(statements[1])}
        >
          <GiPlanetConquest size={50} />
          <h3>Our Vision Statement</h3>
        </Col>
        <Col
          xs={12}
          md={4}
          className={`text-center statement ${
            activeStatement === statements[2] ? "active" : ""
          }`}
          onClick={() => setActiveStatement(statements[2])}
        >
          <MdAssuredWorkload size={50} />
          <h3>Our Motto</h3>
        </Col>
      </Row>
      <p className="mt-5">{activeStatement}</p>
    </Container>
  );
};

export default MissionStatements;
