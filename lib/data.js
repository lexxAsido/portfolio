import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Image from "next/image";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import todoimg from "@/public/to-do.png"
import doimg from "@/public/to-do2.png"
// Navigation links
const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

// Experience data
const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
];

// Projects data
const projectsData = [
  {
    title: "To-do app",
    description:
      "This was my final project as a full-stack developer at Early code. The To-Do App is a simple, intuitive task manager designed to boost productivity. Organize tasks, set priorities, and never miss a deadline with due dates and reminders. With a clean interface and cross-platform sync, it’s perfect for staying organized, whether at home, work, or on the go.",
    tags: ["React", "Next.js", "Firebase Db", "Tailwind Css", "JavaScript", "NextAuth.js","Formik", "React Icons","Shadcn"],
    imageUrl: "/to-do.png",
    siteUrl: "https://to-do-list-three-pi-80.vercel.app"
    
    
  },
  {
    title: "SwiftVoyage.com",
    description:
      "I'm building a fully responsive and user friendly travel site with features like bookings, travel destination and registration and Sign in features.",
    tags: ["React", "JavaScript", "Next.js", "Tailwind Css", "Firebase db", "Javascript", "NextAuth.js", "framer motion", "Shadcn"],
    imageUrl: "/voyage.png",
    siteUrl:"https://to-do-list-three-pi-80.vercel.app/"
    
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    // imageUrl: wordanalyticsImg,
  },
];

// Skills data
const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
];

// Exporting the arrays at the bottom of the file
export { links, experiencesData, projectsData, skillsData };
