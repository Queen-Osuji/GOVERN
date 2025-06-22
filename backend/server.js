const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;
console.log('Starting server on PORT:', PORT);

app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 587,
  secure: false, // Use TLS
  auth: {
    user: process.env.EMAIL_USER, // Your email username
    pass: process.env.EMAIL_PASS, // Your email password
  },
  tls: {
    rejectUnauthorized: false, // For testing, enable only if needed
  },
});

app.post('/api/email/send-ebook', async (req, res) => {
  const { email, reference } = req.body;

  if (!email || !reference) {
    return res.status(400).send('Email and reference are required');
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Sender email
      to: email, // Purchaser's email
      subject: "Your VXP eBook Bundle 🎁",
      html: `
        <h2>Thank You!</h2>
        <p>You’ve successfully purchased the <strong>VXP eBook Bundle</strong> (Reference: ${reference}).</p>
        <p>👇 Click below to download your books:</p>
        <ul>
          <li><a href="https://yoursite.com/ebooks/ai_symbiosis.pdf">AI Symbiosis</a></li>
          <li><a href="https://yoursite.com/ebooks/tabloids.pdf">Tabloids</a></li>
        </ul>
        <p>Keep building. VXP is always with you. 💜</p>
      `,
    });
    console.log(`Email sent to ${email} with reference ${reference}`);
    res.status(200).send('Ebook sent successfully');
  } catch (error) {
    console.error('Email error:', error.message);
    res.status(500).send('Failed to send email');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});