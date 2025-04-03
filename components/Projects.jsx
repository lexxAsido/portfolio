"use client";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  return (
    <section id="projects" className="scroll-mt-28 text-white">
      <h2 className="capitalize md:text-3xl text-xl font-bold mb-10 text-center">My Projects</h2>

      <main className="flex flex-wrap gap-10 justify-center md:flex-row md:items-center">
        {currentProjects.map((project, index) => (
          <Tilt
            key={index}
            options={{
              max: 100,             // Soft tilt effect
              scale: 1.02,         // Slight scaling on hover
              speed: 1000,         // Smooth transition
              easing: "cubic-bezier(.03,.98,.52,.99)", // Smooth easing
            }}
            className="w-full md:w-[450px] md:h-[800px] transition-all duration-500 ease-in-out"
          >
            <motion.div
              initial={{ opacity: 0, x: index < 3 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: index < 3 ? 100 : -100 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="p-5 bg-gray-600 shadow-lg rounded-xl flex flex-col justify-between"
            >
              <Image
                src={project.img}
                alt={project.title}
                width={400}
                height={250}
                className="w-full md:h-[400px] object-cover rounded-md"
              />
              <h2 className="text-center font-extrabold text-xl mt-4">{project.title}</h2>
              <p className="mt-3 text-sm">{project.description}</p>
              <h3 className="text-yellow-500 mt-2 font-semibold">{project.tech}</h3>
              <span className="flex flex-row gap-4 items-center mt-4">
                <Link href={project.liveDemo} className="bg-yellow-500 text-black px-4 py-1 rounded-md">Live Demo</Link>
                <Link href={project.github} className="border border-yellow-500 px-4 py-1 rounded-md">GitHub</Link>
              </span>
            </motion.div>
          </Tilt>
        ))}
      </main>

      <div className="flex justify-center mt-6 mb-28">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`mx-1 px-3 py-1 ${currentPage === i + 1 ? "bg-yellow-500" : "bg-gray-700"} text-white rounded`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Projects;
