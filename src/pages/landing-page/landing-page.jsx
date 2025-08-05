import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import Analytics from "./components/analytics";
import Footer from "./components/footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Analytics />
      <Footer />
    </div>
  );
};

export default LandingPage;
