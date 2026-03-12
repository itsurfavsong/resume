import React from "react";
import "./About.css";
import { aboutSections } from "../contants/about.constants";
import languageGraph from "../assets/language-graph.png";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">

        <h2 className="section-title">About Me</h2>

        <div className="about-image">
          <img src={languageGraph} alt="Language Journey Graph" />
        </div>

        <h3 className="about-formula">f(송보미) = 언어</h3>

        {aboutSections.map((section, index) => (
          <div key={index} className="about-block">
            {section.texts.map((text, i) => (
              <p key={i} className="about-description">
                {text}
              </p>
            ))}
          </div>
        ))}

      </div>
    </section>
  );
};

export default About;