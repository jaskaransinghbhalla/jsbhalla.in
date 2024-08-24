"use client";
import React from "react";
import { motion } from "framer-motion";

const EnhancedQuoteComponent = () => {
  return (
    <div className="bg-stone-800 opacity-80 p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <svg
          className="w-10 h-10 text-blue-400 mb-4 mx-auto"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <motion.p
          className="text-xl md:text-xl lg:text-2xl text-white font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          In the realm of Computer Science and Business, I&apos;m a blend of
          Technology & Entrepreneurship,
          <span className="block mt-2">
            weaving innovation into opportunity at every step
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default EnhancedQuoteComponent;
