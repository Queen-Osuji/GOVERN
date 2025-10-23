import express from 'express';
import { sendEbook } from '../services/sendEmail.js';

const router = express.Router();

router.post('/send-ebook', async (req, res) => {
  await sendEbook(req, res);
});

export default router;