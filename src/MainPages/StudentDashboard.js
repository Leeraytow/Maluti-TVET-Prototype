// pages/StudentDashboard.js
import React, { useState, useEffect } from 'react';
import { 
  Home, User, BookOpen, Calendar, Clock, Award, 
  FileText, Bell, LogOut,
  GraduationCap, Users, DollarSign, CheckCircle, Star, AlertCircle,
  Menu, X
} from 'lucide-react';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Assignment Due', message: 'Business Management assignment due tomorrow', time: '2 hours ago', read: false },
    { id: 2, title: 'Fee Payment Reminder', message: 'Second semester fees due in 2 weeks', time: '1 day ago', read: false },
    { id: 3, title: 'Exam Results', message: 'Your semester results are now available', time: '3 days ago', read: true }
  ]);

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setSidebarOpen(false);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Student data
  const student = {
    name: 'Thabo Moloi',
    studentNumber: '2024123456',
    program: 'Business Management N4',
    year: '1st Year',
    email: 'thabo.moloi@maluti.edu.za',
    phone: '+27 71 234 5678',
    avatar: 'https://ui-avatars.com/api/?name=Thabo+Moloi&background=141632&color=fff&size=100'
  };

  const courses = [
    { id: 1, code: 'BMN401', name: 'Business Management N4', credits: 20, instructor: 'Mrs. S. Mkhize', attendance: 85, progress: 75, grade: 'B', color: '#141632' },
    { id: 2, code: 'ACC402', name: 'Financial Accounting N4', credits: 20, instructor: 'Mr. J. Ndlovu', attendance: 90, progress: 82, grade: 'B+', color: '#2a2e5a' },
    { id: 3, code: 'ECO403', name: 'Economics N4', credits: 15, instructor: 'Dr. P. Smith', attendance: 78, progress: 70, grade: 'C+', color: '#C2B9F5' },
    { id: 4, code: 'COM404', name: 'Communication N4', credits: 15, instructor: 'Ms. L. Dlamini', attendance: 95, progress: 88, grade: 'A-', color: '#141632' }
  ];

  const upcomingEvents = [
    { id: 1, title: 'Business Management Exam', date: '2025-05-15', time: '09:00', type: 'exam' },
    { id: 2, title: 'Accounting Assignment', date: '2025-05-10', time: '23:59', type: 'assignment' },
    { id: 3, title: 'Study Group Meeting', date: '2025-05-08', time: '14:00', type: 'meeting' }
  ];

  const recentActivity = [
    { id: 1, action: 'Submitted assignment: Business Plan', module: 'Business Management', date: '2025-04-28', status: 'submitted' },
    { id: 2, action: 'Viewed exam results', module: 'All Modules', date: '2025-04-25', status: 'viewed' },
    { id: 3, action: 'Registered for semester 2', module: 'Registration', date: '2025-04-20', status: 'completed' }
  ];

  const fees = {
    total: 18500,
    paid: 12500,
    due: 6000,
    nextPayment: '2025-06-15'
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', minimumFractionDigits: 0 }).format(amount);
  };

  const Sidebar = () => (
    <>
      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
      )}
      <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="logo">
            <GraduationCap size={28} />
            {sidebarOpen && <span>Maluti TVET</span>}
          </div>
          <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        <div className="user-info">
          <img src={student.avatar} alt="Student" className="user-avatar" />
          {sidebarOpen && (
            <div className="user-details">
              <h4>{student.name}</h4>
              <p>{student.studentNumber}</p>
            </div>
          )}
        </div>

        <nav className="sidebar-nav">
          <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>
            <Home size={20} /> {sidebarOpen && <span>Overview</span>}
          </button>
          <button className={activeTab === 'courses' ? 'active' : ''} onClick={() => setActiveTab('courses')}>
            <BookOpen size={20} /> {sidebarOpen && <span>My Courses</span>}
          </button>
          <button className={activeTab === 'results' ? 'active' : ''} onClick={() => setActiveTab('results')}>
            <Award size={20} /> {sidebarOpen && <span>Results</span>}
          </button>
          <button className={activeTab === 'assignments' ? 'active' : ''} onClick={() => setActiveTab('assignments')}>
            <FileText size={20} /> {sidebarOpen && <span>Assignments</span>}
          </button>
          <button className={activeTab === 'fees' ? 'active' : ''} onClick={() => setActiveTab('fees')}>
            <DollarSign size={20} /> {sidebarOpen && <span>Fees</span>}
          </button>
          <button className={activeTab === 'attendance' ? 'active' : ''} onClick={() => setActiveTab('attendance')}>
            <Calendar size={20} /> {sidebarOpen && <span>Attendance</span>}
          </button>
          <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>
            <User size={20} /> {sidebarOpen && <span>Profile</span>}
          </button>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={() => window.location.href = '/login'}>
            <LogOut size={20} /> {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>
    </>
  );

  const Overview = () => (
    <div className="overview">
      <div className="welcome-banner">
        <div className="welcome-text">
          <h2>Welcome back, {student.name.split(' ')[0]}! 👋</h2>
          <p>Here's what's happening with your studies today.</p>
        </div>
        <div className="welcome-stats">
          <div className="stat">
            <div className="stat-value">{courses.length}</div>
            <div className="stat-label">Courses</div>
          </div>
          <div className="stat">
            <div className="stat-value">72%</div>
            <div className="stat-label">Progress</div>
          </div>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-card-icon"><BookOpen size={24} /></div>
          <div className="stat-card-info">
            <h3>87%</h3>
            <p>Attendance</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon"><Award size={24} /></div>
          <div className="stat-card-info">
            <h3>75%</h3>
            <p>Avg Grade</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon"><FileText size={24} /></div>
          <div className="stat-card-info">
            <h3>4</h3>
            <p>Assignments</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon"><DollarSign size={24} /></div>
          <div className="stat-card-info">
            <h3>{formatCurrency(fees.due)}</h3>
            <p>Fees Due</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Course Progress</h3>
        <div className="course-progress-list">
          {courses.map(course => (
            <div key={course.id} className="course-progress-item">
              <div className="course-info">
                <div className="course-code" style={{ backgroundColor: course.color }}>{course.code}</div>
                <div>
                  <h4>{course.name}</h4>
                  <p>{course.instructor}</p>
                </div>
              </div>
              <div className="progress-section">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${course.progress}%`, backgroundColor: '#D4AF37' }}></div>
                </div>
                <div className="progress-percent">{course.progress}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="two-columns">
        <div className="section">
          <h3>Upcoming Events</h3>
          <div className="events-list">
            {upcomingEvents.map(event => (
              <div key={event.id} className={`event-item ${event.type}`}>
                <div className="event-icon">
                  {event.type === 'exam' && <AlertCircle size={20} />}
                  {event.type === 'assignment' && <FileText size={20} />}
                  {event.type === 'meeting' && <Users size={20} />}
                </div>
                <div className="event-details">
                  <h4>{event.title}</h4>
                  <p>{event.date}</p>
                </div>
                <button className="event-btn">View</button>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            {recentActivity.map(activity => (
              <div key={activity.id} className="activity-item">
                <CheckCircle size={16} color="#D4AF37" />
                <div>
                  <p>{activity.action}</p>
                  <small>{activity.date}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const CoursesView = () => (
    <div className="courses-view">
      <h2>My Courses</h2>
      <div className="courses-list">
        {courses.map(course => (
          <div key={course.id} className="course-card-large">
            <div className="course-header" style={{ backgroundColor: course.color }}>
              <div className="course-code-large">{course.code}</div>
            </div>
            <div className="course-body">
              <h3>{course.name}</h3>
              <p className="instructor">{course.instructor}</p>
              <div className="course-stats">
                <div><Clock size={16} /> {course.credits} credits</div>
                <div><Users size={16} /> {course.attendance}%</div>
                <div><Star size={16} color="#D4AF37" /> {course.grade}</div>
              </div>
              <div className="progress-section">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${course.progress}%`, backgroundColor: '#D4AF37' }}></div>
                </div>
                <div className="progress-label">{course.progress}% complete</div>
              </div>
              <div className="course-actions">
                <button className="btn-outline">Materials</button>
                <button className="btn-outline gold">Assignments</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ResultsView = () => (
    <div className="results-view">
      <h2>Academic Results</h2>
      <div className="results-summary">
        <div className="result-card">
          <h3>GPA</h3>
          <div className="big-number">3.6</div>
          <p>Out of 4.0</p>
        </div>
        <div className="result-card">
          <h3>Credits</h3>
          <div className="big-number">55</div>
          <p>Of 70</p>
        </div>
        <div className="result-card">
          <h3>Standing</h3>
          <div className="status-good">Good</div>
        </div>
      </div>
      
      <div className="results-table">
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Assignment</th>
              <th>Exam</th>
              <th>Grade</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>78%</td>
                <td>72%</td>
                <td><strong style={{ color: '#D4AF37' }}>{course.grade}</strong></td>
                <td><span className="status-badge passed">Passed</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const AssignmentsView = () => (
    <div className="assignments-view">
      <h2>Assignments</h2>
      <div className="assignments-list">
        <div className="assignment-card">
          <div className="assignment-status urgent">Due Soon</div>
          <h3>Business Plan</h3>
          <p>Develop a comprehensive business plan for a small enterprise</p>
          <div className="assignment-meta">
            <span><Clock size={14} /> Due: May 10, 2025</span>
            <span><FileText size={14} /> 40% of grade</span>
          </div>
          <div className="assignment-actions">
            <button className="btn-primary">Submit</button>
            <button className="btn-outline gold">Resources</button>
          </div>
        </div>
        <div className="assignment-card">
          <div className="assignment-status warning">In Progress</div>
          <h3>Financial Statements</h3>
          <p>Prepare income statement and balance sheet</p>
          <div className="assignment-meta">
            <span><Clock size={14} /> Due: May 20, 2025</span>
            <span><FileText size={14} /> 30% of grade</span>
          </div>
          <div className="assignment-actions">
            <button className="btn-primary">Continue</button>
            <button className="btn-outline gold">Instructions</button>
          </div>
        </div>
      </div>
    </div>
  );

  const FeesView = () => (
    <div className="fees-view">
      <h2>Fee Statement</h2>
      <div className="fee-summary">
        <div className="fee-card">
          <h3>Total Fees</h3>
          <div className="fee-amount">{formatCurrency(fees.total)}</div>
        </div>
        <div className="fee-card">
          <h3>Amount Paid</h3>
          <div className="fee-amount paid">{formatCurrency(fees.paid)}</div>
        </div>
        <div className="fee-card">
          <h3>Balance Due</h3>
          <div className="fee-amount due">{formatCurrency(fees.due)}</div>
        </div>
      </div>
      <div className="payment-section">
        <h3>Payment Methods</h3>
        <div className="payment-methods">
          <button className="payment-btn">Credit Card</button>
          <button className="payment-btn gold-btn">Debit Card</button>
          <button className="payment-btn">EFT</button>
        </div>
        <div className="payment-history">
          <h3>Payment History</h3>
          <table className="payment-table">
            <thead>
              <tr><th>Date</th><th>Description</th><th>Amount</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr><td>2025-02-15</td><td>Registration Fee</td><td>{formatCurrency(1500)}</td><td><span className="success">Paid</span></td></tr>
              <tr><td>2025-02-15</td><td>1st Semester Tuition</td><td>{formatCurrency(7500)}</td><td><span className="success">Paid</span></td></tr>
              <tr><td>2025-04-10</td><td>2nd Semester Deposit</td><td>{formatCurrency(3500)}</td><td><span className="success">Paid</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const AttendanceView = () => (
    <div className="attendance-view">
      <h2>Attendance Record</h2>
      <div className="attendance-summary">
        <div className="attendance-card">
          <h3>Overall Attendance</h3>
          <div className="attendance-percent">87%</div>
        </div>
        <div className="attendance-card gold-bg">
          <h3>Required Minimum</h3>
          <div className="attendance-percent">80%</div>
        </div>
      </div>
      <div className="attendance-table">
        <table>
          <thead>
            <tr><th>Course</th><th>Held</th><th>Attended</th><th>%</th></tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>20</td>
                <td>17</td>
                <td><span className={course.attendance >= 80 ? 'success' : 'warning'}>{course.attendance}%</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const ProfileView = () => (
    <div className="profile-view">
      <h2>My Profile</h2>
      <div className="profile-card">
        <div className="profile-image">
          <img src={student.avatar} alt="Student" />
          <button className="edit-photo-btn gold-border">Change</button>
        </div>
        <div className="profile-info">
          <div className="info-row"><label>Name:</label><span>{student.name}</span></div>
          <div className="info-row"><label>Student #:</label><span>{student.studentNumber}</span></div>
          <div className="info-row"><label>Program:</label><span>{student.program}</span></div>
          <div className="info-row"><label>Year:</label><span>{student.year}</span></div>
          <div className="info-row"><label>Email:</label><span>{student.email}</span></div>
          <div className="info-row"><label>Phone:</label><span>{student.phone}</span></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <div className="dashboard-header">
          <div className="header-left">
            <button className="mobile-menu-btn" onClick={() => setSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <div>
              <h1>Dashboard</h1>
              <p>{student.program}</p>
            </div>
          </div>
          <div className="header-right">
            <button className="notification-btn">
              <Bell size={20} />
              <span className="notification-badge">2</span>
            </button>
          </div>
        </div>
        
        <div className="dashboard-content">
          {activeTab === 'overview' && <Overview />}
          {activeTab === 'courses' && <CoursesView />}
          {activeTab === 'results' && <ResultsView />}
          {activeTab === 'assignments' && <AssignmentsView />}
          {activeTab === 'fees' && <FeesView />}
          {activeTab === 'attendance' && <AttendanceView />}
          {activeTab === 'profile' && <ProfileView />}
        </div>
      </div>

      <style>{`
        .dashboard-container {
          display: flex;
          min-height: 100vh;
          background: #f5f7fa;
          font-family: 'Arial', sans-serif;
        }

        /* Gold Color Variables */
        :root {
          --gold: #D4AF37;
          --gold-light: #F3E5AB;
          --gold-dark: #B8960C;
        }

        /* Sidebar Styles */
        .sidebar {
          width: 260px;
          background: #141632;
          color: white;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          position: fixed;
          height: 100vh;
          overflow-y: auto;
          z-index: 1000;
        }

        .sidebar.closed {
          width: 70px;
        }

        .sidebar.closed .user-details,
        .sidebar.closed .sidebar-nav span,
        .sidebar.closed .sidebar-footer span {
          display: none;
        }

        .sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          z-index: 999;
        }

        .sidebar-header {
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: bold;
          font-size: 1rem;
        }

        .sidebar-toggle {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 5px;
        }

        .user-info {
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .user-avatar {
          width: 45px;
          height: 45px;
          border-radius: 50%;
        }

        .user-details h4 {
          font-size: 0.85rem;
          margin-bottom: 4px;
        }

        .user-details p {
          font-size: 0.65rem;
          opacity: 0.7;
        }

        .sidebar-nav {
          flex: 1;
          padding: 20px 0;
        }

        .sidebar-nav button {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 20px;
          background: none;
          border: none;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          transition: all 0.3s;
          font-size: 0.85rem;
        }

        .sidebar-nav button:hover,
        .sidebar-nav button.active {
          background: rgba(212, 175, 55, 0.15);
          color: var(--gold);
          border-left: 3px solid var(--gold);
        }

        .sidebar-footer {
          padding: 20px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .logout-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px;
          background: none;
          border: none;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.3s;
        }

        .logout-btn:hover {
          background: rgba(220,53,69,0.2);
          color: #dc3545;
        }

        /* Main Content */
        .dashboard-main {
          flex: 1;
          margin-left: 260px;
          padding: 20px;
          transition: margin-left 0.3s;
        }

        .sidebar.closed ~ .dashboard-main {
          margin-left: 70px;
        }

        .dashboard-header {
          background: white;
          padding: 15px 20px;
          border-radius: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          border-bottom: 2px solid var(--gold);
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
        }

        .header-left h1 {
          font-size: 1.3rem;
          margin-bottom: 4px;
        }

        .header-left p {
          color: #666;
          font-size: 0.75rem;
        }

        .header-right {
          display: flex;
          gap: 10px;
        }

        .notification-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          position: relative;
        }

        .notification-badge {
          position: absolute;
          top: 2px;
          right: 2px;
          background: #dc3545;
          color: white;
          font-size: 0.6rem;
          padding: 2px 5px;
          border-radius: 10px;
        }

        /* Welcome Banner */
        .welcome-banner {
          background: linear-gradient(135deg, #141632 0%, #2a2e5a 100%);
          color: white;
          padding: 20px;
          border-radius: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
          flex-wrap: wrap;
          gap: 15px;
        }

        .welcome-text h2 {
          font-size: 1.3rem;
          margin-bottom: 5px;
        }

        .welcome-text p {
          font-size: 0.8rem;
          opacity: 0.8;
        }

        .welcome-stats {
          display: flex;
          gap: 30px;
        }

        .stat {
          text-align: center;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--gold);
        }

        .stat-label {
          font-size: 0.7rem;
          opacity: 0.8;
        }

        /* Stats Cards */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }

        .stat-card {
          background: white;
          padding: 15px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 2px solid var(--gold);
          transition: transform 0.3s;
        }

        .stat-card:hover {
          transform: translateY(-3px);
        }

        .stat-card-icon {
          width: 45px;
          height: 45px;
          background: #f5f0ff;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #141632;
        }

        .stat-card-info h3 {
          font-size: 1.3rem;
          margin-bottom: 4px;
          color: var(--gold-dark);
        }

        .stat-card-info p {
          color: #666;
          font-size: 0.7rem;
        }

        /* Section */
        .section {
          background: white;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 20px;
        }

        .section h3 {
          margin-bottom: 15px;
          font-size: 1.1rem;
          color: #141632;
        }

        .two-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        /* Course Progress */
        .course-progress-item {
          padding: 12px 0;
          border-bottom: 1px solid #eee;
        }

        .course-info {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
          flex-wrap: wrap;
        }

        .course-code {
          padding: 4px 10px;
          border-radius: 20px;
          color: white;
          font-size: 0.65rem;
          font-weight: bold;
        }

        .progress-section {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .progress-bar {
          flex: 1;
          height: 6px;
          background: #e0e0e0;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 4px;
          background-color: var(--gold);
        }

        .progress-percent {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--gold-dark);
        }

        /* Events */
        .event-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          border-radius: 8px;
          margin-bottom: 8px;
          background: #f8f9fa;
        }

        .event-item.exam .event-icon { color: #dc3545; }
        .event-item.assignment .event-icon { color: #ffc107; }
        .event-item.meeting .event-icon { color: #28a745; }

        .event-details {
          flex: 1;
        }

        .event-details h4 {
          font-size: 0.85rem;
          margin-bottom: 2px;
        }

        .event-details p {
          font-size: 0.65rem;
          color: #666;
        }

        .event-btn {
          padding: 4px 10px;
          background: #141632;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.65rem;
        }

        /* Activity */
        .activity-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 8px 0;
          border-bottom: 1px solid #eee;
        }

        .activity-item p {
          font-size: 0.8rem;
          margin-bottom: 2px;
        }

        .activity-item small {
          font-size: 0.65rem;
          color: #999;
        }

        /* Courses View */
        .courses-view h2, .results-view h2, .assignments-view h2, 
        .fees-view h2, .attendance-view h2, .profile-view h2 {
          margin-bottom: 20px;
          font-size: 1.5rem;
          color: #141632;
        }

        .courses-list {
          display: grid;
          gap: 20px;
        }

        .course-card-large {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .course-header {
          padding: 12px 16px;
          color: white;
        }

        .course-code-large {
          font-weight: bold;
          font-size: 0.9rem;
        }

        .course-body {
          padding: 16px;
        }

        .course-body h3 {
          font-size: 1rem;
          margin-bottom: 5px;
        }

        .instructor {
          color: #666;
          font-size: 0.75rem;
          margin-bottom: 12px;
        }

        .course-stats {
          display: flex;
          gap: 15px;
          margin-bottom: 12px;
          font-size: 0.7rem;
          color: #666;
          flex-wrap: wrap;
        }

        .course-stats div {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .progress-label {
          font-size: 0.65rem;
          color: #666;
          margin-top: 4px;
        }

        .course-actions {
          display: flex;
          gap: 10px;
          margin-top: 12px;
          flex-wrap: wrap;
        }

        /* Buttons */
        .btn-primary {
          background: #141632;
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.75rem;
        }

        .btn-outline {
          background: none;
          border: 1px solid #141632;
          color: #141632;
          padding: 6px 12px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.75rem;
        }

        .btn-outline.gold {
          border-color: var(--gold);
          color: var(--gold-dark);
        }

        .btn-outline.gold:hover {
          background: var(--gold);
          color: #141632;
        }

        /* Results View */
        .results-summary {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }

        .result-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          text-align: center;
        }

        .big-number {
          font-size: 2rem;
          font-weight: bold;
          color: #141632;
        }

        .status-good {
          background: #d4edda;
          color: #155724;
          padding: 5px 12px;
          border-radius: 20px;
          display: inline-block;
          font-size: 0.85rem;
        }

        .results-table, .attendance-table, .payment-table {
          background: white;
          border-radius: 12px;
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          padding: 10px;
          text-align: left;
          border-bottom: 1px solid #eee;
        }

        th {
          background: #f8f9fa;
          font-weight: 600;
        }

        .status-badge.passed {
          background: #d4edda;
          color: #155724;
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 0.7rem;
        }

        /* Assignments View */
        .assignment-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 20px;
        }

        .assignment-status {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 0.65rem;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .assignment-status.urgent { background: #dc3545; color: white; }
        .assignment-status.warning { background: #ffc107; color: #333; }

        .assignment-meta {
          display: flex;
          gap: 15px;
          margin: 12px 0;
          font-size: 0.7rem;
          color: #666;
        }

        .assignment-meta span {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .assignment-actions {
          display: flex;
          gap: 10px;
          margin-top: 12px;
          flex-wrap: wrap;
        }

        /* Fees View */
        .fee-summary {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }

        .fee-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          text-align: center;
        }

        .fee-amount {
          font-size: 1.2rem;
          font-weight: bold;
          margin-top: 8px;
        }

        .fee-amount.paid { color: #28a745; }
        .fee-amount.due { color: #dc3545; }

        .payment-methods {
          display: flex;
          gap: 10px;
          margin: 15px 0 30px;
          flex-wrap: wrap;
        }

        .payment-btn {
          padding: 8px 16px;
          background: #f8f9fa;
          border: 1px solid #ddd;
          border-radius: 8px;
          cursor: pointer;
        }

        .gold-btn {
          border-color: var(--gold);
          color: var(--gold-dark);
        }

        .gold-btn:hover {
          background: var(--gold);
          color: #141632;
        }

        .success { color: #28a745; }

        /* Attendance View */
        .attendance-summary {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }

        .attendance-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          text-align: center;
        }

        .gold-bg {
          background: linear-gradient(135deg, var(--gold), var(--gold-dark));
          color: #141632;
        }

        .attendance-percent {
          font-size: 2rem;
          font-weight: bold;
          margin-top: 10px;
        }

        /* Profile View */
        .profile-card {
          background: white;
          border-radius: 12px;
          padding: 30px;
          display: flex;
          gap: 40px;
        }

        .profile-image {
          text-align: center;
        }

        .profile-image img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          margin-bottom: 10px;
        }

        .edit-photo-btn {
          padding: 5px 10px;
          background: #f0f0f0;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.7rem;
        }

        .gold-border {
          border: 1px solid var(--gold);
          color: var(--gold-dark);
        }

        .gold-border:hover {
          background: var(--gold);
          color: #141632;
        }

        .profile-info {
          flex: 1;
        }

        .info-row {
          display: flex;
          padding: 8px 0;
          border-bottom: 1px solid #eee;
        }

        .info-row label {
          width: 120px;
          font-weight: 600;
          font-size: 0.8rem;
        }

        .info-row span {
          font-size: 0.8rem;
          color: #666;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .sidebar {
            transform: translateX(-100%);
            position: fixed;
            z-index: 1001;
          }
          .sidebar.open {
            transform: translateX(0);
          }
          .sidebar.closed {
            transform: translateX(-100%);
            width: 260px;
          }
          .dashboard-main {
            margin-left: 0 !important;
          }
          .mobile-menu-btn {
            display: block;
          }
          .stats-grid, .two-columns, .results-summary, .fee-summary {
            grid-template-columns: 1fr !important;
          }
          .profile-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .info-row {
            flex-direction: column;
          }
          .info-row label {
            width: auto;
            margin-bottom: 5px;
          }
          .welcome-banner {
            flex-direction: column;
            text-align: center;
          }
          .attendance-summary {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .dashboard-header {
            flex-direction: column;
            gap: 10px;
          }
          .header-left {
            width: 100%;
            justify-content: space-between;
          }
          .course-stats {
            flex-direction: column;
            gap: 5px;
          }
          .assignment-meta {
            flex-direction: column;
            gap: 5px;
          }
        }
      `}</style>
    </div>
  );
};

export default StudentDashboard;