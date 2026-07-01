// src/pages/OwnershipStatement.tsx
import React from 'react';

const OwnershipStatement: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ownership Statement</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">Last updated: July 1, 2026</p>

      <div className="space-y-6">
        <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">1. Company Ownership</h2>
          <p className="text-gray-600 dark:text-gray-400">
            wecode is a private company registered in Pakistan. All rights, title, and
            interest in and to the company, including all intellectual property rights,
            are owned by wecode and its founders.
          </p>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">2. Intellectual Property Ownership</h2>
          <p className="text-gray-600 dark:text-gray-400">
            All intellectual property developed by wecode, including but not limited to
            code, designs, trademarks, and content, is the exclusive property of wecode
            unless otherwise agreed in writing.
          </p>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">3. Client Ownership</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Upon full payment, clients receive ownership of the final deliverables as
            specified in their project agreement. However, wecode retains ownership of
            its proprietary tools, libraries, and methodologies used in the development
            process.
          </p>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">4. Trademarks</h2>
          <p className="text-gray-600 dark:text-gray-400">
            The wecode name, logo, and all related trademarks are the exclusive property
            of wecode. Unauthorized use of our trademarks is prohibited.
          </p>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">5. Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-400">
            For ownership inquiries, please contact:
            <br />
            <span className="text-[#d31773] dark:text-[#e85b9e]">info@wecode.com.pk</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default OwnershipStatement;
