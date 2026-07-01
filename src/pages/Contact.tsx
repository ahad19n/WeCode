// src/pages/Contact.tsx
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { useSlideUp, useSlideInLeft, useSlideInRight } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div {...useSlideUp(0)}>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#d31773] dark:text-[#e85b9e] bg-pink-50 dark:bg-pink-950/30 rounded-full">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Talk
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left - Contact Info */}
        <div className="space-y-6">
          <div {...useSlideInLeft(0.2)}>
            <div className="group p-8 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-950/40 dark:to-purple-950/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7 text-[#d31773]" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Visit Us</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                374/4, St. Sial Maternity Home<br />
                Tench Bhatta, Rawalpindi
              </p>
            </div>
          </div>

          <div {...useSlideInLeft(0.4)}>
            <div className="group p-8 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-950/40 dark:to-purple-950/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-[#d31773]" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Call Us</h3>
              <p className="text-gray-600 dark:text-gray-400">0335-2147147</p>
            </div>
          </div>

          <div {...useSlideInLeft(0.6)}>
            <div className="group p-8 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-950/40 dark:to-purple-950/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-[#d31773]" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Email Us</h3>
              <p className="text-gray-600 dark:text-gray-400">info@wecode.com.pk</p>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div {...useSlideInRight(0.3)}>
          <div className="p-8 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#d31773] focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#d31773] focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#d31773] focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="relative w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#d31773] to-[#b50e61] text-white font-semibold rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;



// // src/pages/Contact.tsx
// import React from 'react';

// const Contact: React.FC = () => {
//   return (
//     <div className="max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h1>
//       <div className="grid md:grid-cols-2 gap-8">
//         <div>
//           <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700 mb-6">
//             <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Visit Us</h3>
//             <p className="text-gray-600 dark:text-gray-400">
//               374/4, St. Sial Maternity Home<br />
//               Tench Bhatta, Rawalpindi
//             </p>
//           </div>
//           <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700 mb-6">
//             <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Call Us</h3>
//             <p className="text-gray-600 dark:text-gray-400">0335-2147147</p>
//           </div>
//           <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
//             <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Email Us</h3>
//             <p className="text-gray-600 dark:text-gray-400">info@wecode.com.pk</p>
//           </div>
//         </div>
//         <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
//           <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Send a Message</h3>
//           <form className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#d31773] focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
//                 placeholder="Your name"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
//               <input
//                 type="email"
//                 className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#d31773] focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
//                 placeholder="your@email.com"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
//               <textarea
//                 rows={4}
//                 className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#d31773] focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
//                 placeholder="Your message..."
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full px-6 py-3 bg-gradient-to-r from-[#d31773] to-[#b50e61] text-white font-medium rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

