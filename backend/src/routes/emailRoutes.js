const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Configure Nodemailer transporter
// Replace with your actual email service provider details and credentials
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  port: 587, // or your provider's port
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Your email address (use environment variable)
    pass: process.env.EMAIL_PASS, // Your email password (use environment variable)
  },
});

router.post('/api/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic validation (optional, but recommended)
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ msg: 'Please fill in all fields' });
  }

  try {
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: 'vxpexpert@gmail.com', // Recipient address (where you want to receive emails)
      subject: `New Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ msg: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ msg: 'Error sending email' });
  }
});

module.exports = router;