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
      className="md:text-center md:mb-20 w-auto lg:max-w-[50rem] text-white"
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

      <motion.p
        className="md:mb-10 mt-4 px-4 md:text-2xl font-medium"
        variants={itemVariants}
      >
        Hello! I'm{" "}
        <span className="font-extrabold text-md md:text-4xl">
          Asido Alexandar
        </span>
        , a passionate and results-driven Front-End and Mobile App Developer
        with expertise in React, Next.js, JavaScript, TypeScript and React
        Native for both iOS and Android platforms. I specialize in building
        responsive, scalable, and user-friendly applications that deliver
        seamless experiences across devices. I'm passionate about collaborating
        on innovative projects and leveraging my problem-solving skills to
        deliver high-quality software solutions. Let's build something
        exceptional together!
      </motion.p>

      <motion.div
        className="justify-center gap-8 py-3 font-medium md:items-center text-white flex max-md:flex-col px-4"
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

        <motion.div
          className="flex flex-row gap-3 items-center md:mt-4"
          variants={containerVariants}
        >
          <motion.a
            href="https://www.linkedin.com/in/alexandar-asido-b06658134/"
            target="-blank"
            className="rounded-full gap-2 hover:scale-105 active:scale-105"
            variants={itemVariants}
          >
            <BsLinkedin className="text-white text-3xl" />
          </motion.a>

          <motion.a
            href="https://github.com/lexxAsido"
            target="_blank"
            className="text-3xl flex items-center rounded-full gap-2 hover:scale-105 active:scale-105 text-white"
            variants={itemVariants}
          >
            <FaGithubSquare />
          </motion.a>

          <motion.a
            href="mailto:alexandaras2015@gmail.com"
            className="font-bold"
            variants={itemVariants}
          >
            <MdOutlineEmail className="text-white text-4xl" />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.main>
  );
};

export default Intro;
