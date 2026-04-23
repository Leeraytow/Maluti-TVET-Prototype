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

  // Check if current path matches the nav item
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-wrapper" style={{ textDecoration: 'none' }}>
          <img src="/logo.jpg" alt="Maluti TVET College Logo" className="logo" onError={(e) => { e.target.src = 'https://placehold.co/60x60/141632/white?text=M'; }} />
          <span className="college-name">Maluti TVET College</span>
        </Link>
        
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
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }

        .logo {
          height: 80px;
          width: auto;
          object-fit: contain;
          border-radius: 8px;
        }

        .college-name {
          color: white;
          font-size: 1.2rem;
          font-weight: bold;
          letter-spacing: 0.5px;
        }

        .desktop-nav {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          text-decoration: none;
          color: white;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .nav-link.active {
          background-color: #C2B9F5;
          color: #141632;
        }

        .nav-link:hover {
          background-color: #C2B9F5;
          color: #141632;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: white;
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
        }

        .mobile-nav-link.active {
          background-color: #C2B9F5;
          color: #141632;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
          .mobile-nav {
            display: flex;
          }
          .header-container {
            padding: 0.75rem 1.5rem;
          }
          .logo {
            height: 50px;
          }
          .college-name {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .college-name {
            font-size: 0.8rem;
          }
          .logo {
            height: 40px;
          }
          .logo-wrapper {
            gap: 0.5rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;