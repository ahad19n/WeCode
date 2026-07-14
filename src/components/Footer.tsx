// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-16 overflow-hidden bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300">
      
      <div className="w-full border-t border-gray-200 dark:border-gray-800" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-30">
        <div className="grid lg:grid-cols-4 gap-14">
          
          <div>
            <Logo />
            <p className="mt-6 text-gray-600 dark:text-gray-400 leading-7 text-[15px] mb-5">
              Modern, reliable and scalable software
              solutions for businesses and startups.
            </p>
            <div className="space-y-5 text-[15px]">
              <div className="flex gap-4 items-center">
                <Phone className="text-[#c21b6f] shrink-0" size={18} />
                <span className="text-gray-600 dark:text-gray-400">+92 323 5400291<br />+92 335 2147147</span>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="text-[#c21b6f] shrink-0" size={18} />
                <span className="text-gray-600 dark:text-gray-400">support@wecode.com.pk</span>
              </div>
              <div className="flex gap-4 items-start">
                <MapPin className="text-[#c21b6f] shrink-0 mt-0.5" size={18} />
                <span className="text-gray-600 dark:text-gray-400 leading-6">
                  374/4, St. Sial Maternity Home,
                  <br />
                  Tench Bhatta, Rawalpindi
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[17px] font-bold mb-5 text-gray-900 dark:text-white tracking-wide">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2.5 text-[15px]">
              <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-[#c21b6f] transition-colors w-fit">Home</Link>
              <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-[#c21b6f] transition-colors w-fit">About Us</Link>
              <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-[#c21b6f] transition-colors w-fit">Contact Us</Link>
              <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-[#c21b6f] transition-colors w-fit">Our Services</Link>
              <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-[#c21b6f] transition-colors w-fit">Projects</Link>
              <Link to="/projects/clickprint" className="text-gray-600 dark:text-gray-400 hover:text-[#c21b6f] transition-colors w-fit">ClickPrint</Link>
            </div>
          </div>

          <div>
            <h3 className="text-[17px] font-bold mb-5 text-gray-900 dark:text-white tracking-wide">
              Legal
            </h3>
            <div className="flex flex-col space-y-2.5 text-[15px]">
              <Link to="/refund" className="text-gray-600 dark:text-gray-400 hover:text-[#c21b6f] transition-colors w-fit">Refund Policy</Link>
              <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-[#c21b6f] transition-colors w-fit">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-[#c21b6f] transition-colors w-fit">Terms and Conditions</Link>
              <Link to="/ownership" className="text-gray-600 dark:text-gray-400 hover:text-[#c21b6f] transition-colors w-fit">Ownership Statement</Link>
            </div>
          </div>

          <div>
            <h3 className="text-[17px] font-bold mb-5 text-gray-900 dark:text-white tracking-wide">
              Services
            </h3>
            <div className="flex flex-col space-y-2.5 text-[15px]">
              <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-[#c21b6f] transition-colors w-fit">Web Development</Link>
              <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-[#c21b6f] transition-colors w-fit">Mobile Development</Link>
              <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-[#c21b6f] transition-colors w-fit">UI/UX Design</Link>
              <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-[#c21b6f] transition-colors w-fit">Software Solutions</Link>
              <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-[#c21b6f] transition-colors w-fit">Maintenance & Support</Link>

            </div>
          </div>

          <div>

          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <svg 
          className="absolute left-0 bottom-0 w-full h-[440px]" 
          viewBox="0 0 1440 440" 
          preserveAspectRatio="none"
        >
          <path 
            d="M 700,440 C 1000,380 1250,200 1440,0 L 1440,440 Z" 
            className="fill-[#734065] dark:fill-[#2d1a2a]" 
          />
          <path 
            d="M 0,280 L 1150,440 L 0,440 Z" 
            className="fill-[#c21b6f] dark:fill-[#7a1a45]" 
          />
        </svg>
      </div>

    </footer>
  );
};

export default Footer;
