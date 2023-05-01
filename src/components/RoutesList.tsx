import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import ContactUsPage from "../pages/ContactUsPage";
import CareersPage from "../pages/CareersPage";

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/careers" element={<CareersPage />} />
    </Routes>
  );
};

export default RoutesList;
