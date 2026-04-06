"use client";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tilt } from "react-tilt";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  return (
    <section
      id="projects"
      className="relative scroll-mt-28 text-white px-5 md:px-10 max-w-7xl mx-auto"
    >
      {/* ── Background Glow ── */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-yellow-500/[0.02] blur-[150px] pointer-events-none" />

      {/* ── Section Header ── */}
      <div className="text-center mb-14 relative z-10">
        {/* <motion.span
          className="inline-block text-xs text-yellow-500 tracking-[0.3em] uppercase font-medium mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.span> */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600">
            Projects
          </span>
        </motion.h2>
      </div>

      {/* ── Projects Grid ── */}
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
        >
          {currentProjects.map((project, index) => (
            <Tilt
              key={`${currentPage}-${index}`}
              options={{
                max: 8,
                scale: 1.01,
                speed: 800,
                easing: "cubic-bezier(.03,.98,.52,.99)",
              }}
              className="w-full"
            >
              <motion.div
                variants={cardVariants}
                className="group relative h-full flex flex-col rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-yellow-500/15 hover:bg-white/[0.04] hover:shadow-[0_8px_40px_rgba(234,179,8,0.06)]"
              >
                {/* ── Card Glow on Hover ── */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-yellow-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* ── Image ── */}
                <div className="relative overflow-hidden aspect-[4/3] bg-black/30">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={500}
                    height={375}
                    className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070c12]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* ── Content ── */}
                <div className="flex flex-col flex-1 p-5 md:p-6">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-yellow-500/90 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <p className="text-yellow-500/70 text-xs font-semibold tracking-wide uppercase mb-5">
                    {project.tech}
                  </p>

                  {/* Buttons */}
                  <div className="flex items-center gap-3 mt-auto">
                    <Link
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-yellow-500 to-amber-600 text-black text-sm font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_4px_20px_rgba(234,179,8,0.3)] hover:-translate-y-0.5"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10">Live Demo</span>
                      <svg
                        className="relative z-10 w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-300"
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
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 border border-white/[0.08] text-white/50 text-sm font-medium rounded-xl transition-all duration-300 hover:border-yellow-500/20 hover:text-white/80 hover:bg-yellow-500/[0.04] hover:-translate-y-0.5"
                    >
                      GitHub
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </motion.main>
      </AnimatePresence>

      {/* ── Pagination ── */}
      {totalPages > 1 && (
        <motion.div
          className="flex items-center justify-center gap-2 mt-14 mb-28"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {/* Previous button */}
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.06] text-white/30 transition-all duration-300 hover:border-white/15 hover:text-white/60 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`w-9 h-9 rounded-lg text-sm font-medium transition-all duration-300 ${
                currentPage === i + 1
                  ? "bg-gradient-to-r from-yellow-500 to-amber-600 text-black shadow-[0_4px_15px_rgba(234,179,8,0.2)]"
                  : "border border-white/[0.06] text-white/40 hover:border-white/15 hover:text-white/70"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          {/* Next button */}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.06] text-white/30 transition-all duration-300 hover:border-white/15 hover:text-white/60 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
