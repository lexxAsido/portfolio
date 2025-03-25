'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { experiencesData } from '@/lib/data';


const ExperienceCard = ({ title, location, description, icon, date }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center border border-cyan-200 dark:border-gray-700">
      <div className="text-4xl text-cyan-500 dark:text-gray-300 mb-4">
        {icon} 
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{location}</p>
      <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">{description}</p>
      <span className="mt-4 text-sm text-gray-600 dark:text-gray-400">{date}</span>
    </div>
  );
};


const Experience = () => {
  return (
    <motion.div 
      className='max-w-5xl mx-auto px-6 py-12' 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="experience"
    >
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">Experience</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {experiencesData.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            location={experience.location}
            description={experience.description}
            icon={experience.icon}
            date={experience.date}  
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
