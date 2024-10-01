"use client"
import { useScroll, motion } from 'framer-motion';
import React, { useRef } from 'react';
import { TbHandClick } from "react-icons/tb";



function Project({ title, description, tags, imageUrl, siteUrl}) {
    const ref = (null)
    const { scrollYProgress} = useScroll({
      target: ref,
      offset: ["0 0", "0.5 0"]
    });
  return (
    <motion.main
        ref={ref}
        style={{
        scale:scrollYProgress,
        opacity: scrollYProgress,
    }} 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 1}}
        transition={{ delay: 0.195}}
    >

    <section className="project-card bg-black flex flex-col overflow-hidden border-4 border-cyan-500 relative w-full h-auto hover:bg-gray-600 transition group rounded-md ">
      {/* Image element */}
      
      <img
        src={imageUrl}
        alt={title}
        className="project-image rounded-tr-lg shadow-2xl shadow-yellow-500 p-10 w-full h-[35rem] group-hover:scale-110 transition group-hover:translate-x-2 group-hover:-rotate-3 group-hover:translate-y-3"
        quality={95}
      />
      <div className="flex flex-col h-[20rem] pt-4 pb-6 px-4">
        <h3 className="project-title text-yellow-500 font-bold text-2xl m-auto underline underline-offset-8 decoration-white decoration-4">
          {title}
        </h3>
        <p className="project-description mt-2 leading-relaxed  text-white ">
          {description}
        </p>
        <ul className="project-tags flex flex-wrap mx-1 gap-2 mt-auto">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="project-tag bg-cyan-500 px-3 py-1 text-sm uppercase tracking-wider text-white rounded-full font-medium"
            >
              {tag}
            </li>
          ))}
        </ul>

        <a href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-x-0 top-2/4 text-center opacity-0 group-hover:opacity-100 transition duration-500 flex justify-center"
          >
            <p className='uppercase  font-bold bg-yellow-500 w-[10rem] flex gap-1 items-center px-6 py-3 rounded-r-xl'>visit site<TbHandClick className='text-3xl text-white'/></p>
          </a>
      </div>
    </section>
    </motion.main>
  );
}

export default Project;