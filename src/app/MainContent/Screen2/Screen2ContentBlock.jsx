"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Screen2ContentBlock({
  imageTop,
  titleImage,
  title,
  text,
  index,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const animVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  const Content = (
    <div className="relative flex justify-center items-center ">
      <div className="absolute z-10 w-[110px] h-[69px] -top-8 transform transition-transform duration-300 group-hover:scale-110">
        <div className="absolute w-full h-full flex justify-center items-center z-10 text-white font-semibold text-3xl">
          <span className="z-20">{index + 1}</span>
          {imageTop}
        </div>
      </div>
      <section className="flex flex-col justify-center items-center w-full mt-14 gap-8 pt-3">
        <div className="relative w-[63px] h-[63px] transform transition-all duration-300 group-hover:scale-105">
          {!isHovered ? (
            titleImage
          ) : (
            <Image
              src={"/images/features-icon-0" + (index + 1) + ".png"}
              fill
              alt="image"
            />
          )}
        </div>
        <h3 className="text-xl xl:text-[18px] 2xl:text-xl text-slate-800 font-bold group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <hr className="w-1/3 border-t border-[#34cbc2] group-hover:border-white transition-colors duration-300" />
        <p className="text-slate-500 text-center px-8 group-hover:text-white transition-colors duration-300">
          {text}
        </p>
      </section>
    </div>
  );

  return mounted ? (
    <motion.div
      className="w-full max-w-[306px] h-auto flex flex-col rounded-4xl cursor-pointer group overflow-visible hover:bg-gradient-to-r from-[#34cbc2] to-[#0d94c3] sm:w-[548px] sm:h-auto pb-7 lg:w-[306px]"
      initial="hidden"
      whileInView="visible"
      variants={animVariants}
      custom={index}
      viewport={{ once: true, amount: 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {Content}
    </motion.div>
  ) : (
    <div className="w-full max-w-[306px] h-auto flex flex-col rounded-4xl cursor-pointer group overflow-visible hover:bg-gradient-to-r from-[#34cbc2] to-[#0d94c3] sm:w-[548px] sm:h-auto pb-12 lg:w-[306px]">
      {Content}
    </div>
  );
}
