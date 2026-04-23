// MainPages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Mail, Lock, Eye, EyeOff, LogIn, 
  Shield, AlertCircle, GraduationCap
} from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Only check if fields are not empty
    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate login API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login successful!', { email, password });
      // Redirect to student dashboard
      navigate('/studentdashboard');
    }, 1000);
  };

  return (
    <main className="login-page">
      {/* Hero Section */}
      <section className="login-hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome Back</h1>
          <p>Sign in to access your student portal</p>
        </div>
      </section>

      {/* Login Form Section */}
      <section className="login-section">
        <div className="container">
          <div className="login-wrapper">
            {/* Login Form */}
            <div className="login-form-container">
              <div className="form-header">
                <div className="logo-icon">
                  <Shield size={32} />
                </div>
                <h2>Student Login</h2>
                <p>Enter your credentials to access your dashboard</p>
              </div>

              {/* DHET Logo */}
              <div className="dhet-logo-container">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/en/4/4c/DHEAT_logo.svg" 
                  alt="DHET" 
                  className="dhet-logo-small"
                  onError={(e) => { 
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/80x80/141632/white?text=DHET';
                  }} 
                />
                <p>Accredited by DHET</p>
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
                      type="text"
                      placeholder="Enter your email or student number"
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
            </div>

            {/* Right Side - Info Panel */}
            <div className="login-info-panel">
              <div className="info-content">
                <GraduationCap size={48} style={{ marginBottom: '1rem' }} />
                <h3>Student Portal</h3>
                <ul className="feature-list">
                  <li>✓ Check your academic results</li>
                  <li>✓ Register for courses online</li>
                  <li>✓ Access learning materials</li>
                  <li>✓ Submit assignments</li>
                  <li>✓ View fee statements</li>
                  <li>✓ Apply for NSFAS funding</li>
                </ul>
                
                <div className="help-box">
                  <h4>Need Help?</h4>
                  <p>Email: support@maluti.edu.za</p>
                  <p>Phone: +27 (0)51 507 3070</p>
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

        /* Hero Section */
        .login-hero {
          position: relative;
          min-height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 30px 20px;
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
        }

        .hero-content h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .hero-content p {
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .login-section {
          padding: 40px 20px;
          background: #f8f9fa;
        }

        .login-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .login-form-container {
          padding: 2rem;
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
          font-size: 1.5rem;
          color: #141632;
        }

        .form-header p {
          color: #666;
          font-size: 0.85rem;
        }

        .dhet-logo-container {
          text-align: center;
          margin-bottom: 1.5rem;
          padding: 0.5rem;
          background: #f8f9fa;
          border-radius: 12px;
        }

        .dhet-logo-small {
          height: 45px;
          width: auto;
        }

        .dhet-logo-container p {
          font-size: 0.7rem;
          color: #666;
          margin: 0;
        }

        .error-message {
          background: #fee2e2;
          color: #dc2626;
          padding: 0.7rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-size: 0.8rem;
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
          padding: 0.8rem 0.8rem 0.8rem 2.5rem;
          border: 1px solid #ddd;
          border-radius: 10px;
          font-size: 0.9rem;
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

        .login-btn {
          background: #141632;
          color: white;
          padding: 0.8rem;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
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

        /* Right Panel */
        .login-info-panel {
          background: linear-gradient(135deg, #141632 0%, #2a2e5a 100%);
          color: white;
          padding: 2rem;
          display: flex;
          align-items: center;
        }

        .info-content {
          text-align: center;
          width: 100%;
        }

        .info-content h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          text-align: left;
          margin: 1.5rem 0;
        }

        .feature-list li {
          padding: 0.4rem 0;
          font-size: 0.85rem;
          opacity: 0.9;
        }

        .help-box {
          background: rgba(255, 255, 255, 0.1);
          padding: 1rem;
          border-radius: 12px;
          margin-top: 1rem;
        }

        .help-box h4 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        .help-box p {
          font-size: 0.75rem;
          margin: 0.3rem 0;
          opacity: 0.8;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .login-wrapper {
            grid-template-columns: 1fr;
          }
          .login-info-panel {
            order: -1;
          }
          .hero-content h1 {
            font-size: 1.5rem;
          }
          .login-form-container {
            padding: 1.5rem;
          }
        }
      `}</style>
    </main>
  );
};

export default LoginPage;