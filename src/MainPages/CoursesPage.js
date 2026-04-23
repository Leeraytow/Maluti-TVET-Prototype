// MainPages/Courses.js
import React, { useState } from 'react';
import { 
  GraduationCap, BookOpen, Users, Award, Briefcase, 
  Clock, CheckCircle, ChevronRight, Calendar, 
  TrendingUp, Wrench, Laptop, Heart, Building,
  Coffee, Zap, Globe, Shield, Download, Eye
} from 'lucide-react';

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const categories = [
    { id: 'all', name: 'All Programmes', icon: <GraduationCap size={18} />, count: 22 },
    { id: 'business', name: 'Business Studies', icon: <Briefcase size={18} />, count: 6 },
    { id: 'engineering', name: 'Engineering', icon: <Wrench size={18} />, count: 7 },
    { id: 'it', name: 'Information Technology', icon: <Laptop size={18} />, count: 4 },
    { id: 'hospitality', name: 'Hospitality', icon: <Coffee size={18} />, count: 3 },
    { id: 'education', name: 'Education', icon: <Heart size={18} />, count: 2 }
  ];

  const courses = [
    { id: 1, category: 'business', title: 'Business Management N4-N6', duration: '18 months', level: 'N4-N6', description: 'Learn to manage business operations, marketing, financial management, and human resources.', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=250&fit=crop', requirements: 'Grade 12 with pass in English', career: 'Business Manager, Entrepreneur, Marketing Manager' },
    { id: 2, category: 'business', title: 'Financial Management', duration: '18 months', level: 'N4-N6', description: 'Master accounting, cost management, financial reporting, and taxation principles.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop', requirements: 'Grade 12 with Accounting', career: 'Accountant, Financial Advisor, Auditor' },
    { id: 3, category: 'business', title: 'Human Resource Management', duration: '18 months', level: 'N4-N6', description: 'Develop skills in recruitment, training, labour relations, and organizational development.', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=250&fit=crop', requirements: 'Grade 12', career: 'HR Officer, Recruitment Specialist, Training Coordinator' },
    { id: 4, category: 'business', title: 'Marketing Management', duration: '18 months', level: 'N4-N6', description: 'Learn marketing strategies, consumer behavior, digital marketing, and sales management.', image: 'https://snu.edu.in/site/assets/files/18305/asian-businessman-blurred-office_1.1600x0.webp', requirements: 'Grade 12', career: 'Marketing Manager, Brand Specialist, Sales Executive' },
    { id: 5, category: 'business', title: 'Public Management', duration: '18 months', level: 'N4-N6', description: 'Study government administration, policy implementation, and public sector management.', image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=250&fit=crop', requirements: 'Grade 12', career: 'Public Administrator, Government Official' },
    { id: 6, category: 'business', title: 'Management Assistant', duration: '18 months', level: 'N4-N6', description: 'Become a professional secretary with office management and communication skills.', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=250&fit=crop', requirements: 'Grade 12', career: 'Executive Secretary, Office Manager' },
    { id: 7, category: 'engineering', title: 'Civil Engineering', duration: '24 months', level: 'N4-N6', description: 'Learn construction, structural design, surveying, and materials testing.', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop', requirements: 'Grade 12 with Mathematics & Physical Science', career: 'Civil Engineer, Site Supervisor, Quantity Surveyor' },
    { id: 8, category: 'engineering', title: 'Mechanical Engineering', duration: '24 months', level: 'N4-N6', description: 'Study mechanics, thermodynamics, manufacturing processes, and machine design.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuqfEeOAr6Ab4HykUk8hNzWQGc8C_UPl662w&s', requirements: 'Grade 12 with Mathematics & Physical Science', career: 'Mechanical Engineer, Maintenance Manager' },
    { id: 9, category: 'engineering', title: 'Electrical Engineering', duration: '24 months', level: 'N4-N6', description: 'Master electrical systems, power generation, electronics, and circuit design.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSr1Op3HTwRuqMY1aSLaYMynF_Phwg8zT-vw&s', requirements: 'Grade 12 with Mathematics & Physical Science', career: 'Electrical Engineer, Technician' },
    { id: 10, category: 'engineering', title: 'Bricklayer Level 4', duration: '12 months', level: 'Occupational', description: 'Hands-on training in bricklaying, plastering, and construction techniques.', image: 'https://ebmtcacademy.org.za/images/bricklayer.jpg', requirements: 'Grade 9 or equivalent', career: 'Bricklayer, Construction Worker' },
    { id: 11, category: 'engineering', title: 'Electrician Level 4', duration: '12 months', level: 'Occupational', description: 'Practical training in electrical installation, wiring, and safety procedures.', image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=250&fit=crop', requirements: 'Grade 9 with Mathematics', career: 'Electrician, Electrical Contractor' },
    { id: 12, category: 'engineering', title: 'Fitting and Turning', duration: '18 months', level: 'NC(V)', description: 'Learn to operate lathes, milling machines, and precision engineering.', image: 'https://resolutioncircle.co.za/wp-content/uploads/2020/08/1_App_Fitting_Machining_N7.jpg.png', requirements: 'Grade 9', career: 'Fitter and Turner, Machinist' },
    { id: 13, category: 'engineering', title: 'Welding', duration: '12 months', level: 'NC(V)', description: 'Master various welding techniques including arc, MIG, and TIG welding.', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=250&fit=crop', requirements: 'Grade 9', career: 'Welder, Fabricator' },
    { id: 14, category: 'it', title: 'Information Technology', duration: '18 months', level: 'N4-N6', description: 'Study programming, networking, database management, and systems analysis.', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop', requirements: 'Grade 12 with Mathematics', career: 'IT Specialist, Programmer, Network Administrator' },
    { id: 15, category: 'it', title: 'Computer Technician Level 5', duration: '12 months', level: 'Occupational', description: 'Learn computer hardware, software installation, troubleshooting, and repair.', image: 'https://www.itupskill.co.za/wp-content/uploads/2021/04/pc-tech.jpg', requirements: 'Grade 10', career: 'Computer Technician, IT Support' },
    { id: 16, category: 'it', title: 'Computer Practice', duration: '12 months', level: 'Certificate', description: 'Master Microsoft Office, typing, and basic computer applications.', image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=250&fit=crop', requirements: 'Grade 10', career: 'Data Capturer, Admin Assistant' },
    { id: 17, category: 'it', title: 'Information Technology (NCV)', duration: '36 months', level: 'NC(V)', description: 'Comprehensive IT program covering systems development and support.', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop', requirements: 'Grade 9', career: 'IT Support, Junior Developer' },
    { id: 18, category: 'hospitality', title: 'Hospitality Management', duration: '18 months', level: 'N4-N6', description: 'Learn hotel management, catering, event planning, and customer service.', image: 'https://info.ehl.edu/hubfs/Blog-EHL-Insights/Blog-Header-EHL-Insights/hotel%20management.jpeg', requirements: 'Grade 12', career: 'Hotel Manager, Event Coordinator' },
    { id: 19, category: 'hospitality', title: 'Food and Beverage Management', duration: '18 months', level: 'N4-N6', description: 'Master restaurant operations, food safety, and beverage management.', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop', requirements: 'Grade 12', career: 'Restaurant Manager, Food & Beverage Director' },
    { id: 20, category: 'hospitality', title: 'Professional Cookery', duration: '12 months', level: 'NC(V)', description: 'Learn culinary arts, kitchen management, and food preparation techniques.', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=250&fit=crop', requirements: 'Grade 9', career: 'Chef, Kitchen Manager' },
    { id: 21, category: 'education', title: 'Early Childhood Development Level 4', duration: '12 months', level: 'Occupational', description: 'Learn to work with young children, child psychology, and educational activities.', image: 'https://health.uct.ac.za/sites/default/files/styles/standard_lg/public/content_migration/health_uct_ac_za/421/images/website%2520picture%2520of%2520children%2520in%2520school.jpg?h=14053c51&itok=mhVxF0xq', requirements: 'Grade 10', career: 'Preschool Teacher, Childcare Worker' },
    { id: 22, category: 'education', title: 'Education and Development', duration: '18 months', level: 'N4-N6', description: 'Study educational psychology, teaching methods, and curriculum development.', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=250&fit=crop', requirements: 'Grade 12', career: 'Teacher, Education Assistant' }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const getCategoryColor = (category) => {
    const colors = {
      business: '#141632',
      engineering: '#C2B9F5',
      it: '#2a2e5a',
      hospitality: '#141632',
      education: '#C2B9F5'
    };
    return colors[category] || '#141632';
  };

  return (
    <main className="courses-page">
      {/* Hero Section */}
      <section className="courses-hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Our <span style={{ color: '#D4AF37' }}>Programmes</span></h1>
          <p>Quality technical and vocational education to build your future career</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">22+</span>
              <span className="stat-label">Programmes</span>
            </div>
            <div className="stat">
              <span className="stat-number">6</span>
              <span className="stat-label">Fields of Study</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Practical Training</span>
            </div>
          </div>
        </div>
      </section>

      {/* DHET Logo Section */}
      <section className="dhet-section">
        <div className="container">
          <div className="dhet-wrapper">
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/4/4c/DHEAT_logo.svg" 
              alt="Department of Higher Education and Training" 
              className="dhet-logo" 
              onError={(e) => { 
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/100x100/141632/white?text=DHET';
              }} 
            />
            <div className="dhet-text">
              <h3>Accredited by the Department of Higher Education and Training</h3>
              <p>All our programmes are DHET accredited and registered with quality councils</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters Section - All in ONE LINE */}
      <section className="categories-section">
        <div className="container">
          <div className="categories-wrapper">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
                <span className="category-count">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid Section */}
      <section className="courses-grid-section">
        <div className="container">
          <h2 className="section-title">
            {selectedCategory === 'all' ? 'All Programmes' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          <p className="section-subtitle">Choose from our wide range of quality programmes designed for your success</p>
          
          <div className="courses-grid">
            {filteredCourses.map((course) => (
              <div key={course.id} className="course-card" onClick={() => setSelectedCourse(course)}>
                <div className="course-image">
                  <img src={course.image} alt={course.title} loading="lazy" />
                  <span className="course-level" style={{ backgroundColor: getCategoryColor(course.category) }}>
                    {course.level}
                  </span>
                </div>
                <div className="course-info">
                  <h3 className="course-title">{course.title}</h3>
                  <div className="course-meta">
                    <span className="meta-item"><Clock size={14} />{course.duration}</span>
                    <span className="meta-item"><GraduationCap size={14} />{course.level}</span>
                  </div>
                  <p className="course-description">{course.description.substring(0, 100)}...</p>
                  <button className="view-course-btn">View Details <ChevronRight size={14} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-courses">
        <div className="container">
          <h2 className="section-title">Why Study at <span style={{ color: '#D4AF37' }}>Maluti TVET</span>?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon"><TrendingUp size={32} /></div>
              <h3>Industry-Relevant</h3>
              <p>Programmes designed with input from industry experts</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><Users size={32} /></div>
              <h3>Expert Lecturers</h3>
              <p>Learn from qualified and experienced professionals</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><Briefcase size={32} /></div>
              <h3>Work-Integrated Learning</h3>
              <p>Practical experience through workplace training</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><Globe size={32} /></div>
              <h3>Articulation Pathways</h3>
              <p>Progress to universities for further studies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modal */}
      {selectedCourse && (
        <div className="modal-overlay" onClick={() => setSelectedCourse(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCourse(null)}>×</button>
            <div className="modal-image">
              <img src={selectedCourse.image} alt={selectedCourse.title} />
            </div>
            <div className="modal-body">
              <h2>{selectedCourse.title}</h2>
              <div className="modal-meta">
                <span><Clock size={16} /> {selectedCourse.duration}</span>
                <span><GraduationCap size={16} /> {selectedCourse.level}</span>
              </div>
              <div className="modal-section">
                <h3>Programme Description</h3>
                <p>{selectedCourse.description}</p>
              </div>
              <div className="modal-section">
                <h3>Admission Requirements</h3>
                <p>{selectedCourse.requirements}</p>
              </div>
              <div className="modal-section">
                <h3>Career Opportunities</h3>
                <p>{selectedCourse.career}</p>
              </div>
              <div className="modal-footer">
                <button className="apply-btn">Apply Now</button>
                <button className="download-btn">Download Brochure <Download size={16} /></button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        :root {
          --gold: #D4AF37;
        }

        .courses-page {
          font-family: 'Arial', sans-serif;
        }

        /* Hero Section */
        .courses-hero {
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
          background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrA0dMkFfr33sTxZM32fnXdzqlN9gUx6GLGg&s');
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

        /* DHET Section */
        .dhet-section {
          padding: 30px 20px;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          border-bottom: 1px solid #eee;
        }

        .dhet-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          text-align: center;
        }

        .dhet-logo {
          height: 70px;
          width: auto;
          object-fit: contain;
        }

        .dhet-text h3 {
          font-size: 1rem;
          color: #141632;
          margin-bottom: 0.25rem;
        }

        .dhet-text p {
          font-size: 0.8rem;
          color: #666;
        }

        /* Categories Section - Distinct Background, All Buttons in ONE LINE */
        .categories-section {
          padding: 35px 20px;
          background: linear-gradient(135deg, #1a1f3a 0%, #141632 100%);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          overflow-x: auto;
          white-space: nowrap;
          scrollbar-width: thin;
        }

        .categories-section::-webkit-scrollbar {
          height: 4px;
        }

        .categories-section::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
        }

        .categories-section::-webkit-scrollbar-thumb {
          background: var(--gold);
          border-radius: 4px;
        }

        .categories-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 1rem;
          flex-wrap: nowrap;
        }

        .category-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.7rem 1.5rem;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 0.9rem;
          font-weight: 500;
          color: white;
          white-space: nowrap;
        }

        .category-btn:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.2);
          border-color: var(--gold);
        }

        .category-btn.active {
          background: var(--gold);
          color: #141632;
          border-color: var(--gold);
        }

        .category-icon {
          display: flex;
          align-items: center;
        }

        .category-count {
          background: rgba(0,0,0,0.2);
          padding: 0.2rem 0.5rem;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .category-btn.active .category-count {
          background: rgba(0,0,0,0.15);
        }

        /* Courses Grid Section */
        .courses-grid-section {
          padding: 50px 20px;
          background: #f8f9fa;
        }

        .section-title {
          text-align: center;
          font-size: 1.8rem;
          color: #141632;
          margin-bottom: 0.75rem;
          font-weight: bold;
        }

        .section-subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 2.5rem;
          font-size: 0.9rem;
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .course-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }

        .course-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          border-bottom: 2px solid var(--gold);
        }

        .course-image {
          position: relative;
          height: 160px;
          overflow: hidden;
        }

        .course-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .course-card:hover .course-image img {
          transform: scale(1.05);
        }

        .course-level {
          position: absolute;
          top: 10px;
          right: 10px;
          padding: 0.2rem 0.6rem;
          border-radius: 20px;
          font-size: 0.65rem;
          font-weight: bold;
          color: white;
        }

        .course-info {
          padding: 1rem;
        }

        .course-title {
          font-size: 0.95rem;
          font-weight: bold;
          color: #141632;
          margin-bottom: 0.4rem;
        }

        .course-meta {
          display: flex;
          gap: 0.8rem;
          margin-bottom: 0.6rem;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.2rem;
          font-size: 0.65rem;
          color: #666;
        }

        .course-description {
          font-size: 0.75rem;
          color: #666;
          line-height: 1.4;
          margin-bottom: 0.8rem;
        }

        .view-course-btn {
          background: none;
          border: none;
          color: #141632;
          font-weight: 600;
          font-size: 0.75rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          transition: gap 0.3s;
        }

        .view-course-btn:hover {
          gap: 0.5rem;
          color: var(--gold);
        }

        /* Why Choose Section */
        .why-choose-courses {
          padding: 50px 20px;
          background: white;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .benefit-card {
          text-align: center;
          padding: 1.5rem;
          transition: transform 0.3s;
        }

        .benefit-card:hover {
          transform: translateY(-5px);
        }

        .benefit-icon {
          color: #141632;
          margin-bottom: 0.8rem;
          transition: color 0.3s;
        }

        .benefit-card:hover .benefit-icon {
          color: var(--gold);
        }

        .benefit-card h3 {
          font-size: 1rem;
          font-weight: bold;
          color: #141632;
          margin-bottom: 0.4rem;
        }

        .benefit-card p {
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
          max-width: 550px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          position: relative;
          animation: modalSlideIn 0.3s ease;
        }

        @keyframes modalSlideIn {
          from { transform: translateY(-30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
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
          overflow: hidden;
        }

        .modal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
          gap: 1rem;
          margin-bottom: 1rem;
          color: #666;
          font-size: 0.85rem;
          flex-wrap: wrap;
        }

        .modal-meta span {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .modal-section {
          margin-bottom: 1rem;
        }

        .modal-section h3 {
          font-size: 1rem;
          font-weight: bold;
          color: #141632;
          margin-bottom: 0.25rem;
        }

        .modal-section p {
          font-size: 0.85rem;
          color: #666;
          line-height: 1.5;
        }

        .modal-footer {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .apply-btn, .download-btn {
          flex: 1;
          padding: 0.6rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          border: none;
        }

        .apply-btn {
          background: #141632;
          color: white;
        }

        .apply-btn:hover {
          background: var(--gold);
          color: #141632;
        }

        .download-btn {
          background: transparent;
          border: 1px solid #141632;
          color: #141632;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .download-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .courses-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .category-btn {
            padding: 0.6rem 1.2rem;
            font-size: 0.85rem;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 { font-size: 1.8rem; }
          .section-title { font-size: 1.4rem; }
          .courses-grid { grid-template-columns: 1fr; }
          .benefits-grid { grid-template-columns: 1fr; }
          .categories-section {
            padding: 20px 15px;
          }
          .categories-wrapper {
            justify-content: flex-start;
          }
          .category-btn {
            padding: 0.5rem 1rem;
            font-size: 0.75rem;
            gap: 0.4rem;
          }
          .modal-footer { flex-direction: column; }
          .hero-stats { gap: 1rem; }
          .stat-number { font-size: 1.2rem; }
        }
      `}</style>
    </main>
  );
};

export default CoursesPage;