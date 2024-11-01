import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Image from "next/image";

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
  // {
  //   title: "Graduated bootcamp",
  //   location: "Miami, FL",
  //   description:
  //     "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2019",
  // },
  // {
  //   title: "Front-End Developer",
  //   location: "Orlando, FL",
  //   description:
  //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "2019 - 2021",
  // },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
];

// Projects data
const projectsData = [
  {
    title: "To-do app",
    description:
      "This was my final project as a Web developer at Early code. The To-Do App is a simple, intuitive task manager designed to boost productivity. Organize tasks, set priorities, and never miss a deadline with due dates and reminders. With a clean interface and cross-platform sync, it’s perfect for staying organized, whether at home, work, or on the go.",
    tags: ["React", "Next.js", "Firebase Db", "Tailwind Css", "JavaScript", "NextAuth.js","Formik", "React Icons","Shadcn"],
    imageUrl: "/to-do.png",
    siteUrl: "https://to-do-list-three-pi-80.vercel.app"
    
    
  },
  {
    title: "SwiftVoyage.com",
    description:
      "I'm building a fully responsive and user friendly travel   Website with features like bookings, travel destination and registration and Sign in features.",
    tags: ["React", "JavaScript", "Next.js", "Tailwind Css", "Firebase db", "Javascript", "NextAuth.js", "framer motion", "Shadcn"],
    imageUrl: "/voyage.png",
    siteUrl:"https://to-do-list-three-pi-80.vercel.app/"
    
  },
  {
    title: "SkyCart App",
    description:
      "Shop smarter with SkyCart is an application designed to redefine online shopping experience and bringing a world of products to your fingertips with fast delivery, exclusive deals, and hassle-free checkout",
          
    tags: ["React", "React-native", "React-Native-Paper", "FontAwesomeIcon", "Google-Fonts", "React-Native-Animatable", "JavaScript", "SplashScreen", "modal", "Stack-Navigation", "Bottom-Tab-Navigation", "Vector-Icons" ],
    imageUrl: "/Sky.jpg"
  },
  {
    title: "Lexx Media App",
    description:
      "Lexx Media is your go-to mobile platform for staying connected with the latest in entertainment, news, music, and live events. This all-in-one app with an intuitive interface delivers breaking news, trending music tracks, and upcoming Nigerian events both local and International tailored to your interests. ",
    tags: ["React", "React-native", "React-Native-Paper", "FontAwesomeIcon", "Google-Fonts", "React-Native-Animatable", "JavaScript", "SplashScreen", "modal", "Stack-Navigation", "Bottom-Tab-Navigation", "Vector-Icons" ],
    imageUrl: "/lexx.jpg"
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   // imageUrl: wordanalyticsImg,
  // },
];

// Skills data
const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React Native",
  "React",
  "Next.js",
  "Node.js",
  "Expo Dev",
  "GitHub",
  "Tailwind",
  "React-Native-Paper",
  "FontAwesome",
  "Framer Motion",
  "Formik",
  "Vercel",
  "React-Icons",
  "shadcn",
  "material-UI",
  "NextAuth",
];

// Exporting the arrays at the bottom of the file
export { links, experiencesData, projectsData, skillsData };
