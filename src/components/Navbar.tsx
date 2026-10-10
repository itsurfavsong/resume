import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useLanguage } from '../i18n/LanguageContext';
import { menuItems } from '../contants/menu.constants';

const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuItemsVisible, setMenuItemsVisible] = useState(false); // New state for staggered appearance

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // When menu opens, set items visible after a short delay
    if (isMenuOpen) {
      const timer = setTimeout(() => {
        setMenuItemsVisible(true);
      }, 100); // Small delay before items start appearing
      return () => clearTimeout(timer);
    } else {
      setMenuItemsVisible(false); // Hide items immediately when menu closes
    }
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking a link
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav aria-label={t.navLabel} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-brand" onClick={() => scrollToSection('home')}>
          {"<Bomi />"}
        </a>
        
        <button
          type="button"
          className="lang-switch"
          aria-label={t.switchAria}
          onClick={() => setLang(lang === 'ja' ? 'ko' : 'ja')}
        >
          <span className={lang === 'ja' ? 'active' : ''}>JA</span>
          <span className={lang === 'ko' ? 'active' : ''}>KO</span>
        </button>

        {/* Hamburger menu toggle button */}
        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label={t.menuLabel}
          aria-expanded={isMenuOpen}
        >
          <div />
          <div />
          <div />
        </button>

        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          {menuItems.map((item, index) => (
            <li 
              key={item.id}
              className={menuItemsVisible ? 'visible' : ''}
              style={{ transitionDelay: isMenuOpen ? `${index * 0.1}s` : '0s' }} // Staggered delay
            >
              <a href={`#${item.id}`} onClick={() => scrollToSection(item.id)}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
