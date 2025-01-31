import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Code2, BookOpen, User, Briefcase, Send, GraduationCap as Graduation, Heart, Moon, Sun, ExternalLink, Terminal } from 'lucide-react';
import DecryptedText from './DecryptedText';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [text, setText] = useState('');
  const [activeTab, setActiveTab] = useState('about');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const fullText = 'Full Stack MERN Developer | React Specialist';


  const skills = {
    languages: ["Java", "C", "JavaScript", "TypeScript"],
    frontend: ["HTML", "CSS", "React.js", "Tailwind CSS", "React Native", "Next.js", "recoil"],
    backend: ["Node.js", "Express.js", "JWT", "Web Socket", "Zod validation", "API", "OAuth"],
    database: ["MongoDB", "PrismaORM", "PostgreSQL"],
    tools: ["Git", "GitHub", "Docker"]
  };

  const projects = [
    {
      title: "Blog Website",
      description: "A modern blog platform built with React and TypeScript, featuring a monorepo structure and robust validation.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Hono", "Prisma", "Zod"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "Recipe App",
      description: "A dynamic recipe management application with real-time updates and state management.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "Payment App (Paytm Clone)",
      description: "A secure payment application with Mongoose transactions and user authentication.",
      tech: ["React", "Node.js", "MongoDB", "Mongoose"],
      image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=800&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "Vibe",
      description: "An internship project featuring React Flow-based workflow visualization and settings management.",
      tech: ["React", "React Flow", "TypeScript"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      <header className={`p-6 border-b ${darkMode ? 'border-gray-700 bg-gray-900/95' : 'border-gray-200 bg-gray-50/95'} sticky top-0 backdrop-blur-sm z-50`}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl">
            <Terminal className="w-6 h-6" />
            <DecryptedText
              text="Anmol Mittal"
              animateOn="view"
              revealDirection="center"
              speed={70}
            />
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6">
              {['about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setActiveTab(item)}
                  className={`hover:text-blue-500 transition-colors ${activeTab === item ? 'text-blue-500 border-b-2 border-blue-500' : ''
                    }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </nav>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 text-yellow-500' : 'bg-gray-200 text-gray-900'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <section id="hero" className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img
                // src='https://allanim.com/images/allan.png'
                src='../public/photo.png'
                alt="Anmol Mittal"
                className="w-64 h-80 rounded-full border-4 border-blue-500 p-1 mx-auto mb-6 hover:rotate-3 transition-transform duration-300"
              />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Anmol Mittal</h1>
              <p className={`text-lg mb-8 h-20 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <DecryptedText
                  text={fullText}
                  animateOn="view"
                  revealDirection="center"
                  speed={100}
                />
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="#projects"
                  className={`px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2`}
                >
                  View My Work
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="../public/resume.pdf"  // Path to the resume file
                  download="Anmol_Mittal_Resume.pdf" // File name for download
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-500  transition-colors"
                >
                  Download Resume
                </a>
              </div>
              <div className="flex gap-4 justify-center mt-6">
                <a
                  href="https://github.com/Anmol0987"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/anmol-mittal-b53562229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <div id="about" className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <User className="w-6 h-6" />
              <h2 className="text-2xl font-bold">About Me</h2>
            </div>
            <div className={`rounded-lg p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm a passionate full-stack developer specializing in the MERN stack and React ecosystem.
                Currently pursuing my B.Tech in CSE with a focus on Cyber Security, I combine my academic
                knowledge with practical experience in building modern web applications.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">B.Tech (CSE-Cyber Security)</h4>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Oriental College Of Technology (2021-2025)
                      </p>
                      <p className="text-blue-500">CGPA: 7.45</p>
                    </div>
                    <div>
                      <h4 className="font-medium">12th Grade</h4>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Shiksha Bharti Bal Niketan (2020-2021)
                      </p>
                      <p className="text-blue-500">Percentage: 69%</p>
                    </div>
                    <div>
                      <h4 className="font-medium">10th Grade (ICSE)</h4>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        St. Charles School (2018-2019)
                      </p>
                      <p className="text-blue-500">Percentage: 72%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="skills" className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Skills</h2>
            </div>
            <div className="grid gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className={`rounded-lg p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                  <h3 className="text-xl font-semibold mb-4 capitalize">{category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-blue-500'
                          }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="projects" className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Featured Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden group ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
                >
                  <div className="relative h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <a
                        href={project.demo}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`text-sm px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-800'
                            }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id='experience' className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Experience</h2>
            </div>
            <div className={`rounded-lg p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">React Developer Intern</h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-2`}>
                    Abstinent Research & Technologies • Sep 2024 - Nov 2024
                  </p>
                  <ul className={`list-disc list-inside ${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                    <li>Developed reusable React and React Native components</li>
                    <li>Implemented React Flow for workflow visualization in the Vibe project</li>
                    <li>Created a dynamic settings page and optimized API integration</li>
                    <li>Improved application performance through code optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id='contact' >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Mail className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Get in Touch</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`rounded-lg p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full rounded-lg p-3 ${darkMode
                      ? 'bg-gray-700 border-gray-600 focus:border-blue-500'
                      : 'bg-gray-50 border-gray-300 focus:border-blue-500'
                      } border focus:ring-2 focus:ring-blue-500/20 outline-none`}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full rounded-lg p-3 ${darkMode
                      ? 'bg-gray-700 border-gray-600 focus:border-blue-500'
                      : 'bg-gray-50 border-gray-300 focus:border-blue-500'
                      } border focus:ring-2 focus:ring-blue-500/20 outline-none`}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className={`w-full rounded-lg p-3 ${darkMode
                      ? 'bg-gray-700 border-gray-600 focus:border-blue-500'
                      : 'bg-gray-50 border-gray-300 focus:border-blue-500'
                      } border focus:ring-2 focus:ring-blue-500/20 outline-none`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </div>
              <div className={`rounded-lg p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <a href="mailto:anmolmittal0987@gmail.com" className="hover:text-blue-500 transition-colors">
                      anmolmittal0987@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-500" />
                    <a href="tel:+917024511800" className="hover:text-blue-500 transition-colors">
                      +91 7024511800
                    </a>
                  </div>
                  <div className="pt-4 space-y-4">
                    <a href="https://github.com/Anmol0987" className="flex items-center gap-3 hover:text-blue-500 transition-colors">
                      <Github className="w-5 h-5" />
                      GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/anmol-mittal-b53562229" className="flex items-center gap-3 hover:text-blue-500 transition-colors">
                      <Linkedin className="w-5 h-5" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`mt-20 py-6 ${darkMode ? 'border-t border-gray-800' : 'border-t'}`}>
        <div className="container mx-auto px-6 text-center">
          <p className="flex items-center justify-center gap-2">
            © 2024 Anmol Mittal. Built with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;