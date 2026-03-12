import React from 'react';
import './Education.css';
import { educationData } from '../contants/education.constants';

const Education: React.FC = () => {
  return (
    <div id="education" className="education-section">
      <div className="education-content">
        <h2 className="section-title">Education</h2>
        {educationData.map((edu, index) => (
          <div key={index} className="education-entry">
            {/* {edu.degree} -  */}
            <h3>{edu.major}</h3> 
            <h4>{edu.university}</h4>
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
