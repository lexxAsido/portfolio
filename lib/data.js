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
  {
    title: "Mobile Developer – Bcloud Technologies",
    location: "Lagos, Nigeria",
    description: "Developing and maintaining cross-platform mobile applications using React Native, ensuring performance optimization and seamless user interactions.",
    icon: React.createElement(FaReact),
    date: "March 2024 - Present | Remote",
  },
  {
    title: "Front-End Developer - EarlyCode",
    location: "Abuja, Nigeria",
    description: "Worked on building and maintaining user interfaces for web applications, collaborating with designers and backend developers to enhance user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 – Feb 2024 | Hybrid",
  },
  
];



// Projects data
const projectsData = [
  {
    img: '/OHF.jpg',
    title: 'EHR Mobile-App',
    description:
        "The Ogeri Foundation Electronic Health Records (EHR) App is a mobile health solution designed to streamline patient data management for healthcare professionals. Built with React Native, the app enables secure access to medical records, consultation notes, medication tracking, and patient vitals. It offers a seamless experience for patients, health workers, and administrators, ensuring efficient healthcare delivery.", 
    tech: 'React-Native | Restful API | TypeScript',
    liveDemo: '#',
    github: 'https://github.com/lexxAsido',
  },
  {
    img: '/ride-sharing.jpg',
    title: 'RideWave - A Ride Sharing App',
    description:
    "A React Native ride-sharing app that connects users with nearby drivers using Google Maps for real-time tracking. It features geocoding, expo-location, and secure API management with react-native-dotenv. Built with React Navigation (Stack & Bottom Tabs) and integrated with Google Cloud for location-based services.",
    tech: 'React-Native | Expo Location | React Native Maps',
    liveDemo: 'RideWave.apk',
    github: 'https://github.com/lexxAsido/RideWave.git',
  },
  {
    img: '/Asidrop.png',
    title: 'Asidrop',
    description:
    "Asidrop is a dynamic Web application built with react and Next js. its a delivery platform designed for seamless logistics across Nigeria. With an intuitive user interface, it enables users to effortlessly input details of their goods or products, including pickup and delivery locations.",
    
    tech: 'React | Next.js | Firebase Db',
    liveDemo: 'https://asi-drop-alexandars-projects-444e7792.vercel.app/',
    github: 'https://github.com/lexxAsido',
  },
  {
    img: '/coffee-shop.jpg',
    title: 'Coffee Shop',
    description:
    "The Coffee-Shop App is a modern mobile application designed to enhance the coffee-buying experience by allowing users to browse coffee options, find nearby coffee shops, and place orders seamlessly. The app features an intuitive UI with smooth navigation and real-time location-based services.",
    
    tech: 'React Native | React Native Maps | Expo Location',
    liveDemo: '#',
    github: 'https://github.com/lexxAsido/Coffee-Shop.git',
  },
  {
    img: '/tipfront.jpg',
    title: 'TipNGoal Mobile-App',
    description:
    "TipNGoal is the ultimate prediction app designed to give you the surest picks and daily insights to help you maximize your winnings on your favorite betting platforms. Whether you're looking for accurate match predictions, game stats, or expert betting tips, TipNGoal has you covered.",
   
    tech: 'React-Native | Livescores-Api-Integration | Firebase Db',
    liveDemo: '#',
    github: 'https://github.com/lexxAsido/TipNGoal-User.git',
  },
  {
    img: '/to-do.png',
    title: 'To-do',
    description:
    "The To-Do App is a simple, intuitive task manager designed to boost productivity. Organize tasks, set priorities, and never miss a deadline with due dates and reminders. With a clean interface and cross-platform sync.",
   
    tech: 'React | Shadcn | NextAuth.js',
    liveDemo: 'https://to-do-list-three-pi-80.vercel.app',
    github: 'https://github.com/lexxAsido/To-do-list.git',
  },
  {
    img: '/tipweb.png',
    title: 'TipNGoal Web',
    description:
    "TipNGoal is a sport prediction app which is scheduled to be available on Playstore and App store. TipNGoal is a personal project i built to provide users with safe betting tips and predictions",
    tech: 'React | Tailwind CSS | Framer Motion',
    liveDemo: 'https://tip-n-goal-web.vercel.app/',
    github: 'https://github.com/lexxAsido/TipNGoal-Web',
  },
  {
    img: '/SkyCart.jpg',
    title: 'SkyCart Mobile-App',
    description:
    "Shop smarter with SkyCart is an application designed to redefine online shopping experience and bringing a world of products to your fingertips with fast delivery and hassle-free checkout. Click Visit to download App andriod Apk",
         
    tech: 'React-Native | Paystack | JavaScript',
    liveDemo: 'https://to-do-list-three-pi-80.vercel.app',
    github: 'https://github.com/lexxAsido/To-do-list.git',
  }
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
      name: "Chart.js",
      image: "/chart.png",
    },
    {
      name: "Mui",
      image: "/mui.png",
    },
    {
      name: "Tailwind Css",
      image: "/tailwind.png",
    },
    {
      name: "Redux",
      image: "/redux.png",
    },
    
    {
      name: "Next.js",
      image: "/nextjs.jpeg",
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
      name: "TypeScript",
      image: "/TypeScript.png",
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
      name: "Shadcn",
      image: "/ShadCn.png",
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
