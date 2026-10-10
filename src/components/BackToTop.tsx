import React, { useEffect, useState } from 'react';
import './BackToTop.css';
import { useLanguage } from '../i18n/LanguageContext';

const SHOW_AFTER = 400;

const BackToTop: React.FC = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      className={`back-to-top${visible ? ' visible' : ''}`}
      onClick={scrollToTop}
      aria-label={t.backToTop}
      tabIndex={visible ? 0 : -1}
    >
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
        <path d="M12 19V5M5 12l7-7 7 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
};

export default BackToTop;
