import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="background-image"></div>
      <div className="content-container">
        <Navbar />
        <div className="about-content">
          <h1 className="lfh1">About Us</h1>
          <div className="about-text-container">
            <p className="about-desc">
              Welcome to MANIT’s very own Lost and Found portal — a digital
              space built by students, for students. We know how easy it is to
              misplace things in the hustle of campus life — be it a wallet left
              in the library, a phone forgotten in class, or your ID card
              dropped near the mess. That’s why we created this platform: to
              make it easier for the MANIT community to report, search, and
              recover lost items within the campus. No more frantic messages on
              random WhatsApp groups — just one organized hub where honesty
              meets helpfulness. Together, let’s make finding what’s lost a
              little easier, and a lot more hopeful.
            </p>
          </div>
        </div>
        <footer className="footer">© MANIT Lost and Found Portal</footer>
      </div>
    </section>
  );
};

export default About;
