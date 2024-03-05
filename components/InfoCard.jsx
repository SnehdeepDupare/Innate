"use client";

import { motion } from "framer-motion";

export default function InfoCard({ className, title, content, variant }) {
  return (
    <motion.div
      initial={variant}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`bg-[#b91c1c] h-[400px] w-80 rounded-xl flex items-center justify-center text-center rounded-tl-[20%] rounded-br-[20%] mx-10 ${className} relative overflow-hidden group cursor-pointer`}
    >
      <h1 className="font-bold text-3xl text-white group-hover:hidden">
        {title}
      </h1>

      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute p-5 h-full items-center hidden group-hover:flex z-[5]"
      >
        {content}
      </motion.div>

      <div className="absolute top-0 right-0 bg-[#e0ccc7] h-20 w-20 rounded-bl-full group-hover:h-full group-hover:w-full group-hover:rounded-none z-[4] transition-all ease-in-out duration-300" />
      <div className="absolute bottom-0 left-0 bg-[#e0ccc7] h-20 w-20 rounded-tr-full" />
    </motion.div>
  );
}
