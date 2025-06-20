import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, Download, Code, Zap, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface HeroSectionProps {
  darkMode: boolean;
}

export default function HeroSection({ darkMode }: HeroSectionProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 lg:pt-20">
      {/* Geometric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 ${
          darkMode 
            ? 'bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.1),transparent_50%)]' 
            : 'bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]'
        }`} />
        
        {[...Array(window.innerWidth < 768 ? 8 : 15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute border ${
              darkMode ? 'border-cyan-400/10' : 'border-blue-200/30'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${15 + Math.random() * 25}px`,
              height: `${15 + Math.random() * 25}px`,
              clipPath: i % 3 === 0 
                ? 'polygon(0 0, 100% 0, 85% 100%, 0 100%)'
                : i % 3 === 1
                ? 'polygon(0 0, 85% 0, 100% 100%, 15% 100%)'
                : 'polygon(15% 0, 100% 0, 100% 85%, 0 100%)'
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection delay={0.2}>
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              <motion.div
                className="flex items-center justify-center gap-2 sm:gap-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className={`w-2 h-2 rounded-full ${
                    darkMode ? 'bg-cyan-400' : 'bg-green-500'
                  }`}
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className={`text-xs sm:text-sm font-mono tracking-wider ${
                  darkMode ? 'text-cyan-400' : 'text-green-600'
                }`}>
                  AVAILABLE FOR WORK
                </span>
              </motion.div>

              <div className="space-y-4 sm:space-y-6">
                <motion.h1
                  className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight ${
                    darkMode 
                      ? 'text-white' 
                      : 'text-gray-900'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  ANMOL
                  <br />
                  <span className={`${
                    darkMode 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
                  }`}>
                    MITTAL
                  </span>
                </motion.h1>

                <motion.div
                  className="relative flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <div className={`inline-block px-4 sm:px-6 py-2 sm:py-3 ${
                    darkMode 
                      ? 'bg-cyan-400/10 border border-cyan-400/30' 
                      : 'bg-blue-50 border border-blue-200'
                  }`}
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                  }}>
                    <span className={`text-sm sm:text-lg lg:text-xl font-mono tracking-wider ${
                      darkMode ? 'text-cyan-400' : 'text-blue-600'
                    }`}>
                      <span className="hidden sm:inline">FULL_STACK_</span>DEVELOPER<span className="hidden sm:inline">.EXE</span>
                    </span>
                  </div>
                </motion.div>
              </div>

              <motion.p
                className={`text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl lg:max-w-3xl mx-auto px-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
              >
                Specialized in MERN stack development with expertise in React, Node.js, and modern web technologies. 
                <span className="hidden sm:inline"> Currently pursuing B.Tech in CSE with Cyber Security focus.</span>
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              >
                <motion.button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`group flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 font-semibold tracking-wide transition-all duration-300 ${
                    darkMode
                      ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  VIEW PROJECTS
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                </motion.button>

                <motion.a
                  href="https://drive.google.com/file/d/1IHFbwy1ofZg0e_oK0RrJXJBtDrVNztTk/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 font-semibold tracking-wide border-2 transition-all duration-300 ${
                    darkMode
                      ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                      : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  RESUME<span className="hidden sm:inline">.PDF</span>
                </motion.a>
              </motion.div>

              <motion.div
                className="flex justify-center gap-4 sm:gap-6 pt-4 sm:pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9, duration: 0.8 }}
              >
                {[
                  { href: "https://github.com/Anmol0987", icon: Github, label: "GITHUB" },
                  { href: "https://www.linkedin.com/in/anmol-mittal-b53562229", icon: Linkedin, label: "LINKEDIN" }
                ].map(({ href, icon: Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 sm:p-4 border transition-all duration-300 ${
                      darkMode
                        ? 'border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400'
                        : 'border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-400'
                    }`}
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-wrap justify-center gap-2 sm:gap-4 pt-6 sm:pt-8 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.8 }}
              >
                {['REACT', 'NODE', 'MONGO', 'EXPRESS'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    className={`px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-mono tracking-wider ${
                      darkMode 
                        ? 'bg-cyan-400/10 border border-cyan-400/30 text-cyan-400' 
                        : 'bg-blue-50 border border-blue-200 text-blue-600'
                    }`}
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}