"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2, // Stagger animation for child elements
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Intro = () => {
  return (
    <motion.main
      className=" md:mb-5 w-auto lg:max-w-[50rem] text-white relative"
      id="home"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <div className="flex items-center justify-center mt-[7rem] max-md:mt-20">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={"/profilepic.jpg"}
              alt="Asido Alexandar"
              width={200}
              height={190}
              priority={true}
              className="rounded-full shadow-xl border-4 border-cyan-500"
            />
          </motion.div>

          <motion.span
            className="text-4xl absolute bottom-10 right-0 animate-bounce"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* Flex row with circle/line and text */}
      <section className="flex items-start mt-10 gap-8 px-4">
        {/* Self-closing divs container (circle and line) */}
        <div className="flex flex-col items-center">
          <div className="w-5 h-5 rounded-full bg-yellow-500" />
          <div className="w-1 sm:h-100 h-80 bg-gradient-to-t from-yellow-100 to-yellow-500 " />
        </div>

        <div className="flex flex-col">

        <motion.p
          className="md:mb-10 mt-4 md:text-2xl font-medium"
          variants={itemVariants}
          >
          Hello! I'm{" "}
          <span className="font-extrabold text-xl md:text-4xl text-yellow-500">
            Asido Alexandar
          </span>
          , a passionate mobile and web application developer specializing in 
          building seamless, user-focused solutions. I create innovative apps that solve real-world problems, 
          leveraging modern technologies to deliver engaging and impactful digital experiences.
        </motion.p>

        
        <motion.div
          className="flex mt-4 gap-8 flex-col"
          variants={containerVariants}
          >
          <motion.a
            className="group flex items-center md:py-4 py-2 border w-[12rem] justify-center border-yellow-500 hover:bg-cyan-500 hover:text-black rounded-xl"
            href="/CV.pdf"
            download
            variants={itemVariants}
            >
            View My Resume
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition text-xl animate-ping" />
          </motion.a>

          {/* Social media icons */}
          <motion.div
            className="flex flex-row gap-3 items-center py-2"
            variants={containerVariants}
            >
            <motion.a
              href="https://www.linkedin.com/in/alexandar-asido-b06742359"
              target="_blank"
              className="rounded-full gap-2"
              variants={itemVariants}
              >
              <BsLinkedin className="text-white text-3xl hover:scale-110 active:scale-110 transition-all" />
            </motion.a>

            <motion.a
              href="https://github.com/lexxAsido"
              target="_blank"
              className="text-3xl flex items-center rounded-full gap-2  text-white"
              variants={itemVariants}
              >
              <FaGithubSquare className="hover:scale-110 active:scale-110 transition-all"/>
            </motion.a>

            <motion.a
              href="mailto:alexandaras2015@gmail.com"
              className="font-bold"
              variants={itemVariants}
              >
              <MdOutlineEmail className="text-white text-4xl hover:scale-110 active:scale-110 transition-all" />
            </motion.a>
          </motion.div>
        </motion.div>
              </div>
      </section>
    </motion.main>
  );
};

export default Intro;
