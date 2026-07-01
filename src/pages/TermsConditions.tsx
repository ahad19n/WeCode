// src/pages/TermsConditions.tsx
import React from 'react';

const TermsConditions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Terms and Conditions</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">Last updated: July 1, 2026</p>

      <div className="space-y-6">
        <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">1. Acceptance of Terms</h2>
          <p className="text-gray-600 dark:text-gray-400">
            By using our services, you agree to be bound by these Terms and Conditions.
            If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">2. Description of Services</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We provide web development, design, and related digital services. All services
            are provided on a project basis unless otherwise agreed in writing.
          </p>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">3. Payment Terms</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Payment terms are specified in individual project agreements. All payments
            are non-refundable unless otherwise stated in writing.
          </p>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">4. Intellectual Property</h2>
          <p className="text-gray-600 dark:text-gray-400">
            All intellectual property created during the course of our work remains the
            property of wecode until full payment has been received.
          </p>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">5. Limitation of Liability</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We are not liable for any indirect, incidental, or consequential damages
            arising from the use of our services or inability to use our services.
          </p>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">6. Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Questions about these Terms? Contact us at:
            <br />
            <span className="text-[#d31773] dark:text-[#e85b9e]">info@wecode.com.pk</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsConditions;