import React from "react";
import JobApplicationForm from "../components/CareerPageComponents/JobApplicationForm";
import { Container } from "react-bootstrap";

const CareersPage = () => {
  return (
    <Container className="py-5">
      <JobApplicationForm />
    </Container>
  );
};

export default CareersPage;
