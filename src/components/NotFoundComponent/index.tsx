import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./NotFoundPage.css";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found-page text-center">
      <Container>
        <Row>
          <Col>
            <h1>404 Not Found</h1>
            <p>The page you requested could not be found.</p>
            <Link to="/">
              <Button variant="primary">Back to Homepage</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NotFoundPage;
