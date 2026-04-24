// components/Footer.js
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">

          {/* Column 1 */}
          <div className="footer-section first-section">
            <h4 className="footer-heading">MALUTI TVET College</h4>
            <p className="footer-description">
              Empowering students with quality technical and vocational education 
              and training across the Free State region.
            </p>
          </div>

          {/* Column 2 */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><button className="footer-link" onClick={() => handleNavigation('/vacancies')}>Vacancies</button></li>
              <li><button className="footer-link" onClick={() => handleNavigation('/tenders')}>Tenders</button></li>
              <li><button className="footer-link" onClick={() => handleNavigation('/campuses')}>Our Campuses</button></li>
              <li><button className="footer-link" onClick={() => handleNavigation('/student-support')}>Student Support</button></li>
              <li><button className="footer-link" onClick={() => handleNavigation('/contact')}>Contact</button></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>

            <div className="contact-item">
              <div className="icon-circle">
                <Mail size={18} />
              </div>
              <span>info@maluti.edu.za</span>
            </div>

            <div className="contact-item">
              <div className="icon-circle">
                <Phone size={18} />
              </div>
              <span>+27 (0)51 507 3000</span>
            </div>

          </div>

          {/* Column 4 */}
          <div className="footer-section">
            <h4 className="footer-heading">Address</h4>

            <div className="address-item">
              <div className="icon-circle">
                <MapPin size={18} />
              </div>
              <span>
                1 Moshoeshoe Road, Old Europa, Bloemfontein, 9301, South Africa
              </span>
            </div>

          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Maluti TVET College. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: #141632;
          color: white;
          padding: 60px 20px 25px;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .first-section {
          margin-left: -20px;
        }

        .footer-heading {
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #C2B9F5;
        }

        .footer-description {
          font-size: 0.9rem;
          opacity: 0.85;
          line-height: 1.6;
          max-width: 260px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .footer-link {
          background: none;
          border: none;
          color: white;
          opacity: 0.8;
          text-decoration: none;
          font-size: 0.9rem;
          cursor: pointer;
          text-align: left;
          padding: 0;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .footer-link:hover {
          color: #C2B9F5;
          transform: translateX(3px);
        }

        .contact-item, .address-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 0.9rem;
          opacity: 0.85;
          margin-bottom: 0.8rem;
        }

        .icon-circle {
          width: 36px;
          height: 36px;
          background-color: #C2B9F5;
          color: #141632;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.8rem;
          opacity: 0.6;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .first-section {
            margin-left: 0;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .footer-section {
            align-items: center;
          }
          .contact-item, .address-item {
            justify-content: center;
            text-align: center;
          }
          .footer-description {
            max-width: 100%;
            text-align: center;
          }
          .footer-link {
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;