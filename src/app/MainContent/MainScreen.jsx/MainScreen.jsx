"use client";

import Image from "next/image";
import ContainerInfo from "./ContainerInfo";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MainScreen() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const animationVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1, duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <div className="max-w-full h-auto lg:w-screen sm:w-[1855px] flex flex-col mt-[100px] bg-white lg:h-[811px] sm:h-[1300px]">
      <div className="relative lg:max-w-full lg:w-full flex justify-between sm:w-full">
        {mounted && (
          <motion.div
            className="relative w-[212px] h-[653px] lg:ml-0 lg:mt-0"
            initial="hidden"
            whileInView="visible"
            variants={animationVariant}
            viewport={{ once: true }}
          >
            <Image
              src="/images/banner-dec-left.png"
              fill
              alt="image"
              priority={true}
            />
          </motion.div>
        )}

        <ContainerInfo />

        {mounted && (
          <motion.div
            className="absolute top-[720px] -translate-x-[615px] scale-50 w-[593px] h-[533px] z-10 sm:top-[720px] sm:-translate-x-[920px] sm:scale-100 lg:top-[120px] xl:scale-90 lg:hidden xl:block xl:-translate-x-40 2xl:translate-x-0 2xl:scale-100 md:ml-[100px] lg:ml-0"
            initial={{ opacity: 0, x: 1500 }}
            animate={{ opacity: 1, x: 1030 }}
            transition={{ delay: 1.3, duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/banner-right-image.png"
              fill
              alt="image"
              priority={true}
            />
          </motion.div>
        )}

        {mounted && (
          <motion.div
            className="hidden sm:hidden lg:block relative lg:w-full xl:w-[1159px] h-[787px] overflow-hidden"
            initial="hidden"
            whileInView="visible"
            variants={animationVariant}
            viewport={{ once: true }}
          >
            <Image
              src="/images/banner-dec-right.png"
              fill
              alt="image"
              sizes="100vw"
              priority={true}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
