import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import sendEbookRouter from './api/emails/send-ebook.js';
import { sendEbookWithAttachment, sendBundleWithAttachments } from './api/services/sendEmailWithAttachment.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// API Routes
app.use('/api/email', sendEbookRouter);
app.post('/api/email/send-with-attachment', sendEbookWithAttachment);
app.post('/api/email/send-bundle-with-attachments', sendBundleWithAttachments);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});