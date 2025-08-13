const { sendEbook } = require('../../services/sendEmail');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }
  await sendEbook(req, res);
};