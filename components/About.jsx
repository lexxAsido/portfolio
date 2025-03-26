"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="mb-28 max-w-[35rem] text-center leading-10 scroll-mt-28 md:text-lg font-medium text-white text-sm"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Slide-in when visible, fade-out when out of view
      transition={{ duration: 0.7, ease: "easeOut" }}
      id="about"
    >
      <h1 className="md:text-3xl text-xl font-bold capitalize mb-3">About me</h1>
      <p>
        I am a graduate of History and International Relations who transitioned from creating educational 
        and entertainment content on YouTube to pursuing my passion for programming. After graduation, 
        I realized that my true interests were in technology and development, so I enrolled in a coding bootcamp where I learnt Web development
        in React and Next.js. This foundation ignited my enthusiasm for building fully responsive applications with animations,
        leading me to further my skills in iOS and Android development using React Native.
      </p>

      <p>
        My favorite aspect of programming is the problem-solving process; 
        I thrive on the challenge of finding effective solutions. There’s a unique satisfaction that comes with resolving complex issues 
        and seeing my ideas come to life through code. My core tech stack includes HTML, Tailwind CSS, React, Next Js, JavaScript, React Native, and TypeScript, 
        which I leverage to create seamless, user-friendly applications. I am excited to continue growing as a developer and to contribute to innovative projects that make a difference.
      </p>
    </motion.div>
  );
};

export default About;
