// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './MainPages/Header';
import Footer from './MainPages/Footer';
import HomePage from './MainPages/Hompage';
import CampusesPage from './MainPages/Campuses';
import ContactPage from './MainPages/ContactPage';
import CoursesPage from './MainPages/CoursesPage';
import VacanciesPage from './MainPages/Vacancies';
import LoginPage from './MainPages/LoginPage';
import StudentDashboard from './MainPages/StudentDashboard';

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/campuses" element={<CampusesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/vacancies" element={<VacanciesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/studentdashboard" element={<StudentDashboard/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;