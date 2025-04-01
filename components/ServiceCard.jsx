import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "@/lib/data";

// Motion utility function for animations
const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 0.75) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
      },
    },
  };
};

const ServiceCard = () => (
  <div className="flex flex-col md:flex-row md:items-center md:justify-center flex-wrap gap-10 mt-10">
    {services.map((service, index) => (
      <Tilt className="w-full md:w-[30%]" key={index}>
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className="w-full bg-gradient-to-t from-yellow-500 to-cyan-300 p-[1px] rounded-[20px] shadow-lg"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="rounded-[20px] py-5 px-6 md:min-h-[280px] flex flex-col justify-evenly items-center"
          >
            {/* Render Icon Component Directly */}
            <div className="text-black text-5xl md:text-8xl lg:text-7xl">
              {service.icon}
            </div>

            <h3 className="text-black text-lg md:text-xl font-bold text-center">
              {service.title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    ))}
  </div>
);

export default ServiceCard;
