"use client"
import { motion } from 'framer-motion';
import React from 'react';

const SectionDivider = () => {
  return (
    <motion.div className='bg-gray-950 my-10 h-[10rem] border w-1 rounded-full max-md:block text-black'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0}}
    transition={{ delay: 0.125}}
    >
      
    </motion.div>
  );
}

export default SectionDivider;
 