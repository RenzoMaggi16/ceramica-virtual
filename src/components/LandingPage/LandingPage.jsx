import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:wght@300;400&family=Actor&family=Albert+Sans:wght@300;400;600;700&family=ABeeZee&display=swap"
        rel="stylesheet"
      />
      <div className="landing-page">
        <Header />
        <Hero />
        <Features />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
