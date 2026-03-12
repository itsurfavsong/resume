import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-description">
          더 자세한 이야기를 나누고 싶으시다면, 편하게 연락 주세요!
        </p>
        <div className="contact-info-grid">
          <div className="contact-item">
            <i className="fas fa-envelope contact-icon"></i>
            <a href="mailto:song.bm24@gmail.com">Gmail</a>
          </div>
          <div className="contact-item">
            <i className="fab fa-github contact-icon"></i>
            <a href="https://github.com/itsurfavsong" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="contact-item">
            <i className="fab fa-linkedin contact-icon"></i>
            <a href="https://linkedin.com/in/itsurfavsong" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt contact-icon"></i>
            <a href="https://velog.io/@itsurfavsong/posts">Velog.io</a>
          </div>
        </div>
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
