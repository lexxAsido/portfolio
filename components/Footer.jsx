"use client"
import { FaCopyright } from "react-icons/fa";
import { TfiLayoutMediaLeftAlt } from "react-icons/tfi";
import { BsTwitterX } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {


  return (
    <motion.main
      initial={{ opacity: 0, y: 80 }}
     animate={{ opacity: 1, y: 0}}
     transition={{ delay: 0.195}}
      >
      <div
        className="h-[35rem] bg-cyan-300  w-full flex flex-row gap-20 p-14 shadow-xl justify-center mx-3 transition-all max-md:h-auto max-md:flex-col"
        id="contact" >
        <div className="w-[50rem] max-md:w-auto shadow-lg p-10 bg-white hover:bg-black hover:text-white transition flex justify-center flex-col hover:scale-110">
          <h2 className="uppercase font-bold text-3xl max-md:text-sm flex  gap-2 justify-center">
            Asido Alexandar Socials
            <TfiLayoutMediaLeftAlt className="text-cyan-500" />
          </h2>
          <div className="text-6xl flex justify-center gap-8 mt-2 md:p-5">
            
            
            <a href="https://www.instagram.com/officiallexxmedia?igsh=MWg0bjVkOXcxZjl5eg%3D%3D&utm_source=qr" target="_blank">
            <FaInstagram className="text-pink-600" />
            </a>

            <a href="https://wa.me/2348103717215" target="_blank">
            <ImWhatsapp className="text-green-500" />
            </a>

            <a href="https://x.com/honcholex?s=21" target="_blank">
            <BsTwitterX className="text-" />
            </a>
          </div>
        </div>

        <div className="w-[55rem] h-[28rem] max-md:w-auto max-md:h-auto border p-7 bg-black text-white shadow-white shadow-2xl hover:scale-110 transition flex gap-2 flex-col justify-center">
          <h1 className="text-4xl max-md:text-lg font-bold mb-4">Let's Design Together</h1>
          <p className="mb-5">
            I’d love to hear about your project ideas or any opportunities to
            collaborate! Whether you're looking to build a custom website,
            mobile app, or just want to chat about your next big idea, feel free
            to reach out.
          </p>

         <p className="flex gap-1 items-center py-3  bg-cyan-500 w-[11rem] rounded-lg text-lg max-md:w-auto"><FaPhoneVolume className="text-2xl text-black "/>+2348103717214</p>
            <a
            href="mailto:alexandaras2015@gmail.com"
              className="p-3 w-[10rem] max-md:w-auto flex items-center gap-2 bg-yellow-500 rounded-lg font-bold uppercase"
            >
              Send Mail<MdOutlineEmail className="text-black text-2xl" />
            </a>
          {/* </form> */}
        </div>
      </div>
      <div className="h-[2rem] max-md:h-auto max-md:w-auto uppercase flex justify-center">
        <h3 className="flex items-center gap-2  font-bold max-md:text-sm">
          <FaCopyright />
          Personal portfolio designed by Asido Alexandar
        </h3>
      </div>
    </motion.main>
  );
};

export default Footer;
