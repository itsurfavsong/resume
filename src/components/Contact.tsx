import React from 'react';
import './Contact.css';
import { useLanguage } from '../i18n/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="section-title">{t.contactTitle}</h2>
        <p className="contact-description">
          {t.contactDescription}
        </p>
        <ul className="contact-list">
          <li>
            <a href="mailto:song.bm24@gmail.com" className="contact-link">
              <span className="contact-label">Gmail</span>
              <span className="contact-value">song.bm24@gmail.com</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/itsurfavsong" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">github.com/itsurfavsong</span>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/itsurfavsong" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">linkedin.com/in/itsurfavsong</span>
            </a>
          </li>
          <li>
            <a href="https://velog.io/@itsurfavsong/posts" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-label">{t.velog}</span>
              <span className="contact-value">velog.io/@itsurfavsong</span>
            </a>
          </li>
        </ul>
        {/*
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        */}
      </div>
    </div>
  );
};

export default Contact;
