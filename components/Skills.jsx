"use client"
import { skillsData } from '@/lib/data';
import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

const Skills = () => {
  return (
    <motion.section
      className="my-14 text-center scroll-mt-28 w-[50rem] max-md:w-auto transition-all"
      id="skills"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <h1 className="font-bold text-3xl capitalize mb-5">my skills</h1>
      <ul className="flex flex-wrap justify-center gap-5 text-lg max-md:text-sm hover:bg-cyan-300 text-black p-5 bg-white items-center hover:scale-110 transition-all rounded-md ">
        {skillsData.map((skill, index) => (
          <li
            className="flex flex-col items-center p-2 hover:scale-110 transition-all font-bold rounded-md cursor-pointer"
            key={index}
          >
            {/* Display the skill image */}
            <Image
              src={skill.image}
              alt={skill.name}
              width={70}
              height={70}
              className="mb-2"
            />
            {/* Display the skill name */}
            {skill.name}
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Skills;
