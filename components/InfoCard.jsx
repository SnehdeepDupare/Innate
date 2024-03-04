"use client";

import { motion } from "framer-motion";

export default function InfoCard({ className, title, content, variant }) {
  return (
    <motion.div
      initial={variant}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`bg-[#b91c1c] h-[400px] w-80 rounded-xl flex items-center justify-center text-center rounded-tl-[20%] rounded-br-[20%] mx-10 ${className} relative overflow-hidden`}
    >
      <h1 className="font-bold text-3xl text-white">{title}</h1>

      <motion.div
        animate={{
          scale: [1.2, 1, 0, 1.2],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          //   repeatDelay: 1,
        }}
        className="absolute p-5 h-full bg-white"
      >
        {content}
      </motion.div>
    </motion.div>
  );
}
