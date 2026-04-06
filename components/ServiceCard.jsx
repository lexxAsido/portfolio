"use client";
import { Tilt } from "react-tilt";
import { motion, useInView } from "framer-motion";
import { services } from "@/lib/data";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const ServiceCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col sm:flex-row sm:items-stretch sm:justify-center flex-wrap gap-5 md:gap-6 mt-10"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
        >
          <Tilt
            options={{
              max: 12,
              scale: 1.02,
              speed: 600,
              easing: "cubic-bezier(.03,.98,.52,.99)",
            }}
            className="h-full"
          >
            <div className="group relative h-full rounded-2xl p-[1px] overflow-hidden transition-all duration-500 hover:shadow-[0_8px_40px_rgba(234,179,8,0.08)]">
              {/* ── Animated Gradient Border ── */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/30 via-cyan-400/10 to-yellow-500/30 opacity-40 group-hover:opacity-70 transition-opacity duration-500" />

              {/* ── Rotating border shimmer ── */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 60%, rgba(234,179,8,0.3) 80%, transparent 100%)",
                  animation: "spin 4s linear infinite",
                }}
              />

              {/* ── Card Inner ── */}
              <div className="relative h-full rounded-2xl bg-[#0a1018] backdrop-blur-sm py-8 px-6 md:min-h-[260px] flex flex-col justify-center items-center gap-5 transition-all duration-400 group-hover:bg-[#0c1320]">
                {/* Background glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-yellow-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Icon */}
                <div className="relative z-10 text-4xl md:text-5xl lg:text-6xl text-white/60 group-hover:text-yellow-500 transition-all duration-400 group-hover:scale-110 group-hover:drop-shadow-[0_4px_12px_rgba(234,179,8,0.2)]">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-white/80 text-base md:text-lg font-bold text-center group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Subtle underline accent */}
                <div className="w-8 h-[2px] rounded-full bg-gradient-to-r from-yellow-500/50 to-cyan-400/30 group-hover:w-12 transition-all duration-400" />
              </div>
            </div>
          </Tilt>
        </motion.div>
      ))}

      {/* ── Keyframe for border shimmer ── */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </motion.div>
  );
};

export default ServiceCard;
