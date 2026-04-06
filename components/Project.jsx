"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";

function Project({ title, description, tags, imageUrl, siteUrl }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0.8"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="w-full"
    >
      <section className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-yellow-500/15 hover:bg-white/[0.04] hover:shadow-[0_8px_40px_rgba(234,179,8,0.06)]">
        {/* ── Card Glow on Hover ── */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-yellow-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* ── Image ── */}
        <div className="relative overflow-hidden w-full h-[28rem] max-md:h-[16rem] bg-black/20">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-contain transition-all duration-700 ease-out group-hover:scale-[1.04]"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070c12]/70 via-transparent to-transparent" />

          {/* ── Live Demo Button (hover reveal) ── */}
          <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
          >
            <span className="flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-semibold text-sm rounded-xl shadow-[0_8px_30px_rgba(234,179,8,0.3)] translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              Live Demo
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </span>
          </a>
        </div>

        {/* ── Content ── */}
        <div className="flex flex-col p-5 md:p-6 relative z-10">
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500/90 transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-white/40 text-sm leading-relaxed mb-5">
            {description}
          </p>

          {/* Tags */}
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="px-3 py-1 text-xs font-medium tracking-wide rounded-full border border-cyan-500/15 bg-cyan-500/[0.06] text-cyan-400/70 transition-all duration-300 hover:border-cyan-500/30 hover:text-cyan-400"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}

export default Project;
