"use client"
import React from 'react';
import { motion } from 'framer-motion';



const About = () => {
  return (
    <motion.div className='mb-28 max-w-[45rem] text-center leading-10 scroll-mt-28 text-lg font-medium'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0}}
    transition={{ delay: 0.175}}
    id="about"
    >
      <h1 className='text-3xl font-bold capitalize mb-3'>About me</h1>
      <p>
      I am a graduate of History and International Relations who transitioned from creating educational 
      and entertainment content on YouTube to pursuing my passion for programming. After graduation, 
      I realized that my true interests were in technology and development, so I enrolled in a coding bootcamp where I learnt full-stack web development,
       focusing on React and Next.js. This foundation ignited my enthusiasm for building fully responsive applications with animations, 
       leading me to further my skills in iOS and Android development using React Native.
      </p>

      <p>
      My favorite aspect of programming is the problem-solving process; 
      I thrive on the challenge of finding effective solutions. There’s a unique satisfaction that comes with resolving complex issues 
      and seeing my ideas come to life through code. My core tech stack includes HTML, CSS, React, JavaScript, React Native, Node.js, and GitHub, 
      which I leverage to create seamless, user-friendly applications. I am excited to continue growing as a developer and to contribute to innovative projects that make a difference.
      </p>
    </motion.div>
  );
}

export default About;
