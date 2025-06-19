import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

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
      className={`rounded-2xl overflow-hidden group transition-all duration-500 ${
        darkMode 
          ? 'bg-gray-900/50 border border-gray-800 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/30' 
          : 'bg-white border border-gray-200 shadow-xl shadow-blue-500/10 hover:shadow-blue-500/30'
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.a
            href={project.demo}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              darkMode
                ? 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-lg shadow-cyan-500/30'
                : 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/30'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-4 h-4 inline mr-2" />
            Live Demo
          </motion.a>
          <motion.a
            href={project.github}
            className="px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-all duration-300 font-semibold shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4 inline mr-2" />
            GitHub
          </motion.a>
        </motion.div>
      </div>

      <div className="p-6">
        <motion.h3
          className={`text-xl font-bold mb-3 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {project.title}
        </motion.h3>
        
        <motion.p
          className={`mb-4 leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {project.description}
        </motion.p>
        
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {project.tech.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              className={`text-sm px-3 py-1 rounded-full transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800 text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/10'
                  : 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100'
              }`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + techIndex * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}