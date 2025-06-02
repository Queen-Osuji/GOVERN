
import React from 'react';

const PaystackModal = ({ isOpen, onClose, model }) => {
  if (!isOpen) return null;

  // In a real application, you would load the Paystack script here
  // and initialize the Paystack popup when the modal opens.
  // You would likely pass model details (like price and email) to the Paystack options.

  const handlePayment = () => {
    // Placeholder for initiating Paystack payment
    // You would use the PaystackPop.setup() function here with the model data
    console.log('Initiating Paystack payment for:', model.name);
    // window.PaystackPop.setup({
    //   key: 'YOUR_PAYSTACK_PUBLIC_KEY', // Replace with your public key
    //   email: 'user@example.com', // Replace with the user's email
    //   amount: model.price * 100, // Convert price to kobo
    //   currency: 'NGN', // Set currency to Naira
    //   ref: '' + Math.floor((Math.random() * 1000000000) + 1), // Generate a random transaction reference
    //   metadata: {
    //     custom_fields: [
    //       {
    //         display_name: 'Model Name',
    //         variable_name: 'model_name',
    //         value: model.name,
    //       },
    //     ],
    //   },
    //   callback: function(response){
    //     // This is called after the payment is complete.
    //     // You should verify the transaction status on your server here.
    //     console.log('Paystack response:', response);
    //     // On successful verification, grant access to the code repository
    //     onClose(); // Close the modal after successful payment
    //   },
    //   onClose: function(){
    //     // This is called when the modal is closed by the user
    //     console.log('Payment modal closed.');
    //   }
    // }).openIframe();
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
  <div className="bg-white rounded-lg p-10 w-full max-w-5xl"> {/* Adjusted max-width */}
    <h2 className="text-xl font-bold mb-4">Complete Purchase</h2>

    <div className="flex flex-col md:flex-row gap-6"> {/* Flex container for columns */}
      {/* Left Column: Model Details */}
      <div className="w-full md:w-1/2"> {/* Adjust width for responsiveness */}
        {/* Model image */}
        <img src={model.image} alt={model.name} className="w-full h-40 object-cover rounded-md mb-4" />
        {/* Model name, description, price */}
        <div>
          <h3 className="text-lg font-semibold">Model Name:</h3>
          <p>{model.name}</p>
          {/* ... other model details */}
        </div>
      </div>

      {/* Right Column: Paystack Placeholder */}
      <div className="w-full md:w-1/2 border border-gray-300 p-4 rounded-md"> {/* Adjust width for responsiveness */}
        {/* Paystack payment form or button will be loaded here */}
        <p className="text-center text-gray-500">Paystack Payment Gateway Placeholder</p>
      </div>
    </div>

    {/* Close button */}
    <div className="mt-6 text-right">
      <button onClick={onClose} className="...">
        Cancel
      </button>
    </div>
  </div>
</div>
  );
};

export default PaystackModal;
