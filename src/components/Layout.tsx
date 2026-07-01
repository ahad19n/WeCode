// src/components/Layout.tsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling to top
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9fb] dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

