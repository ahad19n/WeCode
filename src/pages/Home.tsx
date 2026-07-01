// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Users, Code, Rocket, Star } from 'lucide-react';
import { 
  useSlideUp, 
  useSlideInLeft, 
  useSlideInRight, 
  useScaleIn 
} from '../hooks/useScrollAnimation';

const Home: React.FC = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Trigger load animations after a small delay
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section - Animates on load */}
      <div className="relative text-center py-20 md:py-28 overflow-hidden">
        {/* Animated Background Blobs - Always animated */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-20 left-10 w-72 h-72 bg-pink-300/20 dark:bg-pink-500/10 rounded-full blur-3xl transition-all duration-1000 ${hasLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
               style={{ transitionDelay: '0.2s' }}></div>
          <div className={`absolute bottom-10 right-10 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl transition-all duration-1000 ${hasLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
               style={{ transitionDelay: '0.6s' }}></div>
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-200/10 dark:bg-pink-400/5 rounded-full blur-3xl transition-all duration-1000 ${hasLoaded ? 'opacity-100' : 'opacity-0'}`}
               style={{ transitionDelay: '0.4s' }}></div>
        </div>

        <div className="relative z-10">
          <div className={`inline-flex items-center gap-2 px-6 py-2.5 mb-8 text-sm font-medium text-[#d31773] dark:text-[#e85b9e] bg-pink-50 dark:bg-pink-950/30 rounded-full border border-pink-200 dark:border-pink-800/30 transition-all duration-700 ${hasLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
               style={{ transitionDelay: '0.3s' }}>
            <Sparkles size={16} className="text-[#d31773] animate-pulse" />
            ✦ Trusted by 500+ businesses worldwide
          </div>

          <h1 className={`text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-[1.1] tracking-tight transition-all duration-700 ${hasLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '0.5s' }}>
            Building Elegant Code,
            <br />
            <span className="text-gradient-primary relative">
              Together.
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#d31773] to-[#b50e61] rounded-full animate-pulse"></span>
            </span>
          </h1>

          <p className={`text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ${hasLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: '0.7s' }}>
            We craft beautiful, performant, and scalable web solutions 
            that help modern businesses thrive in the digital age.
          </p>

          <div className={`flex flex-wrap justify-center gap-4 transition-all duration-700 ${hasLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
               style={{ transitionDelay: '0.9s' }}>
            <Link
              to="/services"
              className="group relative px-10 py-5 bg-gradient-to-r from-[#d31773] to-[#b50e61] text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#b50e61] to-[#d31773] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/contact"
              className="px-10 py-5 border-2 border-[#d31773] dark:border-[#e85b9e] text-[#d31773] dark:text-[#e85b9e] font-semibold rounded-2xl hover:bg-pink-50 dark:hover:bg-pink-950/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section - Load + Scroll Animation */}
      <div 
        {...useSlideUp(0)} 
        className={`transition-all duration-700 ${hasLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1.1s' }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-y border-gray-200 dark:border-gray-800">
          {[
            { number: '500+', label: 'Projects Delivered', icon: Code, color: 'from-pink-500 to-rose-500' },
            { number: '98%', label: 'Client Satisfaction', icon: Users, color: 'from-blue-500 to-cyan-500' },
            { number: '4.9★', label: 'Average Rating', icon: Star, color: 'from-yellow-500 to-orange-500' },
            { number: '24/7', label: 'Support Available', icon: Zap, color: 'from-green-500 to-emerald-500' },
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className={`flex justify-center mb-2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}
                   style={{ transitionDelay: `${0.2 + index * 0.1}s` }}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className={`text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-[#d31773] dark:group-hover:text-[#e85b9e] transition-colors duration-300`}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features - Load + Scroll Animations */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div 
          {...useSlideInLeft(0.2)}
          className={`transition-all duration-700 ${hasLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '1.3s' }}
        >
          <div className="group p-8 bg-white dark:bg-gray-800/50 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-[#d31773]/30 dark:hover:border-[#e85b9e]/30 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-950/40 dark:to-purple-950/40 flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:rotate-6">
              🎨
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-[#d31773] dark:group-hover:text-[#e85b9e] transition-colors">
              Design
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Beautiful, user-centric designs that captivate and convert.
            </p>
            <div className="mt-4 w-12 h-1 bg-gradient-to-r from-[#d31773] to-[#b50e61] rounded-full group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>

        <div 
          {...useScaleIn(0.4)}
          className={`transition-all duration-700 ${hasLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '1.5s' }}
        >
          <div className="group p-8 bg-white dark:bg-gray-800/50 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-[#d31773]/30 dark:hover:border-[#e85b9e]/30 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-950/40 dark:to-purple-950/40 flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:rotate-6">
              ⚡
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-[#d31773] dark:group-hover:text-[#e85b9e] transition-colors">
              Develop
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Clean, maintainable code with modern technologies.
            </p>
            <div className="mt-4 w-12 h-1 bg-gradient-to-r from-[#d31773] to-[#b50e61] rounded-full group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>

        <div 
          {...useSlideInRight(0.6)}
          className={`transition-all duration-700 ${hasLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '1.7s' }}
        >
          <div className="group p-8 bg-white dark:bg-gray-800/50 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-[#d31773]/30 dark:hover:border-[#e85b9e]/30 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-950/40 dark:to-purple-950/40 flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:rotate-6">
              🚀
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-[#d31773] dark:group-hover:text-[#e85b9e] transition-colors">
              Deploy
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Scalable solutions that grow with your business.
            </p>
            <div className="mt-4 w-12 h-1 bg-gradient-to-r from-[#d31773] to-[#b50e61] rounded-full group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>
      </div>

      {/* Workflow Section - Load + Scroll Animation */}
      <div className={`mt-20 p-10 md:p-14 bg-gradient-to-br from-pink-50/50 to-purple-50/50 dark:from-gray-800/30 dark:to-gray-900/30 rounded-3xl border border-gray-200 dark:border-gray-700 transition-all duration-700 ${hasLoaded ? 'opacity-100' : 'opacity-0'}`}
           style={{ transitionDelay: '1.9s' }}>
        <div {...useSlideUp(0)}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our Workflow
            <span className="block text-base font-normal text-gray-500 dark:text-gray-400 mt-2">
              How we bring your ideas to life
            </span>
          </h2>
        </div>
        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            { num: '01', title: 'Discovery & Planning', desc: 'We analyze your needs, define goals, and create a strategic roadmap.' },
            { num: '02', title: 'Design & Development', desc: 'Our team crafts beautiful designs and builds robust solutions.' },
            { num: '03', title: 'Launch & Support', desc: 'We deploy, monitor, and provide ongoing support for your success.' }
          ].map((step, index) => (
            <div key={index} {...useSlideInLeft(0.3 + index * 0.2)}>
              <div className="group flex items-start gap-6 p-6 bg-white dark:bg-gray-800/50 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-x-1 border border-gray-100 dark:border-gray-700 hover:border-[#d31773]/20 dark:hover:border-[#e85b9e]/20">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#d31773] to-[#b50e61] text-white flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1 group-hover:text-[#d31773] dark:group-hover:text-[#e85b9e] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials / Social Proof - Load + Scroll Animation */}
      <div className={`mt-20 transition-all duration-700 ${hasLoaded ? 'opacity-100' : 'opacity-0'}`}
           style={{ transitionDelay: '2.1s' }}>
        <div {...useScaleIn(0)}>
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Trusted by Industry Leaders
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Sarah Johnson', role: 'CEO, TechStart', text: 'wecode transformed our digital presence completely. Their attention to detail is unmatched!' },
            { name: 'Michael Chen', role: 'CTO, InnovateLabs', text: 'The team delivered a complex platform ahead of schedule. Highly recommend their services.' },
            { name: 'Emily Rodriguez', role: 'Founder, DesignHub', text: 'Working with wecode has been a game-changer for our business. They truly understand our vision.' }
          ].map((testimonial, index) => (
            <div key={index} {...useSlideUp(0.3 + index * 0.2)}>
              <div className="p-6 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-gray-800 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section - Load + Scroll Animation */}
      <div className={`mt-20 transition-all duration-700 ${hasLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
           style={{ transitionDelay: '2.3s' }}>
        <div {...useScaleIn(0.2)}>
          <div className="p-12 md:p-16 bg-gradient-to-r from-[#d31773] to-[#b50e61] rounded-3xl text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
            
            {/* Floating animated elements */}
            <div className="absolute top-10 left-10 text-4xl animate-bounce opacity-20">✦</div>
            <div className="absolute bottom-10 right-10 text-4xl animate-bounce opacity-20" style={{ animationDelay: '0.5s' }}>✦</div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-pink-100 max-w-2xl mx-auto">
                Let's work together to create digital experiences that stand out.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#d31773] font-bold rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                Start Your Project
                <Rocket size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;




// // src/pages/Home.tsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home: React.FC = () => {
//   return (
//     <div className="max-w-4xl mx-auto">
//       {/* Hero Section */}
//       <div className="text-center py-16 md:py-20">
//         <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-[#d31773] dark:text-[#e85b9e] bg-pink-50 dark:bg-pink-950/30 rounded-full">
//           ✦ Trusted by startups & enterprises
//         </div>
//         <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
//           Building Elegant Code,
//           <br />
//           <span className="text-gradient-primary">Together.</span>
//         </h1>
//         <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
//           We craft beautiful, performant, and scalable web solutions for modern businesses.
//         </p>
//         <div className="flex flex-wrap justify-center gap-4">
//           <Link
//             to="/services"
//             className="px-8 py-4 bg-gradient-to-r from-[#d31773] to-[#b50e61] text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
//           >
//             Our Services
//           </Link>
//           <Link
//             to="/contact"
//             className="px-8 py-4 border-2 border-[#d31773] dark:border-[#e85b9e] text-[#d31773] dark:text-[#e85b9e] font-semibold rounded-xl hover:bg-pink-50 dark:hover:bg-pink-950/20 transition-all duration-300"
//           >
//             Get in Touch
//           </Link>
//         </div>
//       </div>

//       {/* Features */}
//       <div className="grid md:grid-cols-3 gap-8 mt-12">
//         <div className="p-8 bg-white dark:bg-gray-800/80 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
//           <div className="w-14 h-14 rounded-xl bg-pink-100 dark:bg-pink-950/40 flex items-center justify-center mb-5">
//             <span className="text-2xl">🎨</span>
//           </div>
//           <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Design</h3>
//           <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Beautiful, user-centric designs that captivate and convert.</p>
//         </div>
//         <div className="p-8 bg-white dark:bg-gray-800/80 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
//           <div className="w-14 h-14 rounded-xl bg-pink-100 dark:bg-pink-950/40 flex items-center justify-center mb-5">
//             <span className="text-2xl">⚡</span>
//           </div>
//           <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Develop</h3>
//           <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Clean, maintainable code with modern technologies.</p>
//         </div>
//         <div className="p-8 bg-white dark:bg-gray-800/80 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
//           <div className="w-14 h-14 rounded-xl bg-pink-100 dark:bg-pink-950/40 flex items-center justify-center mb-5">
//             <span className="text-2xl">🚀</span>
//           </div>
//           <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Deploy</h3>
//           <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Scalable solutions that grow with your business.</p>
//         </div>
//       </div>

//       {/* Workflow */}
//       <div className="mt-16 p-10 bg-white dark:bg-gray-800/80 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
//         <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">Our Workflow</h2>
//         <div className="space-y-5 max-w-2xl mx-auto">
//           <div className="flex items-start gap-4">
//             <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#d31773] text-white flex items-center justify-center text-sm font-bold">1</span>
//             <p className="text-gray-700 dark:text-gray-300 leading-relaxed">Design precisely process and solution and remote development.</p>
//           </div>
//           <div className="flex items-start gap-4">
//             <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#d31773] text-white flex items-center justify-center text-sm font-bold">2</span>
//             <p className="text-gray-700 dark:text-gray-300 leading-relaxed">Design one of list-item team and processing new impacts.</p>
//           </div>
//           <div className="flex items-start gap-4">
//             <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#d31773] text-white flex items-center justify-center text-sm font-bold">3</span>
//             <p className="text-gray-700 dark:text-gray-300 leading-relaxed">Evaluate your workflows processing and the steps.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

