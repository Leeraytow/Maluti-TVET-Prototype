// MainPages/Contact.js
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, Star } from 'lucide-react';

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
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Contact <span style={{ color: '#D4AF37' }}>Us</span></h1>
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
              <h2>Send Us a <span style={{ color: '#D4AF37' }}>Message</span></h2>
              <p>Have a question? Fill out the form below and we'll get back to you as soon as possible.</p>
              
              {isSubmitted && (
                <div className="success-message">
                  <Star size={16} style={{ marginRight: '8px' }} />
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
              <h2>Find <span style={{ color: '#D4AF37' }}>Us</span></h2>
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
                <MapPin size={18} color="#D4AF37" />
                <span>1 Moshoeshoe Road, Old Europa, Bloemfontein, 9301</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="departments-section">
        <div className="container">
          <h2 className="section-title">Contact <span style={{ color: '#D4AF37' }}>Departments</span> Directly</h2>
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
        :root {
          --gold: #D4AF37;
          --gold-dark: #B8960C;
          --gold-light: #F3E5AB;
        }

        .contact-page {
          font-family: 'Arial', sans-serif;
        }

        /* Hero Section */
        .contact-hero {
          position: relative;
          min-height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 50px 20px;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('https://cdn.briefly.co.za/images/1200x675/b4aa8bcc6dc0f701.jpeg?v=1');
          background-size: cover;
          background-position: center;
          filter: blur(2px);
          transform: scale(1.02);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(20, 22, 50, 0.88);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-content h1 {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
          font-weight: bold;
        }

        .hero-content p {
          font-size: 1rem;
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
          gap: 1.8rem;
        }

        .info-card {
          background: white;
          padding: 1.8rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          transition: all 0.3s;
          border-bottom: 3px solid transparent;
        }

        .info-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
          border-bottom-color: var(--gold);
        }

        .info-icon {
          width: 70px;
          height: 70px;
          background-color: #141632;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.2rem;
          color: white;
          transition: all 0.3s;
        }

        .info-card:hover .info-icon {
          background-color: var(--gold);
          transform: scale(1.05);
        }

        .info-card h3 {
          font-size: 1.2rem;
          font-weight: bold;
          color: #141632;
          margin-bottom: 0.8rem;
        }

        .info-card p {
          font-size: 0.85rem;
          color: #666;
          line-height: 1.5;
          margin-bottom: 0.3rem;
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
          font-weight: bold;
        }

        .contact-form-container p {
          color: #666;
          margin-bottom: 1.8rem;
          font-size: 0.9rem;
        }

        .success-message {
          background: linear-gradient(135deg, #d4edda, #c3e6cb);
          color: #155724;
          padding: 1rem;
          border-radius: 10px;
          margin-bottom: 1.5rem;
          border-left: 4px solid var(--gold);
          font-size: 0.85rem;
          display: flex;
          align-items: center;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 2px solid #eee;
          border-radius: 12px;
          font-size: 0.9rem;
          transition: all 0.3s;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
        }

        .submit-btn {
          background-color: #141632;
          color: white;
          padding: 1rem;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          transition: all 0.3s;
        }

        .submit-btn:hover {
          background-color: var(--gold);
          color: #141632;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
        }

        .map-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .map-wrapper {
          height: 320px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          border: 2px solid var(--gold);
        }

        .address-details {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 12px;
          color: #666;
          font-size: 0.9rem;
          transition: all 0.3s;
        }

        .address-details:hover {
          background: var(--gold-light);
          transform: translateX(5px);
        }

        /* Departments Section */
        .departments-section {
          padding: 60px 20px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .section-title {
          text-align: center;
          font-size: 2rem;
          color: #141632;
          margin-bottom: 0.75rem;
          font-weight: bold;
        }

        .section-subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 2.5rem;
          font-size: 0.95rem;
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
          background: white;
          border-radius: 16px;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          border-left: 3px solid transparent;
        }

        .department-card:hover {
          transform: translateX(8px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          border-left-color: var(--gold);
        }

        .dept-icon {
          color: #141632;
          flex-shrink: 0;
          transition: all 0.3s;
        }

        .department-card:hover .dept-icon {
          color: var(--gold);
          transform: scale(1.1);
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
          margin-bottom: 0.3rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          word-break: break-all;
          transition: color 0.3s;
        }

        .department-card:hover .dept-info p {
          color: #141632;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .info-cards {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          .departments-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .form-map-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .hero-content h1 {
            font-size: 2rem;
          }
          .hero-content p {
            font-size: 0.9rem;
          }
          .section-title {
            font-size: 1.6rem;
          }
          .info-cards {
            grid-template-columns: 1fr;
          }
          .departments-grid {
            grid-template-columns: 1fr;
          }
          .contact-hero {
            min-height: 200px;
            padding: 40px 20px;
          }
          .contact-info-section,
          .contact-form-section,
          .departments-section {
            padding: 40px 20px;
          }
          .map-wrapper {
            height: 250px;
          }
        }

        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 1.6rem;
          }
          .section-title {
            font-size: 1.3rem;
          }
          .info-card {
            padding: 1.2rem;
          }
          .department-card {
            padding: 1rem;
          }
        }
      `}</style>
    </main>
  );
};

export default ContactPage;