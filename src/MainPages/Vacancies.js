// MainPages/Vacancies.js
import React, { useState } from 'react';
import { 
  Briefcase, MapPin, Clock, DollarSign, GraduationCap, 
  Users, CheckCircle, ChevronRight, Send, 
  Search, Heart, Award, TrendingUp,
  Mail, FileText
} from 'lucide-react';

const VacanciesPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);

  const departments = [
    { id: 'all', name: 'All Departments', count: 9, icon: <Briefcase size={18} /> },
    { id: 'academic', name: 'Academic', count: 4, icon: <GraduationCap size={18} /> },
    { id: 'administration', name: 'Administration', count: 3, icon: <Users size={18} /> },
    { id: 'technical', name: 'Technical', count: 2, icon: <Award size={18} /> }
  ];

  const vacancies = [
    {
      id: 1,
      title: "Senior Lecturer - Business Studies",
      department: "academic",
      location: "Main Campus (Tshiya)",
      type: "Full-time",
      salary: "R350,000 - R450,000 per annum",
      closingDate: "2025-05-30",
      postedDate: "2025-04-15",
      description: "We are seeking a qualified Senior Lecturer to join our Business Studies department. The successful candidate will be responsible for teaching N4-N6 Business Management modules, curriculum development, and student assessment.",
      requirements: [
        "Master's degree in Business Management or related field",
        "Minimum 5 years teaching experience in TVET sector",
        "SACE registration",
        "Curriculum development experience"
      ],
      benefits: [
        "Competitive salary package",
        "Medical aid contribution",
        "Pension fund",
        "Professional development opportunities"
      ],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop",
      urgent: true
    },
    {
      id: 2,
      title: "IT Support Technician",
      department: "technical",
      location: "Bethlehem Campus",
      type: "Full-time",
      salary: "R220,000 - R280,000 per annum",
      closingDate: "2025-05-25",
      postedDate: "2025-04-10",
      description: "Looking for an experienced IT Support Technician to maintain computer labs, provide technical support to staff and students, and manage network infrastructure.",
      requirements: [
        "Diploma in IT or related field",
        "A+ and N+ certification",
        "2+ years experience in IT support",
        "Knowledge of network administration"
      ],
      benefits: [
        "Competitive salary",
        "Travel allowance",
        "Training opportunities",
        "Friendly work environment"
      ],
      image: "https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5d5e6bc509303c33bb2aa089_it-support-technician.jpg",
      urgent: false
    },
    {
      id: 3,
      title: "Student Support Officer",
      department: "administration",
      location: "Harrismith Campus",
      type: "Full-time",
      salary: "R200,000 - R260,000 per annum",
      closingDate: "2025-06-05",
      postedDate: "2025-04-12",
      description: "Student Support Officer needed to provide academic and personal support to students, manage student records, and coordinate wellness programs.",
      requirements: [
        "Bachelor's degree in Psychology or Social Work",
        "Experience in student support services",
        "Excellent communication skills",
        "Counselling certification preferred"
      ],
      benefits: [
        "Competitive salary",
        "Housing allowance",
        "Wellness programs",
        "Career growth"
      ],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=250&fit=crop",
      urgent: true
    },
    {
      id: 4,
      title: "Civil Engineering Lecturer",
      department: "academic",
      location: "Kwetlisong Campus",
      type: "Full-time",
      salary: "R320,000 - R420,000 per annum",
      closingDate: "2025-05-28",
      postedDate: "2025-04-08",
      description: "Seeking a qualified Civil Engineering Lecturer to teach N4-N6 Civil Engineering modules and supervise practical training sessions.",
      requirements: [
        "Bachelor's degree in Civil Engineering",
        "Teaching qualification preferred",
        "3+ years industry experience",
        "SACE registration"
      ],
      benefits: [
        "Market-related salary",
        "Research opportunities",
        "Conference attendance",
        "Professional membership fees"
      ],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop",
      urgent: false
    },
    {
      id: 5,
      title: "Finance Administrator",
      department: "administration",
      location: "Central Office, Bloemfontein",
      type: "Full-time",
      salary: "R240,000 - R300,000 per annum",
      closingDate: "2025-06-10",
      postedDate: "2025-04-14",
      description: "Finance Administrator needed to manage accounts payable/receivable, process payroll, and assist with financial reporting.",
      requirements: [
        "Bachelor's degree in Accounting or Finance",
        "2+ years experience",
        "Pastel/Pastel Evolution knowledge",
        "Attention to detail"
      ],
      benefits: [
        "Competitive salary",
        "Performance bonus",
        "Study leave",
        "Employee assistance program"
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      urgent: false
    },
    {
      id: 6,
      title: "Electrical Engineering Workshop Assistant",
      department: "technical",
      location: "Itemoheleng Campus",
      type: "Contract (12 months)",
      salary: "R180,000 - R220,000 per annum",
      closingDate: "2025-05-20",
      postedDate: "2025-04-05",
      description: "Workshop Assistant required to maintain electrical engineering equipment, assist lecturers during practical sessions, and ensure workshop safety.",
      requirements: [
        "National Diploma in Electrical Engineering",
        "Workshop experience",
        "Safety certification preferred",
        "Good communication skills"
      ],
      benefits: [
        "Contract position",
        "Hands-on experience",
        "Training provided",
        "Possible extension"
      ],
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=250&fit=crop",
      urgent: true
    },
    {
      id: 7,
      title: "Marketing and Communications Officer",
      department: "administration",
      location: "Main Campus (Tshiya)",
      type: "Full-time",
      salary: "R260,000 - R320,000 per annum",
      closingDate: "2025-06-08",
      postedDate: "2025-04-11",
      description: "Marketing Officer needed to manage social media, create content, coordinate events, and promote the college brand.",
      requirements: [
        "Degree in Marketing or Communications",
        "2+ years experience in marketing",
        "Graphic design skills preferred",
        "Excellent writing skills"
      ],
      benefits: [
        "Competitive package",
        "Creative work environment",
        "Networking opportunities",
        "Flexible hours"
      ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREbeCMXNB54Ypi85PhYQ_50yabj3-Q1J38jg&s",
      urgent: false
    },
    {
      id: 8,
      title: "Hospitality Lecturer",
      department: "academic",
      location: "Bonamelo Campus",
      type: "Full-time",
      salary: "R300,000 - R380,000 per annum",
      closingDate: "2025-06-01",
      postedDate: "2025-04-09",
      description: "Experienced Hospitality Lecturer required to teach Food and Beverage Management and Professional Cookery.",
      requirements: [
        "Degree in Hospitality Management",
        "Industry experience",
        "Teaching qualification preferred",
        "Chef certification beneficial"
      ],
      benefits: [
        "Competitive salary",
        "Industry connections",
        "Practical training facilities",
        "Staff meals"
      ],
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop",
      urgent: false
    },
    {
      id: 9,
      title: "Mechanical Engineering Lecturer",
      department: "academic",
      location: "Lere la Tshepe Campus",
      type: "Full-time",
      salary: "R320,000 - R420,000 per annum",
      closingDate: "2025-06-15",
      postedDate: "2025-04-13",
      description: "Mechanical Engineering Lecturer to teach N4-N6 Mechanical Engineering modules and manage workshop training.",
      requirements: [
        "Bachelor's degree in Mechanical Engineering",
        "Teaching experience",
        "Industry background",
        "SACE registration"
      ],
      benefits: [
        "Competitive salary",
        "Modern workshop",
        "Research support",
        "Professional development"
      ],
      image: "https://iimtu.edu.in/blog/wp-content/uploads/2023/12/ME-111.jpg",
      urgent: false
    }
  ];

  const filteredVacancies = vacancies.filter(vacancy => {
    const matchesDepartment = selectedDepartment === 'all' || vacancy.department === selectedDepartment;
    const matchesSearch = vacancy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          vacancy.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  // Get grid class based on number of items
  const getGridClass = () => {
    const count = filteredVacancies.length;
    if (count === 2 || count === 4) return 'grid-2cols';
    if (count === 3 || count === 6) return 'grid-3cols';
    if (count === 5) return 'grid-3cols';
    return 'grid-3cols';
  };

  const urgentVacancies = vacancies.filter(v => v.urgent).slice(0, 3);

  return (
    <main className="vacancies-page">
      {/* Hero Section - Same height as Courses page */}
      <section className="vacancies-hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Join <span style={{ color: '#D4AF37' }}>Our Team</span></h1>
          <p>Build your career with Maluti TVET College - where excellence meets opportunity</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">{vacancies.length}+</span>
              <span className="stat-label">Open Positions</span>
            </div>
            <div className="stat">
              <span className="stat-number">8</span>
              <span className="stat-label">Campuses</span>
            </div>
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Employees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="search-section">
        <div className="container">
          <div className="search-wrapper">
            <div className="search-box">
              <Search size={20} />
              <input 
                type="text" 
                placeholder="Search by job title or location..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="department-filters">
              {departments.map(dept => (
                <button
                  key={dept.id}
                  className={`filter-btn ${selectedDepartment === dept.id ? 'active' : ''}`}
                  onClick={() => setSelectedDepartment(dept.id)}
                >
                  {dept.icon}
                  <span>{dept.name}</span>
                  <span className="count">{dept.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Vacancies Banner */}
      {urgentVacancies.length > 0 && (
        <section className="urgent-section">
          <div className="container">
            <div className="urgent-header">
              <span className="urgent-badge">🔥 Urgent Hiring</span>
              <h2>Apply Now - <span style={{ color: '#D4AF37' }}>Limited Time</span> Opportunities</h2>
            </div>
            <div className="urgent-grid">
              {urgentVacancies.map(vacancy => (
                <div key={vacancy.id} className="urgent-card" onClick={() => setSelectedJob(vacancy)}>
                  <div className="urgent-image">
                    <img src={vacancy.image} alt={vacancy.title} />
                    <span className="urgent-tag">Urgent</span>
                  </div>
                  <div className="urgent-info">
                    <h3>{vacancy.title}</h3>
                    <p><MapPin size={14} /> {vacancy.location}</p>
                    <p><Clock size={14} /> Closes: {new Date(vacancy.closingDate).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Vacancies Grid */}
      <section className="vacancies-grid-section">
        <div className="container">
          <h2 className="section-title">
            {selectedDepartment === 'all' ? 'Current Vacancies' : departments.find(d => d.id === selectedDepartment)?.name}
          </h2>
          <p className="section-subtitle">Found {filteredVacancies.length} position{filteredVacancies.length !== 1 ? 's' : ''}</p>
          
          <div className={`vacancies-grid ${getGridClass()}`}>
            {filteredVacancies.map((vacancy) => (
              <div key={vacancy.id} className="vacancy-card" onClick={() => setSelectedJob(vacancy)}>
                <div className="vacancy-image">
                  <img src={vacancy.image} alt={vacancy.title} loading="lazy" />
                  {vacancy.urgent && <span className="urgent-badge-small">Urgent</span>}
                </div>
                <div className="vacancy-info">
                  <h3 className="vacancy-title">{vacancy.title}</h3>
                  <div className="vacancy-meta">
                    <span className="meta-item"><MapPin size={14} /> {vacancy.location}</span>
                    <span className="meta-item"><Briefcase size={14} /> {vacancy.type}</span>
                  </div>
                  <div className="vacancy-meta">
                    <span className="meta-item"><Clock size={14} /> Due: {new Date(vacancy.closingDate).toLocaleDateString()}</span>
                    <span className="meta-item"><DollarSign size={14} /> {vacancy.salary.split(' - ')[0]}</span>
                  </div>
                  <p className="vacancy-description">{vacancy.description.substring(0, 100)}...</p>
                  <button className="view-btn">
                    View Details <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">How to <span style={{ color: '#D4AF37' }}>Apply</span></h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-icon"><FileText size={32} /></div>
              <h3>Prepare Documents</h3>
              <p>Updated CV, certified copies of qualifications, ID copy</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-icon"><Mail size={32} /></div>
              <h3>Submit Application</h3>
              <p>Email your application to careers@maluti.edu.za</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-icon"><CheckCircle size={32} /></div>
              <h3>Shortlisting</h3>
              <p>Qualified candidates will be contacted within 14 days</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-icon"><Users size={32} /></div>
              <h3>Interview</h3>
              <p>Interviews conducted with the selection panel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Modal */}
      {selectedJob && (
        <div className="modal-overlay" onClick={() => setSelectedJob(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedJob(null)}>×</button>
            <div className="modal-image">
              <img src={selectedJob.image} alt={selectedJob.title} />
              {selectedJob.urgent && <span className="modal-urgent">Urgent Hire</span>}
            </div>
            <div className="modal-body">
              <h2>{selectedJob.title}</h2>
              <div className="modal-meta">
                <span><MapPin size={16} /> {selectedJob.location}</span>
                <span><Briefcase size={16} /> {selectedJob.type}</span>
                <span><Clock size={16} /> Closes: {new Date(selectedJob.closingDate).toLocaleDateString()}</span>
              </div>
              <div className="modal-section">
                <h3>Job Description</h3>
                <p>{selectedJob.description}</p>
              </div>
              <div className="modal-section">
                <h3>Requirements</h3>
                <ul>
                  {selectedJob.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-section">
                <h3>Benefits & Perks</h3>
                <ul>
                  {selectedJob.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <button className="apply-now-btn">Apply Now <Send size={16} /></button>
                <button className="save-btn">Save for Later <Heart size={16} /></button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        :root {
          --gold: #D4AF37;
          --gold-dark: #B8960C;
        }

        .vacancies-page {
          font-family: 'Arial', sans-serif;
        }

        /* Hero Section - Same height as Courses page */
        .vacancies-hero {
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
          background-image: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=400&fit=crop');
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

        /* Search Section */
        .search-section {
          padding: 40px 20px;
          background: white;
        }

        .search-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #f8f9fa;
          border: 2px solid #e0e0e0;
          border-radius: 50px;
          padding: 0.8rem 1.2rem;
          transition: all 0.3s;
        }

        .search-box:focus-within {
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
        }

        .search-box input {
          flex: 1;
          border: none;
          background: none;
          outline: none;
          font-size: 1rem;
        }

        .department-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          background: #f8f9fa;
          border: 1px solid #ddd;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 0.9rem;
        }

        .filter-btn:hover {
          transform: translateY(-2px);
          border-color: var(--gold);
        }

        .filter-btn.active {
          background: #141632;
          color: white;
          border-color: var(--gold);
        }

        .filter-btn .count {
          background: rgba(0,0,0,0.1);
          padding: 0.1rem 0.5rem;
          border-radius: 20px;
          font-size: 0.7rem;
        }

        .filter-btn.active .count {
          background: rgba(255,255,255,0.2);
        }

        /* Urgent Section */
        .urgent-section {
          padding: 40px 20px;
          background: linear-gradient(135deg, #fff8f5 0%, #fff0ea 100%);
        }

        .urgent-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .urgent-badge {
          display: inline-block;
          background: #ff6b35;
          color: white;
          padding: 0.3rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .urgent-header h2 {
          font-size: 1.8rem;
          color: #141632;
        }

        .urgent-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .urgent-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .urgent-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(212, 175, 55, 0.2);
          border-bottom: 2px solid var(--gold);
        }

        .urgent-image {
          position: relative;
          height: 150px;
        }

        .urgent-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .urgent-tag {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #ff6b35;
          color: white;
          padding: 0.2rem 0.6rem;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: bold;
        }

        .urgent-info {
          padding: 1rem;
        }

        .urgent-info h3 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        .urgent-info p {
          font-size: 0.8rem;
          color: #666;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          margin-bottom: 0.3rem;
        }

        /* Vacancies Grid */
        .vacancies-grid-section {
          padding: 50px 20px;
          background: #f8f9fa;
        }

        .section-title {
          text-align: center;
          font-size: 1.8rem;
          color: #141632;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }

        .section-subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 2.5rem;
          font-size: 0.9rem;
        }

        .vacancies-grid {
          display: grid;
          gap: 2rem;
          justify-content: center;
        }

        .vacancies-grid.grid-2cols {
          grid-template-columns: repeat(2, 1fr);
          max-width: 800px;
          margin: 0 auto;
        }

        .vacancies-grid.grid-3cols {
          grid-template-columns: repeat(3, 1fr);
        }

        .vacancy-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: all 0.3s;
          cursor: pointer;
        }

        .vacancy-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
          border-bottom: 2px solid var(--gold);
        }

        .vacancy-image {
          position: relative;
          height: 160px;
        }

        .vacancy-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .urgent-badge-small {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #ff6b35;
          color: white;
          padding: 0.2rem 0.6rem;
          border-radius: 20px;
          font-size: 0.65rem;
          font-weight: bold;
        }

        .vacancy-info {
          padding: 1.2rem;
        }

        .vacancy-title {
          font-size: 1rem;
          font-weight: bold;
          color: #141632;
          margin-bottom: 0.5rem;
        }

        .vacancy-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.7rem;
          color: #666;
        }

        .vacancy-description {
          font-size: 0.75rem;
          color: #666;
          line-height: 1.4;
          margin: 0.5rem 0;
        }

        .view-btn {
          background: none;
          border: none;
          color: #141632;
          font-weight: 600;
          font-size: 0.75rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          transition: all 0.3s;
          margin-top: 0.5rem;
        }

        .view-btn:hover {
          gap: 0.5rem;
          color: var(--gold);
        }

        /* Process Section */
        .process-section {
          padding: 50px 20px;
          background: white;
        }

        .process-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-top: 2rem;
        }

        .step {
          text-align: center;
          position: relative;
          transition: all 0.3s;
        }

        .step:hover {
          transform: translateY(-5px);
        }

        .step-number {
          width: 40px;
          height: 40px;
          background: #141632;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          margin: 0 auto 1rem;
          transition: all 0.3s;
        }

        .step:hover .step-number {
          background: var(--gold);
          color: #141632;
        }

        .step-icon {
          color: #141632;
          margin-bottom: 0.5rem;
          transition: color 0.3s;
        }

        .step:hover .step-icon {
          color: var(--gold);
        }

        .step h3 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        .step p {
          font-size: 0.8rem;
          color: #666;
        }

        /* Modal */
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
          max-width: 600px;
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
        }

        .modal-image {
          height: 180px;
          position: relative;
        }

        .modal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-urgent {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #ff6b35;
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: bold;
        }

        .modal-body {
          padding: 1.5rem;
        }

        .modal-body h2 {
          font-size: 1.3rem;
          color: #141632;
          margin-bottom: 0.5rem;
        }

        .modal-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
          color: #666;
          font-size: 0.8rem;
        }

        .modal-meta span {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .modal-section {
          margin-bottom: 1rem;
        }

        .modal-section h3 {
          font-size: 1rem;
          font-weight: bold;
          color: #141632;
          margin-bottom: 0.5rem;
        }

        .modal-section p, .modal-section li {
          font-size: 0.85rem;
          color: #666;
          line-height: 1.5;
        }

        .modal-section ul {
          padding-left: 1.2rem;
        }

        .modal-footer {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .apply-now-btn, .save-btn {
          flex: 1;
          padding: 0.7rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s;
        }

        .apply-now-btn {
          background: #141632;
          color: white;
        }

        .apply-now-btn:hover {
          background: var(--gold);
          color: #141632;
        }

        .save-btn {
          background: transparent;
          border: 1px solid #141632;
          color: #141632;
        }

        .save-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .vacancies-grid.grid-3cols {
            grid-template-columns: repeat(2, 1fr);
          }
          .urgent-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .process-steps {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 1.8rem;
          }
          .hero-content p {
            font-size: 0.9rem;
          }
          .vacancies-grid.grid-2cols,
          .vacancies-grid.grid-3cols {
            grid-template-columns: 1fr;
          }
          .urgent-grid {
            grid-template-columns: 1fr;
          }
          .process-steps {
            grid-template-columns: 1fr;
          }
          .department-filters {
            gap: 0.5rem;
          }
          .filter-btn {
            padding: 0.4rem 0.8rem;
            font-size: 0.75rem;
          }
          .hero-stats {
            gap: 1rem;
          }
          .stat-number {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </main>
  );
};

export default VacanciesPage;