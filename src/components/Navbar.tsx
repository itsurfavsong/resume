import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { menuItems } from '../contants/menu.constants';

const Navbar: React.FC = () => {
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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-brand" onClick={() => scrollToSection('home')}>
          {"<Bomi />"}
        </a>
        
        {/* Hamburger menu toggle button */}
        <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
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
