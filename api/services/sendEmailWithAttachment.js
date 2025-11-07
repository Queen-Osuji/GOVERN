import { transporter } from '../config/email.js';
import { verifyPayPalPayment } from './paypal.js';
import path from 'path';
import fs from 'fs';

// Document mapping - maps product titles to their file paths
const DOCUMENT_MAP = {
  'AI SYMBIOSIS': 'AI_Symbiosis.pdf',
  'Lazy Genius': 'Lazy_Genius.pdf',
  'AI for Business (Beginner\'s Guide)': 'AI_for_Business_Beginners.pdf',
  'TABLOIDS': 'Tabloids.pdf',
  'AI Agent Fundamentals': 'AI_Agent_Fundamentals.pdf',
  'How to Build Smart Business with Agentic AI': 'Smart_Business_Agentic_AI.pdf',
  'First Time Mum': 'First_Time_Mum.pdf',
  'How to Finish Any eBook': 'How_to_Finish_Any_eBook.pdf',
  'Agentic AI Playbook': 'Agentic_AI_Playbook.pdf',
  'The Hidden Truth of Motherhood': 'Hidden_Truth_Motherhood.pdf'
};

export const sendEbookWithAttachment = async (req, res) => {
  const { email, orderId, productTitle, buyerName } = req.body;

  // Verify PayPal payment (skip for free products)
  if (orderId && !orderId.startsWith('FREE-')) {
    const verification = await verifyPayPalPayment(orderId);
    if (!verification.success) {
      return res.status(400).send(`Payment verification failed: ${verification.message}`);
    }
  }

  const customerName = buyerName || (email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1)) || 'Customer';
  
  // Get document file path
  const documentFileName = DOCUMENT_MAP[productTitle];
  if (!documentFileName) {
    return res.status(404).send('Document not found for this product');
  }

  const documentPath = path.join(process.cwd(), 'api', 'documents', documentFileName);
  
  // Check if file exists
  if (!fs.existsSync(documentPath)) {
    console.error(`Document file not found: ${documentPath}`);
    return res.status(404).send('Document file not available');
  }

  const subject = `Your "${productTitle}" is Ready! 📚`;
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #6C63FF;">Hi ${customerName}! 👋</h2>
      
      <p>Thank you for your purchase! Your digital book "<strong>${productTitle}</strong>" is attached to this email.</p>
      
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px; color: white; margin: 20px 0;">
        <h3 style="margin: 0 0 10px 0;">📖 Your Book is Attached!</h3>
        <p style="margin: 0;">The PDF file is attached to this email. Simply download it and start reading immediately!</p>
      </div>

      <h3 style="color: #333;">Quick Tips:</h3>
      <ul style="color: #666;">
        <li>Save the PDF to your device for offline reading</li>
        <li>The book is yours forever - no expiration dates</li>
        <li>Share your thoughts with us - we'd love to hear from you!</li>
      </ul>

      <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0; color: #666;"><strong>Need help?</strong> Reply to this email and our team will assist you.</p>
      </div>

      <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
      
      <p style="color: #666;">
        <strong>Want more amazing content?</strong><br>
        Visit our <a href="https://yourwebsite.com/digital-shop" style="color: #6C63FF;">Digital Shop</a> for more books and exclusive bundles.
      </p>
      
      <p style="color: #888; font-size: 14px;">
        Stay curious, stay bold.<br>
        <strong>VXP Team</strong><br>
        Versatile Xpert Platform
      </p>
    </div>
  `;

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject,
      html,
      attachments: [
        {
          filename: `${productTitle.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`,
          path: documentPath,
          contentType: 'application/pdf'
        }
      ]
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email with attachment sent to ${email} for product: ${productTitle}`);
    res.status(200).send('Ebook sent successfully with attachment');
  } catch (error) {
    console.error('Email sending error:', error.message);
    res.status(500).send('Failed to send email with attachment');
  }
};

// Bundle email with multiple attachments
export const sendBundleWithAttachments = async (req, res) => {
  const { email, orderId, buyerName } = req.body;

  const verification = await verifyPayPalPayment(orderId);
  if (!verification.success) {
    return res.status(400).send(`Payment verification failed: ${verification.message}`);
  }

  const customerName = buyerName || (email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1)) || 'Customer';
  
  // Bundle products
  const bundleProducts = [
    'AI SYMBIOSIS',
    'Lazy Genius', 
    'Agentic AI Playbook',
    'How to Build Smart Business with Agentic AI',
    'AI for Business (Beginner\'s Guide)'
  ];

  const attachments = [];
  
  // Add each book as attachment
  for (const productTitle of bundleProducts) {
    const documentFileName = DOCUMENT_MAP[productTitle];
    if (documentFileName) {
      const documentPath = path.join(process.cwd(), 'api', 'documents', documentFileName);
      if (fs.existsSync(documentPath)) {
        attachments.push({
          filename: `${productTitle.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`,
          path: documentPath,
          contentType: 'application/pdf'
        });
      }
    }
  }

  const subject = "Welcome to The $100K Digital Stack! 🚀";
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #6C63FF;">Hey ${customerName}! 🎉</h2>
      
      <p>You did it — welcome to the VXP Network!</p>
      
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 25px; border-radius: 15px; color: white; margin: 25px 0;">
        <h3 style="margin: 0 0 15px 0;">📚 Your Complete $100K Digital Stack</h3>
        <p style="margin: 0;">All ${attachments.length} premium eBooks are attached to this email. Download them all and start building your digital empire!</p>
      </div>

      <h3 style="color: #333;">Your Bundle Includes:</h3>
      <ul style="color: #666; line-height: 1.6;">
        ${bundleProducts.map(title => `<li><strong>${title}</strong></li>`).join('')}
      </ul>

      <h3 style="color: #333;">Quick Tips to Get the Most Out of Your Stack:</h3>
      <ul style="color: #666; line-height: 1.6;">
        <li>Start with <strong>AI Symbiosis</strong> — it'll rewire how you think about money and machines</li>
        <li>Save all PDFs to your device for easy access</li>
        <li>These books are yours forever — lifetime access guaranteed</li>
      </ul>

      <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 25px 0;">
        <h4 style="margin: 0 0 10px 0; color: #333;">🚀 Your Next Step</h4>
        <p style="margin: 0; color: #666;">You've joined something rare — most people read; a few build.<br>
        Ready to earn by sharing? Join our VXP Seller Challenge: <a href="https://forms.gle/hb4V3Afi6engfnFF6" style="color: #6C63FF;">Apply Here</a></p>
      </div>

      <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
      
      <p style="color: #888; font-size: 14px;">
        <strong>Osuji Precious</strong><br>
        CEO – Versatile Xpert<br>
        <em>"People use AI. You'll learn to profit from it."</em>
      </p>
    </div>
  `;

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject,
      html,
      attachments
    };

    await transporter.sendMail(mailOptions);
    console.log(`Bundle email with ${attachments.length} attachments sent to ${email}`);
    res.status(200).send('Bundle sent successfully with attachments');
  } catch (error) {
    console.error('Bundle email sending error:', error.message);
    res.status(500).send('Failed to send bundle email');
  }
};