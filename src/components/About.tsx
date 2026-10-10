import React from "react";
import "./About.css";
import { aboutSections } from "../contants/about.constants";
import { useLanguage } from "../i18n/LanguageContext";
import languageGraph from "../assets/language-graph.png";

const About: React.FC = () => {
  const { lang, t } = useLanguage();
  return (
    <section id="about" className="about-section">
      <div className="about-content">

        <h2 className="section-title">{t.aboutTitle}</h2>

        <div className="about-image">
          <img src={languageGraph} alt={t.aboutImageAlt} width={1024} height={768} loading="lazy" />
        </div>

        <p className="about-formula">{t.aboutFormula}</p>

        {aboutSections[lang].map((section, index) => (
          <div key={index} className="about-block">
            <p className="about-description">
              {section.texts.join(lang === 'ja' ? '' : ' ')}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default About;