const express = require('express');
const nodemailer = require('nodemailer');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
console.log('Starting server on PORT:', PORT);

// Enable CORS for the frontend origin
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use((req, res, next) => {
  console.log('Received body:', req.body);
  next();
});

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Verify PayPal payment
async function verifyPayPalPayment(orderId) {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  const isSandbox = process.env.PAYPAL_ENV === 'sandbox';
  const baseUrl = isSandbox ? 'https://api-m.sandbox.paypal.com' : 'https://api-m.paypal.com';
  const url = `${baseUrl}/v2/checkout/orders/${orderId}`;

  try {
    const authResponse = await axios.post(`${baseUrl}/v1/oauth2/token`, 'grant_type=client_credentials', {
      auth: {
        username: clientId,
        password: clientSecret,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const accessToken = authResponse.data.access_token;

    const orderResponse = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (orderResponse.data.status === 'COMPLETED' && orderResponse.data.purchase_units[0].amount.value === '85.00') {
      return { success: true, amount: orderResponse.data.purchase_units[0].amount.value };
    }
    return { success: false, message: 'Payment not completed or incorrect amount' };
  } catch (error) {
    console.error('PayPal verification error:', error.message);
    return { success: false, message: 'Verification failed' };
  }
}

app.post('/api/email/send-ebook', async (req, res) => {
  const { email, orderId } = req.body;

  if (!email || !orderId) {
    return res.status(400).send('Email and order ID are required');
  }

  // Verify PayPal payment
  const verification = await verifyPayPalPayment(orderId);
  if (!verification.success) {
    return res.status(400).send(`Payment verification failed: ${verification.message}`);
  }

  // Extract customer name from email
  const customerName = email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1) || 'Customer';

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "You're In. Your Escape Starts Now. 🎁",
      html: `
        <h2>Hi ${customerName},</h2>
        <p>Congratulations. You just did what most people don’t:
        You bet on your future with something smarter than luck — a weapon.</p>
        <p>Inside this bundle is more than just content.
        It’s leverage. Speed. Systems. And a shot at income that doesn’t ask for permission.</p>
        <p>👇 Here's your VXP Escape Bundle + Checklist:</p>
        <a href="https://drive.google.com/drive/folders/1-e8s5m97MI66uVw6bXw4Ue7DrQnpFc9v?usp=drive_link" style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">Download Button</a>
        <p><a href="https://drive.google.com/drive/folders/1-e8s5m97MI66uVw6bXw4Ue7DrQnpFc9v?usp=drive_link">Backup Link</a></p>
        <p>You have 2 days before this link expires — just like the discounted rate. So make this moment count.</p>
        <p><strong>Affiliate Perk Reminder</strong><br>
        You now earn $30 for every person you refer.
        <a href="https://yoursite.com/affiliate-link-generator">Grab your link here</a></p>
        <p>If you run into anything or need help escaping the matrix, just reply to this email.
        We’re right behind you.</p>
        <p>Stay bold,<br>
        VXP Launch Team<br>
        We don’t sell books. We sell your exit.</p>
      `,
    });
    console.log(`Email sent to ${email} with order ID ${orderId}`);
    res.status(200).send('Ebook sent successfully');
  } catch (error) {
    console.error('Email error:', error.message);
    res.status(500).send('Failed to send email');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});