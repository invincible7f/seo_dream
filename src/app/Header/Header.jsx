"use client";

import Image from "next/image";
import Navigation from "./Navigation";
import Button from "./Button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <motion.header
      className="w-full h-24 pr-2.5 pl-2.5 fixed z-50 bg-[#34cbc2] top-0 2xl:pr-[300px] 2xl:pl-[300px] xl:pr-[100px] xl:pl-[100px] lg:pl-[50px] lg:pr-[50px] lg:h-[100px] sm:pl-[50px] sm:pr-[50px] sm:h-24"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative flex justify-between h-full lg:w-full lg:h-[100px] lg:flex lg:items-center lg:justify-between sm:flex sm:items-center sm:justify-between sm:h-24">
        <div className="flex items-center gap-2 cursor-default">
          <h1 className="text-[25px] font-extrabold text-slate-100 sm:text-[29px] xl:text-[29px]">
            SEO Dream
          </h1>

          <div className="relative w-[30px] h-[30px]">
            <Image
              className="object-contain"
              src="/images/logo-icon.png"
              fill
              alt="image"
              sizes="(max-width: 768px) 100vw,  (max-width: 1200px) 50vw, 43vw"
              priority={true}
            />
          </div>
        </div>
        <div className="flex items-center gap-16">
          <Navigation />
          <div className="hidden xl:block">
            <Button
              colorBack="bg-white"
              colorFront="bg-[#4972ca]"
              text={"Get Your Quote"}
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
