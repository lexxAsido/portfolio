"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

const navVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const mobileOverlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: "easeIn", delay: 0.15 },
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] },
  }),
  exit: (i) => ({
    opacity: 0,
    x: 20,
    transition: { duration: 0.2, delay: i * 0.03 },
  }),
};

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  // Intersection observer for active section
  useEffect(() => {
    const sectionIds = links.map((l) => l.hash.replace("#", ""));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      {/* ── Main Navbar ── */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ease-[cubic-bezier(0.25,0.4,0.25,1)] ${
          scrolled
            ? "py-3 bg-[#070c12]/80 backdrop-blur-xl border-b border-white/[0.04] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "py-5 bg-transparent border-b border-transparent"
        }`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
          {/* ── Logo ── */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src={"/logo2.png"}
                alt="Asido Alexandar"
                width={200}
                height={190}
                priority={true}
                className={`rounded-full transition-all duration-300 ${
                  scrolled ? "w-10 h-10" : "w-12 h-12"
                } ring-2 ring-yellow-500/20 group-hover:ring-yellow-500/40`}
              />
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-full bg-yellow-500/0 group-hover:bg-yellow-500/10 blur-md transition-all duration-300" />
            </div>
            <h2
              className={`text-white font-bold tracking-tight transition-all duration-300 max-lg:hidden ${
                scrolled ? "text-base" : "text-lg"
              }`}
            >
              Asido{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Alexandar
              </span>
            </h2>
          </Link>

          {/* ── Desktop Links ── */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = activeSection === link.hash.replace("#", "");
              return (
                <li key={link.hash}>
                  <Link
                    href={link.hash}
                    className={`relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-lg group ${
                      isActive
                        ? "text-yellow-500"
                        : "text-white/50 hover:text-white/80"
                    }`}
                  >
                    {link.name}
                    {/* Active indicator dot */}
                    {isActive && (
                      <motion.span
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-yellow-500"
                        layoutId="activeNav"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    {/* Hover background */}
                    <span className="absolute inset-0 rounded-lg bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Mobile Toggle ── */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden relative z-[1001] w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <motion.span
                className="block w-full h-[2px] bg-yellow-500 rounded-full origin-center"
                animate={{
                  rotate: navOpen ? 45 : 0,
                  y: navOpen ? 7 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              />
              <motion.span
                className="block w-3/4 h-[2px] bg-yellow-500 rounded-full self-end"
                animate={{
                  opacity: navOpen ? 0 : 1,
                  x: navOpen ? 10 : 0,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-full h-[2px] bg-yellow-500 rounded-full origin-center"
                animate={{
                  rotate: navOpen ? -45 : 0,
                  y: navOpen ? -7 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Overlay ── */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            className="fixed inset-0 z-[998] bg-[#070c12]/95 backdrop-blur-2xl flex flex-col items-center justify-center"
            variants={mobileOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Decorative background */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-yellow-500/[0.03] blur-3xl" />
              <div className="absolute bottom-1/4 left-1/3 w-[200px] h-[200px] rounded-full bg-cyan-500/[0.02] blur-3xl" />
            </div>

            {/* Logo */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <Image
                src={"/logo2.png"}
                alt="Asido Alexandar"
                width={200}
                height={190}
                className="rounded-full w-16 h-16 ring-2 ring-yellow-500/20"
              />
            </motion.div>

            {/* Navigation Links */}
            <nav className="flex flex-col items-center gap-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.hash}
                  custom={i}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Link
                    href={link.hash}
                    onClick={() => setNavOpen(false)}
                    className={`text-2xl md:text-3xl font-medium tracking-wide transition-all duration-300 ${
                      activeSection === link.hash.replace("#", "")
                        ? "text-yellow-500"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom hint */}
            <motion.p
              className="absolute bottom-10 text-white/20 text-xs tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Tap to navigate
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
