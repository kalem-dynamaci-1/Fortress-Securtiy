import React from "react";
import HeroSection from "../components/Hero";
import Appointment from "../components/Appointment";
import LandingPageAboutUs from "../components/LandingAboutUs";
import SecurityServices from "../components/LandingServices";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <Appointment />
      <LandingPageAboutUs />
      <SecurityServices />
    </div>
  );
};

export default Homepage;
