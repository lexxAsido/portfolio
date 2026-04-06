"use client";
import { FaCopyright } from "react-icons/fa";
import { FaSquareXTwitter, FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/callme_chiefkweku?igsh=MTNuM29yZWxqZjRpcA%3D%3D&utm_source=qr",
    icon: <FaInstagram />,
    color: "#e6399b",
    hoverBg: "rgba(230,57,155,0.08)",
    hoverBorder: "rgba(230,57,155,0.25)",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/honcholex?s=21",
    icon: <FaSquareXTwitter />,
    color: "#ffffff",
    hoverBg: "rgba(255,255,255,0.05)",
    hoverBorder: "rgba(255,255,255,0.2)",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/2348103717215",
    icon: <FaWhatsapp />,
    color: "#26e600",
    hoverBg: "rgba(38,230,0,0.08)",
    hoverBorder: "rgba(38,230,0,0.25)",
  },
];

const Footer = () => {
  return (
    <footer className="w-full relative overflow-hidden" id="contact">
      {/* ── Background Effects ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-8">
        {/* ── Main Content ── */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Section label */}
          <motion.span
            className="inline-block text-xs text-yellow-500 tracking-[0.3em] uppercase font-medium mb-6"
            variants={itemVariants}
          >
            Contact
          </motion.span>

          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
            variants={itemVariants}
          >
            Let's build something
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600">
              extraordinary
            </span>{" "}
            together.
          </motion.h2>

          <motion.p
            className="text-white/40 text-base md:text-lg max-w-md mx-auto leading-relaxed mb-10"
            variants={itemVariants}
          >
            Whether you're looking to build a custom website, mobile app, or
            just want to chat about your next big idea — let's connect.
          </motion.p>

          {/* ── CTA Buttons ── */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            <motion.a
              href="mailto:alexandaras2015@gmail.com"
              className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(234,179,8,0.25)] hover:-translate-y-0.5"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <MdOutlineEmail className="relative z-10 text-xl" />
              <span className="relative z-10">Send me an Email</span>
            </motion.a>

            <a
              href="tel:+2348103717215"
              className="flex items-center gap-2.5 px-6 py-4 border border-white/[0.08] text-white/60 font-medium rounded-2xl transition-all duration-300 hover:border-white/15 hover:text-white/80 hover:bg-white/[0.02]"
            >
              <FaPhoneVolume className="text-sm text-yellow-500/70" />
              <span>+234 810 371 7215</span>
            </a>
          </motion.div>

          {/* ── Social Links ── */}
          <motion.div variants={itemVariants}>
            <p className="text-white/20 text-xs tracking-widest uppercase mb-5">
              Find me on
            </p>
            <div className="flex items-center justify-center gap-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="group relative flex items-center gap-2.5 px-5 py-3 rounded-xl border border-white/[0.06] transition-all duration-300 hover:-translate-y-1"
                  style={{
                    "--hover-bg": social.hoverBg,
                    "--hover-border": social.hoverBorder,
                    "--hover-color": social.color,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = social.hoverBorder;
                    e.currentTarget.style.background = social.hoverBg;
                    e.currentTarget.style.color = social.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.06)";
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "";
                  }}
                >
                  <span className="text-xl text-white/40 group-hover:text-inherit transition-colors duration-300">
                    {social.icon}
                  </span>
                  <span className="text-sm text-white/40 font-medium group-hover:text-inherit transition-colors duration-300 hidden sm:inline">
                    {social.label}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Footer Bottom ── */}
        <div className="border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="flex items-center gap-1.5 text-white text-xs tracking-wide">
            <FaCopyright className="text-[10px]" />
            2026 Asido Alexandar. All rights reserved.
          </p>
          <p className="text-white text-xs">
            Designed & built with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
