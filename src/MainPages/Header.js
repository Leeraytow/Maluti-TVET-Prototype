// components/Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'campuses', label: 'Campuses', path: '/campuses' },
    { id: 'courses', label: 'Courses', path: '/courses' },
    { id: 'vacancies', label: 'Vacancies', path: '/vacancies' },
    { id: 'contact', label: 'Contact Us', path: '/contact' },
    { id: 'login', label: 'Login', path: '/login' }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="left-section">
          <Link to="/" className="logo-wrapper" style={{ textDecoration: 'none' }}>
            <img src="/logo.jpg" alt="Maluti TVET College Logo" className="logo" onError={(e) => { e.target.src = 'https://placehold.co/80x80/141632/white?text=M'; }} />
            <span className="college-name">Maluti TVET College</span>
          </Link>
        </div>
        
        <nav className="desktop-nav">
          {navItems.map(item => (
            <Link
              key={item.id}
              to={item.path}
              className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="right-section">
          <div className="dhet-logo-wrapper">
            <img 
              src="https://www.afterskul.com/wp187/wp-content/uploads/2025/08/Department-of-Higher-Education-and-Training-DHET-2.png" 
              alt="Department of Higher Education and Training" 
              className="dhet-logo"
              onError={(e) => { 
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/100x50/141632/white?text=DHET';
              }} 
            />
          </div>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </button>

        {isMobileMenuOpen && (
          <div className="mobile-nav">
            {navItems.map(item => (
              <Link
                key={item.id}
                to={item.path}
                className={`mobile-nav-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .header {
          background-color: #141632;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0.75rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          min-height: 85px;
        }

        .left-section {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }

        /* LARGER MALUTI LOGO */
        .logo {
          height: 75px;
          width: auto;
          object-fit: contain;
          border-radius: 8px;
        }

        .college-name {
          color: white;
          font-size: 1.1rem;
          font-weight: bold;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .desktop-nav {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          margin: 0 auto;
        }

        .nav-link {
          text-decoration: none;
          color: white;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 80px;
          height: 40px;
          text-align: center;
          font-size: 0.9rem;
          background-color: transparent;
          border: none;
          cursor: pointer;
        }

        .nav-link.active {
          background-color: #C2B9F5;
          color: #141632;
        }

        .nav-link:hover {
          background-color: #C2B9F5;
          color: #141632;
        }

        .right-section {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .dhet-logo-wrapper {
          display: flex;
          align-items: center;
        }

        /* FIXED DHET LOGO DIMENSIONS - WILL NOT CHANGE */
        .dhet-logo {
          width: 120px !important;
          height: 50px !important;
          min-width: 120px !important;
          max-width: 120px !important;
          min-height: 50px !important;
          max-height: 50px !important;
          object-fit: contain;
          background-color: white;
          padding: 5px 10px;
          border-radius: 8px;
          transition: opacity 0.3s, transform 0.3s;
          display: block;
        }

        .dhet-logo:hover {
          opacity: 0.95;
          transform: scale(1.02);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: white;
          padding: 0.5rem;
        }

        .mobile-nav {
          display: none;
          flex-direction: column;
          width: 100%;
          gap: 0.5rem;
          padding: 1rem 0;
          border-top: 1px solid rgba(255,255,255,0.1);
          margin-top: 0.5rem;
        }

        .mobile-nav-link {
          text-decoration: none;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          color: white;
          font-weight: 500;
          text-align: center;
          background-color: transparent;
          transition: all 0.3s;
        }

        .mobile-nav-link.active {
          background-color: #C2B9F5;
          color: #141632;
        }

        .mobile-nav-link:hover {
          background-color: #C2B9F5;
          color: #141632;
        }

        @media (max-width: 1024px) {
          .desktop-nav {
            gap: 0.25rem;
          }
          .nav-link {
            min-width: 70px;
            padding: 0.4rem 0.6rem;
            font-size: 0.85rem;
            height: 38px;
          }
          .dhet-logo {
            width: 110px !important;
            height: 45px !important;
            min-width: 110px !important;
            max-width: 110px !important;
            min-height: 45px !important;
            max-height: 45px !important;
          }
          .logo {
            height: 65px;
          }
          .college-name {
            font-size: 1rem;
          }
        }

        @media (max-width: 968px) {
          .desktop-nav, .right-section {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
          .mobile-nav {
            display: flex;
          }
          .header-container {
            padding: 0.6rem 1.5rem;
            min-height: 70px;
          }
        }

        @media (max-width: 768px) {
          .logo {
            height: 50px;
          }
          .college-name {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 580px) {
          .college-name {
            font-size: 0.75rem;
          }
          .logo {
            height: 42px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;