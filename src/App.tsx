import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Code2, BookOpen, Briefcase, Mail, Heart } from 'lucide-react';

// Components
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AnimatedSection from './components/AnimatedSection';
import ProjectCard from './components/ProjectCard';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('about');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const skills = {
    languages: ["Java", "C", "JavaScript", "TypeScript"],
    frontend: ["HTML", "CSS", "React.js", "Tailwind CSS", "React Native", "Next.js", "Recoil"],
    backend: ["Node.js", "Express.js", "JWT", "Web Socket", "Zod validation", "API", "OAuth"],
    database: ["MongoDB", "PrismaORM", "PostgreSQL"],
    tools: ["Git", "GitHub", "Docker"]
  };

  const projects = [
    {
      title: "SketchCraft",
      description: "SketchCraft is a monorepo app managed with TurboRepo, featuring a Next.js frontend with real-time WebSocket interactivity, a Node.js/Express backend secured via JWT, and Prisma for type-safe database operations. It seamlessly integrates these technologies to deliver a scalable, efficient drawing canvas for creating and sharing shapes and freehand sketches.",
      tech: ["TurboRepo", "NextJs", "Web Socket", "nodeJs", "Express", "JWT", "Prisma"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/Anmol0987/draw_app",
      demo: "#"
    },
    {
      title: "Simple Secure Chat",
      description: "A real-time chat application allowing users to create and join rooms for secure one-on-one and group chats. Built with TurboRepo, Next.js, WebSocket, Prisma, JWT, Node.js, Express.js, and Tailwind CSS for seamless and secure communication.",
      tech: ["TurboRepo", 'NextJS', 'Websocket', "Prisma", "JWT", "nodejs", "Express.js", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/Anmol0987/chatApp-turborepo-nextJs-prisma-websocket",
      demo: "#"
    },
    {
      title: "Second Brain",
      description: "Developed Second Brain, a full-stack web application that enables users to sign in/up, embed and manage YouTube and Twitter content, and share personalized pages via unique links, using React.js, Tailwind CSS, Node.js, Express.js, JWT, MongoDB, and React Bits.",
      tech: ["React.Js", "Tailwind Css", "NodeJs", "ExpressJs", "JWT", "MongooDB", "React Bits."],
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/Anmol0987/Second-Brain",
      demo: "#"
    },
    {
      title: "Recipe App",
      description: "A dynamic recipe management application with real-time updates and state management.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/Anmol0987/recipe",
      demo: "https://recipe-peach-ten.vercel.app/"
    }
  ];

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-black via-gray-900 to-black text-gray-100' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900'
    }`}>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Header 
              darkMode={darkMode} 
              setDarkMode={setDarkMode} 
              activeTab={activeTab} 
              setActiveTab={setActiveTab} 
            />

            <div className="container mx-auto px-6 py-12">
              <HeroSection darkMode={darkMode} />

              {/* About Section */}
              <AnimatedSection delay={0.2}>
                <div id="about" className="mb-20">
                  <div className="max-w-4xl mx-auto">
                    <motion.div 
                      className="flex items-center gap-3 mb-8"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <User className={`w-8 h-8 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                      <h2 className={`text-3xl font-bold ${
                        darkMode 
                          ? 'bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent' 
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
                      }`}>
                        About Me
                      </h2>
                    </motion.div>
                    
                    <motion.div 
                      className={`rounded-2xl p-8 transition-all duration-500 ${
                        darkMode 
                          ? 'bg-gray-900/50 border border-gray-800 shadow-2xl shadow-cyan-500/10' 
                          : 'bg-white border border-gray-200 shadow-2xl shadow-blue-500/10'
                      }`}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <motion.p 
                        className={`mb-8 text-lg leading-relaxed ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        I'm a passionate full-stack developer specializing in the MERN stack and React ecosystem.
                        Currently pursuing my B.Tech in CSE with a focus on Cyber Security, I combine my academic
                        knowledge with practical experience in building modern web applications.
                      </motion.p>
                      
                      <div className="space-y-8">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <h3 className={`text-2xl font-semibold mb-6 ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}>Education</h3>
                          <div className="space-y-6">
                            {[
                              {
                                title: "B.Tech (CSE-Cyber Security)",
                                institution: "Oriental College Of Technology (2021-2025)",
                                grade: "CGPA: 7.45"
                              },
                              {
                                title: "12th Grade",
                                institution: "Shiksha Bharti Bal Niketan (2020-2021)",
                                grade: "Percentage: 69%"
                              },
                              {
                                title: "10th Grade (ICSE)",
                                institution: "St. Charles School (2018-2019)",
                                grade: "Percentage: 72%"
                              }
                            ].map((edu, index) => (
                              <motion.div
                                key={index}
                                className={`p-4 rounded-xl transition-all duration-300 ${
                                  darkMode 
                                    ? 'bg-gray-800/50 hover:bg-gray-800' 
                                    : 'bg-gray-50 hover:bg-gray-100'
                                }`}
                                whileHover={{ x: 10, scale: 1.02 }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                              >
                                <h4 className={`font-semibold text-lg ${
                                  darkMode ? 'text-white' : 'text-gray-900'
                                }`}>{edu.title}</h4>
                                <p className={`${
                                  darkMode ? 'text-gray-400' : 'text-gray-500'
                                }`}>{edu.institution}</p>
                                <p className={`font-medium ${
                                  darkMode ? 'text-cyan-400' : 'text-blue-600'
                                }`}>{edu.grade}</p>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Skills Section */}
              <AnimatedSection delay={0.3}>
                <div id="skills" className="mb-20">
                  <div className="max-w-4xl mx-auto">
                    <motion.div 
                      className="flex items-center gap-3 mb-8"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Code2 className={`w-8 h-8 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                      <h2 className={`text-3xl font-bold ${
                        darkMode 
                          ? 'bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent' 
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
                      }`}>
                        Skills
                      </h2>
                    </motion.div>
                    
                    <div className="grid gap-6">
                      {Object.entries(skills).map(([category, items], categoryIndex) => (
                        <motion.div
                          key={category}
                          className={`rounded-2xl p-6 transition-all duration-500 ${
                            darkMode 
                              ? 'bg-gray-900/50 border border-gray-800 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/20' 
                              : 'bg-white border border-gray-200 shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20'
                          }`}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: categoryIndex * 0.1 }}
                          whileHover={{ scale: 1.02, y: -5 }}
                        >
                          <h3 className={`text-xl font-semibold mb-4 capitalize ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}>{category}</h3>
                          <div className="flex flex-wrap gap-3">
                            {items.map((skill, index) => (
                              <motion.span
                                key={index}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                                  darkMode
                                    ? 'bg-gray-800 text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/10 hover:scale-105'
                                    : 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 hover:scale-105'
                                }`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Projects Section */}
              <AnimatedSection delay={0.4}>
                <div id="projects" className="mb-20">
                  <div className="max-w-6xl mx-auto">
                    <motion.div 
                      className="flex items-center gap-3 mb-8"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <BookOpen className={`w-8 h-8 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                      <h2 className={`text-3xl font-bold ${
                        darkMode 
                          ? 'bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent' 
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
                      }`}>
                        Featured Projects
                      </h2>
                    </motion.div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      {projects.map((project, index) => (
                        <ProjectCard
                          key={index}
                          project={project}
                          darkMode={darkMode}
                          index={index}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Experience Section */}
              <AnimatedSection delay={0.5}>
                <div id='experience' className="mb-20">
                  <div className="max-w-4xl mx-auto">
                    <motion.div 
                      className="flex items-center gap-3 mb-8"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Briefcase className={`w-8 h-8 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                      <h2 className={`text-3xl font-bold ${
                        darkMode 
                          ? 'bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent' 
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
                      }`}>
                        Experience
                      </h2>
                    </motion.div>
                    
                    <motion.div 
                      className={`rounded-2xl p-8 transition-all duration-500 ${
                        darkMode 
                          ? 'bg-gray-900/50 border border-gray-800 shadow-xl shadow-cyan-500/10' 
                          : 'bg-white border border-gray-200 shadow-xl shadow-blue-500/10'
                      }`}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className={`text-2xl font-semibold mb-3 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>React Developer Intern</h3>
                        <p className={`mb-4 text-lg ${
                          darkMode ? 'text-cyan-400' : 'text-blue-600'
                        }`}>
                          Abstinent Research & Technologies • Sep 2024 - Nov 2024
                        </p>
                        <ul className={`list-disc list-inside space-y-3 ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {[
                            "Developed reusable React and React Native components",
                            "Implemented React Flow for workflow visualization in the Vibe project",
                            "Created a dynamic settings page and optimized API integration",
                            "Improved application performance through code optimization"
                          ].map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + index * 0.1 }}
                            >
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Contact Section */}
              <AnimatedSection delay={0.6}>
                <div id='contact'>
                  <div className="max-w-4xl mx-auto">
                    <motion.div 
                      className="flex items-center gap-3 mb-8"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Mail className={`w-8 h-8 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                      <h2 className={`text-3xl font-bold ${
                        darkMode 
                          ? 'bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent' 
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
                      }`}>
                        Get in Touch
                      </h2>
                    </motion.div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Contact Form */}
                      <motion.div 
                        className={`rounded-2xl p-8 transition-all duration-500 ${
                          darkMode 
                            ? 'bg-gray-900/50 border border-gray-800 shadow-xl shadow-cyan-500/10' 
                            : 'bg-white border border-gray-200 shadow-xl shadow-blue-500/10'
                        }`}
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <form className="space-y-6">
                          {[
                            { id: 'name', label: 'Name', type: 'text', value: formData.name },
                            { id: 'email', label: 'Email', type: 'email', value: formData.email }
                          ].map((field, index) => (
                            <motion.div
                              key={field.id}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 + index * 0.1 }}
                            >
                              <label htmlFor={field.id} className={`block text-sm font-medium mb-2 ${
                                darkMode ? 'text-gray-300' : 'text-gray-700'
                              }`}>
                                {field.label}
                              </label>
                              <input
                                type={field.type}
                                id={field.id}
                                className={`w-full rounded-xl p-4 transition-all duration-300 ${
                                  darkMode
                                    ? 'bg-gray-800 border-gray-700 focus:border-cyan-400 text-white placeholder-gray-400'
                                    : 'bg-gray-50 border-gray-300 focus:border-blue-500 text-gray-900 placeholder-gray-500'
                                } border-2 focus:ring-4 focus:ring-opacity-20 outline-none`}
                                value={field.value}
                                onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                              />
                            </motion.div>
                          ))}
                          
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                              darkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              Message
                            </label>
                            <textarea
                              id="message"
                              rows={4}
                              className={`w-full rounded-xl p-4 transition-all duration-300 resize-none ${
                                darkMode
                                  ? 'bg-gray-800 border-gray-700 focus:border-cyan-400 text-white placeholder-gray-400'
                                  : 'bg-gray-50 border-gray-300 focus:border-blue-500 text-gray-900 placeholder-gray-500'
                              } border-2 focus:ring-4 focus:ring-opacity-20 outline-none`}
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                          </motion.div>
                          
                          <motion.button
                            type="submit"
                            className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                              darkMode
                                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50'
                                : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50'
                            }`}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            Send Message
                          </motion.button>
                        </form>
                      </motion.div>

                      {/* Contact Info */}
                      <motion.div 
                        className={`rounded-2xl p-8 transition-all duration-500 ${
                          darkMode 
                            ? 'bg-gray-900/50 border border-gray-800 shadow-xl shadow-cyan-500/10' 
                            : 'bg-white border border-gray-200 shadow-xl shadow-blue-500/10'
                        }`}
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <div className="space-y-6">
                          {[
                            { icon: Mail, label: "anmolmittal0987@gmail.com", href: "mailto:anmolmittal0987@gmail.com" },
                            { icon: Mail, label: "+91 7024511800", href: "tel:+917024511800" }
                          ].map((contact, index) => (
                            <motion.a
                              key={index}
                              href={contact.href}
                              className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                                darkMode
                                  ? 'hover:bg-cyan-400/10 text-gray-300 hover:text-cyan-400'
                                  : 'hover:bg-blue-50 text-gray-600 hover:text-blue-600'
                              }`}
                              whileHover={{ x: 10, scale: 1.02 }}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + index * 0.1 }}
                            >
                              <contact.icon className={`w-6 h-6 ${
                                darkMode ? 'text-cyan-400' : 'text-blue-600'
                              }`} />
                              <span className="font-medium">{contact.label}</span>
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Footer */}
            <motion.footer
              className={`mt-20 py-8 border-t transition-all duration-500 ${
                darkMode 
                  ? 'border-gray-800 bg-black/50' 
                  : 'border-gray-200 bg-gray-50/50'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="container mx-auto px-6 text-center">
                <motion.p 
                  className="flex items-center justify-center gap-2 text-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  © 2024 Anmol Mittal. Built with 
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Heart className="w-5 h-5 text-red-500" />
                  </motion.span>
                  using React & Tailwind CSS
                </motion.p>
              </div>
            </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;