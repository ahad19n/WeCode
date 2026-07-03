// src/pages/RefundPolicy.tsx
import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Cancellation / Refund Policy</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">Last updated: July 1, 2026</p>

      <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>
          This policy explains when and how cancellations and refunds apply to ClickPrint,
          operated by WeCode. It forms part of our Terms and Conditions.
        </p>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Wallet Top-Ups</h2>
          <p>
            Wallet top-ups are non-refundable. Once you add funds to your ClickPrint wallet,
            that balance:
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>can be used only to pay for print jobs on the Service;</li>
            <li>cannot be withdrawn, transferred, or converted back to cash or to any bank or mobile wallet account;</li>
            <li>does not expire.</li>
          </ul>
          <p className="mt-4">
            Please top up only the amount you intend to spend on printing.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Cancelling a Print Job</h2>
          <p>
            You may cancel a submitted print job and receive a full refund to your wallet at
            any time before the print shop has begun printing your job.
          </p>
          <p className="mt-4">
            Once printing has begun, the job can no longer be cancelled, because production is
            already underway.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Automatic Refunds</h2>
          <p>
            If a print job fails due to a technical or equipment error on the print shop's side
            before it is completed, you will be automatically refunded the full amount to your
            wallet. You do not need to take any action.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Where Refunds Go</h2>
          <p>
            All refunds are credited back to your in-app ClickPrint wallet. Refunds are not
            returned to your original bank or mobile wallet, consistent with the non-refundable
            nature of wallet balance described above. Wallet refunds are applied automatically
            and are available immediately for use on the Service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Returns and Exchanges</h2>
          <p>
            Prints are custom-produced to your specifications and are collect-only. For this
            reason, completed prints cannot be returned or exchanged once produced.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Print Quality Complaints</h2>
          <p>
            If you believe a completed job was not printed correctly or is of poor quality, you
            may submit a complaint to us with supporting evidence (for example, photographs of
            the print) within 48 hours of the job being completed. We will review your complaint
            and, at our discretion, determine whether a refund to your wallet is warranted.
            Because print shops are independent third parties, we act as a neutral reviewer in
            these cases.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Uncollected Jobs</h2>
          <p>
            Print jobs are collect-only and must be collected in person from the print shop you
            selected. Once a job has been printed, the amount paid is non-refundable if you do
            not collect it. Print shops may hold completed jobs for collection at their own
            discretion, and are under no obligation to retain uncollected jobs indefinitely.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Contact for Refunds and Disputes</h2>
          <p>
            WeCode
            <br />
            Email: <span className="text-[#d31773] dark:text-[#e85b9e]">support@wecode.com.pk</span>
            <br />
            Phone: +92 323 5400291
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
