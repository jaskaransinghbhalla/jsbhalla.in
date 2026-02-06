'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SkillsModal from '../../components/home/skills-modal';

const SkillsCategory = ({ category, skills, onSkillClick }) => (
  <div className="mb-16">
    <div className="mb-8">
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white pb-4 border-b-2 border-gray-700 relative"
      >
        <span className="relative z-10 bg-stone-900 pr-4">{category}</span>
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: '96px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
        />
      </motion.h3>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {skills.map((skill, index) => (
        <motion.button
          key={typeof skill === 'string' ? skill : skill.id || index}
          onClick={() => onSkillClick(typeof skill === 'string' ? { title: skill } : skill)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-4 py-4 text-sm font-semibold text-gray-300 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-lg hover:shadow-2xl hover:border-blue-500/50 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 text-center cursor-pointer overflow-hidden"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
          
          {/* Content */}
          <span className="relative z-10">
            {typeof skill === 'string' ? skill : skill.title}
          </span>
          
          {/* Hover glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 -z-10" />
        </motion.button>
      ))}
    </div>
  </div>
);

export default function SkillsClient({ skillsData }) {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

  return (
    <>
      <div className="w-full flex justify-center mb-16 min-h-screen">
        <div className="w-full max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 mb-12"
          >
            <div className="mb-2">
              <h2 className="text-5xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Skills
              </h2>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '80px' }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              />
            </div>
            <p className="text-gray-400 text-lg mt-4">
              Technologies and tools I work with across different domains
            </p>
          </motion.div>

          <div>
            {Object.keys(skillsData).length > 0 ? (
              Object.entries(skillsData).map(([category, skills]) => (
                <SkillsCategory
                  key={category}
                  category={category}
                  skills={skills}
                  onSkillClick={handleSkillClick}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-gray-500 text-lg">No skills available.</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <SkillsModal
        skill={selectedSkill}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}