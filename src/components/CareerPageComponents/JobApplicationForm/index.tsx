import React, { ChangeEvent, FormEventHandler, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./JobApplication.css";
import { ResumeData } from "../../../types";

function JobApplicationForm() {
  const [formData, setFormData] = useState<ResumeData>({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    phoneNumber: "",
    address: "",
    idType: "",
    idNumber: "",
    gender: "",
    resume: null,
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleIdTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      idType: value,
    }));
  };

  const handleResumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];

      setFormData((prevState) => ({
        ...prevState,
        resume: file,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData); // replace with your own submission logic
  };

  return (
    <div>
      <h1 className="text-center">Job Application Form</h1>
      <Form
        onSubmit={handleSubmit}
        className="job-application-form p-3"
        encType="multipart/form-data"
      >
        <Row className="my-3">
          <Col>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter First Name"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formMiddleName">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleInputChange}
                placeholder="Enter Middle Name"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter Last Name"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter Email"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter Phone Number"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formAddress" className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter Address"
          />
        </Form.Group>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formIdType">
              <Form.Label>ID Type</Form.Label>
              <Form.Control
                as="select"
                name="idType"
                value={formData.idType}
                onChange={handleIdTypeChange}
              >
                <option value="">Select ID Type</option>
                <option value="ID">ID</option>
                <option value="Passport">Passport</option>
                <option value="Drivers permit">Driver's Permit</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formIdNumber">
              <Form.Label>ID Number </Form.Label>
              <Form.Control
                type="text"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleInputChange}
                placeholder="Enter ID Number"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <Form.Group controlId="formGender">
              <Form.Label>Gender</Form.Label>

              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formResume">
              <Form.Label>Resume</Form.Label>

              <Form.Control
                type="file"
                name="resume"
                onChange={handleResumeChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default JobApplicationForm;
