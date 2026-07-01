// src/pages/PrivacyPolicy.tsx
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Privacy Policy</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">Last updated: July 1, 2026</p>
      
      <div className="space-y-6">
        <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">1. Information We Collect</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We collect information you provide directly to us, such as when you create an account,
            fill out a form, or communicate with us. This may include your name, email address,
            phone number, and any other information you choose to provide.
          </p>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">2. How We Use Your Information</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We use the information we collect to provide, maintain, and improve our services,
            to communicate with you, and to comply with legal obligations.
          </p>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">3. Information Sharing</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We do not share your personal information with third parties except as necessary
            to provide our services or as required by law.
          </p>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">4. Data Security</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We implement appropriate technical and organizational measures to protect your
            personal information against unauthorized access, alteration, or destruction.
          </p>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">5. Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-400">
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <span className="text-[#d31773] dark:text-[#e85b9e]">info@wecode.com.pk</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
