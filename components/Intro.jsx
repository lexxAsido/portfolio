"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const Intro = () => {
  return (
    <main className='text-center mb-20 w-auto lg:max-w-[50rem]'
    id='home'>
        <div className="flex items-center justify-center  mt-[7rem] max-md:mt-20">
            <div className='relative'>
                <motion.div
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                traansition={{type: "tween", duration: 0.2,}}
                >
                <Image src={'/profilepic.jpg'} alt="Asido Alexandar"
                width={200}
                height={190}
                priority={true}
                className='rounded-full  shadow-xl border-4 border-cyan-500'
                />
                </motion.div>
                    {/* press windows logo + . to get waving hands icon on the computer*/}
                <motion.span className='text-4xl absolute bottom-10 right-0 animate-bounce'
                initial={{ opacity:0, scale: 0}}
                animate={{ opacity:1, scale: 1}}
                transition={{
                    type: "spring",
                    stiffness: 125,
                    delay: 0.1,
                    duration:0.7
                }}
                >
                    👋
                </motion.span>
            </div>
        </div>
                <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium'
                initial={{opacity: 0, y: 100}}
                animate={{  opacity:1, y: 0}}
                >
                    Hello! I'm <b>ASI<span className='text-cyan-500 animate-pulse cursor-pointer'>DO ALEX</span>ANDAR</b>, a recent graduate in Web Development, specializing in React and Next.js. 
                    I also have experience in mobile development using React Native for both IOS and Android platforms. 
                    My passion lies in creating responsive, user-friendly applications that provide seamless experiences across devices. 
                    I'm eager to contribute my skills and collaborate on innovative projects in a dynamic team environment.
                </motion.p>
        <motion.div className='flex max-md:flex-col justify-center gap-8 py-3 font-medium items-center'
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
        transition={{delay: 0.1,}}
        >
            {/* <Link href={"#contact"}
            className=' group bg-cyan-500 text-black outline-none focus:scale-110  hover:bg-black hover:text-white flex items-center 
                py-4 px-7 rounded-full gap-2 hover:scale-110 active:scale-105 transition shadow-md shadow-cyan-500'
            > Hire Me <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/> </Link> */}

            <a href="https://www.linkedin.com/in/alexandar-asido-b06658134/" target="-blank"
            className='bg-white text-gray-700 flex items-center p-4 rounded-full gap-2 hover:scale-105 active:scale-105'>
                <BsLinkedin className='text-blue-700 text-3xl'/>
            </a>

            <a href="https://github.com/lexxAsido" target='_blank'
            className='bg-white text-gray-700 text-3xl flex items-center p-4 rounded-full gap-2 hover:scale-105 active:scale-105'>
                <FaGithubSquare/>
            </a>

            <a className='group bg-yellow-500 hover:bg-black hover:text-white text-gray-900 flex items-center py-4 
                px-7 rounded-full gap-2 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition shadow-md shadow-yellow-500'
                // save your cv in the public folder and replace with the href link
                href="/CV.pdf" download> 
                    Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition text-black text-xl animate-ping group-hover:text-white'/></a>

                <a
                href="mailto:alexandaras2015@gmail.com"
                  className="group bg-cyan-500 text-black outline-none focus:scale-110  hover:bg-black hover:text-white flex items-center 
                    py-4 px-7 rounded-full gap-2 hover:scale-110 active:scale-105 transition shadow-md shadow-cyan-500 animate-bounce"
                >
                  Hire Me
                </a>
        </motion.div>
    </main>
  );
}

export default Intro;
