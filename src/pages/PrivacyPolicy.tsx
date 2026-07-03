// src/pages/PrivacyPolicy.tsx
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Privacy Policy</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">Last updated: July 1, 2026</p>

      <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>
          This Privacy Policy explains how WeCode ("WeCode", "we", "us", or "our"), a sole
          proprietorship registered in Pakistan (NTN 3740565477847) and operated by Shahid
          Zahoor, collects, uses, and protects information in connection with ClickPrint (the
          "Service"), our application that lets users upload documents, choose print settings,
          select a nearby print shop, receive a cost quote, and submit print jobs, paying from
          an in-app wallet.
        </p>
        <p>
          By creating an account or using ClickPrint, you agree to the practices described in
          this Privacy Policy.
        </p>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Information We Collect</h2>
          <p>
            We deliberately collect as little information as possible to run the Service.
          </p>
          <p className="mt-4">Information you provide when you register:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Your name</li>
            <li>Your mobile phone number</li>
          </ul>
          <p className="mt-4">Information relating to your print jobs:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>The files you upload for printing and the print settings you select (paper size, colour, copies, etc.)</li>
            <li>The print shop you select and the associated cost quote</li>
          </ul>
          <p className="mt-4">Payment information:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>
              Your mobile phone number, which is used to request payment through Raast (see
              "Payments" below). We do not collect or store your bank account numbers, card
              numbers, wallet PINs, passwords, or other payment credentials.
            </li>
          </ul>
          <p className="mt-4">Location information:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>
              We determine your approximate city using an IP-address lookup so we can show you
              nearby print shops.
            </li>
            <li>
              You may optionally choose to share a more precise approximate location from your
              device to improve the list of nearby shops. This is optional and used only for
              that purpose.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">How We Use Your Information</h2>
          <p>We use the information above to:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Create and maintain your account;</li>
            <li>Show you print shops near your approximate location;</li>
            <li>Generate cost quotes and process your print jobs;</li>
            <li>Request and confirm wallet top-up payments through Raast;</li>
            <li>Transmit your files and print settings to the print shop you select so your job can be printed;</li>
            <li>Provide customer support and respond to complaints;</li>
            <li>Comply with applicable laws and regulatory requirements.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Payments</h2>
          <p>
            Wallet top-ups are processed through Raast, the instant payment system operated by
            the State Bank of Pakistan, using the Request-to-Pay flow. Payment processing is
            carried out by a licensed third-party payment processor.
          </p>
          <p className="mt-4">
            When you top up your wallet, we submit a payment request associated with your
            mobile phone number. The transaction itself is completed by you within your own
            bank or wallet application (e.g. JazzCash, EasyPaisa, SadaPay, NayaPay). WeCode
            does not receive, see, or store your payment credentials. Our payment gateway
            partner processes the transaction and returns to us only a success/failure result
            and a transaction reference. The payment gateway may retain transaction records and
            audit logs as required by law and by the State Bank of Pakistan.
          </p>
          <p className="mt-4">
            We share only the information necessary to process a payment (such as your phone
            number and the transaction amount) with our payment gateway partner. We do not
            share your uploaded print files with the payment gateway.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Your Print Files</h2>
          <p>Your privacy over the documents you print matters to us:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>
              Uploaded files are shared only with the specific print shop you select, together
              with your chosen print settings, so your job can be printed.
            </li>
            <li>
              Once a print job is completed, your files are deleted immediately — both from our
              servers and from the machines at the print shop.
            </li>
            <li>
              We do not use, read, analyse, sell, or retain the contents of your files for any
              purpose other than fulfilling your print job.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">When We Share Information</h2>
          <p>We share information only in these limited cases:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>
              With the print shop you select — your uploaded files and print settings, so your
              job can be printed.
            </li>
            <li>
              With our licensed third-party payment processor — transaction data only (such as
              your phone number and amount), so top-up payments can be processed. Print files
              are never shared with the payment gateway.
            </li>
            <li>
              Where required by law — if we are legally compelled to disclose information by a
              court or competent authority.
            </li>
          </ul>
          <p className="mt-4">
            We do not sell your personal information, and we do not share it with advertisers or
            data brokers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Cookies and Analytics</h2>
          <p>
            We do not use cookies or third-party analytics or tracking tools on the Service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Data Retention</h2>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Print files: deleted immediately after the relevant print job is completed.</li>
            <li>
              Account information (name and phone number): retained for as long as your account
              is active, and thereafter only as long as required to comply with legal, tax, or
              regulatory obligations.
            </li>
            <li>
              Transaction records: retained by us and/or our payment gateway partner as required
              by applicable law and State Bank of Pakistan regulations.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Data Security</h2>
          <p>
            We apply reasonable technical and organisational measures to protect information
            against unauthorised access, loss, or misuse. No system can be guaranteed to be
            completely secure, but we take the protection of your information seriously.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Children</h2>
          <p>
            The Service is intended for users aged 18 and over. It is not directed at children,
            and we do not knowingly collect information from anyone under 18.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information
            by contacting us at the details below. Please note that we may need to retain
            certain information where required by law.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated version will be
            posted on this page with a revised effective date.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Contact Us</h2>
          <p>
            WeCode
            <br />
            36, Lane 2, Westridge 3, Rawalpindi, Pakistan
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

export default PrivacyPolicy;
