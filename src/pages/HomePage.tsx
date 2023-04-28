import React from "react";
import HeroSection from "../components/HomePageComponents/Hero";
import Appointment from "../components/HomePageComponents/Appointment";
import LandingPageAboutUs from "../components/HomePageComponents/LandingAboutUs";
import SecurityServices from "../components/HomePageComponents/LandingServices";

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
