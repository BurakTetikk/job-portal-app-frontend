import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";

const LandingPage = () => {
  return (
    <div className="min-h-screen mb-[100vh]">
      <Header />
      <Hero />
      <Features />
    </div>
  );
};

export default LandingPage;
