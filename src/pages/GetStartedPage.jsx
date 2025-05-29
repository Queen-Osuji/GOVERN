import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const GetStartedPage = () => {
  const location = useLocation();
  // Get the preselected service title from state
  const preselectedServiceTitle = location.state?.preselectedServiceTitle || null;

  // Placeholder for available services (fetch this dynamically in a real app)
  const availableServices = [
      'Premium Graphic Design',
      'Web Development',
      'AI Integration',
      'Digital Strategy',
      'Mobile App Development',
      'Custom AI Solutions',
      'SEO Optimization',
      'UI/UX Design',
      'Digital Marketing'
  ];

  // State for form data
  const [formData, setFormData] = useState({
    services: [], // Initialize as empty
    budget: '',
    projectDescription: '',
    timeline: '',
    contactName: '',
    contactEmail: '',
    contactPhone: ''

  });
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'idle', 'loading', 'success', 'error'
  const navigate = useNavigate(); // Initialize useNavigate

  // Use useEffect to set the preselected service after the component mounts
  useEffect(() => {
    if (preselectedServiceTitle) {
      setFormData(prevState => ({
        ...prevState,
        services: [preselectedServiceTitle] // Add the preselected service title to the array
      }));
    }
  }, [preselectedServiceTitle]); // Re-run if preselectedServiceTitle changes

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle service selection (if you have multiple checkboxes/options)
  const handleServiceSelect = (serviceTitle) => {
    setFormData(prevState => {
      if (prevState.services.includes(serviceTitle)) {
        // Deselect
        return {
          ...prevState,
          services: prevState.services.filter(service => service !== serviceTitle)
        };
      } else {
        // Select
        return {
          ...prevState,
          services: [...prevState.services, serviceTitle]
        };
      }
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (can be expanded)
    if (!formData.contactName || !formData.contactEmail || !formData.projectDescription) {
      alert('Please fill out required fields: Name, Email, and Project Description.');
      return;
    }

    setSubmissionStatus('loading');

    // Construct the email body from the form data
    const emailSubject = `New Service Request: ${formData.services.join(', ')}`;
    const emailMessage = `
      Service(s) Interested In: ${formData.services.join(', ') || 'Not specified'}
      Estimated Budget: ${formData.budget || 'Not specified'}
      Desired Timeline: ${formData.timeline || 'Not specified'}

      Project Description:
      ${formData.projectDescription}

      Contact Information:
      Name: ${formData.contactName}
      Email: ${formData.contactEmail}
      Phone: ${formData.contactPhone || 'Not provided'}
    `;

    // Send the form data to the backend email endpoint
    fetch('/api/email/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.contactName,
        email: formData.contactEmail, // Sender's email (used as reply-to)
        subject: emailSubject,
        message: emailMessage, // The full form data as the message body
      }),
    })
    .then(response => {
      if (!response.ok) {
        // If response is not OK, check if it's JSON before parsing
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          return response.json().then(error => { throw new Error(error.message || 'Failed to send email.'); });
        } else {
          // If not JSON, read as text and throw a more specific error
          return response.text().then(text => { throw new Error(`Failed to send email. Server responded with status ${response.status} and non-JSON content: ${text.substring(0, 100)}...`); });
        }
      }
      return response.json();
    })
    .then(data => {
      console.log('Email sent successfully:', data);
      setSubmissionStatus('success');
      alert('Thank you for your submission! We will be in touch shortly.');
      // Optionally clear the form or redirect
      setFormData({
        services: [],
        budget: '',
        projectDescription: '',
        timeline: '',
        contactName: '',
        contactEmail: '',
        contactPhone: ''
      });
      // navigate('/'); // Uncomment to redirect after success
    })
    .catch(error => {
      console.error('Error sending email:', error);
      setSubmissionStatus('error');
      alert(`Failed to send your request: ${error.message}`);
    });
  };


  return (
    <div className="container mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Get Started</h1>
      <p className="text-gray-300 text-lg text-center max-w-2xl mx-auto mb-12">
        Tell us about your project, and we'll help you find the right solutions.
      </p>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-purple-900/20 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-purple-800/20">

        {/* Service Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Which services are you interested in?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableServices.map(service => (
              <label key={service} className="flex items-center space-x-3 text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  name="services"
                  value={service}
                  checked={formData.services.includes(service)}
                  onChange={() => handleServiceSelect(service)}
                  className="form-checkbox h-5 w-5 text-purple-600 bg-gray-800 border-gray-600 rounded"
                />
                <span>{service}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Budget */}
        <div className="mb-8">
          <label className="block text-xl font-semibold text-white mb-4" htmlFor="budget">
            What is your estimated budget for this project?
          </label>
          {/* You could use a select dropdown or input */}
          <input
            type="text" // Or type="number" with appropriate validation
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="e.g., $2,000 - $5,000"
          />
        </div>

        {/* Project Description */}
        <div className="mb-8">
          <label className="block text-xl font-semibold text-white mb-4" htmlFor="projectDescription">
            Please describe your project in detail:
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleInputChange}
            rows="6"
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Tell us about your goals, requirements, target audience, etc."
          ></textarea>
        </div>

        {/* Timeline */}
         <div className="mb-8">
          <label className="block text-xl font-semibold text-white mb-4" htmlFor="timeline">
            What is your desired timeline?
          </label>
          <input
            type="text"
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="e.g., Within 3 months, ASAP, Flexible"
          />
        </div>

        {/* Contact Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-medium text-gray-300 mb-2" htmlFor="contactName">Name:</label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                value={formData.contactName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-300 mb-2" htmlFor="contactEmail">Email:</label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            <div>
                <label className="block text-lg font-medium text-gray-300 mb-2" htmlFor="contactPhone">Phone (Optional):</label>
                <input
                    type="tel" // Use type="tel" for phone numbers
                    id="contactPhone"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          {submissionStatus === 'loading' ? (
            <p className="text-purple-400 text-lg">Submitting...</p>
          ) : submissionStatus === 'success' ? (
            <p className="text-green-400 text-lg">Submission Successful!</p>
          ) : submissionStatus === 'error' ? (
            <p className="text-red-400 text-lg">Submission Failed. Please try again.</p>
          ) : (
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all !rounded-button"
            >
              Submit and Get Started
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default GetStartedPage;
