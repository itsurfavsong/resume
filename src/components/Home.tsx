import './Home.css';
import { useLanguage } from '../i18n/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth',
      });
    }
  };

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth',
      });
    }
  };

  return (
    <div id="home" className="hero">
      {/* Background effects */}
      <div className="hero-bg">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
      </div>

      {/* Hero content */}
      <div className="hero-content">
        <div className="hero-badge">{t.heroBadge}</div>

        <h1 className="hero-title">
          <span className="line">{t.heroLine1}</span>
          <span className="line gradient-text">{t.heroLine2}</span>
        </h1>

        <p className="hero-description">
          {t.heroDescription[0]} <br />
          {t.heroDescription[1]}
        </p>

        <div className="hero-cta">
          <button className="btn btn-primary" onClick={handleScrollToProjects}>
            {t.viewProjects}
            <span className="btn-arrow">→</span>
          </button>
          <button className="btn btn-secondary" onClick={handleScrollToContact}>
            {t.contactCta}
          </button>
          <a className="btn btn-secondary" href="/SongBomi_CV_ja.pdf" download="SongBomi_CV_ja.pdf">
            {t.cvDownload}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span className="scroll-text">Scroll</span>
      </div>
    </div>
  );
}
