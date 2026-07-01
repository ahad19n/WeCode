// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-16 overflow-hidden bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300">
      
      <div className="w-full border-t border-gray-200 dark:border-gray-800" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="grid lg:grid-cols-4 gap-14">
          
          {/* Column 1: Brand & Socials */}
          <div>
            <Logo />
            <p className="mt-6 text-gray-600 dark:text-gray-400 leading-7 text-[15px]">
              We build modern, reliable and scalable software
              solutions for businesses and startups.
            </p>
            <div className="flex gap-4 mt-6">
              {[FaFacebookF, FaLinkedinIn, FaGithub, FaGlobe].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-11 h-11 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#c21b6f] hover:text-white transition-all duration-200 flex items-center justify-center text-gray-600 dark:text-gray-400"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[17px] font-bold mb-5 text-gray-900 dark:text-white tracking-wide">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2.5 text-[15px]">
              <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-[#c21b6f] transition-colors w-fit">Home</Link>
              <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-[#c21b6f] transition-colors w-fit">About</Link>
              <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-[#c21b6f] transition-colors w-fit">Services</Link>
              <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-[#c21b6f] transition-colors w-fit">Contact</Link>
              <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-[#c21b6f] transition-colors w-fit">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-[#c21b6f] transition-colors w-fit">Terms</Link>
              <Link to="/refund" className="text-gray-600 dark:text-gray-400 hover:text-[#c21b6f] transition-colors w-fit">Refund</Link>
              <Link to="/ownership" className="text-gray-600 dark:text-gray-400 hover:text-[#c21b6f] transition-colors w-fit">Ownership</Link>
            </div>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-[17px] font-bold mb-5 text-gray-900 dark:text-white tracking-wide">
              Services
            </h3>
            <div className="space-y-2.5 text-[15px] text-gray-600 dark:text-gray-400">
              <p className="hover:text-[#c21b6f] transition-colors cursor-pointer w-fit">Web Development</p>
              <p className="hover:text-[#c21b6f] transition-colors cursor-pointer w-fit">Mobile Development</p>
              <p className="hover:text-[#c21b6f] transition-colors cursor-pointer w-fit">UI/UX Design</p>
              <p className="hover:text-[#c21b6f] transition-colors cursor-pointer w-fit">Software Solutions</p>
              <p className="hover:text-[#c21b6f] transition-colors cursor-pointer w-fit">Maintenance & Support</p>
            </div>
          </div>

          {/* Column 4: Contact info */}
          <div>
            <h3 className="text-[17px] font-bold mb-5 text-gray-900 dark:text-white tracking-wide">
              Contact Us
            </h3>
            <div className="space-y-5 text-[15px]">
              <div className="flex gap-4 items-start">
                <MapPin className="text-[#c21b6f] shrink-0 mt-0.5" size={18} />
                <span className="text-gray-600 dark:text-gray-400 leading-6">
                  374/4, St. Sial maternity home,
                  <br />
                  Tench Bhatta, Rawalpindi
                </span>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="text-[#c21b6f] shrink-0" size={18} />
                <span className="text-gray-600 dark:text-gray-400">0335-2147147</span>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="text-[#c21b6f] shrink-0" size={18} />
                <span className="text-gray-600 dark:text-gray-400">info@wecode.com.pk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="mt-12 border-t border-gray-100 dark:border-gray-800 pt-6">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} WeCode. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Background Graphics - Dark mode adjusted */}
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
