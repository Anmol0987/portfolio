import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  darkMode: boolean;
  index: number;
}

export default function SkillCard({ name, icon: Icon, color, bgColor, darkMode, index }: SkillCardProps) {
  return (
    <motion.div
      className={`group relative p-6 transition-all duration-300 cursor-pointer ${
        darkMode
          ? 'bg-gray-900/30 border border-cyan-400/20 hover:border-cyan-400/50'
          : 'bg-white border border-gray-200 hover:border-blue-400'
      }`}
      style={{
        clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
      }}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Icon container with color */}
      <motion.div
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${bgColor}`}
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className={`w-6 h-6 ${color}`} />
      </motion.div>

      {/* Skill name */}
      <motion.h3
        className={`font-bold text-lg tracking-wide ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 + index * 0.1 }}
      >
        {name}
      </motion.h3>

      {/* Hover effect overlay */}
      <motion.div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${bgColor}`}
        style={{
          clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
        }}
      />

      {/* Floating accent */}
      <motion.div
        className={`absolute -top-2 -right-2 w-4 h-4 ${color.includes('cyan') ? 'bg-cyan-400' : color.includes('blue') ? 'bg-blue-500' : color.includes('green') ? 'bg-green-500' : color.includes('yellow') ? 'bg-yellow-500' : color.includes('purple') ? 'bg-purple-500' : color.includes('red') ? 'bg-red-500' : 'bg-orange-500'}`}
        animate={{ 
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "linear",
          delay: index * 0.2
        }}
      />
    </motion.div>
  );
}