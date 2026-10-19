import React from 'react';
import './About.css';
import { aboutSections } from '../contants/about.constants';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageGraph from './LanguageGraph';

// **強調したい語** をハイライト表示にする
const renderHighlight = (text: string) =>
  text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="about-highlight">
        {part}
      </strong>
    ) : (
      part
    ),
  );

const About: React.FC = () => {
  const { lang, t } = useLanguage();
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="section-title">{t.aboutTitle}</h2>

        <div className="about-image">
          <LanguageGraph />
        </div>

        <p className="about-formula">{t.aboutFormula}</p>

        {aboutSections[lang].map((section, index) => (
          <div key={index} className="about-block">
            <p className="about-description">
              {renderHighlight(section.texts.join(lang === 'ja' ? '' : ' '))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
