import React from "react";
import { HashRouter as Router } from "react-router-dom";
import BreathCircle from "./ui/BreathCircle";
import HeaderTitle from "./ui/HeaderTitle";
import Hole from "./ui/Hole";
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
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Particles
          particleColors={["#ffffffc1", "#ffffffc4"]}
          particleCount={100}
          particleSpread={10}
          speed={0.8}
          particleBaseSize={10}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <section id="home" className="section__wrapper relative">
          <HeaderTitle />
          <BreathCircle />
        </section>

        <About />

        <section id="services" className="section__wrapper relative">
          <Services />
        </section>

        <section id="skills" className="section__wrapper relative">
          <Skills />
        </section>

        <section id="projects" className="section__wrapper relative">
          <Projects />
        </section>

        <section id="contact" className="section__wrapper relative">
          <ContactInfo />
        </section>

        <Footer />
      </main>
    </Router>
  );
};

export default App;
