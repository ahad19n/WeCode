// src/pages/RefundPolicy.tsx
import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Cancellation / Return / Refund Policy</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">Last updated: July 1, 2026</p>

      <div className="space-y-6">
        <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">1. Cancellation Policy</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Project cancellations must be submitted in writing. Cancellations within 7 days
            of project start will receive a full refund. Cancellations after 7 days will be
            subject to a prorated refund based on work completed.
          </p>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">2. Return Policy</h2>
          <p className="text-gray-600 dark:text-gray-400">
            As we provide digital services, there are no physical returns. However, we offer
            revisions as specified in your project agreement. If you are unsatisfied with the
            final deliverables, we will work with you to address your concerns.
          </p>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">3. Refund Policy</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Refunds are issued on a case-by-case basis. If a project is cancelled before
            completion, the refund amount will be calculated based on the work completed
            and resources allocated. Retainer fees and deposits are non-refundable.
          </p>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">4. Dispute Resolution</h2>
          <p className="text-gray-600 dark:text-gray-400">
            In the event of a dispute, we will work in good faith to resolve the issue.
            If resolution cannot be reached, the matter will be handled according to the
            laws of Pakistan.
          </p>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">5. Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-400">
            For refund or cancellation inquiries, please contact:
            <br />
            <span className="text-[#d31773] dark:text-[#e85b9e]">info@wecode.com.pk</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;

