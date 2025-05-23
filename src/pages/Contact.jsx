
import React, { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    fetch('http://localhost:3000/api/email/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (!response.ok) {
        // If the response is not OK (e.g., 404, 500), throw an error with the status
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Check if the response has a body before trying to parse as JSON
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        return response.json();
      } else {
        // If not JSON, read as text
        return response.text().then(text => {
          throw new Error(`Expected JSON response, but received: ${text}`);
        });
      }
    })
    .then(data => {
      if (data.status === 'succeeded' || data.msg === 'Email sent successfully') { // Also check for 'msg' as backend sends that on success
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    })
    .catch(error => {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    });
  };
  return (
    <section id="contact" className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-6 py-10">
        <div className="text-center mb-16 mt-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-yellow-300">Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-yellow-300">Touch</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-center">Have questions or want to collaborate? Reach out to us!</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-400 mx-auto mt-4"></div>
        </div>

        <div className="flex flex-wrap -mx-6">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 px-6 mb-12 lg:mb-0">
            <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-800/20 rounded-xl p-8 hover:shadow-xl hover:shadow-purple-500/10 transition-all">
              <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-purple-900/20 border border-purple-800/30 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 border-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-purple-900/20 border border-purple-800/30 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 border-none"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-purple-900/20 border border-purple-800/30 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 border-none"
                    placeholder="Subject of your message"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-purple-900/20 border border-purple-800/30 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 border-none"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-800 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full lg:w-1/2 px-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-800/20 rounded-xl p-8 hover:shadow-xl hover:shadow-purple-500/10 transition-all">
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-purple-400">Email:</strong> vxpexpert@gmail.com
                </p>
                <p>
                  <strong className="text-purple-400">Phone:</strong> +234 8134494391
                </p>
              </div>
              {/* You can add social media links or a map here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;