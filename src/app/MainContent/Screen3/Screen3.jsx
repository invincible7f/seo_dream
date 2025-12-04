"use client";
import Image from "next/image";
import AboutUs from "./AboutUs";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Screen3() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const initialAnimation = {
    hidden: { scale: 0.95, x: -200, opacity: 0 },
    visible: { scale: 1, x: 0, opacity: 1 },
  };

  const ImageBlock = (
    <div className="relative w-[295px] xl:w-[591px] h-auto lg:w-[411px] lg:h-auto aspect-square sm:w-[311px]">
      <Image
        src="/about-left-image.png"
        fill
        alt="number 1"
        loading="lazy"
        sizes="(max-width: 768px) 100vw,  (max-width: 1200px) 50vw, 43vw"
      />
    </div>
  );

  return (
    <div className="w-full h-auto pt-20 2xl:pt-0">
      <div className="flex flex-col gap-20 justify-center items-center pl-5 pr-5 xl:pl-[300px] xl:pr-[300px] lg:flex-row lg:gap-24 sm:flex-col sm:pl-[100px] sm:pr-[100px]">
        {mounted ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            variants={initialAnimation}
            viewport={{ once: true, amount: 0.3 }}
          >
            {ImageBlock}
          </motion.div>
        ) : (
          ImageBlock
        )}
        <AboutUs />
      </div>
    </div>
  );
}
