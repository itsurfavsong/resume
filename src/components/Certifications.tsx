import React from 'react';
import './Certifications.css';
import { certificationData } from '../contants/certification.constants';
import { useLanguage } from '../i18n/LanguageContext';

const Certifications: React.FC = () => {
  const { lang, t } = useLanguage();
  return (
    <div id="certifications" className="certifications-section">
      <div className="certifications-content">
        <h2 className="section-title">{t.certificationsTitle}</h2>
        <div className="certifications-grid">
          {certificationData[lang].map((group, index) => (
            <div key={index} className="certification-group">
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
