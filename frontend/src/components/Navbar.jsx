import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    if (!isLanding) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">✉️</span>
          <span className="gradient-text">MailCraft</span>
        </Link>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {isLanding && (
            <>
              <li>
                <a href="#features" onClick={() => scrollToSection('features')}>
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={() => scrollToSection('how-it-works')}>
                  How It Works
                </a>
              </li>
            </>
          )}
          {!isLanding && (
            <li>
              <Link to="/">Home</Link>
            </li>
          )}
          <li>
            <Link to="/generate" className="navbar-cta">
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
