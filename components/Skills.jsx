"use client"
import { skillsData } from '@/lib/data';
import { motion} from 'framer-motion';
import React from 'react';

const Skills = () => {
  return (
    <motion.section className='my-14 text-center scroll-mt-28  w-[50rem] max-md:w-auto transition-all' id='skills'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0}}
        transition={{ delay: 0.175}}
        >
      <h1 className='font-bold text-3xl capitalize mb-5'>my skills & tools</h1>
      <ul className='flex flex-wrap justify-center gap-5 text-lg max-md:text-sm'>
        {skillsData.map((skill, index)=>(
            <li 
            className='bg-yellow-500 border border-cyan-500 p-2 hover:scale-110 transition-all hover:bg-black font-bold hover:text-cyan-500 rounded-md cursor-pointer'
            key={index}>{skill}</li>
        ))}
      </ul>
    </motion.section>
  );
}

export default Skills;
