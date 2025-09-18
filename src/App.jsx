import React from "react";
import { HashRouter as Router } from "react-router-dom";
import BreathCircle from "./ui/BreathCircle";
import HeaderTitle from "./ui/HeaderTitle";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ContactInfo from "./components/ContactInfo";
import Particles from "./components/Particles";
import Services from "./components/Services";

import "./index.css";

const App = () => {
  return (
    <Router>
      {/* Particles Background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
  <Particles
    particleColors={["#ffffffc1", "#ffffffc4"]}
    particleCount={50}
    particleSpread={10}
    speed={0.5}
    particleBaseSize={3}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Home / Landing Section */}
        <section id="home" className="section__wrapper relative text-black min-h-screen flex flex-col justify-center">
          <HeaderTitle />
          <BreathCircle />
        </section>

        {/* About Section */}
        <section className="section__wrapper relative text-black">
          <About />
        </section>

        {/* Services Section */}
        <section id="services" className="section__wrapper relative text-black">
          <Services />
        </section>

        {/* Skills Section */}
        <section id="skills" className="section__wrapper relative text-black">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects" className="section__wrapper relative text-black">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="section__wrapper relative text-black">
          <ContactInfo />
        </section>

        <Footer />
      </main>
    </Router>
  );
};

export default App;
