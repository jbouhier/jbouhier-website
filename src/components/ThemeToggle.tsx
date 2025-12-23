import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Get theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'light';
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="group fixed top-4 right-4 sm:top-8 sm:right-8 z-50 overflow-hidden transition-all duration-300 ease-out
        flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl
        bg-white/20 dark:bg-black/30 backdrop-blur-lg
        border border-white/30 dark:border-white/10
        shadow-lg shadow-black/10 dark:shadow-black/30
        hover:bg-white/30 dark:hover:bg-black/40
        hover:shadow-xl hover:shadow-primary-500/15
        hover:scale-105 hover:ring-2 hover:ring-primary-500
        text-primary-500 hover:text-primary-600
        active:scale-95"
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <FaMoon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:rotate-12" />
      ) : (
        <FaSun className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:rotate-45" />
      )}
    </button>
  );
};
