import React from "react";
import { skills } from "../data";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="section__wrapper">
      
      <div className="about__card">
        {/* Left Floating Icons */}
        <div className="skills__container">
          {skills[1].data.map((skill, index) => (
            <div key={index} className="skill__item">
              <img src={skill.logo} alt={skill.skill} />
            </div>
          ))}
        </div>

        {/* Right Text */}
        <div className="about__text animate-fade-in-up">
          <h1>
            <span className="white">I am </span>
            <span className="blue">Mahalakshmi</span>
          </h1>
          <p>
           A final-year Electronics and Communication Engineering student at Saveetha Engineering College.
I’m a full-stack developer who enjoys building complete, end-to-end web applications.
I focus on writing clean, efficient, and user-friendly code.
Currently exploring data science and deep learning to understand and apply intelligent systems.
I enjoy problem-solving, continuous learning, and building solutions with real-world impact.
          </p>
          <div className="about__buttons">
            <a href="/resume.jpg" download="Mahalakshmi_Resume.jpg" target="_blank" rel="noopener noreferrer" className="btn">
              <span>Resume</span>
              <FaDownload />
            </a>
          </div>
        </div>

        {/* KEEP ONLY THIS HOLE */}
        <div className="hole">
          {[...Array(10)].map((_, i) => (
            <i key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
