import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Code2, BookOpen, Briefcase, Mail, Heart, Terminal, Zap, Database, Globe, Smartphone, Server, Palette, Shield } from 'lucide-react';

// Components
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AnimatedSection from './components/AnimatedSection';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('about');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const skillCategories = {
    languages: {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: Code2, color: "text-yellow-400", bgColor: "bg-yellow-400/10" },
        { name: "TypeScript", icon: Code2, color: "text-blue-400", bgColor: "bg-blue-400/10" },
        { name: "Java", icon: Code2, color: "text-red-500", bgColor: "bg-red-500/10" },
        { name: "C", icon: Code2, color: "text-gray-400", bgColor: "bg-gray-400/10" }
      ]
    },
    frontend: {
      title: "Frontend Technologies",
      skills: [
        { name: "React.js", icon: Globe, color: "text-cyan-400", bgColor: "bg-cyan-400/10" },
        { name: "Next.js", icon: Globe, color: "text-white", bgColor: "bg-gray-800/50" },
        { name: "React Native", icon: Smartphone, color: "text-blue-500", bgColor: "bg-blue-500/10" },
        { name: "Tailwind CSS", icon: Palette, color: "text-teal-400", bgColor: "bg-teal-400/10" },
        { name: "HTML/CSS", icon: Globe, color: "text-orange-500", bgColor: "bg-orange-500/10" }
      ]
    },
    backend: {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", icon: Server, color: "text-green-500", bgColor: "bg-green-500/10" },
        { name: "Express.js", icon: Server, color: "text-gray-300", bgColor: "bg-gray-300/10" },
        { name: "JWT", icon: Shield, color: "text-purple-400", bgColor: "bg-purple-400/10" },
        { name: "WebSocket", icon: Zap, color: "text-yellow-500", bgColor: "bg-yellow-500/10" },
        { name: "REST API", icon: Globe, color: "text-blue-400", bgColor: "bg-blue-400/10" }
      ]
    },
    database: {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", icon: Database, color: "text-green-400", bgColor: "bg-green-400/10" },
        { name: "PostgreSQL", icon: Database, color: "text-blue-600", bgColor: "bg-blue-600/10" },
        { name: "Prisma ORM", icon: Database, color: "text-indigo-400", bgColor: "bg-indigo-400/10" },
        { name: "Docker", icon: Server, color: "text-blue-500", bgColor: "bg-blue-500/10" }
      ]
    }
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
        ? 'bg-black text-gray-100' 
        : 'bg-white text-gray-900'
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

            <main className="relative">
              <HeroSection darkMode={darkMode} />

              {/* About Section - Responsive padding and layout */}
              <AnimatedSection delay={0.2}>
                <section id="about" className="py-12 sm:py-16 lg:py-20 relative">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                      {/* Section header */}
                      <motion.div 
                        className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className={`p-2 sm:p-3 ${
                          darkMode 
                            ? 'bg-cyan-400/10 border border-cyan-400/30' 
                            : 'bg-blue-50 border border-blue-200'
                        }`}
                        style={{
                          clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                        }}>
                          <User className={`w-5 h-5 sm:w-6 sm:h-6 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                        </div>
                        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          ABOUT_ME.JSON
                        </h2>
                      </motion.div>
                      
                      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
                        {/* Main content */}
                        <motion.div 
                          className={`p-6 sm:p-8 transition-all duration-500 ${
                            darkMode 
                              ? 'bg-gray-900/50 border border-cyan-400/20' 
                              : 'bg-gray-50 border border-blue-200'
                          }`}
                          style={{
                            clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                          }}
                          whileHover={{ y: -5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <motion.p 
                            className={`text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 ${
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

                          {/* Stats - Responsive grid */}
                          <div className="grid grid-cols-2 gap-4 sm:gap-6">
                            {[
                              { label: 'PROJECTS', value: '15+' },
                              { label: 'EXPERIENCE', value: '2+ YRS' },
                              { label: 'TECHNOLOGIES', value: '20+' },
                              { label: 'COMMITS', value: '500+' }
                            ].map((stat, index) => (
                              <motion.div
                                key={stat.label}
                                className={`text-center p-3 sm:p-4 ${
                                  darkMode 
                                    ? 'bg-black/50 border border-cyan-400/20' 
                                    : 'bg-white border border-blue-200'
                                }`}
                                style={{
                                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                                }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <div className={`text-xl sm:text-2xl font-bold ${
                                  darkMode ? 'text-cyan-400' : 'text-blue-600'
                                }`}>
                                  {stat.value}
                                </div>
                                <div className={`text-xs font-mono tracking-wider ${
                                  darkMode ? 'text-gray-400' : 'text-gray-500'
                                }`}>
                                  {stat.label}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        {/* Education - Responsive spacing */}
                        <motion.div
                          className="space-y-4 sm:space-y-6"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <h3 className={`text-xl sm:text-2xl font-bold tracking-wide ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            EDUCATION.LOG
                          </h3>
                          
                          <div className="space-y-3 sm:space-y-4">
                            {[
                              {
                                title: "B.Tech (CSE-Cyber Security)",
                                institution: "Oriental College Of Technology",
                                period: "2021-2025",
                                grade: "CGPA: 7.45"
                              },
                              {
                                title: "12th Grade",
                                institution: "Shiksha Bharti Bal Niketan",
                                period: "2020-2021",
                                grade: "Percentage: 69%"
                              },
                              {
                                title: "10th Grade (ICSE)",
                                institution: "St. Charles School",
                                period: "2018-2019",
                                grade: "Percentage: 72%"
                              }
                            ].map((edu, index) => (
                              <motion.div
                                key={index}
                                className={`p-4 sm:p-6 transition-all duration-300 ${
                                  darkMode 
                                    ? 'bg-gray-900/30 border border-cyan-400/20 hover:border-cyan-400/40' 
                                    : 'bg-white border border-blue-200 hover:border-blue-400'
                                }`}
                                style={{
                                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                                }}
                                whileHover={{ x: 5, scale: 1.02 }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                              >
                                <h4 className={`font-bold text-base sm:text-lg tracking-wide ${
                                  darkMode ? 'text-white' : 'text-gray-900'
                                }`}>
                                  {edu.title}
                                </h4>
                                <p className={`text-sm ${
                                  darkMode ? 'text-gray-400' : 'text-gray-500'
                                }`}>
                                  {edu.institution} • {edu.period}
                                </p>
                                <p className={`font-mono text-sm ${
                                  darkMode ? 'text-cyan-400' : 'text-blue-600'
                                }`}>
                                  {edu.grade}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </section>
              </AnimatedSection>

              {/* Skills Section - Enhanced responsiveness */}
              <AnimatedSection delay={0.3}>
                <section id="skills" className="py-12 sm:py-16 lg:py-20 relative">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                      <motion.div 
                        className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className={`p-2 sm:p-3 ${
                          darkMode 
                            ? 'bg-cyan-400/10 border border-cyan-400/30' 
                            : 'bg-blue-50 border border-blue-200'
                        }`}
                        style={{
                          clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                        }}>
                          <Code2 className={`w-5 h-5 sm:w-6 sm:h-6 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                        </div>
                        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          SKILLS.ARRAY
                        </h2>
                      </motion.div>
                      
                      <div className="space-y-12 sm:space-y-16">
                        {Object.entries(skillCategories).map(([categoryKey, category], categoryIndex) => (
                          <motion.div
                            key={categoryKey}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: categoryIndex * 0.2 }}
                          >
                            <div className="flex items-center gap-3 mb-6 sm:mb-8">
                              <h3 className={`text-xl sm:text-2xl font-bold tracking-wider uppercase ${
                                darkMode ? 'text-white' : 'text-gray-900'
                              }`}>
                                {category.title}
                              </h3>
                              <motion.div
                                className={`h-px flex-1 ${
                                  darkMode 
                                    ? 'bg-gradient-to-r from-cyan-400 to-transparent' 
                                    : 'bg-gradient-to-r from-blue-500 to-transparent'
                                }`}
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                              />
                            </div>
                            
                            {/* Responsive grid - 2 cols on mobile, 3 on tablet, 4-5 on desktop */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                              {category.skills.map((skill, index) => (
                                <SkillCard
                                  key={skill.name}
                                  name={skill.name}
                                  icon={skill.icon}
                                  color={skill.color}
                                  bgColor={skill.bgColor}
                                  darkMode={darkMode}
                                  index={index}
                                />
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </AnimatedSection>

              {/* Projects Section - Enhanced responsiveness */}
              <AnimatedSection delay={0.4}>
                <section id="projects" className="py-12 sm:py-16 lg:py-20 relative">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                      <motion.div 
                        className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className={`p-2 sm:p-3 ${
                          darkMode 
                            ? 'bg-cyan-400/10 border border-cyan-400/30' 
                            : 'bg-blue-50 border border-blue-200'
                        }`}
                        style={{
                          clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                        }}>
                          <BookOpen className={`w-5 h-5 sm:w-6 sm:h-6 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                        </div>
                        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          PROJECTS.MAP()
                        </h2>
                      </motion.div>
                      
                      <div className="space-y-6 sm:space-y-8">
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
                </section>
              </AnimatedSection>

              {/* Experience Section - Responsive improvements */}
              <AnimatedSection delay={0.5}>
                <section id='experience' className="py-12 sm:py-16 lg:py-20 relative">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                      <motion.div 
                        className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className={`p-2 sm:p-3 ${
                          darkMode 
                            ? 'bg-cyan-400/10 border border-cyan-400/30' 
                            : 'bg-blue-50 border border-blue-200'
                        }`}
                        style={{
                          clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                        }}>
                          <Briefcase className={`w-5 h-5 sm:w-6 sm:h-6 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                        </div>
                        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          EXPERIENCE.PUSH()
                        </h2>
                      </motion.div>
                      
                      <motion.div 
                        className={`p-6 sm:p-8 transition-all duration-500 ${
                          darkMode 
                            ? 'bg-gray-900/30 border border-cyan-400/20' 
                            : 'bg-gray-50 border border-blue-200'
                        }`}
                        style={{
                          clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                        }}
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className={`p-2 ${
                              darkMode 
                                ? 'bg-cyan-400/10 border border-cyan-400/30' 
                                : 'bg-blue-50 border border-blue-200'
                            }`}
                            style={{
                              clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                            }}>
                              <Terminal className={`w-4 h-4 sm:w-5 sm:h-5 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                            </div>
                            <div>
                              <h3 className={`text-xl sm:text-2xl font-bold tracking-wide ${
                                darkMode ? 'text-white' : 'text-gray-900'
                              }`}>
                                REACT_DEVELOPER_INTERN
                              </h3>
                              <p className={`text-base sm:text-lg font-mono ${
                                darkMode ? 'text-cyan-400' : 'text-blue-600'
                              }`}>
                                Abstinent Research & Technologies • Sep 2024 - Nov 2024
                              </p>
                            </div>
                          </div>
                          
                          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                            {[
                              "Developed reusable React and React Native components",
                              "Implemented React Flow for workflow visualization in the Vibe project",
                              "Created a dynamic settings page and optimized API integration",
                              "Improved application performance through code optimization"
                            ].map((item, index) => (
                              <motion.div
                                key={index}
                                className={`flex items-start gap-3 p-3 sm:p-4 ${
                                  darkMode 
                                    ? 'bg-black/30 border border-cyan-400/20' 
                                    : 'bg-white border border-blue-200'
                                }`}
                                style={{
                                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                                }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                whileHover={{ x: 5 }}
                              >
                                <Zap className={`w-4 h-4 mt-1 flex-shrink-0 ${
                                  darkMode ? 'text-cyan-400' : 'text-blue-600'
                                }`} />
                                <span className={`text-sm ${
                                  darkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                  {item}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </section>
              </AnimatedSection>

              {/* Contact Section - Enhanced responsiveness */}
              <AnimatedSection delay={0.6}>
                <section id='contact' className="py-12 sm:py-16 lg:py-20 relative">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                      <motion.div 
                        className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className={`p-2 sm:p-3 ${
                          darkMode 
                            ? 'bg-cyan-400/10 border border-cyan-400/30' 
                            : 'bg-blue-50 border border-blue-200'
                        }`}
                        style={{
                          clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                        }}>
                          <Mail className={`w-5 h-5 sm:w-6 sm:h-6 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                        </div>
                        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          CONTACT.INIT()
                        </h2>
                      </motion.div>
                      
                      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
                        {/* Contact Form */}
                        <motion.div 
                          className={`p-6 sm:p-8 transition-all duration-500 ${
                            darkMode 
                              ? 'bg-gray-900/30 border border-cyan-400/20' 
                              : 'bg-gray-50 border border-blue-200'
                          }`}
                          style={{
                            clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                          }}
                          whileHover={{ y: -5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <form className="space-y-4 sm:space-y-6">
                            {[
                              { id: 'name', label: 'NAME', type: 'text', value: formData.name },
                              { id: 'email', label: 'EMAIL', type: 'email', value: formData.email }
                            ].map((field, index) => (
                              <motion.div
                                key={field.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.1 }}
                              >
                                <label htmlFor={field.id} className={`block text-sm font-mono tracking-wider mb-2 sm:mb-3 ${
                                  darkMode ? 'text-cyan-400' : 'text-blue-600'
                                }`}>
                                  {field.label}:
                                </label>
                                <input
                                  type={field.type}
                                  id={field.id}
                                  className={`w-full p-3 sm:p-4 font-mono transition-all duration-300 ${
                                    darkMode
                                      ? 'bg-black/50 border border-cyan-400/30 focus:border-cyan-400 text-white placeholder-gray-500'
                                      : 'bg-white border border-blue-200 focus:border-blue-500 text-gray-900 placeholder-gray-400'
                                  } focus:ring-0 outline-none`}
                                  style={{
                                    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                                  }}
                                  value={field.value}
                                  onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                                  placeholder={`ENTER_${field.label}`}
                                />
                              </motion.div>
                            ))}
                            
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              <label htmlFor="message" className={`block text-sm font-mono tracking-wider mb-2 sm:mb-3 ${
                                darkMode ? 'text-cyan-400' : 'text-blue-600'
                              }`}>
                                MESSAGE:
                              </label>
                              <textarea
                                id="message"
                                rows={5}
                                className={`w-full p-3 sm:p-4 font-mono transition-all duration-300 resize-none ${
                                  darkMode
                                    ? 'bg-black/50 border border-cyan-400/30 focus:border-cyan-400 text-white placeholder-gray-500'
                                    : 'bg-white border border-blue-200 focus:border-blue-500 text-gray-900 placeholder-gray-400'
                                } focus:ring-0 outline-none`}
                                style={{
                                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                                }}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="ENTER_YOUR_MESSAGE"
                              />
                            </motion.div>
                            
                            <motion.button
                              type="submit"
                              className={`w-full py-3 sm:py-4 font-bold tracking-wider transition-all duration-300 ${
                                darkMode
                                  ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                                  : 'bg-blue-600 text-white hover:bg-blue-700'
                              }`}
                              style={{
                                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                              }}
                              whileHover={{ scale: 1.02, y: -2 }}
                              whileTap={{ scale: 0.98 }}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                            >
                              SEND_MESSAGE.EXECUTE()
                            </motion.button>
                          </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div 
                          className="space-y-6 sm:space-y-8"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div>
                            <h3 className={`text-xl sm:text-2xl font-bold tracking-wide mb-4 sm:mb-6 ${
                              darkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                              GET_IN_TOUCH.ASYNC()
                            </h3>
                            <p className={`text-base sm:text-lg leading-relaxed ${
                              darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              Ready to collaborate on your next project? Let's build something amazing together.
                            </p>
                          </div>

                          <div className="space-y-3 sm:space-y-4">
                            {[
                              { icon: Mail, label: "anmolmittal0987@gmail.com", href: "mailto:anmolmittal0987@gmail.com" },
                              { icon: Mail, label: "+91 7024511800", href: "tel:+917024511800" }
                            ].map((contact, index) => (
                              <motion.a
                                key={index}
                                href={contact.href}
                                className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 transition-all duration-300 ${
                                  darkMode
                                    ? 'bg-gray-900/30 border border-cyan-400/20 hover:border-cyan-400/50 text-gray-300 hover:text-cyan-400'
                                    : 'bg-white border border-blue-200 hover:border-blue-400 text-gray-600 hover:text-blue-600'
                                }`}
                                style={{
                                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                                }}
                                whileHover={{ x: 10, scale: 1.02 }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + index * 0.1 }}
                              >
                                <div className={`p-2 ${
                                  darkMode 
                                    ? 'bg-cyan-400/10 border border-cyan-400/30' 
                                    : 'bg-blue-50 border border-blue-200'
                                }`}
                                style={{
                                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                                }}>
                                  <contact.icon className={`w-4 h-4 ${
                                    darkMode ? 'text-cyan-400' : 'text-blue-600'
                                  }`} />
                                </div>
                                <span className="font-mono text-sm tracking-wide break-all">{contact.label}</span>
                              </motion.a>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </section>
              </AnimatedSection>
            </main>

            {/* Footer - Responsive improvements */}
            <motion.footer
              className={`py-6 sm:py-8 border-t transition-all duration-500 ${
                darkMode 
                  ? 'border-cyan-400/20 bg-black/50' 
                  : 'border-blue-200 bg-gray-50'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.p 
                  className={`flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg font-mono tracking-wide ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <span>© 2024 ANMOL.DEV • BUILT_WITH</span>
                  <div className="flex items-center gap-2">
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${darkMode ? 'text-cyan-400' : 'text-red-500'}`} />
                    </motion.span>
                    <span>USING REACT & TAILWIND</span>
                  </div>
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