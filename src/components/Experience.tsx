import React from 'react';
import './Experience.css';
import { experienceData } from '../contants/experience.constants';

const Experience: React.FC = () => {
  return (
    <div id="experience" className="experience-section">
      <div className="experience-content">
        <h2 className="section-title">Experience</h2>
        {experienceData.map((job, index) => (
          <div key={index} className="job-entry">
            <h3>{job.title}</h3>
            <h4>{job.company}</h4>
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
