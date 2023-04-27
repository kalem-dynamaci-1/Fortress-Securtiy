import { Row, Col, Container } from "react-bootstrap";
import { DisplayServiceType } from "../../types";
import "./DisplayService.css";

interface Props {
  serviceObj: DisplayServiceType;
}

const DisplayServiceContainer: React.FC<Props> = ({ serviceObj }) => {
  return (
    <div className="py-5 cream-bg">
      <Container>
        <Row>
          <Col md={6}>
            <h3 className="mb-3 text-uppercase fs-2">{serviceObj.title}</h3>
            <p>{serviceObj.description}</p>
          </Col>
          <Col md={6}>
            <img
              src={serviceObj.img_url}
              className="display-service-img"
              alt="example"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DisplayServiceContainer;
