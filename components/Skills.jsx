"use client";
import { skillsData } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <motion.section
      ref={ref}
      className="my-14 text-center scroll-mt-28 w-[50rem] max-md:w-auto transition-all"
      id="skills"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on viewport
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h1 className="font-bold text-3xl capitalize mb-5 text-white">my skills</h1>

      <motion.ul 
        className="flex flex-wrap justify-center gap-5 text-lg max-md:text-sm text-white p-5 items-center transition-all rounded-md"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="flex flex-col items-center p-2 hover:scale-110 transition-all font-bold rounded-md cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={skill.image}
              alt={skill.name}
              width={70}
              height={70}
              className="mb-2 w-16 h-16 max-md:w-12 max-md:h-12"
            />
            {skill.name}
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
};

export default Skills;
