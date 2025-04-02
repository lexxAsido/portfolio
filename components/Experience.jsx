"use client";
import React from "react";
import { motion } from "framer-motion";
import { experiencesData } from "@/lib/data";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; 

const ExperienceCard = ({ title, location, description, icon, date, index }) => {
  return (
    <VerticalTimelineElement
      key={index}
      contentStyle={{
        background: "white",
        color: "black",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  rgb(33, 43, 54)", // Arrow color
      }}
      iconStyle={{
        background: "rgb(33, 43, 54)", // Icon background color
        color: "#fff", // Icon color
      }}
      icon={<div className="text-4xl text-cyan-500 flex md:mt-7 mt-5 items-center">{icon}</div>} 
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-500 text-sm">{location}</p>
      <p className="text-gray-800 mt-2 text-sm">{description}</p>
      <span className="mt-4 text-sm">{date}</span>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-6 py-12"
      initial={{ opacity: 0, y: 100 }} 
      animate={{ opacity: 1, y: 0 }}   
      exit={{ opacity: 0, y: 100 }}
      transition={{ delay: 0.175 }}
      id="experience"
    >
      <h2 className="md:text-3xl text-xl font-bold text-center text-white mb-10">Experience</h2>
      <VerticalTimeline>
        {experiencesData.map((experience, index) => (
          <ExperienceCard
            key={index}
            index={index}
            title={experience.title}
            location={experience.location}
            description={experience.description}
            icon={experience.icon}
            date={experience.date}
          />
        ))}
      </VerticalTimeline>
    </motion.div>
  );
};

export default Experience;
