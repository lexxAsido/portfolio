"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const floatVariants = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const Intro = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.main
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      id="home"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {/* ── Ambient Background Effects ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial glow behind profile */}
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(234,179,8,0.08) 0%, rgba(234,179,8,0.02) 40%, transparent 70%)",
            y: backgroundY,
          }}
        />
        {/* Subtle orbit rings */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-yellow-500/[0.04]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-yellow-500/[0.02]" />
        {/* Floating particles */}
        <motion.div
          className="absolute top-[20%] right-[15%] w-1 h-1 rounded-full bg-yellow-500/30"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[60%] left-[10%] w-1.5 h-1.5 rounded-full bg-cyan-500/20"
          animate={{ y: [0, -15, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        <motion.div
          className="absolute bottom-[25%] right-[20%] w-1 h-1 rounded-full bg-yellow-500/20"
          animate={{ y: [0, -12, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 pt-28 md:pt-32 pb-10"
        style={{ opacity }}
      >
        {/* ── Profile Image ── */}
        <motion.div
          className="relative mb-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            delay: 0.1,
          }}
        >
          {/* Glow ring behind image */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-500/20 to-cyan-500/10 blur-xl scale-150" />

          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-[3px] bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-800">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#070c12] p-[3px]">
              <Image
                src={"/profilepic.jpg"}
                alt="Asido Alexandar"
                width={200}
                height={200}
                priority={true}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Animated wave emoji */}
          <motion.span
            className="absolute -bottom-1 -right-1 text-3xl"
            initial={{ opacity: 0, scale: 0, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              delay: 0.6,
              duration: 0.5,
            }}
          >
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2.5, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            >
              👋
            </motion.span>
          </motion.span>

          {/* Status indicator */}
          <div className="absolute bottom-2 left-2 flex items-center gap-1.5 bg-[#070c12]/80 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[10px] text-emerald-400/80 font-medium tracking-wide uppercase">
              Available
            </span>
          </div>
        </motion.div>

        {/* ── Text Content ── */}
        <motion.div className="max-w-2xl" variants={containerVariants}>
          {/* Greeting badge */}
          <motion.div className="mb-6" variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/[0.07] border border-yellow-500/[0.12] text-yellow-500 text-sm font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
              Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-4 tracking-tight"
            variants={itemVariants}
            style={{ fontFamily: "'Bebas Neue', 'DM Sans', sans-serif" }}
          >
            Asido{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600">
              Alexandar
            </span>
          </motion.h1>

          {/* Role tagline */}
          <motion.p
            className="text-sm md:text-base text-white/30 uppercase tracking-[0.3em] font-medium mb-8"
            variants={itemVariants}
          >
            Mobile & Web Application Developer
          </motion.p>

          {/* Bio */}
          <motion.p
            className="text-base md:text-lg text-white/50 leading-relaxed max-w-lg mx-auto mb-10"
            variants={itemVariants}
          >
            I craft seamless, user-centered digital experiences across platforms
            — building innovative apps that solve real-world problems with modern
            technologies.
          </motion.p>

          {/* ── CTA Buttons ── */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            variants={itemVariants}
          >
            <motion.a
              className="group relative flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(234,179,8,0.3)] hover:-translate-y-0.5"
              href="/CV.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2.5">
                Download Resume
                <HiDownload className="text-lg group-hover:translate-y-0.5 transition-transform duration-300" />
              </span>
            </motion.a>

            <motion.a
              href="#contact"
              className="group flex items-center gap-2.5 px-7 py-3.5 border border-white/10 text-white/70 font-medium rounded-xl transition-all duration-300 hover:border-yellow-500/30 hover:text-white hover:bg-yellow-500/[0.04] hover:-translate-y-0.5"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </motion.div>

          {/* ── Social Icons ── */}
          <motion.div
            className="flex items-center justify-center gap-3"
            variants={containerVariants}
          >
            {[
              {
                href: "https://www.linkedin.com/in/alexandar-asido-b06742359",
                icon: <BsLinkedin className="text-lg" />,
                label: "LinkedIn",
              },
              {
                href: "https://github.com/lexxAsido",
                icon: <FaGithubSquare className="text-xl" />,
                label: "GitHub",
              },
              {
                href: "mailto:alexandaras2015@gmail.com",
                icon: <MdOutlineEmail className="text-xl" />,
                label: "Email",
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group flex items-center justify-center w-11 h-11 rounded-xl border border-white/[0.06] text-white/40 hover:text-yellow-500 hover:border-yellow-500/20 hover:bg-yellow-500/[0.05] hover:-translate-y-1 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-[10px] text-white/30 uppercase tracking-[0.25em] font-medium">
          Scroll
        </span>
        <motion.div
          className="w-5 h-8 rounded-full border border-white/10 flex justify-center pt-1.5"
          animate={{}}
        >
          <motion.div
            className="w-1 h-1.5 rounded-full bg-yellow-500/60"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.main>
  );
};

export default Intro;
