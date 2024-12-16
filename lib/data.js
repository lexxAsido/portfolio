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
    title: "Asidrop",
    description:
      "Asidrop is a dynamic delivery platform designed for seamless logistics across Nigeria. With an intuitive user interface, it enables users to effortlessly input details of their goods or products, including pickup and delivery locations.",
    tags: ["React", "Firebase Db", "Tailwind Css", "JavaScript", "Firebase Auth","Formik", "React Icons","Shadcn","framer-motion","Google Fonts","node js"],
    imageUrl: "/Asidrop.png",
    siteUrl: "https://asi-drop-alexandars-projects-444e7792.vercel.app/"
    
    
  },
  {
    title: "TipNGoal Web",
    description:
      "TipNGoal is a sport prediction app which is scheduled to be available on Playstore and App store. TipNGoal is a personal project i built to provide users with safe betting tips and predictions",
    tags: ["React", "Next.js", "Tailwind Css", "React Icons","Shadcn", "framer-motion"],
    imageUrl: "/tipweb.png",
    siteUrl: "https://tip-n-goal-web.vercel.app/"
    
    
  },
  {
    title: "To-do",
    description:
      "The To-Do App is a simple, intuitive task manager designed to boost productivity. Organize tasks, set priorities, and never miss a deadline with due dates and reminders. With a clean interface and cross-platform sync.",
    tags: ["React", "Next.js", "Firebase Db", "Tailwind Css", "JavaScript", "NextAuth.js","Formik", "React Icons","Shadcn", "Github Auth", "Google Auth"],
    imageUrl: "/to-do.png",
    siteUrl: "https://to-do-list-three-pi-80.vercel.app"
    
    
  },
  {
    title: "Travel-Alexis",
    description:
      "I'm building a fully responsive and user friendly travel Website with features like bookings, travel destination and registration and Sign in features.",
    tags: ["React", "JavaScript", "Next.js", "Tailwind Css", "Firebase db", "Javascript", "framer-motion", "Shadcn", "firebase auth"],
    imageUrl: "/travel.png",
    siteUrl:"https://travel-alexis.vercel.app/"
    
  },
  {
    title: "SkyCart Mobile-App",
    description:
      "Shop smarter with SkyCart is an application designed to redefine online shopping experience and bringing a world of products to your fingertips with fast delivery and hassle-free checkout. Click Visit to download App andriod Apk",
          
    tags: ["React-native", "FontAwesomeIcon", "Google-Fonts","Paystack", "JavaScript", "modal", "Stack-Navigation", "Bottom-Tab-Navigation", "Vector-Icons" ],
    imageUrl: "/SkyCart.jpg",
    siteUrl:"skycart.apk"
  },
  {
    title: "TipNGoal Mobile-App",
    description:
      "TipNGoal is the ultimate prediction app designed to give you the surest picks and daily insights to help you maximize your winnings on your favorite betting platforms. Whether you're looking for accurate match predictions, game stats, or expert betting tips, TipNGoal has you covered.",
    tags: ["React-native", "Livescores-Api-Integration","Firebase db","Authentication", "Google-Fonts", "JavaScript", "modal", "Stack-Navigation", "Bottom-Tab-Navigation", "Vector-Icons" ],
    imageUrl: "/tipblack.jpg",
    // siteUrl:"skycart.apk"
  },
  {
    title: "Lexx Media Mobile-App",
    description:
      "Lexx Media is your all-in-one app with an intuitive interface delivers breaking news, trending music tracks, and upcoming Nigerian events both local and International tailored to your interests. Click Visit to download App andriod Apk",
    tags: [ "React-native", "FontAwesomeIcon", "Google-Fonts", "JavaScript", "SplashScreen", "modal", "Bottom-Tab-Navigation", "Vector-Icons" ],
    imageUrl: "/LexxMedia.jpg",
    siteUrl: "LexxMedia.apk"
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

    {
      name: "HTML",
      image: "/html5.png", // Path to the image
    },
    {
      name: "CSS",
      image: "/css.svg",
    },
    {
      name: "JavaScript",
      image: "/js.png",
    },
    
    {
      name: "Next.js",
      image: "/nextjs.jpeg",
    },
    {
      name: "Node.js",
      image: "/node.png",
    },
    {
      name: "React",
      image: "/React.jpg",
    },
    {
      name: "Expo",
      image: "/Expo.png",
    },
    {
      name: "React Native",
      image: "/react-native.png",
    },
    {
      name: "GitHub",
      image: "/github.png",
    },
    {
      name: "Vercel",
      image: "/vercel.png",
    },
    {
      name: "Lottie Files",
      image: "/lottie.png",
    },
    {
      name: "Framer-Motion",
      image: "/framer.png",
    },
    {
      name: "firebase",
      image: "/firebase.png",
    },
    {
      name: "Formik",
      image: "/formik.png",
    },
    
  ]
export { links, experiencesData, projectsData, skillsData };
