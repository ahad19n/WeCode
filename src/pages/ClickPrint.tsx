// src/pages/ClickPrint.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Printer,
  Upload,
  MapPin,
  Wallet,
  CreditCard,
  PackageCheck,
  Clock,
  Store,
  Repeat,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { useSlideUp, useScaleIn } from '../hooks/useScrollAnimation';

const ClickPrint: React.FC = () => {
  const howItWorks = [
    {
      icon: Upload,
      title: '1. Upload your document',
      desc: 'The user opens the ClickPrint app, uploads the file they want printed, and chooses their print settings (paper size, colour or black & white, number of copies, etc.).',
    },
    {
      icon: MapPin,
      title: '2. Pick a nearby print shop',
      desc: 'ClickPrint shows a list of participating print shops near the user and generates an instant cost quote for the selected job.',
    },
    {
      icon: Wallet,
      title: '3. Pay from the in-app wallet',
      desc: 'The user confirms the job, and the quoted amount is deducted from their pre-funded ClickPrint wallet. No cash is exchanged and no queue is required.',
    },
    {
      icon: PackageCheck,
      title: '4. Collect the prints',
      desc: 'The job is sent straight to the selected shop’s queue. The user walks in and collects the finished prints — no waiting in line to place the order.',
    },
  ];

  const topUpFlow = [
    {
      icon: Wallet,
      title: 'User chooses to top up',
      desc: 'Inside the app, the user selects an amount to add to their ClickPrint wallet (currently between PKR 100 and PKR 1,000 per transaction).',
    },
    {
      icon: CreditCard,
      title: 'Payment request via the gateway',
      desc: 'ClickPrint submits a Raast Request-to-Pay through our licensed payment gateway partner, associated with the user’s mobile number. The user approves the payment inside their own bank or wallet app (JazzCash, EasyPaisa, SadaPay, NayaPay, etc.).',
    },
    {
      icon: ShieldCheck,
      title: 'Confirmation returns to ClickPrint',
      desc: 'The gateway processes the transaction and returns only a success/failure result and a transaction reference. WeCode never sees or stores the user’s bank details, card numbers, or PINs.',
    },
    {
      icon: Repeat,
      title: 'Wallet is credited',
      desc: 'On success, the wallet balance is updated instantly and is then used to pay for print jobs. Balance is non-refundable to cash and can only be spent on printing within the app.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero */}
      <div {...useSlideUp(0)}>
        <div className="text-center mb-6">
          <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-[#d31773] to-[#b50e61] flex items-center justify-center text-white shadow-lg">
            <Printer size={38} />
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 dark:bg-pink-950/30 text-[#d31773] dark:text-[#e85b9e] mb-4">
            A WeCode product · Launching soon
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            ClickPrint
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            An app that ends the long queues at print shops. Upload, quote, pay from
            your wallet, and simply walk in to collect your prints.
          </p>
        </div>
      </div>

      {/* The problem */}
      <div {...useScaleIn(0.15)}>
        <div className="mt-10 p-8 md:p-10 bg-gradient-to-br from-pink-50/50 to-purple-50/50 dark:from-gray-800/30 dark:to-gray-900/30 rounded-3xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            The problem we solve
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            At busy print shops — near universities, markets, and offices — customers
            waste time standing in long queues just to hand over a file and wait for it
            to be printed. ClickPrint removes that wait. Customers place and pay for their
            print job from their phone before they arrive, and the shop prints it in the
            background. The customer only shows up to collect the finished prints.
          </p>
        </div>
      </div>

      {/* How it works */}
      <div {...useSlideUp(0.1)}>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-16 mb-8 text-center">
          How ClickPrint works
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {howItWorks.map((step, index) => (
          <div key={step.title} {...useScaleIn(0.15 + index * 0.1)}>
            <div className="h-full p-7 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-950/40 dark:to-purple-950/40 flex items-center justify-center mb-4">
                <step.icon className="w-7 h-7 text-[#d31773]" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Business model */}
      <div {...useSlideUp(0.1)}>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-16 mb-8 text-center">
          Our business model
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div {...useScaleIn(0.15)}>
          <div className="h-full p-7 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#d31773] to-[#b50e61] flex items-center justify-center text-white mb-4">
              <Store size={26} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">
              A software subscription for print shops
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              ClickPrint is a business-to-business SaaS product. WeCode earns revenue by
              charging participating print shops a flat recurring subscription fee to use
              the ClickPrint software that manages their incoming jobs and queue. This
              subscription is how the business is funded.
            </p>
          </div>
        </div>
        <div {...useScaleIn(0.25)}>
          <div className="h-full p-7 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#d31773] to-[#b50e61] flex items-center justify-center text-white mb-4">
              <Wallet size={26} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">
              No commission or service charge on payments
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              WeCode does not currently take any commission or add any service charge on
              customer payments. The amount a customer pays for a print job is for the
              printing itself. Wallet top-ups exist purely to let customers pay for their
              print jobs conveniently — they are not a revenue stream for WeCode.
            </p>
          </div>
        </div>
      </div>

      {/* Payment gateway use case — the key section for onboarding */}
      <div {...useSlideUp(0.1)}>
        <div className="mt-16 p-8 md:p-10 bg-white dark:bg-gray-800/50 rounded-3xl border-2 border-[#d31773]/20 dark:border-[#e85b9e]/20">
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="w-8 h-8 text-[#d31773] dark:text-[#e85b9e]" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              How the payment gateway is used
            </h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            ClickPrint includes a pre-funded <strong>in-app wallet</strong>. The payment
            gateway is used for a single, well-defined purpose:
            <strong> letting customers top up (add funds to) their ClickPrint wallet</strong>.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Top-ups are processed through <strong>Raast</strong>, the instant payment system
            operated by the State Bank of Pakistan, using the Request-to-Pay flow via our
            licensed payment gateway partner. Once funds are in the wallet, the customer
            spends that balance on print jobs inside the app; each confirmed job simply
            deducts from the existing wallet balance. The gateway is therefore only involved
            at the top-up step, never at the point of printing.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            WeCode does not receive, see, or store any payment credentials. Our gateway
            partner returns only a success/failure result and a transaction reference, which
            we use to credit the wallet.
          </p>
        </div>
      </div>

      {/* Top-up flow steps */}
      <div {...useSlideUp(0.1)}>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-8 text-center">
          The wallet top-up flow, step by step
        </h2>
      </div>
      <div className="space-y-4">
        {topUpFlow.map((step, index) => (
          <div key={step.title} {...useScaleIn(0.12 + index * 0.08)}>
            <div className="flex items-start gap-5 p-6 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#d31773] to-[#b50e61] flex items-center justify-center text-white">
                <step.icon size={22} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-1">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Key facts / limits */}
      <div {...useScaleIn(0.15)}>
        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          <div className="p-6 bg-gradient-to-br from-pink-50/50 to-purple-50/50 dark:from-gray-800/30 dark:to-gray-900/30 rounded-2xl border border-gray-200 dark:border-gray-700 text-center">
            <Wallet className="w-7 h-7 text-[#d31773] dark:text-[#e85b9e] mx-auto mb-3" />
            <p className="font-bold text-gray-800 dark:text-white">PKR 100 – 1,000</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">per top-up transaction</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-pink-50/50 to-purple-50/50 dark:from-gray-800/30 dark:to-gray-900/30 rounded-2xl border border-gray-200 dark:border-gray-700 text-center">
            <Clock className="w-7 h-7 text-[#d31773] dark:text-[#e85b9e] mx-auto mb-3" />
            <p className="font-bold text-gray-800 dark:text-white">Balance never expires</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">spendable only on printing</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-pink-50/50 to-purple-50/50 dark:from-gray-800/30 dark:to-gray-900/30 rounded-2xl border border-gray-200 dark:border-gray-700 text-center">
            <ShieldCheck className="w-7 h-7 text-[#d31773] dark:text-[#e85b9e] mx-auto mb-3" />
            <p className="font-bold text-gray-800 dark:text-white">No credentials stored</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">payments handled by the gateway</p>
          </div>
        </div>
      </div>

      {/* Legal references */}
      <div {...useSlideUp(0.1)}>
        <div className="mt-12 p-8 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Supporting policies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Full details of how payments, wallets, refunds, and data are handled are set out
            in our policies:
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/terms" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-[#d31773] hover:text-[#d31773] dark:hover:text-[#e85b9e] transition-colors">
              Terms and Conditions
            </Link>
            <Link to="/privacy" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-[#d31773] hover:text-[#d31773] dark:hover:text-[#e85b9e] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/refund" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-[#d31773] hover:text-[#d31773] dark:hover:text-[#e85b9e] transition-colors">
              Refund Policy
            </Link>
            <Link to="/ownership" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-[#d31773] hover:text-[#d31773] dark:hover:text-[#e85b9e] transition-colors">
              Ownership Statement
            </Link>
          </div>
        </div>
      </div>

      {/* CTA back to projects */}
      <div {...useScaleIn(0.15)}>
        <div className="mt-10 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-semibold text-[#d31773] dark:text-[#e85b9e] hover:gap-3 transition-all"
          >
            <ArrowRight size={18} className="rotate-180" />
            Back to all projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClickPrint;
