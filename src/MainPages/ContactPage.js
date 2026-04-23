// MainPages/Contact.js
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Building, User } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Central Office",
      details: ["1 Moshoeshoe Road", "Old Europa", "Bloemfontein, 9301", "South Africa"],
      color: "#141632"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone Numbers",
      details: ["Tel: +27 (0)51 507 3000", "Fax: +27 (0)51 507 3001", "Student Support: 0800 123 456"],
      color: "#141632"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Addresses",
      details: ["General: info@maluti.edu.za", "Admissions: admissions@maluti.edu.za", "Support: support@maluti.edu.za"],
      color: "#141632"
    },
    {
      icon: <Clock size={24} />,
      title: "Office Hours",
      details: ["Monday - Thursday: 08:00 - 16:30", "Friday: 08:00 - 15:30", "Saturday - Sunday: Closed"],
      color: "#141632"
    }
  ];

  const campuses = [
    {
      name: "Main Campus (Tshiya)",
      location: "Mampoi Road, Phuthaditjhaba, 9866",
      phone: "058 713 0612",
      email: "info@malutitvet.co.za"
    },
    {
      name: "Bethlehem Campus",
      location: "Corner of High and Wessels Streets, Bethlehem, 9700",
      phone: "087 941 6839",
      email: "bethlehem@malutitvet.co.za"
    },
    {
      name: "Harrismith Campus",
      location: "Extension 4751, Intabazwe Corridor, Harrismith, 9880",
      phone: "058 622 2785",
      email: "harrismith@malutitvet.co.za"
    },
    {
      name: "Bonamelo Campus",
      location: "Stadium Road, Phuthaditjhaba, 9866",
      phone: "058 713 1391",
      email: "bonamelo@malutitvet.co.za"
    },
    {
      name: "Itemoheleng Campus",
      location: "Mampoi Road, Phuthaditjhaba, 9866",
      phone: "058 713 0296",
      email: "itemoheleng@malutitvet.co.za"
    },
    {
      name: "Kwetlisong Campus",
      location: "Cnr. Mampoi & Bolata Road, Riverside, Phuthaditjhaba, 9870",
      phone: "058 713 6655",
      email: "kwetlisong@malutitvet.co.za"
    },
    {
      name: "Lere la Tshepe Campus",
      location: "Tseki Village, Poelong, 9874",
      phone: "058 713 6611",
      email: "lerelatshepe@malutitvet.co.za"
    },
    {
      name: "Sefikeng Campus",
      location: "107 Rosedale, Harrismith, 9870",
      phone: "058 713 6064",
      email: "sefikeng@malutitvet.co.za"
    }
  ];

  const departments = [
    { name: "Admissions Office", email: "admissions@maluti.edu.za", phone: "051 507 3010" },
    { name: "Student Support", email: "studentsupport@maluti.edu.za", phone: "051 507 3020" },
    { name: "Finance Department", email: "finance@maluti.edu.za", phone: "051 507 3030" },
    { name: "HR Department", email: "hr@maluti.edu.za", phone: "051 507 3040" },
    { name: "Marketing & Communications", email: "marketing@maluti.edu.za", phone: "051 507 3050" },
    { name: "IT Support", email: "itsupport@maluti.edu.za", phone: "051 507 3060" }
  ];

  return (
    <main className="contact-page">
      {/* Hero Section with Background Image */}
      <section className="contact-hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>We're here to help! Reach out to us for any inquiries, support, or feedback.</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="info-cards">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-card">
                <div className="info-icon" style={{ backgroundColor: info.color }}>
                  {info.icon}
                </div>
                <h3>{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-map-wrapper">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <p>Have a question? Fill out the form below and we'll get back to you as soon as possible.</p>
              
              {isSubmitted && (
                <div className="success-message">
                  Thank you for your message! We'll get back to you shortly.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="map-container">
              <h2>Find Us</h2>
              <div className="map-wrapper">
                <iframe
                  title="Maluti TVET College Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.5184!2d26.2233!3d-29.1133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8f5a4b3c2d1e0f%3A0x1234567890abcdef!2sBloemfontein!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="address-details">
                <MapPin size={18} />
                <span>1 Moshoeshoe Road, Old Europa, Bloemfontein, 9301</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All 8 Campus Locations */}
      <section className="campuses-contact">
        <div className="container">
          <h2 className="section-title">Our 8 Campuses</h2>
          <p className="section-subtitle">Visit any of our 8 campuses across the Free State region</p>
          <div className="campuses-contact-grid">
            {campuses.map((campus, index) => (
              <div key={index} className="campus-contact-card">
                <div className="campus-icon">
                  <Building size={24} />
                </div>
                <h3>{campus.name}</h3>
                <p className="campus-location-text">
                  <MapPin size={14} /> {campus.location}
                </p>
                <p className="campus-phone-text">
                  <Phone size={14} /> {campus.phone}
                </p>
                <p className="campus-email-text">
                  <Mail size={14} /> {campus.email}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="departments-section">
        <div className="container">
          <h2 className="section-title">Contact Departments Directly</h2>
          <p className="section-subtitle">Get in touch with specific departments for faster assistance</p>
          <div className="departments-grid">
            {departments.map((dept, index) => (
              <div key={index} className="department-card">
                <div className="dept-icon">
                  <User size={20} />
                </div>
                <div className="dept-info">
                  <h3>{dept.name}</h3>
                  <p><Mail size={14} /> {dept.email}</p>
                  <p><Phone size={14} /> {dept.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .contact-page {
          font-family: 'Arial', sans-serif;
        }

        /* Hero Section with Background Image */
        .contact-hero {
          position: relative;
          min-height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 60px 20px;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('/contactUs.jpg');
          background-size: cover;
          background-position: center;
          filter: blur(1px);
          transform: scale(1.05);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(20, 22, 50, 0.85);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-content h1 {
          font-size: 2.8rem;
          margin-bottom: 1rem;
          font-weight: bold;
        }

        .hero-content p {
          font-size: 1.1rem;
          opacity: 0.9;
        }

        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Contact Info Cards */
        .contact-info-section {
          padding: 60px 20px;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        }

        .info-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .info-card {
          background: white;
          padding: 1.5rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s;
        }

        .info-card:hover {
          transform: translateY(-5px);
        }

        .info-icon {
          width: 60px;
          height: 60px;
          background-color: #141632;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          color: white;
        }

        .info-card h3 {
          font-size: 1.2rem;
          font-weight: bold;
          color: #141632;
          margin-bottom: 0.75rem;
        }

        .info-card p {
          font-size: 0.85rem;
          color: #666;
          line-height: 1.5;
          margin-bottom: 0.25rem;
        }

        /* Contact Form Section */
        .contact-form-section {
          padding: 60px 20px;
          background: white;
        }

        .form-map-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        .contact-form-container h2, .map-container h2 {
          font-size: 1.8rem;
          color: #141632;
          margin-bottom: 0.5rem;
        }

        .contact-form-container p {
          color: #666;
          margin-bottom: 1.5rem;
        }

        .success-message {
          background: #d4edda;
          color: #155724;
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          border-left: 4px solid #28a745;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.9rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 0.9rem;
          transition: border-color 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #141632;
        }

        .submit-btn {
          background-color: #141632;
          color: white;
          padding: 0.9rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: background-color 0.3s;
        }

        .submit-btn:hover {
          background-color: #2a2e5a;
        }

        .map-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .map-wrapper {
          height: 300px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .address-details {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 8px;
          color: #666;
          font-size: 0.9rem;
        }

        /* Campus Locations - All 8 Campuses */
        .campuses-contact {
          padding: 60px 20px;
          background: #f8f9fa;
        }

        .section-title {
          text-align: center;
          font-size: 2rem;
          color: #141632;
          margin-bottom: 1rem;
          font-weight: bold;
        }

        .section-subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 3rem;
        }

        .campuses-contact-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .campus-contact-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s;
        }

        .campus-contact-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .campus-icon {
          color: #141632;
          margin-bottom: 1rem;
        }

        .campus-contact-card h3 {
          font-size: 1rem;
          font-weight: bold;
          color: #141632;
          margin-bottom: 0.75rem;
        }

        .campus-contact-card p {
          font-size: 0.8rem;
          color: #666;
          margin-bottom: 0.4rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        /* Departments Section */
        .departments-section {
          padding: 60px 20px;
          background: white;
        }

        .departments-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .department-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.2rem;
          background: #f8f9fa;
          border-radius: 12px;
          transition: transform 0.3s;
        }

        .department-card:hover {
          transform: translateX(5px);
        }

        .dept-icon {
          color: #141632;
          flex-shrink: 0;
        }

        .dept-info h3 {
          font-size: 1rem;
          font-weight: bold;
          color: #141632;
          margin-bottom: 0.5rem;
        }

        .dept-info p {
          font-size: 0.8rem;
          color: #666;
          margin-bottom: 0.25rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .info-cards {
            grid-template-columns: repeat(2, 1fr);
          }
          .campuses-contact-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .departments-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .form-map-wrapper {
            grid-template-columns: 1fr;
          }
          .hero-content h1 {
            font-size: 2rem;
          }
          .section-title {
            font-size: 1.6rem;
          }
          .info-cards {
            grid-template-columns: 1fr;
          }
          .campuses-contact-grid {
            grid-template-columns: 1fr;
          }
          .departments-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
};

export default ContactPage;