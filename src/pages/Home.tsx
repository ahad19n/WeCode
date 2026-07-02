// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket } from 'lucide-react';
import { useScaleIn } from '../hooks/useScrollAnimation';

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
              to="/contact"
              className="px-10 py-5 border-2 border-[#d31773] dark:border-[#e85b9e] text-[#d31773] dark:text-[#e85b9e] font-semibold rounded-2xl hover:bg-pink-50 dark:hover:bg-pink-950/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Explore Services
            </Link>
            <Link
              to="/services"
              className="group relative px-10 py-5 bg-gradient-to-r from-[#d31773] to-[#b50e61] text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2 text-white">
                Get In Touch
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#b50e61] to-[#d31773] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-pink-100 max-w-2xl mx-auto text-white">
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