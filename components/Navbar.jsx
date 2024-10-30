"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { BsMenuButtonWideFill } from "react-icons/bs";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // Ensure the component is mounted before rendering

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering until mounted

  return (
    <main className="z-[999] relative w-full flex justify-center">
      {/* Main Navbar for larger screens (shown on md and larger screens) */}
      <motion.div
        className={`w-[52rem] p-2 rounded-full fixed top-0 md:h-[4rem] border border-white border-opacity-40 bg-gray-700/40 bg-opacity-80 shadow-lg shadow-white 
            backdrop-blur-[0.03rem] sm:top-6 max-md:h-[5rem] max-md:w-[36rem] hidden
           md:flex transition-all duration-300`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <ul className="flex justify-between md:gap-14 items-center text-xl p-2 font-medium text-white">
          {links.map((link) => (
            <li key={link.hash}>
              <Link
                className="hover:text-gray-950 transition-all flex items-center hover:bg-cyan-500 rounded-lg p-2"
                href={link.hash}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Toggle Button for smaller screens */}
      <div className="absolute top-6 right-3 md:hidden">
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="z-50"
        >
          {navOpen ? (
            <IoMdClose className="text-5xl text-gray-800" />
          ) : (
            <BsMenuButtonWideFill className="text-4xl text-cyan-500" />
          )}
        </button>

        {/* Show links conditionally based on navOpen state */}
        {navOpen && (
          <div className="absolute  -right-2 bg-cyan-500/60 w-screen p-5 flex flex-col items-center z-40 shadow-2xl">
            {links.map((link) => (
              <Link
                key={link.hash}
                href={link.hash}
                className="hover:bg-gray-800 py-2 px-5 rounded-lg font-bold text-white  text-center"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Navbar;
