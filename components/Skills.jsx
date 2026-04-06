"use client";
import { skillsData } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative my-20 md:my-28 text-center scroll-mt-28 w-full max-w-4xl mx-auto px-5"
      id="skills"
    >
      {/* ── Background Glow ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500/[0.03] blur-[120px] pointer-events-none" />

      {/* ── Section Label ── */}
      <motion.span
        className="inline-block text-xs text-yellow-500 tracking-[0.3em] uppercase font-medium mb-4"
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Tech Stack
      </motion.span>

      {/* ── Heading ── */}
      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600">
          Skills
        </span>
      </motion.h1>

      {/* ── Skills Grid ── */}
      <motion.ul
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-5 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className="group relative flex flex-col items-center gap-3 p-4 md:p-5 rounded-2xl border border-white/[0.05] bg-white/[0.02] backdrop-blur-sm cursor-default transition-all duration-400 hover:border-yellow-500/15 hover:bg-white/[0.05] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(234,179,8,0.06)]"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-yellow-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

            {/* Icon */}
            <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
              <Image
                src={skill.image}
                alt={skill.name}
                width={70}
                height={70}
                className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-sm"
              />
            </div>

            {/* Name */}
            <span className="relative z-10 text-white/50 text-xs md:text-sm font-medium tracking-wide text-center group-hover:text-white/80 transition-colors duration-300">
              {skill.name}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Skills;
