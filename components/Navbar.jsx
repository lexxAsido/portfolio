"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { BsMenuButtonWideFill } from "react-icons/bs";
import Image from "next/image";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="z-[999] relative w-full flex justify-center">
      {/* Main Navbar for larger screens (md and larger) */}
      <motion.div
        className={`w-full fixed top-0 md:h-[3rem] lg:gap-28 
          backdrop-blur-[0.03rem] sm:top-6 max-md:h-[5rem] max-md:w-[36rem] hidden
          md:flex md:justify-center transition-all duration-300 mx-20`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="flex items-center lg:px-10 gap-2">
          <Image
            src={"/logo2.png"}
            alt="Asido Alexandar"
            width={200}
            height={190}
            priority={true}
            className="rounded-full w-16 h-16"
          />
          <h2 className="text-white font-extrabold text-xl max-lg:hidden">Asido Alexandar</h2>
        </div>
        <ul className="flex justify-center md:gap-10 items-center text-md font-medium text-white px-20">
          {links.map((link) => (
            <li key={link.hash}>
              <Link
                className="hover:text-gray-950 transition-all flex items-center hover:bg-whte rounded-lg p-2"
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
        <button onClick={() => setNavOpen(!navOpen)} className="z-50">
          {navOpen ? (
            <IoMdClose className="text-5xl text-gray-800" />
          ) : (
            <BsMenuButtonWideFill className="text-4xl text-cyan-500" />
          )}
        </button>

        {/* Mobile Navbar when navOpen is true */}
        {navOpen && (
          <div className="absolute top-0 right-0 bg-gray-500/60 w-screen p-10 h-screen flex flex-col gap-10 items-center z-60 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center justify-between w-full mb-6">
              <Image
                src={"/logo2.png"}
                alt="Asido Alexandar"
                width={200}
                height={190}
                className="rounded-full w-16 h-16"
              />
              <button
                onClick={() => setNavOpen(false)}
                className="text-5xl text-gray-800"
              >
                <IoMdClose />
              </button>
            </div>
            {links.map((link) => (
              <Link
                key={link.hash}
                href={link.hash}
                className="hover:bg-gray-800 py-2 px-5 rounded-lg font-bold text-white text-center w-full"
                onClick={() => setNavOpen(false)} // Close the menu after a click
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
