// MainPages/Campuses.js
import React, { useState } from 'react';
import { MapPin, Phone, Mail, BookOpen, Briefcase, ChevronRight } from 'lucide-react';

const CampusesPage = () => {
  const [selectedCampus, setSelectedCampus] = useState(null);

  const campuses = [
    {
      id: 1,
      name: "Main Campus (Tshiya)",
      location: "Mampoi Road, Phuthaditjhaba, 9866",
      phone: "058 713 0612",
      altPhone: "087 941 3587",
      email: "info@malutitvet.co.za",
      programmes: ["Business Studies", "Engineering", "Early Childhood Development", "Management Assistant"],
      description: "The main campus serves as the central hub of Maluti TVET College, offering a wide range of programmes including the newly accredited Early Childhood Development Level 4 qualification.",
      image: "https://fundiconnect.co.za/wp-content/uploads/elementor/thumbs/maluti-Tvet-Splash-2-1-q9wc2m1xpcbn3302t6iyuc26hrmnn28u7h1iji21fc.png",
      bgColor: "#141632"
    },
    {
      id: 2,
      name: "Bethlehem Campus",
      location: "Corner of High and Wessels Streets, Bethlehem, 9700",
      phone: "087 941 6839",
      altPhone: "058 303 1722",
      email: "bethlehem@malutitvet.co.za",
      programmes: ["Business Studies", "Engineering", "Information Technology", "Hospitality"],
      description: "Located in the heart of Bethlehem, this campus offers NC(V) and Report 191 programmes.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCuXM257NhE1f9lxeEUkARU-iNYdzVA7WuA&s",
      bgColor: "#1a1f3a"
    },
    {
      id: 3,
      name: "Harrismith Campus",
      location: "Extension 4751, Intabazwe Corridor, Harrismith, 9880",
      phone: "058 622 2785",
      altPhone: "087 941 3549",
      email: "harrismith@malutitvet.co.za",
      programmes: ["Engineering", "Civil Engineering", "Electrical Engineering", "Business Studies"],
      description: "Situated in the Intabazwe Corridor, this campus specializes in engineering and technical programmes.",
      image: "https://www.yellosa.co.za/img/za/k/1461242881_62276.jpg",
      bgColor: "#141632"
    },
    {
      id: 4,
      name: "Bonamelo Campus",
      location: "Stadium Road, Phuthaditjhaba, 9866",
      phone: "058 713 1391",
      altPhone: "087 941 6827",
      email: "bonamelo@malutitvet.co.za",
      programmes: ["Education", "Business Studies", "Information Technology", "Management"],
      description: "Formerly a College of Education, Bonamelo Campus now offers a variety of business and IT programmes.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKaAiEq18XkmsliyTxzbZh4tFWwyeXGRuvYg&s",
      bgColor: "#1a1f3a"
    },
    {
      id: 5,
      name: "Itemoheleng Campus",
      location: "Mampoi Road, Phuthaditjhaba, 9866",
      phone: "058 713 0296",
      altPhone: "087 941 6838",
      email: "itemoheleng@malutitvet.co.za",
      programmes: ["Bricklaying", "Plastering", "Painting", "Construction Management"],
      description: "This campus specializes in construction trades, including the newly accredited Bricklayer Level 4 programme.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBXDr6eIYpzM1OVKs-Rn31BiXmsoOHE-gqA&s",
      bgColor: "#141632"
    },
    {
      id: 6,
      name: "Kwetlisong Campus",
      location: "Cnr. Mampoi & Bolata Road, Riverside, Phuthaditjhaba, 9870",
      phone: "058 713 6655",
      altPhone: "087 941 3588",
      email: "kwetlisong@malutitvet.co.za",
      programmes: ["Electrical Engineering", "Computer Technician", "Information Technology", "Electronics"],
      description: "Kwetlisong Campus is the center for electrical and computer studies, offering Electrician Level 4 and Computer Technician Level 5 programmes.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_bKa5Ek_X_WDtNzpnaBtXYZ-oAJFJ41yAA&s",
      bgColor: "#1a1f3a"
    },
    {
      id: 7,
      name: "Lere la Tshepe Campus",
      location: "Tseki Village, Poelong, 9874",
      phone: "058 713 6611",
      altPhone: "",
      email: "lerelatshepe@malutitvet.co.za",
      programmes: ["Fitting and Turning", "Welding", "Mechanical Engineering", "Boiler Making"],
      description: "Located in Tseki Village, this campus focuses on mechanical and metalwork engineering.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9J9yAUjJKpuyBmO09jPw1leZ4-HQoz1cVhg&s",
      bgColor: "#141632"
    },
    {
      id: 8,
      name: "Sefikeng Campus",
      location: "107 Rosedale, Harrismith, 9870",
      phone: "058 713 6064",
      altPhone: "087 941 6408",
      email: "sefikeng@malutitvet.co.za",
      programmes: ["Business Studies", "Financial Management", "Human Resources", "Marketing"],
      description: "Formerly a College of Education, Sefikeng Campus now offers comprehensive business and management programmes.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG2coyIKnDTmeDv3xqmExJfCCnm6aN-zqCpw&s",
      bgColor: "#1a1f3a"
    }
  ];

  const featuredProgrammes = [
    {
      name: "Bricklayer Level 4",
      campus: "Itemoheleng Campus",
      icon: <Briefcase size={28} />,
      image: "https://ebmtcacademy.org.za/images/bricklayer.jpg"
    },
    {
      name: "Electrician Level 4",
      campus: "Kwetlisong Campus",
      icon: <Briefcase size={28} />,
      image: "https://msunduziskillscentre.co.za/images/electrician.jpg"
    },
    {
      name: "Early Childhood Development Level 4",
      campus: "Main Campus",
      icon: <Briefcase size={28} />,
      image: "https://matasolveacademy.co.za/wp-content/uploads/2024/03/early-childhood-development.jpg"
    },
    {
      name: "Computer Technician Level 5",
      campus: "Kwetlisong Campus",
      icon: <Briefcase size={28} />,
      image: "https://www.itupskill.co.za/wp-content/uploads/2021/04/pc-tech.jpg"
    }
  ];

  return (
    <main className="campuses-page">
      {/* Hero Section - Same height as Courses page */}
      <section className="campuses-hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Our <span style={{ color: '#D4AF37' }}>Campuses</span></h1>
          <p>Maluti TVET College has eight (8) campuses located across the North Eastern Free State, offering quality technical and vocational education.</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">8</span>
              <span className="stat-label">Campuses</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Towns</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Programmes</span>
            </div>
          </div>
        </div>
      </section>

      <section className="campuses-grid-section">
        <div className="container">
          <h2 className="section-title">Explore <span style={{ color: '#D4AF37' }}>Our Campuses</span></h2>
          <p className="section-subtitle">From the majestic Maluti Mountains to the bustling towns of Bethlehem and Harrismith, our campuses are strategically located to serve students across the region.</p>
          
          <div className="campuses-grid">
            {campuses.map((campus) => (
              <div key={campus.id} className="campus-card" onClick={() => setSelectedCampus(campus)}>
                <div className="campus-image">
                  <img src={campus.image} alt={campus.name} />
                  <div className="campus-overlay"></div>
                </div>
                <div className="campus-info">
                  <h3 className="campus-name">{campus.name}</h3>
                  <div className="campus-location">
                    <MapPin size={14} />
                    <span>{campus.location.split(',')[0]}</span>
                  </div>
                  <div className="campus-programmes">
                    <BookOpen size={14} />
                    <span>{campus.programmes.slice(0, 2).join(", ")}</span>
                  </div>
                  <button className="view-details-btn">View Details <ChevronRight size={14} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-programmes">
        <div className="container">
          <h2 className="section-title">Featured <span style={{ color: '#D4AF37' }}>Occupational</span> Programmes</h2>
          <p className="section-subtitle">Newly accredited programmes for 2025 across our campuses</p>
          <div className="programmes-grid">
            {featuredProgrammes.map((programme, index) => (
              <div key={index} className="programme-card">
                <div className="programme-image">
                  <img src={programme.image} alt={programme.name} />
                </div>
                <div className="programme-info">
                  <div className="programme-icon">{programme.icon}</div>
                  <h3>{programme.name}</h3>
                  <p>{programme.campus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Modal */}
      {selectedCampus && (
        <div className="modal-overlay" onClick={() => setSelectedCampus(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCampus(null)}>×</button>
            <div className="modal-image">
              <img src={selectedCampus.image} alt={selectedCampus.name} />
            </div>
            <div className="modal-header">
              <h2>{selectedCampus.name}</h2>
              <div className="modal-location">
                <MapPin size={18} color="#D4AF37" />
                <span>{selectedCampus.location}</span>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-description">
                <p>{selectedCampus.description}</p>
              </div>
              <div className="modal-contact">
                <h3>Contact Information</h3>
                <p><Phone size={16} /> {selectedCampus.phone}</p>
                {selectedCampus.altPhone && <p><Phone size={16} /> {selectedCampus.altPhone}</p>}
                <p><Mail size={16} /> {selectedCampus.email}</p>
              </div>
              <div className="modal-programmes">
                <h3>Programmes Offered</h3>
                <ul>
                  {selectedCampus.programmes.map((prog, idx) => (
                    <li key={idx}>{prog}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <button className="apply-btn">Apply Now</button>
              <button className="direction-btn">Get Directions</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        :root {
          --gold: #D4AF37;
          --gold-dark: #B8960C;
        }

        .campuses-page {
          font-family: 'Arial', sans-serif;
        }

        /* Hero Section - Same height as Courses page */
        .campuses-hero {
          position: relative;
          min-height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 40px 20px;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('/background.jfif');
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
          background: rgba(20, 22, 50, 0.85);
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
          margin-bottom: 1.5rem;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--gold);
        }

        .stat-label {
          font-size: 0.75rem;
          opacity: 0.8;
        }

        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Section Titles */
        .section-title {
          text-align: center;
          font-size: 1.8rem;
          color: #141632;
          margin-bottom: 1rem;
          font-weight: bold;
        }

        .section-subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 2.5rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          font-size: 0.9rem;
        }

        /* Campuses Grid - 4 columns */
        .campuses-grid-section {
          padding: 50px 20px;
          background-color: #f8f9fa;
        }

        .campuses-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .campus-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.3s;
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .campus-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          border-bottom: 2px solid var(--gold);
        }

        .campus-image {
          position: relative;
          height: 160px;
          overflow: hidden;
        }

        .campus-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .campus-card:hover .campus-image img {
          transform: scale(1.05);
        }

        .campus-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
        }

        .campus-info {
          padding: 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .campus-name {
          font-size: 1rem;
          font-weight: bold;
          color: #141632;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .campus-location, .campus-programmes {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.7rem;
          color: #666;
          margin-bottom: 0.4rem;
        }

        .view-details-btn {
          background: none;
          border: none;
          color: #141632;
          font-weight: 600;
          font-size: 0.75rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0;
          margin-top: 0.75rem;
          transition: all 0.3s;
        }

        .view-details-btn:hover {
          color: var(--gold);
          gap: 0.5rem;
        }

        /* Featured Programmes */
        .featured-programmes {
          padding: 50px 20px;
          background: white;
        }

        .programmes-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .programme-card {
          background: #f8f9fa;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        .programme-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
          border-bottom: 2px solid var(--gold);
        }

        .programme-image {
          height: 140px;
          overflow: hidden;
        }

        .programme-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .programme-card:hover .programme-image img {
          transform: scale(1.05);
        }

        .programme-info {
          padding: 1rem;
          text-align: center;
        }

        .programme-icon {
          color: #141632;
          margin-bottom: 0.5rem;
          display: inline-block;
          transition: color 0.3s;
        }

        .programme-card:hover .programme-icon {
          color: var(--gold);
        }

        .programme-info h3 {
          font-size: 0.9rem;
          font-weight: bold;
          color: #141632;
          margin-bottom: 0.25rem;
          line-height: 1.3;
        }

        .programme-info p {
          font-size: 0.7rem;
          color: #666;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
        }

        .modal-content {
          background: white;
          border-radius: 20px;
          max-width: 550px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          position: relative;
          animation: modalSlideIn 0.3s ease;
        }

        @keyframes modalSlideIn {
          from {
            transform: translateY(-30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .modal-close {
          position: absolute;
          top: 10px;
          right: 15px;
          background: rgba(0,0,0,0.5);
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: white;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: background 0.3s;
        }

        .modal-close:hover {
          background: rgba(0,0,0,0.8);
        }

        .modal-image {
          height: 180px;
          overflow: hidden;
        }

        .modal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-header {
          padding: 1.2rem 1.5rem 0.5rem;
        }

        .modal-header h2 {
          font-size: 1.3rem;
          color: #141632;
          margin-bottom: 0.3rem;
        }

        .modal-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: #666;
        }

        .modal-body {
          padding: 0 1.5rem 1rem;
        }

        .modal-description p {
          color: #444;
          line-height: 1.5;
          font-size: 0.85rem;
          margin-bottom: 1rem;
        }

        .modal-contact h3, .modal-programmes h3 {
          font-size: 1rem;
          font-weight: bold;
          color: #141632;
          margin-bottom: 0.5rem;
        }

        .modal-contact p {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.8rem;
          color: #666;
          margin-bottom: 0.4rem;
        }

        .modal-programmes ul {
          list-style: none;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .modal-programmes li {
          background: #f0f0f0;
          padding: 0.2rem 0.7rem;
          border-radius: 20px;
          font-size: 0.7rem;
          color: #141632;
          transition: all 0.3s;
        }

        .modal-programmes li:hover {
          background: var(--gold);
          color: white;
        }

        .modal-footer {
          padding: 1rem 1.5rem 1.5rem;
          display: flex;
          gap: 1rem;
          border-top: 1px solid #eee;
        }

        .apply-btn, .direction-btn {
          flex: 1;
          padding: 0.6rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
        }

        .apply-btn {
          background-color: #141632;
          color: white;
        }

        .apply-btn:hover {
          background-color: var(--gold);
          color: #141632;
        }

        .direction-btn {
          background-color: transparent;
          color: #141632;
          border: 1.5px solid #141632;
        }

        .direction-btn:hover {
          background-color: var(--gold);
          border-color: var(--gold);
          color: #141632;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .campuses-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          .programmes-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 1.8rem;
          }
          .hero-content p {
            font-size: 0.9rem;
          }
          .hero-stats {
            gap: 1.5rem;
          }
          .section-title {
            font-size: 1.4rem;
          }
          .campus-name {
            font-size: 0.9rem;
          }
          .hero-stats {
            gap: 1rem;
          }
          .stat-number {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 640px) {
          .campuses-grid {
            grid-template-columns: 1fr;
          }
          .programmes-grid {
            grid-template-columns: 1fr;
          }
          .campuses-hero {
            padding: 30px 20px;
          }
          .hero-content h1 {
            font-size: 1.5rem;
          }
          .modal-footer {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
};

export default CampusesPage;