import React from "react";
import { skills } from "../data";

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
          <h2>About Me</h2>
          <h1>
            <span className="white">I am </span>
            <span className="blue">Mahalakshmi</span>
          </h1>
          <p>
            Hi, I am Mahalakshmi U, a final-year Electronics and Communication Engineering student with a Minor in Data Science and Analytics at Saveetha Engineering College.
I am passionate about technology and problem-solving, with a growing interest in full-stack development and data science.
Currently, I am exploring data science and machine learning, which has broadened my perspective on building intelligent and impactful solutions.
I see myself as a fast learner, effective communicator, and team player, always eager to embrace new technologies.
My ultimate goal is to contribute to innovative projects that create real-world impact.
          </p>
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
