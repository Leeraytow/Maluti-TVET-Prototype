const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Sample routes (API skeleton)

// Get all campuses
app.get('/api/campuses', (req, res) => {
  res.json({ message: "List of campuses" });
});

// Get all courses
app.get('/api/courses', (req, res) => {
  res.json({ message: "List of courses" });
});

// Get vacancies
app.get('/api/vacancies', (req, res) => {
  res.json({ message: "List of vacancies" });
});

// Submit contact form
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  res.json({
    message: "Contact form submitted",
    data: { name, email, message }
  });
});

// Student login
app.post('/api/login', (req, res) => {
  res.json({ message: "Login successful (mock)" });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});