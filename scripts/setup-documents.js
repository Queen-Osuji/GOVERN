import fs from 'fs';
import path from 'path';

// Script to help set up the documents folder structure
const documentsDir = path.join(process.cwd(), 'api', 'documents');

// Document mapping - these are the exact filenames your system expects
const expectedFiles = [
  'AI_Symbiosis.pdf',
  'Lazy_Genius.pdf', 
  'AI_for_Business_Beginners.pdf',
  'Tabloids.pdf',
  'AI_Agent_Fundamentals.pdf',
  'Smart_Business_Agentic_AI.pdf',
  'First_Time_Mum.pdf',
  'How_to_Finish_Any_eBook.pdf',
  'Agentic_AI_Playbook.pdf',
  'Hidden_Truth_Motherhood.pdf'
];

console.log('📚 VXP Document Setup Helper\n');
console.log('Checking documents folder...');

// Check if documents directory exists
if (!fs.existsSync(documentsDir)) {
  console.log('❌ Documents directory not found');
  process.exit(1);
}

console.log('✅ Documents directory exists\n');

// Check each expected file
console.log('Checking for required PDF files:');
let missingFiles = [];

expectedFiles.forEach(filename => {
  const filePath = path.join(documentsDir, filename);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`✅ ${filename} (${sizeInMB} MB)`);
  } else {
    console.log(`❌ ${filename} - MISSING`);
    missingFiles.push(filename);
  }
});

console.log('\n📋 Summary:');
console.log(`Total files expected: ${expectedFiles.length}`);
console.log(`Files found: ${expectedFiles.length - missingFiles.length}`);
console.log(`Files missing: ${missingFiles.length}`);

if (missingFiles.length > 0) {
  console.log('\n🚨 Missing Files:');
  missingFiles.forEach(file => {
    console.log(`   • ${file}`);
  });
  
  console.log('\n📝 To fix this:');
  console.log('1. Add your PDF files to: api/documents/');
  console.log('2. Use the exact filenames listed above');
  console.log('3. Ensure files are under 25MB for email compatibility');
  console.log('4. Run this script again to verify');
} else {
  console.log('\n🎉 All documents are ready!');
  console.log('Your customers will now receive PDF attachments directly in their email.');
}

console.log('\n💡 Pro Tips:');
console.log('• Keep PDF files under 25MB for reliable email delivery');
console.log('• Test the email system with a free product first');
console.log('• Check your email service provider\'s attachment limits');
console.log('• Consider password-protecting premium PDFs for extra security');