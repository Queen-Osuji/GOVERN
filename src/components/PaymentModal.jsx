import React, { useState } from 'react';
import { Button} from './ui/Button'; // Adjust based on your UI library
import { Input } from './ui/Input'; // Adjust based on your UI library

const PaymentModal = ({ isOpen, onClose, accountDetails, onConfirm }) => {
  const [email, setEmail] = useState('');
  const [transactionRef, setTransactionRef] = useState('');

  const handleSubmit = () => {
    if (!email || !transactionRef) {
      alert('Please provide both email and transaction reference.');
      return;
    }
    onConfirm(email, transactionRef);
    setEmail('');
    setTransactionRef('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
        <p className="mb-4">Please transfer the amount to the following account:</p>
        <p className="mb-2"><strong>Account Name:</strong> {accountDetails.name}</p>
        <p className="mb-4"><strong>Account Number:</strong> {accountDetails.number}</p>
        <p className="mb-4">After making the transfer, enter your details below:</p>
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full p-2 border rounded"
        />
        <Input
          type="text"
          placeholder="Transaction Reference"
          value={transactionRef}
          onChange={(e) => setTransactionRef(e.target.value)}
          className="mb-4 w-full p-2 border rounded"
        />
        <Button onClick={handleSubmit} className="w-full mb-2 bg-blue-500 text-white p-2 rounded">
          Confirm Payment
        </Button>
        <Button onClick={onClose} className="w-full bg-gray-300 p-2 rounded">
          Close
        </Button>
      </div>
    </div>
  );
};

export default PaymentModal