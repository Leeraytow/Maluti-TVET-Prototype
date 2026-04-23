// MainPages/Login.js
import React, { useState } from 'react';
import { 
  Mail, Lock, Eye, EyeOff, LogIn, User, 
  Shield, CheckCircle, AlertCircle, ArrowRight,
  GraduationCap, Briefcase, Users, BookOpen
} from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [userType, setUserType] = useState('student');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate login API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempt:', { email, password, userType, rememberMe });
      // Here you would integrate with your actual authentication API
      alert(`Login successful as ${userType}! Redirecting to dashboard...`);
    }, 1500);
  };

  const userTypes = [
    { id: 'student', label: 'Student', icon: <GraduationCap size={20} /> },
    { id: 'staff', label: 'Staff', icon: <Briefcase size={20} /> },
    { id: 'applicant', label: 'Applicant', icon: <BookOpen size={20} /> }
  ];

  return (
    <main className="login-page">
      {/* Hero Section - Reduced Height, Less Blur */}
      <section className="login-hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome Back</h1>
          <p>Sign in to access your student portal, staff dashboard, or applicant account</p>
        </div>
      </section>

      {/* Login Form Section */}
      <section className="login-section">
        <div className="container">
          <div className="login-wrapper">
            {/* Left Side - Form */}
            <div className="login-form-container">
              <div className="form-header">
                <div className="logo-icon">
                  <Shield size={32} />
                </div>
                <h2>Sign In to Your Account</h2>
                <p>Enter your credentials to access your personalized dashboard</p>
              </div>

              {/* DHET Logo */}
              <div className="dhet-logo-container">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/en/4/4c/DHEAT_logo.svg" 
                  alt="Department of Higher Education and Training" 
                  className="dhet-logo-small"
                  onError={(e) => { 
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/80x80/141632/white?text=DHET';
                  }} 
                />
                <p>Accredited by DHET</p>
              </div>

              {/* User Type Selector */}
              <div className="user-type-selector">
                {userTypes.map(type => (
                  <button
                    key={type.id}
                    className={`user-type-btn ${userType === type.id ? 'active' : ''}`}
                    onClick={() => setUserType(type.id)}
                  >
                    {type.icon}
                    <span>{type.label}</span>
                  </button>
                ))}
              </div>

              {/* Error Message */}
              {error && (
                <div className="error-message">
                  <AlertCircle size={18} />
                  <span>{error}</span>
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                  <label>Email Address / Student Number</label>
                  <div className="input-wrapper">
                    <Mail size={18} className="input-icon" />
                    <input
                      type="email"
                      placeholder="e.g., student@maluti.edu.za or 20240001"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <div className="input-wrapper">
                    <Lock size={18} className="input-icon" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="form-options">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="forgot-link">Forgot Password?</a>
                </div>

                <button type="submit" className="login-btn" disabled={isLoading}>
                  {isLoading ? (
                    <span className="loading-spinner"></span>
                  ) : (
                    <>
                      Sign In <LogIn size={18} />
                    </>
                  )}
                </button>
              </form>

              <div className="register-link">
                <p>Don't have an account? <a href="#">Register Now</a></p>
              </div>

              <div className="alternative-login">
                <div className="divider">
                  <span>Or continue with</span>
                </div>
                <div className="social-buttons">
                  <button className="social-btn google">
                    <img src="https://www.google.com/favicon.ico" alt="Google" />
                    Google
                  </button>
                  <button className="social-btn microsoft">
                    <img src="https://www.microsoft.com/favicon.ico" alt="Microsoft" />
                    Microsoft
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Info Panel */}
            <div className="login-info-panel">
              <div className="info-content">
                <h3>Student Portal Features</h3>
                <ul className="feature-list">
                  <li><CheckCircle size={18} /> Check your academic results</li>
                  <li><CheckCircle size={18} /> Register for courses online</li>
                  <li><CheckCircle size={18} /> Access learning materials</li>
                  <li><CheckCircle size={18} /> Submit assignments</li>
                  <li><CheckCircle size={18} /> View fee statements</li>
                  <li><CheckCircle size={18} /> Apply for NSFAS funding</li>
                </ul>
                
                <div className="help-box">
                  <h4>Need Help?</h4>
                  <p>Contact our IT Support Desk</p>
                  <div className="help-contact">
                    <Mail size={16} /> support@maluti.edu.za
                  </div>
                  <div className="help-contact">
                    <Briefcase size={16} /> +27 (0)51 507 3070
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .login-page {
          font-family: 'Arial', sans-serif;
        }

        /* Hero Section - Reduced Height, Less Blur */
        .login-hero {
          position: relative;
          min-height: 220px;
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
          background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdHgFYIxZheuk0LmTsqlx35BdoQNKfFMTH0A&s');
          background-size: cover;
          background-position: center;
          filter: blur(2px);
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
          font-size: 2.2rem;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }

        .hero-content p {
          font-size: 0.95rem;
          opacity: 0.9;
        }

        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Login Section */
        .login-section {
          padding: 50px 20px;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        }

        .login-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        /* Left Side - Form */
        .login-form-container {
          padding: 2.5rem;
        }

        .form-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .logo-icon {
          background: #141632;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          color: #C2B9F5;
        }

        .form-header h2 {
          font-size: 1.8rem;
          color: #141632;
          margin-bottom: 0.5rem;
        }

        .form-header p {
          color: #666;
          font-size: 0.9rem;
        }

        /* DHET Logo */
        .dhet-logo-container {
          text-align: center;
          margin-bottom: 1.5rem;
          padding: 0.5rem;
          background: #f8f9fa;
          border-radius: 12px;
        }

        .dhet-logo-small {
          height: 50px;
          width: auto;
          object-fit: contain;
          margin-bottom: 0.25rem;
        }

        .dhet-logo-container p {
          font-size: 0.7rem;
          color: #666;
          margin: 0;
        }

        /* User Type Selector */
        .user-type-selector {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
          background: #f8f9fa;
          padding: 0.5rem;
          border-radius: 12px;
        }

        .user-type-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.7rem;
          background: transparent;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 0.85rem;
          color: #666;
        }

        .user-type-btn.active {
          background: #141632;
          color: white;
        }

        .user-type-btn:hover:not(.active) {
          background: #e0e0e0;
        }

        /* Form */
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #333;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 12px;
          color: #999;
        }

        .input-wrapper input {
          width: 100%;
          padding: 0.9rem 0.9rem 0.9rem 2.5rem;
          border: 1px solid #ddd;
          border-radius: 12px;
          font-size: 0.9rem;
          transition: border-color 0.3s;
        }

        .input-wrapper input:focus {
          outline: none;
          border-color: #141632;
        }

        .password-toggle {
          position: absolute;
          right: 12px;
          background: none;
          border: none;
          cursor: pointer;
          color: #999;
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 0.5rem;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: #666;
          cursor: pointer;
        }

        .checkbox-label input {
          cursor: pointer;
        }

        .forgot-link {
          font-size: 0.85rem;
          color: #141632;
          text-decoration: none;
        }

        .forgot-link:hover {
          text-decoration: underline;
        }

        .login-btn {
          background: #141632;
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
          gap: 0.5rem;
          transition: background 0.3s;
          margin-top: 0.5rem;
        }

        .login-btn:hover {
          background: #2a2e5a;
        }

        .login-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid white;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .error-message {
          background: #fee2e2;
          color: #dc2626;
          padding: 0.8rem;
          border-radius: 10px;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
        }

        .register-link {
          text-align: center;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #eee;
        }

        .register-link p {
          font-size: 0.85rem;
          color: #666;
        }

        .register-link a {
          color: #141632;
          font-weight: 600;
          text-decoration: none;
        }

        .register-link a:hover {
          text-decoration: underline;
        }

        .alternative-login {
          margin-top: 1.5rem;
        }

        .divider {
          position: relative;
          text-align: center;
          margin: 1rem 0;
        }

        .divider span {
          background: white;
          padding: 0 1rem;
          font-size: 0.8rem;
          color: #999;
        }

        .divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #eee;
          z-index: 0;
        }

        .divider span {
          position: relative;
          z-index: 1;
        }

        .social-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .social-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.7rem;
          border: 1px solid #ddd;
          border-radius: 12px;
          background: white;
          cursor: pointer;
          transition: background 0.3s;
          font-size: 0.85rem;
        }

        .social-btn img {
          width: 20px;
          height: 20px;
        }

        .social-btn:hover {
          background: #f8f9fa;
        }

        /* Right Side - Info Panel */
        .login-info-panel {
          background: linear-gradient(135deg, #141632 0%, #2a2e5a 100%);
          color: white;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
        }

        .info-content {
          flex: 1;
        }

        .info-content h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          margin-bottom: 2rem;
        }

        .feature-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .help-box {
          background: rgba(255, 255, 255, 0.1);
          padding: 1.2rem;
          border-radius: 16px;
          margin-top: 2rem;
        }

        .help-box h4 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .help-box p {
          font-size: 0.8rem;
          opacity: 0.8;
          margin-bottom: 1rem;
        }

        .help-contact {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          margin-bottom: 0.5rem;
          opacity: 0.9;
        }

        /* Responsive */
        @media (max-width: 968px) {
          .login-wrapper {
            grid-template-columns: 1fr;
          }
          .login-info-panel {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 1.8rem;
          }
          .login-form-container {
            padding: 1.5rem;
          }
          .user-type-selector {
            flex-wrap: wrap;
          }
          .user-type-btn {
            flex: auto;
            min-width: calc(33.33% - 0.33rem);
          }
          .social-buttons {
            flex-direction: column;
          }
          .dhet-logo-small {
            height: 40px;
          }
        }
      `}</style>
    </main>
  );
};

export default LoginPage;