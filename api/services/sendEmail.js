import { transporter } from '../config/email.js';
import { verifyPayPalPayment } from './paypal.js';

export const sendEbook = async (req, res) => {
  const { email, orderId, type, buyerName } = req.body;

  // Verify PayPal payment
  const verification = await verifyPayPalPayment(orderId);
  if (!verification.success) {
    return res.status(400).send(`Payment verification failed: ${verification.message}`);
  }

  // Extract customer name
  const customerName = buyerName || (email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1)) || 'Customer';

  let subject = "You're In. Your Escape Starts Now. 🎁";
  let html = "";

  if (type === 'bundle') {
    subject = "Welcome to The $100K Digital Stack!";
    html = `
      <p>Hey ${customerName},</p>
      <p>You did it — welcome to the VXP Network.</p>
      <p>You now have full access to The $100K Digital Stack — five high-level eBooks built to help you outsmart the system, create your own digital leverage, and think like the new generation of power players.</p>
      <p>Below are your download links</p>
      <p><strong>Your Bundle:</strong> <a href="https://drive.google.com/drive/folders/1-e8s5m97MI66uVw6bXw4Ue7DrQnpFc9v?usp=drive_link">Download The $100K Digital Stack</a></p>
      <p>(You’ll get AI Symbiosis, Lazy Genius, Influencer Guide, Agentic AI Playbook, and Corporate Ninjutsu, AI Agentic For Business.)</p>
      <p><strong>Bonus:</strong> <a href="[VXP Escape Checklist]">VXP Escape Checklist</a><br>Use it to map your launch plan and keep your focus razor-sharp.</p>
      <h4>Quick Tips to Get the Most Out of Your Stack</h4>
      <ul>
        <li>Start with AI Symbiosis — it’ll rewire how you think about money and machines.</li>
        <li>End with Corporate Ninjutsu — it’s your mental armor.</li>
        <li>Keep everything saved — lifetime access means this system grows with you.</li>
      </ul>
      <h4>Your Next Step</h4>
      <p>You’ve joined something rare — most people read; a few build.<br>
      If you’d like to earn by sharing the bundle, you can join the upcoming VXP Seller Challenge here: <a href="https://forms.gle/hb4V3Afi6engfnFF6">https://forms.gle/hb4V3Afi6engfnFF6</a></p>
      <p><br>Osuji Precious<br>CEO – Versatile Xpert<br>“People use AI. You’ll learn to profit from it.”</p>
    `;
  } else {
    html = `
      <h2>Hi ${customerName},</h2>
      <p>Thank you for your purchase!</p>
      <p>Your digital book is ready to download. We built this resource to help you level up, learn faster, and unlock new opportunities.</p>
      <p><strong>Download your book here:</strong></p>
      <a href="https://drive.google.com/drive/folders/1-e8s5m97MI66uVw6bXw4Ue7DrQnpFc9v?usp=drive_link" style="display: inline-block; padding: 10px 20px; background-color: #6C63FF; color: white; text-decoration: none; border-radius: 5px;">Download Now</a>
      <p>If you have any trouble accessing your book, reply to this email and our team will help you out.</p>
      <hr>
      <p><strong>Want more?</strong> Explore our full digital shop for bundles, bonuses, and exclusive content.</p>
      <p>Stay curious, stay bold.<br>VXP Team</p>
    `;
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject,
      html,
    });
    console.log(`Email sent to ${email} for order ID ${orderId}`);
    res.status(200).send('Ebook sent successfully');
  } catch (error) {
    console.error('Email sending error:', error.message);
    res.status(500).send('Failed to send email');
  }
};