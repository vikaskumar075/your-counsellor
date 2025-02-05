import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover px-4 overflow-hidden w-full"
      style={{ backgroundImage: "url('/img1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  w-full bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-white text-center w-full">
        
        {/* Animated Heading */}
        <motion.h1
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-6xl font-bold"
        >
          Your Counselor
        </motion.h1>

        {/* Expanding Box for Quote */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
          className="mt-4 bg-white text-black px-6 py-3 rounded-md shadow-lg origin-left inline-block"
        >
          {/* Text appears only after the box is fully expanded */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-lg font-semibold"
          >
            Because Every Choice Matters!
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
