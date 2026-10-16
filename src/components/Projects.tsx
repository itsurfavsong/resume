import React, { useState } from 'react';
import './Projects.css';
import { useLanguage } from '../i18n/LanguageContext';
import { projectsData } from '../contants/project.constants';
import TroubleshootingModal from './TroubleshootingModal';

const Projects: React.FC = () => {
  const { lang, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const projects = projectsData[lang];
  const openProject = openIndex !== null ? projects[openIndex] : null;
  return (
    <div id="projects" className="projects-section">
      <div className="projects-content">
        <h2 className="section-title">{t.projectsTitle}</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  width={704}
                  height={606}
                  loading="lazy"
                  style={{
                    objectFit: project.imageFit,
                    backgroundColor: project.imageBg,
                  }}
                />
              )}
              <div className="project-info">
                <h3>
                  {project.deployLink ? (
                    <a
                      href={project.deployLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-title-link"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="project-meta">
                  {project.period} / {t.teamLabel} {project.team} /{' '}
                  {project.role}
                </p>
                <p className="project-description">{project.description}</p>
                {project.features && (
                  <>
                    <h4 className="project-subheading">{t.featuresLabel}</h4>
                    <ul className="project-list">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}
                <h4 className="project-subheading">
                  {t.responsibilitiesLabel}
                </h4>
                <ul className="project-list">
                  {project.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="technology-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.tools && (
                  <p className="project-tools">
                    {t.toolsLabel}: {project.tools.join('、')}
                  </p>
                )}
                <div className="project-links">
                  {project.deployLink && (
                    <a
                      href={project.deployLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project btn-project-primary"
                    >
                      Live
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project"
                    >
                      GitHub
                    </a>
                  )}
                  {project.troubleshooting?.length ? (
                    <button
                      type="button"
                      className="btn-project"
                      onClick={() => setOpenIndex(index)}
                    >
                      {t.troubleshooting}
                    </button>
                  ) : (
                    project.notionLink && (
                      <a
                        href={project.notionLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-project"
                      >
                        {t.caseStudy}
                      </a>
                    )
                  )}
                  {project.videoLink && (
                    <a
                      href={project.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project"
                    >
                      {t.demoVideo}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {openProject?.troubleshooting?.length ? (
        <TroubleshootingModal
          title={`${openProject.title} — ${t.troubleshooting}`}
          items={openProject.troubleshooting}
          labels={{
            close: t.close,
            problem: t.problemLabel,
            solution: t.solutionLabel,
            readMore: t.readMore,
          }}
          onClose={() => setOpenIndex(null)}
        />
      ) : null}
    </div>
  );
};

export default Projects;
