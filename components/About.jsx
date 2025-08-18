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
    I’m a passionate <strong>Software Developer</strong> with hands-on experience in building cross-platform web and mobile applications. Skilled in <strong>TypeScript, JavaScript, React, React Native, Expo, Next.js, Tailwind CSS, and Redux</strong>, I specialize in creating scalable, secure, and user-friendly solutions.
    <br /><br />
    I have successfully developed and deployed apps to the <strong>iOS App Store</strong> and <strong>Google Play Store</strong>, including <strong>Nolt Finance</strong>, a full-featured fintech app with biometric verification, wallet services, loan management, investments, and bill payments.
    <br /><br />
    I thrive on collaborating with clients, designers, and backend teams, ensuring seamless integration of <strong>RESTful APIs</strong> and delivering products that solve real-world problems. I’m a fast learner with strong problem-solving skills, always eager to take on new challenges and drive projects from idea to launch.
  </p>

  <div className="">
    <ServiceCard />
  </div>
</motion.div>

  );
};

export default About;
