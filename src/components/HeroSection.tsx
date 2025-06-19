import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, Download } from 'lucide-react';
import DecryptedText from '../DecryptedText';
import AnimatedSection from './AnimatedSection';

interface HeroSectionProps {
  darkMode: boolean;
}

export default function HeroSection({ darkMode }: HeroSectionProps) {
  const fullText = 'Full Stack MERN Developer | React Specialist';

  return (
    <section id="hero" className="mb-20 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              darkMode ? 'bg-cyan-400/20' : 'bg-blue-500/20'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedSection delay={0.2}>
          <motion.div
            className="mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="relative inline-block mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <motion.img
                src='https://res.cloudinary.com/dvwmoh776/image/upload/v1738343815/raftj45nn8wrauknjxyd.png'
                alt="Anmol Mittal"
                className={`w-64 h-80 rounded-2xl border-4 p-1 mx-auto transition-all duration-500 ${
                  darkMode 
                    ? 'border-cyan-400 shadow-2xl shadow-cyan-400/30' 
                    : 'border-blue-500 shadow-2xl shadow-blue-500/30'
                }`}
                animate={{
                  boxShadow: darkMode
                    ? [
                        "0 0 30px rgba(0,255,255,0.3)",
                        "0 0 60px rgba(0,255,255,0.5)",
                        "0 0 30px rgba(0,255,255,0.3)"
                      ]
                    : [
                        "0 0 30px rgba(59,130,246,0.3)",
                        "0 0 60px rgba(59,130,246,0.5)",
                        "0 0 30px rgba(59,130,246,0.3)"
                      ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Floating ring animation */}
              <motion.div
                className={`absolute inset-0 rounded-2xl border-2 ${
                  darkMode ? 'border-cyan-400/50' : 'border-blue-500/50'
                }`}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            <motion.h1
              className={`text-5xl md:text-7xl font-bold mb-6 ${
                darkMode 
                  ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent' 
                  : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent'
              }`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Anmol Mittal
            </motion.h1>

            <motion.div
              className={`text-xl mb-8 h-20 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <DecryptedText
                text={fullText}
                animateOn="view"
                revealDirection="center"
                speed={100}
              />
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center flex-wrap mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <motion.a
                href="#projects"
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  darkMode
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ExternalLink className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/1WbzWr4NXvZ8HsgJHiftckIgdC8CKxWMD/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  darkMode
                    ? 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40'
                    : 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div
              className="flex gap-6 justify-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              {[
                { href: "https://github.com/Anmol0987", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/anmol-mittal-b53562229", icon: Linkedin, label: "LinkedIn" }
              ].map(({ href, icon: Icon, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    darkMode
                      ? 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/30'
                      : 'text-gray-500 hover:text-blue-500 hover:bg-blue-50 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/30'
                  }`}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}