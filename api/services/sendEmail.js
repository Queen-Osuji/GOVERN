const { transporter } = require('../config/email');
const { verifyPayPalPayment } = require('./paypal');

const sendEbook = async (req, res) => {
  const { email, orderId } = req.body;

  // Verify PayPal payment
  const verification = await verifyPayPalPayment(orderId);
  if (!verification.success) {
    return res.status(400).send(`Payment verification failed: ${verification.message}`);
  }

  // Extract customer name
  const customerName = email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1) || 'Customer';

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "You're In. Your Escape Starts Now. 🎁",
      html: `
        <h2>Hi ${customerName},</h2>
        <p>Congratulations. You just did what most people don’t: You bet on your future with something smarter than luck — a weapon.</p>
        <p>Inside this bundle is more than just content. It’s leverage. Speed. Systems. And a shot at income that doesn’t ask for permission.</p>
        <p>👇 Here's your VXP Escape Bundle + Checklist:</p>
        <a href="https://drive.google.com/drive/folders/1-e8s5m97MI66uVw6bXw4Ue7DrQnpFc9v?usp=drive_link" style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">Download Button</a>
        <p><a href="https://drive.google.com/drive/folders/1-e8s5m97MI66uVw6bXw4Ue7DrQnpFc9v?usp=drive_link">Backup Link</a></p>
        <p>You have 2 days before this link expires — just like the discounted rate. So make this moment count.</p>
        <p><strong>Affiliate Perk Reminder</strong><br>
        You now earn $30 for every person you refer.
        <a href="https://your-affiliate-link-generator.com">Grab your link here</a></p>
        <p>If you run into anything or need help escaping the matrix, just reply to this email. We’re right behind you.</p>
        <p>Stay bold,<br>VXP Launch Team<br>We don’t sell books. We sell your exit.</p>
      `,
    });
    console.log(`Email sent to ${email} for order ID ${orderId}`);
    res.status(200).send('Ebook sent successfully');
  } catch (error) {
    console.error('Email sending error:', error.message);
    res.status(500).send('Failed to send email');
  }
};

module.exports = { sendEbook };