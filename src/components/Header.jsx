import React, { useState, useEffect } from 'react';
import { Sprout, Menu, X } from 'lucide-react';
import { navigate } from '../router';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (e, targetId) => {
    closeMenu();
    
    if (window.location.pathname === '/') {
      // On the home page already
      if (targetId === 'home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', '/');
      } else {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', `#${targetId}`);
        }
      }
    } else {
      // On a policy page, navigate to home with target hash
      e.preventDefault();
      if (targetId === 'home') {
        navigate('/');
      } else {
        navigate(`/#${targetId}`);
      }
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="logo" onClick={(e) => handleNavClick(e, 'home')}>
          <Sprout className="logo-icon" size={28} />
          <span className="logo-text">HENRISE AGRO FARM</span>
        </a>

        {/* Desktop Menu */}
        <nav className="nav-menu">
          <a href="/" className="nav-link" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          <a href="/#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          <a href="/#operations" className="nav-link" onClick={(e) => handleNavClick(e, 'operations')}>Our Operations</a>
          <a href="/#pricing" className="nav-link" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing Catalog</a>
          <a href="/#contact" className="nav-link" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a>
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          className="mobile-toggle" 
          onClick={toggleMenu} 
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav ${isOpen ? 'mobile-nav-open' : ''}`}>
        <nav className="mobile-nav-menu">
          <a href="/" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          <a href="/#about" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          <a href="/#operations" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'operations')}>Our Operations</a>
          <a href="/#pricing" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing Catalog</a>
          <a href="/#contact" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a>
        </nav>
      </div>
    </header>
  );
}
