"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiencesData } from "@/lib/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({
  title,
  location,
  description,
  icon,
  date,
  index,
}) => {
  return (
    <VerticalTimelineElement
      key={index}
      contentStyle={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
        backdropFilter: "blur(8px)",
        color: "#f5f5f0",
        padding: "1.5rem 1.75rem",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255,255,255,0.06)",
      }}
      iconStyle={{
        background: "linear-gradient(135deg, #eab308, #ca8a04)",
        color: "#070c12",
        boxShadow:
          "0 0 0 4px rgba(234,179,8,0.15), 0 4px 20px rgba(234,179,8,0.2)",
      }}
      icon={
        <div className="flex  w-full h-full text-2xl md:text-3xl">
          {icon}
        </div>
      }
    >
      {/* Title */}
      <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
        {title}
      </h3>

      {/* Location */}
      <p className="text-yellow-500/70 text-sm font-medium mt-1 tracking-wide">
        {location}
      </p>

      {/* Description */}
      <p className="text-white/40 text-sm leading-relaxed mt-3">
        {description}
      </p>

      {/* Date */}
      <span className="inline-block mt-4 text-xs text-white/25 tracking-widest uppercase font-medium">
        {date}
      </span>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-24"
      id="experience"
    >
      {/* ── Background Glow ── */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-yellow-500/[0.02] blur-[140px] pointer-events-none" />

      {/* ── Section Label ── */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block text-xs text-yellow-500 tracking-[0.3em] uppercase font-medium mb-4">
          Career Path
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600">
            Experience
          </span>
        </h2>
      </motion.div>

      {/* ── Timeline ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <VerticalTimeline
          lineColor="rgba(255,255,255,0.04)"
          animate={true}
        >
          {experiencesData.map((experience, index) => (
            <ExperienceCard
              key={index}
              index={index}
              title={experience.title}
              location={experience.location}
              description={experience.description}
              icon={experience.icon}
              date={experience.date}
            />
          ))}
        </VerticalTimeline>
      </motion.div>

      {/* ── Custom Timeline Overrides ── */}
      <style jsx global>{`
        .vertical-timeline::before {
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(234, 179, 8, 0.1) 15%,
            rgba(234, 179, 8, 0.1) 85%,
            transparent
          ) !important;
          width: 2px !important;
        }

        .vertical-timeline-element-date {
          color: rgba(245, 245, 240, 0.2) !important;
          font-size: 0.8rem !important;
          letter-spacing: 0.05em !important;
          font-weight: 500 !important;
        }

        .vertical-timeline-element-content .bounce-in {
          animation: timeline-fade 0.6s cubic-bezier(0.25, 0.4, 0.25, 1) !important;
        }

        @keyframes timeline-fade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .vertical-timeline-element-content:hover {
          border-color: rgba(234, 179, 8, 0.12) !important;
          background: rgba(255, 255, 255, 0.03) !important;
          transition: all 0.4s ease;
        }

        .vertical-timeline-element-icon {
          transition: box-shadow 0.4s ease !important;
        }

        .vertical-timeline-element:hover .vertical-timeline-element-icon {
          box-shadow: 0 0 0 4px rgba(234, 179, 8, 0.2),
            0 4px 25px rgba(234, 179, 8, 0.3) !important;
        }
      `}</style>
    </section>
  );
};

export default Experience;
