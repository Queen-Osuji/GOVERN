import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-purple-900 to-black text-white flex flex-col items-center justify-start pt-20 pb-10 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 mt-15">Terms and Conditions</h1>
      <div className="max-w-3xl w-full  bg-opacity-80 p-6 rounded-lg shadow-lg">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
           <p className='font-bold mb-2'>Effective Date: May 1, 2025.</p>
          <p className="text-base ">
            Welcome to <a href="https://vxpai.vercel.app" className="text-purple-400 hover:underline">VXP</a>. By accessing or using this website, you agree to be bound by these Terms and Conditions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Termination</h2>
          <p className="text-base">
            We reserve the right to suspend or terminate any account that violates our terms, causes harm to others, or abuses the platform.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Changes</h2>
          <p className="text-base">
            We may revise these terms at any time. Continued use of the website means you agree to the updated terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <p className="text-base">
            Effective Date: August 1, 2025. VXP values your privacy. This policy explains how we collect, use, and protect your personal data.
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li><strong>What We Collect:</strong> Name, email address, billing info, device & browser information, behavioral data (e.g., pages visited, time spent).</li>
            <li><strong>How We Use Your Data:</strong> To process orders, personalize your experience, improve our services, and send marketing (only if you opt in). We will never sell your data.</li>
            <li><strong>Third-Party Tools:</strong> We use secure third-party tools (e.g., Vercel, Stripe, Google Analytics) that may collect anonymous usage data under their own policies.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Product Security</h2>
          <p className="text-base">
            Any ML model or downloadable code provided is sandboxed and tested. We are not liable for misuse or third-party system breaches after deployment.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">AI & Machine Learning Product Disclaimer</h2>
          <p className="text-base">
            Our AI-based products are tools, not absolute decision-makers. Outputs may vary based on prompt, input data, or usage context. We do not guarantee fitness for a specific purpose unless explicitly stated. Users should validate outputs before commercial or legal use. Some AI tools simulate or replicate human-like responses and are not real persons. By using any AI-powered tool from VXP, you accept full responsibility for how you apply the output.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Refund & Cancellation Policy</h2>
          <p className="text-base">
            All refund requests must be made within 7 days of purchase to support@vxppowerhouse.com.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Compliance & Jurisdiction</h2>
          <p className="text-base">
            This website complies with international digital commerce laws including GDPR (EU), Nigeria Data Protection Regulation (NDPR), and California Consumer Privacy Act (CCPA). All disputes shall be governed by the laws of the Federal Republic of Nigeria unless otherwise stated.
          </p>
        </section>
      </div>
      <p className="text-xs text-center mt-8 text-purple-400">
        <a href="/" className="underline">Back to Home</a> | Powered by VXP – Creating the Future with Intelligence™
      </p>
    </div>
  );
};

export default TermsAndConditions;