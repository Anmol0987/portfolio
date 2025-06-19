import { motion } from 'framer-motion';
import { Terminal, Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';
import DecryptedText from '../DecryptedText';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ darkMode, setDarkMode, activeTab, setActiveTab }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['about', 'skills', 'projects', 'experience', 'contact'];

  return (
    <motion.header
      className={`p-6 border-b ${
        darkMode 
          ? 'border-gray-800 bg-black/95 backdrop-blur-md shadow-lg shadow-cyan-500/10' 
          : 'border-gray-200 bg-white/95 backdrop-blur-md shadow-lg shadow-blue-500/10'
      } sticky top-0 z-40`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-2 text-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              boxShadow: darkMode 
                ? ["0 0 10px rgba(0,255,255,0.3)", "0 0 20px rgba(0,255,255,0.6)", "0 0 10px rgba(0,255,255,0.3)"]
                : ["0 0 10px rgba(59,130,246,0.3)", "0 0 20px rgba(59,130,246,0.6)", "0 0 10px rgba(59,130,246,0.3)"]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              boxShadow: { duration: 2, repeat: Infinity }
            }}
            className={`p-1 rounded-full ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}
          >
            <Terminal className="w-6 h-6" />
          </motion.div>
          <DecryptedText
            text="Anmol Mittal"
            animateOn="view"
            revealDirection="center"
            speed={70}
            className={darkMode ? 'text-white' : 'text-gray-900'}
          />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                onClick={() => setActiveTab(item)}
                className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === item
                    ? darkMode
                      ? 'text-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/20'
                      : 'text-blue-600 bg-blue-50 shadow-lg shadow-blue-500/20'
                    : darkMode
                      ? 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {activeTab === item && (
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      darkMode ? 'bg-cyan-400' : 'bg-blue-600'
                    }`}
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Theme Toggle */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-xl transition-all duration-300 ${
              darkMode
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700 shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-lg shadow-gray-500/20 hover:shadow-gray-500/40'
            }`}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden p-2 rounded-lg ${
              darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden mt-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0, 
          height: mobileMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              onClick={() => {
                setActiveTab(item);
                setMobileMenuOpen(false);
              }}
              className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                activeTab === item
                  ? darkMode
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-blue-600 bg-blue-50'
                  : darkMode
                    ? 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
}