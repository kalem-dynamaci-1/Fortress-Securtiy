import React from "react";
import JobApplicationForm from "../components/CareerPageComponents/JobApplicationForm";
import { Container } from "react-bootstrap";
import "../components/CareerPageComponents/CareerPage.css";

const CareersPage = () => {
  return (
    <Container className="careers-page py-5">
      <h1 className="welcome-header text-center mb-5">
        Become part of our leading Security Firm and Reap the Benefits
      </h1>
      <div className="benefits-container mb-5">
        <ul className="benefits-list">
          <li>Competitive Wages</li>
          <li>Permanent Employment</li>
          <li>Training In-house</li>
          <li>Paid Sick Leave</li>
          <li>Health Plan and Life Insurance</li>
          <li>Workmen Compensation</li>
          <li>Pension Plan</li>
          <li>Vacation / Casual Leave</li>
          <li>Annual Bonus Package (Profit Sharing)</li>
          <li>Double Time on Public Holidays</li>
          <li>Assistance in Personal Enhancements</li>
          <li>Many Other Benefits</li>
        </ul>
        <p>
          Requirements: You must be Physically Fit, a national of Trinidad and
          Tobago, between the ages of 18-50. A Valid Driver’s License manual
          transmission will be an asset (2-3 years experience). In House
          Background Checks Will Be Conducted. Unsuitable Applicants Will Be
          Acknowledged and world-class training.
        </p>
      </div>
      <JobApplicationForm />
    </Container>
  );
};

export default CareersPage;
