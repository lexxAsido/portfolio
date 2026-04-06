"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ServiceCard from "./ServiceCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "React Native",
  "Expo",
  "Next.js",
  "Tailwind CSS",
  "Redux",
  "RESTful APIs",
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative mb-28 px-5 md:px-10 lg:px-20 xl:px-32 w-full max-w-5xl mx-auto scroll-mt-28"
      id="about"
    >
      {/* ── Background Glow ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-yellow-500/[0.03] blur-[120px] pointer-events-none" />

      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* ── Section Label ── */}
        <motion.div className="text-center mb-4" variants={itemVariants}>
          <span className="inline-block text-xs text-yellow-500 tracking-[0.3em] uppercase font-medium">
            About Me
          </span>
        </motion.div>

        {/* ── Heading ── */}
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-10 leading-tight"
          variants={itemVariants}
        >
          Turning ideas into{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600">
            digital reality
          </span>
        </motion.h1>

        {/* ── Bio Content ── */}
        <div className="max-w-3xl mx-auto space-y-6 mb-14">
          <motion.p
            className="text-white/55 text-base md:text-lg leading-relaxed text-center"
            variants={itemVariants}
          >
            I'm a passionate{" "}
            <span className="text-white/80 font-medium">Software Developer</span>{" "}
            with hands-on experience in building cross-platform web and mobile
            applications. I specialize in creating scalable, secure, and
            user-friendly solutions that solve real-world problems.
          </motion.p>

          <motion.p
            className="text-white/55 text-base md:text-lg leading-relaxed text-center"
            variants={itemVariants}
          >
            I have successfully developed and deployed apps to the{" "}
            <span className="text-white/80 font-medium">iOS App Store</span> and{" "}
            <span className="text-white/80 font-medium">Google Play Store</span>,
            including{" "}
            <span className="text-yellow-500/90 font-semibold">TipNGoal</span> — a
            real-time sports application, and{" "}
            <span className="text-yellow-500/90 font-semibold">Nolt Finance</span>{" "}
            — a full-featured fintech app with biometric verification, wallet
            services, loan management, investments, and bill payments.
          </motion.p>

          <motion.p
            className="text-white/55 text-base md:text-lg leading-relaxed text-center"
            variants={itemVariants}
          >
            I thrive on collaborating with clients, designers, and backend teams,
            ensuring seamless integration of APIs and delivering products from
            idea to launch. I'm a fast learner with strong problem-solving
            skills, always eager to take on new challenges.
          </motion.p>
        </div>

        {/* ── Skills Tags ── */}
        <motion.div
          className="flex flex-wrap justify-center gap-2.5 mb-16 max-w-2xl mx-auto"
          variants={containerVariants}
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              className="px-4 py-1.5 rounded-full text-sm font-medium border border-white/[0.06] bg-white/[0.03] text-white/50 hover:border-yellow-500/20 hover:text-yellow-500/80 hover:bg-yellow-500/[0.05] transition-all duration-300 cursor-default"
              variants={itemVariants}
              custom={i}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* ── Service Cards ── */}
        <motion.div variants={itemVariants}>
          <ServiceCard />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
