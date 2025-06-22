const express = require('express');
const { Resend } = require('resend');
const router = express.Router();
require('dotenv').config();

const resendApiKey = 're_18pgAPT3_2i5TbxxUZYxfiWvgjPg4yMk7' //process.env.RESEND_API_KEY;
// console.log(VITE_RESEND_API_KEY)
if (!resendApiKey) {
  throw new Error('RESEND_API_KEY is not set in the environment variables');
}
const resend = new Resend(resendApiKey);

router.post('/send-ebook', async (req, res) => {
  const { email, reference } = req.body;

  if (!email || !reference) {
    return res.status(400).send('Email and reference are required');
  }

  try {
    await resend.emails.send({
      from: "VXP <noreply@vxp.ai>", // Replace with a verified domain/email in Resend
      to: email,
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
    console.error('Resend error:', error.response ? error.response.body : error.message);
    res.status(500).send('Failed to send email');
  }
});

module.exports = router;