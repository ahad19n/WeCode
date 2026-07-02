// src/pages/Services.tsx
import React from 'react';
import { Code, Palette, Smartphone, TrendingUp, Cloud, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSlideUp, useScaleIn } from '../hooks/useScrollAnimation';

const Services: React.FC = () => {
  const services = [
    { 
      icon: Code, 
      title: 'Web Development', 
      desc: 'Custom web applications built with modern frameworks and best practices.',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Palette, 
      title: 'UI/UX Design', 
      desc: 'Beautiful, intuitive interfaces that users love to interact with.',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Smartphone, 
      title: 'Mobile Development', 
      desc: 'Cross-platform mobile apps that work seamlessly on all devices.',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: TrendingUp, 
      title: 'Digital Strategy', 
      desc: 'Strategic guidance to align technology with your business goals.',
      color: 'from-orange-500 to-red-500'
    },
    { 
      icon: Cloud, 
      title: 'Cloud Solutions', 
      desc: 'Scalable cloud architecture and deployment services.',
      color: 'from-indigo-500 to-blue-500'
    },
    { 
      icon: Shield, 
      title: 'Maintenance & Support', 
      desc: 'Support and maintenance to keep your applications running smoothly.',
      color: 'from-rose-500 to-pink-500'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div {...useSlideUp(0)}>
        <div className="text-center mb-12">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} {...useScaleIn(0.2 + index * 0.1)}>
            <div className="group relative p-8 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-[#d31773] dark:group-hover:text-[#e85b9e] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div {...useScaleIn(0.2)}>
        <div className="mt-16 p-10 bg-gradient-to-r from-[#d31773] to-[#b50e61] rounded-3xl text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Ready to Get Started?</h2>
          <p className="text-pink-100 mb-6">Let's discuss your project and find the perfect solution.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#d31773] font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Contact Us Today
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;


// // src/pages/Services.tsx
// import React from 'react';

// const Services: React.FC = () => {
//   return (
//     <div className="max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Services</h1>
//       <div className="grid md:grid-cols-2 gap-6">
//         <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700">
//           <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Web Development</h3>
//           <p className="text-gray-600 dark:text-gray-400">
//             Custom web applications built with modern frameworks and best practices.
//           </p>
//         </div>
//         <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700">
//           <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">UI/UX Design</h3>
//           <p className="text-gray-600 dark:text-gray-400">
//             Beautiful, intuitive interfaces that users love to interact with.
//           </p>
//         </div>
//         <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700">
//           <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Mobile Development</h3>
//           <p className="text-gray-600 dark:text-gray-400">
//             Cross-platform mobile apps that work seamlessly on all devices.
//           </p>
//         </div>
//         <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700">
//           <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Digital Strategy</h3>
//           <p className="text-gray-600 dark:text-gray-400">
//             Strategic guidance to align technology with your business goals.
//           </p>
//         </div>
//         <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700">
//           <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Cloud Solutions</h3>
//           <p className="text-gray-600 dark:text-gray-400">
//             Scalable cloud architecture and deployment services.
//           </p>
//         </div>
//         <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700">
//           <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Maintenance & Support</h3>
//           <p className="text-gray-600 dark:text-gray-400">
//             Ongoing support and maintenance to keep your applications running smoothly.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

