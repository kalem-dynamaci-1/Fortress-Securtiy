import { Row, Col, Container } from "react-bootstrap";
import { FiTruck } from "react-icons/fi";
import { GiCctvCamera, GiPoliceOfficerHead } from "react-icons/gi";
import { MdGpsFixed } from "react-icons/md";
import { serviceObjList } from "./helper";
import "./SecurityServices.css";
import { useState } from "react";
import DisplayServiceContainer from "../DisplayServiceContainer";
import { DisplayServiceType } from "../../types";

function SecurityServices() {
  const [activeObj, setActiveObj] = useState<DisplayServiceType>(
    serviceObjList[0]
  );

  return (
    <>
      <div className="security-services py-4">
        <Container className="secure">
          <div className="subtitle mt-2 mb-1">
            Professional Security Services
          </div>
          <div className="title mb-3">Why Choose Fortress Security Team</div>
          <div className="square" />
          <hr className="service-line" />
          <Row className="my-3">
            <Col
              xs={6}
              md={3}
              onClick={() => setActiveObj(serviceObjList[0])}
              className={`mt-2 hover border-right ${
                activeObj.title === "Cash In Transit Service"
                  ? "blue-color"
                  : "dark-colour"
              }`}
            >
              <FiTruck size={40} />
              <h4 className="fs-3 mt-3">CIT Services</h4>
            </Col>
            <Col
              xs={6}
              md={3}
              onClick={() => setActiveObj(serviceObjList[1])}
              className={`mt-2 hover border-right mobile-cctv-service ${
                activeObj.title === "CCTV & Alarms"
                  ? "blue-color"
                  : "dark-colour"
              }`}
            >
              <GiCctvCamera size={40} />
              <h4 className="fs-3 mt-3">CCTV & Alarms</h4>
            </Col>
            <Col
              xs={6}
              md={3}
              onClick={() => setActiveObj(serviceObjList[2])}
              className={`mt-2 hover border-right  ${
                activeObj.title === "GPS Services"
                  ? "blue-color"
                  : "dark-colour"
              }`}
            >
              <MdGpsFixed size={40} />
              <h4 className="fs-3 mt-3">GPS Services</h4>
            </Col>
            <Col
              xs={6}
              md={3}
              onClick={() => setActiveObj(serviceObjList[3])}
              className={`mt-2 hover ${
                activeObj.title === "Protection Services"
                  ? "blue-color"
                  : "dark-colour"
              }`}
            >
              <GiPoliceOfficerHead size={40} />
              <h4 className="fs-3 mt-3">Protection Officers</h4>
            </Col>
          </Row>
        </Container>
      </div>

      <DisplayServiceContainer serviceObj={activeObj} />
    </>
  );
}

export default SecurityServices;
