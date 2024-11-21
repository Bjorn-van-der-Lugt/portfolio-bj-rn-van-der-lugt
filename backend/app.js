const express = require('express');
const path = require('path');
require('dotenv').config();
const { body, validationResult, sanitizeBody } = require('express-validator');
const nodemailer = require('nodemailer');

const app = express(); // Initialize the Express app

// Middleware to parse incoming form data
app.use(express.urlencoded({ extended: true })); // Handles URL-encoded form data
app.use(express.json()); // Handles JSON form data

// Serve static files from the front-end 'public' folder
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Handle the root route and serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
});

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS  // Your email password or app-specific password
  }
});

// Function to send an email
function sendEmail(from, to, subject, text) {
  const mailOptions = {
    from: from,    // User's email address from the form
    to: to,        // Your email address
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error occurred:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

// Endpoint to handle email sending with validation and sanitization
app.post('/send-email', 
  [
    body('name')
      .trim() // Remove extra whitespace
      .isLength({ min: 3, max: 40 })
      .withMessage('Name must be between 3 and 40 characters long'),
    body('email')
      .trim() // Remove extra whitespace
      .isEmail()
      .withMessage('Please enter a valid email address.'),
    body('subject')
      .trim() // Remove extra whitespace
      .isLength({ min: 3, max: 40 })
      .withMessage('Subject must be between 3 and 40 characters long'),
    body('message')
      .trim() // Remove extra whitespace
      .isLength({ min: 10, max: 2000 })
      .withMessage('Message must be between 10 and 2000 characters long.')
  ], 
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message, subject } = req.body; // Extract user's data from the request

    sendEmail(email, process.env.EMAIL_USER, subject, `Message from: ${name}\nEmail: ${email}\n\n${message}`); // Send the email
    res.send('Email sent successfully!');
  });

module.exports = app; // Correctly export the Express app







