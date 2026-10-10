import React from 'react';
import './Education.css';
import { useLanguage } from '../i18n/LanguageContext';
import { educationData } from '../contants/education.constants';

const Education: React.FC = () => {
  const { lang, t } = useLanguage();
  return (
    <div id="education" className="education-section">
      <div className="education-content">
        <h2 className="section-title">{t.educationTitle}</h2>
        {educationData[lang].map((edu, index) => (
          <div key={index} className="education-entry">
            {/* {edu.degree} -  */}
            <h3>{edu.major}</h3> 
            <p className="entry-org">{edu.university}</p>
            {edu.note && <p className="education-note">{edu.note}</p>}
            <p className="education-duration">{edu.duration}</p>
            {edu.details && (
              <ul>
                {edu.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
