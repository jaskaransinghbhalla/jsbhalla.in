'use client';

import { motion, AnimatePresence } from 'framer-motion';

export default function SkillsModal({ skill, isOpen, onClose }) {
  if (!skill) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden"
            >
              {/* Decorative gradient elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="relative z-10 p-6 border-b border-gray-700/50 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    >
                      {skill.title}
                    </motion.h2>
                    
                    {skill.category && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block mt-2 px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      >
                        {skill.category}
                      </motion.span>
                    )}
                  </div>
                  
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15 }}
                    onClick={onClose}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200 group"
                  >
                    <svg
                      className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 space-y-6">
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                    Description
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-base">
                    {skill.description || 'No description available for this skill.'}
                  </p>
                </motion.div>

                {/* Tags/Categories */}
                {skill.tags && skill.tags.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                      Related Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.tags.map((tag, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.05 }}
                          className="px-3 py-1.5 text-sm text-gray-300 bg-gray-700/50 border border-gray-600/50 rounded-lg hover:border-blue-500/50 hover:bg-gray-700 transition-all duration-200 cursor-default"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Proficiency Level */}
                {skill.level && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                      Proficiency Level
                    </h4>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-300 min-w-[3rem] text-right">
                        {skill.level}%
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* Experience */}
                {skill.experience && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                      Experience
                    </h4>
                    <p className="text-gray-300 text-base">{skill.experience}</p>
                  </motion.div>
                )}

                {/* Projects/Examples */}
                {skill.projects && skill.projects.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                  >
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                      Related Projects
                    </h4>
                    <div className="space-y-2">
                      {skill.projects.map((project, index) => (
                        <div
                          key={index}
                          className="p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:border-blue-500/50 transition-all duration-200"
                        >
                          <p className="text-gray-300 text-sm font-medium">
                            {project}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="relative z-10 p-6 border-t border-gray-700/50 bg-gradient-to-r from-blue-500/5 to-purple-500/5"
              >
                <button
                  onClick={onClose}
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}