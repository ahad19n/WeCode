// src/components/ThemeToggle.tsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        p-2.5 rounded-full 
        bg-gray-100 hover:bg-gray-200 
        dark:bg-gray-700 dark:hover:bg-gray-600
        transition-all duration-300
        text-gray-700 dark:text-gray-200
        hover:scale-110
      "
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon size={20} />
      ) : (
        <Sun size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;