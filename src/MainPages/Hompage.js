// pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, Award, FileText, Handshake, Briefcase, Download, Building, Calendar, Star } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Welcome to Maluti TVET College',
      subtitle: 'Empowering Futures, Building Careers',
      button1: 'Student Portal',
      button1Link: '/login',
      button2: 'Find a Campus',
      button2Link: '/campuses',
      image: '/background1.png'
    },
    {
      title: '2025 Applications Now Open',
      subtitle: 'Apply online for the 2025 academic year. Limited spaces available!',
      button1: 'Apply Now',
      button1Link: '/login',
      button2: 'View Programs',
      button2Link: '/courses',
      image: '/application.jfif'
    },
    {
      title: 'NSFAS Funding Available',
      subtitle: 'Financial assistance for qualifying students. Apply for NSFAS today!',
      button1: 'Apply for NSFAS',
      button1Link: 'https://my.nsfas.org.za/',
      button2: 'Learn More',
      button2Link: '/nsfas',
      image: '/nsfas.jfif',
      isExternalPrimary: true
    },
    {
      title: 'Stay Safe with Namola App',
      subtitle: 'Your safety is our priority. Download the Namola safety app for 24/7 protection.',
      button1: 'Download Namola',
      button1Link: 'https://www.namola.com/',
      button2: 'Learn More',
      button2Link: 'https://www.namola.com/',
      image: '/namola1.jpg',
      isDownload: true,
      isExternalPrimary: true,
      isExternalSecondary: true
    },
    {
      title: 'COVID-19 Health & Safety',
      subtitle: 'Stay informed about our health protocols and vaccination campaigns.',
      button1: 'View Guidelines',
      button1Link: 'https://www.gov.za/covid-19/resources/regulations-and-guidelines-coronavirus-covid-19',
      button2: 'Get Vaccinated',
      button2Link: '/vaccination',
      image: '/covid19.jfif',
      isExternalPrimary: true
    },
    {
      title: 'Report Fraud Anonymously',
      subtitle: 'Help us maintain integrity. Report any fraudulent activities through our hotline.',
      button1: 'Report Now',
      button1Link: '/report-fraud',
      button2: 'View Hotline',
      button2Link: '/fraud-hotline',
      image: '/fraud.jpg',
      fraudInfo: {
        provider: 'Whistle Blower',
        phone: '0800 333 178',
        sms: '33490',
        email: 'malutitvet@whistleblowing.co.za'
      }
    }
  ];

  const handleButtonClick = (link, isExternal = false) => {
    if (isExternal || link?.startsWith('http')) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      navigate(link);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const reasons = [
    {
      icon: <GraduationCap size={40} strokeWidth={1.5} />,
      title: 'Quality Education',
      text: 'Industry-relevant programs designed to equip you with practical skills and knowledge for your future career.'
    },
    {
      icon: <BookOpen size={40} strokeWidth={1.5} />,
      title: 'Modern Resources',
      text: 'State-of-the-art facilities, libraries, and digital resources to support your learning journey.'
    },
    {
      icon: <Users size={40} strokeWidth={1.5} />,
      title: 'Expert Faculty',
      text: 'Learn from experienced instructors who bring real-world expertise to the classroom.'
    },
    {
      icon: <Award size={40} strokeWidth={1.5} />,
      title: 'Recognized Certifications',
      text: 'Nationally accredited qualifications that open doors to employment and further studies.'
    }
  ];

  const quickAccessItems = [
    { 
      title: 'Current Vacancies', 
      icon: <FileText size={24} />, 
      description: 'Explore career opportunities and join our dedicated team of educators and staff.',
      image: 'https://media.istockphoto.com/id/506351726/photo/recruiter-advertising-for-job-vacancies-searching-candidates-to-hire.jpg?s=612x612&w=0&k=20&c=JNtjXENGX7igzXRDCaifzEcRox2FCUPzF0hptTK3dRw=',
      link: '/vacancies'
    },
    { 
      title: 'Tenders', 
      icon: <Handshake size={24} />, 
      description: 'View open tender opportunities and submit your bids for college projects.',
      image: 'https://img.freepik.com/free-photo/business-people-handshake-greeting-deal-work_1150-645.jpg?semt=ais_incoming&w=740&q=80',
      link: '#'
    },
    { 
      title: 'Student Support', 
      icon: <Users size={24} />, 
      description: 'Access academic advising, counseling, and financial aid services.',
      image: 'https://thumbs.dreamstime.com/b/student-support-services-blue-student-support-services-blue-background-281874301.jpg',
      link: '#'
    },
    { 
      title: 'NSFAS', 
      icon: <GraduationCap size={24} />, 
      description: 'Apply for NSFAS funding and check your application status online.',
      image: 'https://onlinestudent.co.za/wp-content/uploads/2025/07/NSFAS.webp',
      link: 'https://my.nsfas.org.za/'
    },
    { 
      title: 'Corporate Affairs', 
      icon: <Building size={24} />, 
      description: 'Partnership opportunities and corporate engagement initiatives.',
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20220208/pngtree-golden-business-executives-on-a-news-background-a-concept-of-current-affairs-photo-image_11773034.jpg',
      link: '#'
    },
    { 
      title: 'Enrolment', 
      icon: <Calendar size={24} />, 
      description: 'Register for courses and complete your enrolment process.',
      image: 'https://st3.depositphotos.com/3591429/12696/i/450/depositphotos_126967612-stock-photo-woman-working-with-laptop-in.jpg',
      link: '/login'
    }
  ];

  const generalInfoItems = [
    {
      icon: <Handshake size={32} strokeWidth={1.5} />,
      title: 'International Partnerships',
      description: 'We collaborate with international institutions to provide global learning opportunities, exchange programs, and internationally recognized certifications for our students.',
      readMoreLink: '#'
    },
    {
      icon: <Briefcase size={32} strokeWidth={1.5} />,
      title: 'Programmes',
      description: 'Offering a wide range of TVET programs including Business Studies, Engineering, Information Technology, Hospitality, and Agriculture to meet industry demands.',
      readMoreLink: '/courses'
    }
  ];

  const galleryImages = [
    {
      url: 'https://fundiconnect.co.za/wp-content/uploads/elementor/thumbs/maluti-Tvet-Splash-2-1-q9wc2m1xpcbn3302t6iyuc26hrmnn28u7h1iji21fc.png',
      title: 'Main Campus',
      alt: 'Main Campus Building'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUocGczblf0Q-BmqVTiFCkJ8qPKIA5avwqzA&s',
      title: 'Students Learning',
      alt: 'Students in classroom'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUme_o6Ml2hUZY4J9Ut_5ZiTxuL6GgQ45WCA&s',
      title: 'Graduation Ceremony',
      alt: 'Graduation celebration'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHxENxPc0M0Xk1Wn7zfpNWDXbX-dJI1ztbA&s',
      title: 'Faculty Member',
      alt: 'Professor teaching'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS5ioEM6yNeLR2RYFBAa8dVZ2i9lPT4WJQ-Q&s',
      title: 'Engineering Workshop',
      alt: 'Engineering students at work'
    }
  ];

  const handleQuickAccessClick = (link) => {
    if (link && link !== '#') {
      if (link.startsWith('http')) {
        window.open(link, '_blank', 'noopener,noreferrer');
      } else {
        navigate(link);
      }
    }
  };

  return (
    <main>
      {/* Hero Slideshow Section */}
      <section className="hero">
        <div className="slide-container" style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
          <div className="overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">{slides[currentSlide].title}</h1>
            <p className="hero-slogan">{slides[currentSlide].subtitle}</p>
            
            {slides[currentSlide].fraudInfo && (
              <div className="fraud-info">
                <p><strong>Service Provider:</strong> {slides[currentSlide].fraudInfo.provider}</p>
                <p><strong>Call:</strong> {slides[currentSlide].fraudInfo.phone} | <strong>SMS:</strong> {slides[currentSlide].fraudInfo.sms}</p>
                <p><strong>Email:</strong> {slides[currentSlide].fraudInfo.email}</p>
              </div>
            )}
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => handleButtonClick(slides[currentSlide].button1Link, slides[currentSlide].isExternalPrimary || slides[currentSlide].isExternal)}
              >
                {slides[currentSlide].isDownload && <Download size={18} style={{ marginRight: '8px' }} />}
                {slides[currentSlide].button1}
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => handleButtonClick(slides[currentSlide].button2Link, slides[currentSlide].isExternalSecondary || slides[currentSlide].isExternal)}
              >
                {slides[currentSlide].button2}
              </button>
            </div>
          </div>
          <div className="slide-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Maluti Section */}
      <section className="why-choose">
        <div className="container">
          <h2 className="section-title">Why Choose <span style={{ color: '#D4AF37' }}>Maluti TVET</span> College?</h2>
          <div className="reasons-grid">
            {reasons.map((reason, index) => (
              <div key={index} className="reason-card">
                <div className="reason-left-border"></div>
                <div className="icon-wrapper">
                  {reason.icon}
                </div>
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-text">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curly Divider */}
      <div className="curly-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,50 250,80 400,60 C550,40 650,20 800,40 C950,60 1050,80 1200,30 L1200,120 L0,120 Z" fill="#f8f9fa"></path>
          <path d="M0,0 C150,60 250,90 400,70 C550,50 650,30 800,50 C950,70 1050,90 1200,40 L1200,120 L0,120 Z" fill="#D4AF37" opacity="0.1"></path>
        </svg>
      </div>

      {/* Quick Access Section */}
      <section className="quick-access">
        <div className="container">
          <h2 className="section-title">Quick Access</h2>
          <div className="quick-grid">
            {quickAccessItems.map((item, index) => (
              <div key={index} className="quick-card" onClick={() => handleQuickAccessClick(item.link)}>
                <div className="quick-image">
                  <img src={item.image} alt={item.title} />
                  <div className="quick-image-overlay"></div>
                </div>
                <div className="quick-blue-bar"></div>
                <div className="quick-content">
                  <div className="quick-icon">{item.icon}</div>
                  <div>
                    <h3 className="quick-title">{item.title}</h3>
                    <p className="quick-description">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curly Divider 2 */}
      <div className="curly-divider reverse">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,30 C150,80 250,50 400,70 C550,90 650,110 800,90 C950,70 1050,50 1200,80 L1200,0 L0,0 Z" fill="white"></path>
          <path d="M0,20 C150,70 250,40 400,60 C550,80 650,100 800,80 C950,60 1050,40 1200,70 L1200,0 L0,0 Z" fill="#D4AF37" opacity="0.1"></path>
        </svg>
      </div>

      {/* General Information Section */}
      <section className="general-info">
        <div className="container">
          <div className="info-grid">
            {generalInfoItems.map((item, index) => (
              <div key={index} className="info-card">
                <div className="info-icon">{item.icon}</div>
                <h3 className="info-title">{item.title}</h3>
                <p className="info-description">{item.description}</p>
                <a href={item.readMoreLink} className="read-more-btn">Read More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curly Divider 3 */}
      <div className="curly-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,50 250,80 400,60 C550,40 650,20 800,40 C950,60 1050,80 1200,30 L1200,120 L0,120 Z" fill="#f8f9fa"></path>
          <path d="M0,0 C150,60 250,90 400,70 C550,50 650,30 800,50 C950,70 1050,90 1200,40 L1200,120 L0,120 Z" fill="#D4AF37" opacity="0.1"></path>
        </svg>
      </div>

      {/* Message from Principal Section with Heading */}
      <section className="principal-message">
        <div className="container">
          <div className="principal-heading-wrapper">
            <h2 className="principal-section-title">
              Message from <span style={{ color: '#D4AF37' }}>the Principal</span>
            </h2>
            <div className="principal-heading-line"></div>
          </div>
          <div className="principal-wrapper">
            <div className="principal-image">
              <img src="/principal.jfif" alt="Principal of Maluti TVET College" onError={(e) => { e.target.src = 'https://placehold.co/400x500/141632/white?text=Principal'; }} />
            </div>
            <div className="principal-content">
              <h2 className="principal-name">Mr. Motlalepula Elias Tsotetsi</h2>
              <p className="principal-title">Principal of Maluti TVET College</p>
              <p className="principal-message-text">
                Welcome to Maluti TVET College, where we are committed to transforming lives through quality technical and vocational education. Our institution strives to produce graduates who are not only skilled but also innovative and ready to contribute to the economy. We believe in creating an environment that fosters excellence, integrity, and lifelong learning. Together, we can build a brighter future for our students and our community.
              </p>
              <div className="signature">Mr. Motlalepula Elias Tsotetsi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section - 5 Pictures Next to Each Other */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Our <span style={{ color: '#D4AF37' }}>Campus Life</span></h2>
          <p className="gallery-subtitle">Experience the vibrant atmosphere at Maluti TVET College</p>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image.url} alt={image.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <div className="gallery-content">
                    <h4>{image.title}</h4>
                    <Star size={24} color="#D4AF37" />
                  </div>
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
        }

        .hero {
          position: relative;
          height: 400px;
          overflow: hidden;
        }

        .slide-container {
          position: relative;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: background-image 0.5s ease-in-out;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(20, 22, 50, 0.75);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          padding: 0 20px;
        }

        .hero-title {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
          font-weight: bold;
        }

        .hero-slogan {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          opacity: 0.95;
        }

        .fraud-info {
          background: rgba(0,0,0,0.6);
          padding: 8px 16px;
          border-radius: 8px;
          margin-bottom: 1rem;
          font-size: 0.85rem;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.3s;
          border: none;
          display: inline-flex;
          align-items: center;
        }

        .btn-primary {
          background-color: #C2B9F5;
          color: #141632;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          background-color: var(--gold);
        }

        .btn-secondary {
          background-color: transparent;
          color: white;
          border: 2px solid white;
        }

        .btn-secondary:hover {
          transform: translateY(-3px);
          border-color: var(--gold);
          color: var(--gold);
        }

        .slide-dots {
          position: absolute;
          bottom: 15px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 8px;
          z-index: 2;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .dot.active {
          background-color: var(--gold);
        }

        .why-choose {
          padding: 60px 20px 50px 20px;
          background-color: white;
        }

        .quick-access {
          padding: 60px 20px;
          background-color: #f8f9fa;
        }

        .general-info {
          padding: 60px 20px;
          background-color: white;
        }

        .principal-message {
          padding: 60px 20px 40px 20px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .gallery-section {
          padding: 60px 20px;
          background: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          font-size: 2.2rem;
          color: #141632;
          margin-bottom: 1rem;
          font-weight: bold;
        }

        .gallery-subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 2.5rem;
          font-size: 0.95rem;
        }

        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .reason-card {
          position: relative;
          text-align: center;
          padding: 1.8rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s, box-shadow 0.3s;
          background: white;
          overflow: hidden;
        }

        .reason-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          border-bottom: 2px solid var(--gold);
        }

        .reason-left-border {
          position: absolute;
          left: 0;
          top: 0;
          width: 5px;
          height: 100%;
          background-color: #141632;
        }

        .icon-wrapper {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 80px;
          height: 80px;
          background-color: #D6D0F5;
          border-radius: 50%;
          margin-bottom: 1.2rem;
          color: #141632;
          transition: background-color 0.3s;
        }

        .reason-card:hover .icon-wrapper {
          background-color: var(--gold);
        }

        .reason-title {
          font-size: 1.2rem;
          font-weight: bold;
          color: #141632;
          margin-bottom: 0.75rem;
        }

        .reason-text {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .curly-divider {
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }

        .curly-divider svg {
          width: 100%;
          height: 60px;
          display: block;
        }

        .curly-divider.reverse svg {
          transform: rotate(180deg);
        }

        .quick-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.8rem;
        }

        .quick-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }

        .quick-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .quick-image {
          position: relative;
          height: 140px;
          overflow: hidden;
        }

        .quick-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .quick-card:hover .quick-image img {
          transform: scale(1.05);
        }

        .quick-image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50px;
          background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
        }

        .quick-blue-bar {
          height: 5px;
          background-color: #141632;
        }

        .quick-card:hover .quick-blue-bar {
          background-color: var(--gold);
        }

        .quick-content {
          padding: 1.3rem;
          display: flex;
          gap: 1rem;
        }

        .quick-icon {
          color: #141632;
          display: flex;
          align-items: flex-start;
          flex-shrink: 0;
        }

        .quick-title {
          font-size: 1rem;
          font-weight: 700;
          color: #141632;
          margin: 0 0 0.4rem 0;
        }

        .quick-description {
          font-size: 0.8rem;
          color: #666;
          line-height: 1.5;
          margin: 0;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .info-card {
          padding: 1.8rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          background: white;
          transition: transform 0.3s;
        }

        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          border-bottom: 2px solid var(--gold);
        }

        .info-icon {
          color: #141632;
          margin-bottom: 1.2rem;
        }

        .info-title {
          font-size: 1.4rem;
          font-weight: bold;
          color: #141632;
          margin-bottom: 0.8rem;
        }

        .info-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.2rem;
        }

        .read-more-btn {
          color: #141632;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s;
        }

        .read-more-btn:hover {
          color: var(--gold);
        }

        /* Principal Section with Heading */
        .principal-heading-wrapper {
          text-align: center;
          margin-bottom: 2rem;
        }

        .principal-section-title {
          font-size: 2.2rem;
          color: #141632;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }

        .principal-heading-line {
          width: 80px;
          height: 4px;
          background: var(--gold);
          margin: 0 auto;
          border-radius: 2px;
        }

        .principal-wrapper {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2.5rem;
          align-items: start;
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .principal-image img {
          width: 100%;
          border-radius: 16px;
          object-fit: cover;
          height: 320px;
        }

        .principal-name {
          font-size: 1.8rem;
          font-weight: bold;
          color: #141632;
          margin-bottom: 0.4rem;
        }

        .principal-title {
          font-size: 0.95rem;
          color: #666;
          margin-bottom: 1.2rem;
          font-style: italic;
        }

        .principal-message-text {
          color: #444;
          line-height: 1.7;
          margin-bottom: 1.2rem;
        }

        .signature {
          font-family: 'Brush Script MT', cursive;
          font-size: 1.6rem;
          color: var(--gold);
        }

        /* Gallery Section - 5 Images Next to Each Other */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          cursor: pointer;
          aspect-ratio: 1 / 1;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          padding: 1rem;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
          transform: translateY(0);
        }

        .gallery-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: white;
        }

        .gallery-content h4 {
          font-size: 0.85rem;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .reasons-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          .quick-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hero {
            height: 420px;
          }
          .hero-title {
            font-size: 1.6rem;
          }
          .hero-slogan {
            font-size: 0.9rem;
          }
          .section-title {
            font-size: 1.6rem;
          }
          .reasons-grid {
            grid-template-columns: 1fr;
          }
          .quick-grid {
            grid-template-columns: 1fr;
          }
          .info-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .principal-wrapper {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .principal-image {
            max-width: 220px;
            margin: 0 auto;
          }
          .fraud-info {
            font-size: 0.65rem;
            padding: 6px 12px;
          }
          .btn {
            padding: 8px 20px;
            font-size: 0.85rem;
          }
          .curly-divider svg {
            height: 40px;
          }
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .hero {
            height: 450px;
          }
          .why-choose, .quick-access, .general-info, .principal-message, .gallery-section {
            padding: 40px 20px;
          }
          .section-title {
            margin-bottom: 1.8rem;
          }
        }
      `}</style>
    </main>
  );
};

export default HomePage;