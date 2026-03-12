import React from 'react';
import './Skills.css';
import { skillsData } from '../contants/skill.constants';

const Skills: React.FC = () => {
  return (
    <div id="skills" className="skills-section">
      <div className="skills-content">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skillCategory, index) => (
            <div key={index} className="skill-category">
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
