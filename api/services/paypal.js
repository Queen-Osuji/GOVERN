const axios = require('axios');

async function verifyPayPalPayment(orderId) {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  const isSandbox = process.env.PAYPAL_ENV === 'live';
  const baseUrl = isSandbox ? 'https://api-m.sandbox.pxaypal.com' : 'https://api-m.paypal.com'; // I am to put the main sandox url here
  const url = `${baseUrl}/v2/checkout/orders/${orderId}`;

  try {
    const authResponse = await axios.post(`${baseUrl}/v1/oauth2/token`, 'grant_type=client_credentials', {
      auth: { username: clientId, password: clientSecret },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    const accessToken = authResponse.data.access_token;

    const orderResponse = await axios.get(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
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

module.exports = { verifyPayPalPayment };