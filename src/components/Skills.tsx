import React from 'react';
import './Skills.css';
import { useLanguage } from '../i18n/LanguageContext';
import { skillsData } from '../contants/skill.constants';

const Skills: React.FC = () => {
  const { lang, t } = useLanguage();
  return (
    <div id="skills" className="skills-section">
      <div className="skills-content">
        <h2 className="section-title">{t.skillsTitle}</h2>
        <div className="skills-grid">
          {skillsData[lang].map((skillCategory, index) => (
            <div key={index} className={`skill-category${skillCategory.featured ? ' featured' : ''}`}>
              <h3>{skillCategory.category}</h3>
              <ul>
                {skillCategory.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
