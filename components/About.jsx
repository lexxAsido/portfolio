"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ServiceCard from "./ServiceCard";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="mb-28 px-4 md:px-10 lg:px-20 xl:px-32 w-full max-w-5xl mx-auto text-center leading-8 scroll-mt-28 font-medium text-white"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      id="about"
    >
      <h1 className="text-2xl md:text-4xl font-bold capitalize mb-5">About Me</h1>
      <p className="text-sm md:text-lg lg:text-xl max-w-4xl mx-auto mb-8">
        I'm a skilled software developer with experience in TypeScript, JavaScript, Expo, Next.js, Tailwind CSS, and Redux, with expertise in frameworks like React and React Native. I'm a quick learner and collaborate closely with clients, designers, and backend teams to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </p>

      <div className="">
        <ServiceCard />
      </div>
    </motion.div>
  );
};

export default About;
