"use client";
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const SectionDivider = () => {
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll event
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  return (
    <motion.div
      className="bg-gradient-to-t from-yellow-500 to-yellow-100 my-10 h-[17rem] w-1 rounded-full max-md:block text-black"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        backgroundPosition: `0 ${scrollY * 0.5}px`, // Animate background gradient as user scrolls
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 25,
      }}
      style={{
        backgroundSize: '100% 250%', // Make the gradient large enough to create a scrollable effect
        backgroundPosition: `0 ${scrollY * 0.5}px`, // Control the movement of the gradient
      }}
    >
    </motion.div>
  );
};

export default SectionDivider;
