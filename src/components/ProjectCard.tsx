import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Zap } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
}

interface ProjectCardProps {
  project: Project;
  darkMode: boolean;
  index: number;
}

export default function ProjectCard({ project, darkMode, index }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      whileHover={{ y: -8 }}
    >
      {/* Main card container with embedded design - Single row layout */}
      <div className={`relative overflow-hidden transition-all duration-500 ${
        darkMode 
          ? 'bg-black border border-cyan-400/20 hover:border-cyan-400/50' 
          : 'bg-white border border-blue-200 hover:border-blue-400'
      }`}
      style={{
        clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
      }}>
        
        <div className="grid lg:grid-cols-3 gap-0">
          {/* Image section */}
          <div className="relative h-64 lg:h-auto overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay gradient */}
            <div className={`absolute inset-0 ${
              darkMode 
                ? 'bg-gradient-to-r from-black via-black/50 to-transparent' 
                : 'bg-gradient-to-r from-white via-white/50 to-transparent'
            } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            
            {/* Action buttons overlay */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1 }}
            >
              <motion.a
                href={project.demo}
                className={`flex items-center gap-2 px-4 py-2 font-semibold text-sm tracking-wide transition-all duration-300 ${
                  darkMode
                    ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-3 h-3" />
                DEMO
              </motion.a>
              
              <motion.a
                href={project.github}
                className={`flex items-center gap-2 px-4 py-2 font-semibold text-sm tracking-wide border transition-all duration-300 ${
                  darkMode
                    ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                    : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-3 h-3" />
                CODE
              </motion.a>
            </motion.div>

            {/* Project number indicator */}
            <div className={`absolute top-4 left-4 w-8 h-8 flex items-center justify-center text-xs font-bold ${
              darkMode 
                ? 'bg-cyan-400/20 border border-cyan-400/50 text-cyan-400' 
                : 'bg-blue-100 border border-blue-300 text-blue-600'
            }`}
            style={{
              clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
            }}>
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>

          {/* Content section - spans 2 columns */}
          <div className="lg:col-span-2 p-8 space-y-6">
            {/* Title with accent line */}
            <div className="space-y-3">
              <motion.h3
                className={`text-2xl lg:text-3xl font-bold tracking-wide ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.title.toUpperCase()}
              </motion.h3>
              <motion.div
                className={`h-px ${
                  darkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-transparent' 
                    : 'bg-gradient-to-r from-blue-500 to-transparent'
                }`}
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </div>
            
            {/* Description */}
            <motion.p
              className={`text-base leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {project.description}
            </motion.p>
            
            {/* Tech stack */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className={`text-sm font-mono tracking-wider ${
                darkMode ? 'text-cyan-400' : 'text-blue-600'
              }`}>
                TECH_STACK:
              </div>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className={`text-sm px-3 py-2 font-mono tracking-wide transition-all duration-300 ${
                      darkMode
                        ? 'bg-gray-900 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
                        : 'bg-gray-50 border border-blue-200 text-blue-600 hover:bg-blue-50'
                    }`}
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                    }}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + techIndex * 0.1 }}
                  >
                    {tech.toUpperCase()}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating accent elements */}
      <motion.div
        className={`absolute -top-2 -right-2 w-4 h-4 ${
          darkMode ? 'bg-cyan-400' : 'bg-blue-500'
        }`}
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className={`absolute -bottom-2 -left-2 w-3 h-3 ${
          darkMode ? 'bg-blue-500' : 'bg-purple-500'
        }`}
        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
    </motion.div>
  );
}