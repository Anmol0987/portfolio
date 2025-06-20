import { motion } from 'framer-motion';
import {  Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ darkMode, setDarkMode, activeTab, setActiveTab }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['about', 'skills', 'projects', 'experience', 'contact'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveTab(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 ${
        darkMode 
          ? 'bg-black/90 border-b border-cyan-400/20' 
          : 'bg-white/90 border-b border-blue-200/50'
      } backdrop-blur-md`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden border-2 ${
                darkMode ? 'border-cyan-400/50' : 'border-blue-500/50'
              }`}>
                <img
                  src="https://res.cloudinary.com/dvwmoh776/image/upload/v1738343815/raftj45nn8wrauknjxyd.png"
                  alt="Anmol Mittal"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className={`absolute -bottom-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 rounded-full ${
                  darkMode ? 'bg-cyan-400' : 'bg-green-500'
                }`}
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            
            <div className="relative">
              <span className={`text-lg lg:text-xl font-bold tracking-wider ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                ANMOL.DEV
              </span>
              <motion.div
                className={`absolute -bottom-1 left-0 h-px ${
                  darkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-transparent' 
                    : 'bg-gradient-to-r from-blue-500 to-transparent'
                }`}
                initial={{ width: 0 }}
                animate={{ width: "70%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </div>
          </motion.div>

          <div className="flex items-center gap-2">
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                    activeTab === item
                      ? darkMode
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-blue-600 bg-blue-50'
                      : darkMode
                        ? 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  style={{
                    clipPath: activeTab === item 
                      ? 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                      : 'none'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.toUpperCase()}
                  {activeTab === item && (
                    <motion.div
                      className={`absolute bottom-0 left-1 right-1 h-px ${
                        darkMode ? 'bg-cyan-400' : 'bg-blue-600'
                      }`}
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative p-2 ml-4 ${
                darkMode
                  ? 'bg-gray-900 border border-cyan-400/30 text-cyan-400'
                  : 'bg-gray-100 border border-blue-200 text-blue-600'
              } transition-all duration-300`}
              style={{
                clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: darkMode ? 0 : 180 }}
                transition={{ duration: 0.5 }}
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.div>
              
              <motion.div
                className={`absolute -top-0.5 -right-0.5 w-1.5 h-1.5 ${
                  darkMode ? 'bg-cyan-400' : 'bg-blue-500'
                }`}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.button>

            <motion.button
              className={`lg:hidden p-2 ml-2 ${
                darkMode ? 'text-cyan-400' : 'text-blue-600'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        <motion.div
          className={`lg:hidden overflow-hidden ${
            darkMode ? 'bg-black/95 border-t border-cyan-400/20' : 'bg-white/95 border-t border-blue-200'
          }`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: mobileMenuOpen ? 'auto' : 0,
            opacity: mobileMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <nav className="py-4 space-y-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeTab === item
                    ? darkMode
                      ? 'text-cyan-400 bg-cyan-400/10 border-l-2 border-cyan-400'
                      : 'text-blue-600 bg-blue-50 border-l-2 border-blue-500'
                    : darkMode
                      ? 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.toUpperCase()}
              </motion.button>
            ))}
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}