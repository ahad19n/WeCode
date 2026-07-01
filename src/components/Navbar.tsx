import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Contact removed from navigation because the button already links there.
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className="
        sticky
        top-0
        z-50
        bg-white/95
        dark:bg-gray-900/95
        backdrop-blur-md
        border-b
        border-gray-200
        dark:border-gray-800
        shadow-sm
        transition-colors
        duration-300
      "
    >
      <div className="max-w-[1800px] mx-auto h-[110px] px-10 flex items-center">

        {/* Logo */}
        <div className="w-[340px] flex-shrink-0">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex flex-1 justify-center">
          <div className="flex items-center gap-20">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  relative
                  text-[21px]
                  font-bold
                  tracking-tight
                  transition-all
                  duration-300
                  ${
                    isActive(link.path)
                      ? "text-[#d31773] dark:text-[#e85b9e]"
                      : "text-gray-800 dark:text-gray-200 hover:text-[#d31773] dark:hover:text-[#e85b9e]"
                  }
                  after:absolute
                  after:left-0
                  after:-bottom-3
                  after:h-[3px]
                  after:w-0
                  after:bg-[#d31773]
                  dark:after:bg-[#e85b9e]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Right Side */}
        <div className="hidden xl:flex items-center gap-5 w-[340px] justify-end">

          <ThemeToggle />

          <Link
            to="/contact"
            className="
              inline-flex
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-r
              from-[#d31773]
              to-[#b40d60]
              text-white
              font-bold
              text-xl
              px-10
              py-4
              shadow-lg
              hover:shadow-xl
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Contact Us
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
          className="
            xl:hidden
            ml-auto
            p-2
            rounded-lg
            hover:bg-gray-100
            dark:hover:bg-gray-800
            transition
          "
        >
          <svg
            className="w-8 h-8 text-gray-800 dark:text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`
                block
                px-8
                py-4
                text-lg
                transition
                ${
                  isActive(link.path)
                    ? "text-[#d31773] dark:text-[#e85b9e] font-bold"
                    : "text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-800"
                }
              `}
            >
              {link.name}
            </Link>
          ))}

          {/* Contact Button */}
          <div className="px-8 py-5 border-t border-gray-200 dark:border-gray-700">

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                flex
                justify-center
                items-center
                w-full
                rounded-xl
                bg-gradient-to-r
                from-[#d31773]
                to-[#b40d60]
                text-white
                font-semibold
                text-lg
                py-3
                shadow-md
                hover:shadow-lg
                transition-all
                duration-300
              "
            >
              Contact Us
            </Link>

            <div className="mt-5 flex justify-center">
              <ThemeToggle />
            </div>

          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;



