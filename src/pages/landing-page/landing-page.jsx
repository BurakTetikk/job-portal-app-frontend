import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import Analytics from "./components/analytics";

const LandingPage = () => {
  return (
    <div className="min-h-screen mb-[100vh]">
      <Header />
      <Hero />
      <Features />
      <Analytics />
    </div>
  );
};

export default LandingPage;
