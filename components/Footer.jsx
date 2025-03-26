"use client";
import { FaCopyright } from "react-icons/fa";
import { TfiLayoutMediaLeftAlt } from "react-icons/tfi";
import { FaSquareXTwitter, FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden bg-black text-white">
  <main className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-10 p-6 md:p-14 max-w-full">

        {/* Socials Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className=" w-auto flex flex-col items-center p-6 md:p-10 bg-gray-700 rounded-lg shadow-lg"
          id="contact"
        >
          <h2 className="uppercase font-bold text-2xl md:text-3xl flex gap-2 justify-center">
            Asido Alexandar Socials
            <TfiLayoutMediaLeftAlt className="text-cyan-500" />
          </h2>
          <div className="flex gap-4 mt-5">
            <Link
              href="https://www.instagram.com/officiallexxmedia?igsh=MWg0bjVkOXcxZjl5eg%3D%3D&utm_source=qr"
              target="_blank"
            >
              <div className="icon-container text-[#e6399b]">
                <FaInstagram />
              </div>
            </Link>
            <Link href="https://x.com/honcholex?s=21" target="_blank">
              <div className="icon-container text-white">
                <FaSquareXTwitter />
              </div>
            </Link>
            <Link href="https://wa.me/2348103717215" target="_blank">
              <div className="icon-container text-[#26e600]">
                <FaWhatsapp />
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className=" md:w-[55rem] w-auto p-7 bg-black border rounded-lg text-white shadow-lg transition-transform hover:scale-105"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
            Let's Design Together
          </h1>
          <p className="mb-5 text-center">
            I’d love to hear about your project ideas or any opportunities to
            collaborate! Whether you're looking to build a custom website,
            mobile app, or just want to chat about your next big idea, feel free
            to reach out.
          </p>
          <div className="flex flex-col items-center gap-3">
            <p className="flex gap-1 items-center py-3 px-6 justify-center bg-cyan-500 rounded-lg text-lg">
              <FaPhoneVolume className="text-sm text-black" />
              +2348103717214
            </p>
            <a
              href="mailto:alexandaras2015@gmail.com"
              className="p-3 flex items-center gap-2 bg-yellow-500 rounded-lg font-bold capitalize justify-center w-full md:w-auto"
            >
              Send me Mail
              <MdOutlineEmail className="text-black text-2xl" />
            </a>
          </div>
        </motion.div>
      </main>

      {/* Footer Bottom */}
      <div className="h-[2rem] flex justify-center text-center text-sm mt-4">
        <h3 className="flex items-center gap-2 capitalize">
          <FaCopyright />
          copyright 2024 Asido Alexandar. All Rights reserved
        </h3>
      </div>

      <style jsx>{`
        .icon-container {
          position: relative;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 4rem;
          height: 4rem;
          font-size: 2rem;
          border: 2px solid;
          border-radius: 0.5rem;
          overflow: hidden;
          transition: transform 0.5s ease, box-shadow 0.5s ease;
          cursor: pointer;
        }

        .icon-container::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: black;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.5s ease;
          z-index: -1;
        }

        .icon-container:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        .icon-container:hover::before {
          transform: scaleY(1);
        }

        .icon-container svg {
          z-index: 1;
        }

        @media (max-width: 768px) {
          .icon-container {
            width: 2.5rem;
            height: 2.5rem;
            font-size: 1.5rem;
            border-width: 2px;
          }

          .icon-container:hover {
            transform: scale(1.1);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
