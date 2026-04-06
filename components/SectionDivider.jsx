"use client";
import { motion } from "framer-motion";
import React from "react";

const SectionDivider = () => {
  return (
    <div className="flex flex-col items-center py-12 md:py-16">
      {/* Top fading line */}
      <motion.div
        className="w-px h-20 md:h-28 bg-gradient-to-b from-transparent via-yellow-500/40 to-yellow-500/60"
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        style={{ transformOrigin: "top" }}
      />

      {/* Glowing center dot */}
      <motion.div
        className="relative my-2"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.4, ease: "backOut" }}
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-yellow-500/20 animate-ping" />
        {/* Glow */}
        <span className="absolute -inset-3 rounded-full bg-yellow-500/10 blur-md" />
        {/* Core dot */}
        <span className="relative block w-2.5 h-2.5 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 shadow-[0_0_12px_rgba(234,179,8,0.4)]" />
      </motion.div>

      {/* Bottom fading line */}
      <motion.div
        className="w-px h-20 md:h-28 bg-gradient-to-b from-yellow-500/60 via-yellow-500/40 to-transparent"
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        style={{ transformOrigin: "top" }}
      />
    </div>
  );
};

export default SectionDivider;
