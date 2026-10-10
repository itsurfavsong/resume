import React from 'react';
import './Experience.css';
import { useLanguage } from '../i18n/LanguageContext';
import { experienceData } from '../contants/experience.constants';

const Experience: React.FC = () => {
  const { lang, t } = useLanguage();
  return (
    <div id="experience" className="experience-section">
      <div className="experience-content">
        <h2 className="section-title">{t.experienceTitle}</h2>
        {experienceData[lang].map((job, index) => (
          <div key={index} className="job-entry">
            <h3>{job.title}</h3>
            <p className="entry-org">{job.company}</p>
            <p className="job-duration">{job.duration}</p>
            <ul>
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
