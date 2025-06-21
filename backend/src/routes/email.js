const express = require('express');
const { Resend } = require('resend');
const router = express.Router();

const resend = new Resend(process.env.RESEND_API_KEY); // Replace with your actual Resend API key or use environment variable

router.post('/send-ebook', async (req, res) => {
  const { email } = req.body;

  try {
    await resend.emails.send({
      from: "VXP <noreply@vxp.ai>", // Replace with your verified Resend domain email
      to: email,
      subject: "Your VXP eBook Bundle 🎁",
      html: `
          <h2>Thank You!</h2>
          <p>You’ve successfully purchased the <strong>VXP eBook Bundle</strong>.</p>
          <p>👇 Click below to download your books:</p>
          <ul>
            <li><a href="https://yoursite.com/ebooks/ai_symbiosis.pdf">AI Symbiosis</a></li> {/* Replace with actual eBook link */}
            <li><a href="https://yoursite.com/ebooks/tabloids.pdf">Tabloids</a></li> {/* Replace with actual eBook link */}
          </ul>
          <p>Keep building. VXP is always with you. 💜</p>
        `,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

module.exports = router;