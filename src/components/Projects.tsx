import React from 'react';
import './Projects.css';
import { projectsData } from '../contants/project.constants';

const Projects: React.FC = () => {
  return (
    <div id="projects" className="projects-section">
      <div className="projects-content">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              {project.image && <img src={project.image} alt={project.title} className="project-image" />}
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="technology-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.deployLink && (
                    <a href={project.deployLink} target="_blank" rel="noopener noreferrer" className="btn-project btn-project-primary">
                      Live
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-project">
                      GitHub
                    </a>
                  )}
                  {project.notionLink && (
                    <a href={project.notionLink} target="_blank" rel="noopener noreferrer" className="btn-project">
                      Case Study
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
